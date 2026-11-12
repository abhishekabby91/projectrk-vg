# Vibroxi keyword strategy

**Positioning:** residential and commercial interior works, fit-out and finishing contractor in Delhi NCR (execution only, non-structural).

**Data status:** No measured search volumes, difficulty scores or ranking positions are claimed here. Semrush returned "no API units" during research and no Search Console property exists yet. Keyword families come from live SERP review (see `COMPETITOR-RESEARCH.md`), Indian search phrasing ("flat", "BHK", "POP", "putty", "near me", "contractor", "cost per sq ft") and the actual service scope. Validate with Google Search Console once the domain is live, and with Keyword Planner / Semrush when credits are available.

**Rules**
- One page per keyword family. Synonyms ("home painting" / "house painting" / "ghar ki painting") go on one page.
- Cost intent goes to `/pricing/*` pages; "how to" intent goes to `/resources/*`; "contractor / services / near me" intent goes to service, property and location pages.
- City modifiers are handled by the six city pages. **No city × service pages yet**: there is not enough unique local content to justify them without thin duplication. Revisit per city once Search Console shows impressions for "[service] in [city]".
- Pages for unconfirmed trades are built but `noindex` (see `CAPABILITY-REGISTER.md`), so their keywords are not targeted until confirmed.

## Hub pages

| Page | Primary keyword | Secondary / family | Intent | Customer | Questions answered | Key internal links | Cannibalisation watch | Conversion |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | interior works contractor Delhi NCR | residential and commercial interior contractor; interior renovation contractor; home and office interior works | Commercial | All | What does Vibroxi do / not do; areas; multiple works | All trade hubs, residential, commercial, pricing, cities, guides | `/interior-works` — homepage stays brand + broad; hub targets "interior works contractor" explicitly | Multi-service form, WhatsApp |
| `/interior-works` | interior works contractor | interior contractor near me; interior execution contractor; interior fit-out and finishing contractor | Commercial | All | Contractor vs designer; one contractor vs many | Trades, property pages | Homepage | Multi-service form |
| `/residential-interior-works` | home interior works / home renovation contractor | residential interior contractor; house renovation services; flat renovation | Commercial | Homeowners, landlords, societies | Which property type; what services | 5 residential property pages, 12 services, 4 guides | `/interior-works/homes` (that page = "home interior works" detail; hub = segment overview) | Form (apartment preselected) |
| `/commercial-interior-works` | commercial interior works / office interior renovation contractor | commercial refurbishment contractor; commercial interior contractor Delhi NCR | Commercial | Businesses, FMs, builders | Phasing, after-hours | 8 commercial property pages | `/interior-works/offices` | Form (office preselected) |
| `/services` | interior services | painting electrical plumbing carpentry services | Navigational | All | — | Every service | — | WhatsApp |
| `/pricing` | interior work cost / quotation | per sq ft vs BOQ; what affects cost | Commercial-investigational | All | Rate card? site visit? materials? | 11 cost pages | Cost pages (hub explains method; cost pages are trade-specific) | Estimate form |
| `/locations` | interior contractor Delhi NCR | — | Navigational | All | Coverage | 6 cities | Homepage | Site visit |
| `/resources` | interior work checklist / guide | — | Informational | All | — | 12 guides, cost pages | — | — |

## Service pages

Trade status: ✅ confirmed (indexable) · ⏳ pending owner confirmation (noindex).

