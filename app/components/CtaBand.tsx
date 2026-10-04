"use client";
import { motion } from "framer-motion";
import { SIGNUP_URL } from "@/lib/site";

interface CtaBandProps {
  headline: string;
  className?: string;
}

export default function CtaBand({
  headline,
  className = ""
}: CtaBandProps) {
  return (
    <section className={`dark relative bg-black text-white ${className}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-28 md:py-36 text-center">
        <h2 className="text-5xl md:text-7xl">{headline}</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10">
          <motion.a
            href={SIGNUP_URL}
            className="btn mt-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Get Started <span className="group-hover:underline">→</span>
          </motion.a>
          <motion.a
            href="/contact"
            className="btn btn-outline mt-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Contact us <span className="group-hover:underline">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}