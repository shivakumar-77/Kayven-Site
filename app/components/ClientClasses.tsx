"use client";

import { useEffect } from "react";

export default function ClientClasses() {
  useEffect(() => {
    // Add 'js' class to indicate JavaScript is available
    document.documentElement.classList.add('js');

    // Add 'reduced-motion' class if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }
  }, []);

  return null;
}