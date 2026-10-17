import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import EmailIcon from "../components/EmailIcon";
import InstagramIcon from "../components/InstagramIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import XIcon from "../components/XIcon";
import { isContactReason } from "@/lib/contact";
import { EMAIL, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Kayven",
  description: "Have a question or an idea? Send a message to the Kayven team.",
};

type ContactPageProps = {
  searchParams: Promise<{ reason?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const requestedReasons = Array.isArray(params.reason)
    ? params.reason
    : params.reason
      ? [params.reason]
      : [];
  const initialReasons = [...new Set(requestedReasons.filter(isContactReason))];

  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#18211d]">
      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 -top-24 h-80 w-80 rounded-full bg-[#dfe9df] blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-16 lg:pt-24">
          <p className="lbl mb-5 flex items-center gap-3 text-[#52725f]">
            <span aria-hidden="true" className="h-px w-8 bg-[#52725f]" />
            Contact Kayven
          </p>
          <h1 className="max-w-4xl text-[clamp(3rem,8vw,6rem)] leading-[0.98] text-[#17221d]">
            Let&apos;s make a healthier future,{" "}
            <span className="text-[#52725f]">together.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#56615a] sm:text-xl">
            Have a question, an idea, or a partnership in mind? Leave us a note
            and the Kayven team will be in touch.
          </p>
        </div>
      </section>

      <section
        aria-label="Contact Kayven"
        className="relative pb-20 sm:pb-24"
      >
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 lg:px-12">
          <aside className="flex flex-col justify-between rounded-[1.75rem] bg-[#193d34] p-7 text-white sm:p-9 lg:p-10">
            <div>
              <p className="lbl text-[#c3d7c9]">We&apos;re listening</p>
              <h2 className="mt-5 max-w-sm text-3xl leading-tight text-white sm:text-4xl">
                Good things start with a conversation.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-[#e0e9e2]">
                Whether you&apos;re exploring Kayven, sharing feedback, or
                looking to work together, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="mt-10 border-t border-white/20 pt-7">
              <p className="lbl mb-3 text-[#c3d7c9]">Prefer email?</p>
              <a
                className="inline-flex min-h-11 max-w-full items-center gap-3 text-lg font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                href={`mailto:${EMAIL}`}
              >
                <span aria-hidden="true" className="shrink-0">
                  <EmailIcon className="h-5 w-5" />
                </span>
                <span className="break-all">{EMAIL}</span>
              </a>

              <div className="mt-8">
                <p className="lbl mb-3 text-[#c3d7c9]">Follow along</p>
                <nav aria-label="Kayven social media" className="flex flex-wrap gap-3">
                  <a
                    aria-label="Kayven on LinkedIn (opens in a new tab)"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white hover:text-[#193d34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href={socials.company.linkedIn}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <span aria-hidden="true">
                      <LinkedInIcon className="h-5 w-5" />
                    </span>
                  </a>
                  <a
                    aria-label="Kayven on Instagram (opens in a new tab)"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white hover:text-[#193d34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href={socials.company.instagram}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Instagram"
                  >
                    <span aria-hidden="true">
                      <InstagramIcon className="h-5 w-5" />
                    </span>
                  </a>
                  <a
                    aria-label="Kayven on X (opens in a new tab)"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white hover:text-[#193d34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href={socials.company.x}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="X"
                  >
                    <span aria-hidden="true">
                      <XIcon className="h-5 w-5" />
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </aside>

          <ContactForm initialReasons={initialReasons} />
        </div>
      </section>
    </main>
  );
}
