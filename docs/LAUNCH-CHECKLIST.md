# Launch checklist (before production)

1. **Domain** — set `NEXT_PUBLIC_SITE_URL` to the confirmed production origin. Until it is set, canonicals, structured data and the sitemap are omitted and `robots.txt` disallows all crawling (safe default for previews).
2. **Capabilities** — confirm each trade in `docs/CAPABILITY-REGISTER.md` and flip it in `lib/capabilities.ts`.
3. **Business details** — confirm brand name, phone/WhatsApp (+91 93121 22559), service areas. Add address / hours to structured data only if genuine.
4. **Contact** — test WhatsApp links and the enquiry form on Android and iPhone (WhatsApp app installed and not installed) and desktop (WhatsApp Web).
5. **Next.js security advisory** — the build prints a Next.js security advisory for 16.4.0; upgrade Next.js before production.
6. **Search Console** — verify the domain, submit `/sitemap.xml`, monitor which queries pages receive before adding city × service pages.
7. **Analytics** — Vercel Analytics is wired; consider tracking WhatsApp clicks as events.
8. **Content** — add genuine project photos and case studies (with permission) to `/projects` and remove its `noindex`.
9. Run `pnpm typecheck`, `pnpm build`, then `pnpm start` and `pnpm check:site`.
