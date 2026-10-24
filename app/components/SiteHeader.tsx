"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SIGNUP_URL } from "@/lib/site";

const navItems = [
  { label: "Product", href: "/product" },
  { label: "AI", href: "/ai" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Fitness", href: "/fitness" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/demo" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], [80, 64]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const signupUrl = SIGNUP_URL;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 border-b border-black bg-white transition-shadow duration-200"
        style={{ height: prefersReducedMotion ? 80 : height }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 md:px-8 lg:px-12">
          <a
            aria-label="Kayven home"
            className="shrink-0 font-display text-3xl font-semibold text-[#4543dd]"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Kayven
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                aria-current={pathname === href ? "page" : undefined}
                className="lbl whitespace-nowrap text-[#151526] transition-colors hover:text-[#302da8]"
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            aria-current={pathname === "/get-started" ? "page" : undefined}
            className="btn hidden !px-5 !py-3 sm:inline-flex"
            href={signupUrl}
          >
            Get Started <span aria-hidden="true">→</span>
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[5px] rounded-xl border border-[#e8e7f0] text-[#151526] transition-colors hover:bg-[#efeeff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4543dd] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? (
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-black"
          style={{ scaleX: prefersReducedMotion ? 0 : progress }}
        />

        <nav
          aria-label="Mobile navigation"
          className={`absolute left-0 right-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-[#e8e7f0] bg-white shadow-lg lg:hidden ${
            menuOpen ? "" : "hidden"
          }`}
          id="mobile-navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 pb-4 pt-2 sm:px-6">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                aria-current={pathname === href ? "page" : undefined}
                className="lbl flex min-h-12 items-center border-b border-black/15 px-3 py-3 hover:bg-black/5"
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              aria-current={pathname === "/get-started" ? "page" : undefined}
              className="btn mt-4 min-h-12 justify-center !py-3 sm:hidden"
              href={signupUrl}
              onClick={() => setMenuOpen(false)}
            >
              Get Started <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>
      </motion.header>
      <div aria-hidden="true" className="h-20" />
    </>
  );
}
