import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You're on the list — Koda Launch AI",
  description: "You've joined the Koda Launch AI waitlist. We'll notify you as soon as your spot in the closed beta opens up.",
  robots: { index: false, follow: false },
}

export default function WaitlistConfirmedPage() {
  return (
    <>
      {/* HERO: CONFIRMATION */}
      <section className="px-4 md:px-12 pt-16 md:pt-24 pb-16 md:pb-24" style={{ background: 'var(--color-paper)' }}>
        <div className="max-w-3xl mx-auto text-center">

          {/* Animated check mark */}
          <div className="flex justify-center mb-8">
            <div className="check-ring" style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--color-surface)', border: '1px solid var(--color-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-app)' }}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <polyline className="check-path" points="6,16 13,23 24,9" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="fade-up-1">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-5" style={{ color: 'var(--color-accent)' }}>WAITLIST CONFIRMED</div>
            <h1 className="font-display text-[48px] sm:text-[64px] md:text-[80px] leading-[0.95] mb-6" style={{ color: 'var(--color-ink)' }}>
              {"You're on"} <em style={{ color: 'var(--color-accent)' }}>the list.</em>
            </h1>
          </div>

          <div className="fade-up-2">
            <p className="text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-ink-soft)' }}>
              Thank you for your interest in Koda Launch AI. We've reserved your spot and will reach out as soon as your access is ready.
            </p>
          </div>

          <div className="fade-up-3">
            <Link href="/" className="inline-block py-3.5 rounded-full font-semibold text-[14px] hover:opacity-80 transition" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', border: '1.5px solid var(--color-line)', color: 'var(--color-ink)', textDecoration: 'none' }}>
              Back to home
            </Link>
          </div>

        </div>
      </section>

      <div style={{ height: 1, background: 'var(--color-line)' }} />

      {/* BETA PROGRAM INFO */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-4xl mx-auto">

          <div className="mb-12 md:mb-16">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-4" style={{ color: 'var(--color-accent)' }}>BETA PROGRAM</div>
            <h2 className="font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05]" style={{ color: 'var(--color-ink)' }}>
              What happens <em style={{ color: 'var(--color-accent)' }}>next.</em>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-16" style={{ background: 'var(--color-line)', borderRadius: '16px', overflow: 'hidden' }}>
            {[
              {
                n: '01',
                title: "You're reserved",
                body: "Your spot is secured. We process waitlist entries in the order they're received, so signing up early puts you near the front of the queue.",
              },
              {
                n: '02',
                title: 'We notify you',
                body: "When your access window opens, you'll receive an email with a direct link to complete your account setup. No action is needed until then.",
              },
              {
                n: '03',
                title: 'Start coaching',
                body: 'Follow the link, finish setting up your account, and download Koda. Connect your Garmin R10 and your first session is ready to go.',
              },
            ].map((step) => (
              <div key={step.n} className="p-6 md:p-8" style={{ background: 'var(--color-surface)' }}>
                <div className="font-mono text-[11px] mb-8" style={{ color: 'var(--color-accent)' }}>{step.n}</div>
                <div className="font-display text-[26px] mb-3" style={{ color: 'var(--color-ink)' }}>{step.title}</div>
                <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>{step.body}</p>
              </div>
            ))}
          </div>

          {/* Beta status callout */}
          <div className="rounded-2xl p-8 md:p-10" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-line)' }}>
            <div className="font-mono text-[10px] tracking-[0.25em] mb-4" style={{ color: 'var(--color-accent)' }}>CURRENT STATUS</div>
            <h3 className="font-display text-[28px] md:text-[36px] leading-[1.1] mb-4" style={{ color: 'var(--color-ink)' }}>Koda is in closed beta.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 mb-8">
              <p className="text-[14.5px] leading-[1.65]" style={{ color: 'var(--color-ink-soft)' }}>
                We're currently running a limited closed beta with a small group of Garmin R10 owners. This phase lets us gather focused feedback, tune the coaching model, and ensure the experience is solid before we open wider access.
              </p>
              <p className="text-[14.5px] leading-[1.65] mt-4 md:mt-0" style={{ color: 'var(--color-ink-soft)' }}>
                The beta is opening up on a rolling basis in the coming weeks. Everyone on the waitlist will be invited — we appreciate your patience as we bring Koda to full launch.
              </p>
            </div>
            <div style={{ height: 1, background: 'var(--color-line)', marginBottom: 24 }} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[13px]">
              {[
                { label: 'Beta access', value: 'Rolling' },
                { label: 'Account setup', value: 'By invite only' },
                { label: 'Hardware', value: 'Garmin R10' },
                { label: 'Platform', value: 'Windows · macOS' },
              ].map((item) => (
                <div key={item.label} className="px-4 py-3 rounded-xl" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-line)' }}>
                  <div className="mb-1" style={{ color: 'var(--color-ink-soft)' }}>{item.label}</div>
                  <div className="font-semibold" style={{ color: 'var(--color-ink)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div style={{ height: 1, background: 'var(--color-line)' }} />

      {/* WHILE YOU WAIT */}
      <section className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-paper)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-4" style={{ color: 'var(--color-accent)' }}>IN THE MEANTIME</div>
            <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.05]" style={{ color: 'var(--color-ink)' }}>
              Get familiar with Koda.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                href: '/#how-it-works',
                tag: 'PRODUCT',
                title: 'See how it works',
                body: 'Walk through the four-step coaching loop that powers every session.',
              },
              {
                href: '/faq',
                tag: 'FAQ',
                title: 'Read the FAQ',
                body: 'Answers to the most common questions about Koda, the R10, and beta access.',
              },
              {
                href: '/pricing',
                tag: 'PRICING',
                title: 'Review pricing',
                body: 'Simple, transparent plans. Beta access is free while we\'re in this phase.',
              },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="block p-6 rounded-2xl hover:opacity-80 transition" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-line)', textDecoration: 'none' }}>
                <div className="font-mono text-[10px] tracking-[0.2em] mb-3" style={{ color: 'var(--color-accent)' }}>{card.tag}</div>
                <div className="font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>{card.title}</div>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
