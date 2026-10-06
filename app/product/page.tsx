import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";
import CountUp from "../components/motion/CountUp";

// Metadata for the product page
export const metadata = {
  title: "Kayven Product — Personalised Nutrition & Fitness",
  description: "Kayven Product helps you understand and manage what you eat with food tracking, meal planning, and nutrition insights."
};

// Content sections for product page
const productSections = [
  {
    id: "food-recognition",
    label: "food-recognition",
    title: "Food recognition",
    content: "Log meals your way — search, scan a barcode, or use food photo recognition — and keep track of the nutrition that matters to you.",
    features: [
      "Food photo scanning",
      "Barcode scanning",
      "Food search",
      "Calories",
      "Protein",
      "Carbohydrates",
      "Fat",
      "Fiber",
      "Meal planning"
    ],
    stat: {
      value: 926000,
      label: "foods in the database"
    }
  },
  {
    id: "macro-tracking",
    label: "macro-tracking",
    title: "Macro tracking",
    content: "Track your macronutrients to see how protein, carbs, and fat affect your energy and fitness goals."
  },
  {
    id: "meal-planning",
    label: "meal-planning",
    title: "Meal planning",
    content: "Plan your meals ahead of time based on your goals and nutrition requirements. Your meal plans become more personalised as Kayven learns from your data."
  }
];

export default function ProductPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Product"
        headline="One connected ecosystem."
        intro="Kayven helps people understand their health, track what matters, and receive personalised recommendations across nutrition, fitness and everyday health behaviour."
      />

      {/* Content Sections */}
      <section className="pb-20">
        {productSections.map((section, index) => (
          <Sec
            key={section.id}
            id={section.id}
            n={String(index + 1).padStart(2, '0')}
            label={section.label.replace(/-/g, ' ').toUpperCase()}
            title={section.title}
          >
            <p>{section.content}</p>

            {section.stat && (
              <div className="mb-6">
                <CountUp value={section.stat.value} />
                <p className="lbl mt-2">{section.stat.label}+</p>
              </div>
            )}

            {section.features && (
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-base mt-4">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="size-2 bg-black" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </Sec>
        ))}
      </section>

      {/* Fitness Section */}
      <Sec id="fitness-section" n="04" label="Fitness" title="Train with purpose.">
        <p>Build workouts around your goals with a growing library of exercises, structured programs and personalised fitness guidance.</p>
        <div className="mb-6">
          <CountUp value={183} />
          <p className="lbl mt-2">exercises+</p>
        </div>
        {/* Learn more link to fitness page */}
        <div className="mt-6">
          <a href="/fitness" className="lbl hover:underline">Explore Fitness →</a>
        </div>
      </Sec>

      {/* CTA Band */}
      <CtaBand headline="Ready to transform your health?" />
    </>
  );
}

// Big component reused from Pricing
function Big({ v, l }: { v: number; l: string }) {
  return (
    <div>
      <p className="font-display text-7xl md:text-8xl tracking-tighter leading-none">{v}</p>
      <p className="lbl mt-3">{l}</p>
    </div>
  );
}