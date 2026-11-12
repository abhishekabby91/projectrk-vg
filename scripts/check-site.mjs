#!/usr/bin/env node
/**
 * Crawls a running build (default http://localhost:3000) from the homepage and checks:
 * - every internal link returns 200 (after redirects)
 * - every page has exactly one <h1>, a unique <title> and a unique meta description
 * - canonical (when present) points at the same path
 * - WhatsApp links use wa.me/919312122559 and phone links use tel:+919312122559
 * - legacy redirect sources resolve to a 200 page
 * - noindex pages are absent from sitemap.xml
 * Usage: node scripts/check-site.mjs [baseUrl]
 */
const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '')
const legacy = ['/coverage', '/industries', '/industries/hotels-hospitality', '/project-delivery', '/annual-maintenance-contracts', '/services/building-repainting', '/services/surface-preparation-finishing', '/services/commercial-painting-contractors-delhi-ncr', '/services/hotel-hospitality-painting-contractors', '/locations/delhi-ncr', '/facility-management-subcontracting']
const errors = []
const seen = new Map()
const queue = ['/']
const titles = new Map()
const descriptions = new Map()
const noindex = new Set()

const attr = (html, re) => [...html.matchAll(re)].map((m) => m[1])
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')

while (queue.length) {
  const path = queue.shift()
  if (seen.has(path)) continue
  const res = await fetch(base + path, { redirect: 'follow' })
  seen.set(path, res.status)
  if (res.status !== 200) { errors.push(`${res.status} ${path}`); continue }
  const html = await res.text()
  const h1 = (html.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) errors.push(`${path}: ${h1} <h1> elements`)
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '')
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
  if (!title) errors.push(`${path}: missing title`)
  if (!desc) errors.push(`${path}: missing description`)
  if (/Vibroxi.*\| Vibroxi$/.test(title) && path !== '/') errors.push(`${path}: brand duplicated in title "${title}"`)
  if (titles.has(title)) errors.push(`${path}: duplicate title with ${titles.get(title)}`); else titles.set(title, path)
  if (descriptions.has(desc)) errors.push(`${path}: duplicate description with ${descriptions.get(desc)}`); else descriptions.set(desc, path)
  if (/<meta name="robots" content="noindex/.test(html)) noindex.add(path)
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1]
  if (canonical && new URL(canonical).pathname.replace(/\/$/, '') !== (path === '/' ? '' : path)) errors.push(`${path}: canonical mismatch ${canonical}`)
  for (const href of attr(html, /href="([^"]+)"/g).map(decode)) {
    if (href.startsWith('https://wa.me/') && !href.startsWith('https://wa.me/919312122559')) errors.push(`${path}: bad WhatsApp link ${href}`)
    if (href.startsWith('tel:') && href !== 'tel:+919312122559') errors.push(`${path}: bad tel link ${href}`)
    if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/_next') && !/\.(png|svg|ico|jpg|xml|txt)$/.test(href)) {
      const clean = href.split('#')[0].split('?')[0] || '/'
      if (!seen.has(clean) && !queue.includes(clean)) queue.push(clean)
    }
  }
}

for (const path of legacy) {
  const res = await fetch(base + path, { redirect: 'manual' })
  if (![301, 308].includes(res.status)) { errors.push(`legacy ${path}: expected permanent redirect, got ${res.status}`); continue }
  const target = await fetch(new URL(res.headers.get('location'), base), { redirect: 'follow' })
  if (target.status !== 200) errors.push(`legacy ${path} -> ${res.headers.get('location')}: ${target.status}`)
}

const sitemap = await (await fetch(base + '/sitemap.xml')).text()
const sitemapPaths = attr(sitemap, /<loc>([^<]+)<\/loc>/g).map((u) => new URL(u).pathname)
for (const p of sitemapPaths) {
  if (noindex.has(p)) errors.push(`sitemap includes noindex page ${p}`)
  if (seen.has(p) === false) errors.push(`sitemap page not reachable by internal links: ${p}`)
}

console.log(`Crawled ${seen.size} pages · ${noindex.size} noindex · ${sitemapPaths.length} in sitemap · ${legacy.length} legacy redirects checked`)
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('All checks passed.')
