import type { CSSProperties } from "react";

import { SectionLabel } from "@/components/SectionLabel";
import { processSteps } from "@/components/arches-data";

export function ArchesProcess() {
  return (
    <section className="arches-process" id="process">
      <div className="arches-container">
        <SectionLabel letter="C" label="HOW IT WORKS" inverted />
        <div className="arches-process-head">
          <h2>From first call to live site in four clear steps.</h2>
          <p>You stay in the loop. We handle the hard parts.</p>
        </div>
        <div className="arches-standards-grid">
          {processSteps.map((step, index) => (
            <article
              className="arches-standard-card reveal"
              key={step.number}
              style={{ "--standard-index": index } as CSSProperties}
            >
              <div className="arches-standard-glow" />
              <span className="arches-standard-corner arches-standard-corner-tl" />
              <span className="arches-standard-corner arches-standard-corner-tr" />
              <span className="arches-standard-corner arches-standard-corner-bl" />
              <span className="arches-standard-corner arches-standard-corner-br" />
              <span className="arches-standard-ghost">{step.number}</span>
              <div className="arches-standard-meta">
                <span>{step.number}</span>
                <span className="arches-standard-divider" />
                <span>PROCESS</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
