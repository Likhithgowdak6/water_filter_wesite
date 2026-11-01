import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShowerFit | 20-Stage Shower Filter for Everyday Personal Care',
  description: 'Bring advanced shower water filtration into your everyday self-care routine with ShowerFit’s 20-stage shower filter. Modern chrome design, tool-free installation for most setups, and free delivery across India.',
  keywords: 'shower filter India, shower water filtration, 20-stage shower filter, bathroom self-care, ShowerFit chrome filter',
  authors: [{ name: 'ShowerFit' }],
  openGraph: {
    title: 'ShowerFit | 20-Stage Shower Filter',
    description: 'Bring advanced shower water filtration into your everyday self-care routine with ShowerFit’s 20-stage shower filter.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'ShowerFit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShowerFit | 20-Stage Shower Filter',
    description: 'Bring advanced shower water filtration into your everyday self-care routine with ShowerFit’s 20-stage shower filter.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
