import { ArchesAbout } from "@/components/ArchesAbout";
import { ArchesCta } from "@/components/ArchesCta";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ArchesHero } from "@/components/ArchesHero";
import { ArchesProcess } from "@/components/ArchesProcess";
import { ArchesProjects } from "@/components/ArchesProjects";
import { ArchesServices } from "@/components/ArchesServices";
import { ArchesTestimonials } from "@/components/ArchesTestimonials";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <ArchesHero />
      <ArchesProjects />
      <ArchesServices />
      <ArchesProcess />
      <ArchesAbout />
      <ArchesTestimonials />
      <ArchesCta />
      <ArchesFooter />
    </main>
  );
}
