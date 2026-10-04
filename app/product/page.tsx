import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";

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
    content: "Track your macronutrients with precision to understand how different foods affect your energy levels, hunger, and fitness goals.",
    features: [
      "Daily macro goals",
      "Meal-by-meal breakdown",
      "Weekly averages",
      "Custom macro ratios"
    ]
  },
  {
    id: "meal-planning",
    label: "meal-planning",
    title: "Meal planning",
    content: "Plan your meals ahead of time based on your nutrition goals, preferences, and schedule. Get smart suggestions that adapt as you log more meals."
    ,
    features: [
      "Weekly meal planner",
      "Grocery list generator",
      "Leftover tracking",
      "Recipe import"
    ]
  }
];

export default function ProductPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Product"
        headline="Personalised Nutrition & Fitness"
        intro="Kayven Product helps you understand and manage what you eat with food tracking, meal planning, and nutrition insights."
      />

      {/* Content Sections */}
      <section className="pb-20">
        {productSections.map((section, index) => (
          <Sec
            key={section.id}
            id={section.id}
            n={`${index + 1}`}
            label={section.label.toLowerCase()}
            title={section.title}
          >
            <p>{section.content}</p>

            {section.stat && (
              <div className="mb-6">
                <Big v={section.stat.value} l={section.stat.label} />
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
          <Big v={183} l="exercises" />
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