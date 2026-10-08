"use client";

import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Solution from "./components/sections/Solution";
import Ai from "./components/sections/Ai";
import Nutrition from "./components/sections/Nutrition";
import Fitness from "./components/sections/Fitness";
import Personalisation from "./components/sections/Personalisation";
import Insights from "./components/sections/Insights";
import Demo from "./components/sections/Demo";
import StatsBand from "./components/sections/StatsBand";
import PricingSection from "./components/sections/PricingSection";
import Quote from "./components/sections/Quote";
import Vision from "./components/sections/Vision";
import FinalCta from "./components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Ai />
      <Nutrition />
      <Fitness />
      <Personalisation />
      <Insights />
      <Demo />
      <StatsBand />
      <PricingSection />
      <Quote />
      <Vision />
      <FinalCta />
    </main>
  );
}