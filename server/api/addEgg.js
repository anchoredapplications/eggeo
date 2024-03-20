import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    const { title, description, username, coords, color } = await readBody(event)

    const newEgg = await prisma.egg.create({
      data: {
        title,
        description,
        username,
        color
      }
    })

    await prisma.location.create({
      data: {
        eggId: newEgg.id,
        ...coords
      }
    })
    
    return true
})