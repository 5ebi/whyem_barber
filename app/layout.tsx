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
  title: 'Whyem Barber | Premium Barbershop Wien 1180',
  description:
    'Whyem Barber – Die Antwort auf das Warum. Premium Barbershop in der Weimarer Straße 13, 1180 Wien. Haarschnitt, Bartpflege & Styling mit 17+ Jahren Erfahrung.',
  keywords:
    'Barber Wien, Friseur 1180, Haarschnitt Wien, Fade Cut, Bartpflege, Whyem Barber',
  openGraph: {
    title: 'Whyem Barber | Premium Barbershop Wien',
    description:
      'Premium Barbershop in Wien 1180 – Check the line, Make your cut, Move your feet.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
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
