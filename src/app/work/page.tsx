import type { Metadata } from "next";

import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { CounterformProjectVisual } from "@/components/CounterformProjectVisual";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/components/arches-data";

export const metadata: Metadata = {
  title: "Selected Work — Premium Websites for UK Independents",
  description:
    "Live websites shipped by Counterform Studio. Photography, sport, and education projects built around clear positioning and fast enquiry paths.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <section className="arches-subhero">
        <div className="arches-container">
          <p className="arches-eyebrow">SELECTED WORK</p>
          <h1>Live websites for clients with very different buyer journeys.</h1>
          <p>Photography, sport, and education projects built around clear positioning, strong first impressions, and fast enquiry paths.</p>
        </div>
      </section>
      <section className="arches-section arches-listing">
        <div className="arches-container">
          <SectionLabel letter="A" label="WORK INDEX" />
          <div className="arches-listing-grid">
            {projects.map((project) => (
              <a className="arches-listing-card reveal" href={project.href} key={project.slug}>
                <CounterformProjectVisual project={project} size="card" />
                <p>
                  {project.location} <span>-</span> {project.year}
                </p>
                <h2>{project.title}</h2>
                <span>{project.summary}</span>
              </a>
            ))}
          </div>
          <ArchesButton href="/contact" className="arches-listing-cta">
            PLAN A BUILD
          </ArchesButton>
        </div>
      </section>
      <ArchesFooter />
    </main>
  );
}
