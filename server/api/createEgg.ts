import { PrismaClient } from '@prisma/client';
import { getUser, requireAuth } from './requireAuth';
const prisma = new PrismaClient();

export default defineEventHandler(
  requireAuth(async (event) => {
    const username = await getUser(event);
    const { count, title, description, color } = await readBody(event);
    try {
      let i;
      for (i = 0; i <= count; i++) {
        await prisma.egg.create({
          data: {
            title: count === 1 ? title : `${title} #${i + 1}`,
            description: description,
            username: username,
            color: color,
          },
        });
      }
      return i;
    } catch (e: unknown) {
      console.error(e);
    }
  }),
);
