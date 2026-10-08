import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Faq from "../components/Faq";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";

// Metadata for the FAQ page
export const metadata = {
  title: "FAQ, Kayven",
  description: "Frequently asked questions about Kayven."
};

const faqItems = [
  {
    question: "What is Kayven?",
    answer: "Kayven is an AI-native personalised health platform combining nutrition, fitness, progress tracking and intelligent guidance in one ecosystem."
  },
  {
    question: "What can I track?",
    answer: "Kayven is designed to track nutrition, macros, meals, workouts, weight, water, supplements and progress."
  },
  {
    question: "Can Kayven scan food?",
    answer: "Kayven supports food photo scanning, barcode scanning and food search."
  },
  {
    question: "Does Kayven provide workout plans?",
    answer: "Kayven includes workout functionality and goal-oriented training programs."
  },
  {
    question: "Is Kayven a medical app?",
    answer: "Kayven is a health and wellness platform. It is not intended to diagnose medical conditions or replace professional medical care."
  }
];

export default function FAQPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="FAQ"
        headline="FAQ, Kayven"
        intro="Find answers to common questions about Kayven."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Faq items={faqItems} />
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}