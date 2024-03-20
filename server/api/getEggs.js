import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    const query = getQuery(event);
    if (!query.uuid) {
        const data = await prisma.egg.findMany(
            {
                include: {
                    coords: {}
                }
            }
        )
        return data
    } else {
        const data = await prisma.egg.findUnique(
            {
                where: {
                    id: query.uuid
                },
                include: {
                    coords: {}
                }
            }
        )
        return data
    }
})