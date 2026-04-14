"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import { SectionLabel } from "@/components/SectionLabel";
import { ArrowIcon } from "@/components/icons";
import { proofPoints } from "@/components/arches-data";

export function ArchesTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const loopedProof = [...proofPoints, ...proofPoints];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % proofPoints.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % proofPoints.length);
  };

  return (
    <section className="arches-testimonials" id="proof">
      <div className="arches-container">
        <SectionLabel letter="E" label="OPERATING STANDARD" inverted />
        <div className="arches-testimonial-frame" aria-live="polite">
          <div
            className="arches-testimonial-track"
            style={{ "--active-index": activeIndex } as CSSProperties}
          >
            {loopedProof.map((item, index) => (
              <article className="arches-testimonial-card reveal" key={`${item.title}-${index}`}>
                <p>{item.statement}</p>
                <div className="arches-person">
                  <Image src={item.image} alt={`${item.title} standard`} width={84} height={84} />
                  <div>
                    <h3>{item.title}</h3>
                    <span>{item.detail}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button className="arches-carousel-next" type="button" aria-label="Next standard" onClick={goNext}>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
