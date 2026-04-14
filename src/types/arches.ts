export type SectionKey = {
  letter: string;
  label: string;
};

export type Project = {
  slug: string;
  location: string;
  year: string;
  title: string;
  description: string;
  category: string;
  size: string;
  service: string;
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
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
  detail: string;
  deliverables: string[];
};

export type ProofPoint = {
  statement: string;
  title: string;
  detail: string;
  image: string;
};

export type BlogPost = {
  date: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  href: string;
};
