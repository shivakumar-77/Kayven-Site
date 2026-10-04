"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface DrawSvgProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  // SVG attributes
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;
  role?: string;
  "aria-label"?: string;
}

export default function DrawSvg({
  children,
  className,
  once = true,
  viewBox,
  fill,
  stroke,
  strokeWidth,
  role,
  ...props
}: DrawSvgProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  return (
    <motion.svg
      ref={ref}
      className={className}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      role={role}
      {...props}
      initial={{ pathLength: 0 }}
      animate={inView ? { pathLength: 1 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.svg>
  );
}
