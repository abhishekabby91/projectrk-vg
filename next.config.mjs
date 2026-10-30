/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/coverage', destination: '/locations/delhi-ncr', permanent: true },
      { source: '/services/commercial-painting-contractors-delhi-ncr', destination: '/services/commercial-painting', permanent: true },
      { source: '/services/office-commercial-interior-painting', destination: '/services/commercial-painting', permanent: true },
      { source: '/services/exterior-commercial-building-repainting', destination: '/services/building-repainting', permanent: true },
      { source: '/services/commercial-wood-polishing-refinishing', destination: '/services/wood-polishing', permanent: true },
      { source: '/services/painting-contractors-facility-management', destination: '/industries/facility-management', permanent: true },
      { source: '/services/painting-subcontractor-interior-fit-out-contractors', destination: '/facility-management-subcontracting', permanent: true },
      { source: '/services/housing-society-common-area-painting', destination: '/industries/commercial-property', permanent: true },
      { source: '/services/commercial-painting-maintenance-programs', destination: '/annual-maintenance-contracts', permanent: true },
    ]
  },
}

export default nextConfig
