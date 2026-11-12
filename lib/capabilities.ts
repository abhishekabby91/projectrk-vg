/**
 * Service capability register.
 *
 * The website scope describes the intended business. A trade is only published
 * (indexable, in the sitemap, in structured data) once the owner confirms that
 * Vibroxi can genuinely deliver it with suitable, qualified personnel and that
 * applicable safety and local requirements are in place.
 *
 * - 'confirmed': offered on the pre-existing site; indexable.
 * - 'pending':   page is prepared for owner review. It renders, but is noindex
 *                and excluded from the sitemap until the owner switches it to 'confirmed'.
 *
 * To publish a trade after verification, change its status to 'confirmed'.
 */
export type TradeId =
  | 'painting'
  | 'wood-polishing'
  | 'electrical'
  | 'plumbing'
  | 'carpentry'
  | 'ceiling'
  | 'flooring'
  | 'kitchen-bathroom'
  | 'refurbishment'

export type CapabilityStatus = 'confirmed' | 'pending'

export const trades: Record<TradeId, { label: string; status: CapabilityStatus; verificationNote: string }> = {
  painting: { label: 'Painting and wall finishing', status: 'confirmed', verificationNote: 'Offered on the existing site. Confirm texture / decorative finish range before promoting specific products.' },
  'wood-polishing': { label: 'Wood polishing and finishing', status: 'confirmed', verificationNote: 'Offered on the existing site. Confirm which finish systems (melamine, PU, Duco, lacquer) are executed in-house before naming them as standard.' },
  electrical: { label: 'Electrical works', status: 'pending', verificationNote: 'Requires licensed / qualified electricians, safe isolation procedure and compliance with applicable electrical rules. Confirm DB and rewiring scope limits.' },
  plumbing: { label: 'Plumbing and sanitary works', status: 'pending', verificationNote: 'Confirm qualified plumbers, pressure testing practice and scope limits (internal plumbing only, no main line / sewer work).' },
  carpentry: { label: 'Carpentry and woodwork', status: 'pending', verificationNote: 'Confirm in-house or partner carpenters, workshop vs on-site fabrication and hardware brands used.' },
  ceiling: { label: 'False ceiling and partition work', status: 'pending', verificationNote: 'Confirm gypsum / POP installation teams, framing systems and that partitions are non-structural only.' },
  flooring: { label: 'Flooring and tiling', status: 'pending', verificationNote: 'Confirm tiling teams, adhesive / grout systems and vinyl / laminate installation capability.' },
  'kitchen-bathroom': { label: 'Kitchen and bathroom interior works', status: 'pending', verificationNote: 'Depends on plumbing, tiling, electrical and carpentry being confirmed. No waterproofing guarantees unless verified.' },
  refurbishment: { label: 'Interior refurbishment and maintenance', status: 'pending', verificationNote: 'Multi-trade. Publish once at least the trades it relies on are confirmed and a coordination process exists.' },
}

export function isPublished(trade: TradeId) {
  return trades[trade].status === 'confirmed'
}

/** A page that relies on several trades is published only when every trade is confirmed. */
export function allPublished(list: TradeId[]) {
  return list.every(isPublished)
}
