# Service capability register — owner confirmation required

Source of truth in code: `lib/capabilities.ts`. Changing a trade from `'pending'` to `'confirmed'` automatically:
- removes `noindex` from its service pages (and from cost/property pages once all their trades are confirmed),
- adds those pages to `sitemap.xml`,
- adds Service structured data to its service pages,
- hides the owner-review banner on preview deployments.

Pending pages are still built, linked and readable, so the site presents the intended multi-trade scope while search engines are told not to index unverified offerings. Owner-review banners are shown only on Vercel preview builds, in development, or when `SHOW_REVIEW_NOTICES=true`.

## 1. Confirmed (indexable now)

| Trade | Pages | Basis |
| --- | --- | --- |
| Painting and wall finishing | interior, house, apartment, villa, exterior, office, commercial painting; wall putty & primer; texture painting; house/office painting cost | Offered on the existing site (main, PR #1, PR #2) |
| Wood polishing | wood polishing, door polishing, furniture & wardrobe polishing; wood polishing cost | Offered on the existing site |

Still to confirm within these trades: exterior work at height and access equipment; texture / decorative product range; which wood finishes (melamine, PU, Duco, French polish) are executed in-house.

## 2. Requires owner approval before publication

| Trade | What to confirm |
| --- | --- |
| Electrical works | Qualified/licensed electricians; safe isolation procedure; limits on DB and rewiring work; applicable electrical safety rules |
| Plumbing and sanitary | Qualified plumbers; pressure-testing practice; internal-only scope |
| Carpentry | In-house or partner carpenters; on-site vs workshop fabrication; hardware |
| False ceiling and partitions | Gypsum / POP teams; framing systems; partitions strictly non-structural |
| Flooring and tiling | Tiling teams; adhesive/grout systems; vinyl/laminate installation |
| Kitchen and bathroom | Depends on plumbing, tiling, electrical, carpentry; who handles waterproofing and how it is tested |
| Refurbishment and maintenance | Coordination process; which trades are in-house vs partners; any maintenance contract terms |

## 3. Do not publish until verified (content intentionally excluded)

- Waterproofing guarantees, specialist industrial/epoxy/fire-retardant coatings, rope access, HVAC, fire systems, medical gas, gas pipelines, structural/civil work, interior design.
- Ratings, reviews, testimonials, project counts, years in business, certifications, addresses, office locations, business hours, response-time promises.
- Project photographs (none are used; the stock hero image from main was removed).
