import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";
import Stat from "@/app/components/Stat";

// Metadata for the nutrition page
export const metadata = {
  title: "Kayven Nutrition — Food Tracking Made Simple",
  description: "Track your nutrition with food photo scanning, barcode scanning, and comprehensive meal logging."
};

// Content sections for nutrition page
const nutritionSections = [
  {
    id: "food-logging",
    label: "food-logging",
    title: "Log meals your way",
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
    title: "Comprehensive macro tracking",
    content: "Track not just calories, but all macronutrients and micronutrients that matter to your health goals.",
    features: [
      "Calories",
      "Protein",
      "Carbohydrates",
      "Fat",
      "Fiber",
      "Sugar",
      "Sodium",
      "Water"
    ]
  },
  {
    id: "meal-planning",
    label: "meal-planning",
    title: "Meal planning",
    content: "Plan your meals ahead of time based on your goals and nutrition requirements. Your meal plans become more personalised as Kayven learns from your data."
  },
  {
    id: "nutrition-insights",
    label: "nutrition-insights",
    title: "Nutrition insights",
    content: "Understand your nutrition patterns to see how your food choices affect your energy, mood, hunger, and fitness performance."
  }
];

export default function NutritionPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Nutrition"
        headline="Know what you're eating."
        intro="Log meals your way — search, scan a barcode, or use food photo recognition — and keep track of the nutrition that matters to you."
      />

      {/* Content Sections */}
      <section className="pb-20">
        {nutritionSections.map((section, index) => (
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
                <Stat value={section.stat.value} suffix="K+" label={section.stat.label} />
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

      {/* CTA Band */}
      <CtaBand headline="Take control of your nutrition" />
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