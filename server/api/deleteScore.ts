import { PrismaClient } from '@prisma/client';
import { getUser, requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const username = await getUser(event);
    if (!username) return false;

    const response = [];
    try {
      const userEgg = await prisma.userEgg.deleteMany({
        where: {
          username: username,
        },
      });
      response.push(userEgg);
    } catch (deleteError: any) {
      console.error(deleteError);
    }
    return response;
  }),
);
