import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { CounterformProjectVisual } from "@/components/CounterformProjectVisual";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/components/arches-data";

export default function WorkPage() {
  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <section className="arches-subhero">
        <div className="arches-container">
          <p className="arches-eyebrow">SELECTED WORK</p>
          <h1>Study directions for websites that need to feel commissioned.</h1>
          <p>Each project starts from a familiar pattern, then changes the story, pacing, imagery, and interaction model.</p>
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
