import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { UserRole } from '@/types/roles';

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const product = await prisma.product.findUnique({
    where: { product_id_str: id },
  });

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const userRole = request.headers.get('X-User-Role');
  if (userRole !== UserRole.ADMIN) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  const updatedProductData = await request.json();

  // Remove fields that should not be updated by the form
  delete updatedProductData.id;
  delete updatedProductData.createdAt;
  delete updatedProductData.updatedAt;
  
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

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  
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