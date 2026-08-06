'use client';

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/icon";

export function HeroSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  if (!slides?.length) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (event) => {
    isDragging.current = true;
    startX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (!isDragging.current) return;
    const currentX = event.touches[0].clientX;
    const diff = currentX - startX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section
      className="hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured inspection carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-slider-card">
        <div className="hero-slider-image-wrap">
          <Image
            alt={`${activeSlide.name} inspection preview`}
            fill
            loading="eager"
            sizes="(max-width: 720px) 100vw, 600px"
            className="hero-slider-image"
            src={activeSlide.image}
          />
        </div>

        <div className="hero-slider-body" aria-live="polite">
          <p className="hero-slider-tag">{activeSlide.name}</p>
          <h3>{activeSlide.title}</h3>
          <p>{activeSlide.text}</p>
        </div>
      </div>

      <div className="hero-slider-actions">
        <button type="button" className="slider-nav" onClick={handlePrev} aria-label="Previous slide">
          <Icon name="arrowLeft" />
        </button>
        <div className="hero-slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`slider-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" className="slider-nav" onClick={handleNext} aria-label="Next slide">
          <Icon name="arrowRight" />
        </button>
      </div>
    </section>
  );
}
