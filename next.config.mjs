import 'dotenv/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  transpilePackages: [
    '@prisma/adapter-libsql',
    '@libsql/client',
  ],
};

export default nextConfig;