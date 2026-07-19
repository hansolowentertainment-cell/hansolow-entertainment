"use client";

import { useState, FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";
import { CONTACT } from "@/config/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const errors: Record<string, string> = {};
    const required = ["name", "email", "projectType", "message", "consent"];
    for (const field of required) {
      const value = formData.get(field);
      if (!value || (typeof value === "string" && value.trim() === "")) {
        errors[field] = field === "consent" ? dict.form.consentError : dict.form.requiredError;
      }
    }
    const email = String(formData.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = dict.form.emailError;
    }
    return errors;
  }

  function buildMailtoFallback(formData: FormData): string {
    const lines = [
      `${dict.form.name}: ${formData.get("name") ?? ""}`,
      `${dict.form.company}: ${formData.get("company") ?? ""}`,
      `${dict.form.email}: ${formData.get("email") ?? ""}`,
      `${dict.form.phone}: ${formData.get("phone") ?? ""}`,
      `${dict.form.projectType}: ${formData.get("projectType") ?? ""}`,
      `${dict.form.location}: ${formData.get("location") ?? ""}`,
      `${dict.form.country}: ${formData.get("country") ?? ""}`,
      `${dict.form.period}: ${formData.get("period") ?? ""}`,
      `${dict.form.duration}: ${formData.get("duration") ?? ""}`,
      `${dict.form.scope}: ${formData.get("scope") ?? ""}`,
      "",
      `${dict.form.message}:`,
      String(formData.get("message") ?? ""),
    ];
    const subject = encodeURIComponent(`${dict.form.projectType}: ${formData.get("name") ?? ""}`);
    const body = encodeURIComponent(lines.join("\n"));
    return `${CONTACT.emailHref}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: bots tend to fill every field, humans never see or fill this one.
    if (String(formData.get("company_website") ?? "").length > 0) {
      setStatus("success");
      return;
    }

    const errors = validate(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      window.location.href = buildMailtoFallback(formData);
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-raised p-6">
        <p className="stage-tag text-accent">{dict.form.successTitle}</p>
        <p className="mt-2 text-sm text-ink-muted">{dict.form.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field: hidden from real users, left empty by them. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Website</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={dict.form.name} name="name" required error={fieldErrors.name} />
        <Field label={dict.form.company} name="company" />
        <Field label={dict.form.email} name="email" type="email" required error={fieldErrors.email} />
        <Field label={dict.form.phoneOptional} name="phone" type="tel" />
      </div>

      <div>
        <label htmlFor="projectType" className="text-xs uppercase tracking-widest2 text-ink-muted">
          {dict.form.projectType}
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="focus-ring mt-2 w-full border border-line bg-raised px-4 py-3 text-sm text-ink"
        >
          <option value="" disabled>
            —
          </option>
          {dict.form.projectTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {fieldErrors.projectType ? <ErrorText>{fieldErrors.projectType}</ErrorText> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={dict.form.location} name="location" />
        <Field label={dict.form.country} name="country" />
        <Field label={dict.form.period} name="period" />
        <Field label={dict.form.duration} name="duration" />
      </div>

      <Field label={dict.form.scope} name="scope" />

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-ink-muted">
          {dict.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="focus-ring mt-2 w-full border border-line bg-raised px-4 py-3 text-sm text-ink"
        />
        {fieldErrors.message ? <ErrorText>{fieldErrors.message}</ErrorText> : null}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="focus-ring mt-1 h-4 w-4 shrink-0 border border-line bg-raised accent-accent"
        />
        <label htmlFor="consent" className="text-sm text-ink-muted">
          {dict.form.consent}
        </label>
      </div>
      {fieldErrors.consent ? <ErrorText>{fieldErrors.consent}</ErrorText> : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring inline-flex items-center justify-center rounded bg-accent px-6 py-3 text-sm font-medium text-recessed transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? dict.form.submitting : dict.form.submit}
      </button>

      {status === "error" ? (
        <p className="text-sm text-ink-muted">{dict.form.errorBody}</p>
      ) : null}
      <p className="text-xs text-ink-muted">{dict.form.fallbackNote}</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest2 text-ink-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="focus-ring mt-2 w-full border border-line bg-raised px-4 py-3 text-sm text-ink"
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs text-accent">{children}</p>;
}
