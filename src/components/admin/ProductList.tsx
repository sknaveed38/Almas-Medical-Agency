"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '@/components/ProductCard';
import { UserRole } from '@/types/roles';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ProductListProps {
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
  refreshTrigger: boolean;
}

type SortKey = keyof Product | 'pricing.REGULAR' | 'pricing.WHOLESALER' | 'pricing.DISTRIBUTOR' | 'pricing.ADMIN';

const ProductList: React.FC<ProductListProps> = ({ onEdit, onDelete, refreshTrigger }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'ascending' | 'descending' } | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products', { cache: 'no-store' });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products in ProductList:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [refreshTrigger]);

  const sortedAndFilteredProducts = useMemo(() => {
    let filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig !== null) {
      filteredProducts.sort((a, b) => {
        const aValue = sortConfig.key.startsWith('pricing.')
          ? a.pricing[sortConfig.key.split('.')[1] as keyof typeof a.pricing]
          : a[sortConfig.key as keyof Product];
        const bValue = sortConfig.key.startsWith('pricing.')
          ? b.pricing[sortConfig.key.split('.')[1] as keyof typeof b.pricing]
          : b[sortConfig.key as keyof Product];

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredProducts;
  }, [products, searchTerm, sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: SortKey) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    if (sortConfig.direction === 'ascending') {
      return <ChevronUp className="inline-block w-4 h-4 ml-1" />;
    }
    return <ChevronDown className="inline-block w-4 h-4 ml-1" />;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Manage Products</h2>
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('name')}>Name {getSortIcon('name')}</th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('brand')}>Brand {getSortIcon('brand')}</th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('category')}>Category {getSortIcon('category')}</th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('stock_qty')}>Stock {getSortIcon('stock_qty')}</th>
              <th className="py-2 px-4 border-b text-right cursor-pointer" onClick={() => requestSort('pricing.REGULAR')}>Regular Price {getSortIcon('pricing.REGULAR')}</th>
              <th className="py-2 px-4 border-b text-right cursor-pointer" onClick={() => requestSort('pricing.WHOLESALER')}>Wholesaler Price {getSortIcon('pricing.WHOLESALER')}</th>
              <th className="py-2 px-4 border-b text-right cursor-pointer" onClick={() => requestSort('pricing.DISTRIBUTOR')}>Distributor Price {getSortIcon('pricing.DISTRIBUTOR')}</th>
              <th className="py-2 px-4 border-b text-right cursor-pointer" onClick={() => requestSort('pricing.ADMIN')}>Admin Price {getSortIcon('pricing.ADMIN')}</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.brand}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b">{product.stock_qty}</td>
                <td className="py-2 px-4 border-b text-right">₹{product.pricing[UserRole.REGULAR.toUpperCase()]?.toFixed(2) || 'N/A'}</td>
                <td className="py-2 px-4 border-b text-right">₹{product.pricing[UserRole.WHOLESALER.toUpperCase()]?.toFixed(2) || 'N/A'}</td>
                <td className="py-2 px-4 border-b text-right">₹{product.pricing[UserRole.DISTRIBUTOR.toUpperCase()]?.toFixed(2) || 'N/A'}</td>
                <td className="py-2 px-4 border-b text-right">₹{product.pricing[UserRole.ADMIN.toUpperCase()]?.toFixed(2) || 'N/A'}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => onEdit(product)} className="text-emerald-600 hover:underline mr-4">Edit</button>
                  <button onClick={() => onDelete(product.product_id_str)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
