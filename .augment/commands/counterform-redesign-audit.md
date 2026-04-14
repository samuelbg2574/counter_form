---
description: "Audit an existing cloned or AI-generated website using Counterform Studio's 0-3 de-template rubric, then prioritize the smallest visual and interaction changes that create the largest premium differentiation."
argument-hint: "<url>"
---
<!-- AUTO-GENERATED from .claude/skills — do not edit directly.
     Run `node scripts/sync-skills.mjs` to regenerate. -->


# Counterform Redesign Audit

Use this before changing a cloned site, purchased template, or AI-generated website. The goal is to find the highest-leverage design changes that make the site feel commissioned, not merely reskinned.

This skill is adapted from the public redesign-skill workflow in `Leonxlnx/taste-skill`, but the defaults below are Counterform's agency operating method.

## Workflow

1. Scan before judging:
   - Identify the framework, styling method, routes, data files, image locations, fonts, color tokens, section order, and interactive components.
   - Locate source-template fingerprints in file names, CSS class names, asset paths, copy, metadata, badges, and links.
   - Check `package.json` before recommending any dependency.

2. Score the clone with the 0-3 rubric:
   - `0` means still source-template obvious.
   - `1` means surface-level swaps only.
   - `2` means differentiated but with remaining fingerprints.
   - `3` means ownable, coherent, and production-ready.

3. Prioritize the smallest changes with the largest visual difference:
   - Font system first.
   - Palette and surfaces second.
   - Image system third.
   - Section composition fourth.
   - Interaction and accessibility polish fifth.

4. Produce an audit summary before editing:
   - Current average score.
   - Top 3 template fingerprints.
   - Top 5 high-leverage changes.
   - Risks or dependencies.
   - Exact implementation order.

5. Fix with the existing stack:
   - Do not migrate frameworks or styling libraries.
   - Do not rewrite from scratch.
   - Keep edits reviewable and focused.
   - Validate with lint, typecheck, build, and route checks.

## 0-3 De-Template Rubric

Score each category.

### Typography Divergence
- `0`: Same font family, scale, case, and hierarchy as the source.
- `1`: Font changed but rhythm and hierarchy still feel cloned.
- `2`: Clear new type direction with a few leftover source patterns.
- `3`: Type system matches the new brand thesis and is visibly distinct.

Default: the font must clearly differ from the clone. For editorial/creative sites, consider a serif display, neutral sans body, and monospace labels. Hosted fonts and new font files are optional, not required.

### Palette Divergence
- `0`: Same dominant colors as the source.
- `1`: Token names changed but the visual read is still the same.
- `2`: New palette with a few inherited section treatments.
- `3`: Cohesive palette that changes the site's memory at first glance.

Default: use one restrained accent. Avoid purple/blue AI gradients and avoid mixing warm and cool gray systems without intent.

### Image Divergence
- `0`: Same source assets in the same roles.
- `1`: Same images with light filters only.
- `2`: Images are recropped, reframed, masked, or placed in new roles.
- `3`: Images are replaced or art-directed through a semantic image map.

Default: production code should reference semantic image paths from one source file. Do not leave final components coupled to source-template folders.

### Section Composition Divergence
- `0`: Same section order, spacing, alignment, and module shapes.
- `1`: Copy changed but layout rhythm is cloned.
- `2`: Several sections have new roles or compositions.
- `3`: Each section has a distinct job and visual treatment.

Default: keep all sections only when each has a real commercial purpose. Use asymmetry, varied aspect ratios, editorial spacing, and different surface treatments to avoid clone rhythm.

### Motion And Interaction Quality
- `0`: Static or copied motion.
- `1`: Generic fades only.
- `2`: Motion improves hierarchy or affordance.
- `3`: Motion feels intentional, accessible, and tied to the brand.

Default: prefer CSS and small isolated client components. Respect `prefers-reduced-motion`. Do not add smooth-scroll inertia by default.

### Content Specificity
- `0`: Template copy, placeholders, or generic claims.
- `1`: Rewritten copy but still broad and interchangeable.
- `2`: Specific audience, offer, proof, and process.
- `3`: Copy supports a clear sales story across routes.

Default: remove cliches such as "elevate", "seamless", "unleash", "next-gen", and generic fake names.

### Route And Detail-Page Completeness
- `0`: Homepage only or dead links.
- `1`: Routes exist but repeat source structure.
- `2`: Main routes and details exist with shared content model.
- `3`: Routes feel purposeful, navigable, and consistent beyond the homepage.

Default: every CTA should point to a real destination. Detail pages need a way back or onward.

### Accessibility And Finish
- `0`: Missing alt text, focus states, metadata, and responsive checks.
- `1`: Basic HTML works but finish is thin.
- `2`: Keyboard focus, alt text, route metadata, and responsive states are mostly covered.
- `3`: The site has visible focus states, meaningful alt text, good metadata, and tested responsive layouts.

Default: legal links, cookie banners, and policy pages are not universal requirements for every demo, but accessibility basics are.

## Counterform Defaults

- Use opinionated defaults with escape hatches, not hard bans.
- Avoid remote placeholder photos as final production assets.
- Avoid glassmorphism, spotlight borders, and heavy decorative effects unless they support the concept.
- Do not ban an icon library just because it is common; use it with restraint or replace it when it reads generic.
- Do not add dependencies for motion or typography unless the existing stack cannot achieve the design thesis.

## Output

End the audit with this compact format:

```text
Average score: X/3
Most obvious fingerprints:
1. ...
2. ...
3. ...

Highest-leverage changes:
1. ...
2. ...
3. ...
4. ...
5. ...

Implementation order:
1. ...
2. ...
3. ...
```
