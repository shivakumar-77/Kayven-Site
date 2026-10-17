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
              Kayven is an AI-native personalised health platform headquartered in Chennai, India. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
              {/* Kayven operates under the laws of India and is committed to complying with all relevant data protection regulations. */}
            </p>

            <h2 className="text-xl font-bold mb-4">What we collect</h2>
            <p className="mb-4">
              We collect the information you choose to provide through the Kayven platform, including:
              {/* We collect the following types of information from our users: */}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Personal information (name, email, etc.)
                {/* This includes your name, email address, and any other information you choose to provide through our platform. */}
              </li>
              <li>
                Health and fitness data (nutrition, workouts, weight, etc.)
                {/* We collect health and fitness data such as nutrition, workouts, and weight to provide personalized recommendations and track your progress. */}
              </li>
              <li>
                Usage data (how you interact with the app)
                {/* We also collect usage data to understand how you interact with our platform and improve your experience. */}
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">How we use it</h2>
            <p className="mb-4">
              We use your data to provide and improve the Kayven service, including:
              {/* We use your data to provide and improve the Kayven service, including: */}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                To personalise your experience and provide recommendations
                {/* To personalize your experience and provide recommendations based on your health and fitness data. */}
              </li>
              <li>
                To track your progress and provide insights
                {/* To track your progress and provide insights into your health and fitness journey. */}
              </li>
              <li>
                To communicate with you about updates and offers
                {/* To communicate with you about updates, offers, and other relevant information. */}
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Sharing</h2>
            <p className="mb-4">
              We do not sell your personal data.
              {/* We do not sell your personal data to third parties. */}
            </p>
            <p className="mb-4">
              We may share your data with:
              {/* We may share your data with trusted service providers who help us operate the platform and deliver our services. */}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Service providers who help us operate the platform
                {/* These providers are required to protect your data and use it only for the purposes we specify. */}
              </li>
              <li>
                Partners for specific features (with your consent)
                {/* We may also share your data with partners for specific features, but only with your explicit consent. */}
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Your choices</h2>
            <p className="mb-4">
              You can:
              {/* You have the following choices regarding your personal information: */}
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Access, correct, or delete your personal data
                {/* You can access, correct, or delete your personal data at any time by contacting us. */}
              </li>
              <li>
                Opt out of marketing communications
                {/* You can opt out of receiving marketing communications from us by following the instructions in any email we send you. */}
              </li>
              <li>
                Manage your cookie preferences
                {/* You can manage your cookie preferences through your browser settings. */}
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy, please contact us at:
              <a href="mailto:shiva@kayven.in" className="underline">shiva@kayven.in</a>
              {/* If you have any questions about this privacy policy, please contact us at shiva@kayven.in. */}
            </p>
          </Sec>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}