'use client';

import { useState, useEffect } from 'react';

// Default fallback: Dec 31, 2026 UTC
const DEFAULT_LAUNCH_DATE = '2026-12-31T00:00:00.000Z';
const REFRESH_INTERVAL_MS = 60_000; // 60 seconds

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
  const [targetMs, setTargetMs] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>(timeLeft);

  // Fetch launch date from API
  const fetchLaunchDate = async () => {
    try {
      const res = await fetch('/api/settings', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      const launchDate = data.launchDate || DEFAULT_LAUNCH_DATE;
      const target = new Date(launchDate).getTime();
      setTargetMs(target);
    } catch {
      // Fallback to default date
      const target = new Date(DEFAULT_LAUNCH_DATE).getTime();
      setTargetMs(target);
    }
  };

  // Initial fetch + refresh every 60s
  useEffect(() => {
    fetchLaunchDate();
    const interval = setInterval(fetchLaunchDate, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  // Tick every second
  useEffect(() => {
    if (targetMs === null) return;

    // Set initial value immediately
    const initial = getTimeLeft(targetMs);
    setTimeLeft(initial);
    setPrevTimeLeft(initial);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = getTimeLeft(targetMs);
        setPrevTimeLeft(prev);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetMs]);

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
