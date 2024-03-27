import { PrismaClient } from '@prisma/client';
import { getUser, requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const egg = await readBody(event);
    try {
      return await prisma.egg.findUnique({
        where: {
          id: egg.id,
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
