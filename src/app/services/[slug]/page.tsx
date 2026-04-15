import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts, services } from "@/components/arches-data";
import { absoluteUrl, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

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
    title: service ? service.title : "Services",
    description: service?.description,
    alternates: { canonical: service ? service.href : "/services" },
    openGraph: service
      ? {
          title: service.title,
          description: service.description,
          url: service.href,
          images: [{ url: service.ogImage, alt: `${service.title} service image` }],
        }
      : undefined,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((post) => service.relatedPostHrefs.includes(post.href));
  const schema = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: service.title, href: service.href },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      serviceType: service.title,
      url: absoluteUrl(service.href),
      image: absoluteUrl(service.ogImage),
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      provider: {
        "@type": "ProfessionalService",
        name: "Counterform Studio",
        url: absoluteUrl("/"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />
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
        <section className="arches-section arches-service-depth">
          <div className="arches-container arches-service-depth-grid">
            <article className="reveal">
              <p className="arches-detail-kicker">Who it is for</p>
              <h2>{service.audience}</h2>
            </article>
            <article className="reveal">
              <p className="arches-detail-kicker">How it improves enquiries</p>
              <p>{service.conversionImpact}</p>
            </article>
            <article className="reveal">
              <p className="arches-detail-kicker">What you get</p>
              <ul className="arches-service-checklist">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="arches-container arches-faq-grid">
            <div className="reveal">
              <p className="arches-detail-kicker">FAQs</p>
              <h2>Questions serious buyers usually ask first.</h2>
            </div>
            <div className="arches-faq-list reveal">
              {service.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="arches-container arches-related-writing reveal">
            <p className="arches-detail-kicker">Related writing</p>
            <div>
              {relatedPosts.map((post) => (
                <Link href={post.href} key={post.slug}>
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="arches-container arches-case-study-cta reveal">
            <h2>Want this applied to your site?</h2>
            <p>Send the offer, the audience, and the site you have now. We will show you the clearest route to a premium web presence.</p>
            <ArchesButton href="/contact">BOOK A PROJECT REVIEW</ArchesButton>
          </div>
        </section>
      </article>
      <ArchesFooter />
    </main>
  );
}
