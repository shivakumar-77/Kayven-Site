"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SIGNUP_URL } from "@/lib/site";
import {
  plans,
  pricingData,
  formatIndiaPrice,
  formatGlobalPrice,
  getIndiaPriceDisplay,
  getIndiaEffectiveMonthly,
  getGlobalEffectiveMonthly
} from "@/lib/pricing";

export default function Pricing() {
  const [region, setRegion] = useState<"India" | "Global">("India");
  const [billing, setBilling] = useState<"Monthly" | "Yearly">("Monthly");

  // Get current prices based on region and billing
  const currentPrices = pricingData.prices[region][billing];

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <div className="hidden md:flex gap-4">
          {/* Region Toggle */}
          <div className="flex">
            {[
              "India" as const,
              "Global" as const
            ].map((r) => (
              <button
                key={r}
                className={`seg w-24 h-11 flex items-center justify-center rounded-none
                  ${region === r
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black'}`}
                aria-pressed={region === r}
                onClick={() => setRegion(r)}
              >
                {r}
                {r === "India" && billing === "Yearly" && (
                  <span className="ml-1 lbl text-xs">Save up to 43%</span>
                )}
              </button>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex">
            {[
              "Monthly" as const,
              "Yearly" as const
            ].map((b) => (
              <button
                key={b}
                className={`seg w-24 h-11 flex items-center justify-center rounded-none
                  ${billing === b
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black'}`}
                aria-pressed={billing === b}
                onClick={() => setBilling(b)}
              >
                {b === "Yearly" && region === "Global" ? "Yearly" : b}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile view - stacked controls */}
        <div className="md:hidden w-full flex flex-col items-center gap-2">
          <div className="flex gap-2">
            {[
              "India" as const,
              "Global" as const
            ].map((r) => (
              <button
                key={r}
                className={`seg w-36 h-10 flex items-center justify-center
                  ${region === r
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black'}`}
                aria-pressed={region === r}
                onClick={() => setRegion(r)}
              >
                {r}
                {r === "India" && billing === "Yearly" && (
                  <span className="ml-1 lbl text-xs">Save up to 43%</span>
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {[
              "Monthly" as const,
              "Yearly" as const
            ].map((b) => (
              <button
                key={b}
                className={`seg w-36 h-10 flex items-center justify-center
                  ${billing === b
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black'}`}
                aria-pressed={billing === b}
                onClick={() => setBilling(b)}
              >
                {b === "Yearly" && region === "Global" ? "Yearly" : b}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.keys(plans).map((planKey) => {
          const plan = plans[planKey as keyof typeof plans];
          const priceInfo = currentPrices[planKey as keyof typeof plans];
          const isStandard = planKey === "Standard";

          return (
            <motion.div
              key={plan.name}
              className={`flex flex-col h-full border-2 border-black p-6
                ${isStandard
                  ? 'dark bg-black text-white lg:-my-6 lg:py-12'
                  : 'bg-white hover:bg-black hover:text-white hover:border-4 transition-colors duration-100'}
                `}
              whileHover={{
                scale: isStandard ? 1 : 1.02
              }}
              transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Plan name and Recommended tag */}
              <div className="flex items-baseline mb-4">
                <p className="lbl flex-1">{plan.name}</p>
                {isStandard && (
                  <span className="lbl border border-black px-2 py-0.5">Recommended</span>
                )}
              </div>

              {/* Description */}
              <p className="text-base mb-6">{plan.description}</p>

              {/* India-specific pricing details */}
              {region === "India" && (
                <>
                  {/* Original price (crossed out) */}
                  {priceInfo.original !== undefined && (
                    <div className="mb-2">
                      <p className="lbl line-through text-xs">
                        {formatIndiaPrice(priceInfo.original)}
                      </p>
                      <p className="lbl mt-1">{billing === "Monthly" ? "per month" : "per year"}</p>
                    </div>
                  )}

                  {/* Current price */}
                  <div className="mb-4">
                    <p className="font-display text-5xl tracking-tight">
                      {formatIndiaPrice(priceInfo.current)}
                    </p>
                    <p className="lbl mt-2">
                      {billing === "Monthly" ? "per month" : "per year"}
                    </p>
                  </div>

                  {/* Savings badge - India only, Monthly billing */}
                  {region === "India" && priceInfo.original !== undefined && billing === "Monthly" && (
                    <div className="flex items-baseline mb-6">
                      <div className="lbl border border-black px-2 py-0.5 mr-2">
                        Save ₹{formatIndiaPrice(
                          (priceInfo.original as number) - (priceInfo.current as number)
                        )}
                      </div>
                      <div className="lbl border border-black px-2 py-0.5">
                        {calculateDiscountPercent(
                          (priceInfo.original as number),
                          (priceInfo.current as number)
                        )}%
                      </div>
                    </div>
                  )}

                  {/* Effective monthly price (Yearly only) */}
                  {billing === "Yearly" && (
                    <p className="lbl mb-6">
                      Effective {getIndiaEffectiveMonthly(priceInfo.current)} / month
                    </p>
                  )}
                </>
              )}

              {/* Global pricing details */}
              {region === "Global" && (
                <>
                  {/* Current price */}
                  <div className="mb-4">
                    <p className="font-display text-5xl tracking-tight">
                      {formatGlobalPrice(priceInfo.current)}
                    </p>
                    <p className="lbl mt-2">
                      {billing === "Monthly" ? "per month" : "per year"}
                    </p>
                  </div>

                  {/* Effective monthly price (Yearly only) */}
                  {billing === "Yearly" && (
                    <p className="lbl mb-6">
                      Effective {getGlobalEffectiveMonthly(priceInfo.current)} / month
                    </p>
                  )}
                </>
              )}

              {/* Feature checklist */}
              <div className="flex-1 mb-6">
                <ul className="space-y-2 text-base">
                  {plan.features.map((feature, index) => {
                    // Handle special "Everything in X" cases
                    const displayText =
                      feature === "Everything in Basic"
                        ? "Everything in Basic"
                        : feature === "Everything in Standard"
                          ? "Everything in Standard"
                          : feature;

                    return (
                      <li key={index} className="flex items-start gap-3">
                        <motion.div
                          className="size-5 flex-shrink-0 mt-0.5 flex items-center justify-center border border-black"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <span>{displayText}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Get Started button */}
              <motion.a
                href={SIGNUP_URL}
                className={`btn w-full justify-between mt-auto
                  ${isStandard
                    ? 'bg-white text-black'
                    : 'bg-black text-white'}
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Get Started <span className="group-hover:underline">→</span>
              </motion.a>
            </motion.div>
          );
        })}
      </div>

      {/* Trust strip */}
      <div className="border border-black px-4 py-3 flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <motion.div className="size-4 flex-shrink-0 flex items-center justify-center border border-black" />
          <span className="lbl">Secure payments via Razorpay</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div className="size-4 flex-shrink-0 flex items-center justify-center border border-black" />
          <span className="lbl">Cancel anytime</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div className="size-4 flex-shrink-0 flex items-center justify-center border border-black" />
          <span className="lbl">Your health data stays private</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div className="size-4 flex-shrink-0 flex items-center justify-center border border-black" />
          <span className="lbl">AI-powered personalisation</span>
        </div>
      </div>

      {/* Renewal footnote */}
      <p className="lbl text-center">
        Subscriptions renew according to your selected billing period unless cancelled.
      </p>
    </div>
  );
}

// Helper function to calculate discount percentage
function calculateDiscountPercent(original: number, current: number): number {
  return Math.round((original - current) / original * 100);
}