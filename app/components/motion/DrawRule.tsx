"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface DrawRuleProps {
  className?: string;
  once?: boolean;
}

export default function DrawRule({ className, once = true }: DrawRuleProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scaleX: 0, originX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}