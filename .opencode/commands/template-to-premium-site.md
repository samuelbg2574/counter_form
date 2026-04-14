---
description: "Transform a static website clone into a premium, ownable multi-page Next.js site with distinct brand positioning, a scored de-template audit, stronger imagery, purposeful motion, and 21st.dev Magic MCP inspiration when available. Use after clone-website when the user wants the clone to stop looking like a template and become a sellable custom-feeling agency site."
---
<!-- AUTO-GENERATED from .claude/skills — do not edit directly.
     Run `node scripts/sync-skills.mjs` to regenerate. -->


# Template To Premium Site

Use this after a site has been cloned and the user wants a premium, non-template result.

## Workflow

1. Run the Counterform redesign audit before editing:
   - Use `counterform-redesign-audit` when available.
   - Score typography divergence, palette divergence, image divergence, section composition divergence, motion/interactivity quality, content specificity, route/detail-page completeness, and accessibility/finish from `0` to `3`.
   - Identify current route coverage, section order, copied copy, copied links, badges, external source references, static animations, reused imagery, font fingerprints, palette fingerprints, and source-template file paths.
   - Name the 3-5 most obvious template fingerprints to remove and the 5 smallest changes likely to create the largest visual difference.

2. Define the design thesis from the audit:
   - Write a one-sentence visual thesis: mood, material, energy.
   - Write a content plan: homepage story, main routes, detail routes, final CTA.
   - Write an interaction thesis: 2-3 motion ideas that improve hierarchy or affordance.
   - Write a divergence thesis: the exact font, palette, image-system, and section-rhythm changes that will make the result stop reading like the source template.

3. Use 21st.dev Magic MCP when available:
   - Ask Magic for inspiration patterns, not drop-in code, for premium agency sections, work indexes, service pages, scroll reveals, carousels, and tactile CTAs.
   - Extract only reusable ideas: section structure, interaction model, state behavior, or art-direction cues.
   - Do not paste generated components blindly. Adapt to the repo stack and check `package.json` before importing any dependency.
   - If Magic is unavailable, continue with local implementation and note that inspiration was skipped.

4. De-template the homepage:
   - Change section order so it has a logical commercial story. Default order: Hero, Selected Work, Services, Process, Studio Note, Proof/Standards, Contact.
   - Replace generic About-first layouts, fake testimonials, blog filler, Framer/template badges, and source-template links.
   - Replace or heavily reframe imagery so repeated source assets no longer define the brand.
   - Use a semantic image map when the site has more than one image role. Components should reference brand/content image keys, not source-template asset folders.
   - Preserve sections only when they have a clear commercial job and a distinct visual treatment.

5. Expand the site:
   - Add the main pages users expect: `/work`, `/work/[slug]`, `/services`, `/services/[slug]`, and `/contact`.
   - Detail pages should share the same design language but should not repeat the source template page structure.

6. Add motion deliberately:
   - Include a hero entrance/depth moment, scroll reveals, tactile button states, and carousel behavior only where it supports the story.
   - Respect `prefers-reduced-motion`.
   - Prefer CSS and small isolated client components before adding animation libraries.

7. Validate:
   - Run lint, typecheck, and build.
   - Inspect desktop and mobile viewports.
   - Confirm there are no source-template external links, badges, copied section order, generic placeholder claims, font fingerprints, palette fingerprints, or hardcoded source-template image paths in user-facing components.

## Output Bar

The site should feel like a commissioned web presence built from a strong reference, not a template with swapped text.
