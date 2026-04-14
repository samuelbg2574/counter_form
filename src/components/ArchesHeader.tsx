import Link from "next/link";

import { ChevronDownIcon, LogoMark, MenuIcon } from "@/components/icons";

const pageLinks = [
  { label: "PROCESS", href: "/#process" },
  { label: "STUDIO", href: "/#studio" },
  { label: "STANDARD", href: "/#proof" },
  { label: "CONTACT", href: "/contact" },
];

export function ArchesHeader() {
  return (
    <header className="arches-header">
      <nav className="arches-header-left" aria-label="Primary">
        <Link href="/#studio">STUDIO</Link>
        <Link href="/work">WORK</Link>
        <Link href="/services">SERVICES</Link>
        <div className="arches-pages-menu">
          <button type="button">
            PAGES
            <ChevronDownIcon />
          </button>
          <div className="arches-pages-dropdown">
            {pageLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Link className="arches-header-logo" href="/">
        <LogoMark className="arches-logo-word" />
      </Link>
      <div className="arches-header-right">
        <Link href="/contact">CONTACT US</Link>
        <button className="arches-menu-button" type="button" aria-label="Open menu">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
