import Image from "next/image";

import { ArchesButton } from "@/components/ArchesButton";

export function ArchesHero() {
  return (
    <section className="arches-hero">
      <Image
        src="/images/arches/01-hero-image.png"
        alt="Layered studio reference wall"
        fill
        priority
        sizes="100vw"
        className="arches-hero-image"
      />
      <div className="arches-hero-shade" />
      <div className="arches-hero-copy">
        <p className="arches-eyebrow">COUNTERFORM STUDIO</p>
        <h1>Premium web systems from strong templates, rebuilt until they feel owned.</h1>
      </div>
      <div className="arches-hero-bottom">
        <p>We turn cloned foundations into distinctive agency sites with sharper story, motion, and page depth.</p>
        <ArchesButton href="/work">VIEW WORK</ArchesButton>
      </div>
    </section>
  );
}
