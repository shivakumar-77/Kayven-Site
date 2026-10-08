import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";

// Metadata for the about page
export const metadata = {
  title: "About Kayven",
  description: "Learn about Kayven's mission, vision, and the problem we're solving in personalised health."
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="About"
        headline="Health is personal. Your tools should be too."
        intro="Kayven is being built around a simple idea: Your health is more than a collection of numbers. What you eat affects how you train. How you train affects your progress. Your progress changes what you need next. Kayven brings these pieces together into one connected experience designed around the individual."
      />

      {/* Content Sections */}
      <section className="pb-20">
        {/* The Fragmented Health Problem */}
        <Sec
          id="the-problem"
          n="03"
          label="THE PROBLEM"
          title="Modern health apps are fragmented."
        >
          <p>People often use different tools for:</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-base">
            <li>Food tracking</li>
            <li>Calories</li>
            <li>Macros</li>
            <li>Workouts</li>
            <li>Weight</li>
            <li>Water</li>
            <li>Supplements</li>
            <li>Progress</li>
            <li>Health advice</li>
          </ul>
          <p className="mt-6">The result is a fragmented picture of their health.</p>
          <p className="mt-6">Users can record large amounts of information without receiving meaningful context about what that information means or what they should do next.</p>
        </Sec>

        {/* Product Philosophy */}
        <Sec
          id="product-philosophy"
          n="15"
          label="PRODUCT PHILOSOPHY"
          title="Track • Understand • Personalise • Act"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Track */}
            <div className="border border-black p-6">
              <h3 className="lbl mb-4">Track</h3>
              <p className="text-base">Capture useful health information.</p>
            </div>
            {/* Understand */}
            <div className="border border-black p-6">
              <h3 className="lbl mb-4">Understand</h3>
              <p className="text-base">Turn data into context and insights.</p>
            </div>
            {/* Personalise */}
            <div className="border border-black p-6">
              <h3 className="lbl mb-4">Personalise</h3>
              <p className="text-base">Adapt recommendations around the individual.</p>
            </div>
            {/* Act */}
            <div className="border border-black p-6">
              <h3 className="lbl mb-4">Act</h3>
              <p className="text-base">Help the user make better day-to-day decisions.</p>
            </div>
          </div>
        </Sec>

        {/* Vision */}
        <Sec
          id="vision"
          n="31"
          label="VISION"
          title="Build the personal health layer."
        >
          <p className="mb-4">Kayven’s long-term vision is to become a personalised health intelligence layer that helps people understand their health data and make better everyday decisions.</p>
          <p>The product can expand from nutrition and fitness into a broader connected health ecosystem over time.</p>
        </Sec>

        {/* Mission */}
        <Sec
          id="mission"
          n="32"
          label="MISSION"
          title="Make personalised health guidance more accessible, connected and actionable."
        >
          <p className="text-base">Make personalised health guidance more accessible, connected and actionable.</p>
        </Sec>

        {/* Meet the Team Link */}
        <div className="mt-10 text-center">
          <a href="/team" className="lbl hover:underline">Meet the team →</a>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}