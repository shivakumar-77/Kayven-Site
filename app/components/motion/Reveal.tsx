"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
}

export default function Reveal({ children, className, once = true, delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
