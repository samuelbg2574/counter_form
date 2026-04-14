import { SectionLabel } from "@/components/SectionLabel";
import { processSteps } from "@/components/arches-data";

export function ArchesProcess() {
  return (
    <section className="arches-process" id="process">
      <div className="arches-container">
        <SectionLabel letter="C" label="PROCESS" inverted />
        <div className="arches-process-grid">
          <h2>A practical path from cloned page to ownable system.</h2>
          {processSteps.map((step) => (
            <article className="arches-process-card reveal" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
