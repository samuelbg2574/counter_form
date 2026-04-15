import Image from "next/image";

import { ArchesButton } from "@/components/ArchesButton";

export function ArchesHero() {
  return (
    <section className="arches-hero">
      <Image
        src="/images/arches/01-hero-image.webp"
        alt="Layered studio reference wall"
        fill
        priority
        sizes="100vw"
        className="arches-hero-image"
      />
      <div className="arches-hero-shade" />
      <div className="arches-hero-copy">
        <p className="arches-eyebrow">COUNTERFORM STUDIO</p>
        <h1>Look like the premium choice. Win the premium jobs.</h1>
      </div>
      <div className="arches-hero-bottom">
        <p>We design and build fast, premium websites for independent UK businesses, so serious visitors understand your value before they ask for a quote.</p>
        <ArchesButton
          href="/contact"
          analyticsEvent="contact_cta_click"
          analyticsLabel="Start your project"
          analyticsLocation="hero"
        >
          START YOUR PROJECT
        </ArchesButton>
      </div>
    </section>
  );
}
