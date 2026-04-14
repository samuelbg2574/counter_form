import Image from "next/image";
import type { CSSProperties } from "react";

import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/components/arches-data";

export default function ServicesPage() {
  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <section className="arches-subhero">
        <div className="arches-container">
          <p className="arches-eyebrow">SERVICES</p>
          <h1>Focused website design and SEO for sites that need to earn trust quickly.</h1>
          <p>Start with the visual system buyers judge, then improve the structure search engines read.</p>
        </div>
      </section>
      <section className="arches-section arches-listing">
        <div className="arches-container">
          <SectionLabel letter="A" label="SERVICE INDEX" />
          <div className="arches-listing-grid">
            {services.map((service, index) => (
              <a
                className="arches-listing-card reveal"
                href={service.href}
                key={service.slug}
                style={{ "--service-index": index } as CSSProperties}
              >
                <div className="arches-listing-media">
                  <Image src={service.image} alt={`${service.title} service image`} width={720} height={560} />
                </div>
                <p>COUNTERFORM OFFER 0{index + 1}</p>
                <h2>{service.title}</h2>
                <span>{service.description}</span>
                <strong>VIEW SERVICE</strong>
              </a>
            ))}
          </div>
          <ArchesButton href="/contact" className="arches-listing-cta">
            DISCUSS A PROJECT
          </ArchesButton>
        </div>
      </section>
      <ArchesFooter />
    </main>
  );
}
