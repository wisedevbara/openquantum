'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

type SoundType = 'quantumPing' | 'particleCollision' | 'waveCollapse';

interface SoundEngineState {
  play: (type: SoundType) => void;
  isMuted: boolean;
  toggleMute: () => void;
}

/**
 * Web Audio API based sound engine for quantum-themed sound effects.
 * Creates AudioContext lazily on first play and handles autoplay policy.
 */
function createSoundEngine() {
  let ctx: AudioContext | null = null;

  const ensureContext = async (): Promise<AudioContext | null> => {
    if (!ctx) {
      try {
        ctx = new AudioContext();
      } catch {
        console.warn('Web Audio API not supported');
        return null;
      }
    }
    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch {
        console.warn('Could not resume AudioContext (autoplay policy)');
        return null;
      }
    }
    return ctx;
  };

  const quantumPing = async () => {
    const context = await ensureContext();
    if (!context) return;

    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, context.currentTime);

    // Quick fade out
    gainNode.gain.setValueAtTime(0.3, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.1);
  };

  const particleCollision = async () => {
    const context = await ensureContext();
    if (!context) return;

    const bufferSize = Math.floor(context.sampleRate * 0.05);
    const buffer = context.createBuffer(1, bufferSize, context.sampleRate);
    const data = buffer.getChannelData(0);

    // White noise burst
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.1;
    }

    const source = context.createBufferSource();
    source.buffer = buffer;

    const gainNode = context.createGain();
    gainNode.gain.setValueAtTime(0.15, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.05);

    source.connect(gainNode);
    gainNode.connect(context.destination);

    source.start(context.currentTime);
    source.stop(context.currentTime + 0.05);
  };

  const waveCollapse = async () => {
    const context = await ensureContext();
    if (!context) return;

    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(400, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, context.currentTime + 0.2);

    gainNode.gain.setValueAtTime(0.1, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.2);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.2);
  };

  const playMap: Record<SoundType, () => Promise<void>> = {
    quantumPing,
    particleCollision,
    waveCollapse,
  };

  const play = (type: SoundType) => {
    playMap[type]?.();
  };

  return { play };
}

/**
 * React hook for playing quantum-themed sound effects.
 * Returns { play, isMuted, toggleMute }.
 * Sounds are muted by default.
 */
export function useSoundEngine(): SoundEngineState {
  const [isMuted, setIsMuted] = useState(true);
  const engineRef = useRef<ReturnType<typeof createSoundEngine> | null>(null);

  // Initialize engine lazily
  const getEngine = useCallback(() => {
    if (!engineRef.current) {
      engineRef.current = createSoundEngine();
    }
    return engineRef.current;
  }, []);

  const play = useCallback(
    (type: SoundType) => {
      if (isMuted) return;
      getEngine().play(type);
    },
    [isMuted, getEngine]
  );

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  // Cleanup AudioContext on unmount
  useEffect(() => {
    return () => {
      engineRef.current = null;
    };
  }, []);

  return { play, isMuted, toggleMute };
}

export default useSoundEngine;
