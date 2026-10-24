"use client";
import { SIGNUP_URL } from "@/lib/site";
import Phone from "@/app/components/Phone";
import { motion } from "framer-motion";
import DrawRule from "@/app/components/motion/DrawRule";
import Reveal from "@/app/components/motion/Reveal";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b-4 border-black">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-7 lg:px-12">
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
              <a href="/product" className="btn out">Explore Kayven <span aria-hidden="true">→</span></a>
            </div>
            <DrawRule className="mt-16 h-4 border-t-4 border-black" />
          </div>
          <div className="lg:col-span-3">
            <Reveal>
              <Phone />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}