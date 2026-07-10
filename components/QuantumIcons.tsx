'use client';

import { type SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Superposition — Two overlapping sine waves representing qubit states
 * coexisting simultaneously.
 */
export function SuperpositionIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Wave 1 — primary sine wave */}
      <path
        d="M8 32 C16 16, 24 16, 32 32 C40 48, 48 48, 56 32"
        stroke="#6b9aff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Wave 2 — secondary sine wave, phase-shifted */}
      <path
        d="M8 32 C16 48, 24 48, 32 32 C40 16, 48 16, 56 32"
        stroke="#35498a"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Overlap glow at center intersection */}
      <circle cx="32" cy="32" r="3" fill="#6b9aff" opacity="0.5" />
      <circle cx="32" cy="32" r="6" fill="#6b9aff" opacity="0.15" />
    </svg>
  );
}

/**
 * Entanglement — Two particles connected by a curved line,
 * representing quantum correlation across distance.
 */
export function EntanglementIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Curved connection line */}
      <path
        d="M18 32 C26 18, 38 18, 46 32"
        stroke="#35498a"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M18 32 C26 46, 38 46, 46 32"
        stroke="#35498a"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Particle 1 */}
      <circle cx="18" cy="32" r="4" fill="#1c2859" stroke="#6b9aff" strokeWidth="1.5" />
      <circle cx="18" cy="32" r="1.5" fill="#6b9aff" opacity="0.8" />
      {/* Particle 2 */}
      <circle cx="46" cy="32" r="4" fill="#1c2859" stroke="#6b9aff" strokeWidth="1.5" />
      <circle cx="46" cy="32" r="1.5" fill="#6b9aff" opacity="0.8" />
      {/* Subtle glow around connection midpoint */}
      <circle cx="32" cy="32" r="2" fill="#35498a" opacity="0.3" />
    </svg>
  );
}

/**
 * Encryption — A grid of dots with a central diamond-lock shape,
 * representing post-quantum lattice-based encryption.
 */
export function EncryptionIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Grid dots (4x4 lattice) */}
      {[16, 26, 36, 46].map((x) =>
        [16, 26, 36, 46].map((y) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="1.2"
            fill="#35498a"
            opacity="0.5"
          />
        ))
      )}
      {/* Central diamond lock shape */}
      <path
        d="M32 22 L38 32 L32 42 L26 32 Z"
        stroke="#6b9aff"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Inner diamond */}
      <path
        d="M32 26 L35 32 L32 38 L29 32 Z"
        fill="#1c2859"
        stroke="#6b9aff"
        strokeWidth="0.8"
        opacity="0.6"
      />
      {/* Lock keyhole dot */}
      <circle cx="32" cy="32" r="1.5" fill="#6b9aff" opacity="0.7" />
    </svg>
  );
}

/**
 * Decoherence — A wave with decreasing amplitude from left to right,
 * representing the loss of quantum coherence.
 */
export function DecoherenceIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Damped wave — large amplitude on left, small on right */}
      <path
        d="M6 32 C10 12, 14 12, 18 32 C22 52, 26 52, 30 32 C34 22, 36 22, 38 32 C40 40, 42 40, 44 32 C46 26, 47 26, 48 32 C49 36, 50 36, 51 32 C52 30, 53 30, 54 32 C55 33, 56 33, 57 32"
        stroke="#6b9aff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Faint residual wave (what remains after decoherence) */}
      <path
        d="M48 32 C49 29, 50 29, 51 32 C52 35, 53 35, 54 32 C55 30, 56 30, 57 32"
        stroke="#35498a"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Vertical decay indicator line */}
      <line
        x1="57" y1="24"
        x2="57" y2="40"
        stroke="#35498a"
        strokeWidth="0.5"
        opacity="0.3"
        strokeDasharray="2 2"
      />
    </svg>
  );
}
