import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import ContactForm from "../components/ContactForm";
import EmailIcon from "../components/EmailIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import InstagramIcon from "../components/InstagramIcon";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";

// Metadata for the contact page
export const metadata = {
  title: "Contact Kayven",
  description: "Get in touch with the Kayven team."
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] }> }) {
  const params = await searchParams;
  const initialReason = params && params.reason ? (Array.isArray(params.reason) ? params.reason[0] : params.reason) : "";

  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Contact"
        headline="Let's build the future of personal health."
        intro="Get in touch with the Kayven team."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Categories */}
              <div className="space-y-4">
                <p className="font-semibold mb-2">Reason for contacting</p>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Categories are defined in ContactForm component */}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <p className="font-semibold mb-2">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center space-x-2 text-black hover:underline"
                >
                  <EmailIcon className="w-5 h-5" />
                  <span>{EMAIL}</span>
                </a>
              </div>

              {/* Company Social Links */}
              <div className="space-y-2">
                <p className="font-semibold mb-2">Follow Kayven</p>
                <div className="flex space-x-4">
                  <a
                    href={socials.company.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Opens Kayven's LinkedIn in a new tab"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={socials.company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Opens Kayven's Instagram in a new tab"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={socials.company.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Opens Kayven's X (Twitter) in a new tab"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    {/* We don't have an X icon component, but we can use a placeholder or just text. For now, we'll use text. */}
                    <span className="flex items-center space-x-2">
                      {/* We'll use an X icon if we have one, but we don't. Let's just use text for now. */}
                      X
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <ContactForm initialReason={initialReason} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}