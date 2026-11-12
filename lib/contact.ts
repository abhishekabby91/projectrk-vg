export const PHONE_DISPLAY = '+91 93121 22559'
export const PHONE_SHORT = '93121 22559'
export const WHATSAPP_NUMBER = '919312122559'
export const TEL_URL = 'tel:+919312122559'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const DEFAULT_WHATSAPP_MESSAGE = 'Hello Vibroxi, I would like to discuss interior work for my property. Please let me know the next steps.'

/** Build a wa.me link with a prefilled message the customer can review before sending. */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}

/** Prefilled message template for a specific topic, e.g. "Electrical works". */
export function topicMessage(topic: string, extraLines: string[] = []) {
  return [
    `Hello Vibroxi, I would like to enquire about ${topic.toLowerCase()}.`,
    '',
    'Property type:',
    'Location:',
    ...extraLines,
    'Details:',
  ].join('\n')
}

export const multiWorksMessage = [
  'Hello Vibroxi, I need several interior works done and would like to discuss them together.',
  '',
  'Property type:',
  'Location:',
  'Works needed (e.g. painting, electrical, plumbing, false ceiling, flooring):',
].join('\n')

export const siteVisitMessage = [
  'Hello Vibroxi, I would like to request a site visit.',
  '',
  'Property type:',
  'Location:',
  'Work required:',
  'Preferred days / times:',
].join('\n')
