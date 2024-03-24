import { PrismaClient } from '@prisma/client';
import { requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const { title, description, username, color } = await readBody(event);

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
