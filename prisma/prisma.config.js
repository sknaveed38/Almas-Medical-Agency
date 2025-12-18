const { PrismaLibSql } = require('@prisma/adapter-libsql');

module.exports = {
  datasources: {
    db: {
      adapter: new PrismaLibSQL({
        url: process.env.DATABASE_URL,
      }),
    },
  },
};
