# Arches Page Topology

1. `ArchesHeader`: fixed transparent navigation, centered logo, left nav links, right contact link and hamburger icon.
2. `ArchesHero`: full-viewport photographic hero with dark overlay, bottom-left headline and intro, bottom-right projects CTA.
3. `ArchesAbout`: white section; label row; left text column; two image/stat columns.
4. `ArchesProjects`: white section; section label and heading; three project rows with left meta/title/read-more, centered image, right description and facts.
5. `ArchesProcess`: olive-green full-width section; label row; desktop 3-column grid, mobile 1-column stack.
6. `ArchesServices`: white section; label row and intro; four service rows with title, description, thumbnail on desktop and stacked image/title/text on mobile.
7. `ArchesCta`: full-width image band with black overlay, centered heading and contact CTA.
8. `ArchesTestimonials`: olive carousel band on desktop after CTA; one-card visible treatment on mobile after blog.
9. `ArchesBlog`: white section; label/heading/action; three blog rows with text and right image on desktop, stacked image-first mobile cards.
10. `ArchesFooter`: black footer with logo, copyright, address/contact, menu, support, and social columns.

Page-level structure:
- The header overlays all sections with fixed positioning and high z-index.
- No nested app shell or separate scroll container; document body scrolls normally.
- Original animated reveal was captured after scrolling. The clone keeps sections visible immediately so stitched QA screenshots and below-fold media remain stable.
