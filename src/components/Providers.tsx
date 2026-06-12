'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" storageKey="koda_theme" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
