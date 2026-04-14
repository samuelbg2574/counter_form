"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    root.classList.add("arches-motion-ready");

    const syncHeader = () => {
      root.classList.toggle("arches-scrolled", window.scrollY > 24);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", syncHeader);
      root.classList.remove("arches-motion-ready", "arches-scrolled");
    };
  }, []);

  return null;
}
