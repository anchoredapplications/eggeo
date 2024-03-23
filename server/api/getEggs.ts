import { PrismaClient } from '@prisma/client';
import requireAuth from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const egg = await readBody(event);
    if (!!egg && !!egg.coords && !!egg.coords.lat && !!egg.coords.lng) {
      const data = await prisma.egg.findMany({
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
      return data;
    } else if (!!egg && !!egg.uuid) {
      const data = await prisma.egg.findUnique({
        where: {
          id: egg.uuid,
        },
        include: {
          coords: {},
        },
      });
      return data;
    } else {
      const data = await prisma.egg.findMany({
        include: {
          coords: {},
        },
      });
      return data;
    }
  }),
);
