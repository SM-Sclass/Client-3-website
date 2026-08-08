"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { Icon } from "@/components/icon";

export function SiteHeader({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="nav-shell">
          <BrandMark />

          <nav className="site-nav" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="button button-solid header-cta" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20PDI%20inspection." target="_blank" rel="noopener noreferrer">
              <Icon className="button-icon" name="whatsapp" />
              Book Now
            </a>

            <button
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="menu-toggle"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <Icon className="menu-toggle-icon" name={isMenuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>

        <div
          className={`mobile-menu${isMenuOpen ? " is-open" : ""}`}
          id="mobile-menu"
          aria-hidden={!isMenuOpen}
        >
          <nav className="mobile-nav" aria-label="Mobile primary">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="button button-solid mobile-menu-cta" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20PDI%20inspection." target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <Icon className="button-icon" name="whatsapp" />
              Book an Inspection
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
