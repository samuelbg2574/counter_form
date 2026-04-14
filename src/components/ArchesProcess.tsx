import type { CSSProperties } from "react";

import { SectionLabel } from "@/components/SectionLabel";
import { processSteps } from "@/components/arches-data";

export function ArchesProcess() {
  return (
    <section className="arches-process" id="process">
      <div className="arches-container">
        <SectionLabel letter="C" label="PROCESS" inverted />
        <div className="arches-process-head">
          <h2>Four standards we hold every de-template build against.</h2>
          <p>
            Each pass has to change how the site is perceived, not just what the page says.
          </p>
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
                <span>STANDARD</span>
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
