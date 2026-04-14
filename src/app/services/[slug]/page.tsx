import Image from "next/image";
import { notFound } from "next/navigation";

import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { services } from "@/components/arches-data";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} | Counterform Studio` : "Services | Counterform Studio",
    description: service?.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <article>
        <section className="arches-detail-hero arches-service-detail-hero">
          <Image src={service.image} alt={`${service.title} service`} fill priority sizes="100vw" />
          <div className="arches-cta-shade" />
          <div className="arches-container arches-detail-hero-copy">
            <p className="arches-eyebrow">SERVICE</p>
            <h1>{service.title}</h1>
            <p>{service.detail}</p>
          </div>
        </section>
        <section className="arches-section arches-detail-body">
          <div className="arches-container arches-detail-grid">
            <div className="reveal">
              <p className="arches-detail-kicker">What it solves</p>
              <h2>{service.description}</h2>
            </div>
            <div className="reveal">
              <p>{service.detail}</p>
              <ul className="arches-deliverables">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
              <ArchesButton href="/contact">START WITH THIS</ArchesButton>
            </div>
          </div>
        </section>
      </article>
      <ArchesFooter />
    </main>
  );
}
