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
              OPENQUANTUM.ID
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

          {/* Tagline */}
          <p className="font-inter mt-6 max-w-2xl text-base leading-relaxed text-cyan-300/80 sm:text-lg md:text-xl">
            Membangun Masa Depan Komputasi Kuantum Indonesia
          </p>

          {/* Subtitle */}
          <p className="font-inter mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
            Platform enkripsi tahan kuantum dan simulasi superposisi — buatan Indonesia, untuk dunia.
          </p>

          {/* Tech badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {['Next.js 15', 'React 19', 'Tailwind CSS 4'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Countdown Timer */}
          <div className="mt-12 w-full max-w-3xl">
            <CountdownTimer />
          </div>
        </section>

        {/* Email Signup Section */}
        <section className="mt-16 w-full">
          <EmailSignup />
        </section>

        {/* 4 Pillars Section */}
        <section className="mt-20 w-full max-w-5xl">
          <h2 className="font-orbitron mb-4 text-center text-2xl font-bold text-white sm:text-3xl">
            🧬 Pilar Teknologi Kami
          </h2>
          <p className="font-inter mx-auto mb-10 max-w-xl text-center text-sm text-gray-400 sm:text-base">
            Empat pilar utama yang menjadi fondasi platform kami — dirancang untuk komputasi kuantum yang nyata dan aplikatif.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PillarCard
              icon="🔮"
              title="Superposisi"
              description="Banyak kemungkinan sekaligus. Sebuah qubit bisa berada dalam banyak state secara bersamaan — membuka potensi komputasi yang tak terbatas."
            />
            <PillarCard
              icon="🔗"
              title="Entanglement"
              description="Koneksi instan tanpa jarak. Dua qubit yang terentangle saling mempengaruhi secara instan — fondasi komunikasi kuantum masa depan."
            />
            <PillarCard
              icon="🛡️"
              title="Enkripsi Kuantum"
              description="Keamanan data generasi berikutnya. Enkripsi post-kuantum yang tahan serangan dari komputer kuantum — melindungi data Anda di masa depan."
            />
            <PillarCard
              icon="💎"
              title="Dekohorensi"
              description="Menuju stabilitas absolut. Kami menaklukkan dekohorensi untuk memastikan sistem kuantum tetap stabil dan reliabel dalam produksi."
            />
          </div>
        </section>

        {/* About Section */}
        <section className="mt-24 w-full max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-12">
            <h2 className="font-orbitron mb-6 text-center text-2xl font-bold text-white sm:text-3xl">
              Tentang OpenQuantum.id
            </h2>
            <div className="space-y-4 text-center">
              <p className="font-inter text-base leading-relaxed text-gray-300 sm:text-lg">
                OpenQuantum.id adalah platform komputasi kuantum Indonesia yang berfokus pada riset dan pengembangan teknologi kuantum yang aplikatif.
              </p>
              <p className="font-inter text-base leading-relaxed text-gray-400 sm:text-lg">
                Kami membangun solusi enkripsi tahan kuantum dan simulasi superposisi — dimulai dari Indonesia, untuk kontribusi global. Misi kami adalah membuat teknologi kuantum lebih mudah diakses oleh developer, peneliti, dan organisasi di seluruh dunia.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                {[
                  '🔐 Kriptografi Post-Kuantum',
                  '⚛️ Simulasi Kuantum',
                  '🌐 Open Source',
                  '🇮🇩 Buatan Indonesia',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-400 sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 w-full max-w-2xl text-center">
          <h2 className="font-orbitron mb-4 text-2xl font-bold text-white sm:text-3xl">
            🚀 Siap Bergabung?
          </h2>
          <p className="font-inter mb-8 text-base text-gray-400 sm:text-lg">
            Daftar sekarang dan jadilah yang pertama mengetahui saat platform kami resmi diluncurkan. Bersama, kita bangun masa depan komputasi kuantum Indonesia!
          </p>
          <EmailSignup />
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
