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
  title: 'OpenQuantum - Segera Hadir | Era Komputasi Kuantum',
  description:
    'OpenQuantum hadir untuk membawa enkripsi tahan kuantum dan pemrosesan data superposisi ke dalam genggaman Anda. Komputasi kuantum, keamanan masa depan, dan enkripsi post-kuantum.',
  keywords: [
    'quantum computing',
    'komputasi kuantum',
    'enkripsi kuantum',
    'post-quantum cryptography',
    'keamanan data',
    'openquantum',
    'superposisi',
    'entanglement',
  ],
  authors: [{ name: 'OpenQuantum' }],
  creator: 'OpenQuantum',
  publisher: 'OpenQuantum',
  metadataBase: new URL('https://openquantum.id'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://openquantum.id',
    siteName: 'OpenQuantum',
    title: 'OpenQuantum - Segera Hadir | Era Komputasi Kuantum',
    description:
      'Mengguncang batas komputasi klasik. Enkripsi tahan kuantum dan pemrosesan data superposisi.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenQuantum - Segera Hadir | Era Komputasi Kuantum',
    description:
      'Mengguncang batas komputasi klasik. Enkripsi tahan kuantum dan pemrosesan data superposisi.',
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
  name: 'OpenQuantum',
  url: 'https://openquantum.id',
  description:
    'OpenQuantum hadir untuk membawa enkripsi tahan kuantum dan pemrosesan data superposisi ke dalam genggaman Anda.',
  sameAs: [],
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'OpenQuantum Platform',
  description:
    'Platform komputasi kuantum untuk enkripsi post-quantum dan pemrosesan data superposisi.',
  brand: {
    '@type': 'Brand',
    name: 'OpenQuantum',
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
