import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'OpenQuantum.id — Membangun Masa Depan Komputasi Kuantum Indonesia',
  description:
    'Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia. Komputasi kuantum, keamanan masa depan, dan enkripsi post-kuantum.',
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
  ],
  authors: [{ name: 'OpenQuantum.id' }],
  creator: 'OpenQuantum.id',
  publisher: 'OpenQuantum.id',
  metadataBase: new URL('https://openquantum.id'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://openquantum.id',
    siteName: 'OpenQuantum.id',
    title: 'OpenQuantum.id — Membangun Masa Depan Komputasi Kuantum Indonesia',
    description:
      'Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenQuantum.id — Membangun Masa Depan Komputasi Kuantum Indonesia',
    description:
      'Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpenQuantum.id',
  url: 'https://openquantum.id',
  description:
    'Platform komputasi kuantum Indonesia untuk enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.',
  sameAs: [],
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'OpenQuantum.id Platform',
  description:
    'Platform komputasi kuantum Indonesia untuk enkripsi post-quantum dan simulasi superposisi.',
  brand: {
    '@type': 'Brand',
    name: 'OpenQuantum.id',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    priceCurrency: 'IDR',
    price: '0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
