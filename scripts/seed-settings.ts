import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.siteSettings.upsert({
    where: { key: 'launch_date' },
    update: { value: { date: '2026-12-31T00:00:00.000Z' } },
    create: { key: 'launch_date', value: { date: '2026-12-31T00:00:00.000Z' } },
  });
  console.log('Seed result:', JSON.stringify(result, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
