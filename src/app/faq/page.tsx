import type { Metadata } from 'next'
import { FaqGroup } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Koda Launch AI — the desktop coaching app for Garmin R10 users.',
  alternates: { canonical: 'https://kodalaunch.com/faq' },
  openGraph: { title: 'FAQ — Koda Launch AI', url: 'https://kodalaunch.com/faq' },
  twitter: { title: 'FAQ — Koda Launch AI' },
}

export default function FaqPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="px-4 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] mb-5" style={{ color: 'var(--color-accent)' }}>FAQ</div>
          <h1 className="font-display text-[52px] sm:text-[64px] md:text-[80px] leading-[0.95] mb-5" style={{ color: 'var(--color-ink)' }}>
            Common <em style={{ color: 'var(--color-accent)' }}>questions.</em>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed max-w-xl" style={{ color: 'var(--color-ink-soft)' }}>
            Everything you need to know before your first session with Koda.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="px-4 md:px-12 pb-24 md:pb-40" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-3xl mx-auto">

          <div className="mb-12 md:mb-16">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-6 pb-4" style={{ color: 'var(--color-accent)', borderBottom: '1px solid var(--color-line)' }}>GETTING STARTED</div>
            <FaqGroup items={[
              {
                question: 'What is Koda Launch AI?',
                answer: 'Koda Launch AI is a desktop coaching app for Garmin R10 users. It turns your launch monitor data into coaching feedback, shot scoring, session trends, and AI-powered practice insights — so your practice sessions actually move the needle.',
              },
              {
                question: 'Does Koda replace GSPro, E6, or Awesome Golf?',
                answer: 'No. Koda is a coaching layer for your practice sessions — not simulator software. If you use a simulator app alongside your R10, Koda sits next to it, not in place of it. They solve different problems.',
              },
              {
                question: 'What launch monitors are supported?',
                answer: 'Koda currently supports the Garmin Approach R10. Support for additional launch monitors may be added in the future based on demand.',
              },
              {
                question: 'Does Koda work indoors and outdoors?',
                answer: 'Yes. Koda works anywhere your Garmin R10 works reliably — indoors at your simulator setup or outdoors on the range.',
              },
              {
                question: 'What operating systems are supported?',
                answer: 'Koda Launch AI currently supports Windows. Mac support is on the roadmap.',
              },
            ]} />
          </div>

          <div className="mb-12 md:mb-16">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-6 pb-4" style={{ color: 'var(--color-accent)', borderBottom: '1px solid var(--color-line)' }}>COACHING & AI</div>
            <FaqGroup items={[
              {
                question: 'What does Koda actually analyze?',
                answer: 'Koda analyzes the launch monitor metrics your R10 captures — face angle, club path, club speed, launch direction, launch angle, and ball spin. These are then run through a physics engine to calculate carry and total distances, along with other derived metrics such as smash factor. These are combined into shot scores, coaching feedback, and session trends.',
              },
              {
                question: 'How does the shot score work?',
                answer: 'Every shot is scored from 0–100 based on face control, path control, and strike quality. The goal is a fast, readable signal between swings — without having to interpret 14 raw numbers each time you step up to the ball.',
              },
              {
                question: 'Can beginners use Koda?',
                answer: 'Yes. Koda is designed to simplify launch monitor data, not add more complexity. You don\'t need to understand every metric to get useful coaching feedback — that\'s the whole point.',
              },
              {
                question: 'Is Koda giving real swing coaching?',
                answer: 'Koda provides coaching insights based on your launch monitor data and session patterns. It\'s designed to help you understand your tendencies, misses, and practice priorities — not replace an in-person instructor. Think of it as a very attentive practice partner that never forgets a shot.',
              },
              {
                question: 'Does Koda remember previous sessions?',
                answer: 'Yes. Sessions are stored in the cloud and Koda tracks trends across them, so you can monitor improvement over time and spot recurring patterns in your swing.',
              },
              {
                question: 'Why build Koda specifically for the Garmin R10?',
                answer: 'Most golf software treats launch monitors generically. Koda was designed specifically around the R10\'s data patterns, tolerances, and practice workflows — so the coaching feels tailored rather than retrofitted. The R10 is also the most accessible launch monitor for serious amateur golfers, which is exactly the audience Koda is built for.',
              },
            ]} />
          </div>

          <div className="mb-12 md:mb-16">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-6 pb-4" style={{ color: 'var(--color-accent)', borderBottom: '1px solid var(--color-line)' }}>PRIVACY & DATA</div>
            <FaqGroup items={[
              {
                question: 'Is my golf data private?',
                answer: 'Yes. Your session data and Coach Hub conversations are stored securely in the cloud and belong to you. We don\'t share your data with third parties or use it to train AI models.',
              },
              {
                question: 'Does Koda require an internet connection?',
                answer: 'Yes. Koda requires an active internet connection for shot scoring, session storage, and Coach Hub access.',
              },
            ]} />
          </div>

          <div className="mb-12 md:mb-16">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-6 pb-4" style={{ color: 'var(--color-accent)', borderBottom: '1px solid var(--color-line)' }}>PRICING & BETA</div>
            <FaqGroup items={[
              {
                question: 'Is Koda free?',
                answer: (<>Koda has some free features available. See the <a href="/pricing" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>pricing page</a> for full details. During the beta period, more features may be free.</>),
              },
            ]} />
          </div>

          <div className="mb-12 md:mb-16">
            <div className="font-mono text-[11px] tracking-[0.25em] mb-6 pb-4" style={{ color: 'var(--color-accent)', borderBottom: '1px solid var(--color-line)' }}>WHAT TO EXPECT</div>
            <FaqGroup items={[
              {
                question: 'Can Koda fix my swing?',
                answer: 'Koda helps you understand your tendencies and practice more intentionally. Improvement still depends on repetition and good habits — Koda gives you clearer signals to practice against, not a shortcut around the work.',
              },
              {
                question: 'Is Koda for serious golfers or casual golfers?',
                answer: 'Both. Koda is built for any golfer using a launch monitor who wants more useful feedback from their practice sessions — whether you\'re shooting in the 70s or still working on breaking 100.',
              },
            ]} />
          </div>

          <div className="pt-4 text-[14px]" style={{ color: 'var(--color-ink-soft)' }}>
            Still have a question? <a href="mailto:hello@kodalaunch.ai" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>Reach out to us.</a>
          </div>
        </div>
      </section>
    </>
  )
}
