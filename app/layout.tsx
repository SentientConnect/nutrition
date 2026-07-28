import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nutrition-vert-eight.vercel.app'),

  applicationName: 'Sentient Nutrition®',

  title: {
    default: 'Sentient Nutrition® | Food as Recovery Infrastructure',
    template: '%s | Sentient Nutrition®',
  },

  description:
    'Launching January 2027, Sentient Nutrition® is building a nonprofit recovery-support ecosystem connecting nutritious meals, cooking education, ingredient access, logistics, employment pathways, and continued support after treatment.',

  keywords: [
    'Sentient Nutrition',
    'Sentient Connect',
    'recovery nutrition',
    'nutrition after treatment',
    'detox facility nutrition',
    'rehabilitation nutrition',
    'sober living meal support',
    'recovery meal plans',
    'cooking classes for recovery',
    'post-discharge support',
    'recovery workforce development',
    'culinary employment pathways',
    'recovery meal delivery',
    'nonprofit nutrition program',
  ],

  authors: [
    {
      name: 'Sentient Nutrition®',
    },
  ],

  creator: 'Sentient Nutrition®',
  publisher: 'Sentient Connect®',
  category: 'Recovery Support and Nutrition',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Sentient Nutrition®',
    title: 'Sentient Nutrition® | Food Can Become a Path Forward',
    description:
      'A nonprofit recovery-support ecosystem connecting meals, education, cooking classes, ingredient access, logistics, employment pathways, and continued support after treatment.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sentient Nutrition® | Food Can Become a Path Forward',
    description:
      'Launching January 2027, Sentient Nutrition® is building recovery infrastructure around food, education, practical skills, employment, and continuity after treatment.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

  other: {
    'organization-launch': 'January 2027',
    'powered-by': 'Sentient Connect®',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
  themeColor: '#171914',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
