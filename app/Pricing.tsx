"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { SIGNUP_URL } from "../lib/site";

const plans = [
  { n: "Basic", d: "Designed for users who want expanded health and nutrition tracking.", p: { in: { m: 299, y: 2299 }, gl: { m: 9.99, y: 69.99 } } },
  { n: "Standard", d: "Designed for users who want a broader personalised health experience.", p: { in: { m: 499, y: 3899 }, gl: { m: 19.99, y: 139.99 } } },
  { n: "Pro AI", d: "Designed for users who want the most advanced AI-powered personalisation experience.", p: { in: { m: 1399, y: 10899 }, gl: { m: 39.99, y: 279.99 } } }
];

export default function Pricing() {
  const [r, setR] = useState<"in" | "gl">("in");
  const [t, setT] = useState<"m" | "y">("m");
  const fmt = (v: number) => {
          const formatted = r === "in" ? "₹" + v.toLocaleString("en-IN") : "$" + (v === 0 ? "0" : v.toFixed(2));
          return (
            <motion.span
              key={formatted}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {formatted}
            </motion.span>
          );
        }

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-10">
        <div className="flex">{(['in', 'gl'] as const).map(k => (
          <button key={k} className="seg" aria-pressed={r === k} onClick={() => setR(k)}>
            {k === "in" ? "India" : "Global"}
          </button>
        ))}</div>
        <div className="flex">{(['m', 'y'] as const).map(k => (
          <button key={k} className="seg" aria-pressed={t === k} onClick={() => setT(k)}>
            {k === "m" ? "Monthly" : "Yearly"}
          </button>
        ))}</div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {plans.map(pl => {
          const pro = pl.n === "Pro AI";
          const standard = pl.n === "Standard";
          return (
            <motion.div
            key={pl.n}
            className={`flex flex-col border-2 border-black p-6 ${standard ? "dark bg-black text-white lg:-my-6 lg:py-12" : "card bg-white hover:bg-black hover:text-white hover:border-4"}`}
            whileHover={{ scale: standard ? 1 : 1.02 }}
            transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
              {standard && <span className="lbl self-end mb-6">Recommended</span>}
              <p className="lbl mb-6">{pl.n}</p>
              <p className="font-display text-5xl tracking-tight">{fmt(pl.p[r][t])}</p>
              <p className="lbl mt-2 mb-6 opacity-70">{t === "m" ? "per month" : "per year"}</p>
              <p className="text-base mb-8">{pl.d}</p>
              <motion.a
              href={SIGNUP_URL}
              className={`btn mt-auto justify-between ${standard ? "" : "out"} group`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              Get Started <span className="group-hover:underline">→</span>
            </motion.a>
            </motion.div>
         )
       }
     )
   }
       </div>
     </div>
   );
}