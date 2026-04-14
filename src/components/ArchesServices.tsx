import Image from "next/image";

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
            <h2>Services built for the gap between template and custom.</h2>
            <p>Use the clone as a scaffold, then replace the parts that make it feel predictable.</p>
          </div>
          <ArchesButton href="/services">VIEW ALL SERVICES</ArchesButton>
        </div>
        <div className="arches-service-list">
          {services.map((service) => (
            <a className="arches-service-row reveal" href={service.href} key={service.title}>
              <Image src={service.image} alt={`${service.title} visual reference`} width={500} height={500} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
