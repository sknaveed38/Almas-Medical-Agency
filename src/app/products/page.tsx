import React, { Suspense } from 'react';
import ProductsClientPage from './ProductsClientPage';

export default function ProductsPage() {
  return (
    <Suspense fallback={
        <div className="container mx-auto px-4 py-8 text-center text-lg text-gray-600">
            Loading products...
        </div>
    }>
      <ProductsClientPage />
    </Suspense>
  );
}