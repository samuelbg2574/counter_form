const RESEND_ENDPOINT = "https://api.resend.com/emails";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;

type FieldName = "name" | "email" | "website" | "goal" | "timeline";
type ContextName = "pagePath" | "referrer" | "userAgent" | "submissionId";
type FieldErrors = Partial<Record<FieldName, string>>;

type Lead = Record<FieldName, string>;
type LeadContext = Record<ContextName, string>;
type RateLimitEntry = {
  attempts: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

const fieldLabels: Record<FieldName, string> = {
  name: "Name",
  email: "Email",
  website: "Business or current website",
  goal: "What the site needs to help sell",
  timeline: "Ideal launch window",
};

const contextLabels: Record<ContextName, string> = {
  pagePath: "Page path",
  referrer: "Referrer",
  userAgent: "User agent",
  submissionId: "Submission ID",
};

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateLead(lead: Lead) {
  const errors: FieldErrors = {};

  if (!lead.name) errors.name = "Add your name.";
  if (!lead.email) errors.email = "Add your email address.";
  else if (!isEmail(lead.email)) errors.email = "Use a valid email address.";
  if (!lead.goal) errors.goal = "Tell us what the site needs to help sell.";

  return errors;
}

function hasErrors(errors: FieldErrors) {
  return Object.keys(errors).length > 0;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (
    forwardedFor ||
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim() ||
    "unknown"
  );
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      attempts: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return { allowed: true, retryAfter: 0 };
  }

  if (current.attempts >= RATE_LIMIT_MAX_ATTEMPTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.attempts += 1;
  rateLimitStore.set(key, current);

  return { allowed: true, retryAfter: 0 };
}

function createSubmissionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `contact-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function createIdempotencyKey(submissionId: string) {
  const safeSubmissionId = (submissionId || createSubmissionId())
    .replace(/[^a-zA-Z0-9._:-]/g, "-")
    .slice(0, 220);

  return `contact/${safeSubmissionId}`;
}

function renderText(lead: Lead, context: LeadContext) {
  const leadRows = (Object.keys(fieldLabels) as FieldName[])
    .map((key) => `${fieldLabels[key]}: ${lead[key] || "Not supplied"}`)
    .join("\n");

  const contextRows = (Object.keys(contextLabels) as ContextName[])
    .map((key) => `${contextLabels[key]}: ${context[key] || "Not supplied"}`)
    .join("\n");

  return `${leadRows}\n\nContext\n${contextRows}`;
}

function renderHtml(lead: Lead, context: LeadContext) {
  const rows = (Object.keys(fieldLabels) as FieldName[])
    .map(
      (key) => `
        <tr>
          <td style="padding:12px 16px;border:1px solid #e0e1dd;color:#415a77;">${fieldLabels[key]}</td>
          <td style="padding:12px 16px;border:1px solid #e0e1dd;color:#0d1b2a;">${escapeHtml(lead[key] || "Not supplied").replace(/\n/g, "<br />")}</td>
        </tr>`,
    )
    .join("");

  const contextRows = (Object.keys(contextLabels) as ContextName[])
    .map(
      (key) => `
        <tr>
          <td style="padding:12px 16px;border:1px solid #e0e1dd;color:#415a77;">${contextLabels[key]}</td>
          <td style="padding:12px 16px;border:1px solid #e0e1dd;color:#0d1b2a;">${escapeHtml(context[key] || "Not supplied").replace(/\n/g, "<br />")}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0d1b2a;line-height:1.5;">
      <h1 style="font-size:22px;margin:0 0 16px;">New Counterform enquiry</h1>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">${rows}</table>
      <h2 style="font-size:16px;margin:28px 0 12px;">Submission context</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">${contextRows}</table>
    </div>`;
}

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(getClientIp(request));

  if (!rateLimit.allowed) {
    return Response.json(
      {
        ok: false,
        message: "Too many attempts. Please wait a few minutes and try again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfter),
        },
      },
    );
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return Response.json(
      { ok: false, message: "We could not read the form. Please try again." },
      { status: 400 },
    );
  }

  if (getText(formData, "company")) {
    return Response.json({
      ok: true,
      message: "Thanks. Your enquiry has been received.",
    });
  }

  const lead: Lead = {
    name: getText(formData, "name"),
    email: getText(formData, "email"),
    website: getText(formData, "website"),
    goal: getText(formData, "goal"),
    timeline: getText(formData, "timeline"),
  };
  const context: LeadContext = {
    pagePath: getText(formData, "pagePath"),
    referrer: getText(formData, "referrer"),
    userAgent: request.headers.get("user-agent")?.trim() || "",
    submissionId: getText(formData, "submissionId"),
  };
  const fieldErrors = validateLead(lead);

  if (hasErrors(fieldErrors)) {
    return Response.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return Response.json(
      {
        ok: false,
        message: "Email is not configured yet. Please email hello@counterform.studio directly.",
      },
      { status: 503 },
    );
  }

  let resendResponse: Response;

  try {
    resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": createIdempotencyKey(context.submissionId),
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New Counterform enquiry from ${lead.name}`,
        reply_to: lead.email,
        html: renderHtml(lead, context),
        text: renderText(lead, context),
      }),
    });
  } catch {
    return Response.json(
      {
        ok: false,
        message: "The form could not send just now. Please email hello@counterform.studio directly.",
      },
      { status: 502 },
    );
  }

  if (!resendResponse.ok) {
    return Response.json(
      {
        ok: false,
        message: "The form could not send just now. Please email hello@counterform.studio directly.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message: "Thanks. Your enquiry has been sent.",
  });
}
