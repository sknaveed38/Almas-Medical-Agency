const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

module.exports = {
  datasources: {
    db: {
      adapter: new PrismaBetterSqlite3({
        url: process.env.DATABASE_URL,
      }),
    },
  },
};
