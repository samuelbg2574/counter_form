import type { MetadataRoute } from "next";

import { blogPosts, projects, services } from "@/components/arches-data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://counterform.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = ["", "/services", "/work", "/contact", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${SITE_URL}${service.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workEntries = projects.map((project) => ({
    url: `${SITE_URL}${project.href}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}${post.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...serviceEntries, ...workEntries, ...blogEntries];
}
