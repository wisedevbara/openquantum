'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: number): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(num: number): string {
  return String(num).padStart(2, '0');
}

interface TimeUnitCardProps {
  value: number;
  label: string;
  prevValue: number;
}

function TimeUnitCard({ value, label, prevValue }: TimeUnitCardProps) {
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setSpinning(true);
      const timeout = setTimeout(() => setSpinning(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [value, prevValue]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Bloch Sphere container with rotating border */}
      <div
        className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.08) 0%, rgba(3,7,18,0.6) 70%)',
          boxShadow:
            '0 0 30px rgba(34,211,238,0.1), inset 0 0 30px rgba(139,92,246,0.05)',
        }}
      >
        {/* Rotating border ring */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background:
              'conic-gradient(from 0deg, rgba(34,211,238,0.6), rgba(251,191,36,0.4), rgba(139,92,246,0.5), rgba(34,211,238,0.6))',
            padding: '2px',
            borderRadius: '50%',
            animationDuration: '8s',
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{ background: 'linear-gradient(135deg, #030712 0%, #0F0A2A 100%)' }}
          />
        </div>

        {/* Glass morphism inner card */}
        <div
          className="relative z-10 flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full backdrop-blur-md"
          style={{
            background: 'rgba(3,7,18,0.7)',
            border: '1px solid rgba(34,211,238,0.15)',
          }}
        >
          <span
            className="font-orbitron text-3xl sm:text-4xl font-bold"
            style={{
              color: '#FBBF24',
              transform: spinning ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.5s ease-out',
              display: 'inline-block',
            }}
          >
            {pad(value)}
          </span>
        </div>
      </div>

      {/* Label */}
      <span
        className="mt-3 font-orbitron text-xs sm:text-sm tracking-widest uppercase"
        style={{ color: '#22D3EE' }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [target] = useState(() => Date.now() + 200 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));
  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>(timeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getTimeLeft(target);
      setPrevTimeLeft(timeLeft);
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [target, timeLeft]);

  const units: TimeUnitCardProps[] = [
    { value: timeLeft.days, label: 'Hari', prevValue: prevTimeLeft.days },
    { value: timeLeft.hours, label: 'Jam', prevValue: prevTimeLeft.hours },
    { value: timeLeft.minutes, label: 'Menit', prevValue: prevTimeLeft.minutes },
    { value: timeLeft.seconds, label: 'Detik', prevValue: prevTimeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 place-items-center">
      {units.map((unit) => (
        <TimeUnitCard
          key={unit.label}
          value={unit.value}
          label={unit.label}
          prevValue={unit.prevValue}
        />
      ))}
    </div>
  );
}
