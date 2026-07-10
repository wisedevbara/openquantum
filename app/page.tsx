'use client';

import dynamic from 'next/dynamic';
import CountdownTimer from '@/components/CountdownTimer';
import PillarCard from '@/components/PillarCard';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import {
  SuperpositionIcon,
  EntanglementIcon,
  EncryptionIcon,
  DecoherenceIcon,
} from '@/components/QuantumIcons';

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

          {/* Tech badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {['Next.js 15', 'React 19', 'Tailwind CSS 4'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cherenkov-mid/20 bg-cherenkov-deep/30 px-3 py-1 text-xs font-medium text-cherenkov-bright"
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

        {/* 4 Pillars Section */}
        <section className="mt-20 w-full max-w-5xl">
          <h2 className="font-display mb-4 text-center text-2xl font-bold text-photon sm:text-3xl">
            Pilar Teknologi Kami
          </h2>
          <p className="font-body mx-auto mb-10 max-w-xl text-center text-sm text-photon/40 sm:text-base">
            Empat pilar utama yang menjadi fondasi platform kami — dirancang untuk komputasi kuantum yang nyata dan aplikatif.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PillarCard
              icon={<SuperpositionIcon className="h-12 w-12" />}
              title="Superposisi"
              description="Banyak kemungkinan sekaligus. Sebuah qubit bisa berada dalam banyak state secara bersamaan — membuka potensi komputasi yang tak terbatas."
            />
            <PillarCard
              icon={<EntanglementIcon className="h-12 w-12" />}
              title="Entanglement"
              description="Koneksi instan tanpa jarak. Dua qubit yang terentangle saling mempengaruhi secara instan — fondasi komunikasi kuantum masa depan."
            />
            <PillarCard
              icon={<EncryptionIcon className="h-12 w-12" />}
              title="Enkripsi Kuantum"
              description="Keamanan data generasi berikutnya. Enkripsi post-kuantum yang tahan serangan dari komputer kuantum — melindungi data Anda di masa depan."
            />
            <PillarCard
              icon={<DecoherenceIcon className="h-12 w-12" />}
              title="Dekohorensi"
              description="Menuju stabilitas absolut. Kami menaklukkan dekohorensi untuk memastikan sistem kuantum tetap stabil dan reliabel dalam produksi."
            />
          </div>
        </section>

        {/* About Section */}
        <section className="mt-24 w-full max-w-4xl">
          <div className="card-surface rounded-3xl p-8 sm:p-12">
            <h2 className="font-display mb-6 text-center text-2xl font-bold text-photon sm:text-3xl">
              Tentang OpenQuantum.id
            </h2>
            <div className="space-y-4 text-center">
              <p className="font-body text-base leading-relaxed text-photon/70 sm:text-lg">
                OpenQuantum.id adalah platform komputasi kuantum Indonesia yang berfokus pada riset dan pengembangan teknologi kuantum yang aplikatif.
              </p>
              <p className="font-body text-base leading-relaxed text-photon/40 sm:text-lg">
                Kami membangun solusi enkripsi tahan kuantum dan simulasi superposisi — dimulai dari Indonesia, untuk kontribusi global. Misi kami adalah membuat teknologi kuantum lebih mudah diakses oleh developer, peneliti, dan organisasi di seluruh dunia.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                {[
                  'Kriptografi Post-Kuantum',
                  'Simulasi Kuantum',
                  'Open Source',
                  'Buatan Indonesia',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cherenkov-mid/20 bg-cherenkov-deep/30 px-4 py-1.5 text-xs font-medium text-cherenkov-bright sm:text-sm"
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
          <h2 className="font-display mb-4 text-2xl font-bold text-photon sm:text-3xl">
            Siap Bergabung?
          </h2>
          <p className="font-body mb-8 text-base text-photon/40 sm:text-lg">
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
