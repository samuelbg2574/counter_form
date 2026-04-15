"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

const analyticsEventAttribute = "data-analytics-event";

function getTrackingElement(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest<HTMLElement>(`[${analyticsEventAttribute}]`);
}

function normaliseMetadataKey(key: string) {
  return key.charAt(0).toLowerCase() + key.slice(1);
}

function getTrackingMetadata(element: HTMLElement) {
  const metadata: Record<string, string> = {};

  for (const [key, value] of Object.entries(element.dataset)) {
    if (!key.startsWith("analytics") || key === "analyticsEvent" || !value) continue;

    const metadataKey = key.slice("analytics".length);
    if (!metadataKey) continue;

    metadata[normaliseMetadataKey(metadataKey)] = value;
  }

  return metadata;
}

export function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = getTrackingElement(event.target);
      const eventName = element?.dataset.analyticsEvent;

      if (!element || !eventName) return;

      track(eventName, getTrackingMetadata(element));
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
