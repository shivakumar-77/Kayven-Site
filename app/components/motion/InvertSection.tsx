"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface InvertSectionProps {
  children: React.ReactNode;
  className?: string;
}

// For stats sections, we want discrete black/white swap, not gradient
export default function InvertSection({ children, className }: InvertSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  // Discrete swap: white background/black text when scrolling up, black background/white text when scrolling down
  // No intermediate grey states
  const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#FFFFFF", "#000000", "#000000"]);
  const textColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#000000", "#FFFFFF", "#FFFFFF"]);
  const childrenOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1]); // Always visible

  return (
    <motion.section
      ref={ref}
      className={className}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <motion.div style={{ opacity: childrenOpacity }}>{children}</motion.div>
    </motion.section>
  );
}