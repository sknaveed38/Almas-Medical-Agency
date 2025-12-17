"use client";

import React, { useState, useMemo, useEffect } from 'react';
import ProductCard, { Product, Batch } from '@/components/ProductCard';
import { UserRole } from '@/types/roles';
import { isNearExpiry } from '@/utils/productUtils';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams

const ProductsClientPage = () => {
  const searchParams = useSearchParams(); // Get search params
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  const [showNearExpiry, setShowNearExpiry] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Effect to read URL params on initial load
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
    if (searchParams.get('expiry') === 'near') {
      setShowNearExpiry(true);
    }
  }, [searchParams]); // Re-run if searchParams change

  const categories = useMemo(() => ['All', ...new Set(products.map(p => p.category))].sort(), [products]);
  const brands = useMemo(() => ['All', ...new Set(products.map(p => p.brand))].sort(), [products]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedBrand !== 'All') {
      filtered = filtered.filter(p => p.brand === selectedBrand);
    }

    if (showNearExpiry) {
      filtered = filtered.filter(p => isNearExpiry(p));
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'price-asc':
          const priceA = a.pricing[UserRole.REGULAR];
          const priceB = b.pricing[UserRole.REGULAR];
          return priceA - priceB;
        case 'price-desc':
          const priceADesc = a.pricing[UserRole.REGULAR];
          const priceBDesc = b.pricing[UserRole.REGULAR];
          return priceBDesc - priceADesc;
        case 'expiry-asc':
            const getEarliestExpiry = (product: typeof a) => {
                if (!product.batches || product.batches.length === 0) return new Date('9999-12-31');
                return new Date(Math.min(...product.batches.map((b: Batch) => new Date(b.expiry).getTime())));
            };
            return getEarliestExpiry(a).getTime() - getEarliestExpiry(b).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, selectedCategory, selectedBrand, sortBy, showNearExpiry]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Wholesale Catalogue</h1>

      {/* Filters and Sort */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <label htmlFor="category-filter" className="text-gray-700 font-medium">Category:</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="brand-filter" className="text-gray-700 font-medium">Brand:</label>
          <select
            id="brand-filter"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort-by" className="text-gray-700 font-medium">Sort By:</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="expiry-asc">Near Expiry First</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="near-expiry-checkbox"
            checked={showNearExpiry}
            onChange={(e) => setShowNearExpiry(e.target.checked)}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label htmlFor="near-expiry-checkbox" className="text-gray-700 font-medium">Show Near Expiry Deals</label>
        </div>
      </div>

      {/* Product Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-600">No products found matching your criteria.</p>
          <p className="text-md text-gray-500">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsClientPage;
