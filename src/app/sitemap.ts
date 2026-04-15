import type { MetadataRoute } from "next";

import { blogPosts, projects, services } from "@/components/arches-data";
import { SITE_URL } from "@/lib/seo";

const STATIC_LAST_MODIFIED = "2026-04-15";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/services", "/work", "/contact", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${SITE_URL}${service.href}`,
    lastModified: service.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workEntries = projects.map((project) => ({
    url: `${SITE_URL}${project.href}`,
    lastModified: project.lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}${post.href}`,
    lastModified: post.dateISO,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...serviceEntries, ...workEntries, ...blogEntries];
}
