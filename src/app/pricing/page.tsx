import type { Metadata } from 'next'
import Link from 'next/link'
import { SignUpButton } from '@/components/SignUpButton'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for Koda Launch AI. Start free, upgrade when you\'re ready.',
  alternates: { canonical: 'https://kodalaunch.com/pricing' },
  openGraph: { title: 'Pricing — Koda Launch AI', url: 'https://kodalaunch.com/pricing' },
  twitter: { title: 'Pricing — Koda Launch AI' },
}

const tableRows = [
  { group: 'RANGE & SHOT DATA', rows: [
    { feature: 'Launch monitor metrics', free: true, insights: true, coach: true },
    { feature: 'Basic shot scoring', free: true, insights: true, coach: true },
    { feature: 'In-session shot history', free: true, insights: true, coach: true },
    { feature: 'Cloud session storage + history', free: false, insights: true, coach: true },
  ]},
  { group: 'INSIGHTS & ANALYSIS', rows: [
    { feature: 'Enhanced score breakdown', free: false, insights: true, coach: true },
    { feature: 'Post-session AI summary', free: false, insights: true, coach: true },
    { feature: 'Post-session drill recommendation', free: false, insights: true, coach: true },
    { feature: 'Post-session chat with Koda', free: false, insights: true, coach: true },
    { feature: 'Session trends and focus areas', free: false, insights: true, coach: true },
  ]},
  { group: 'REAL-TIME COACHING', rows: [
    { feature: 'Mid-session coaching', free: false, insights: false, coach: true },
    { feature: 'Mid-session coaching chat with Koda', free: false, insights: false, coach: true },
    { feature: 'Trend tracking and suggestion', free: false, insights: false, coach: true },
    { feature: 'Coach Mode for structured practice', free: false, insights: false, coach: true },
  ]},
]

function Check({ yes }: { yes: boolean }) {
  return yes
    ? <div className="text-center text-[14px]" style={{ color: 'var(--color-accent)' }}>✓</div>
    : <div className="text-center text-[14px]" style={{ color: 'var(--color-ink-soft)' }}>—</div>
}

