import Link from 'next/link'
import { PageShell } from '@/components/site'

export default function NotFound() {
  return (
    <PageShell>
      <section className="grid min-h-[60vh] place-items-center px-4 py-20 text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a17b3f]">Page not found</p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">That page has moved or does not exist.</h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link href="/" className="underline decoration-[#c9a66b] underline-offset-4">Home</Link>
            <Link href="/services" className="underline decoration-[#c9a66b] underline-offset-4">Services</Link>
            <Link href="/contact" className="underline decoration-[#c9a66b] underline-offset-4">Contact</Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
