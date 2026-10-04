import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";

// Metadata for the fitness page
export const metadata = {
  title: "Kayven Fitness — Train with Purpose",
  description: "Build effective workouts with exercise libraries, training programs, and personalized fitness guidance."
};

// Content sections for fitness page
const fitnessSections = [
  {
    id: "exercise-library",
    label: "exercise-library",
    title: "Exercise library",
    content: "Access a growing collection of exercise demonstrations with proper form guidance to build effective workouts.",
    features: [
      "183+ exercises",
      "Video demonstrations",
      "Form tips and cues",
      "Equipment variations",
      "Progressive difficulty levels"
    ],
    stat: {
      value: 183,
      label: "exercises"
    }
  },
  {
    id: "workout-planning",
    label: "workout-planning",
    title: "Workout planning",
    content: "Create effective training programs that align with your goals, schedule, and fitness level.",
    features: [
      "Goal-based workout generators",
      "Periodized training plans",
      "Rest and recovery optimization",
      "Travel-friendly workouts"
    ]
  },
  {
    id: "goal-based-training",
    label: "goal-based-training",
    title: "Goal-based training",
    content: "Every workout recommendation is tailored to your specific objectives, whether it's strength, endurance, flexibility, or sport-specific performance.",
    features: [
      "Strength training programs",
      "Endurance building routines",
      "Flexibility and mobility work",
      "Sport-specific conditioning"
    ]
  },
  {
    id: "progress-tracking",
    label: "progress-tracking",
    title: "Fitness progress tracking",
    content: "See how your training translates to real-world improvements with comprehensive fitness analytics.",
    features: [
      "Strength progression",
      "Endurance metrics",
      "Movement quality assessment",
      "Workout consistency tracking"
    ]
  }
];

export default function FitnessPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Fitness"
        headline="Train with Purpose"
        intro="Build effective workouts with exercise libraries, training programs, and personalized fitness guidance."
      />

      {/* Content Sections */}
      <section className="pb-20">
        {fitnessSections.map((section, index) => (
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

      {/* Nutrition Section Link */}
      <Sec id="nutrition-link" n="05" label="Nutrition" title="Fuel your fitness">
        <p>Nutrition and fitness work together. See how Kayven Nutrition complements your training with proper fueling strategies.</p>
        {/* Learn more link to nutrition page */}
        <div className="mt-6">
          <a href="/nutrition" className="lbl hover:underline">Explore Nutrition →</a>
        </div>
      </Sec>

      {/* CTA Band */}
      <CtaBand headline="Build your perfect training routine" />
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