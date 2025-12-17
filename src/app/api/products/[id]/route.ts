import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { UserRole } from '@/types/roles';

interface RouteContext {
  params: { id: string };
}

export async function GET(request: Request, context: RouteContext) {
  const { id } = context.params;

  const product = await prisma.product.findUnique({
    where: { product_id_str: id },
  });

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

export async function PUT(request: Request, context: RouteContext) {
  const { id } = context.params;

  const userRole = request.headers.get('X-User-Role');
  if (userRole !== UserRole.ADMIN) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  const updatedProductData = await request.json();
  
  try {
    const updatedProduct = await prisma.product.update({
      where: { product_id_str: id },
      data: updatedProductData,
    });
    return NextResponse.json(updatedProduct);
  } catch (error) {
    // Handle cases where the product doesn't exist
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

export async function DELETE(request: Request, context: RouteContext) {
  const { id } = context.params;
  
  const userRole = request.headers.get('X-User-Role');
  if (userRole !== UserRole.ADMIN) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }
  
  try {
    await prisma.product.delete({
      where: { product_id_str: id },
    });
    return NextResponse.json({ message: 'Product deleted' });
  } catch (error) {
    // Handle cases where the product doesn't exist
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}