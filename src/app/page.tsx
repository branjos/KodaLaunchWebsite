import type { Metadata } from 'next'
import { SignUpButton } from '@/components/SignUpButton'

export const metadata: Metadata = {
  title: 'Koda Launch AI — The AI golf coach for your Garmin R10',
  description: 'Koda Launch AI is a desktop coach for your Garmin R10. Fourteen metrics, every shot, folded into one 0–100 score — plus a Coach Hub when you want to dig in.',
  alternates: { canonical: 'https://kodalaunch.com/' },
  openGraph: { title: 'Koda Launch AI — The AI golf coach for your Garmin R10', url: 'https://kodalaunch.com/' },
  twitter: { title: 'Koda Launch AI — The AI golf coach for your Garmin R10' },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Koda Launch AI',
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Windows, macOS',
    description: 'AI golf coaching for Garmin R10 users. Fourteen metrics, every shot, folded into one 0–100 score — plus a Coach Hub when you want to dig in.',
    url: 'https://kodalaunch.com',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="px-4 md:px-12 pt-10 md:pt-16 pb-16 md:pb-24 relative" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="col-span-1 md:col-span-5">
            <h1 className="font-display leading-[0.95] mb-6 md:mb-8 text-[52px] sm:text-[64px] md:text-[80px] lg:text-[96px]" style={{ color: 'var(--color-ink)' }}>
              Practice with<br/>
              <em style={{ color: 'var(--color-accent)' }}>purpose.</em>
            </h1>
            <p className="text-[15px] md:text-[17px] leading-[1.55] mb-6 md:mb-8" style={{ color: 'var(--color-ink-soft)' }}>
              Meet Koda — a desktop coach for your Garmin R10. Koda makes sense of the data, every session, every shot, analyzed and used to help improve your golf game.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
              <SignUpButton
                page="home"
                location="hero"
                className="px-6 py-3.5 rounded-full font-semibold text-[14px]"
                style={{ background: 'var(--color-chip)', color: 'var(--color-chip-ink)', textDecoration: 'none', display: 'inline-block' }}
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-7">
            <div className="relative" style={{ boxShadow: 'var(--shadow-console)', borderRadius: '16px', overflow: 'hidden', width: '90%', margin: '0 auto' }}>
              <img src="/app-light.png" alt="Koda Launch AI app — light mode" width={1237} height={984} className="theme-img-light w-full block" style={{ borderRadius: '16px' }} />
              <img src="/app-dark.png" alt="Koda Launch AI app — dark mode" width={1236} height={983} className="theme-img-dark w-full block" style={{ borderRadius: '16px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="py-5 md:py-6 overflow-hidden" style={{ borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)', background: 'var(--color-bg)' }}>
        <div className="flex gap-8 md:gap-16 font-display text-[22px] md:text-[36px] whitespace-nowrap" style={{ color: 'var(--color-ink-soft)' }}>
          {['Carry','Smash','Spin','Launch Angle','Face','Path','Strike Quality','Total Score','Carry','Smash','Spin','Launch Angle','Face','Path','Strike Quality'].map((label, i) => (
            <span key={i} className="flex items-center gap-8 md:gap-16">
              <span style={{ fontStyle: i % 2 === 1 ? 'italic' : 'normal', color: i % 2 === 1 ? 'var(--color-accent)' : 'var(--color-ink-soft)' }}>{label}</span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }}></span>
            </span>
          ))}
        </div>
      </section>

      {/* COACHING LOOP */}
      <section id="how-it-works" className="px-4 md:px-12 py-16 md:py-32" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-10 md:mb-16 gap-6">
            <div>
              <div className="font-mono text-[11px] tracking-[0.25em] mb-3" style={{ color: 'var(--color-accent)' }}>THE COACHING LOOP</div>
              <h2 className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05]" style={{ color: 'var(--color-ink)' }}>
                Four steps from <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>raw data</em><br/>to lower scores.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
              Most launch monitors hand you data and walk away. Koda turns them into a coaching conversation you can actually use.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--color-line)' }}>
            {[
              { n: '01', title: 'Connect', body: 'Sync your Garmin R10. Pair in 30 seconds — no extra hardware, no fiddling.' },
              { n: '02', title: 'Hit', body: 'Take your normal swing. Koda streams metrics from the R10 and scores every shot out of 100.' },
              { n: '03', title: 'Ask', body: 'Open the Coach Hub between sets. Ask anything about your session and get real coaching back.' },
              { n: '04', title: 'Improve', body: 'Koda detects trends across your sessions — spotting recurring patterns and gives you actionable advice to correct what\'s holding you back.' },
            ].map((step) => (
              <div key={step.n} className="p-6 md:p-8" style={{ background: 'var(--color-bg)' }}>
                <div className="font-mono text-[11px] mb-8" style={{ color: 'var(--color-accent)' }}>{step.n}</div>
                <div className="font-display text-[32px] mb-3" style={{ color: 'var(--color-ink)' }}>{step.title}</div>
                <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES: SPREAD 1 — Shot Scoring */}
      <section className="px-4 md:px-12 pt-16 md:pt-32 pb-8 md:pb-16" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-1 md:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-4" style={{ color: 'var(--color-accent)' }}>01 · Shot Scoring</div>
            <h3 className="font-display text-[36px] md:text-[52px] leading-[1.05] mb-5" style={{ color: 'var(--color-ink)' }}>Every swing, scored out of 100.</h3>
            <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>Face Control, Path Control, and Strike Quality fold into a single total score the moment your R10 finishes reading the shot. A number you can actually read between swings.</p>
          </div>
          <div className="col-span-1 md:col-span-7 flex items-center justify-center">
            <div className="w-full">
              <div className="text-center mb-8">
                <div className="font-mono text-[10px] tracking-[0.2em] mb-3" style={{ color: 'var(--color-ink-soft)' }}>TOTAL SCORE</div>
                <div className="font-display text-[72px] md:text-[96px] leading-none" style={{ color: 'var(--color-ink)' }}>68</div>
                <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-line)' }}>
                  <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: 'var(--color-ink)' }}>PLAYABLE</span>
                </div>
              </div>
              <div style={{ height: '1px', background: 'var(--color-line)', marginBottom: '28px' }}></div>
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {[{ label: 'FACE CONTROL', value: 70 }, { label: 'PATH CONTROL', value: 85 }, { label: 'STRIKE QUALITY', value: 45 }].map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] mb-3" style={{ color: 'var(--color-ink-soft)' }}>{m.label}</div>
                    <div className="font-display text-[36px] md:text-[48px] leading-none mb-3" style={{ color: 'var(--color-ink)' }}>{m.value}</div>
                    <div style={{ height: '3px', borderRadius: '2px', background: 'var(--color-line)' }}>
                      <div style={{ width: `${m.value}%`, height: '100%', borderRadius: '2px', background: 'var(--color-accent)' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES: SPREAD 2 — Coach Hub */}
      <section className="px-4 md:px-12 py-8 md:py-16" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-1 md:col-span-5 order-1 md:order-2">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-4" style={{ color: 'var(--color-accent)' }}>02 · Coach Hub</div>
            <h3 className="font-display text-[36px] md:text-[52px] leading-[1.05] mb-5" style={{ color: 'var(--color-ink)' }}>Ask Koda anything about your session.</h3>
            <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>After a session, open the Coach Hub and have a real conversation about your data. Drill suggestions, swing-thought breakdowns, contact-quality reads — written by an AI that has every shot you've hit in context.</p>
          </div>
          <div className="col-span-1 md:col-span-7 order-2 md:order-1">
            <div className="relative" style={{ boxShadow: 'var(--shadow-app)', borderRadius: '16px', overflow: 'hidden', width: '90%', margin: '0 auto' }}>
              <img src="/coach-light.png" alt="Koda Coach Hub — light mode" width={1236} height={983} loading="lazy" className="theme-img-light w-full block" style={{ borderRadius: '16px' }} />
              <img src="/coach-dark.png" alt="Koda Coach Hub — dark mode" width={1241} height={984} loading="lazy" className="theme-img-dark w-full block" style={{ borderRadius: '16px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES: SPREAD 3 — Session Trends */}
      <section className="px-4 md:px-12 pt-8 md:pt-16 pb-16 md:pb-32" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-1 md:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-4" style={{ color: 'var(--color-accent)' }}>03 · Session Trends</div>
            <h3 className="font-display text-[36px] md:text-[52px] leading-[1.05] mb-5" style={{ color: 'var(--color-ink)' }}>The number on the wall, getting better.</h3>
            <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>Every session ends with an average score, a best shot, and a clear focus for next time. Strike quality climbing means you're improving — it's the simplest improvement signal in golf.</p>
          </div>
          <div className="col-span-1 md:col-span-7">
            <div className="relative" style={{ boxShadow: 'var(--shadow-app)', borderRadius: '16px', overflow: 'hidden', width: '90%', margin: '0 auto' }}>
              <img src="/session-light.png" alt="Koda Session Trends — light mode" width={1220} height={984} loading="lazy" className="theme-img-light w-full block" style={{ borderRadius: '16px' }} />
              <img src="/session-dark.png" alt="Koda Session Trends — dark mode" width={1222} height={981} loading="lazy" className="theme-img-dark w-full block" style={{ borderRadius: '16px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE SECTION */}
      <section className="px-4 md:px-12 py-16 md:py-32" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-1 md:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-3" style={{ color: 'var(--color-accent)' }}>HARDWARE</div>
            <h2 className="font-display text-[44px] sm:text-[56px] md:text-[72px] leading-[1.05] mb-6" style={{ color: 'var(--color-ink)' }}>
              Built around the<br/><em style={{ color: 'var(--color-accent)' }}>Garmin R10</em>.
            </h2>
            <p className="text-[16px] leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--color-ink-soft)' }}>
              Koda was designed shot-by-shot against the R10's data stream. Every metric is tuned to its tolerances, every coaching response is calibrated against thousands of real R10 sessions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md text-[13px]">
              {[
                { name: 'Garmin R10', status: 'Day-one', accent: true },
                { name: 'Garmin R50', status: 'On the roadmap', accent: false },
                { name: 'SkyTrak+', status: 'Considering', accent: false },
                { name: 'FlightScope Mevo+', status: 'Considering', accent: false },
              ].map((d) => (
                <div key={d.name} className="flex justify-between px-4 py-3 rounded-lg" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-line)' }}>
                  <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{d.name}</span>
                  <span style={{ color: d.accent ? 'var(--color-accent)' : 'var(--color-ink-soft)' }}>{d.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-5">
            <div className="rounded-2xl p-10 text-center" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-line)' }}>
              <div className="mx-auto mb-6" style={{ width: '220px', height: '160px', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: '#0a0a0a', borderRadius: '20px', border: '1px solid var(--color-line)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)' }}></div>
                <div style={{ position: 'absolute', left: '24px', top: '24px', width: '60px', height: '60px', borderRadius: '8px', background: '#1a1a1a', border: '1px solid #2a2a2a' }}></div>
                <div style={{ position: 'absolute', right: '24px', top: '24px', width: '80px', height: '30px', borderRadius: '6px', background: '#1a1a1a' }}>
                  <div className="text-center pt-1.5 font-mono text-[10px]" style={{ color: 'var(--color-accent)' }}>R10</div>
                </div>
                <div style={{ position: 'absolute', left: '24px', bottom: '24px', right: '24px', height: '50px', borderRadius: '8px', background: 'radial-gradient(ellipse at center, #2a2a2a, #0a0a0a)' }}></div>
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] mb-2" style={{ color: 'var(--color-accent)' }}>OPTIMIZED FOR</div>
              <div className="font-display text-[28px] md:text-[34px]" style={{ color: 'var(--color-ink)' }}>Garmin Approach R10</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BLOCK */}
      <div className="px-4 md:px-12 py-16 md:py-32" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <blockquote>
            <p className="font-display text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] leading-[1.1] mb-6 md:mb-8" style={{ color: 'var(--color-ink)' }}>
              "Most launch monitors give you data. Koda gives you insights."
            </p>
            <footer className="flex items-center gap-3 text-[13px]" style={{ color: 'var(--color-ink-soft)' }}>
              <span className="font-mono">—</span>
              <cite>The Koda team</cite>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="px-4 md:px-12 py-20 md:py-40 text-center relative overflow-hidden" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="font-display text-[48px] sm:text-[60px] md:text-[80px] lg:text-[96px] leading-[0.95] mb-6 md:mb-8" style={{ color: 'var(--color-ink)' }}>
            Hit your next ball <em style={{ color: 'var(--color-accent)' }}>with a coach.</em>
          </h2>
          <div className="flex justify-center gap-3">
            <SignUpButton
              page="home"
              location="cta"
              className="px-8 py-4 rounded-full font-semibold text-[15px]"
              style={{ background: 'var(--color-chip)', color: 'var(--color-chip-ink)', textDecoration: 'none', display: 'inline-block' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
