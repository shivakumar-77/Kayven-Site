import PageHero from "../components/PageHero";
import Sec from "../components/Sec";
import CtaBand from "../components/CtaBand";
import { SITE_URL } from "@/lib/site";

// Metadata for the subscription page
export const metadata = {
  title: "Subscription – Kayven",
  description: "Manage your Kayven subscription."
};

export default function SubscriptionPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Subscription"
        headline="Manage your subscription"
        intro="View and update your Kayven subscription plan."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="lbl mb-4">
            Your subscription details will appear here. {/* TODO: implement subscription management */}
          </p>
          <p className="lbl">
            For any changes to your plan, please contact us at <a href={`mailto:${"shiva@kayven.in"}`} className="underline">shiva@kayven.in</a>.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}