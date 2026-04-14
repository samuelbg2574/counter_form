import { notFound } from "next/navigation";

import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { CounterformProjectVisual } from "@/components/CounterformProjectVisual";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/components/arches-data";

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
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
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
                <ArchesButton href={project.liveUrl} external>
                  VIEW LIVE SITE
                </ArchesButton>
                <ArchesButton href="/contact">BUILD SOMETHING LIKE THIS</ArchesButton>
              </div>
            </div>
          </div>
        </section>
      </article>
      <ArchesFooter />
    </main>
  );
}
