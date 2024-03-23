import { PrismaClient } from '@prisma/client';
import requireAuth from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const { username, id } = await readBody(event);
    const egg = { username: username, eggId: id };

    await prisma.userEgg.upsert({
      where: {
        id: egg,
      },
      create: egg,
      update: egg,
    });

    return true;
  }),
);
