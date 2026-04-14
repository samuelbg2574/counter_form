# HeaderHero Specification

## Overview
- **Target files:** `src/components/ArchesHeader.tsx`, `src/components/ArchesHero.tsx`
- **Screenshot:** `docs/design-references/arches-desktop-activated-full.png`, `docs/design-references/arches-mobile-activated-full.png`
- **Interaction model:** mostly static; desktop Pages click dropdown.

## Computed Styles
- Header: fixed top overlay, width `100%`, height about `80px`, color `rgb(255,255,255)`, font `Poppins`, nav text `14px/14px` uppercase.
- Logo: centered, white, letter-spaced custom wordmark `ARCHES`; desktop around `164px` wide, mobile left-aligned.
- Desktop nav: left `ABOUT US`, `WORK`, `SERVICES`, `PAGES`; right `CONTACT US` plus hamburger lines.
- Hero image: `/images/arches/01-hero-image.png`, object-fit `cover`; desktop visual height `1200px`, mobile visual height about `600px`.
- Hero title: desktop `60px/72px`, weight `400`, white, width `982px`, x `72`, y `829`; mobile `32px/38.4px`, width `350px`, x `20`.
- Eyebrow: `#WORLDS NUMBER ONE`, white, `14px/14px`.
- Body copy: `16px/27.2px`, white, vertical line accent at left.

## States & Behaviors
- Pages dropdown: white rectangular menu under nav, radius `8px`, text black, entries `BLOG`, `FAQ`, `PRIVACY POLICY`, `TERMS & CONDITIONS`.
- Hamburger: visible icon; mobile click showed a circular outline but no panel in tested state.
- CTA button: pill with black circular arrow icon and white rectangular label.

## Responsive Behavior
- Desktop: full nav and centered logo.
- Mobile: logo left, contact/hamburger right, left nav hidden, title reduces to `32px`.

