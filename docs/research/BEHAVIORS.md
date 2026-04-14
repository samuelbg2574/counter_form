# Arches Behavior Notes

Target: https://arches-template.framer.website/?fpr=onmix

## Global
- Browser automation: Python Playwright 1.58.0.
- Primary font family: `Poppins, "Poppins Placeholder", sans-serif`.
- Main colors from computed styles: `rgb(255,255,255)`, `rgb(0,0,0)`, `rgb(249,249,249)`, `rgb(85,85,85)`, `rgb(217,217,217)`, `rgb(73,84,62)`, `rgba(255,255,255,0.6)`, `rgba(0,0,0,0.6)`, `rgba(0,0,0,0.7)`.
- Layout animation: Framer reveal-on-scroll. Full-page capture before scrolling hides mid-page content, so activated screenshots were captured after scrolling the page.
- Header: fixed transparent overlay at top, white text, no color/size change observed on scroll.
- Buttons/links: pill buttons with a black circular arrow at the left, white fill on dark imagery or white fill with black border on light sections. Hover sweep did not reveal major structural changes beyond pointer cursor.
- Desktop Pages item: click opens a white dropdown under `PAGES` with `BLOG`, `FAQ`, `PRIVACY POLICY`, and `TERMS & CONDITIONS`; see `docs/design-references/arches-pages-dropdown.png`.
- Hamburger: click/hover made the circular outline state visible in mobile capture, but no separate panel appeared during the tested click; clone keeps it as a visual menu affordance.
- Testimonials: Framer carousel; desktop shows three cards in a horizontally scrolling track with a right arrow, mobile shows testimonials after the blog section and only one card in the visible viewport.
- Framer badge: live page displays a fixed `Made in Framer` badge at bottom right.

## Responsive
- Desktop reference: 1440px wide, body scrollHeight `8803px`; content container is mostly `1296px` wide with `72px` side gutters.
- Tablet reference: 768px wide, body scrollHeight `8818px`.
- Mobile reference: 390px wide, body scrollHeight `12460px`; content container is mostly `350px` wide with `20px` side gutters.
- Major breakpoint: under tablet/mobile, grid and row layouts stack, section headings drop from `40px/48px` to `28px/33.6px`, and the hero title drops from `60px/72px` to `32px/38.4px`.
- Mobile content order differs from desktop: CTA, Blog, Testimonials, Footer.

