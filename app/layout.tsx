import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import { cn } from '../lib/utils'

import { sharedTitle, sharedDescription } from './shared-metadata'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'sans-serif'],
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-dvh font-sans antialiased', fontSans.variable, fontHeading.variable)}>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: `%s — ${sharedTitle}`,
    default: sharedTitle,
  },
  description: sharedDescription,
  openGraph: {
    title: {
      template: `%s — ${sharedTitle}`,
      default: sharedTitle,
    },
    description: sharedDescription,
    images: [
      {
        url: 'image-url',
        width: 1200,
        height: 630,
        alt: 'Description of the image',
      },
    ],
    type: 'website',
    url: '/',
    siteName: sharedTitle,
    locale: 'en_US',
  },
}

export const viewport = {
  themeColor: 'white',
  colorScheme: 'only light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
