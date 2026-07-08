import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Rate limiting: simple in-memory store
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, preferences, honeypot } = body;

    // Honeypot check (bot detection)
    if (honeypot) {
      // Silently reject bots
      return NextResponse.json({ success: true, message: 'Terima kasih!' });
    }

    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0] || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Terlalu banyak percobaan. Coba lagi nanti.' },
        { status: 429 }
      );
    }

    // Validation
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Email tidak valid.' },
        { status: 400 }
      );
    }

    // Check duplicate
    const existing = await prisma.emailSubscriber.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Email sudah terdaftar.' },
        { status: 409 }
      );
    }

    // Create subscriber
    const subscriber = await prisma.emailSubscriber.create({
      data: {
        email: email.toLowerCase(),
        name: name || null,
        preferences: preferences || null,
        source: 'coming-soon',
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Terima kasih! Anda akan menjadi yang pertama tahu.',
      id: subscriber.id,
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan. Coba lagi nanti.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
