import Link from "next/link";

import { LogoMark } from "@/components/icons";

const footerMenu = ["Home", "Process", "Services", "Projects", "Standard", "Contact"];

export function ArchesFooter() {
  return (
    <footer className="arches-footer">
      <div className="arches-container arches-footer-grid">
        <div className="arches-footer-brand">
          <Link href="/">
            <LogoMark className="arches-logo-word" />
          </Link>
          <p>© 2026 Counterform Studio.</p>
          <p>Fast, premium websites for UK builders, architects, and garden designers.</p>
        </div>
        <div className="arches-footer-contact">
          <div>
            <h3>CONTACT US</h3>
            <a href="/contact">Book a project review</a>
          </div>
        </div>
        <FooterColumn title="MENU" items={footerMenu} />
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="arches-footer-column">
      <h3>{title}</h3>
      {items.map((item) => {
        const href = footerHref(item);

        if (href.startsWith("/")) {
          return (
            <Link href={href} key={item}>
              {item}
            </Link>
          );
        }

        return (
          <a href={href} key={item}>
            {item}
          </a>
        );
      })}
    </div>
  );
}

function footerHref(item: string) {
  const hrefs: Record<string, string> = {
    Home: "/",
    Process: "/#process",
    Services: "/services",
    Projects: "/work",
    Standard: "/#proof",
    Contact: "/contact",
  };

  return hrefs[item] ?? "/";
}
