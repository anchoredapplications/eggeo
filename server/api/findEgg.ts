import { PrismaClient } from '@prisma/client';
import { getUser, requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const username = await getUser(event);
    if (!username) return { status: 'unauthenticated' };

    const { id } = await readBody(event);
    const egg = { username: username, eggId: id };

    return await prisma.userEgg.upsert({
      where: {
        id: egg,
      },
      create: egg,
      update: egg,
      include: {
        Egg: {},
      },
    });
  }),
);
