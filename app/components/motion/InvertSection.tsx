"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface InvertSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function InvertSection({ children, className }: InvertSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#FFFFFF", "#000000", "#FFFFFF"]);
  const textColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#000000", "#FFFFFF", "#000000"]);

  return (
    <motion.section
      ref={ref}
      className={className}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <motion.div style={{ opacity }}>{children}</motion.div>
    </motion.section>
  );
}