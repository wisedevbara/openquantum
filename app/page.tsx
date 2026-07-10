'use client';

import dynamic from 'next/dynamic';
import CountdownTimer from '@/components/CountdownTimer';

// Dynamic imports for heavy components (no SSR needed)
const QuantumParticles = dynamic(() => import('@/components/QuantumParticles'), {
  ssr: false,
});

const QuantumGrid = dynamic(() => import('@/components/QuantumGrid'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Background Layers */}
      <QuantumGrid />
      <QuantumParticles />

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center">
          {/* Logo / Brand */}
          <div className="mb-8">
            <span className="font-display text-sm tracking-widest text-cherenkov-bright/80">
              OPENQUANTUM.ID
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-cherenkov-bright via-photon to-cherenkov-bright bg-clip-text text-transparent">
              SEGERA
            </span>
            <br />
            <span className="bg-gradient-to-r from-photon via-cherenkov-bright to-photon bg-clip-text text-transparent">
              HADIR
            </span>
          </h1>

          {/* Measurement Line — signature divider */}
          <div className="mt-8 mb-6 flex items-center gap-3">
            <div className="measurement-line w-16 sm:w-24" />
            <div className="measurement-dot animate-measurement-glow" />
            <div className="measurement-line w-16 sm:w-24" />
          </div>

          {/* Tagline */}
          <p className="font-body mt-2 max-w-2xl text-base leading-relaxed text-cherenkov-bright/80 sm:text-lg md:text-xl">
            Membangun Masa Depan Komputasi Kuantum Indonesia
          </p>

          {/* Subtitle */}
          <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-photon/40 sm:text-lg md:text-xl">
            Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.
          </p>

          {/* Countdown Timer */}
          <div className="mt-12 w-full max-w-3xl">
            <CountdownTimer />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="font-body text-sm text-photon/40">
          © 2026 OpenQuantum.id. Hak cipta dilindungi.
        </p>
        <a
          href="https://x.com/BaraMigSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-photon/40 transition-colors hover:text-cherenkov-bright"
          aria-label="Ikuti kami di X"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-sm">@BaraMigSpace</span>
        </a>
      </footer>
    </>
  );
}
