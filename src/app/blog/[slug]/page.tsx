import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts } from "@/components/arches-data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://counterform.studio";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return { title: "Journal" };

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: post.href },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.dateISO,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.dateISO,
    author: { "@type": "Organization", name: "Counterform Studio" },
    publisher: { "@type": "Organization", name: "Counterform Studio" },
    mainEntityOfPage: `${SITE_URL}${post.href}`,
    image: `${SITE_URL}${post.image}`,
  };

  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <article>
        <section className="arches-subhero arches-blog-hero">
          <div className="arches-container">
            <p className="arches-eyebrow">
              {post.category} <span>-</span> {post.date} <span>-</span> {post.readTime}
            </p>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
          </div>
        </section>
        <section className="arches-section arches-blog-article">
          <div className="arches-container">
            <Image
              className="arches-blog-article-image"
              src={post.image}
              alt={post.title}
              width={1400}
              height={780}
              priority
            />
            <div className="arches-blog-article-body">
              <p className="arches-blog-article-intro">{post.intro}</p>
              {post.sections.map((section) => (
                <div className="arches-blog-article-section" key={section.heading ?? section.paragraphs[0]}>
                  {section.heading ? <h2>{section.heading}</h2> : null}
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ))}
              <div className="arches-blog-article-cta">
                <h3>Thinking about a new site?</h3>
                <p>
                  Counterform Studio builds fast, premium websites for UK independents who charge
                  premium prices. Fixed price, fixed timeline, shipped in weeks.
                </p>
                <ArchesButton href="/contact">BOOK A PROJECT CALL</ArchesButton>
              </div>
            </div>
            <div className="arches-blog-article-more">
              <h3>More from the journal</h3>
              <ul>
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link href={p.href}>{p.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      </article>
      <ArchesFooter />
    </main>
  );
}
