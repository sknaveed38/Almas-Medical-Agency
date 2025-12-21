import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import 'dotenv/config';

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Start seeding ...');

  const product1 = await prisma.product.upsert({
    where: { product_id_str: 'PROD001' },
    update: {},
    create: {
      product_id_str: 'PROD001',
      brand: 'Sample Brand',
      name: 'Sample Product',
      salt: 'Sample Salt',
      pack_size: '10 tablets',
      price_mrp: 100.0,
      moq: 10,
      stock_qty: 1000,
      category: 'General',
      image: '/images/sample-product.jpg',
      stock_badge: 'In Stock',
      is_prescription_required: false,
      gst_rate: 12.0,
      hsn_code: '30049099',
      pricing: {
        "wholesale": 80.0,
        "distributor": 70.0
      },
      batches: [
        {
          "batch_number": "B001",
          "expiry_date": "2026-12-31",
          "quantity": 500
        },
        {
          "batch_number": "B002",
          "expiry_date": "2027-06-30",
          "quantity": 500
        }
      ]
    },
  });

  console.log({ product1 });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });