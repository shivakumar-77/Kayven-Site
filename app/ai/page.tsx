import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";
import VoiceCoachDemo from "../components/ai/VoiceCoachDemo";

// Metadata for the AI page
export const metadata = {
  title: "Kayven AI — Personalised Health Intelligence",
  description: "Kayven AI provides intelligent guidance that learns from your data to make personalised recommendations."
};

// Content sections for AI page
const aiSections = [
  {
    id: "why-context",
    label: "why-context",
    title: "Understands your context",
    content: "Your goals and behaviour provide the context behind your recommendations."
  },
  {
    id: "intelligence-layer",
    label: "intelligence-layer",
    title: "Connects the dots",
    content: "Nutrition, fitness and progress don’t exist in isolation."
  },
  {
    id: "user-context",
    label: "user-context",
    title: "Gets more personal",
    content: "Your experience can become more relevant as Kayven learns from your ongoing data."
  },
  {
    id: "nutrition-intelligence",
    label: "nutrition-intelligence",
    title: "Nutrition intelligence",
    content: "Get personalised nutrition recommendations based on your food tracking data and health goals."
  },
  {
    id: "fitness-intelligence",
    label: "fitness-intelligence",
    title: "Fitness intelligence",
    content: "Receive personalised fitness recommendations based on your workout data and progress."
  },
  {
    id: "progress-intelligence",
    label: "progress-intelligence",
    title: "Progress intelligence",
    content: "See how your health data compounds over time to show your progress in context."
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
    content: "As Kayven learns more about you, the AI becomes better at predicting your needs before you even realise them, shifting from reactive to proactive health management."
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
        headline="An intelligence layer for your health."
        intro="Kayven connects the information you choose to track with your goals and progress, helping turn daily health data into more relevant insights and recommendations."
      />

      <Sec
        id="voice-demo"
        n="01"
        label="Interactive preview"
        title="A voice interface, on your terms."
      >
        <VoiceCoachDemo />
      </Sec>

      {/* Content Sections */}
      <section className="pb-20">
        {aiSections.map((section, index) => (
          <Sec
            key={section.id}
            id={section.id}
            n={String(index + 2).padStart(2, '0')}
            label={section.label.replace(/-/g, ' ').toUpperCase()}
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