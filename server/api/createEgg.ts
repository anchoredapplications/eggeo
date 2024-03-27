import { PrismaClient } from '@prisma/client';
import { getUser, requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const username = await getUser(event);
    const { title, description, color } = await readBody(event);

    return await prisma.egg.create({
      data: {
        title,
        description,
        username,
        color,
      },
    });
  }),
);
