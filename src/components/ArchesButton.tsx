import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type ArchesButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function ArchesButton({ href, children, className, external = false }: ArchesButtonProps) {
  return (
    <a
      className={cn("arches-pill", className)}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span className="arches-pill-icon">
        <ArrowIcon />
      </span>
      <span className="arches-pill-label">{children}</span>
    </a>
  );
}
