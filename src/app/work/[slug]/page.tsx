import { notFound } from "next/navigation";
import Link from "next/link";

import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { CounterformProjectVisual } from "@/components/CounterformProjectVisual";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts, projects, services } from "@/components/arches-data";
import { absoluteUrl, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} — ${project.category}` : "Work",
    description: project?.summary,
    alternates: { canonical: project ? project.href : "/work" },
    openGraph: project
      ? {
          title: `${project.title} — ${project.category}`,
          description: project.summary,
          url: project.href,
          images: [{ url: project.images.hero, alt: project.imageAlt }],
        }
      : undefined,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedService = services.find((service) => service.href === project.serviceHref);
  const relatedPost = blogPosts.find((post) => post.href === project.relatedPostHref);
  const schema = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Work", href: "/work" },
      { name: project.title, href: project.href },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: absoluteUrl(project.href),
      image: absoluteUrl(project.images.hero),
      about: project.category,
      creator: {
        "@type": "Organization",
        name: "Counterform Studio",
        url: absoluteUrl("/"),
      },
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
        <section className="arches-detail-hero">
          <CounterformProjectVisual project={project} priority size="hero" />
          <div className="arches-container arches-detail-hero-copy">
            <p className="arches-eyebrow">
              {project.location} <span>-</span> {project.year}
            </p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
        </section>
        <section className="arches-section arches-detail-body">
          <div className="arches-container arches-detail-grid">
            <div className="reveal">
              <p className="arches-detail-kicker">Challenge</p>
              <h2>{project.challenge}</h2>
            </div>
            <div className="reveal">
              <p className="arches-detail-kicker">Outcome</p>
              <p>{project.outcome}</p>
              <dl>
                <div>
                  <dt>Focus</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Output</dt>
                  <dd>{project.size}</dd>
                </div>
                <div>
                  <dt>Service</dt>
                  <dd>{project.service}</dd>
                </div>
              </dl>
              <div className="arches-detail-actions">
                <ArchesButton
                  href={project.liveUrl}
                  external
                  analyticsEvent="live_site_click"
                  analyticsLabel={project.title}
                  analyticsLocation="work_detail_actions"
                  analyticsSlug={project.slug}
                >
                  VIEW LIVE SITE
                </ArchesButton>
                <ArchesButton
                  href={project.serviceHref}
                  analyticsEvent="service_offer_click"
                  analyticsLabel={project.service}
                  analyticsLocation="work_detail_actions"
                  analyticsSlug={project.slug}
                >
                  VIEW SERVICE
                </ArchesButton>
                <ArchesButton
                  href="/contact"
                  analyticsEvent="contact_cta_click"
                  analyticsLabel="Build something like this"
                  analyticsLocation="work_detail_actions"
                  analyticsSlug={project.slug}
                >
                  BUILD SOMETHING LIKE THIS
                </ArchesButton>
              </div>
            </div>
          </div>
        </section>
        <section className="arches-section arches-case-study-proof">
          <div className="arches-container">
            <div className="arches-case-study-grid">
              <article className="reveal">
                <p className="arches-detail-kicker">Built for</p>
                <h2>{project.builtFor}</h2>
              </article>
              <article className="reveal">
                <p className="arches-detail-kicker">What changed</p>
                <ul className="arches-case-study-list">
                  {project.whatChanged.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="reveal">
                <p className="arches-detail-kicker">Why it works</p>
                <p>{project.whyItWorks}</p>
                <div className="arches-case-study-links">
                  {relatedService ? (
                    <Link
                      href={relatedService.href}
                      data-analytics-event="service_offer_click"
                      data-analytics-label={relatedService.title}
                      data-analytics-location="work_detail_related"
                      data-analytics-slug={relatedService.slug}
                    >
                      {relatedService.title}
                    </Link>
                  ) : null}
                  {relatedPost ? <Link href={relatedPost.href}>{relatedPost.title}</Link> : null}
                </div>
              </article>
            </div>
            <div className="arches-case-study-cta reveal">
              <h2>Thinking about this for your business?</h2>
              <p>
                We can shape the same commercial logic around your offer, audience, and enquiry path.
              </p>
              <ArchesButton
                href="/contact"
                analyticsEvent="contact_cta_click"
                analyticsLabel="Book a project review"
                analyticsLocation="work_detail_cta"
                analyticsSlug={project.slug}
              >
                BOOK A PROJECT REVIEW
              </ArchesButton>
            </div>
          </div>
        </section>
      </article>
      <ArchesFooter />
    </main>
  );
}
