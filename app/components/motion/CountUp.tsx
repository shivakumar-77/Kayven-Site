"use client";
import { motion, useInView } from "motion/react";
import { useRef, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  className?: string;
  once?: boolean;
}

export default function CountUp({ value, className, once = true }: CountUpProps) {
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

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      <span>{Math.round(animatedValue.get())}</span>
    </motion.span>
  );
}
