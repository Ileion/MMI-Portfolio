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
    // use the public logo.svg as the favicon instead of embedding a long data URI
    icon: '/logo.svg',
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
