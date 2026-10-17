import { SITE_URL } from "@/lib/site";

// Metadata for the 404 page
export const metadata = {
  title: "Page not found – Kayven",
  description: "The page you’re looking for doesn’t exist."
};

export default function NotFoundPage() {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-5xl font-bold mb-4">404</p>
        <h1 className="text-3xl font-bold mb-6">Page not found</h1>
        <p className="mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="flex flex-col space-y-4 items-center">
          <a
            href={SITE_URL}
            className="btn-secondary w-full max-w-xs px-6 py-3"
          >
            Home
          </a>
          <a
            href="/contact"
            className="btn-secondary w-full max-w-xs px-6 py-3"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}