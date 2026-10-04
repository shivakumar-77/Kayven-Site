import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";

// Metadata for the AI page
export const metadata = {
  title: "Kayven AI — Personalised Health Intelligence",
  description: "Kayven AI provides intelligent guidance that learns from your data to make personalized recommendations."
};

// Content sections for AI page
const aiSections = [
  {
    id: "why-context",
    label: "why-context",
    title: "Why health AI needs context",
    content: "Health data without context is just numbers. Kayven AI uses your goals, behaviors, and progress to turn raw data into meaningful insights."
  },
  {
    id: "intelligence-layer",
    label: "intelligence-layer",
    title: "Kayven intelligence layer",
    content: "Our AI analyzes your nutrition, fitness, progress, and daily habits to identify patterns and provide recommendations that actually work for your lifestyle."
  },
  {
    id: "user-context",
    label: "user-context",
    title: "Your context",
    content: "Kayven AI considers your goals, preferences, nutrition behavior, training behavior, progress, and historical information to make the experience increasingly relevant over time."
  },
  {
    id: "nutrition-intelligence",
    label: "nutrition-intelligence",
    title: "Nutrition intelligence",
    content: "Get personalized meal suggestions, macro adjustments, and food recommendations based on how your body responds to different foods and your nutritional goals."
  },
  {
    id: "fitness-intelligence",
    label: "fitness-intelligence",
    title: "Fitness intelligence",
    content: "Receive workout adaptations, exercise recommendations, and recovery guidance based on your performance, energy levels, and fitness progress."
  },
  {
    id: "progress-intelligence",
    label: "progress-intelligence",
    title: "Progress intelligence",
    content: "See how your habits compound over time with trend analysis, milestone predictions, and insights into what's really moving the needle on your health goals."
  },
  {
    id: "personalised-recommendations",
    label: "personalised-recommendations",
    title: "Personalised recommendations",
    content: "Every recommendation in Kayven is uniquely tailored to you, combining insights from all areas of your health to create a coherent action plan."
  },
  {
    id: "future-health-intelligence",
    label: "future-health-intelligence",
    title: "Future health intelligence",
    content: "As Kayven learns more about you, the AI becomes better at predicting your needs before you even realize them, shifting from reactive to proactive health management."
  },
  {
    id: "responsible-ai",
    label: "responsible-ai",
    title: "Responsible AI / limitations",
    content: "Kayven AI provides guidance and insights, not medical diagnosis or treatment. We combine artificial intelligence with human expertise to ensure safe, ethical, and effective health support."
  }
];

export default function AIPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="AI"
        headline="Personalised Health Intelligence"
        intro="Kayven AI provides intelligent guidance that learns from your data to make personalized recommendations."
      />

      {/* Content Sections */}
      <section className="pb-20">
        {aiSections.map((section, index) => (
          <Sec
            key={section.id}
            id={section.id}
            n={`${index + 1}`}
            label={section.label.toLowerCase()}
            title={section.title}
          >
            <p>{section.content}</p>
          </Sec>
        ))}
      </section>

      {/* CTA Band */}
      <CtaBand headline="Experience intelligent health guidance" />
    </>
  );
}