export default function PricingPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="px-4 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16 text-center" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-5" style={{ color: 'var(--color-accent)' }}>PRICING</div>
          <h1 className="font-display text-[52px] sm:text-[64px] md:text-[80px] leading-[0.95] mb-5" style={{ color: 'var(--color-ink)' }}>
            Start free.<br/><em style={{ color: 'var(--color-accent)' }}>Upgrade when ready.</em>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
            Every plan includes the Garmin R10 integration. No hardware fees, no per-session charges.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-4 md:px-12 pb-20 md:pb-32" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--color-line)', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-app)' }}>

          {/* FREE */}
          <div className="flex flex-col p-8 md:p-10" style={{ background: 'var(--color-bg)' }}>
            <div className="font-mono text-[11px] tracking-[0.25em] mb-2" style={{ color: 'var(--color-ink-soft)' }}>FREE</div>
            <div className="text-[13px] mb-5" style={{ color: 'var(--color-ink-soft)' }}>Track your range session</div>
            <div className="mb-1"><span className="font-display text-[52px] leading-none" style={{ color: 'var(--color-ink)' }}>$0</span></div>
            <div className="font-mono text-[11px] mb-8" style={{ color: 'var(--color-ink-soft)' }}>/ month · forever</div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="font-mono text-[10px] tracking-[0.2em] mb-1" style={{ color: 'var(--color-ink-soft)' }}>INCLUDES</div>
              {['Real-time launch monitor metrics', 'Basic shot scoring', 'In-session shot history'].map((f) => (
                <div key={f} className="flex items-start gap-3 text-[13.5px]" style={{ color: 'var(--color-ink)' }}>
                  <span style={{ color: 'var(--color-accent)', marginTop: '1px', flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
              <div className="flex items-start gap-3 text-[13.5px]" style={{ color: 'var(--color-ink-soft)' }}>
                <span style={{ marginTop: '1px', flexShrink: 0 }}>—</span>No cloud storage · local only
              </div>
            </div>
          </div>

          {/* INSIGHTS */}
          <div className="flex flex-col p-8 md:p-10" style={{ background: 'var(--color-surface)' }}>
            <div className="font-mono text-[11px] tracking-[0.25em] mb-2" style={{ color: 'var(--color-ink-soft)' }}>INSIGHTS</div>
            <div className="text-[13px] mb-5" style={{ color: 'var(--color-ink-soft)' }}>Understand your swing</div>
            <div className="mb-1">
              <span className="font-display text-[52px] leading-none" style={{ color: 'var(--color-ink)' }}>$9</span>
              <span className="font-display text-[28px]" style={{ color: 'var(--color-ink-soft)' }}>.99</span>
            </div>
            <div className="font-mono text-[11px] mb-8" style={{ color: 'var(--color-ink-soft)' }}>/ month</div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="font-mono text-[10px] tracking-[0.2em] mb-1" style={{ color: 'var(--color-ink-soft)' }}>EVERYTHING IN FREE, PLUS</div>
              {['Enhanced score breakdown', 'Cloud session storage + history', 'Post-session analysis from Koda', 'Post-session chat with Koda', 'Session trends and focus areas'].map((f) => (
                <div key={f} className="flex items-start gap-3 text-[13.5px]" style={{ color: 'var(--color-ink)' }}>
                  <span style={{ color: 'var(--color-accent)', marginTop: '1px', flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>

          {/* COACH */}
          <div className="flex flex-col p-8 md:p-10 relative" style={{ background: '#1A3623' }}>
            <div className="absolute top-5 right-5">
              <span className="font-mono text-[10px] tracking-[0.15em] px-3 py-1.5 rounded-full" style={{ background: 'var(--color-accent)', color: '#0D1B13' }}>MOST POPULAR</span>
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>COACH</div>
            <div className="text-[13px] mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>Improve your swing in real time</div>
            <div className="mb-1">
              <span className="font-display text-[52px] leading-none" style={{ color: '#fff' }}>$19</span>
              <span className="font-display text-[28px]" style={{ color: 'rgba(255,255,255,0.6)' }}>.99</span>
            </div>
            <div className="font-mono text-[11px] mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>/ month</div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="font-mono text-[10px] tracking-[0.2em] mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>EVERYTHING IN INSIGHTS, PLUS</div>
              {['Mid-session coaching', 'Mid-session coaching chat with Koda', 'Trend tracking and suggestion', 'Coach Mode for structured practice'].map((f) => (
                <div key={f} className="flex items-start gap-3 text-[13.5px]" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <span style={{ color: 'var(--color-accent)', marginTop: '1px', flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON TABLE */}
      <section className="px-4 md:px-12 pb-20 md:pb-32" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-10 text-center" style={{ color: 'var(--color-ink-soft)' }}>FULL COMPARISON</div>
          <div className="grid grid-cols-4 gap-0 mb-0">
            <div className="py-3 text-[13px] font-semibold" style={{ color: 'var(--color-ink)' }}>Feature</div>
            <div className="py-3 text-center text-[13px] font-semibold" style={{ color: 'var(--color-ink)' }}>Free</div>
            <div className="py-3 text-center text-[13px] font-semibold" style={{ color: 'var(--color-ink)' }}>Insights</div>
            <div className="py-3 text-center text-[13px] font-semibold" style={{ color: 'var(--color-accent)' }}>Coach</div>
          </div>
          <div style={{ border: '1px solid var(--color-line)', borderRadius: '16px', overflow: 'hidden' }}>
            {tableRows.map((group, gi) => (
              <div key={gi}>
                <div className="grid grid-cols-4 gap-0 px-5 py-2" style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-line)', borderTop: gi > 0 ? '1px solid var(--color-line)' : undefined }}>
                  <div className="col-span-4 font-mono text-[10px] tracking-[0.2em]" style={{ color: 'var(--color-ink-soft)' }}>{group.group}</div>
                </div>
                {group.rows.map((row, ri) => (
                  <div key={ri} className="grid grid-cols-4 gap-0 px-5 py-4" style={{ borderBottom: gi === tableRows.length - 1 && ri === group.rows.length - 1 ? 'none' : '1px solid var(--color-line)' }}>
                    <div className="text-[13.5px]" style={{ color: 'var(--color-ink)' }}>{row.feature}</div>
                    <Check yes={row.free} />
                    <Check yes={row.insights} />
                    <Check yes={row.coach} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-4 md:px-12 py-20 md:py-32 text-center" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-6" style={{ color: 'var(--color-accent)' }}>FREE WHILE WE BUILD</div>
          <h2 className="font-display text-[44px] sm:text-[56px] md:text-[72px] leading-[0.95] mb-6" style={{ color: 'var(--color-ink)' }}>
            Questions about <em style={{ color: 'var(--color-accent)' }}>pricing?</em>
          </h2>
          <p className="text-[15px] md:text-[17px] mb-8" style={{ color: 'var(--color-ink-soft)' }}>
            Start on the free plan — no card required. Upgrade or downgrade anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <SignUpButton page="pricing" location="cta" className="px-8 py-4 rounded-full font-semibold text-[15px] transition hover:opacity-90" style={{ background: 'var(--color-chip)', color: 'var(--color-chip-ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} />
            <Link href="/faq" className="px-8 py-4 rounded-full font-semibold text-[15px] transition hover:opacity-80" style={{ border: '1.5px solid var(--color-line)', color: 'var(--color-ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
