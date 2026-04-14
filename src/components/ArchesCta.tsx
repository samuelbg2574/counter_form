import Image from "next/image";

import { ArchesButton } from "@/components/ArchesButton";

export function ArchesCta() {
  return (
    <section className="arches-cta">
      <Image src="/images/arches/11-cta-image.jpg" alt="Dark studio workspace" fill sizes="100vw" />
      <div className="arches-cta-shade" />
      <div className="arches-cta-content reveal">
        <h2>Ready for a site that earns its keep?</h2>
        <ArchesButton href="/contact">SUBMIT AN ENQUIRY</ArchesButton>
      </div>
    </section>
  );
}
