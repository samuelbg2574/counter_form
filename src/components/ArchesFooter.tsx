import Link from "next/link";

import { LogoMark } from "@/components/icons";

const footerMenu = ["Home", "Studio", "Services", "Projects", "Standard", "Contact"];
const support = ["Template audit", "Motion pass", "Route build"];
const social = ["LinkedIn", "X", "Instagram", "Email"];

export function ArchesFooter() {
  return (
    <footer className="arches-footer">
      <div className="arches-container arches-footer-grid">
        <div className="arches-footer-brand">
          <Link href="/">
            <LogoMark className="arches-logo-word" />
          </Link>
          <p>© 2026 Counterform Studio.</p>
          <p>Web strategy, design adaptation, and Next.js builds for premium service brands.</p>
        </div>
        <div className="arches-footer-contact">
          <div>
            <h3>ADDRESS</h3>
            <p>
              Remote studio,
              <br />
              working with clients in the UK and US
            </p>
          </div>
          <div>
            <h3>EMAIL</h3>
            <a href="mailto:hello@counterform.studio">hello@counterform.studio</a>
          </div>
          <div>
            <h3>CONTACT US</h3>
            <a href="/contact">Book a project review</a>
          </div>
        </div>
        <FooterColumn title="MENU" items={footerMenu} />
        <FooterColumn title="SUPPORT" items={support} />
        <FooterColumn title="SOCIAL" items={social} />
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
    Studio: "/#studio",
    Services: "/services",
    Projects: "/work",
    Standard: "/#proof",
    Contact: "/contact",
    "Template audit": "/services/template-repositioning",
    "Motion pass": "/services/motion-polish",
    "Route build": "/services/conversion-websites",
    LinkedIn: "mailto:hello@counterform.studio",
    X: "mailto:hello@counterform.studio",
    Instagram: "mailto:hello@counterform.studio",
    Email: "mailto:hello@counterform.studio",
  };

  return hrefs[item] ?? "/";
}
