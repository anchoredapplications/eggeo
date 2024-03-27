import { PrismaClient } from '@prisma/client';
import { getUser, requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const egg = await readBody(event);
    try {
      return await prisma.egg.findMany({
        where: {
          coords: {
            lat: { lte: egg.coords.lat + 0.1, gte: egg.coords.lat - 0.1 },
            lng: { lte: egg.coords.lng + 0.1, gte: egg.coords.lng - 0.1 },
          },
          isCollected: false,
        },
        include: {
          coords: {},
        },
      });
    } catch (error: unknown) {
      console.error(error);
    }
  }),
);
