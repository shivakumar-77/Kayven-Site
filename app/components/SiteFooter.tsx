"use client";
import { motion } from "framer-motion";
import { EMAIL } from "@/lib/site";
import { socials } from "@/lib/site";
import LinkedInIcon from "../components/LinkedInIcon";
import InstagramIcon from "../components/InstagramIcon";
import XIcon from "../components/XIcon";
import EmailIcon from "../components/EmailIcon";
import IconLink from "../../components/IconLink";

export default function SiteFooter() {
  const foot = {
    Product: ["Product", "AI", "Nutrition", "Fitness", "Pricing", "Demo"],
    Company: ["About", "Team", "Contact", "Careers"],
    Resources: ["Insights", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
    Social: ["Instagram", "LinkedIn", "X", "Email"]
  };

  return (
    <footer className="border-t-4 border-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
        {Object.entries(foot).map(([h, items]) => (
          <div key={h}>
            <p className="lbl mb-4">{h}</p>
            <ul className={h === "Social" ? "space-y-2" : "space-y-2 text-base"}>
              {h === "Social" ? (
                items.map((x) => (
                  <li key={x} className="flex items-center">
                    {x === "Instagram" ? (
                      <IconLink
                        href={socials.company.instagram}
                        ariaLabel="Kayven on Instagram (opens in a new tab)"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </IconLink>
                    ) : x === "LinkedIn" ? (
                      <IconLink
                        href={socials.company.linkedIn}
                        ariaLabel="Kayven on LinkedIn (opens in a new tab)"
                      >
                        <LinkedInIcon className="w-5 h-5" />
                      </IconLink>
                    ) : x === "X" ? (
                      <IconLink
                        href={socials.company.x}
                        ariaLabel="Kayven on X (opens in a new tab)"
                      >
                        <XIcon className="w-5 h-5" />
                      </IconLink>
                    ) : x === "Email" ? (
                      <IconLink
                        href={`mailto:${EMAIL}`}
                        ariaLabel="Email Kayven"
                      >
                        <EmailIcon className="w-5 h-5" />
                      </IconLink>
                    ) : null}
                  </li>
                ))
              ) : (
                items.map((x) => (
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
                            : x === "Privacy Policy"
                            ? "/privacy"
                            : x === "Terms of Service"
                            ? "/terms"
                            : x === "Refund Policy"
                            ? "/refund"
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
                ))
              )}
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