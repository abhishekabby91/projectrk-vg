import type { CityPage } from '../types'

const visitFaq = { q: 'Do you have an office in this city?', a: 'We do not list a local office here. Enquiries are reviewed and site visits arranged based on the exact location, scope and current schedule.' }

export const cities: CityPage[] = [
  {
    slug: 'delhi',
    name: 'Delhi',
    title: 'Interior Works Contractor in Delhi – Homes & Offices',
    h1: 'Interior Works Contractor in Delhi',
    description: 'Painting, wood polishing, electrical, plumbing, carpentry, false ceiling and flooring works for homes, builder floors, offices and shops across Delhi.',
    intro: [
      'Delhi has a mix of older independent houses, builder floors, DDA and group housing flats, and dense commercial areas. Many homes here are decades old, so interior projects often combine repainting with electrical checks, bathroom plumbing replacement and wood polishing.',
      'Vibroxi reviews interior work enquiries across Delhi. Parking, narrow lanes, material movement and RWA timings are considered when planning a site visit and schedule.',
    ],
    residential: 'Builder floors and older independent houses frequently need full repaints, rewiring checks, bathroom upgrades and door polishing. Flats in group housing societies need work planned around society rules.',
    commercial: 'Offices, shops, clinics, restaurants and showrooms in commercial areas usually require after-hours work and careful material movement in congested locations.',
    areas: ['South Delhi colonies and builder floors', 'Dwarka and West Delhi group housing', 'Rohini, Pitampura and North-West Delhi', 'East Delhi and Mayur Vihar', 'Connaught Place and central business areas', 'Okhla, Naraina and Nehru Place commercial areas'],
    localNotes: ['Parking and material movement in narrow lanes are planned in advance', 'Builder floors with shared staircases need co-owner coordination for common-area work', 'Older wiring and plumbing are common in houses built decades ago — assess before painting'],
    faqs: [
      { q: 'Which parts of Delhi do you cover?', a: 'Enquiries from all parts of Delhi can be reviewed. A site visit is confirmed after we understand the location and scope.' },
      { q: 'Can you work in a builder floor where other floors are occupied?', a: 'Yes. Noise, timing and staircase use are planned with you so neighbours are not unduly disturbed.' },
      visitFaq,
    ],
  },
  {
    slug: 'gurugram',
    name: 'Gurugram',
    title: 'Interior Works Contractor in Gurugram – Flats, Villas & Offices',
    h1: 'Interior Works Contractor in Gurugram',
    description: 'Interior works in Gurugram for apartments, villas and corporate offices — painting, electrical, plumbing, wardrobes, false ceilings, flooring and refurbishment.',
    intro: [
      'Gurugram combines high-rise group housing, gated villa communities and a large concentration of corporate offices and business parks. Residential projects usually run within society rules; commercial projects within building management requirements.',
      'Vibroxi reviews interior works enquiries across Gurugram, from new-possession flats needing wardrobes and lighting to offices needing a phased refurbishment.',
    ],
    residential: 'New-possession apartments often need wardrobes, false ceilings, extra electrical points and lighting. Villas need larger painting, polishing and lighting scopes.',
    commercial: 'Corporate offices in business districts generally need permits, gate passes and after-hours working. Retail and restaurants need work outside trading hours.',
    areas: ['Golf Course Road and Golf Course Extension Road', 'Sohna Road and South of Gurugram', 'Dwarka Expressway and New Gurugram sectors', 'DLF Phases and MG Road', 'Cyber City and Udyog Vihar business areas', 'Sushant Lok and Palam Vihar'],
    localNotes: ['Large societies commonly require contractor registration, permitted hours and lift booking', 'Office towers often require work permits and after-hours schedules', 'Possession-stage flats benefit from sequencing electrical and ceiling work before painting'],
    faqs: [
      { q: 'Do you take projects on Dwarka Expressway and New Gurugram?', a: 'Enquiries from these areas can be reviewed. Scheduling depends on site and scope.' },
      { q: 'Can you work in a corporate tower?', a: 'Yes, subject to the building\'s permit and timing requirements, which we plan for.' },
      visitFaq,
    ],
  },
  {
    slug: 'noida',
    name: 'Noida',
    title: 'Interior Works Contractor in Noida – Apartments & Offices',
    h1: 'Interior Works Contractor in Noida',
    description: 'Interior works in Noida for apartments, independent homes, offices and shops — painting, wood polishing, electrical, plumbing, carpentry, false ceilings and flooring.',
    intro: [
      'Noida has extensive group housing across its sectors, independent houses in older sectors, and IT and office campuses. Many societies require a renovation intimation or NOC, a security deposit and contractor details before work begins.',
      'Vibroxi reviews interior works enquiries across Noida sectors and plans around society and building requirements.',
    ],
    residential: 'Apartments commonly need repainting, wardrobes, false ceilings, bathroom upgrades and flooring. Older independent houses need electrical and plumbing checks alongside finishing.',
    commercial: 'IT offices, retail units and clinics need work scheduled around operations and building management approvals.',
    areas: ['Sector 50, 75–79 and central residential sectors', 'Sector 100–137 along the Expressway', 'Sector 18 and central commercial areas', 'Sector 62–63 office and business areas', 'Sector 125–132 business districts', 'Noida Extension (Greater Noida West) adjoining areas'],
    localNotes: ['Many societies require a renovation NOC and contractor details — the owner applies, we provide information', 'Noisy work is often limited to certain hours', 'Debris removal must follow society rules'],
    faqs: [
      { q: 'Do I need society permission for renovation in Noida?', a: 'Many societies require it. Check with your maintenance office; we can share team details for the application.' },
      { q: 'Can you work in an office campus?', a: 'Yes, subject to building permits and timing.' },
      visitFaq,
    ],
  },
  {
    slug: 'greater-noida',
    name: 'Greater Noida',
    title: 'Interior Works Contractor in Greater Noida & Greater Noida West',
    h1: 'Interior Works Contractor in Greater Noida',
    description: 'Interior works in Greater Noida and Greater Noida West for new flats, villas, offices and institutions — painting, electrical, plumbing, wardrobes, ceilings and flooring.',
    intro: [
      'Greater Noida and Greater Noida West have many recently delivered housing projects, where owners are fitting out new flats, as well as institutions, offices and commercial developments.',
      'Vibroxi reviews interior works enquiries here, especially new-possession work where several trades need to be sequenced.',
    ],
    residential: 'New-possession flats in Greater Noida West commonly need wardrobes, false ceilings, lighting, extra electrical points, curtain fittings and repainting.',
    commercial: 'Institutions, offices and commercial developments need planned maintenance and refurbishment, often during holidays or off-hours.',
    areas: ['Greater Noida West (Noida Extension)', 'Pari Chowk and Alpha / Beta / Gamma sectors', 'Knowledge Park institutional areas', 'Techzone and Ecotech commercial areas', 'Yamuna Expressway adjoining projects'],
    localNotes: ['Possession-stage societies may have busy lift schedules — plan material movement early', 'Institutions usually plan works during vacations'],
    faqs: [
      { q: 'Can you fit out a new-possession flat completely?', a: 'Painting, electrical, plumbing, wardrobes, ceilings and flooring can be planned together subject to capability confirmation for each trade.' },
      visitFaq,
    ],
  },
  {
    slug: 'ghaziabad',
    name: 'Ghaziabad',
    title: 'Interior Works Contractor in Ghaziabad – Homes & Commercial',
    h1: 'Interior Works Contractor in Ghaziabad',
    description: 'Interior works in Ghaziabad for apartments, independent houses, shops and offices — painting, polishing, electrical, plumbing, carpentry, false ceiling and flooring.',
    intro: [
      'Ghaziabad has large residential areas such as Indirapuram, Vaishali, Raj Nagar Extension and Crossings Republik, alongside commercial and industrial areas. Interior projects range from flat upgrades to shop and office refurbishments.',
      'Vibroxi reviews interior works enquiries across Ghaziabad and plans visits based on location and scope.',
    ],
    residential: 'Flats and independent houses often need repainting, bathroom upgrades, electrical changes, door polishing and tiles.',
    commercial: 'Shops, offices and industrial administrative blocks need repairs and refreshes around operating hours.',
    areas: ['Indirapuram and Vasundhara', 'Vaishali and Kaushambi', 'Raj Nagar and Raj Nagar Extension', 'Crossings Republik', 'Sahibabad commercial and industrial areas'],
    localNotes: ['Society timings and lift bookings vary — share rules early', 'Industrial area offices may have security and entry procedures'],
    faqs: [
      { q: 'Do you cover Raj Nagar Extension and Crossings Republik?', a: 'Enquiries from these areas can be reviewed.' },
      visitFaq,
    ],
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    title: 'Interior Works Contractor in Faridabad – Homes & Offices',
    h1: 'Interior Works Contractor in Faridabad',
    description: 'Interior works in Faridabad for houses, apartments, offices and shops — painting, wood polishing, electrical, plumbing, carpentry, false ceilings and flooring.',
    intro: [
      'Faridabad has established sectors with independent houses, newer group housing in Greater Faridabad, and industrial and commercial areas. Older houses often need combined electrical, plumbing and finishing work.',
      'Vibroxi reviews interior works enquiries across Faridabad and plans visits based on location and scope.',
    ],
    residential: 'Independent houses frequently need full repaints, rewiring checks, bathroom upgrades and wood polishing. New apartments in Greater Faridabad need fit-out work.',
    commercial: 'Offices, shops and industrial administrative blocks need repairs and refurbishment around operations.',
    areas: ['Established sectors (e.g. Sector 14–17, 21, 28–31)', 'Greater Faridabad / Neharpar', 'NIT Faridabad', 'Sector 12–16 commercial areas', 'Industrial areas and Ballabgarh'],
    localNotes: ['Older houses benefit from electrical and plumbing assessment before finishing work', 'Industrial area offices may require entry procedures'],
    faqs: [
      { q: 'Do you cover Greater Faridabad?', a: 'Enquiries from Greater Faridabad can be reviewed.' },
      visitFaq,
    ],
  },
]

export const citiesBySlug: Record<string, CityPage> = Object.fromEntries(cities.map((c) => [c.slug, c]))
