import { PrismaClient, UserRole } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import productsData from '../src/data/products.json'
import bcrypt from 'bcrypt'

const adapter = new PrismaLibSQL({ url: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Start seeding ...')

  // Create users
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('password123', salt)

  await prisma.user.create({
    data: {
      email: 'regular@example.com',
      password: hashedPassword,
      name: 'Regular User',
      role: UserRole.REGULAR,
    },
  })

  await prisma.user.create({
    data: {
      email: 'wholesaler@example.com',
      password: hashedPassword,
      name: 'Wholesaler User',
      role: UserRole.WHOLESALER,
    },
  })

  await prisma.user.create({
    data: {
      email: 'distributor@example.com',
      password: hashedPassword,
      name: 'Distributor User',
      role: UserRole.DISTRIBUTOR,
    },
  })

  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
      role: UserRole.ADMIN,
    },
  })

  // Create products
  for (const productData of productsData) {
    const moq = typeof productData.moq === 'string' ? parseInt(productData.moq, 10) : productData.moq;
    
    const sourcePricing = productData.pricing as { [key: string]: number }; // Cast to flexible type
    const pricing: { [key in UserRole]?: number } = {};

    if (sourcePricing.REGULAR) pricing.REGULAR = sourcePricing.REGULAR;
    else if (sourcePricing.Regular) pricing.REGULAR = sourcePricing.Regular;

    if (sourcePricing.WHOLESALER) pricing.WHOLESALER = sourcePricing.WHOLESALER;
    else if (sourcePricing.Wholesaler) pricing.WHOLESALER = sourcePricing.Wholesaler;

    if (sourcePricing.DISTRIBUTOR) pricing.DISTRIBUTOR = sourcePricing.DISTRIBUTOR;
    else if (sourcePricing.Distributor) pricing.DISTRIBUTOR = sourcePricing.Distributor;
    
    if (sourcePricing.ADMIN) pricing.ADMIN = sourcePricing.ADMIN;
    else if (sourcePricing.Admin) pricing.ADMIN = sourcePricing.Admin;

    await prisma.product.create({
      data: {
        product_id_str: productData.product_id,
        brand: productData.brand,
        name: productData.name,
        salt: productData.salt,
        pack_size: productData.pack_size,
        price_mrp: productData.price_mrp,
        moq: moq,
        stock_qty: productData.stock_qty,
        category: productData.category,
        image: productData.image,
        stock_badge: productData.stock_badge,
        is_prescription_required: productData.is_prescription_required,
        gst_rate: productData.gst_rate,
        hsn_code: productData.hsn_code,
        pricing: pricing as any,
        batches: productData.batches as any,
      },
    })
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })