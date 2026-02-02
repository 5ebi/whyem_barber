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
  metadataBase: new URL('https://whyem.com'),
  title: {
    default: 'WHYEM Barber | Premium Barbershop Wien 1180 | Weimarer Straße',
    template: '%s | WHYEM Barber Wien 1180',
  },
  description:
    'WHYEM Barber – Die Antwort auf das Warum. Premium Barbershop mit 17+ Jahren Erfahrung in der Weimarer Straße 13, 1180 Wien. Meisterhafte Haarschnitte, Fade Cuts, Bartpflege & Styling. Jetzt Termin buchen!',
  keywords: [
    'Barber Wien',
    'Friseur 1180',
    'Barbershop Wien',
    'Fade Cut Wien',
    'Bartpflege Wien',
    'Herrenfriseur Währing',
    'Bester Barber Wien',
    'Premium Barber Wien',
    'WHYEM Barber',
    'Haarschnitt Wien',
    'Männerfriseur Wien',
    'Weimarer Straße 13',
    'Barbershop Währing',
    'Premium Barbershop Wien',
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
    title: 'WHYEM Barber | Premium Barbershop Wien 1180',
    description:
      'Die Antwort auf das Warum. Premium Barbershop in Wien 1180 – Meisterhafte Haarschnitte, Fade Cuts & Bartpflege mit 17+ Jahren Erfahrung.',
    url: 'https://whyem.com',
    siteName: 'WHYEM Barber',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'WHYEM Barber – Premium Barbershop Wien 1180',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHYEM Barber | Premium Barbershop Wien 1180',
    description:
      'Die Antwort auf das Warum. Premium Barbershop in Wien 1180 – Meisterhafte Haarschnitte, Fade Cuts & Bartpflege.',
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
    canonical: 'https://whyem.at',
  },
  verification: {
    // Google Search Console wird später hinzugefügt
    // google: 'deine-google-verification-code',
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
