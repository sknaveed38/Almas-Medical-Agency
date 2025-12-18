const { PrismaLibSql } = require('@prisma/adapter-libsql');

module.exports = {
  datasources: {
    db: {
      adapter: new PrismaLibSql({
        url: process.env.DATABASE_URL,
      }),
    },
  },
};
