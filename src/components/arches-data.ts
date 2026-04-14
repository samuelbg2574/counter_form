import type { BlogPost, ProcessStep, Project, ProofPoint, Service } from "@/types/arches";

export const projects: Project[] = [
  {
    slug: "2728-photos",
    location: "Fine Art Photography",
    year: "2026",
    title: "2728 Photos",
    description: "A high-end photography portfolio built around atmosphere, restraint, and a clear route from browsing to enquiry.",
    category: "Portfolio",
    size: "6 page system",
    service: "Web Design",
    images: {
      row: "/images/counterform/work/2728-photos-row.png",
      card: "/images/counterform/work/2728-photos-card.png",
      hero: "/images/counterform/work/2728-photos-hero.png",
    },
    imageAlt: "Homepage hero screenshot of the 2728 Photos fine art photography website.",
    liveUrl: "https://george-photo-site.vercel.app/",
    href: "/work/2728-photos",
    summary: "A cinematic fine-art photography site with a full-bleed hero, quiet editorial pacing, and direct enquiry routes.",
    challenge:
      "The photographer needed the work to feel premium before visitors reached the portfolio grid. The site had to sell mood, trust, and availability without burying the images under heavy interface.",
    outcome:
      "We framed the homepage like a gallery opening: a strong visual first impression, minimal copy, tactile calls to action, and a portfolio path that keeps the photography in control.",
  },
  {
    slug: "touch-point-judo-academy",
    location: "Local Sport",
    year: "2026",
    title: "Touch Point Judo Academy",
    description: "A local academy website that makes classes feel welcoming, structured, and easy for parents or adult beginners to join.",
    category: "Local Business",
    size: "5 page site",
    service: "Web Design",
    images: {
      row: "/images/counterform/work/touch-point-judo-row.png",
      card: "/images/counterform/work/touch-point-judo-card.png",
      hero: "/images/counterform/work/touch-point-judo-hero.png",
    },
    imageAlt: "Homepage hero screenshot of the Touch Point Judo Academy website.",
    liveUrl: "https://touchpointjudo-mockup.vercel.app/",
    href: "/work/touch-point-judo-academy",
    summary: "A confident local sports site with clear class routes, strong hero messaging, and fast contact paths.",
    challenge:
      "The academy needed to speak to two audiences at once: parents looking for confidence-building kids classes and adults who may be nervous about starting a martial art.",
    outcome:
      "We used bold contrast, friendly copy, direct WhatsApp actions, and clear programme paths so visitors can quickly understand the offer and take the next step.",
  },
  {
    slug: "ttm-tutoring",
    location: "Private Tuition",
    year: "2026",
    title: "TTM Tutoring",
    description: "A private tuition website designed to feel rigorous, calm, and credible for families making high-stakes education decisions.",
    category: "Education",
    size: "8 page system",
    service: "Web Design + SEO",
    images: {
      row: "/images/counterform/work/ttm-tutoring-row.png",
      card: "/images/counterform/work/ttm-tutoring-card.png",
      hero: "/images/counterform/work/ttm-tutoring-hero.png",
    },
    imageAlt: "Homepage hero screenshot of the TTM Tutoring private tuition website.",
    liveUrl: "https://ttm-website-three.vercel.app/",
    href: "/work/ttm-tutoring",
    summary: "An education site with clear positioning, service depth, case-study proof, and search-friendly page structure.",
    challenge:
      "Private tuition buyers need confidence before they enquire. The site had to balance academic authority, warmth, and enough service detail to support organic discovery.",
    outcome:
      "We shaped the site around careful tutor matching, proof-led case studies, and structured service pages so the brand feels selective, credible, and easy to contact.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Audit",
    description:
      "We map the cloned structure, source-like patterns, assets, routes, and conversion gaps before changing the surface.",
  },
  {
    number: "02",
    title: "Direction",
    description:
      "We set the audience, offer, palette, type rhythm, and section story so every visual move has a reason.",
  },
  {
    number: "03",
    title: "Build",
    description: "We rebuild the key sections, responsive states, links, and route depth in strict TypeScript with focused components.",
  },
  {
    number: "04",
    title: "Polish",
    description:
      "We tune motion, accessibility, performance, and maintainability so the site feels premium after the first scroll.",
  },
];

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web Design",
    description:
      "Premium websites for service businesses that need sharper positioning, stronger layouts, and a more credible enquiry path.",
    image: "/images/arches/08-service-thumb-image.jpg",
    href: "/services/web-design",
    detail:
      "For founders, consultants, and studios that need a site to feel commissioned rather than assembled from a template.",
    deliverables: ["Positioning audit", "Homepage direction", "Responsive page design", "Next.js implementation", "Launch QA"],
  },
  {
    slug: "seo-optimisation",
    title: "SEO Optimisation",
    description:
      "Technical and on-page SEO improvements that make the site easier to crawl, clearer to understand, and stronger in search.",
    image: "/images/arches/09-service-thumb-image.jpg",
    href: "/services/seo-optimisation",
    detail:
      "For existing sites that need cleaner indexing, stronger metadata, faster pages, and content structure that supports qualified traffic.",
    deliverables: ["Technical SEO audit", "Metadata rewrite", "Heading structure", "Performance fixes", "Search-ready page plan"],
  },
];

export const proofPoints: ProofPoint[] = [
  {
    statement: "No cloned section order survives the strategy pass.",
    title: "Story First",
    detail: "Each page is reorganized around what a buyer needs to believe next.",
    image: "/images/arches/12-review-image-01.jpg",
  },
  {
    statement: "Motion earns its place by improving hierarchy, not by adding noise.",
    title: "Useful Motion",
    detail: "Scroll, hover, and carousel behavior must make the page feel clearer or more premium.",
    image: "/images/arches/13-review-image-02.jpg",
  },
  {
    statement: "Imagery is treated as art direction, not filler.",
    title: "Owned Visuals",
    detail: "Template stock is replaced, recropped, or reframed until the site has its own visual memory.",
    image: "/images/arches/14-review-image-03.jpg",
  },
  {
    statement: "The system has to hold beyond the first screen.",
    title: "Full-Site Finish",
    detail: "Work, service, and contact pages inherit the theme while avoiding cloned page layouts.",
    image: "/images/arches/15-review-image-04.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    date: "Apr 14, 2026",
    category: "Template Audit",
    title: "How To Spot A Homepage That Still Feels Like A Template",
    summary:
      "A practical pass through section order, stock imagery, generic claims, and interaction details that usually give a cloned site away.",
    image: "/images/arches/21-blog-thumb-image.jpg",
    href: "/#proof",
  },
  {
    date: "Apr 09, 2026",
    category: "Motion",
    title: "Where Scroll Animation Actually Helps A Service Site",
    summary:
      "Motion earns its place when it clarifies order, adds tactile feedback, or makes dense work pages easier to scan.",
    image: "/images/arches/22-blog-thumb-image.jpg",
    href: "/#proof",
  },
  {
    date: "Mar 27, 2026",
    category: "Case Studies",
    title: "Why Work Pages Need A Narrative, Not A Grid Of Thumbnails",
    summary:
      "Premium buyers need to understand the problem, the decision path, and the result before a project gallery can do its job.",
    image: "/images/arches/23-blog-thumb-image.jpg",
    href: "/#proof",
  },
];
