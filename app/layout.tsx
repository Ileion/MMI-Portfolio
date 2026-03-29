import type { Metadata } from 'next'
import { Providers } from './providers'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md Minhazul Islam | Portfolio',
  description: 'Portfolio of Md Minhazul Islam - Computer Science student specializing in full-stack development',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%236366f1;stop-opacity:1" /><stop offset="50%" style="stop-color:%238b5cf6;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ec4899;stop-opacity:1" /></linearGradient></defs><circle cx="32" cy="32" r="32" fill="url(%23logoGradient)" opacity="0.9"/><circle cx="32" cy="32" r="28" fill="url(%23logoGradient)" opacity="1"/><text x="32" y="42" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="900" fill="white" text-anchor="middle" letter-spacing="1">MMI</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  )
}
