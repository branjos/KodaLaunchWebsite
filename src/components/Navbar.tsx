'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { trackSignInClick, trackSignUpClick } from '@/lib/analytics'

const SIGNUP_URL = 'https://accounts.kodalaunch.com/sign-up'

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  function navColor(href: string) {
    return pathname === href
      ? { color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'none' }
      : { color: 'inherit', textDecoration: 'none' }
  }

  return (
    <nav
      className="relative flex items-center justify-between px-4 md:px-12 py-4 md:py-6"
      style={{ borderBottom: '1px solid var(--color-line)', background: 'transparent' }}
    >
      <Link href="/" className="flex items-center" style={{ textDecoration: 'none', gap: 0 }}>
        <img src="/logo-LightMode.svg" alt="K" className="logo-light" style={{ height: '26px', width: 'auto', position: 'relative', top: '-3px', marginRight: '-4px' }} />
        <img src="/logo-DarkMode.svg" alt="K" className="logo-dark" style={{ height: '26px', width: 'auto', position: 'relative', top: '-3px', marginRight: '-4px' }} />
        <span style={{ color: 'var(--color-ink)', fontSize: '22px', fontWeight: 600, letterSpacing: '-0.01em' }}>
          oda Launch <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>AI</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-[14px]" style={{ color: 'var(--color-ink-soft)' }}>
        <Link href="/#how-it-works" className="hover:opacity-80 transition" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>
          How it works
        </Link>
        <Link href="/pricing" className="hover:opacity-80 transition cursor-pointer" style={navColor('/pricing')}>Pricing</Link>
        <Link href="/about" className="hover:opacity-80 transition cursor-pointer" style={navColor('/about')}>About</Link>
        <Link href="/faq" className="hover:opacity-80 transition cursor-pointer" style={navColor('/faq')}>FAQ</Link>
        <Link href="/blog" className="hover:opacity-80 transition cursor-pointer" style={pathname.startsWith('/blog') ? { color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'none' } : { color: 'inherit', textDecoration: 'none' }}>Blog</Link>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <ThemeToggle />
        <a
          href="https://accounts.kodalaunch.com/sign-in"
          onClick={() => trackSignInClick(pathname.replace('/', '') || 'home', 'navbar')}
          className="hidden md:block px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition hover:opacity-80"
          style={{ border: '1.5px solid var(--color-line)', color: 'var(--color-ink)', textDecoration: 'none' }}
        >
          Sign in
        </a>
        <a
          href={SIGNUP_URL}
          onClick={() => trackSignUpClick(pathname.replace('/', '') || 'home', 'navbar')}
          className="hidden md:block px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition hover:opacity-90"
          style={{ background: 'var(--color-chip)', color: 'var(--color-chip-ink)', textDecoration: 'none' }}
        >
          Sign up
        </a>
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full"
          style={{ border: '1px solid var(--color-line)', color: 'var(--color-ink)' }}
          aria-label="Open menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 z-50 md:hidden" style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-line)' }}>
          <div className="px-4 py-5 flex flex-col gap-4 text-[15px]" style={{ color: 'var(--color-ink-soft)' }}>
            <Link href="/#how-it-works" onClick={() => setMobileOpen(false)} className="hover:opacity-80" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>How it works</Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="hover:opacity-80" style={navColor('/pricing')}>Pricing</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:opacity-80" style={navColor('/about')}>About</Link>
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="hover:opacity-80" style={navColor('/faq')}>FAQ</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="hover:opacity-80" style={pathname.startsWith('/blog') ? { color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'none' } : { color: 'inherit', textDecoration: 'none' }}>Blog</Link>
            <a
              href={SIGNUP_URL}
              onClick={() => trackSignUpClick(pathname.replace('/', '') || 'home', 'mobile_menu')}
              className="px-5 py-3 rounded-full text-[13.5px] font-semibold mt-1"
              style={{ background: 'var(--color-chip)', color: 'var(--color-chip-ink)', textDecoration: 'none', display: 'inline-block' }}
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
