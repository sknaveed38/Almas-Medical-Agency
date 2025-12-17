"use client";

import { useEffect, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import CategoryShortcuts from '@/components/home/CategoryShortcuts';
import ProductSection from '@/components/home/ProductSection';
import { Product } from '@/components/ProductCard';
import { isNearExpiry } from '@/utils/productUtils';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  const popularProducts = products.slice(0, 8);
  const nearExpiryProducts = products.filter(product => isNearExpiry(product)).slice(0, 8);

  return (
    <div 
      className="min-h-screen bg-cover bg-no-repeat relative" 
      style={{ backgroundImage: `url('/ba2.jpg')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
       }}
    >
      <div className="container mx-auto px-4 bg-white bg-opacity-70 py-8">
        <HeroSection />
        <CategoryShortcuts />
        <ProductSection
          title="Popular Products"
          products={popularProducts}
          viewAllLink="/products"
        />
        <ProductSection
          title="Near Expiry Deals - Extra Discounts!"
          products={nearExpiryProducts}
          viewAllLink="/products?expiry=near"
          isDeal
        />
      </div>
    </div>
  );
}