"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const choice = localStorage.getItem("cookieConsent");
      setShowBanner(choice === null);
    }
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showBanner) {
        setShowBanner(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showBanner]);

  const acceptAll = () => {
    try {
      localStorage.setItem("cookieConsent", "accepted");
    } catch (e) {
      // Silently handle errors to avoid breaking UI
    }
    setShowBanner(false);
  };

  const rejectAll = () => {
    try {
      localStorage.setItem("cookieConsent", "rejected");
    } catch (e) {
      // Silently handle errors to avoid breaking UI
    }
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 border-4 border-black bg-white z-50 p-4">
      <div className="flex items-center justify-between space-x-3">
        <span className="text-sm">
          We use cookies to improve your experience. Accept or reject non-essential cookies.
        </span>
        <div className="flex space-x-2">
          <button
            onClick={rejectAll}
            className="px-3 py-1 border border-black text-sm hover:bg-black hover:text-white transition-colors"
          >
            Reject
          </button>
          <button
            onClick={acceptAll}
            className="px-3 py-1 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}