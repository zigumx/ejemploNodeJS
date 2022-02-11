import { server, use, schema } from 'nexus'
import * as Nexus from '@nexus/schema'
// import { prisma } from 'nexus-plugin-prisma'
import cors from 'cors'
// import nexusPrismaPlugin2 from './plugin'

schema.use(Nexus.fieldAuthorizePlugin())

// schema.use(nexusPrismaPlugin2())

server.express.use(cors())

// use(prisma())
