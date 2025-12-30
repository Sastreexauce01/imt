"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 15.9155;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed  bottom-8 right-8 z-50 flex h-16 w-16 items-center cursor-pointer  justify-center rounded-full  transition-all duration-500 ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-20 scale-75 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 rounded-full bg-primary opacity-90 transition-opacity group-hover:opacity-100" />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/50  opacity-0 blur-xl transition-opacity group-hover:opacity-50" />

      {/* Progress Circle */}
      <svg
        className="absolute inset-0 h-full w-full -rotate-90  bg-transparentc  rounded-full  transition-transform group-hover:scale-110"
        viewBox="0 0 36 36"
      >
        {/* Background circle */}
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="2.5"
        />
        {/* Progress circle */}
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#C7D100"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      </svg>

      {/* Arrow Icon */}
      <ArrowUp 
        className="relative z-10 h-7 w-7 text-secondary transition-transform group-hover:-translate-y-1" 
        strokeWidth={2.5} 
      />
    </button>
  );
};

export default ScrollToTop;