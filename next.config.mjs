/**
 * Permanent redirects consolidate URLs from earlier drafts (main, PR #1, PR #2)
 * into the current architecture so no old link returns a 404.
 */
const legacyRedirects = [
  // Hubs and company pages
  ['/coverage', '/locations'],
  ['/locations/delhi-ncr', '/locations'],
  ['/industries', '/commercial-interior-works'],
  ['/industries/facility-management', '/interior-works/builders-facility-managers'],
  ['/industries/hotels-hospitality', '/interior-works/hotels'],
  ['/industries/commercial-property', '/interior-works/commercial-property'],
  ['/industries/industrial-facilities', '/commercial-interior-works'],
  ['/project-delivery', '/about'],
  ['/annual-maintenance-contracts', '/services/office-interior-maintenance'],
  ['/facility-management-subcontracting', '/interior-works/builders-facility-managers'],
  // PR #2 service slugs that were merged
  ['/services/building-repainting', '/services/exterior-painting'],
  ['/services/surface-preparation-finishing', '/services/wall-putty-primer'],
  // main / PR #1 service slugs
  ['/services/commercial-painting-contractors-delhi-ncr', '/services/commercial-painting'],
  ['/services/office-commercial-interior-painting', '/services/office-painting'],
  ['/services/exterior-commercial-building-repainting', '/services/exterior-painting'],
  ['/services/commercial-wood-polishing-refinishing', '/services/wood-polishing'],
  ['/services/commercial-wood-polishing-offices-hotels', '/services/wood-polishing'],
  ['/services/painting-contractors-facility-management', '/interior-works/builders-facility-managers'],
  ['/services/painting-subcontractor-interior-fit-out-contractors', '/interior-works/builders-facility-managers'],
  ['/services/builder-developer-handover-painting', '/interior-works/builders-facility-managers'],
  ['/services/housing-society-common-area-painting', '/interior-works/housing-societies'],
  ['/services/commercial-painting-maintenance-programs', '/services/office-interior-maintenance'],
  ['/services/hotel-hospitality-painting-contractors', '/interior-works/hotels'],
  ['/services/retail-showroom-painting-contractors', '/interior-works/retail-showrooms'],
  ['/services/school-education-facility-painting', '/interior-works/schools'],
  ['/services/healthcare-facility-painting-contractors', '/interior-works/clinics'],
  ['/services/restaurant-cafe-painting-contractors', '/interior-works/restaurants'],
  ['/services/coworking-space-painting-contractors', '/services/office-painting'],
  ['/services/commercial-painting-contractors-gurugram', '/locations/gurugram'],
  ['/services/commercial-painting-contractors-noida', '/locations/noida'],
  ['/services/warehouse-business-park-painting', '/services/commercial-painting'],
  ['/services/commercial-staircase-corridor-painting', '/services/commercial-painting'],
  ['/services/basement-parking-area-painting', '/services/commercial-painting'],
  ['/services/gym-fitness-centre-painting', '/services/commercial-painting'],
  ['/services/bank-branch-commercial-painting', '/services/commercial-painting'],
  ['/services/banquet-hall-event-venue-painting', '/services/commercial-painting'],
  ['/services/factory-office-admin-block-painting', '/services/commercial-painting'],
  ['/services/commercial-metal-gate-railing-painting', '/services/exterior-painting'],
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  poweredByHeader: false,
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
}

export default nextConfig
