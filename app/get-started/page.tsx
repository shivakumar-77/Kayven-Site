import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import GetStartedForm from "../components/GetStartedForm";
import EmailIcon from "../components/EmailIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import InstagramIcon from "../components/InstagramIcon";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";

// Metadata for the get-started page
export const metadata = {
  title: "Get Started with Kayven",
  description: "Begin your health journey with Kayven."
};

export default async function GetStartedPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] }> }) {
  const params = await searchParams;
  const initialReason = params && params.reason ? (Array.isArray(params.reason) ? params.reason[0] : params.reason) : "";

  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Get Started"
        headline="Start your journey."
        intro="Begin your health journey with Kayven."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three large buttons */}
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="btn-secondary w-full max-w-xs px-6 py-3"
              >
                Email us
              </a>
              <a
                href={socials.company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Opens Kayven's Instagram in a new tab"
                className="btn-secondary w-full max-w-xs px-6 py-3 flex items-center justify-center gap-2"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href={socials.company.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Opens Kayven's LinkedIn in a new tab"
                className="btn-secondary w-full max-w-xs px-6 py-3 flex items-center justify-center gap-2"
              >
                <LinkedInIcon className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Contact form preset to "Get started" */}
            <div className="border border-black rounded-lg p-6">
              <GetStartedForm initialReason={initialReason} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}