'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Small delay for smooth entrance
      setTimeout(() => {
        setVisible(true);
        setTimeout(() => setAnimate(true), 50);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    // Grant GA4 consent
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    setAnimate(false);
    setTimeout(() => setVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    // Deny GA4 consent
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
    setAnimate(false);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Message */}
          <p className="font-inter max-w-2xl text-sm text-gray-400">
            Kami menggunakan cookie untuk meningkatkan pengalaman Anda. Dengan
            mengklik Accept, Anda setuju dengan penggunaan cookie analytics.
          </p>

          {/* Buttons */}
          <div className="flex shrink-0 gap-3">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-gray-600 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              Tolak Semua
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-sm font-semibold text-gray-900 transition-all hover:from-amber-500 hover:to-amber-600"
            >
              Setujui Semua
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
