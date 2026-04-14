import type { Metadata } from "next";

import { ArchesBlog } from "@/components/ArchesBlog";
import { ArchesCta } from "@/components/ArchesCta";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ArchesHero } from "@/components/ArchesHero";
import { ArchesProcess } from "@/components/ArchesProcess";
import { ArchesProjects } from "@/components/ArchesProjects";
import { ArchesServices } from "@/components/ArchesServices";
import { ArchesTestimonials } from "@/components/ArchesTestimonials";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Premium Websites for UK Independents",
  description:
    "Counterform Studio designs and builds fast, premium websites for UK independents who charge premium prices. Fixed price, fixed timeline, shipped in weeks.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <ArchesHero />
      <ArchesProjects />
      <ArchesServices />
      <ArchesProcess />
      <ArchesTestimonials />
      <ArchesBlog />
      <ArchesCta />
      <ArchesFooter />
    </main>
  );
}
