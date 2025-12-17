"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useRole } from '@/context/RoleContext';
import { UserRole } from '@/types/roles';
import { isNearExpiry, getSoonestExpiry } from '@/utils/productUtils'; // Import the helpers
import Link from 'next/link';
import { useCart } from '@/context/CartContext'; // Import useCart

export interface Batch {
  batch_no: string;
  expiry: string; // YYYY-MM-DD
  qty: number;
}

export interface Product { // Exported for productUtils.ts
  id: string;
  brand: string;
  name: string;
  salt: string; // Added salt property
  pack_size: string;
  pricing: any;
  price_mrp: number; // Added price_mrp property
  moq: number;
  stock_qty: number;
  category: string;
  image: string;
  stock_badge: 'In stock' | 'Low stock' | 'Out of stock' | 'Near expiry — discounted';
  batches?: any; // Make batches optional
  is_prescription_required?: boolean; // Added for Request 3
  gst_rate: number; // Added gst_rate property
  hsn_code: string; // Added hsn_code property
}

interface ProductCardProps {
  product: Product;
}

const stockBadgeClasses = {
  'In stock': 'bg-emerald-100 text-emerald-800',
  'Low stock': 'bg-yellow-100 text-yellow-800',
  'Out of stock': 'bg-red-100 text-red-800',
  'Near expiry — discounted': 'bg-blue-100 text-blue-800',
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentRole, isLoggedIn } = useRole();
  const { addItem } = useCart(); // Use cart context
  const isProductNearExpiry = isNearExpiry(product);
  const soonestExpiry = getSoonestExpiry(product);
  const quantityRef = useRef<HTMLInputElement>(null); // Ref for quantity input

  let currentStockBadge = product.stock_badge;
  if (isProductNearExpiry && product.stock_badge !== 'Out of stock') {
    currentStockBadge = 'Near expiry — discounted';
  }

  const isOutOfStock = currentStockBadge === 'Out of stock';
  // Safely get price, default to 0 if undefined/null, ensure it's a number
  const price = product.pricing?.[currentRole] || product.pricing?.[UserRole.REGULAR] || 0;

  const handleAddToCart = () => {
    const quantity = parseInt(quantityRef.current?.value || '0', 10);
    if (isNaN(quantity) || quantity < product.moq) {
      alert(`Please enter a quantity of at least ${product.moq} units.`);
      return;
    }
    addItem(product, quantity); // Use addItem from context
    alert(`Added ${quantity} of ${product.name} to cart.`);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 bg-white">
      <div>
        <div className="relative w-full h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
          {isProductNearExpiry && (
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg">DEAL</div>
          )}
          <img src={product.image} alt={product.name} className="max-h-full max-w-full p-2 object-contain" />
           <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${stockBadgeClasses[currentStockBadge]}`}>
            {currentStockBadge}
          </span>
        </div>
        
        <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
        <h3 className="text-md font-semibold text-gray-800 mt-1 truncate" title={product.name}>
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{product.pack_size}</p>
        {isProductNearExpiry && soonestExpiry && (
          <p className="text-sm text-red-600 mt-1">Expires: {new Date(soonestExpiry).toLocaleDateString()}</p>
        )}
        
        <div className="mt-2">
            <p className="text-xs text-gray-500">
                MOQ: <span className="font-bold text-gray-700">{product.moq} units</span>
            </p>
        </div>
      </div>

      <div className="mt-4">
        {isLoggedIn ? (
          <p className="text-lg font-bold text-emerald-600">
            {typeof price === 'number' ? `₹${price.toFixed(2)}` : 'N/A'}
            <span className="text-sm font-normal text-gray-500">/box</span>
          </p>
        ) : (
          <p className="text-lg font-bold text-gray-500">
            <Link href="/login" className="text-emerald-600 hover:underline">Login</Link> to view price
          </p>
        )}
        
        <div className="mt-3 flex items-center space-x-2">
            <input 
                type="number" 
                min={product.moq}
                defaultValue={product.moq}
                className="w-20 px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-center"
                disabled={isOutOfStock || !isLoggedIn}
                ref={quantityRef} // Attach ref
            />
            <button 
              className={`w-full flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isOutOfStock || !isLoggedIn
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
              }`}
              disabled={isOutOfStock || !isLoggedIn}
              onClick={handleAddToCart} // Attach onClick handler
            >
              <ShoppingCart size={16} className="mr-2"/>
              Add
            </button>
        </div>
        {isOutOfStock && <p className="text-center text-red-600 text-xs mt-2">Currently unavailable</p>}
        {!isOutOfStock && <p className="text-center text-gray-500 text-xs mt-2">Dispatch in 24-48 hrs</p>}
      </div>
    </div>
  );
};

export default ProductCard;
