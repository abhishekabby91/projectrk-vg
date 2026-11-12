# Phase 1 findings report — existing Vibroxi codebase

Inspected on 2026-11-12, before the restructuring work in this branch.

## Repository state

| Ref | What it contains |
| --- | --- |
| `main` (85cc264) | v0-generated Next.js 16 App Router site. Homepage, `/services/[slug]` (4 commercial painting slugs), `/industries`, `/coverage`, `/project-delivery`, `/projects`, `/contact`. `typescript.ignoreBuildErrors: true`. Placeholder canonical handling. |
| PR #1 — `commercial-service-pages-oct-2026` (draft) | Expands `/services/[slug]` to **26 painting-only slugs** (hotel, retail, warehouse, school, healthcare, restaurant, coworking, developer handover, staircase, basement parking, gym, bank branch, banquet hall, factory office, metal gate painting, plus Gurugram/Noida painting pages). Adds `CONTENT-REGISTRY.md`, `SEARCH-INTENTS.md`, `docs/ROUTES.md`, a validate workflow and a 404 fix for unknown slugs. |
| PR #2 — `restructure/b2b-commercial-india` (draft) | Consolidates services back to 4 canonical slugs with 301 redirects for PR #1-style slugs, adds `/industries/[slug]` (4), `/locations/[slug]` (6 cities) + `/locations/delhi-ncr` hub, `/pricing`, `/annual-maintenance-contracts`, `/facility-management-subcontracting`, `lib/site.ts` canonical helpers, WhatsApp-first contact, `.env.example`, CI verify workflow and research docs (`COMPETITOR-RESEARCH`, `KEYWORD-FAMILY-MAP`, `SEARCH-INTENTS`, `SEO-ROADMAP`, `WEBSITE-STRATEGY`). Removes `ignoreBuildErrors`. |
| `v0/regional-seo-pages` | Single commit adding regional painting pages; superseded by PR #2 locations. |

PR #2 does **not** contain PR #1's 22 extra slugs — it redirects 8 of them and drops the rest. The two drafts conflict on `app/services/[slug]/page.tsx`, `app/page.tsx` and `app/sitemap.ts`.

## Current business positioning found in code

- "Commercial finishes" / "Commercial Finishing & Property Maintenance" (logo tagline, root title).
- B2B-only: facility management companies, commercial property owners, hotels, industrial facilities, fit-out contractors. Homeowners are explicitly discouraged ("rather than small household jobs").
- Services: commercial painting, building repainting, wood polishing, surface preparation. Nothing for electrical, plumbing, carpentry, false ceilings, flooring, kitchens, bathrooms or refurbishment.

This conflicts with the required positioning (residential **and** commercial interior works, fit-out and finishing contractor across multiple trades).

## Existing pages and routes (PR #2 branch, the most complete)

`/`, `/services/{commercial-painting, building-repainting, wood-polishing, surface-preparation-finishing}`, `/industries`, `/industries/{facility-management, hotels-hospitality, commercial-property, industrial-facilities}`, `/locations/delhi-ncr`, `/locations/{delhi, gurugram, noida, greater-noida, ghaziabad, faridabad}`, `/pricing`, `/annual-maintenance-contracts`, `/facility-management-subcontracting`, `/project-delivery`, `/projects` (noindex), `/contact`, `/coverage` (redirected), `robots.txt`, `sitemap.xml`.

## Problems identified

**Duplicate / overlapping**
- PR #1: 26 slugs where many target the same "commercial painting" family (e.g. `commercial-painting-contractors-delhi-ncr` vs `office-commercial-interior-painting`, `commercial-wood-polishing-refinishing` vs `commercial-wood-polishing-offices-hotels`, Gurugram/Noida painting pages duplicating location pages).
- PR #2: `pages` record still holds 8 entries while only 4 are generated; `/coverage/page.tsx` still exists alongside a redirect; `/industries/facility-management` and `/facility-management-subcontracting` target the same buyer.
- `/annual-maintenance-contracts` overlaps the maintenance intent.

**Missing**
- Services: electrical, plumbing, carpentry, false ceiling / partitions, flooring / tiling, kitchen and bathroom works, refurbishment, maintenance, texture painting, putty/primer, door and furniture polishing, house/apartment/villa painting.
- Customer segments: homeowners, apartment and villa owners, landlords, housing societies, clinics, schools, restaurants, retail/showrooms, builders.
- Pages: About, Services hub, Residential and Commercial hubs, Resources/guides, service-specific cost pages.

**Thin content**: `/coverage`, `/project-delivery`, `/contact`, `/industries/*` (short generic copy reused across segments), PR #1's new slugs (template text with segment names swapped).

**SEO issues**
- Root title/description position Vibroxi as commercial-finishes only.
- No breadcrumbs, no BreadcrumbList / Service structured data; Organization schema only.
- Pricing title includes "| Vibroxi" while the layout template appends "| Vibroxi" again → duplicated brand in `<title>` (also on contact and project-delivery).
- Homepage hero uses an Unsplash office stock photo that could be read as a Vibroxi project.
- "Related search topics" blocks list raw keyword strings on service pages (keyword stuffing risk).
- `main` sets `ignoreBuildErrors: true` (fixed in PR #2).

**Functionality**
- Enquiry form requires company and work email, so homeowners cannot submit; no multi-service selection (free-text only); one buyer-type list is B2B-only.
- WhatsApp text is hard-coded to "commercial painting or finishing project".
- `ButtonLink` silently turns any `/contact` link into a WhatsApp link, so the contact page is unreachable from CTAs.
- No lint script; no internal-link check.

## Useful work retained

- `lib/site.ts` canonical / absolute URL helpers and the `NEXT_PUBLIC_SITE_URL` gate (no localhost canonicals, empty sitemap until a domain is set).
- PR #2's redirect approach, WhatsApp-first contact, `+91 93121 22559`, conditional language (no invented warranties, certifications or statistics), pricing factor framework, city area lists and planning notes, `/projects` noindex until verified case studies exist, CI verify workflow, competitor-research doc.
- PR #1's segment ideas (hotels, retail/showrooms, schools, healthcare/clinics, restaurants, developer handover) — re-used as property-type pages covering all trades, not painting-only slugs. PR #1's 404 handling for unknown slugs is kept.

## Consolidation decision

Work continues from the PR #2 branch (most complete, builds cleanly). PR #1's useful segment coverage is folded into the new `/interior-works/[slug]` property pages, and every PR #1 / PR #2 slug that no longer exists gets a 301 to its closest new canonical page (see `next.config.mjs`).
