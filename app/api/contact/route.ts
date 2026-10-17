import { EMAIL } from "@/lib/site";
import { CONTACT_REASONS, isContactReason } from "@/lib/contact";

export const runtime = "nodejs";

const MAX_REQUEST_SIZE = 16_000;
const MAX_COMPANY_LENGTH = 120;

type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  reason: string[];
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function jsonError(error: string, status: number) {
  return Response.json({ error }, { status });
}

function parseSubmission(value: unknown): ContactSubmission | null {
  if (!isRecord(value)) {
    return null;
  }

  const { name, email, company, reason, message, website } = value;
  if (
    typeof website === "string" &&
    website.trim().length > 0
  ) {
    return null;
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    (company !== undefined && typeof company !== "string") ||
    !Array.isArray(reason)
  ) {
    return null;
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanCompany = typeof company === "string" ? company.trim() : "";
  const cleanMessage = message.trim();
  const validReasons = reason.filter(isContactReason);

  if (
    cleanName.length < 1 ||
    cleanName.length > 100 ||
    cleanEmail.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
    cleanCompany.length > MAX_COMPANY_LENGTH ||
    cleanMessage.length < 10 ||
    cleanMessage.length > 5000 ||
    validReasons.length === 0 ||
    validReasons.length !== reason.length ||
    new Set(validReasons).size !== validReasons.length
  ) {
    return null;
  }

  return {
    name: cleanName,
    email: cleanEmail,
    company: cleanCompany,
    reason: validReasons,
    message: cleanMessage,
  };
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return jsonError("This form can only be submitted from the Kayven website.", 403);
      }
    } catch {
      return jsonError("The request origin is invalid.", 403);
    }
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonError("The request must use JSON.", 415);
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_SIZE) {
    return jsonError("Your message is too large. Please shorten it and try again.", 413);
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_REQUEST_SIZE) {
      return jsonError("Your message is too large. Please shorten it and try again.", 413);
    }
    payload = JSON.parse(body);
  } catch {
    return jsonError("The form submission could not be read. Please try again.", 400);
  }

  const submission = parseSubmission(payload);
  if (!submission) {
    return jsonError(
      "Please check your details, choose a topic, and add a message of at least 10 characters.",
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    console.error(
      "Contact form delivery is not configured: RESEND_API_KEY and CONTACT_FROM_EMAIL are required.",
    );
    return jsonError(
      "The contact form is temporarily unavailable. Please email us directly.",
      503,
    );
  }

  const reasonLabels = CONTACT_REASONS
    .filter((reason) => submission.reason.includes(reason.id))
    .map((reason) => reason.label);
  const subjectName = submission.name.replace(/[\r\n]+/g, " ");
  const subject = `[${reasonLabels.join(", ")}] ${subjectName}`;
  const text = [
    "New contact form enquiry from kayven.in",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company || "Not provided"}`,
    `Topic: ${reasonLabels.join(", ")}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Kayven Website <${fromEmail}>`,
        to: [EMAIL],
        reply_to: submission.email,
        subject,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`Contact email delivery was rejected by Resend (HTTP ${response.status}).`);
      return jsonError(
        "We couldn't send your message just now. Please try again or email us directly.",
        502,
      );
    }
  } catch (error) {
    console.error(
      "Contact email delivery failed:",
      error instanceof Error ? error.message : "Unknown network error",
    );
    return jsonError(
      "We couldn't send your message just now. Please try again or email us directly.",
      502,
    );
  }

  return Response.json({ ok: true }, { status: 201 });
}
