const RESEND_ENDPOINT = "https://api.resend.com/emails";

type FieldName = "name" | "email" | "website" | "goal" | "timeline";
type FieldErrors = Partial<Record<FieldName, string>>;

type Lead = Record<FieldName, string>;

const fieldLabels: Record<FieldName, string> = {
  name: "Name",
  email: "Email",
  website: "Business or current website",
  goal: "What the site needs to help sell",
  timeline: "Ideal launch window",
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

function renderText(lead: Lead) {
  return (Object.keys(fieldLabels) as FieldName[])
    .map((key) => `${fieldLabels[key]}: ${lead[key] || "Not supplied"}`)
    .join("\n");
}

function renderHtml(lead: Lead) {
  const rows = (Object.keys(fieldLabels) as FieldName[])
    .map(
      (key) => `
        <tr>
          <td style="padding:12px 16px;border:1px solid #e0e1dd;color:#415a77;">${fieldLabels[key]}</td>
          <td style="padding:12px 16px;border:1px solid #e0e1dd;color:#0d1b2a;">${escapeHtml(lead[key] || "Not supplied").replace(/\n/g, "<br />")}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0d1b2a;line-height:1.5;">
      <h1 style="font-size:22px;margin:0 0 16px;">New Counterform enquiry</h1>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">${rows}</table>
    </div>`;
}

export async function POST(request: Request) {
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
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New Counterform enquiry from ${lead.name}`,
        html: renderHtml(lead),
        text: renderText(lead),
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
