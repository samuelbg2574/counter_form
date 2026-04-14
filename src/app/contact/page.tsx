import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact — Book a Project Review",
  description:
    "Book a free 30-minute project call with Counterform Studio. Premium websites for UK independents, fixed price and fixed timeline.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="arches-page">
      <ScrollReveal />
      <ArchesHeader />
      <section className="arches-subhero arches-contact-hero">
        <div className="arches-container">
          <p className="arches-eyebrow">CONTACT</p>
          <h1>Send the template, the offer, and the kind of site you want it to become.</h1>
          <p>We will look for the fastest path from cloned foundation to premium, ownable web system.</p>
        </div>
      </section>
      <section className="arches-section arches-contact">
        <div className="arches-container arches-contact-grid">
          <div className="reveal">
            <h2>Project review</h2>
            <p>
              Use this as a briefing checklist before a form handler is connected. The important inputs are the source
              reference, target customer, offer, timeline, and the parts of the template you want to keep.
            </p>
            <ArchesButton href="mailto:hello@counterform.studio">EMAIL THE STUDIO</ArchesButton>
          </div>
          <form className="arches-contact-form reveal">
            <label>
              Name
              <input name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" placeholder="you@example.com" type="email" />
            </label>
            <label>
              Project
              <textarea name="project" placeholder="Template URL, business type, and what needs to change." rows={6} />
            </label>
            <button type="button">Request review</button>
          </form>
        </div>
      </section>
      <ArchesFooter />
    </main>
  );
}
