"use client";
import { motion, useInView } from "motion/react";
import { useRef, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  className?: string;
  once?: boolean;
  label?: string;
  suffix?: string;
}

export default function CountUp({
  value,
  className,
  once = true,
  label,
  suffix = "+"
}: CountUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once });
  const animatedValue = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      // Animate the motion value using the animate function
      animate(animatedValue, [0, value], {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1]
      });
    }
  }, [inView, value, animatedValue]);

  // For SSR and non-JS users, show the final value immediately
  const displayValue = inView ? Math.round(animatedValue.get()) : value;

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      <span>{displayValue}</span>
      {label && <span className="ml-2 lbl">{label}{suffix}</span>}
    </motion.span>
  );
}