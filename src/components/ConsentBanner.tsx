'use client'

import { useEffect, useState } from 'react'
import { grantConsent, denyConsent } from '@/lib/analytics'

export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('koda_consent') === null) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('koda_consent', 'true')
    grantConsent()
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('koda_consent', 'false')
    denyConsent()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
        padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '16px', flexWrap: 'wrap',
        fontFamily: 'Geist, system-ui, sans-serif', fontSize: '13px', lineHeight: '1.5',
        borderTop: '1px solid var(--color-line)',
        background: 'var(--color-paper)',
        color: 'var(--color-ink)',
        boxShadow: '0 -4px 32px rgba(0,0,0,0.18)',
      }}
    >
      <span style={{ flex: 1, minWidth: '200px', opacity: 0.85 }}>
        We use cookies and analytics to understand how visitors use this site.{' '}
        <a href="/privacy" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
          Privacy Policy
        </a>.
      </span>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding: '8px 20px', borderRadius: '999px',
            border: '1px solid var(--color-line)', background: 'transparent',
            color: 'var(--color-ink)', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit',
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding: '8px 20px', borderRadius: '999px', border: 'none',
            background: 'var(--color-chip)', color: 'var(--color-chip-ink)',
            cursor: 'pointer', fontWeight: 600, fontSize: '13px', fontFamily: 'inherit',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
