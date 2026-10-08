import { useState } from "react";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import Sec from "@/app/components/Sec";
import Phone from "@/app/components/Phone";
import Chart from "@/app/components/Chart";
import InvertSection from "@/app/components/motion/InvertSection";
import { motion } from "framer-motion";
import CountUp from "@/app/components/motion/CountUp";
import DrawRule from "@/app/components/motion/DrawRule";
import DrawSvg from "@/app/components/motion/DrawSvg";
import Reveal from "@/app/components/motion/Reveal";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-20 md:py-28 grid lg:grid-cols-7 gap-12 items-center">
          <div className="lg:col-span-4 min-w-0">
            <p className="lbl mb-6">AI-native personalised health</p>
            <Reveal className="text-[clamp(3.5rem,11vw,7rem)]"><h1>Your health, understood.</h1></Reveal>
            <p className="text-xl mt-8 max-w-xl">Kayven brings nutrition, fitness, progress and intelligent guidance into one personalised health ecosystem.</p>
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.a
                href="/"
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
    </>
  );
}