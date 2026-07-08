import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#030712] via-[#0F0A2A] to-[#1B0B3B]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Beranda
        </Link>

        <h1 className="font-orbitron mb-2 text-3xl font-bold text-white">Kebijakan Privasi</h1>
        <p className="mb-8 text-sm text-gray-500">Terakhir diperbarui: 8 Juli 2026</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="font-orbitron mb-3 text-xl font-semibold text-white">
              1. Informasi yang Kami Kumpulkan
            </h2>
            <p className="font-inter leading-relaxed">
              Kami mengumpulkan informasi yang Anda berikan secara langsung saat mendaftar untuk
              mendapatkan notifikasi peluncuran produk kami, meliputi:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-400">
              <li>Alamat email (wajib)</li>
              <li>Nama (opsional)</li>
              <li>Preferensi topik: Quantum Computing, Post-Quantum Cryptography, Quantum Machine Learning</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron mb-3 text-xl font-semibold text-white">
              2. Bagaimana Kami Menggunakan Informasi
            </h2>
            <p className="font-inter leading-relaxed">
              Informasi yang kami kumpulkan digunakan semata-mata untuk mengirimkan notifikasi
              peluncuran produk OpenQuantum dan pembaruan terkait topik yang Anda pilih.
              Kami tidak menggunakan informasi Anda untuk tujuan lain.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron mb-3 text-xl font-semibold text-white">
              3. Berbagi Informasi
            </h2>
            <p className="font-inter leading-relaxed">
              Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada
              pihak ketiga mana pun. Semua data tetap berada di dalam sistem kami.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron mb-3 text-xl font-semibold text-white">
              4. Keamanan Data
            </h2>
            <p className="font-inter leading-relaxed">
              Kami menerapkan langkah-langkah keamanan standar industri untuk melindungi
              informasi pribadi Anda, termasuk enkripsi data dan akses terbatas.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron mb-3 text-xl font-semibold text-white">
              5. Hak Anda
            </h2>
            <p className="font-inter leading-relaxed">
              Anda memiliki hak untuk:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-400">
              <li>Berhenti berlangganan (unsubscribe) dari notifikasi kapan saja</li>
              <li>Meminta penghapusan data pribadi Anda</li>
              <li>Meminta salinan data yang kami miliki tentang Anda</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron mb-3 text-xl font-semibold text-white">
              6. Hubungi Kami
            </h2>
            <p className="font-inter leading-relaxed">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi
              kami di: <a href="mailto:privacy@openquantum.id" className="text-cyan-400 hover:text-cyan-300">privacy@openquantum.id</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
