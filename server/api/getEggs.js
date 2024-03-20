import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    const data = await prisma.egg.findMany(
        {
            include: {
                coords: {}
            }
        }
    )
    return data
})