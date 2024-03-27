import { PrismaClient } from '@prisma/client';
import { getUser, requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const username = await getUser(event);
    try {
      return await prisma.egg.findMany({
        where: {
          username: username,
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
