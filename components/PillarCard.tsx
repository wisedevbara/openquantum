'use client';

interface PillarCardProps {
  icon?: string;
  title?: string;
  description?: string;
}

export default function PillarCard({
  icon = '🔮',
  title = 'Superposisi',
  description = 'Banyak kemungkinan sekaligus',
}: PillarCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10">
      {/* Icon */}
      <div className="mb-4 text-4xl">{icon}</div>

      {/* Title */}
      <h3 className="font-orbitron mb-2 text-lg font-bold text-white">{title}</h3>

      {/* Description */}
      <p className="font-inter text-sm leading-relaxed text-gray-400">{description}</p>

      {/* Decorative glow line */}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
