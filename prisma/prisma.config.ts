
import { defineConfig } from 'prisma/cli'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

export default defineConfig({
  datasources: {
    db: {
      adapter: new PrismaBetterSqlite3({
        url: process.env.DATABASE_URL!,
      }),
    },
  },
})
