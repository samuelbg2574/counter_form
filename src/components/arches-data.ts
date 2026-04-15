import type { BlogPost, ProcessStep, Project, ProofPoint, Service } from "@/types/arches";

export const projects: Project[] = [
  {
    slug: "hawthorn-build",
    location: "Surrey Builder",
    year: "2026",
    lastModified: "2026-04-15",
    title: "Hawthorn Build",
    description:
      "A premium local builder site that turns trade credibility, service clarity, and trust signals into quote enquiries.",
    category: "Local Trade",
    size: "6 page lead-gen site",
    service: "Web Design",
    serviceHref: "/services/web-design",
    images: {
      row: "/images/counterform/work/hawthorn-build-row.webp",
      card: "/images/counterform/work/hawthorn-build-card.webp",
      hero: "/images/counterform/work/hawthorn-build-hero.webp",
    },
    imageAlt: "Homepage hero screenshot of the Hawthorn Build premium builder website.",
    liveUrl: "https://builder-website-teo5.vercel.app/",
    href: "/work/hawthorn-build",
    summary:
      "A Surrey builder site with strong local positioning, service-led structure, and a quote path for high-value home projects.",
    challenge:
      "A building contractor has to sell trust before they can sell the work. The site needed to feel premium, specific, and grounded enough for homeowners considering loft extensions, garage conversions, and full home transformations.",
    outcome:
      "We shaped the homepage around trade-specific positioning, proof points, direct quote actions, and service routes that help serious homeowners understand the offer quickly.",
    builtFor:
      "A local building contractor selling higher-value home improvement projects where the buyer needs confidence before asking for a quote.",
    whatChanged: [
      "The hero leads with a clear promise and local positioning instead of generic contractor copy.",
      "Service routes make loft extensions, garage conversions, and full transformations easy to understand.",
      "Trust signals, review language, and quote CTAs are visible early for homeowners comparing risk as much as price.",
    ],
    whyItWorks:
      "High-value home-improvement buyers need to feel that the contractor is organised, credible, and easy to speak to. The site reduces uncertainty before the first enquiry.",
    relatedPostHref: "/blog/seo-or-new-website-first",
  },
  {
    slug: "2728-photos",
    location: "Fine Art Photography",
    year: "2026",
    lastModified: "2026-04-15",
    title: "2728 Photos",
    description: "A fine-art photography site that sells atmosphere before it sells prints, so enquiries arrive already convinced.",
    category: "Portfolio",
    size: "6 page system",
    service: "Web Design",
    serviceHref: "/services/web-design",
    images: {
      row: "/images/counterform/work/2728-photos-row.webp",
      card: "/images/counterform/work/2728-photos-card.webp",
      hero: "/images/counterform/work/2728-photos-hero.webp",
    },
    imageAlt: "Homepage hero screenshot of the 2728 Photos fine art photography website.",
    liveUrl: "https://george-photo-site.vercel.app/",
    href: "/work/2728-photos",
    summary: "A cinematic fine-art photography site with a full-bleed hero, quiet editorial pacing, and direct enquiry routes.",
    challenge:
      "The photographer needed the work to feel premium before visitors reached the portfolio grid. The site had to sell mood, trust, and availability without burying the images under heavy interface.",
    outcome:
      "We framed the homepage like a gallery opening: a strong visual first impression, minimal copy, tactile calls to action, and a portfolio path that keeps the photography in control.",
    builtFor:
      "A high-end photographer who needs visitors to feel the value of the work before they ask about availability, prints, or commissions.",
    whatChanged: [
      "A cinematic hero leads with mood and authority before any sales copy appears.",
      "Portfolio routes keep the photography central and remove unnecessary interface noise.",
      "Enquiry paths are direct, restrained, and designed to feel appropriate for a premium creative service.",
    ],
    whyItWorks:
      "The site sells atmosphere first, then gives serious buyers a clear path to enquire. That keeps the experience refined without making the next step hard to find.",
    relatedPostHref: "/blog/what-makes-a-website-look-expensive",
  },
  {
    slug: "touch-point-judo-academy",
    location: "Local Sport",
    year: "2026",
    lastModified: "2026-04-15",
    title: "Touch Point Judo Academy",
    description: "A local sports site that turns curious parents into booked taster sessions, without a phone call in the way.",
    category: "Local Business",
    size: "5 page site",
    service: "Web Design",
    serviceHref: "/services/web-design",
    images: {
      row: "/images/counterform/work/touch-point-judo-row.webp",
      card: "/images/counterform/work/touch-point-judo-card.webp",
      hero: "/images/counterform/work/touch-point-judo-hero.webp",
    },
    imageAlt: "Homepage hero screenshot of the Touch Point Judo Academy website.",
    liveUrl: "https://touchpointjudo-mockup.vercel.app/",
    href: "/work/touch-point-judo-academy",
    summary: "A confident local sports site with clear class routes, strong hero messaging, and fast contact paths.",
    challenge:
      "The academy needed to speak to two audiences at once: parents looking for confidence-building kids classes and adults who may be nervous about starting a martial art.",
    outcome:
      "We used bold contrast, friendly copy, direct WhatsApp actions, and clear programme paths so visitors can quickly understand the offer and take the next step.",
    builtFor:
      "A local academy that needs parents and beginners to understand the offer quickly and feel comfortable booking a first session.",
    whatChanged: [
      "The hero speaks directly to confidence, discipline, and first-session clarity.",
      "Programme paths separate children, adults, and new starters without overwhelming the homepage.",
      "Contact routes are visible early so interested visitors can act while motivation is high.",
    ],
    whyItWorks:
      "Local buyers do not need a complicated brand story. They need to know who the classes are for, what happens next, and how to book without friction.",
    relatedPostHref: "/blog/seo-or-new-website-first",
  },
  {
    slug: "ttm-tutoring",
    location: "Private Tuition",
    year: "2026",
    lastModified: "2026-04-15",
    title: "TTM Tutoring",
    description: "A tuition site that makes parents trust the tutor before they've sent a single message.",
    category: "Education",
    size: "8 page system",
    service: "Web Design + SEO",
    serviceHref: "/services/seo-optimisation",
    images: {
      row: "/images/counterform/work/ttm-tutoring-row.webp",
      card: "/images/counterform/work/ttm-tutoring-card.webp",
      hero: "/images/counterform/work/ttm-tutoring-hero.webp",
    },
    imageAlt: "Homepage hero screenshot of the TTM Tutoring private tuition website.",
    liveUrl: "https://ttm-website-three.vercel.app/",
    href: "/work/ttm-tutoring",
    summary: "An education site with clear positioning, service depth, case-study proof, and search-friendly page structure.",
    challenge:
      "Private tuition buyers need confidence before they enquire. The site had to balance academic authority, warmth, and enough service detail to support organic discovery.",
    outcome:
      "We shaped the site around careful tutor matching, proof-led case studies, and structured service pages so the brand feels selective, credible, and easy to contact.",
    builtFor:
      "A private tuition company where parents need to trust the process before they share details about a child's education.",
    whatChanged: [
      "The homepage leads with trust, tutor fit, and the parent decision journey.",
      "Service depth supports organic search without turning the site into a dense brochure.",
      "Case-study proof gives anxious buyers a reason to believe before they enquire.",
    ],
    whyItWorks:
      "Education buyers need reassurance and clarity. The structure gives them both, then routes them into an enquiry path once the brand feels credible.",
    relatedPostHref: "/blog/seo-or-new-website-first",
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
    description: "We design and build in weeks, not months. You see progress as we go. No black-box handover at the end.",
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
    lastModified: "2026-04-15",
    description:
      "A site that looks like the premium choice, loads in under a second, and turns the right visitors into real enquiries, not tyre-kickers.",
    image: "/images/arches/08-service-thumb-image.webp",
    ogImage: "/images/arches/08-service-thumb-image.webp",
    href: "/services/web-design",
    detail:
      "For UK independents whose website needs to match the quality of the work they sell.",
    audience:
      "Best for consultants, creatives, private tutors, local academies, photographers, and specialist service businesses whose current site undersells the work.",
    conversionImpact:
      "We clarify the offer, tighten the route to enquiry, and design the first impression so serious buyers understand why you are the premium choice before they compare prices.",
    deliverables: [
      "Positioning and homepage strategy",
      "Responsive design across every page",
      "Built in Next.js for real speed",
      "Launch, QA, and handover",
    ],
    faqs: [
      {
        question: "Do I need finished copy before we start?",
        answer:
          "No. We use the first planning stage to shape the message, page structure, and offer hierarchy before the visual design is finalised.",
      },
      {
        question: "Can you work with an existing brand?",
        answer:
          "Yes. We can either sharpen an existing identity or create a focused web-first direction when the current brand is too thin for a premium site.",
      },
      {
        question: "Will I own the site after launch?",
        answer:
          "Yes. The goal is a clean handover: you own the code, the content, and the deployment account connected to the site.",
      },
    ],
    relatedPostHrefs: [
      "/blog/website-cost-small-business-uk",
      "/blog/what-makes-a-website-look-expensive",
    ],
  },
  {
    slug: "seo-optimisation",
    title: "Get found by the right people",
    lastModified: "2026-04-15",
    description:
      "On-page and technical SEO so you show up when a local client is actively looking to spend money, not just when they're browsing.",
    image: "/images/arches/09-service-thumb-image.webp",
    ogImage: "/images/arches/09-service-thumb-image.webp",
    href: "/services/seo-optimisation",
    detail:
      "For existing sites that need to rank for the services and areas where your best-paying work comes from.",
    audience:
      "Best for businesses with a clear offer and a decent site foundation, but weak metadata, thin service pages, poor local intent coverage, or technical performance issues.",
    conversionImpact:
      "We align search intent with page structure, metadata, internal links, schema, and content depth so more of the right visitors land on pages built to convert.",
    deliverables: [
      "Local and service-page SEO plan",
      "Metadata, headings, and schema",
      "Core Web Vitals fixes",
      "Content structure that ranks",
    ],
    faqs: [
      {
        question: "Should I do SEO before redesigning the site?",
        answer:
          "Only if the current site is already clear, fast, and conversion-ready. If it is slow or confusing, fixing the site first usually protects the SEO investment.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No serious SEO provider should. We improve the technical and content foundations that help the right pages compete for the right searches.",
      },
      {
        question: "Is this a monthly retainer?",
        answer:
          "The first phase is a focused optimisation project. If ongoing content or local SEO work makes sense after that, we scope it separately.",
      },
    ],
    relatedPostHrefs: [
      "/blog/seo-or-new-website-first",
      "/blog/website-cost-small-business-uk",
    ],
  },
];

