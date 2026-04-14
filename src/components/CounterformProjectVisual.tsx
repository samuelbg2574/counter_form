import Image from "next/image";

import type { Project } from "@/types/arches";

type CounterformProjectVisualProps = {
  project: Project;
  priority?: boolean;
  size?: "row" | "card" | "hero";
};

export function CounterformProjectVisual({ project, priority = false, size = "row" }: CounterformProjectVisualProps) {
  return (
    <div className={`counterform-project-visual counterform-project-visual--${size}`}>
      <Image
        src={project.image}
        alt={`${project.title} art-directed case study visual`}
        fill={size === "hero"}
        width={size === "hero" ? undefined : 932}
        height={size === "hero" ? undefined : 560}
        priority={priority}
        sizes={size === "hero" ? "100vw" : "(max-width: 768px) 100vw, 466px"}
      />
      <div className="counterform-project-visual__wash" />
      <div className="counterform-project-visual__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="counterform-project-visual__panel">
        <span>{project.category}</span>
        <strong>{project.title}</strong>
        <small>{project.size}</small>
      </div>
      <div className="counterform-project-visual__spec" aria-hidden="true">
        <span>IA</span>
        <span>UX</span>
        <span>NEXT</span>
      </div>
    </div>
  );
}
