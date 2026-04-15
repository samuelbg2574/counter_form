import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type ArchesButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  analyticsEvent?: string;
  analyticsLabel?: string;
  analyticsLocation?: string;
  analyticsSlug?: string;
};

export function ArchesButton({
  href,
  children,
  className,
  external = false,
  analyticsEvent,
  analyticsLabel,
  analyticsLocation,
  analyticsSlug,
}: ArchesButtonProps) {
  return (
    <a
      className={cn("arches-pill", className)}
      data-analytics-event={analyticsEvent}
      data-analytics-label={analyticsLabel}
      data-analytics-location={analyticsLocation}
      data-analytics-slug={analyticsSlug}
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
