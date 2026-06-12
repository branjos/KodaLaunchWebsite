import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Koda Launch AI team via email or Discord.',
  alternates: { canonical: 'https://kodalaunch.com/contact' },
  openGraph: { title: 'Contact — Koda Launch AI', url: 'https://kodalaunch.com/contact' },
  twitter: { title: 'Contact — Koda Launch AI' },
}

export default function ContactPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="px-4 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-5" style={{ color: 'var(--color-accent)' }}>CONTACT</div>
          <h1 className="font-display text-[52px] sm:text-[64px] md:text-[80px] leading-[0.95] mb-5" style={{ color: 'var(--color-ink)' }}>
            Get in <em style={{ color: 'var(--color-accent)' }}>touch.</em>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed max-w-xl" style={{ color: 'var(--color-ink-soft)' }}>
            Questions, feedback, or just want to talk golf? We're reachable by email or on Discord.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="px-4 md:px-12 pb-24 md:pb-40" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">

          <a href="mailto:golfkodaai@gmail.com" className="contact-card p-8 flex flex-col gap-5" style={{ textDecoration: 'none' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-line)', color: 'var(--color-accent)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[15px] mb-1" style={{ color: 'var(--color-ink)' }}>Email</div>
              <div className="text-[14px] mb-3" style={{ color: 'var(--color-ink-soft)' }}>For questions, support, or feedback.</div>
              <div className="font-mono text-[13px]" style={{ color: 'var(--color-accent)' }}>golfkodaai@gmail.com</div>
            </div>
          </a>

          <a href="https://discord.gg/wKQHR8Juz5" target="_blank" rel="noopener noreferrer" className="contact-card p-8 flex flex-col gap-5" style={{ textDecoration: 'none' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-line)', color: 'var(--color-accent)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[15px] mb-1" style={{ color: 'var(--color-ink)' }}>Discord</div>
              <div className="text-[14px] mb-3" style={{ color: 'var(--color-ink-soft)' }}>Join the community, chat with the team, and share feedback in real time.</div>
              <div className="font-mono text-[13px]" style={{ color: 'var(--color-accent)' }}>discord.gg/wKQHR8Juz5 ↗</div>
            </div>
          </a>

        </div>
      </section>
    </>
  )
}
