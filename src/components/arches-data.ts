import type { BlogPost, ProcessStep, Project, ProofPoint, Service } from "@/types/arches";

export const projects: Project[] = [
  {
    slug: "2728-photos",
    location: "Fine Art Photography",
    year: "2026",
    title: "2728 Photos",
    description: "A fine-art photography site that sells atmosphere before it sells prints — so enquiries arrive already convinced.",
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
    description: "A local sports site that turns curious parents into booked taster sessions, without a phone call in the way.",
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
    description: "A tuition site that makes parents trust the tutor before they've sent a single message.",
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
    title: "Free 30-min project call",
    description:
      "You tell us about the jobs you want more of. We tell you honestly whether a new site will move the needle.",
  },
  {
    number: "02",
    title: "Plan and proposal",
    description:
      "Fixed price, fixed timeline, and a one-page plan covering audience, message, and structure. No surprises mid-build.",
  },
  {
    number: "03",
    title: "Design and build",
    description: "We design and build in weeks, not months. You see progress as we go — no black-box handover at the end.",
  },
  {
    number: "04",
    title: "Launch and support",
    description:
      "We launch, hand over full control, and stay on call for the first 30 days to tune anything that comes up.",
  },
];

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Websites that convert",
    description:
      "A site that looks like the premium choice, loads in under a second, and turns the right visitors into real enquiries — not tyre-kickers.",
    image: "/images/arches/08-service-thumb-image.jpg",
    href: "/services/web-design",
    detail:
      "For UK builders, architects, and garden designers who want their website to match the quality of the work they do.",
    deliverables: [
      "Positioning and homepage strategy",
      "Responsive design across every page",
      "Built in Next.js for real speed",
      "Launch, QA, and handover",
    ],
  },
  {
    slug: "seo-optimisation",
    title: "Get found by the right people",
    description:
      "On-page and technical SEO so you show up when a local client is actively looking to spend money — not just when they're browsing.",
    image: "/images/arches/09-service-thumb-image.jpg",
    href: "/services/seo-optimisation",
    detail:
      "For existing sites that need to rank for the services and areas where your best-paying work comes from.",
    deliverables: [
      "Local and service-page SEO plan",
      "Metadata, headings, and schema",
      "Core Web Vitals fixes",
      "Content structure that ranks",
    ],
  },
];

export const proofPoints: ProofPoint[] = [
  {
    statement: "Your site will load in under a second — or we rebuild it until it does.",
    title: "Truly fast",
    detail: "Every build passes Google's Core Web Vitals. Faster sites rank higher and convert more.",
    image: "/images/arches/12-review-image-01.jpg",
  },
  {
    statement: "Every page is built around one question: what does a buyer need to see next?",
    title: "Designed to sell",
    detail: "We plan the buyer journey before we touch a single pixel. No decoration for decoration's sake.",
    image: "/images/arches/13-review-image-02.jpg",
  },
  {
    statement: "Real photography, custom layout, a visual system that belongs to your business.",
    title: "Built to feel yours",
    detail: "No stock, no template look. The site feels like yours from the first scroll — not like our last project.",
    image: "/images/arches/14-review-image-03.jpg",
  },
  {
    statement: "Fixed prices, fixed timelines, zero scope creep.",
    title: "Straight terms",
    detail: "You know the cost and the delivery date before we start. We'd rather quote fairly than surprise you later.",
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
