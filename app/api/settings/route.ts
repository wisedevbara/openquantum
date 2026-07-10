import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DEFAULT_LAUNCH_DATE = '2026-12-31T00:00:00.000Z';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const setting = await prisma.siteSettings.findUnique({
      where: { key: 'launch_date' },
    });

    if (!setting) {
      return NextResponse.json({ launchDate: DEFAULT_LAUNCH_DATE });
    }

    const launchDate = (setting.value as { date: string }).date || DEFAULT_LAUNCH_DATE;
    return NextResponse.json({ launchDate });
  } catch (error) {
    console.error('Failed to fetch launch date:', error);
    return NextResponse.json({ launchDate: DEFAULT_LAUNCH_DATE });
  } finally {
    await prisma.$disconnect();
  }
}
