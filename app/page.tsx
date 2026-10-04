"use client";
import { useState } from "react";
import Pricing from "./Pricing";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "../lib/site";
import Sec from "./components/Sec";
import Phone from "./components/Phone";
import Chart from "./components/Chart";
import InvertSection from "./components/motion/InvertSection";
import { motion } from "framer-motion";
import CountUp from "./components/motion/CountUp";
import DrawRule from "./components/motion/DrawRule";
import DrawSvg from "./components/motion/DrawSvg";
import Reveal from "./components/motion/Reveal";

const nav = ["Product", "AI", "Nutrition", "Fitness", "Pricing"];
const scenes = [
  "Create an account",
  "Set a health goal",
  "Complete personalisation onboarding",
  "Log a meal using food photo recognition",
  "Review calories and macros",
  "View personalised meal guidance",
  "Open a workout",
  "Complete the workout",
  "Review progress",
  "View weekly insights",
  "Interact with Kayven AI",
  "Receive a personalised recommendation"
];

const foot = {
  Product: ["Product", "AI", "Nutrition", "Fitness", "Pricing", "Demo"],
  Company: ["About", "Team", "Contact", "Careers"],
  Resources: ["Insights", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service"],
  Social: ["Instagram", "LinkedIn", "X", "Email"]
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-20 md:py-28 grid lg:grid-cols-7 gap-12 items-center">
          <div className="lg:col-span-4 min-w-0">
            <p className="lbl mb-6">AI-native personalised health</p>
            <Reveal className="text-[clamp(3.5rem,11vw,7rem)]"><h1>Your health, understood.</h1></Reveal>
            <p className="text-xl mt-8 max-w-xl">Kayven brings nutrition, fitness, progress and intelligent guidance into one personalised health ecosystem.</p>
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.a
                href={SIGNUP_URL}
                className="btn group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                Get Started <span className="group-hover:underline">→</span>
              </motion.a>
              <a href="/product" className="btn out">Explore Kayven <span>→</span></a>
            </div>
            <DrawRule className="mt-16 h-4 border-t-4 border-black" />
          </div>
          <div className="lg:col-span-3">
            <DrawSvg>
              <Phone />
            </DrawSvg>
          </div>
        </div>
      </section>

      {/* Sections using shared Sec component */}
      <Sec id="product" n="01" label="Problem" title="Your health shouldn’t live in five different apps.">
        <p>Food in one place. Workouts somewhere else. Weight in another app. Advice scattered across the internet.</p>
        <p>People often use different tools for food tracking, calories, macros, workouts, weight, water, supplements, progress and health advice. The result is a fragmented picture of their health.</p>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          {"Food app,Workout app,Weight tracker,Health info,AI chatbot".split(",").map((x, i) => (
            <span key={x} className="flex items-center gap-3"><span className="lbl border border-black px-3 py-2">{x}</span>{i < 4 && <span>+</span>}</span>))}
          <span>→</span><span className="lbl bg-black text-white px-4 py-2">Kayven</span>
        </div>
        <p className="text-base">Tracking is useful. Understanding the data and turning it into action is more valuable.</p>
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/product" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <Sec n="02" label="Solution" title="Don’t just track your health. Understand it.">
        <p>Kayven is designed around a connected health ecosystem. It combines nutrition, fitness, body-weight goals, progress, water, supplements, personalised recommendations and AI-powered guidance.</p>
        <p>The product is designed to continuously learn from the information a user provides and use that context to make future recommendations more personalised.</p>
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/ai" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <Sec id="ai" n="03" label="AI intelligence" title="An intelligence layer for your health.">
        <p>Kayven connects the information you choose to track with your goals and progress, helping turn daily health data into more relevant insights and recommendations.</p>
        <div className="grid sm:grid-cols-3 gap-4 pt-4">
          {"Understands your context|Your goals and behaviour provide the context behind your recommendations.,Connects the dots|Nutrition, fitness and progress don’t exist in isolation.,Gets more personal|Your experience can become more relevant as Kayven learns from your ongoing data.".split(",").map((x, i) => {
            const [t, d] = x.split("|");
            return (
              <div key={i} className="border border-black p-6 bg-white hover:bg-black hover:text-white transition-colors duration-100">
                <h3 className="text-2xl mb-3">{t}</h3>
                <p className="text-base">{d}</p>
              </div>
            );
          })}
        </div>
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/ai" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <Sec id="nutrition" n="04" label="Nutrition" title="Know what you’re eating.">
        <div className="mb-6">
          <CountUp value={926000} />
          <p className="lbl mt-2">foods in the database</p>
        </div>
        <p>Log meals your way — search, scan a barcode, or use food photo recognition — and keep track of the nutrition that matters to you.</p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-base">
          {"Food photo scanning,Barcode scanning,Food search,Calories,Protein,Carbohydrates,Fat,Fiber,Meal planning".split(",").map(x => (
            <li key={x} className="flex items-center gap-3"><span className="size-2 bg-black" />{x}</li>
          ))}
        </ul>
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/nutrition" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <Sec id="fitness" n="05" label="Fitness" title="Train with purpose.">
        <div className="mb-6">
          <CountUp value={183} />
          <p className="lbl mt-2">exercises</p>
        </div>
        <p>Build workouts around your goals with a growing library of exercises, structured programs and personalised fitness guidance.</p>
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/fitness" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <Sec n="06" label="Personalisation" title="The more context Kayven has, the more personal it gets.">
        <p>Your experience becomes more relevant based on your goals, preferences, nutrition behaviour, training behaviour, progress and history.</p>
        {/* Learn more link - Personalisation doesn't have a dedicated page, so linking to Product */}
        <div className="mt-6">
          <a href="/product" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <Sec n="07" label="Weekly insights" title="A clearer view of your week.">
        <p>Understand patterns in your nutrition, workouts and progress with weekly insights designed to help you see what is changing over time.</p>
        <figure>
          <Chart />
        </figure>
        <figcaption className="lbl mt-2">Illustrative</figcaption>
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/demo" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <Sec n="08" label="Product demo" title="One user’s journey.">
        <ol className="grid sm:grid-cols-2 gap-px bg-black border border-black">
          {scenes.map((s, i) => (
            <Reveal key={s} className="bg-white p-5 hover:bg-black hover:text-white" delay={i * 0.04}>
              <li>
                <span className="lbl block mb-2">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base">{s}</span>
              </li>
            </Reveal>
          ))}
          {scenes.map((s, i) => (
            <li key={s} className="bg-white p-5 hover:bg-black hover:text-white">
              <span className="lbl block mb-2">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base">{s}</span>
            </li>
          ))}
        </ol>
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/demo" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <InvertSection className="dark relative bg-black text-white border-b-4 border-black overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg,transparent,transparent 1px,#fff 1px,#fff 2px)", backgroundSize: "4px 100%" }} />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32 grid sm:grid-cols-2 gap-16">
          <div className="mb-6">
            <CountUp value={926000} />
            <p className="lbl mt-2">foods in the database</p>
          </div>
          <div className="mb-6">
            <CountUp value={183} />
            <p className="lbl mt-2">exercises</p>
          </div>
        </div>
      </InvertSection>

      <Sec id="pricing" n="09" label="Pricing" title="Choose your plan.">
        <Pricing />
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/pricing" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>

      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
          <span className="font-display text-9xl leading-none block h-24">“</span>
          <blockquote className="font-display italic text-4xl md:text-6xl tracking-tight max-w-4xl">Your health is more than a collection of numbers.</blockquote>
          <p className="lbl mt-8">From the Kayven story</p>
        </div>
      </section>

      <Sec n="10" label="Vision" title="Build the personal health layer.">
        <p>Kayven’s long-term vision is to become a personalised health intelligence layer that helps people understand their health data and make better everyday decisions.</p>
        {/* Learn more link */}
        <div className="mt-6">
          <a href="/" className="lbl hover:underline">Learn more →</a>
        </div>
      </Sec>
    </main>
  );
}