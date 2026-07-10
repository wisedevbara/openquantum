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
        className="relative flex h-16 w-16 items-center justify-center rounded-full sm:h-18 sm:w-18"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(107,138,208,0.08) 0%, rgba(8,11,20,0.6) 70%)',
          boxShadow:
            '0 0 30px rgba(107,138,208,0.1), inset 0 0 30px rgba(28,40,89,0.05)',
        }}
      >
        {/* Rotating border ring */}
        <div
          className="absolute inset-0 animate-spin rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, rgba(107,138,208,0.6), rgba(53,73,138,0.4), rgba(28,40,89,0.5), rgba(107,138,208,0.6))',
            padding: '2px',
            borderRadius: '50%',
            animationDuration: '8s',
          }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{ background: 'linear-gradient(135deg, var(--void-900) 0%, var(--void-700) 100%)' }}
          />
        </div>

        {/* Glass morphism inner card */}
        <div
          className="relative z-10 flex h-14 w-14 flex-col items-center justify-center rounded-full backdrop-blur-md sm:h-16 sm:w-16"
          style={{
            background: 'rgba(8,11,20,0.7)',
            border: '1px solid rgba(107,138,208,0.15)',
          }}
        >
          <span
            className="font-display text-xl font-bold sm:text-2xl"
            style={{
              color: 'var(--text-primary)',
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
      <span className="font-display mt-3 text-xs tracking-widest uppercase sm:text-sm"
        style={{ color: 'var(--cherenkov-glow)' }}
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
    <div className="grid grid-cols-2 place-items-center gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
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
