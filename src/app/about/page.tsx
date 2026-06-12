import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Why we built Koda — a golf coaching tool for Garmin R10 owners who want practice to feel more like coaching and less like decoding spreadsheets.',
  alternates: { canonical: 'https://kodalaunch.com/about' },
  openGraph: { title: 'About — Koda Launch AI', url: 'https://kodalaunch.com/about' },
  twitter: { title: 'About — Koda Launch AI' },
}

const WAITLIST_URL = 'https://accounts.kodalaunch.com/waitlist#/?redirect_url=https%3A%2F%2Fkodalaunch.com'

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="px-4 md:px-12 pt-16 md:pt-24 pb-16 md:pb-24" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-5" style={{ color: 'var(--color-accent)' }}>OUR STORY</div>
          <h1 className="font-display text-[56px] sm:text-[72px] md:text-[96px] leading-[0.92] mb-8" style={{ color: 'var(--color-ink)' }}>
            About<br/><em style={{ color: 'var(--color-accent)' }}>Koda</em>
          </h1>
          <p className="text-[18px] md:text-[21px] leading-relaxed max-w-2xl" style={{ color: 'var(--color-ink-soft)' }}>
            Practice should feel more like coaching and less like decoding spreadsheets.
          </p>
        </div>
      </section>

      {/* WHY KODA EXISTS */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-8" style={{ color: 'var(--color-ink-soft)' }}>WHY KODA EXISTS</div>
          <p className="text-[17px] md:text-[19px] leading-relaxed mb-6" style={{ color: 'var(--color-ink)' }}>
            Most launch monitors hand golfers a wall of numbers and expect them to figure the rest out.
          </p>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>
            You finish a session staring at carry distance, spin, launch angle, face angle, club path — but still don't really know what changed, what improved, or what to work on next.
          </p>
          <p className="text-[16px] md:text-[17px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
            We built Koda because practice should feel more like coaching and less like decoding spreadsheets. Koda turns launch monitor data into feedback that's understandable, actionable, and focused on helping golfers improve over time.
          </p>
        </div>
      </section>

      {/* BUILT FOR GARMIN R10 */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-8" style={{ color: 'var(--color-ink-soft)' }}>BUILT FOR GARMIN R10 GOLFERS</div>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] mb-8" style={{ color: 'var(--color-ink)' }}>
            The R10 opened the door.<br/><em style={{ color: 'var(--color-accent)' }}>Koda walks through it.</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>
            The Garmin R10 opened the door for a huge number of golfers to practice at home. It made launch monitor data accessible. But most software in the space still focuses on simulation, range visuals, or raw metrics — not coaching.
          </p>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-10" style={{ color: 'var(--color-ink-soft)' }}>
            Koda was designed specifically for golfers using the R10 who want more than just numbers on a screen. Instead of overwhelming you with disconnected data points, Koda helps explain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Why shots are missing', 'What trends are appearing', 'What\'s improving', 'What likely needs attention next'].map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-2xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-line)' }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '18px', lineHeight: '1.4' }}>→</span>
                <span className="text-[15px] leading-snug" style={{ color: 'var(--color-ink)' }}>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[15px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
            The goal isn't to replace your coach. The goal is to help every practice session become more intentional.
          </p>
        </div>
      </section>

      {/* A DIFFERENT APPROACH */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-8" style={{ color: 'var(--color-ink-soft)' }}>A DIFFERENT APPROACH</div>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] mb-8" style={{ color: 'var(--color-ink)' }}>
            Good feedback should be<br/><em style={{ color: 'var(--color-accent)' }}>immediate and clear.</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-10" style={{ color: 'var(--color-ink-soft)' }}>
            We believe good feedback should be immediate, understandable, consistent, and useful between swings. That's why Koda scores every shot out of 100 using launch monitor data like:
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {['Face control', 'Club path', 'Strike quality', 'Launch direction', 'Spin consistency'].map((tag) => (
              <span key={tag} className="font-mono text-[12px] px-4 py-2 rounded-full" style={{ background: 'var(--color-subtle)', border: '1px solid var(--color-line)', color: 'var(--color-ink)' }}>{tag}</span>
            ))}
          </div>
          <p className="text-[16px] md:text-[17px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
            Instead of forcing golfers to interpret 14 disconnected metrics after every shot, Koda turns that data into a simple coaching signal you can react to instantly. Because improvement happens faster when feedback is clear.
          </p>
        </div>
      </section>

      {/* COACHING NOT CHARTS */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-8" style={{ color: 'var(--color-ink-soft)' }}>COACHING, NOT JUST CHARTS</div>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] mb-8" style={{ color: 'var(--color-ink)' }}>
            Not just what happened —<br/><em style={{ color: 'var(--color-accent)' }}>why it happened.</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>
            Most golf software tells you what happened. Koda focuses on helping you understand why it happened.
          </p>
          <p className="text-[16px] md:text-[17px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
            Session trends, recurring misses, consistency patterns, and AI-powered coaching conversations are all designed around one idea: helping golfers leave practice sessions with clarity instead of confusion.
          </p>
        </div>
      </section>

      {/* BUILT BY GOLFERS */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-8" style={{ color: 'var(--color-ink-soft)' }}>BUILT BY GOLFERS</div>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] mb-8" style={{ color: 'var(--color-ink)' }}>
            Started from<br/><em style={{ color: 'var(--color-accent)' }}>a simple frustration.</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>
            Hitting hundreds of balls while collecting tons of data — but still not feeling confident about what was actually improving.
          </p>
          <p className="text-[16px] md:text-[17px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
            We wanted launch monitor practice to feel more connected, more understandable, and more useful from shot to shot. So we started building the kind of coaching tool we wished already existed.
          </p>
        </div>
      </section>

      {/* WHY THE NAME KODA */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-8" style={{ color: 'var(--color-ink-soft)' }}>WHY THE NAME KODA?</div>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] mb-8" style={{ color: 'var(--color-ink)' }}>
            Friend.<br/><em style={{ color: 'var(--color-accent)' }}>Ally.</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>
            The name "Koda" comes from a word meaning friend or ally. That idea shaped a lot of how we think about the product.
          </p>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-6" style={{ color: 'var(--color-ink-soft)' }}>
            Koda isn't meant to feel like complicated golf software or an endless wall of launch monitor numbers. It's designed to feel more like a helpful practice companion — something that helps golfers better understand their game, session by session, shot by shot.
          </p>
          <p className="text-[16px] md:text-[17px] leading-relaxed" style={{ color: 'var(--color-ink)' }}>
            The goal has always been simple: make practice feel more guided, approachable, and useful.
          </p>
        </div>
      </section>

      {/* WHERE KODA IS HEADED */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-8" style={{ color: 'var(--color-ink-soft)' }}>WHERE KODA IS HEADED</div>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] mb-8" style={{ color: 'var(--color-ink)' }}>
            Early, and<br/><em style={{ color: 'var(--color-accent)' }}>intentional.</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed mb-8" style={{ color: 'var(--color-ink-soft)' }}>
            Koda is still early, and that's intentional. Right now, the focus is simple:
          </p>
          <div className="space-y-4 mb-10">
            {[
              'Make practice feedback better',
              'Help golfers understand their swing data',
              'Build useful coaching tools for real sessions',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-4" style={{ borderBottom: '1px solid var(--color-line)' }}>
                <span className="font-mono text-[11px] tracking-[0.15em] w-6 shrink-0" style={{ color: 'var(--color-accent)' }}>0{i + 1}</span>
                <span className="text-[16px]" style={{ color: 'var(--color-ink)' }}>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[16px] md:text-[17px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
            The best ideas for Koda will come from golfers using it every day. And we're excited to keep building it alongside the community.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-4 md:px-12 py-20 md:py-32 text-center" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-line)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-6" style={{ color: 'var(--color-accent)' }}>FREE WHILE WE BUILD</div>
          <h2 className="font-display text-[44px] sm:text-[56px] md:text-[72px] leading-[0.95] mb-6" style={{ color: 'var(--color-ink)' }}>
            Built for golfers who want practice to actually<br/><em style={{ color: 'var(--color-accent)' }}>make sense.</em>
          </h2>
          <p className="text-[15px] md:text-[17px] mb-8" style={{ color: 'var(--color-ink-soft)' }}>
            Built iteratively with feedback from everyday golfers, simulator owners, and Garmin R10 users.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WAITLIST_URL} className="px-8 py-4 rounded-full font-semibold text-[15px] transition hover:opacity-90" style={{ background: 'var(--color-chip)', color: 'var(--color-chip-ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              Join the waitlist
            </a>
            <Link href="/pricing" className="px-8 py-4 rounded-full font-semibold text-[15px] transition hover:opacity-80" style={{ border: '1.5px solid var(--color-line)', color: 'var(--color-ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
