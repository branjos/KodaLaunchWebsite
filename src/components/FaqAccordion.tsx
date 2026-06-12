'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: React.ReactNode
}

interface FaqGroupProps {
  items: FaqItem[]
}

export function FaqGroup({ items }: FaqGroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ border: '1px solid var(--color-line)', borderRadius: '16px', overflow: 'hidden' }}>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-ink)' }}
          >
            <span className="text-[15px] font-semibold leading-snug">{item.question}</span>
            <svg
              className={`faq-chevron${openIndex === i ? ' open' : ''}`}
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
          <div className={`faq-answer${openIndex === i ? ' open' : ''}`}>
            <div className="faq-answer-inner">
              <div className="px-6 pb-5 text-[14px] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
