# About Specification

## Overview
- **Target file:** `src/components/ArchesAbout.tsx`
- **Screenshot:** `docs/design-references/arches-desktop-activated-full.png`
- **Interaction model:** static links with hover cursor.

## Computed Styles
- Section: white background, top padding about `140px`, desktop content width `1296px`, mobile width `350px`.
- Label row: square letter chip `40px x 40px`, border `rgb(0,0,0)`, label `ABOUT US`, horizontal rule `rgb(220,220,220)`.
- Desktop layout: flex row with gap `100px`.
- Heading: desktop `40px/48px`, mobile `28px/33.6px`, weight `400`, black.
- Body: `16px/27.2px`, color `rgb(85,85,85)`.
- Images: `/images/arches/02-about-image.jpg` and `/images/arches/03-about-image.jpg`, desktop `350px x 420px`, object-fit `cover`; mobile full width `350px` with tall image blocks.
- Stats: `100%` and `12+`, desktop `40px/48px`, supporting text `16px/27.2px` gray.

## Responsive Behavior
- Desktop: text column plus two image/stat columns.
- Mobile: text, CTA, image/stat, image/stat stacked.

