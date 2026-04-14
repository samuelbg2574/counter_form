import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type ArchesButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ArchesButton({ href, children, className }: ArchesButtonProps) {
  return (
    <a className={cn("arches-pill", className)} href={href}>
      <span className="arches-pill-icon">
        <ArrowIcon />
      </span>
      <span className="arches-pill-label">{children}</span>
    </a>
  );
}
