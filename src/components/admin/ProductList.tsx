"use client";

import React, { useState, useEffect } from 'react';
import { Product } from '@/components/ProductCard';
import { UserRole } from '@/types/roles';

interface ProductListProps {
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
  refreshTrigger: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ onEdit, onDelete, refreshTrigger }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log('ProductList: API data received:', data);
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products in ProductList:", error);
      // Optionally, set an error state or show a message to the user
    }
  };

  // Fetch products on component mount and when refreshTrigger changes
  useEffect(() => {
    fetchProducts();
  }, [refreshTrigger]); // Dependency on refreshTrigger

  console.log('ProductList: products state for rendering:', products);

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Products</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Brand</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b text-right">Regular Price</th>
              <th className="py-2 px-4 border-b text-right">Wholesaler Price</th>
              <th className="py-2 px-4 border-b text-right">Distributor Price</th>
              <th className="py-2 px-4 border-b text-right">Admin Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
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
