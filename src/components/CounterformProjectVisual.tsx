import Image from "next/image";

import type { Project } from "@/types/arches";

type CounterformProjectVisualProps = {
  project: Project;
  priority?: boolean;
  size?: "row" | "card" | "hero";
};

export function CounterformProjectVisual({ project, priority = false, size = "row" }: CounterformProjectVisualProps) {
  const image = project.images[size];
  const dimensions = {
    row: { width: 932, height: 560 },
    card: { width: 1180, height: 1000 },
    hero: { width: undefined, height: undefined },
  }[size];

  return (
    <div className={`counterform-project-visual counterform-project-visual--${size}`}>
      <Image
        src={image}
        alt={project.imageAlt}
        fill={size === "hero"}
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        sizes={size === "hero" ? "100vw" : "(max-width: 768px) 100vw, 466px"}
      />
      <div className="counterform-project-visual__wash" />
    </div>
  );
}
