import PageHero from "./components/PageHero";
import CtaBand from "./components/CtaBand";
import Sec from "./components/Sec";
import { SITE_URL } from "@/lib/site";

// Metadata for the 404 page
export const metadata = {
  title: "Page not found – Kayven",
  description: "The page you’re looking for doesn’t exist."
};

export default function NotFoundPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="404"
        headline="Page not found"
        intro="We couldn’t find the page you’re looking for."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Sec
            id="not-found"
            n=""
            label="NOT FOUND"
            title="Oh no!"
          >
            <p className="mb-6">
              The page you’re looking for doesn’t exist or has been moved.
            </p>
            <div className="space-y-4">
              <a
                href={SITE_URL}
                className="btn-secondary w-full max-w-xs px-6 py-3"
              >
                Return to Home
              </a>
              <a
                href="/contact"
                className="btn-secondary w-full max-w-xs px-6 py-3"
              >
                Contact us
              </a>
            </div>
          </Sec>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}