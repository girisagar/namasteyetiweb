"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#story", label: "Our Story" },
  { href: "#rewards", label: "Rewards" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Sticky header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`} id="header">
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label="Namaste Yeti home">
          <span className="brand__mark">🏔️</span>
          <span className="brand__text">
            <span className="brand__name">Namaste Yeti</span>
            <span className="brand__tag">Himalayan Indian Kitchen</span>
          </span>
        </a>

        <nav
          className={`nav${open ? " is-open" : ""}`}
          id="primary-nav"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#order" className="btn btn--primary btn--order">
            Order Online
          </a>
          <button
            className="nav-toggle"
            id="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
