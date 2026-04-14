import type { BlogPost, ProcessStep, Project, ProofPoint, Service } from "@/types/arches";

export const projects: Project[] = [
  {
    slug: "northline-analytics",
    location: "B2B SaaS",
    year: "2026",
    title: "Northline Analytics",
    description: "A sharpened web system for a technical product that needed enterprise trust without flattening its edge.",
    category: "Strategy",
    size: "47 screens",
    service: "Website Build",
    image: "/images/arches/04-project-thumb-image.jpg",
    href: "/work/northline-analytics",
    summary: "Positioning, interface direction, and a conversion site for a data platform selling to senior operators.",
    challenge:
      "The old story buried the product under feature language. Buyers needed to understand the business value before the dashboard details.",
    outcome:
      "We rebuilt the narrative around decisions, not dashboards, then carried that story through page structure, motion, and sales-ready case modules.",
  },
  {
    slug: "aster-and-rye",
    location: "Commerce",
    year: "2026",
    title: "Aster & Rye",
    description: "An editorial storefront concept for a premium homeware label moving beyond a template catalog.",
    category: "Commerce",
    size: "31 templates",
    service: "Design System",
    image: "/images/arches/05-project-thumb-image.jpg",
    href: "/work/aster-and-rye",
    summary: "A commerce experience with slower, more deliberate pacing, stronger product storytelling, and modular launch pages.",
    challenge:
      "The brand looked polished but interchangeable. The product detail pages needed atmosphere without reducing conversion clarity.",
    outcome:
      "We created a visual system where large crops, sparse copy, and tactile buying moments make the store feel owned rather than assembled.",
  },
  {
    slug: "port-meridian",
    location: "Hospitality",
    year: "2025",
    title: "Port Meridian",
    description: "A booking-led brand site for a coastal retreat with a calm editorial rhythm and sharper enquiry flow.",
    category: "Hospitality",
    size: "18 modules",
    service: "Launch System",
    image: "/images/arches/06-project-thumb-image.jpg",
    href: "/work/port-meridian",
    summary: "A hospitality website direction that moves from mood to proof to booking without resort-template language.",
    challenge:
      "The existing pages leaned on broad lifestyle copy. The site needed a specific point of view and a stronger enquiry path.",
    outcome:
      "We reframed the experience around seasonal stays, quiet interaction, and a compact content model the team can keep fresh.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "#01",
    title: "Useful DNA Only",
    description:
      "Keep the structure that helps the buyer understand the offer. Remove the parts that make the page feel bought.",
  },
  {
    number: "#02",
    title: "Visible Divergence",
    description:
      "Fonts, colour, imagery, spacing, and section rhythm must change the first impression before anyone reads the copy.",
  },
  {
    number: "#03",
    title: "Commercial Order",
    description: "Proof, services, process, standards, and contact are arranged around what a buyer needs to believe next.",
  },
  {
    number: "#04",
    title: "Full-System Finish",
    description:
      "The homepage, routes, responsive states, links, and interaction details have to feel like one commissioned system.",
  },
];

export const services: Service[] = [
  {
    slug: "template-repositioning",
    title: "Template Repositioning",
    description:
      "Turn a strong template foundation into a distinct brand direction, page order, copy system, and visual language.",
    image: "/images/arches/07-service-thumb-image.jpg",
    href: "/services/template-repositioning",
    detail:
      "Best when you already have a cloned or purchased design that feels close, but still reads too generic for premium client work.",
    deliverables: ["Reference audit", "Brand thesis", "Homepage narrative", "Copy rewrite", "Visual divergence checklist"],
  },
  {
    slug: "conversion-websites",
    title: "Conversion Websites",
    description:
      "Design and build focused marketing sites with clear offers, work proof, fast routes to enquiry, and polished responsive behavior.",
    image: "/images/arches/08-service-thumb-image.jpg",
    href: "/services/conversion-websites",
    detail:
      "For agencies, consultants, studios, and service businesses that need a site to carry sales conversations, not just look finished.",
    deliverables: ["Information architecture", "Next.js implementation", "Responsive sections", "Contact flow", "Performance pass"],
  },
  {
    slug: "case-study-systems",
    title: "Case Study Systems",
    description:
      "Create work pages that make your process and outcomes feel specific, credible, and worth a premium price.",
    image: "/images/arches/09-service-thumb-image.jpg",
    href: "/services/case-study-systems",
    detail:
      "For studios that have good work but weak presentation. We give each project a clear role, narrative, and visual module set.",
    deliverables: ["Work index", "Project templates", "Outcome framing", "Image art direction", "Reusable content model"],
  },
  {
    slug: "motion-polish",
    title: "Motion Polish",
    description:
      "Add scroll reveals, tactile buttons, carousel behavior, and micro-interactions that make the site feel deliberately built.",
    image: "/images/arches/10-service-thumb-image.jpg",
    href: "/services/motion-polish",
    detail:
      "For static builds that need presence. We keep motion restrained, accessible, and tied to layout hierarchy rather than decoration.",
    deliverables: ["Reveal system", "Hover states", "Carousel logic", "Reduced-motion support", "Device QA"],
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
