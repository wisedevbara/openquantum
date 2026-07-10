'use client';

export default function Footer() {
  return (
    <footer className="border-t border-cherenkov-mid/10 bg-void/20 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="font-body text-sm text-photon/40">
            © 2026 OpenQuantum.id. Hak cipta dilindungi.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            {/* Twitter/X Icon */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-photon/40 transition-colors hover:text-photon"
              aria-label="Ikuti kami di X"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Privacy Policy */}
            <a
              href="/privacy-policy"
              className="font-body text-sm text-photon/40 transition-colors hover:text-photon"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
