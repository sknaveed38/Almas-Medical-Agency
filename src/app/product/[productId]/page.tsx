"use client";

import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { ShoppingCart, CheckCircle, Shield, Truck, CalendarDays, Stethoscope } from 'lucide-react';
import { useRole } from '@/context/RoleContext';
import { UserRole } from '@/types/roles';
import { isNearExpiry } from '@/utils/productUtils';
import { Product } from '@/components/ProductCard'; // Import Product interface
import Link from 'next/link';
import { useCart } from '@/context/CartContext'; // Import useCart
import { useRef, useState } from 'react'; // Import useRef and useState

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductDetailPage = ({ params }: ProductPageProps) => {
  const { productId } = params;
  const { currentRole, isLoggedIn } = useRole();
  const { addItem } = useCart(); // Use cart context
  const quantityRef = useRef<HTMLInputElement>(null); // Ref for quantity input
  
  const product: Product | undefined = products.find((p) => p.product_id === productId);

  if (!product) {
    notFound();
  }

  const price = product.pricing[currentRole] || product.pricing[UserRole.REGULAR];
  const productIsNearExpiry = isNearExpiry(product);

  let currentStockBadge = product.stock_badge;
  if (product.stock_badge === 'Out of stock') {
    currentStockBadge = 'Out of stock';
  } else if (product.stock_badge === 'Low stock') {
    currentStockBadge = 'Low stock';
  } else if (productIsNearExpiry) {
    currentStockBadge = 'Near expiry — discounted';
  } else {
    currentStockBadge = 'In stock'; // Default if no other specific status
  }

  const stockBadgeClasses = {
    'In stock': 'bg-emerald-100 text-emerald-800',
    'Low stock': 'bg-yellow-100 text-yellow-800',
    'Out of stock': 'bg-red-100 text-red-800',
    'Near expiry — discounted': 'bg-blue-100 text-blue-800',
  };

  const handleAddToCart = () => {
    const quantity = parseInt(quantityRef.current?.value || '0', 10);
    if (isNaN(quantity) || quantity < product.moq) {
      alert(`Please enter a quantity of at least ${product.moq} units.`);
      return;
    }
    addItem(product, quantity);
    alert(`Added ${quantity} of ${product.name} to Bulk Cart.`);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-96 object-contain"
            />
          </div>

          {/* Product Details */}
          <div>
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${stockBadgeClasses[currentStockBadge]}`}>
              {currentStockBadge}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mt-4">{product.name}</h1>
            <p className="text-lg text-gray-500 mt-2">
              By <span className="font-semibold text-emerald-600">{product.brand}</span>
            </p>
            <p className="text-md text-gray-600 mt-1">
              Generic Salt: <span className="font-medium">{product.salt}</span>
            </p>

            {/* Pricing */}
            <div className="mt-6">
              {isLoggedIn ? (
                <p className="text-4xl font-bold text-emerald-700">
                  ₹{price.toFixed(2)}
                  <span className="text-lg font-normal text-gray-500"> / box ({currentRole})</span>
                </p>
              ) : (
                <p className="text-4xl font-bold text-gray-500">
                  <Link href="/login" className="text-emerald-600 hover:underline">Login</Link> to view price
                </p>
              )}
              <p className="text-md text-gray-500 line-through mt-1">
                MRP: ₹{product.price_mrp.toFixed(2)}
              </p>
            </div>

            {/* Prescription Disclaimer */}
            {product.is_prescription_required && (
              <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-lg flex items-center">
                <Stethoscope className="w-6 h-6 text-red-500 mr-3" />
                <p className="text-sm text-red-700 font-medium">
                  Caution: This is a prescription medicine. It should be used only under medical supervision.
                </p>
              </div>
            )}

            <div className="mt-6 border-t pt-6">
              <div className="space-y-4 text-gray-700">
                <p><span className="font-semibold">Pack Size:</span> {product.pack_size}</p>
                <p><span className="font-semibold">Minimum Order Quantity (MOQ):</span> {product.moq} units</p>
                <p><span className="font-semibold">GST Rate:</span> {product.gst_rate}%</p>
                <p><span className="font-semibold">HSN Code:</span> {product.hsn_code}</p>
              </div>
            </div>

            {/* Batch Details */}
            {product.batches && product.batches.length > 0 && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Batches</h3>
                <ul className="space-y-2">
                  {product.batches.map((batch) => {
                    const expiryDate = new Date(batch.expiry);
                    const now = new Date();
                    const threeMonthsFromNow = new Date();
                    threeMonthsFromNow.setMonth(now.getMonth() + 3);

                    const isBatchNearExpiry = expiryDate <= threeMonthsFromNow && expiryDate >= now;

                    return (
                      <li key={batch.batch_no} className={`flex items-center p-3 rounded-md ${isBatchNearExpiry ? 'bg-red-50 border border-red-300' : 'bg-gray-50'}`}>
                        <CalendarDays className={`w-5 h-5 mr-3 ${isBatchNearExpiry ? 'text-red-500' : 'text-gray-500'}`} />
                        <div>
                          <p className="font-medium text-gray-800">Batch No: {batch.batch_no}</p>
                          <p className={`text-sm ${isBatchNearExpiry ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                            Expiry: {expiryDate.toLocaleDateString('en-US')} ({batch.qty} units)
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className="mt-8 flex items-center gap-4">
              <input 
                type="number" 
                defaultValue={product.moq}
                min={product.moq}
                className="w-24 px-4 py-3 border border-gray-300 rounded-lg text-center font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                disabled={product.stock_badge === 'Out of stock' || !isLoggedIn}
                ref={quantityRef} // Attach ref
              />
              <button 
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${
                  product.stock_badge === 'Out of stock' || !isLoggedIn
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
                }`}
                disabled={product.stock_badge === 'Out of stock' || !isLoggedIn}
                onClick={handleAddToCart} // Attach onClick handler
              >
                <ShoppingCart className="mr-3" />
                Add to Bulk Cart
              </button>
            </div>
             <p className="text-center text-gray-500 text-sm mt-3">
                {product.stock_badge !== 'Out of stock' ? 'Dispatch in 24–48 hrs' : 'Currently unavailable'}
             </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 border-t pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <CheckCircle className="w-10 h-10 text-emerald-500 mb-2"/>
                    <h4 className="font-semibold">Quality Assured</h4>
                    <p className="text-sm text-gray-600">100% genuine products from licensed sources.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Shield className="w-10 h-10 text-emerald-500 mb-2"/>
                    <h4 className="font-semibold">Secure Payments</h4>
                    <p className="text-sm text-gray-600">GST-compliant invoicing and secure payment gateway.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Truck className="w-10 h-10 text-emerald-500 mb-2"/>
                    <h4 className="font-semibold">Reliable Delivery</h4>
                    <p className="text-sm text-gray-600">Fast and reliable delivery across the region.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;