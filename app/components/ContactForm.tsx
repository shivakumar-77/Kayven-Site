"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_REASONS, type ContactReason } from "@/lib/contact";
import { EMAIL } from "@/lib/site";

interface ContactFormProps {
  initialReasons?: ContactReason[];
}

type FormState = {
  name: string;
  email: string;
  company: string;
  reason: ContactReason[];
  message: string;
  website: string;
};

type FormErrors = Partial<Record<"name" | "email" | "reason" | "message", string>>;

const inputClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-[#d8dfd9] bg-white px-4 py-3 text-base text-[#18211d] placeholder:text-[#737d77] transition-colors focus:border-[#315d4e] focus:outline-none focus:ring-2 focus:ring-[#315d4e]/20";

export default function ContactForm({ initialReasons = [] }: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    reason: initialReasons,
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showErrorSummary, setShowErrorSummary] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showErrorSummary) {
      errorSummaryRef.current?.focus();
    }
  }, [showErrorSummary]);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length > 100) {
      nextErrors.name = "Your name must be 100 characters or fewer.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      formData.email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (formData.reason.length === 0) {
      nextErrors.reason = "Choose at least one topic.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please add a message.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Please add a little more detail (at least 10 characters).";
    } else if (formData.message.length > 5000) {
      nextErrors.message = "Your message must be 5,000 characters or fewer.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (
    field: "name" | "email" | "company" | "message",
    value: string,
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
    setSubmitError("");
    setShowErrorSummary(false);
    if (field === "name" || field === "email" || field === "message") {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const toggleReason = (reason: ContactReason) => {
    setFormData((current) => ({
      ...current,
      reason: current.reason.includes(reason)
        ? current.reason.filter((selected) => selected !== reason)
        : [...current.reason, reason],
    }));
    setSubmitted(false);
    setSubmitError("");
    setShowErrorSummary(false);
    setErrors((current) => ({ ...current, reason: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitted(false);

    if (!validate()) {
      setShowErrorSummary(true);
      return;
    }

    setShowErrorSummary(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result: unknown = await response.json();
      const message =
        typeof result === "object" &&
        result !== null &&
        "error" in result &&
        typeof result.error === "string"
          ? result.error
          : "We couldn't send your message. Please email us directly.";

      if (!response.ok) {
        setSubmitError(message);
        return;
      }

      setFormData((current) => ({
        ...current,
        name: "",
        email: "",
        company: "",
        message: "",
        website: "",
      }));
      setErrors({});
      setSubmitted(true);
    } catch {
      setSubmitError(
        "We couldn't connect to send your message. Please try again or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[1.75rem] border border-[#e2e7e2] bg-white p-6 shadow-[0_22px_70px_-48px_rgba(18,43,34,0.35)] sm:p-8 lg:p-10"
    >
      <div className="mb-8">
        <p className="lbl mb-3 text-[#52725f]">Your message</p>
        <h2 className="text-3xl text-[#17221d] sm:text-4xl">Send us a note</h2>
        <p className="mt-4 text-base leading-7 text-[#56615a]">
          Tell us what you have in mind and we&apos;ll get back to you by email.
        </p>
      </div>

      {showErrorSummary && Object.keys(errors).length > 0 && (
        <div
          aria-labelledby="contact-error-heading"
          className="mb-6 rounded-xl border border-[#e6c4bd] bg-[#fff5f2] p-4 text-sm text-[#7c3026]"
          ref={errorSummaryRef}
          role="alert"
          tabIndex={-1}
        >
          <p className="font-semibold" id="contact-error-heading">
            Please check these details:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            {Object.entries(errors).map(([field, error]) => {
              const fieldId =
                field === "reason" ? "contact-reasons" : `contact-${field}`;

              return (
                <li key={field}>
                  <a className="underline underline-offset-2" href={`#${fieldId}`}>
                    {error}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-[#202a24]">
            Your name <span aria-hidden="true" className="text-[#a13f32]">*</span>
          </label>
          <input
            autoComplete="name"
            className={inputClassName}
            id="contact-name"
            maxLength={100}
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            required
            value={formData.name}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-[#a13f32]" id="contact-name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-[#202a24]">
            Email address <span aria-hidden="true" className="text-[#a13f32]">*</span>
          </label>
          <input
            autoComplete="email"
            className={inputClassName}
            id="contact-email"
            maxLength={254}
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            required
            type="email"
            value={formData.email}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-[#a13f32]" id="contact-email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-company" className="text-sm font-semibold text-[#202a24]">
            Company <span className="font-normal text-[#737d77]">(optional)</span>
          </label>
          <input
            autoComplete="organization"
            className={inputClassName}
            id="contact-company"
            maxLength={120}
            name="company"
            onChange={(event) => updateField("company", event.target.value)}
            value={formData.company}
          />
        </div>

        <fieldset
          aria-describedby={errors.reason ? "contact-reason-error" : undefined}
          aria-invalid={Boolean(errors.reason)}
          className="sm:col-span-2"
          id="contact-reasons"
        >
          <legend className="text-sm font-semibold text-[#202a24]">
            What would you like to talk about?{" "}
            <span aria-hidden="true" className="text-[#a13f32]">*</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {CONTACT_REASONS.map((reason) => {
              const checked = formData.reason.includes(reason.id);

              return (
                <label
                  key={reason.id}
                  className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                    checked
                      ? "border-[#315d4e] bg-[#e8f0e9] text-[#234838]"
                      : "border-[#d8dfd9] bg-white text-[#39443d] hover:border-[#789180]"
                  }`}
                >
                  <input
                    checked={checked}
                    className="h-4 w-4 accent-[#315d4e]"
                    onChange={() => toggleReason(reason.id)}
                    type="checkbox"
                  />
                  {reason.label}
                </label>
              );
            })}
          </div>
          {errors.reason && (
            <p className="mt-2 text-sm text-[#a13f32]" id="contact-reason-error">
              {errors.reason}
            </p>
          )}
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-[#202a24]">
            Your message <span aria-hidden="true" className="text-[#a13f32]">*</span>
          </label>
          <textarea
            className={`${inputClassName} min-h-36 resize-y`}
            id="contact-message"
            maxLength={5000}
            name="message"
            onChange={(event) => updateField("message", event.target.value)}
            aria-describedby={errors.message ? "contact-message-error" : "contact-message-hint"}
            aria-invalid={Boolean(errors.message)}
            required
            value={formData.message}
          />
          {errors.message ? (
            <p className="mt-2 text-sm text-[#a13f32]" id="contact-message-error">
              {errors.message}
            </p>
          ) : (
            <p className="mt-2 text-sm text-[#737d77]" id="contact-message-hint">
              A little context helps us get back to you with a useful answer.
            </p>
          )}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          onChange={(event) =>
            setFormData((current) => ({ ...current, website: event.target.value }))
          }
          tabIndex={-1}
          value={formData.website}
        />
      </div>

      <div className="mt-7">
        <button
          aria-busy={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#193d34] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#285447] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315d4e] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending your message…" : "Send message"}
          {!isSubmitting && (
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M3.5 10h12m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>
        <p className="mt-3 text-sm text-[#737d77]">
          Your details are only used to respond to your enquiry.
        </p>
      </div>

      <div aria-live="polite" className="mt-5" role="status">
        {submitted && (
          <p className="rounded-xl border border-[#b8d5c0] bg-[#eff7f0] px-4 py-3 text-sm leading-6 text-[#234838]">
            Thanks — your message has been sent to the Kayven team.
          </p>
        )}
      </div>
      {submitError && (
        <div
          className="mt-5 rounded-xl border border-[#e6c4bd] bg-[#fff5f2] px-4 py-3 text-sm leading-6 text-[#7c3026]"
          role="alert"
        >
          <p>{submitError}</p>
          <a className="mt-1 inline-block font-semibold underline" href={`mailto:${EMAIL}`}>
            Email us directly at {EMAIL}
          </a>
        </div>
      )}
    </form>
  );
}
