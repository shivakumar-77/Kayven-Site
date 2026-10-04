import Pricing from "../Pricing"; // Reusing the existing Pricing component
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
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
    question: "What's the difference between monthly and annual billing?",
    answer: "Annual billing offers a significant discount compared to monthly billing. You save approximately 20% when you choose annual billing."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings."
  },
  {
    question: "Is there a free trial?",
    answer: "Kayven offers a free tier with basic tracking features. Premium features are available in our paid plans."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and digital payment methods through secure payment processors."
  },
  {
    question: "How does the food database work?",
    answer: "Our food database contains 926,000+ foods with nutrition information sourced from verified databases and user contributions."
  },
  {
    question: "Can I track macros with the free plan?",
    answer: "The free plan includes basic calorie tracking. Macro tracking is available in our paid plans starting with the Basic tier."
  },
  {
    question: "Do you offer student or family discounts?",
    answer: "Currently we don't offer specialized discounts, but we provide competitive pricing for all users. Email us for special inquiries."
  },
  {
    question: "Is my data safe and private?",
    answer: "Yes, we use industry-standard encryption and security practices to protect your health data. We never sell your personal information."
  }
];

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Pricing"
        headline="Choose your plan"
        intro="Select the Kayven plan that matches your health goals and budget."
      />

      {/* Pricing Component */}
      <section className="pb-16">
        <Pricing />
      </section>

      {/* FAQ Section */}
      <Sec id="pricing-faq" n="10" label="FAQ" title="Pricing questions">
        <div className="space-y-4">
          {pricingFAQ.map((faq, index) => (
            <div key={index} className="border-b border-black pb-4 last:border-0 last:pb-0">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
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