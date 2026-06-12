export function trackWaitlistClick(page: string, location: string) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'waitlist_click', { page, location })
  }
}

export function trackSignInClick(page: string, location: string) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'sign_in_click', { page, location })
  }
}
