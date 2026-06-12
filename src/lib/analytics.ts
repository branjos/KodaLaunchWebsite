function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag(...args)
  }
}

export function grantConsent() {
  gtag('consent', 'update', { analytics_storage: 'granted' })
}

export function denyConsent() {
  gtag('consent', 'update', { analytics_storage: 'denied' })
}

export function trackWaitlistClick(page: string, location: string) {
  gtag('event', 'waitlist_click', { page, location })
}

export function trackSignInClick(page: string, location: string) {
  gtag('event', 'sign_in_click', { page, location })
}

export function trackFaqOpen(question: string) {
  gtag('event', 'faq_open', { question })
}
