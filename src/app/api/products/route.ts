import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic'; // Ensures the route is always re-rendered

export async function GET() {

  const products = await prisma.product.findMany();
  console.log('Products from API:', products);
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const userRole = request.headers.get('X-User-Role');
  if (userRole !== 'ADMIN') {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  const newProductData = await request.json();
  const newProduct = await prisma.product.create({
    data: newProductData,
  });
  return NextResponse.json(newProduct, { status: 201 });
}