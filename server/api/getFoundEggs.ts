import { PrismaClient } from '@prisma/client';
import { requireAuth, getUser } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event: any) => {
    const username = await getUser(event);

    const data = await prisma.userEgg.findMany({
      where: {
        username: username,
      },
      select: {
        Egg: {
          select: {
            points: true,
          },
        },
      },
    });

    const sum = data.map((e) => e.Egg.points ?? 1).reduce((a, b) => a + b, 0);
    return sum;
  }),
);
