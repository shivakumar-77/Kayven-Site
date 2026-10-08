import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";

// Metadata for the terms page
export const metadata = {
  title: "Terms of Service, Kayven",
  description: "Kayven's terms of service."
};

export default function TermsPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Terms"
        headline="Terms of Service, Kayven"
        intro="Learn about the terms of using Kayven."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Sec
            id="terms-of-service"
            n=""
            label="TERMS OF SERVICE"
            title="Terms of Service"
          >
            <p className="mb-4">Last updated: October 2026</p>

            <h2 className="text-xl font-bold mb-4">Using Kayven</h2>
            <p className="mb-4">
              By using the Kayven platform, you agree to these terms of service.
              {/* TODO(verify): Confirm acceptance of terms */}
            </p>

            <h2 className="text-xl font-bold mb-4">Accounts</h2>
            <p className="mb-4">
              You must create an account to use certain features of Kayven.
              {/* TODO(verify): Confirm account requirements */}
            </p>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials.
              {/* TODO(verify): Confirm account security responsibilities */}
            </p>

            <h2 className="text-xl font-bold mb-4">Subscriptions and billing</h2>
            <p className="mb-4">
              Kayven offers subscription plans with recurring billing.
              {/* TODO(verify): Confirm subscription model */}
            </p>
            <p className="mb-4">
              Payments are processed by Razorpay.
              {/* TODO(verify): Confirm payment processor */}
            </p>
            <p className="mb-4">
              Subscriptions renew automatically per billing period unless cancelled.
              {/* TODO(verify): Confirm renewal and cancellation terms */}
            </p>

            <h2 className="text-xl font-bold mb-4">Health disclaimer</h2>
            <p className="mb-4">
              Kayven is a health and wellness platform. It is not intended to provide medical advice, diagnose conditions, or replace professional medical care.
              {/* TODO(verify): Confirm health disclaimer wording */}
            </p>

            <h2 className="text-xl font-bold mb-4">Limitation of liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Kayven shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
              {/* TODO(verify): Confirm limitation of liability clause */}
            </p>

            <h2 className="text-xl font-bold mb-4">Changes</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time.
              {/* TODO(verify): Confirm right to modify terms */}
            </p>
            <p className="mb-4">
              Continued use of the platform after changes constitutes acceptance.
              {/* TODO(verify): Confirm acceptance of changes */}
            </p>

            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="mb-4">
              If you have any questions about these terms, please contact us at:
              <a href="mailto:shiva@kayven.in" className="underline">shiva@kayven.in</a>
              {/* TODO(verify): Confirm contact email */}
            </p>
          </Sec>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}