import { ArchesButton } from "@/components/ArchesButton";
import { ArchesFooter } from "@/components/ArchesFooter";
import { ArchesHeader } from "@/components/ArchesHeader";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact — Book a Project Review",
  description:
    "Book a project review with Counterform Studio. Premium websites for independent UK businesses that need clearer positioning and better enquiries.",
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
          <h1>Tell us what your site needs to help you sell.</h1>
          <p>Send the offer, audience, current site, and ideal timeline. We will reply with the clearest next step.</p>
        </div>
      </section>
      <section className="arches-section arches-contact">
        <div className="arches-container arches-contact-grid">
          <div className="reveal">
            <h2>Project review</h2>
            <p>
              Use the form to start with context, not a sales call. The useful inputs are the offer, target buyer,
              current site, timeline, and what would make the project commercially worthwhile.
            </p>
            <ArchesButton
              href="mailto:hello@counterform.studio"
              analyticsEvent="contact_cta_click"
              analyticsLabel="Email the studio"
              analyticsLocation="contact_page"
            >
              EMAIL THE STUDIO
            </ArchesButton>
          </div>
          <ContactForm />
        </div>
      </section>
      <ArchesFooter />
    </main>
  );
}
