import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";

// Metadata for the privacy page
export const metadata = {
  title: "Privacy Policy, Kayven",
  description: "Kayven's privacy policy."
};

export default function PrivacyPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Privacy"
        headline="Privacy Policy, Kayven"
        intro="Learn about how we handle your information."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Sec
            id="privacy-policy"
            n=""
            label="PRIVACY POLICY"
            title="Privacy Policy"
          >
            <p className="mb-4">Last updated: October 2026</p>

            <h2 className="text-xl font-bold mb-4">Who we are</h2>
            <p className="mb-4">
              Kayven is an AI-native personalised health platform headquartered in Chennai, India.
              {/* TODO(verify): Confirm jurisdiction and headquarters details */}
            </p>

            <h2 className="text-xl font-bold mb-4">What we collect</h2>
            <p className="mb-4">
              We collect the information you choose to provide through the Kayven platform, including:
              {/* TODO(verify): List specific data points collected */}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Personal information (name, email, etc.)
                {/* TODO(verify): Confirm what personal information is collected */}
              </li>
              <li>
                Health and fitness data (nutrition, workouts, weight, etc.)
                {/* TODO(verify): Confirm what health and fitness data is collected */}
              </li>
              <li>
                Usage data (how you interact with the app)
                {/* TODO(verify): Confirm usage data collection */}
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">How we use it</h2>
            <p className="mb-4">
              We use your data to provide and improve the Kayven service, including:
              {/* TODO(verify): Confirm specific uses of data */}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                To personalise your experience and provide recommendations
                {/* TODO(verify): Confirm personalisation uses */}
              </li>
              <li>
                To track your progress and provide insights
                {/* TODO(verify): Confirm progress tracking uses */}
              </li>
              <li>
                To communicate with you about updates and offers
                {/* TODO(verify): Confirm communication uses */}
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Sharing</h2>
            <p className="mb-4">
              We do not sell your personal data.
              {/* TODO(verify): Confirm data is not sold */}
            </p>
            <p className="mb-4">
              We may share your data with:
              {/* TODO(verify): Confirm sharing practices */}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Service providers who help us operate the platform
                {/* TODO(verify): Confirm service provider sharing */}
              </li>
              <li>
                Partners for specific features (with your consent)
                {/* TODO(verify): Confirm partner sharing with consent */}
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Your choices</h2>
            <p className="mb-4">
              You can:
              {/* TODO(verify): Confirm user choices */}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Access, correct, or delete your personal data
                {/* TODO(verify): Confirm data access rights */}
              </li>
              <li>
                Opt out of marketing communications
                {/* TODO(verify): Confirm marketing opt-out */}
              </li>
              <li>
                Manage your cookie preferences
                {/* TODO(verify): Confirm cookie management */}
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy, please contact us at:
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