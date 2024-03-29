import { PrismaClient } from '@prisma/client';
import { requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    try {
      const data = await prisma.user.findMany({
        where: {
          username: {
            not: {
              in: ['jdgage@protonmail.com'],
            },
          },
        },
        select: {
          name: true,
          _count: {
            select: {
              foundEggs: true,
            },
          },
        },
      });
      const result = data
        .map((datum) => ({
          name: datum.name,
          points: datum._count.foundEggs,
        }))
        .sort((a, b) => b.points - a.points);
      return result;
    } catch (error: unknown) {
      console.error(error);
    }
  }),
);
