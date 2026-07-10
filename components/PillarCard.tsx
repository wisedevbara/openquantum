'use client';

import type { ReactNode } from 'react';

interface PillarCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export default function PillarCard({
  icon,
  title,
  description,
}: PillarCardProps) {
  return (
    <div className="card-cherenkov group flex flex-col rounded-2xl p-6 transition-all duration-300">
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--cherenkov-deep)]/30 text-[var(--cherenkov-bright)] transition-colors duration-300 group-hover:bg-[var(--cherenkov-mid)]/40">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-space-mono mb-2 text-lg font-bold text-[var(--text-primary)]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-inter flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>

      {/* Measurement line — visible on hover */}
      <div className="mt-4 measurement-line-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