export const proofPoints: ProofPoint[] = [
  {
    statement: "Your site will load in under a second, or we rebuild it until it does.",
    title: "Truly fast",
    detail: "Every build passes Google's Core Web Vitals. Faster sites rank higher and convert more.",
    image: "/images/arches/12-review-image-01.webp",
  },
  {
    statement: "Every page is built around one question: what does a buyer need to see next?",
    title: "Designed to sell",
    detail: "We plan the buyer journey before we touch a single pixel. No decoration for decoration's sake.",
    image: "/images/arches/13-review-image-02.webp",
  },
  {
    statement: "Real photography, custom layout, a visual system that belongs to your business.",
    title: "Built to feel yours",
    detail: "No stock, no template look. The site feels like yours from the first scroll, not like our last project.",
    image: "/images/arches/14-review-image-03.webp",
  },
  {
    statement: "Fixed prices, fixed timelines, zero scope creep.",
    title: "Straight terms",
    detail: "You know the cost and the delivery date before we start. We'd rather quote fairly than surprise you later.",
    image: "/images/arches/15-review-image-04.webp",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "website-cost-small-business-uk",
    date: "Apr 12, 2026",
    dateISO: "2026-04-12",
    category: "Pricing",
    title: "How Much Does a Website Cost for a Small Business in the UK?",
    summary:
      "Real price bands for UK small business websites in 2026, what you actually get at each level, and how to tell which one will pay for itself.",
    image: "/images/arches/21-blog-thumb-image.webp",
    href: "/blog/website-cost-small-business-uk",
    readTime: "6 min read",
    intro:
      "If you're an independent business in the UK looking for a new website, the price range you'll be quoted is wider than almost any other service you buy. A DIY template can cost £12 a month. A branding-led studio can quote £25,000. Both call themselves \"a website.\" This guide explains what sits at each band, what makes a site pay for itself, and which tier fits a business trying to charge premium prices.",
    sections: [
      {
        heading: "The four real price bands in 2026",
        paragraphs: [
          "Band 1 (£0–£500): DIY on Wix, Squarespace, or a cheap Upwork developer. You get a site that technically works. You do not get positioning, a considered visual system, or fast load times. If you are testing a side project, this is fine. If you charge premium prices for your core work, a site at this level actively costs you jobs.",
          "Band 2 (£1,500–£4,000): A freelancer using a template. Better photography, a coherent layout, and usually a functional contact form. Most small UK businesses sit here. The ceiling is that the site still looks like something a buyer has seen before, because it is.",
          "Band 3 (£4,000–£12,000): A small studio doing custom design on top of a modern framework (Next.js, Astro, or similar). Original photography, a purpose-built visual system, real attention to speed and SEO. This is the first band where the site can genuinely help you charge more.",
          "Band 4 (£15,000+): Branding-led agencies, typically for funded startups or established firms repositioning. Full brand system, art direction, motion work, copywriting, and a bespoke CMS. Excellent, but usually overkill for an independent business chasing the first £100k in revenue.",
        ],
      },
      {
        heading: "What actually makes a site pay for itself",
        paragraphs: [
          "A site only earns its cost back when it does three things: load fast, say something specific, and route the right buyer to a clear next step. Speed under one second is a real conversion lever, not a bragging right — Google's own research shows conversion drops 20% for every extra second of load time.",
          "Specificity beats polish. A beautiful homepage that could belong to any business in the same industry will lose to an average-looking homepage that names the exact customer and the exact problem. The buyer has to feel recognised inside the first scroll.",
          "The next step has to be obvious and low-friction. A single primary CTA, a visible phone number, and a short contact form outperform a dense site with four competing calls to action.",
        ],
      },
      {
        heading: "What to budget if you charge premium prices",
        paragraphs: [
          "If your average project or sale is £5,000 or more, spending less than £3,000 on your website is usually a mistake. The buyer is already comparing you to competitors whose sites look considered. If your site looks like everyone else's, you've given them permission to negotiate on price.",
          "A realistic budget for a premium-feeling site built on a modern stack, with real photography and SEO-ready structure, is £4,000 to £8,000. It should ship in weeks, not months, and it should have a fixed price and a fixed timeline. If a studio won't commit to both, that's a signal their process isn't tight enough to protect your time.",
        ],
      },
      {
        heading: "Questions to ask before you pay a deposit",
        paragraphs: [
          "Who will my site load faster than: my direct competitors, or a generic Squarespace template? How will you prove it on launch day?",
          "What is the single sentence the homepage is trying to prove? Show me the evidence stack that supports it.",
          "If I change my mind about a major decision in week three, what does that cost me? Fixed-price studios should have a clear answer.",
          "Who owns the code and the domain on launch day? If the answer is anything other than \"you do,\" walk away.",
        ],
      },
    ],
  },
  {
    slug: "what-makes-a-website-look-expensive",
    date: "Apr 04, 2026",
    dateISO: "2026-04-04",
    category: "Design",
    title: "What Makes a Website Look Expensive: 10 Signals Buyers Notice",
    summary:
      "The specific design and content choices that move a website from 'looks fine' to 'looks like I can charge 30% more.' Nothing abstract, all observable.",
    image: "/images/arches/22-blog-thumb-image.webp",
    href: "/blog/what-makes-a-website-look-expensive",
    readTime: "5 min read",
    intro:
      "Buyers form a price expectation inside the first three seconds of a homepage, and they do it from a handful of visual cues. Most are specific enough to copy, and copying the wrong ones is why many small-business sites end up feeling mid-market even when the underlying work is premium. These are the ten signals that move a site up.",
    sections: [
      {
        heading: "1. Speed",
        paragraphs: [
          "An expensive-feeling site loads under a second. A slow site, no matter how beautifully art-directed, communicates low budget. This is the first signal, and it is the one most small-business websites fail.",
        ],
      },
      {
        heading: "2. Real photography",
        paragraphs: [
          "Stock imagery is the single strongest tell that a site is a template. Buyers can't always name it, but they register it instantly. Commissioned photography, even of just one or two scenes, reframes everything around it.",
        ],
      },
      {
        heading: "3. A specific first sentence",
        paragraphs: [
          "Expensive sites name the customer in the hero headline. They don't say \"premium solutions for modern businesses\" — they say \"websites for UK independents who charge premium prices,\" or \"kitchen extensions for Cotswold homeowners.\" Specificity reads as confidence.",
        ],
      },
      {
        heading: "4. Generous whitespace",
        paragraphs: [
          "Cheap sites cram. Expensive sites breathe. If every section is shouting, nothing gets heard. Whitespace is an indirect way to say \"we have nothing to hide and plenty to show.\"",
        ],
      },
      {
        heading: "5. One typeface, used well",
        paragraphs: [
          "Premium sites tend to commit to one typeface in two or three weights. Bargain sites mix three typefaces in six weights because the designer was hedging. Restraint reads as taste.",
        ],
      },
      {
        heading: "6. A restrained colour palette",
        paragraphs: [
          "Two neutrals and one accent is nearly always enough. Rainbow palettes are a template giveaway. The best accent colour is one the competitor set isn't already using.",
        ],
      },
      {
        heading: "7. Purposeful motion",
        paragraphs: [
          "A fade-up on scroll is fine. Six different animations firing at once is not. Motion should clarify where the eye goes next, not prove the developer learned Framer Motion.",
        ],
      },
      {
        heading: "8. Evidence, not adjectives",
        paragraphs: [
          "Weak sites say \"award-winning service.\" Strong sites show the award, the date, the project, or the number. Every adjective on a premium site has a piece of evidence within scrolling distance.",
        ],
      },
      {
        heading: "9. A considered contact page",
        paragraphs: [
          "A tiny, easy form with three fields says \"we value your time.\" A twelve-field form says \"we batch-process leads.\" A contact page with a real photo and a named person beats a generic form every time.",
        ],
      },
      {
        heading: "10. No visible template skeleton",
        paragraphs: [
          "Faint giveaways: the identical three-column service grid, the generic \"our process\" numbered list, the testimonial slider that nobody interacts with. Remove or rework these, and a mid-market site often climbs a full tier.",
        ],
      },
    ],
  },
  {
    slug: "seo-or-new-website-first",
    date: "Mar 28, 2026",
    dateISO: "2026-03-28",
    category: "SEO",
    title: "Do I Need SEO or a New Website First? A Guide for UK Independents",
    summary:
      "A clear decision framework for deciding whether to invest in SEO, a rebuild, or both. Written for UK independents with a limited first marketing budget.",
    image: "/images/arches/23-blog-thumb-image.webp",
    href: "/blog/seo-or-new-website-first",
    readTime: "4 min read",
    intro:
      "Most UK independents with a limited first marketing budget face the same question: should I spend it on SEO to bring people to my existing site, or on a new site first so the people who do arrive actually convert? The answer depends on two numbers and one piece of common sense. This guide walks you through both.",
    sections: [
      {
        heading: "The conversion-rate test",
        paragraphs: [
          "Look at Google Analytics or your site dashboard. What percentage of visitors reach your contact or enquiry page? For service businesses, anything under 2% is a sign that traffic is not your main problem. If you doubled your traffic tomorrow with the same conversion rate, you'd double your enquiries — and most under-performing sites will not double them, because the site itself is the bottleneck.",
          "If your conversion rate is above 3% and your site is genuinely clear and fast, then SEO is the right next investment. If it's below 2%, a rebuild usually pays for itself faster than any SEO retainer.",
        ],
      },
      {
        heading: "The speed-and-structure test",
        paragraphs: [
          "Run your homepage through Google's PageSpeed Insights. If you see red or amber scores on Core Web Vitals, no amount of SEO money will move you up the rankings. Google has been explicit that site experience is a ranking factor, and a slow site caps how high you can climb even with perfect content.",
          "If you score green on both mobile and desktop, and your on-page content is clearly structured, SEO spend will pay off. If you don't, fix the foundation first.",
        ],
      },
      {
        heading: "The honest-mirror test",
        paragraphs: [
          "Ask three people in your target market to open your site for ten seconds, then tell you what you do, who you do it for, and what it might cost. If they can't answer confidently, no SEO effort will fix the underlying problem. Traffic is just amplified first impressions — an SEO budget on an unclear site is a budget that pays Google to embarrass you in front of more people.",
        ],
      },
      {
        heading: "What to do if the budget is tight",
        paragraphs: [
          "The cheapest version of the right answer is a tight, fast, purpose-built site with SEO fundamentals built in from day one — clean metadata, a proper heading structure, schema markup, and a content plan that covers the three or four queries your best-paying clients actually search for. You get both jobs done, you don't carry technical debt into an SEO retainer, and the site itself converts the traffic you already have.",
          "If you can only afford one, fix the site first. Rankings built on a slow, unclear site are a temporary advantage. Rankings earned on a sharp, fast site compound.",
        ],
      },
    ],
  },
];
