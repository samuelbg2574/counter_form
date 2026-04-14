import { ArchesButton } from "@/components/ArchesButton";
import { CounterformProjectVisual } from "@/components/CounterformProjectVisual";
import { SectionLabel } from "@/components/SectionLabel";
import { MoreIcon } from "@/components/icons";
import { projects } from "@/components/arches-data";

export function ArchesProjects() {
  return (
    <section className="arches-section arches-projects" id="work">
      <div className="arches-container">
        <SectionLabel letter="A" label="SELECTED WORK" />
        <div className="arches-section-head">
          <div>
            <h2>Real sites, shipped. Fast, clean, built to sell.</h2>
            <p>Three builds across photography, local sport, and private tuition — each one designed to turn visitors into booked work.</p>
          </div>
          <ArchesButton href="/work">VIEW ALL WORK</ArchesButton>
        </div>
        <div className="arches-project-list">
          {projects.map((project) => (
            <a className="arches-project-row reveal" href={project.href} key={project.title}>
              <div className="arches-project-title">
                <p>
                  {project.location} <span>-</span> {project.year}
                </p>
                <h3>{project.title}</h3>
                <span className="arches-read-more">
                  OPEN STUDY
                  <MoreIcon />
                </span>
              </div>
              <CounterformProjectVisual project={project} />
              <div className="arches-project-details">
                <p>{project.description}</p>
                <dl>
                  <div>
                    <dt>FOCUS</dt>
                    <dd>{project.category}</dd>
                  </div>
                  <div>
                    <dt>OUTPUT</dt>
                    <dd>{project.size}</dd>
                  </div>
                  <div>
                    <dt>SERVICE</dt>
                    <dd>{project.service}</dd>
                  </div>
                </dl>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
