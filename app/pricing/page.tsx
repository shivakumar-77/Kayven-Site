import Pricing from "../Pricing"; // Reusing the existing Pricing component
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import Faq from "../components/Faq";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";

// Metadata for the pricing page
export const metadata = {
  title: "Kayven Pricing",
  description: "Choose the Kayven plan that's right for you with flexible monthly and annual options."
};

// FAQ data for pricing page
const pricingFAQ = [
  {
    question: "How is Kayven priced?",
    answer: "Three plans: Basic, Standard and Pro AI. Pricing is available in rupees for India and dollars globally, billed monthly or yearly. Use the toggles to switch."
  },
  {
    question: "What is the difference between monthly and yearly billing?",
    answer: "Yearly billing is one annual payment at a lower price than twelve monthly payments."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Subscriptions renew according to your selected billing period unless cancelled."
  },
  {
    question: "Can I get a refund?",
    answer: "To ask about a refund, email shiva@kayven.in from the address on your account. {/* TODO(policy): replace with the real policy */}"
  },
  {
    question: "Is Kayven a medical app?",
    answer: "Kayven is a health and wellness platform. It is not intended to diagnose medical conditions or replace professional medical care."
  }
];

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Pricing"
        headline="Choose your plan"
        intro="Personalised nutrition, workouts, progress tracking and AI coaching — all in one place. Choose the plan that fits your goals."
      />

      {/* Pricing Component */}
      <section className="pb-16">
        <Pricing />
      </section>

      {/* FAQ Section */}
      <Sec id="pricing-faq" n="10" label="FAQ" title="Pricing questions">
        <Faq items={pricingFAQ} />
        {/* Learn more link - for FAQ, link to contact for unanswered questions */}
        <div className="mt-6">
          <a href="/contact" className="lbl hover:underline">Have more questions? Contact us →</a>
        </div>
      </Sec>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}