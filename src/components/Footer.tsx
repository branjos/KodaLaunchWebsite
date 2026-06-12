import Link from 'next/link'

export function Footer() {
  return (
    <footer className="px-4 md:px-12 py-8 md:py-12" style={{ borderTop: '1px solid var(--color-line)', background: 'var(--color-bg)' }}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div>
          <div className="flex items-center" style={{ gap: 0 }}>
            <img src="/logo-LightMode.svg" alt="K" className="logo-light" style={{ height: '26px', width: 'auto', position: 'relative', top: '-3px', marginRight: '-4px' }} />
            <img src="/logo-DarkMode.svg" alt="K" className="logo-dark" style={{ height: '26px', width: 'auto', position: 'relative', top: '-3px', marginRight: '-4px' }} />
            <span style={{ color: 'var(--color-ink)', fontSize: '22px', fontWeight: 600, letterSpacing: '-0.01em' }}>
              oda Launch <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>AI</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px]" style={{ color: 'var(--color-ink-soft)' }}>
            A golf coach for Garmin R10 owners. Real coaching, every shot.
          </p>
          <p className="mt-3 text-[12px]" style={{ color: 'var(--color-ink-soft)' }}>© 2026 Koda Launch AI, LLC.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 text-[13px]">
          <div>
            <div className="font-semibold mb-3" style={{ color: 'var(--color-ink)' }}>Product</div>
            <ul className="space-y-2" style={{ color: 'var(--color-ink-soft)' }}>
              <li><Link href="/#how-it-works" className="hover:opacity-80 transition" style={{ textDecoration: 'none', color: 'inherit' }}>How it works</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3" style={{ color: 'var(--color-ink)' }}>Company</div>
            <ul className="space-y-2" style={{ color: 'var(--color-ink-soft)' }}>
              <li><Link href="/about" className="hover:opacity-80 transition" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
              <li><Link href="/pricing" className="hover:opacity-80 transition" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</Link></li>
              <li><Link href="/faq" className="hover:opacity-80 transition" style={{ textDecoration: 'none', color: 'inherit' }}>FAQ</Link></li>
              <li><Link href="/contact" className="hover:opacity-80 transition" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3" style={{ color: 'var(--color-ink)' }}>Legal</div>
            <ul className="space-y-2" style={{ color: 'var(--color-ink-soft)' }}>
              <li><Link href="/terms" className="hover:opacity-80 transition" style={{ textDecoration: 'none', color: 'inherit' }}>Terms</Link></li>
              <li><Link href="/privacy" className="hover:opacity-80 transition" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
