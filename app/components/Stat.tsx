"use client";

import { useState, useEffect, useRef } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

export default function Stat({ value, suffix, label }: StatProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const hasAnimated = useRef(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if we're in a no-JS scenario (html element doesn't have .js class)
    // Or if reduced motion is preferred
    // If so, show final value immediately
    if (typeof document !== 'undefined') {
      const hasJs = document.documentElement && document.documentElement.classList.contains('js');
      let reducedMotion = false;
      if (typeof window !== 'undefined') {
        reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }

      if (!hasJs || reducedMotion) {
        setAnimatedValue(value);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Animate from 0 to value
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          function updateCount(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(progress * value);
            setAnimatedValue(currentValue);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setAnimatedValue(value); // Ensure exact final value
            }
          }

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [value]);

  const displayValue = hasAnimated.current ? animatedValue : value; // Show final value if not animated yet (covers no-JS and reduced motion cases)

  // Format the value with suffix
  const formattedValue =
    suffix === "K+" ? `${(displayValue / 1000).toFixed(0)}K+` :
    suffix === "+" ? `${displayValue}+` :
    `${displayValue}${suffix}`;

  return (
    <div ref={elementRef} className="mb-6">
      <div className="text-7xl md:text-9xl leading-none font-mono tabular-nums">
        {formattedValue}
      </div>
      <p className="lbl text-xs mt-2">{label.toUpperCase()}</p>
    </div>
  );
}