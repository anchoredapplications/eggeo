import { PrismaClient } from '@prisma/client';
import { getServerSession } from '#auth';
const prisma = new PrismaClient();

export default function requireAuth(func: (event: any) => Promise<any>) {
  return async (event: any) => {
    const session = await getServerSession(event);
    if (!session?.user?.email) {
      return { status: 'unauthenticated!' };
    }
    const user = {
      username: session.user.email,
    };
    await prisma.user.upsert({
      where: user,
      update: user,
      create: user,
    });

    return func(event);
  };
}
