'use client';

import dynamic from 'next/dynamic';
import CountdownTimer from '@/components/CountdownTimer';
import PillarCard from '@/components/PillarCard';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

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
            <span className="font-orbitron text-sm tracking-widest text-cyan-400/80">
              OPENQUANTUM
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-orbitron text-4xl font-black tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
              SEGERA
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              HADIR
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
            Mengguncang batas komputasi klasik. OpenQuantum hadir untuk membawa enkripsi
            tahan kuantum dan pemrosesan data superposisi ke dalam genggaman Anda. Bersiaplah
            menyaksikan lompatan kuantum berikutnya.
          </p>

          {/* Countdown Timer */}
          <div className="mt-12 w-full max-w-3xl">
            <CountdownTimer />
          </div>
        </section>

        {/* Email Signup Section */}
        <section className="mt-16 w-full">
          <EmailSignup />
        </section>

        {/* 3 Pillars Section */}
        <section className="mt-20 w-full max-w-5xl">
          <h2 className="font-orbitron mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
            Tiga Pilar Kuantum
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PillarCard
              icon="🔮"
              title="Superposisi"
              description="Banyak kemungkinan sekaligus. Dalam dunia kuantum, sebuah qubit bisa berada dalam banyak state secara bersamaan — membuka potensi komputasi yang tak terbatas."
            />
            <PillarCard
              icon="🔗"
              title="Entanglement"
              description="Koneksi instan tanpa jarak. Dua qubit yang terentangle bisa saling mempengaruhi secara instan, di mana pun mereka berada — dasar komunikasi kuantum."
            />
            <PillarCard
              icon="💎"
              title="Dekohorensi"
              description="Menuju stabilitas absolut. Kami menaklukkan dekohorensi untuk memastikan sistem kuantum tetap stabil dan reliabel dalam produksi."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Cookie Consent */}
      <CookieConsent />
    </>
  );
}
