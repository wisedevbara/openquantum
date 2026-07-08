'use client';

import { useEffect, useState } from 'react';

export default function QuantumGrid() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const pulseAnimation = reducedMotion ? 'none' : 'quantum-pulse 2s ease-in-out infinite';
  const scanAnimation = reducedMotion ? 'none' : 'quantum-scan 4s linear infinite';

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1]"
      aria-hidden="true"
      style={{
        // CSS grid pattern background
        backgroundImage: `
          linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: 'center center',
      }}
    >
      {/* Radial gradient overlay for lens distortion effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 50% 50%,
              transparent 30%,
              rgba(3, 7, 18, 0.4) 70%,
              rgba(3, 7, 18, 0.85) 100%
            )
          `,
        }}
      />

      {/* Subtle animated glow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(34, 211, 238, 0.03) 0%,
              transparent 50%
            )
          `,
          animation: pulseAnimation,
        }}
      />

      {/* Grid distortion wave - horizontal */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(139, 92, 246, 0.02) 25%,
              transparent 50%,
              rgba(34, 211, 238, 0.02) 75%,
              transparent 100%
            )
          `,
          backgroundSize: '100% 200%',
          animation: scanAnimation,
        }}
      />

      {/* Keyframe animations */}
      <style>{`
        @keyframes quantum-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        @keyframes quantum-scan {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 200%;
          }
        }
      `}</style>
    </div>
  );
}
