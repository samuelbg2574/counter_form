import Image from "next/image";

import { ArchesButton } from "@/components/ArchesButton";
import { SectionLabel } from "@/components/SectionLabel";
import { MoreIcon } from "@/components/icons";
import { blogPosts } from "@/components/arches-data";

export function ArchesBlog() {
  return (
    <section className="arches-section arches-blog" id="blog">
      <div className="arches-container">
        <SectionLabel letter="F" label="NEWS" />
        <div className="arches-section-head arches-blog-head">
          <h2>Latest Blog Posts</h2>
          <ArchesButton href="/#proof">LEARN MORE</ArchesButton>
        </div>
        <div className="arches-blog-list">
          {blogPosts.map((post) => (
            <a className="arches-blog-row reveal" href={post.href} key={post.title}>
              <div className="arches-blog-copy">
                <p>
                  {post.date} <span>-</span> {post.category}
                </p>
                <h3>{post.title}</h3>
                <span>{post.summary}</span>
                <strong>
                  Read More
                  <MoreIcon />
                </strong>
              </div>
              <Image src={post.image} alt="blog thumb image" width={760} height={476} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
