"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

interface NavBarProps {
  navItems: string[];
  signupUrl: string;
}

export default function NavBar({ navItems, signupUrl }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], [80, 64]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-white transition-all duration-100 ${isScrolled ? "shadow-sm" : ""}`}
      style={{ height }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 h-full flex items-center justify-between">
        <a href="/" className="font-display text-3xl">Kayven</a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(x => (
            <a key={x} href={`/${x.toLowerCase()}`} className="lbl hover:underline underline-offset-4">{x}</a>
          ))}
          <a href={signupUrl} className="btn !py-3 !px-5">Get Started</a>
        </nav>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left"
          style={{ scaleX: progress }}
        />
      </div>
    </motion.header>
  );
}