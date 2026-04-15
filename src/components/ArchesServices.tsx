import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { ArchesButton } from "@/components/ArchesButton";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/components/arches-data";

export function ArchesServices() {
  return (
    <section className="arches-section arches-services" id="services">
      <div className="arches-container">
        <SectionLabel letter="B" label="WHAT YOU GET" />
        <div className="arches-section-head">
          <div>
            <h2>One site that makes the right enquiry easier to send.</h2>
            <p>Two focused services. Both built around one question: is this helping serious visitors become paying clients?</p>
          </div>
          <ArchesButton
            href="/services"
            analyticsEvent="service_offer_click"
            analyticsLabel="View all services"
            analyticsLocation="home_services_header"
          >
            VIEW ALL SERVICES
          </ArchesButton>
        </div>
        <div className="arches-service-list">
          {services.map((service, index) => (
            <Link
              className="arches-service-row reveal"
              href={service.href}
              key={service.title}
              style={{ "--service-index": index } as CSSProperties}
              data-analytics-event="service_offer_click"
              data-analytics-label={service.title}
              data-analytics-location="home_service_row"
              data-analytics-slug={service.slug}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
