import { PrismaClient } from '@prisma/client';
import { requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const { id } = await readBody(event);

    await prisma.location.delete({
      where: {
        eggId: id,
      },
    });

    return await prisma.egg.delete({
      where: {
        id: id,
      },
    });
  }),
);
