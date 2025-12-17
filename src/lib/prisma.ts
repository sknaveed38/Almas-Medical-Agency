import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
// import Database from 'better-sqlite3' // Not needed anymore

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! }); // Pass the config object
const prisma = new PrismaClient({ adapter });

export default prisma