| Page | Status | Primary keyword | Secondary / family | Intent / customer | Related questions on page | Internal links | Cannibalisation | Conversion |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| interior-painting | ✅ | interior painting services | wall painting; ceiling painting; room painting; painting contractor | Transactional · homes & offices | Duration, furniture, own paint, cracks | house/apartment painting, putty, texture, false ceiling | Wall & ceiling painting merged here (no separate pages) | Painting quotation |
| house-painting | ✅ | house painting services | home painting contractor; ghar painting; builder floor painting; repainting | Transactional · house/builder-floor owners | Interior + exterior together? per sq ft vs room | exterior, door polishing, switches | "Repainting services" merged here; apartment page owns "flat" terms | Painting quotation |
| apartment-painting | ✅ | apartment painting / flat painting | 2BHK / 3BHK painting; society painting rules | Transactional · flat owners, landlords | Time per BHK, society permission | rental refresh, wardrobes | Keep "house" vs "flat" separate | Painting quotation |
| villa-painting | ✅ | villa painting | villa interior and exterior painting; double-height painting | Transactional · villa owners | Exterior later? scaffolding? | exterior, texture, wood polishing | — | Site visit |
| exterior-painting | ✅ | exterior painting contractor | building repainting; exterior wall painting; commercial building repainting | Transactional · houses, commercial owners, RWAs | Season, high-rise, cracks | house, villa, commercial | Absorbs old `/services/building-repainting` (301) | Painting quotation |
| office-painting | ✅ | office painting services | office painting contractor; corporate office painting; weekend painting | Transactional · offices | Weekend work, smell, brand colours | commercial, maintenance, lighting | `/interior-works/offices` is multi-trade; this is painting only | Painting quotation |
| commercial-painting | ✅ | commercial painting contractor | shop/showroom/hotel/restaurant/clinic painting; painting subcontractor | Transactional · businesses, FMs | Subcontracting, phasing, docs | office painting, exterior, refurbishment | Absorbs 16 PR #1 painting slugs (301) | Painting quotation |
| wall-putty-primer | ✅ | wall putty and primer | wall preparation before painting; crack filling; surface preparation | Transactional | Is putty needed? damp walls | interior painting, texture | Absorbs `/services/surface-preparation-finishing` (301) | Painting quotation |
| texture-painting | ✅ | texture painting | decorative wall finish; feature wall painting | Transactional | Removal, sample | lighting, villa | — | Painting quotation |
| wood-polishing | ✅ | wood polishing services | wood refinishing; PU polish; melamine polish; duco | Transactional | Best polish for doors; colour change | door, furniture, carpentry | Wood refinishing merged here | Wood polishing enquiry |
| door-polishing | ✅ | door polishing | wooden door polish; main door polish | Transactional | Both sides? scratches | door installation | — | Wood polishing enquiry |
| furniture-polishing | ✅ | furniture polishing | wardrobe polishing; table polish; cabinet polish | Transactional | Laminate? on-site? | wardrobe work | Wardrobe polishing merged here | Wood polishing enquiry |
| electrical-works | ⏳ | electrical contractor for home | electrician for house wiring; office electrical work | Transactional | Rewiring, own fittings, emergencies | sub-pages, false ceiling | Hub vs sub-pages: hub = broad "electrical contractor" | Electrical enquiry |
| electrical-wiring | ⏳ | house wiring / rewiring | concealed wiring; new electrical points | Transactional | Occupied home? wall damage | painting | — | Electrical enquiry |
| lighting-installation | ⏳ | lighting installation | LED / cove / profile light; ceiling fan installation; exhaust fan | Transactional | Online-bought lights; fans in false ceiling | false ceiling, texture | Fan installation merged here | Electrical enquiry |
| switch-socket-installation | ⏳ | switch and socket installation | modular switch replacement; switchboard | Transactional | Without breaking walls | kitchen | — | Electrical enquiry |
| electrical-repairs | ⏳ | electrical repair services | MCB tripping; electrician for repairs | Transactional | Same-day? appliances? | maintenance | — | Electrical enquiry |
| plumbing-services | ⏳ | plumbing contractor | plumber for home/office; pipe leak repair | Transactional | Hidden leaks, sewer scope | sub-pages, bathroom | — | Plumbing enquiry |
| bathroom-plumbing | ⏳ | bathroom plumbing | concealed pipe replacement; wall-hung WC; diverter | Transactional | Leak to flat below | bathroom works, tiles | `/services/bathroom-interior-works` = full upgrade | Plumbing enquiry |
| kitchen-plumbing | ⏳ | kitchen plumbing | sink installation; RO connection | Transactional | Move sink; gas | kitchen works | — | Plumbing enquiry |
| sanitary-fittings | ⏳ | sanitary fittings installation | tap / faucet / shower / washbasin installation | Transactional | Compatibility | bathroom | — | Plumbing enquiry |
| carpentry-services | ⏳ | carpenter services / carpentry contractor | woodwork; furniture repair | Transactional | Design? repairs | sub-pages, polishing | — | Project enquiry |
| door-installation-repair | ⏳ | door installation and repair | door fitting; door frame | Transactional | Repair vs replace | door polishing | Door polishing owns "polish" terms | Project enquiry |
| wardrobe-cabinet-work | ⏳ | wardrobe carpenter | built-in wardrobe; cabinets; storage units | Transactional | Duration | furniture polishing, kitchen | Kitchen cabinets → kitchen page | Project enquiry |
| wooden-panelling | ⏳ | wooden wall panelling | TV panel; wooden partition | Transactional | Lights in panels | partitions | Partition page owns gypsum partitions | Project enquiry |
| false-ceiling | ⏳ | false ceiling contractor | false ceiling work; ceiling repair | Transactional | Cracks; rented flat | gypsum, POP, lighting | Hub vs gypsum/POP sub-pages | Project enquiry |
| gypsum-ceiling | ⏳ | gypsum false ceiling | gypsum ceiling installation | Transactional | Bathrooms | POP | — | Project enquiry |
| pop-ceiling | ⏳ | POP ceiling | POP false ceiling; POP repair | Transactional | POP vs gypsum cost | gypsum | — | Project enquiry |
| interior-partitions | ⏳ | gypsum partition | drywall partition; office cabin partition | Transactional | Soundproof | panelling | — | Project enquiry |
| flooring-services | ⏳ | flooring contractor | flooring services; floor tiling | Transactional | Tiles over tiles | sub-pages | — | Project enquiry |
| tile-installation | ⏳ | tile installation | bathroom tiling; kitchen tiling; wall tiles | Transactional | Supply | bathroom, kitchen | — | Project enquiry |
| tile-replacement | ⏳ | tile replacement | broken tile repair; hollow tiles; regrouting | Transactional | Why hollow | maintenance | — | Project enquiry |
| vinyl-laminate-flooring | ⏳ | vinyl flooring installation | laminate flooring; SPC flooring | Transactional | Laminate in kitchen | offices | — | Project enquiry |
| kitchen-interior-works | ⏳ | kitchen renovation | kitchen upgrade; kitchen cabinet installation; countertop | Transactional | Kitchen usable? granite | plumbing, cabinets, tiles | Not "modular kitchen design" (no design) | Multi-works |
| bathroom-interior-works | ⏳ | bathroom renovation | bathroom upgrade; bathroom remodelling | Transactional | Duration; one bathroom at a time | plumbing, tiles | bathroom-plumbing | Multi-works |
| interior-refurbishment | ⏳ | interior renovation contractor | home/office refurbishment; interior renovation services | Transactional | One quotation? design? | all trades | `/interior-works` hub (hub = contractor; this = refurbishment project) | Refurbishment |
| home-interior-maintenance | ⏳ | home repair services | home maintenance services; handyman services | Transactional | Minimum job | repairs | rental refresh page | Multi-works |
| office-interior-maintenance | ⏳ | office maintenance services | interior maintenance services; AMC | Transactional · FMs | AMC; multi-site | offices | Absorbs `/annual-maintenance-contracts` (301) | Project enquiry |

