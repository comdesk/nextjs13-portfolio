'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  console.log('Providers invoked...')

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}