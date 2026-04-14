import Image from "next/image";

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
          <h1>Everything needed to turn a good scaffold into a premium web presence.</h1>
          <p>Start with repositioning, move through the build, then finish with motion and route depth.</p>
        </div>
      </section>
      <section className="arches-section arches-listing">
        <div className="arches-container">
          <SectionLabel letter="A" label="SERVICE INDEX" />
          <div className="arches-listing-grid">
            {services.map((service) => (
              <a className="arches-listing-card reveal" href={service.href} key={service.slug}>
                <Image src={service.image} alt={`${service.title} service image`} width={560} height={560} />
                <p>COUNTERFORM OFFER</p>
                <h2>{service.title}</h2>
                <span>{service.description}</span>
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
