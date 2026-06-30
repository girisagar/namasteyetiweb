"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR =
  ".section__head, .service-card, .dish, .review, .catering__inner, .story__inner, .location__inner, .rewards__inner, .final-cta__inner";

/**
 * Renders nothing. On mount it adds the `.reveal` class to the same set of
 * elements the original script targeted and reveals them on scroll — identical
 * behavior, just driven from React.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );
    targets.forEach((el) => el.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
