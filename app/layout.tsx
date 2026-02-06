import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.whyem.com'),
  title: {
    default: 'WHYEM | Bester Barber Wien 1180 | Premium Barber Währing',
    template: '%s | WHYEM Barber Wien',
  },
  description:
    'WHYEM – Dein Premium Barber in Wien 1180. Bester Barber Wien Währing mit 17+ Jahren Erfahrung. Meisterhafte Haarschnitte, Fade Cuts, Bartpflege & Styling in der Weimarer Straße 13. Jetzt Termin buchen!',
  keywords: [
    'Barber Wien',
    'Bester Barber Wien',
    'Premium Barber Wien',
    'Barber 1180',
    'Barber Währing',
    'Fade Cut Wien',
    'Bartpflege Wien',
    'Herrenfriseur Währing',
    'WHYEM Barber',
    'Haarschnitt Wien',
    'Männerfriseur Wien',
    'Weimarer Straße 13',
    'Barber Wien 1180',
    'Top Barber Wien',
  ],
  authors: [{ name: 'WHYEM Barber' }],
  creator: 'WHYEM Barber',
  publisher: 'WHYEM Barber',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'WHYEM | Bester Barber Wien 1180 | Premium Barber',
    description:
      'Dein Premium Barber in Wien 1180 – Bester Barber Währing. Meisterhafte Haarschnitte, Fade Cuts & Bartpflege mit 17+ Jahren Erfahrung.',
    url: 'https://www.whyem.com',
    siteName: 'WHYEM Barber',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'WHYEM – Bester Barber Wien 1180',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHYEM | Bester Barber Wien 1180',
    description:
      'Dein Premium Barber in Wien 1180 – Meisterhafte Haarschnitte, Fade Cuts & Bartpflege.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.whyem.com/',
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="geo.region" content="AT-9" />
        <meta name="geo.placename" content="Wien" />
        <meta name="geo.position" content="48.2273048;16.3407945" />
        <meta name="ICBM" content="48.2273048, 16.3407945" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
