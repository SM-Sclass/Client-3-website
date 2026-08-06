"use client";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0, effect = "fade-up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const baseStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "translateY(0) scale(1)"
      : effect === "fade-up"
      ? "translateY(40px)"
      : effect === "fade-in"
      ? "translateY(0)"
      : "scale(0.95)",
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={baseStyle}>
      {children}
    </div>
  );
}
