import { PrismaClient } from '@prisma/client'
import { schema } from 'nexus'

const prisma = new PrismaClient()

schema.addToContext(() => {
    return {
        prisma: prisma
    }
})
