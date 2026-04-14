export type SectionKey = {
  letter: string;
  label: string;
};

export type Project = {
  slug: string;
  location: string;
  year: string;
  lastModified: string;
  title: string;
  description: string;
  category: string;
  size: string;
  service: string;
  serviceHref: string;
  images: {
    row: string;
    card: string;
    hero: string;
  };
  imageAlt: string;
  liveUrl: string;
  href: string;
  summary: string;
  challenge: string;
  outcome: string;
  builtFor: string;
  whatChanged: string[];
  whyItWorks: string;
  relatedPostHref: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  lastModified: string;
  description: string;
  image: string;
  ogImage: string;
  href: string;
  detail: string;
  audience: string;
  conversionImpact: string;
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedPostHrefs: string[];
};

export type ProofPoint = {
  statement: string;
  title: string;
  detail: string;
  image: string;
};

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  date: string;
  dateISO: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  href: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
};
