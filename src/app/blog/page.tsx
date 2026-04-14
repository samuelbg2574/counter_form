import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { MoreIcon } from "@/components/icons";
import { blogPosts } from "@/components/arches-data";

export const metadata: Metadata = {
  title: "Journal — Writing on Premium Web Design for UK Independents",
  description:
    "Practical writing on website pricing, positioning, conversion, and SEO for UK independents who charge premium prices.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <section className="arches-subhero">
        <div className="arches-container">
          <p className="arches-eyebrow">JOURNAL</p>
          <h1>Practical writing for UK independents building a premium offer.</h1>
          <p>Pricing, positioning, conversion, and SEO. Nothing abstract, all observable.</p>
        </div>
      </section>
      <section className="arches-section arches-blog" id="blog">
        <div className="arches-container">
          <SectionLabel letter="A" label="ARTICLES" />
          <div className="arches-blog-list">
            {blogPosts.map((post) => (
              <Link className="arches-blog-row reveal" href={post.href} key={post.slug}>
                <div className="arches-blog-copy">
                  <p>
                    {post.date} <span>-</span> {post.category} <span>-</span> {post.readTime}
                  </p>
                  <h3>{post.title}</h3>
                  <span>{post.summary}</span>
                  <strong>
                    Read More
                    <MoreIcon />
                  </strong>
                </div>
                <Image src={post.image} alt={post.title} width={760} height={476} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ArchesFooter />
    </main>
  );
}
