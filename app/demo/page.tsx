import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";

// Metadata for the demo page
export const metadata = {
  title: "Kayven Demo — See How It Works",
  description: "Experience Kayven through an interactive product demo showing a user's health journey."
};

// Demo scenes data (same as in homepage)
const demoScenes = [
  "Create an account.",
  "Set a health goal.",
  "Complete personalisation onboarding.",
  "Log a meal using food photo recognition.",
  "Review calories and macros.",
  "View personalised meal guidance.",
  "Open a workout.",
  "Complete the workout.",
  "Review progress.",
  "View weekly insights.",
  "Interact with Kayven AI.",
  "Receive a personalised recommendation."
];

export default function DemoPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Demo"
        headline="See How It Works"
        intro="Experience Kayven through an interactive product demo showing a user's health journey."
      />

      {/* Demo Content */}
      <Sec id="demo-narrative" n="01" label="Demo" title="One user’s journey.">
        <p>The product demo should follow one user’s journey:</p>
        <ol className="grid sm:grid-cols-2 gap-px bg-black border border-black">
          {demoScenes.map((scene, index) => (
            <Reveal key={scene} className="bg-white p-5 hover:bg-black hover:text-white" delay={index * 0.04}>
              <li>
                <span className="lbl block mb-2">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-base">{scene}</span>
              </li>
            </Reveal>
          ))}
          {demoScenes.map((scene, index) => (
            <li key={scene} className="bg-white p-5 hover:bg-black hover:text-white">
              <span className="lbl block mb-2">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-base">{scene}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6">Your health, understood.</p>
      </Sec>

      {/* Learn more links to individual sections */}
      <Sec id="demo-learn-more" n="02" label="Learn More" title="Explore Kayven features">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl mb-4">Nutrition Tracking</h3>
            <p>See how easy it is to log meals with photo recognition, barcode scanning, and search.</p>
            <a href="/nutrition" className="lbl hover:underline">Explore Nutrition →</a>
          </div>
          <div>
            <h3 className="text-xl mb-4">Fitness Planning</h3>
            <p>Build effective workouts that align with your goals and fitness level.</p>
            <a href="/fitness" className="lbl hover:underline">Explore Fitness →</a>
          </div>
          <div>
            <h3 className="text-xl mb-4">AI Guidance</h3>
            <p>Get personalized recommendations that learn from your data over time.</p>
            <a href="/ai" className="lbl hover:underline">Explore AI →</a>
          </div>
          <div>
            <h3 className="text-xl mb-4">Progress Tracking</h3>
            <p>See your health journey in context with meaningful insights and analytics.</p>
            <a href="/demo" className="lbl hover:underline">See the Demo Again →</a>
          </div>
        </div>
      </Sec>

      {/* CTA Band */}
      <CtaBand headline="Ready to begin your health journey?" />
    </>
  );
}

// Reveal component import
import Reveal from "../components/motion/Reveal";