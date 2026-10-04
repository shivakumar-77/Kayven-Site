"use client";
import { motion } from "framer-motion";
import { EMAIL } from "@/lib/site";
import { socials } from "@/lib/site";

export default function SiteFooter() {
  const foot = {
    Product: ["Product", "AI", "Nutrition", "Fitness", "Pricing", "Demo"],
    Company: ["About", "Team", "Contact", "Careers"],
    Resources: ["Insights", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service"],
    Social: ["Instagram", "LinkedIn", "X", "Email"]
  };

  return (
    <footer className="border-t-4 border-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
        {Object.entries(foot).map(([h, items]) => (
          <div key={h}>
            <p className="lbl mb-4">{h}</p>
            <ul className="space-y-2 text-base">
              {items.map((x) => (
                <li key={x}>
                  <motion.a
                    href={
                      x === "Email"
                        ? `mailto:${EMAIL}`
                        : x === "Instagram"
                        ? socials.company.instagram
                        : x === "LinkedIn"
                        ? socials.company.linkedIn
                        : x === "X"
                        ? socials.company.x
                        : `/${x.toLowerCase()}`
                    }
                    className="lbl group"
                    target={
                      x === "Email" ||
                      x === "Instagram" ||
                      x === "LinkedIn" ||
                      x === "X"
                        ? "_blank"
                        : "_self"
                    }
                    rel={
                      x === "Email" ||
                      x === "Instagram" ||
                      x === "LinkedIn" ||
                      x === "X"
                        ? "noopener noreferrer"
                        : ""
                    }
                    aria-label={
                      x === "Instagram"
                        ? "Kayven on Instagram (opens in a new tab)"
                        : x === "LinkedIn"
                        ? "Kayven on LinkedIn (opens in a new tab)"
                        : x === "X"
                        ? "Kayven on X (opens in a new tab)"
                        : ""
                    }
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
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 pb-12 text-base">
        <p>Your health, understood.</p>
        <p className="lbl mt-2">© 2026 Kayven. All rights reserved.</p>
      </div>
    </footer>
  );
}