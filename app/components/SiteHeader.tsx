"use client";
import { motion } from "framer-motion";
import NavBar from "./motion/NavBar";
import { SITE_URL, SIGNUP_URL } from "@/lib/site";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const nav = ["Product", "AI", "Nutrition", "Fitness", "Pricing"];

  return (
    <>
      <NavBar navItems={nav} signupUrl={SIGNUP_URL} />
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <a href={SITE_URL} className="font-display text-3xl">Kayven</a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((x) => {
            const isActive = pathname === `/${x.toLowerCase()}`;
            return (
              <motion.a
                key={x}
                href={`/${x.toLowerCase()}`}
                className={`lbl group ${isActive ? "border-b-4 border-black" : ""}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {x}
                <motion.span
                  className="inline-block origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            );
          })}
        </nav>
        <motion.a
          href={SIGNUP_URL}
          className="btn !py-3 !px-5 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Get Started <span className="group-hover:underline">→</span>
        </motion.a>
        <details className="md:hidden relative">
          <motion.summary
            className="lbl cursor-pointer list-none border-2 border-black px-4 py-3"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Menu
          </motion.summary>
          <div className="absolute right-0 top-full mt-2 w-56 bg-white border-2 border-black flex flex-col z-20">
            {[...nav, "Get Started"].map((x) => (
              <motion.a
                key={x}
                href={x === "Get Started" ? SIGNUP_URL : `/${x.toLowerCase()}`}
                className="lbl p-4 border-b border-black last:border-0"
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {x}
              </motion.a>
            ))}
          </div>
        </details>
      </div>
    </>
  );
}