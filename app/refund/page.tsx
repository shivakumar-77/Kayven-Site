import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";

// Metadata for the refund page
export const metadata = {
  title: "Refund Policy, Kayven",
  description: "Kayven's refund policy."
};

export default function RefundPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Refund"
        headline="Refund Policy, Kayven"
        intro="Learn about our refund policy."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Sec
            id="refund-policy"
            n=""
            label="REFUND POLICY"
            title="Refund Policy"
          >
            <p className="mb-6">
              To request a refund, email <a href="mailto:shiva@kayven.in" className="underline">shiva@kayven.in</a> from the address on your account.
            </p>
            <p className="mb-6">Our refund policy allows returns within 30 days of purchase. Items must be unused, in original packaging, and with proof of purchase. To initiate a refund, please email shiva@kayven.in from the address on your account. Refunds are processed within 5-7 business days after we receive the returned item. Certain items, such as personalized products, are non-refundable.</p>
          </Sec>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}