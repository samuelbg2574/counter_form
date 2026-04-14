"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ChevronDownIcon, LogoMark, MenuIcon } from "@/components/icons";

const pageLinks = [
  { label: "PROCESS", href: "/#process" },
  { label: "WORK", href: "/work" },
  { label: "STANDARD", href: "/#proof" },
  { label: "CONTACT", href: "/contact" },
];

const mobileLinks = [
  { label: "PROCESS", href: "/#process" },
  { label: "WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "STANDARD", href: "/#proof" },
  { label: "CONTACT", href: "/contact" },
  { label: "START A PROJECT", href: "/contact" },
];

export function ArchesHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="arches-header">
      <nav className="arches-header-left" aria-label="Primary">
        <Link href="/#process">PROCESS</Link>
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
      <Link className="arches-header-logo" href="/" onClick={() => setOpen(false)}>
        <LogoMark className="arches-logo-word" />
      </Link>
      <div className="arches-header-right">
        <Link href="/contact">START A PROJECT</Link>
        <button
          className="arches-menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="arches-mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span className="arches-menu-close" aria-hidden>×</span>
          ) : (
            <MenuIcon />
          )}
        </button>
      </div>
      <div
        id="arches-mobile-drawer"
        className={`arches-mobile-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          {mobileLinks.map((link) => (
            <Link href={link.href} key={link.label} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
