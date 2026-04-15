import Image from "next/image";

import { ArchesButton } from "@/components/ArchesButton";

export function ArchesCta() {
  return (
    <section className="arches-cta">
      <Image src="/images/arches/11-cta-image.webp" alt="Dark studio workspace" fill sizes="100vw" />
      <div className="arches-cta-shade" />
      <div className="arches-cta-content reveal">
        <h2>Ready for a site that earns its keep?</h2>
        <ArchesButton
          href="/contact"
          analyticsEvent="contact_cta_click"
          analyticsLabel="Submit an enquiry"
          analyticsLocation="final_cta"
        >
          SUBMIT AN ENQUIRY
        </ArchesButton>
      </div>
    </section>
  );
}
