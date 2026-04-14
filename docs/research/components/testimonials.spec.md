# Testimonials Specification

## Overview
- **Target file:** `src/components/ArchesTestimonials.tsx`
- **Screenshot:** `docs/design-references/arches-desktop-activated-full.png`
- **Interaction model:** carousel-like visual; static implementation uses visible cards and arrow affordance.

## Computed Styles
- Section background: `rgb(73,84,62)`.
- Desktop position: after CTA and before Blog; mobile position: after Blog and before Footer.
- Label row: letter `E`, label `TESTIMONIALS`, divider.
- Desktop card: white background, `406px x ~302px`, padding about `28px`, three cards visible, horizontal gap about `40px`.
- Card quote: `18px/30.6px`, gray `rgb(85,85,85)`.
- Avatar: `42px x 42px`, circular; names `16px/24px`, weight `500`; role `14px/23.8px`, gray.
- Assets: `/images/arches/12-review-image-01.jpg` through `/images/arches/18-review-image-07.jpg`.
- Arrow affordance: dark circular button at right edge.

## Responsive Behavior
- Desktop: three visible cards.
- Mobile: one visible card after the blog section.

