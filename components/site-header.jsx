"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { Icon } from "@/components/icon";
import { contactConfig } from "@/app/data/business";

const navigation = [
  { label: "Home", href: "/" },
  { label: "New Car PDI", href: "/services/pre-delivery-inspection" },
  { label: "Used Car Inspection", href: "/services/pre-purchase-inspection" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Sample Report", href: "/sample-report" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleEscape(event) {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      toggleRef.current?.focus();
    }

    function handleOutsidePress(event) {
      if (!headerRef.current?.contains(event.target)) setIsMenuOpen(false);
    }

    const desktop = window.matchMedia("(min-width: 1001px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutsidePress);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handleOutsidePress);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container nav-shell">
        <BrandMark />
        <button
          ref={toggleRef}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <Icon className="menu-toggle-icon" name={isMenuOpen ? "close" : "menu"} />
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-solid header-cta" href={`tel:${contactConfig.phone}`}>
          <Icon className="button-icon" name="phone" />
          Call to book
        </a>
      </div>
    </header>
  );
}
