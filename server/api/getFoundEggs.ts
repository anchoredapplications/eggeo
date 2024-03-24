import { PrismaClient } from '@prisma/client';
import { requireAuth, getUser } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event: any) => {
    const username = await getUser(event);
    const data = await prisma.userEgg.aggregate({
      where: {
        username: username,
      },
      _count: {
        eggId: true,
      },
    });

    return data._count.eggId;
  }),
);
