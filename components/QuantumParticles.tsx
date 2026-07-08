'use client';

import { useRef, useEffect, useCallback } from 'react';

const COLORS = ['#FBBF24', '#22D3EE', '#8B5CF6'] as const;
const MOUSE_RADIUS = 150;
const CONNECTION_DISTANCE = 200;
const DESKTOP_COUNT = 80;
const MOBILE_COUNT = 30;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseColor: string;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

function getParticleCount(): number {
  if (typeof window === 'undefined') return DESKTOP_COUNT;
  return window.innerWidth < 768 ? MOBILE_COUNT : DESKTOP_COUNT;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function createParticle(width: number, height: number): Particle {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    radius: Math.random() * 2 + 1,
    color,
    baseColor: color,
    alpha: Math.random() * 0.5 + 0.5,
    pulseSpeed: Math.random() * 0.02 + 0.01,
    pulseOffset: Math.random() * Math.PI * 2,
  };
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 255, g: 255, b: 255 };
}

function getDistance(a: Particle, b: Particle): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export default function QuantumParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const timeRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    const count = getParticleCount();
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(width, height)
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    if (prefersReducedMotion()) {
      // Draw static particles without animation
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles(canvas.width, canvas.height);
        drawFrame(ctx, particlesRef.current, 0, canvas.width, canvas.height);
      };
      resize();
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize particles for new dimensions
      const count = getParticleCount();
      if (particlesRef.current.length !== count) {
        initParticles(canvas.width, canvas.height);
      }
    };

    resize();
    initParticles(canvas.width, canvas.height);

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current = null;
    };

    // Animation frame
    const animate = (timestamp: number) => {
      timeRef.current = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interaction (observer effect / wave function collapse)
        if (mouse) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_RADIUS) {
            const force = (1 - dist / MOUSE_RADIUS) * 2;
            // Push particle away from mouse
            p.vx += (dx / dist) * force * 0.3;
            p.vy += (dy / dist) * force * 0.3;
            // Change color temporarily (wave function collapse)
            if (dist < MOUSE_RADIUS * 0.5) {
              p.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            }
          } else {
            // Gradually return to base color
            p.color = p.baseColor;
          }
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -0.8;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -0.8;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Add tiny random force for organic movement
        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy += (Math.random() - 0.5) * 0.05;

        // Pulse alpha
        const pulse = Math.sin(timestamp * p.pulseSpeed + p.pulseOffset) * 0.3 + 0.7;
        p.alpha = pulse;
      }

      // Draw entanglement lines first (behind particles)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = getDistance(particles[i], particles[j]);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
            const rgb = hexToRgb(particles[i].color);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow
      for (const p of particles) {
        const rgb = hexToRgb(p.color);

        // Glow effect
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.alpha})`;
        ctx.fill();
        ctx.restore();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.8})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Attach event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  _timestamp: number,
  width: number,
  height: number
) {
  ctx.clearRect(0, 0, width, height);

  // Draw entanglement lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dist = getDistance(particles[i], particles[j]);
      if (dist < CONNECTION_DISTANCE) {
        const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
        const rgb = hexToRgb(particles[i].color);
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  // Draw particles with glow
  for (const p of particles) {
    const rgb = hexToRgb(p.color);

    ctx.save();
    ctx.shadowBlur = 15;
    ctx.shadowColor = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.alpha})`;
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.8})`;
    ctx.fill();
  }
}
