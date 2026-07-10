'use client';

import dynamic from 'next/dynamic';
import CountdownTimer from '@/components/CountdownTimer';

const QuantumParticles = dynamic(() => import('@/components/QuantumParticles'), {
  ssr: false,
});

const QuantumGrid = dynamic(() => import('@/components/QuantumGrid'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <QuantumGrid />
      <QuantumParticles />

      <main className="relative z-10 flex h-screen flex-col items-center justify-center px-4">
        {/* Brand */}
        <span className="font-display mb-2 text-xs tracking-widest text-cherenkov-bright/80">
          OPENQUANTUM.ID
        </span>

        {/* Title */}
        <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-cherenkov-bright via-photon to-cherenkov-bright bg-clip-text text-transparent">
            SEGERA
          </span>
          <br />
          <span className="bg-gradient-to-r from-photon via-cherenkov-bright to-photon bg-clip-text text-transparent">
            HADIR
          </span>
        </h1>

        {/* Measurement Line */}
        <div className="my-4 flex items-center gap-2">
          <div className="measurement-line w-12 sm:w-20" />
          <div className="measurement-dot animate-measurement-glow" />
          <div className="measurement-line w-12 sm:w-20" />
        </div>

        {/* Tagline + Subtitle */}
        <p className="font-body max-w-xl text-center text-sm text-cherenkov-bright/80 sm:text-base">
          Membangun Masa Depan Komputasi Kuantum Indonesia
        </p>
        <p className="font-body mt-1 max-w-xl text-center text-xs text-photon/40 sm:text-sm">
          Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.
        </p>

        {/* Countdown */}
        <div className="mt-6 w-full max-w-md">
          <CountdownTimer />
        </div>
      </main>

      {/* Footer — inline */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-4 py-3 text-center">
        <span className="font-body text-xs text-photon/30">
          © 2026 OpenQuantum.id
        </span>
        <a
          href="https://x.com/BaraMigSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="text-photon/30 transition-colors hover:text-cherenkov-bright"
          aria-label="Ikuti kami di X"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </footer>
    </>
  );
}
