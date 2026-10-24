import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";

// Metadata for the refund page
export const metadata = {
  title: "Billing Support, Kayven",
  description: "Contact Kayven about subscription, payment, cancellation, or refund questions."
};

export default function RefundPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Billing support"
        headline="Refund and cancellation enquiries"
        intro="Contact Kayven for help with a subscription, payment, cancellation, or refund question."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Sec
            id="refund-policy"
            n=""
            label="BILLING SUPPORT"
            title="Subscription and billing support"
          >
            <p className="mb-6">
              This website does not sell physical goods. For help with a Kayven
              subscription or payment, email{" "}
              <a href="mailto:shiva@kayven.in" className="underline">shiva@kayven.in</a>
              {" "}from the email address associated with your purchase.
            </p>
            <p className="mb-6">
              Include the plan name, purchase date, and a brief description of
              the issue. Refund eligibility and cancellation terms depend on
              the terms shown when you purchased and the requirements that
              apply to your purchase. Please review those terms and contact us
              if you need help.
            </p>
            <p className="mb-6">
              This page does not promise a universal refund outcome or
              processing time. Any rights available under applicable law are
              not limited by this support information.
            </p>
          </Sec>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}