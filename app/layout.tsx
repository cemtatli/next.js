import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { sharedMetadata } from "./shared-metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: `%s — ${sharedMetadata.title}`,
    default: sharedMetadata.title,
  },
  description: sharedMetadata.description,
  openGraph: {
    title: {
      template: `%s — ${sharedMetadata.title}`,
      default: sharedMetadata.title,
    },
    description: sharedMetadata.description,
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
    siteName: sharedMetadata.title,
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
