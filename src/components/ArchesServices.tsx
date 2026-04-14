import Image from "next/image";
import type { CSSProperties } from "react";

import { ArchesButton } from "@/components/ArchesButton";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/components/arches-data";

export function ArchesServices() {
  return (
    <section className="arches-section arches-services" id="services">
      <div className="arches-container">
        <SectionLabel letter="B" label="WHAT WE DO" />
        <div className="arches-section-head">
          <div>
            <h2>Two focused ways to make the site work harder.</h2>
            <p>Design the website people judge first, then tune the structure search engines read next.</p>
          </div>
          <ArchesButton href="/services">VIEW ALL SERVICES</ArchesButton>
        </div>
        <div className="arches-service-list">
          {services.map((service, index) => (
            <a
              className="arches-service-row reveal"
              href={service.href}
              key={service.title}
              style={{ "--service-index": index } as CSSProperties}
            >
              <span className="arches-service-index">0{index + 1}</span>
              <div className="arches-service-media">
                <Image src={service.image} alt={`${service.title} visual reference`} width={640} height={500} />
              </div>
              <div className="arches-service-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className="arches-service-link">VIEW OFFER</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
