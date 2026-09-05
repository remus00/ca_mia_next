import Navbar from '@/components/custom/Navbar';
import { getSiteUrl } from '@/lib/site-url';
import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const siteUrl = getSiteUrl();
const siteOrigin = new URL(siteUrl);

const titleDefault = "RSA Ca' Mia – Residenza Sanitaria Assistenziale a Pocapaglia (Cuneo)";
const openGraphTitle =
  "RSA Ca' Mia – Residenza sanitaria assistenziale a Pocapaglia (CN) | Bra e Alba";
const description =
  "RSA Ca' Mia a Pocapaglia (CN): residenza sanitaria assistenziale vicino a Bra e Alba. Informazioni sulla struttura, orari visite, come raggiungerci e contatti.";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: {
    template: "%s | RSA Ca' Mia",
    default: titleDefault,
  },
  description,
  authors: [{ name: "R.S.A. Ca' Mia", url: siteUrl }],
  creator: "R.S.A. Ca' Mia",
  publisher: "R.S.A. Ca' Mia",
  keywords: [
    "RSA Ca' Mia",
    'Residenza Sanitaria Assistenziale Ca Mia',
    'RSA Pocapaglia',
    'residenza sanitaria assistenziale',
    'RSA Cuneo',
    'RSA Bra',
    'RSA Alba',
    'casa di riposo Pocapaglia',
    'struttura assistenziale anziani Piemonte',
    'casa di riposo',
  ],
  category: 'health',
  alternates: {
    canonical: siteUrl,
    languages: {
      'it-IT': siteUrl,
    },
  },
  verification: {
    google: 'GxvgaQcyH-0xduey8bBWWREIRa7KTA2HIrTn7MmvW-A',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: openGraphTitle,
    description,
    url: siteUrl,
    siteName: "RSA Ca' Mia – Residenza Sanitaria Assistenziale",
    images: [
      {
        url: '/bg-img.jpg',
        width: 1002,
        height: 1600,
        alt: "RSA Ca' Mia – Residenza Sanitaria Assistenziale a Pocapaglia",
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: openGraphTitle,
    description,
    images: [`${siteUrl}/bg-img.jpg`],
  },
  appleWebApp: {
    capable: true,
    title: "RSA Ca' Mia",
    statusBarStyle: 'default',
  },
};

const nursingHomeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NursingHome',
  '@id': `${siteUrl}/#organization`,
  name: "R.S.A. Ca' Mia",
  alternateName: ["RSA Ca' Mia", 'Residenza Sanitaria Assistenziale Ca Mia', 'Ca Mia'],
  description,
  url: siteUrl,
  telephone: '+390172473225',
  email: 'ca.mia.pocapagllia@outlook.it',
  image: `${siteUrl}/bg-img.jpg`,
  logo: `${siteUrl}/logo.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via San G. B. Cottolengo, 8',
    addressLocality: 'Pocapaglia',
    addressRegion: 'CN',
    postalCode: '12060',
    addressCountry: 'IT',
  },
  areaServed: [
    { '@type': 'City', name: 'Pocapaglia' },
    { '@type': 'City', name: 'Bra' },
    { '@type': 'City', name: 'Alba' },
    { '@type': 'AdministrativeArea', name: 'Provincia di Cuneo' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${roboto.className} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(nursingHomeJsonLd),
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
