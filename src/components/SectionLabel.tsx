import type { SectionKey } from "@/types/arches";
import { cn } from "@/lib/utils";

type SectionLabelProps = SectionKey & {
  inverted?: boolean;
};

export function SectionLabel({ letter, label, inverted }: SectionLabelProps) {
  return (
    <div className={cn("section-label", inverted && "section-label-inverted")}>
      <span className="section-label-chip">{letter}</span>
      <span className="section-label-text">{label}</span>
      <span className="section-label-rule" />
    </div>
  );
}

