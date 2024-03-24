import { PrismaClient } from '@prisma/client';
import { requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const egg = await readBody(event);
    if (!!egg && !!egg.coords && !!egg.coords.lat && !!egg.coords.lng) {
      return await prisma.egg.findMany({
        where: {
          coords: {
            lat: { lte: egg.coords.lat + 0.1, gte: egg.coords.lat - 0.1 },
            lng: { lte: egg.coords.lng + 0.1, gte: egg.coords.lng - 0.1 },
          },
        },
        include: {
          coords: {},
        },
      });
    } else if (!!egg && !!egg.id) {
      return await prisma.egg.findUnique({
        where: {
          id: egg.id,
        },
        include: {
          coords: {},
        },
      });
    } else {
      return await prisma.egg.findMany({
        include: {
          coords: {},
        },
      });
    }
  }),
);
