import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'OpenQuantum.id — Platform Komputasi Kuantum Indonesia',
  description:
    'Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia. Segera hadir. Daftar waitlist sekarang.',
  keywords: [
    'komputasi kuantum',
    'quantum computing',
    'enkripsi kuantum',
    'post-quantum cryptography',
    'keamanan data',
    'openquantum',
    'superposisi',
    'entanglement',
    'enkripsi tahan kuantum',
    'simulasi kuantum',
    'Indonesia',
    'quantum computing Indonesia',
    'enkripsi post-kuantum',
    'quantum simulation',
  ],
  authors: [{ name: 'OpenQuantum.id' }],
  creator: 'OpenQuantum.id',
  publisher: 'OpenQuantum.id',
  metadataBase: new URL('https://openquantum.id'),
  alternates: {
    canonical: 'https://openquantum.id',
    languages: {
      'id': 'https://openquantum.id',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://openquantum.id',
    siteName: 'OpenQuantum.id',
    title: 'OpenQuantum.id — Platform Komputasi Kuantum Indonesia',
    description:
      'Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.',
    images: [
      {
        url: 'https://openquantum.id/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpenQuantum.id — Komputasi Kuantum Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenQuantum.id — Platform Komputasi Kuantum Indonesia',
    description:
      'Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.',
    images: ['https://openquantum.id/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#080b14',
  },
};

// JSON-LD: Organization
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpenQuantum.id',
  url: 'https://openquantum.id',
  logo: 'https://openquantum.id/favicon.svg',
  description:
    'Platform komputasi kuantum Indonesia untuk enkripsi tahan kuantum dan simulasi superposisi.',
  sameAs: ['https://x.com/BaraMigSpace'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Indonesian', 'English'],
  },
};

// JSON-LD: WebSite
const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OpenQuantum.id',
  url: 'https://openquantum.id',
  description: 'Platform komputasi kuantum Indonesia',
  inLanguage: 'id',
};

// JSON-LD: EducationalOrganization (non-komersial edukatif)
const educationalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'OpenQuantum.id',
  url: 'https://openquantum.id',
  description: 'Platform edukasi komputasi kuantum Indonesia',
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  knowsLanguage: ['id', 'en'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalJsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
