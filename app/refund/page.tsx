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
            {/* TODO(policy): Add real refund window and conditions */}
          </Sec>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}