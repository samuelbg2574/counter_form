import Image from "next/image";
import Link from "next/link";

import { ArchesButton } from "@/components/ArchesButton";
import { SectionLabel } from "@/components/SectionLabel";
import { MoreIcon } from "@/components/icons";
import { blogPosts } from "@/components/arches-data";

export function ArchesBlog() {
  return (
    <section className="arches-section arches-blog" id="blog">
      <div className="arches-container">
        <SectionLabel letter="F" label="JOURNAL" />
        <div className="arches-section-head arches-blog-head">
          <h2>Practical writing for independents charging premium prices.</h2>
          <ArchesButton href="/blog">READ THE JOURNAL</ArchesButton>
        </div>
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
  );
}