## Property pages (`/interior-works/*`, all ⏳ until trades confirmed)

| Page | Primary keyword | Family | Customer | Cannibalisation |
| --- | --- | --- | --- | --- |
| homes | home interior works | home renovation; house renovation contractor | Homeowners | `/residential-interior-works` (segment hub) |
| apartments | flat interior work / apartment renovation | new flat interior work; possession flat work | Flat owners | apartment-painting (painting only) |
| villas | villa interior works | villa renovation | Villa owners | villa-painting |
| rental-property-refresh | rental property refresh | landlord repairs; flat repair before tenant | Landlords | home-interior-maintenance |
| housing-societies | housing society maintenance | RWA common area painting; society repair work | RWAs | — |
| offices | office interior works / corporate office refurbishment | office renovation contractor | Offices | office-painting |
| retail-showrooms | shop interior work / showroom renovation | retail store refurbishment | Retail | — |
| hotels | hotel maintenance contractor | hotel room refurbishment | Hotels | — |
| restaurants | restaurant interior work | café renovation | Restaurants | — |
| clinics | clinic interior work | dental clinic renovation | Clinics | — |
| schools | school maintenance work | school painting and repairs | Schools | — |
| commercial-property | commercial property refurbishment | pre-leasing refresh | Owners/asset managers | — |
| builders-facility-managers | interior subcontractor | facility management vendor; fit-out subcontractor | Builders, FMs | commercial-painting (subcontracting FAQ) |

Retail shop + showroom, and office + corporate refurbishment, were merged to avoid two pages competing for the same family.

## Location pages (indexable)

| Page | Primary | Family |
| --- | --- | --- |
| /locations/delhi | interior contractor in Delhi | home renovation Delhi; builder floor renovation |
| /locations/gurugram | interior contractor in Gurugram | flat interior work Gurgaon; office renovation Gurugram |
| /locations/noida | interior contractor in Noida | flat renovation Noida; society NOC |
| /locations/greater-noida | interior contractor in Greater Noida | Greater Noida West flat interior work |
| /locations/ghaziabad | interior contractor in Ghaziabad | Indirapuram / Raj Nagar Extension |
| /locations/faridabad | interior contractor in Faridabad | house renovation Faridabad |

## Cost pages (`/pricing/*`)

interior-works-cost (⏳) · house-painting-cost (✅, covers apartment painting cost) · office-painting-cost (✅) · wood-polishing-cost (✅) · electrical-work-cost · plumbing-work-cost · false-ceiling-cost · flooring-tile-cost · kitchen-interior-work-cost · bathroom-interior-work-cost · interior-refurbishment-cost (⏳). Primary keyword = "[service] cost" / "[service] cost per sq ft"; each page explains factors and measurement basis and never publishes rates.

## Guides (`/resources/*`, indexable)

Each targets a distinct "how to / checklist" query and links to 2–6 services: multi-works planning, move-in checklist, electrical points checklist, bathroom plumbing checklist, false ceiling types, flooring guide, painting preparation, wood finish selection, BOQ preparation, comparing quotations, occupied office refurbishment, rental maintenance checklist.

## Priority commercial queries → target page

| Query | Page |
| --- | --- |
| interior works contractor near me | `/interior-works`, city pages |
| interior renovation contractor | `/services/interior-refurbishment` |
| home painting contractor | `/services/house-painting` |
| electrical contractor for home | `/services/electrical-works` |
| plumbing contractor | `/services/plumbing-services` |
| false ceiling contractor | `/services/false-ceiling` |
| flooring contractor | `/services/flooring-services` |
| wood polishing contractor | `/services/wood-polishing` |
| office interior renovation contractor | `/interior-works/offices` |
| interior maintenance services | `/services/office-interior-maintenance`, `/services/home-interior-maintenance` |
