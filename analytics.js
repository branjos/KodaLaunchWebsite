function trackWaitlistClick(page, location) {
  if (typeof gtag === 'function') {
    gtag('event', 'waitlist_click', { page: page, location: location });
  }
}

function trackSignInClick(page, location) {
  if (typeof gtag === 'function') {
    gtag('event', 'sign_in_click', { page: page, location: location });
  }
}
