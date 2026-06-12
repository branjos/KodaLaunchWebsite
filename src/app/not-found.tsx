import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div
      className="px-4 md:px-12 py-32 md:py-48 text-center"
      style={{ background: 'var(--color-bg)', minHeight: '60vh' }}
    >
      <div className="max-w-xl mx-auto">
        <div className="font-mono text-[11px] tracking-[0.25em] mb-6" style={{ color: 'var(--color-accent)' }}>
          404
        </div>
        <h1 className="font-display text-[56px] md:text-[80px] leading-[1.0] mb-6" style={{ color: 'var(--color-ink)' }}>
          Page not <em>found.</em>
        </h1>
        <p className="text-[16px] leading-relaxed mb-10" style={{ color: 'var(--color-ink-soft)' }}>
          That page doesn't exist. It may have moved, or the URL might be off.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3.5 rounded-full font-semibold text-[14px] transition hover:opacity-90"
          style={{ background: 'var(--color-chip)', color: 'var(--color-chip-ink)', textDecoration: 'none' }}
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
