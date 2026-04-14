import Image from "next/image";

import { ArchesButton } from "@/components/ArchesButton";
import { SectionLabel } from "@/components/SectionLabel";

export function ArchesAbout() {
  return (
    <section className="arches-section arches-about" id="studio">
      <div className="arches-container">
        <SectionLabel letter="D" label="STUDIO NOTE" />
        <div className="arches-about-layout reveal">
          <div className="arches-about-copy">
            <h2>We keep the leverage of templates and remove the sameness.</h2>
            <p>
              Counterform is a web studio for founders and agencies who want faster production without accepting
              generic output. We start with proven references, then alter the story, rhythm, imagery, and motion.
            </p>
            <p>
              The goal is not to hide the source. The goal is to make every decision feel intentional enough that the
              source stops mattering.
            </p>
            <ArchesButton href="/contact">START A BUILD</ArchesButton>
          </div>
          <div className="arches-about-stat">
            <Image src="/images/arches/02-about-image.jpg" alt="Studio reference material" width={700} height={840} />
            <strong>01</strong>
            <span>Clone audit before any visual redesign or route expansion.</span>
          </div>
          <div className="arches-about-stat">
            <Image src="/images/arches/03-about-image.jpg" alt="Editorial website art direction" width={700} height={840} />
            <strong>05</strong>
            <span>Core sections rebuilt around proof, offer, process, standards, and contact.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
