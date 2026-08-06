"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon";

export function ProofSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="proof-slider-wrapper">
      <div className="hero-slider-card">
        <div className="hero-slider-image-wrap">
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            className="hero-slider-image"
          />
        </div>
        <div className="hero-slider-body">
          <div className="hero-slider-tag">REAL INSPECTION PROOF</div>
          <h3>{slides[currentIndex].title}</h3>
          <p>{slides[currentIndex].desc}</p>
        </div>
        <div className="hero-slider-actions">
          <div className="hero-slider-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`slider-dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="slider-nav" onClick={handlePrev} aria-label="Previous image">
              <Icon name="arrowLeft" />
            </button>
            <button className="slider-nav" onClick={handleNext} aria-label="Next image">
              <Icon name="arrowRight" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
