"use client";

import { track } from "@vercel/analytics";
import { type FormEvent, useEffect, useRef, useState } from "react";

type FieldName = "name" | "email" | "website" | "goal" | "timeline";
type ContactStatus = "idle" | "submitting" | "success" | "error";

type ContactResponse = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

const initialResponse: ContactResponse = {
  ok: false,
  message: "",
};

function createSubmissionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `contact-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function isContactResponse(value: unknown): value is ContactResponse {
  if (!value || typeof value !== "object") return false;
  const response = value as Partial<ContactResponse>;
  return typeof response.ok === "boolean" && typeof response.message === "string";
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const pagePathRef = useRef<HTMLInputElement>(null);
  const referrerRef = useRef<HTMLInputElement>(null);
  const submissionIdRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [response, setResponse] = useState<ContactResponse>(initialResponse);

  useEffect(() => {
    if (pagePathRef.current) pagePathRef.current.value = `${window.location.pathname}${window.location.search}`;
    if (referrerRef.current) referrerRef.current.value = document.referrer;
    if (submissionIdRef.current) submissionIdRef.current.value = createSubmissionId();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setResponse(initialResponse);
    const pagePath = pagePathRef.current?.value || "unknown";

    track("contact_form_submit_attempt", { pagePath });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const payload: unknown = await res.json();
      const nextResponse = isContactResponse(payload)
        ? payload
        : { ok: false, message: "Something went wrong. Please email the studio directly." };

      setResponse(nextResponse);
      setStatus(nextResponse.ok ? "success" : "error");
      track(nextResponse.ok ? "contact_form_submit_success" : "contact_form_submit_error", {
        pagePath,
        status: String(res.status),
      });

      if (nextResponse.ok) {
        formRef.current?.reset();
        if (pagePathRef.current) pagePathRef.current.value = pagePath;
        if (referrerRef.current) referrerRef.current.value = document.referrer;
        if (submissionIdRef.current) submissionIdRef.current.value = createSubmissionId();
      }
    } catch {
      setResponse({
        ok: false,
        message: "The form could not send just now. Please email hello@counterform.studio directly.",
      });
      setStatus("error");
      track("contact_form_submit_error", {
        pagePath,
        status: "network_error",
      });
    }
  };

  return (
    <form className="arches-contact-form reveal" ref={formRef} onSubmit={handleSubmit}>
      <label className="arches-honeypot">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <input type="hidden" name="pagePath" ref={pagePathRef} />
      <input type="hidden" name="referrer" ref={referrerRef} />
      <input type="hidden" name="submissionId" ref={submissionIdRef} />
      <label>
        Name
        <input
          aria-invalid={Boolean(response.fieldErrors?.name)}
          aria-describedby={response.fieldErrors?.name ? "contact-name-error" : undefined}
          name="name"
          placeholder="Your name"
          required
        />
        {response.fieldErrors?.name ? <span id="contact-name-error">{response.fieldErrors.name}</span> : null}
      </label>
      <label>
        Email
        <input
          aria-invalid={Boolean(response.fieldErrors?.email)}
          aria-describedby={response.fieldErrors?.email ? "contact-email-error" : undefined}
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
        {response.fieldErrors?.email ? <span id="contact-email-error">{response.fieldErrors.email}</span> : null}
      </label>
      <label>
        Business or current website
        <input
          aria-invalid={Boolean(response.fieldErrors?.website)}
          aria-describedby={response.fieldErrors?.website ? "contact-website-error" : undefined}
          name="website"
          placeholder="Business name or current URL"
        />
        {response.fieldErrors?.website ? <span id="contact-website-error">{response.fieldErrors.website}</span> : null}
      </label>
      <label>
        What should the site help you sell?
        <textarea
          aria-invalid={Boolean(response.fieldErrors?.goal)}
          aria-describedby={response.fieldErrors?.goal ? "contact-goal-error" : undefined}
          name="goal"
          placeholder="Tell us the offer, audience, and the enquiries you want more of."
          required
          rows={6}
        />
        {response.fieldErrors?.goal ? <span id="contact-goal-error">{response.fieldErrors.goal}</span> : null}
      </label>
      <label>
        Ideal launch window
        <input
          aria-invalid={Boolean(response.fieldErrors?.timeline)}
          aria-describedby={response.fieldErrors?.timeline ? "contact-timeline-error" : undefined}
          name="timeline"
          placeholder="This month, next quarter, or no fixed date"
        />
        {response.fieldErrors?.timeline ? (
          <span id="contact-timeline-error">{response.fieldErrors.timeline}</span>
        ) : null}
      </label>
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request review"}
      </button>
      <p className={`arches-contact-status arches-contact-status--${status}`} aria-live="polite">
        {response.message}
      </p>
    </form>
  );
}
