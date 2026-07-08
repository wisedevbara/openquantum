'use client';

import { useState, FormEvent } from 'react';

interface EmailSignupProps {
  onSuccess?: () => void;
}

export default function EmailSignup({ onSuccess }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState({
    quantum_computing: false,
    pqc: false,
    qml: false,
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Email tidak valid.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, preferences, honeypot }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setEmail('');
        setName('');
        setPreferences({ quantum_computing: false, pqc: false, qml: false });
        onSuccess?.();
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Terjadi kesalahan.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Gagal terhubung ke server. Coba lagi nanti.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-cyan-500/30 bg-white/5 p-8 text-center backdrop-blur-md">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-inter text-lg text-white">Terima kasih!</p>
        <p className="mt-2 text-sm text-gray-400">Anda akan menjadi yang pertama tahu.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg rounded-2xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-md md:p-8"
    >
      {/* Honeypot - hidden from humans */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-gray-400">
            Nama <span className="text-gray-600">(opsional)</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-500"
            placeholder="Nama Anda"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-gray-400">
            Email <span className="text-amber-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-500"
            placeholder="email@contoh.com"
          />
        </div>

        {/* Preferences */}
        <div>
          <p className="mb-2 text-sm text-gray-400">Saya tertarik dengan:</p>
          <div className="space-y-2">
            {[
              { key: 'quantum_computing' as const, label: 'Quantum Computing' },
              { key: 'pqc' as const, label: 'Post-Quantum Cryptography' },
              { key: 'qml' as const, label: 'Quantum Machine Learning' },
            ].map((pref) => (
              <label key={pref.key} className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences[pref.key]}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, [pref.key]: e.target.checked }))
                  }
                  className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-sm text-gray-300">{pref.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {status === 'error' && (
          <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">
            {errorMessage}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-lg bg-gradient-to-r from-amber-400 to-cyan-400 px-6 py-3 font-semibold text-gray-900 transition-all hover:from-amber-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50"
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Mengirim...
            </span>
          ) : (
            'Bergabung Sekarang'
          )}
        </button>
      </div>
    </form>
  );
}
