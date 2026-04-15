<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Website Reverse-Engineer Template

## Counterform First-Sale System Status
Last updated: 2026-04-15.

This repo is now being used as the Counterform Studio site, not only as a clone template. `AGENTS.md` is the durable status file for future agents. `claude_optimisation_plan.md` is ignored local planning scratch and should not be treated as the source of truth.

### Completed Before Phase 1
- Counterform public positioning is focused on premium websites for independent UK businesses.
- The site has live work examples, two service routes, blog content, SEO metadata, JSON-LD for services/FAQs/breadcrumbs/articles, and WebP image performance tooling with `sharp`.
- `/api/contact` was already wired to Resend with validation, honeypot protection, and client success/error states.
- Public pricing was deliberately removed from the conversion strategy; qualification stays private in the enquiry flow.

### Phase 1 Completed
- Vercel Web Analytics is installed and rendered from the root layout.
- Conversion events are wired for contact CTAs, work case-study clicks, service-offer clicks, live-site clicks, and contact form submit outcomes.
- `/api/contact` has in-memory rate limiting, Resend reply-to, Resend idempotency keys, and hidden page/referrer/submission context in internal enquiry emails.
- Analytics events must never include submitted names, emails, phone numbers, or message content.

### Still Remaining After Phase 1
- Add one real named testimonial, pilot quote, or client quote when it exists.
- Add visible UK location/trust details; phone stays optional unless calls become a desired sales channel.
- Add an About page.
- Add truthful case-study metrics only when available, such as launch time, page count, Lighthouse scores, or before/after speed.
- Add per-article OG images, branded 404/loading states, and a sticky blog CTA.
- Build the outbound sales workflow: lead batches, one specific observation per lead, two value-add follow-ups, and 100 sends before judging copy.

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.

@docs/research/INSPECTION_GUIDE.md
