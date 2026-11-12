import type { TradeId } from '../capabilities'
import { isPublished } from '../capabilities'
import type { ServicePage } from '../types'
import { paintingServices } from './services-painting'
import { woodServices } from './services-wood'
import { electricalServices, plumbingServices } from './services-electrical-plumbing'
import { carpentryServices, ceilingServices, flooringServices } from './services-carpentry-ceiling-flooring'
import { kitchenBathServices, refurbServices } from './services-kitchen-refurb'

export const allServices: ServicePage[] = [
  ...paintingServices,
  ...woodServices,
  ...electricalServices,
  ...plumbingServices,
  ...carpentryServices,
  ...ceilingServices,
  ...flooringServices,
  ...kitchenBathServices,
  ...refurbServices,
]

export const servicesBySlug: Record<string, ServicePage> = Object.fromEntries(allServices.map((s) => [s.slug, s]))

/** Service families shown on the hub, homepage and footer. `hub` is the main page for the family. */
export const serviceFamilies: { trade: TradeId; title: string; hub: string; summary: string }[] = [
  { trade: 'painting', title: 'Painting and wall finishing', hub: 'interior-painting', summary: 'Interior and exterior painting, putty and primer, texture and decorative finishes for homes and commercial spaces.' },
  { trade: 'wood-polishing', title: 'Wood polishing', hub: 'wood-polishing', summary: 'Door, furniture, wardrobe and panelling polishing and refinishing with sample approval.' },
  { trade: 'electrical', title: 'Electrical works', hub: 'electrical-works', summary: 'Wiring and rewiring, lighting, switches and sockets, fans and internal electrical repairs.' },
  { trade: 'plumbing', title: 'Plumbing and sanitary', hub: 'plumbing-services', summary: 'Internal plumbing, bathroom and kitchen plumbing, fixture and sanitary fitting installation.' },
  { trade: 'carpentry', title: 'Carpentry and woodwork', hub: 'carpentry-services', summary: 'Doors, wardrobes, cabinets, shelves, wooden panelling and furniture repairs.' },
  { trade: 'ceiling', title: 'False ceiling and partitions', hub: 'false-ceiling', summary: 'Gypsum and POP ceilings, ceiling repairs and non-structural interior partitions.' },
  { trade: 'flooring', title: 'Flooring and tiling', hub: 'flooring-services', summary: 'Floor and wall tiling, tile replacement, vinyl and laminate flooring, skirting and grouting.' },
  { trade: 'kitchen-bathroom', title: 'Kitchen and bathroom works', hub: 'bathroom-interior-works', summary: 'Kitchen cabinet, countertop and sink work; bathroom fixtures, tiling and plumbing upgrades.' },
  { trade: 'refurbishment', title: 'Refurbishment and maintenance', hub: 'interior-refurbishment', summary: 'Multi-trade interior refurbishment and planned or one-off maintenance for homes and offices.' },
]

export function servicesInTrade(trade: TradeId) {
  return allServices.filter((s) => s.trade === trade)
}

export function isServiceIndexable(service: ServicePage) {
  return isPublished(service.trade)
}

/** Options for the multi-service enquiry form. */
export const enquiryServiceOptions = [
  'Painting',
  'Wood polishing',
  'Electrical work',
  'Plumbing',
  'Carpentry',
  'False ceiling',
  'Flooring / tiling',
  'Kitchen works',
  'Bathroom works',
  'Interior refurbishment',
  'Interior maintenance',
  'Not sure yet',
] as const
