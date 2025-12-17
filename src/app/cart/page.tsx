"use client";

import { useCart } from '@/context/CartContext'; // Import useCart
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'; // Import icons
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import React from 'react'; // Keep React import

const CartPage = () => {
  const { cartItems, removeItem, updateItemQuantity, getTotalItems, getTotalPrice } = useCart();
  const router = useRouter(); // Initialize useRouter

  const handleUpdateQuantity = (productId: string, newQuantity: number, moq: number) => {
    if (newQuantity < moq) {
      alert(`Quantity must be at least ${moq} units.`);
      return;
    }
    updateItemQuantity(productId, newQuantity);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <ShoppingCart size={64} className="mx-auto text-gray-400" />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mt-2">Looks like you haven't added any items to your cart yet.</p>
        <Link href="/products" className="mt-6 inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Bulk Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
              <div className="w-24 h-24 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.brand}</p>
                <p className="text-md font-medium text-emerald-600 mt-1">₹{(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-xs text-gray-500">MOQ: {item.moq} units</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.moq)}
                  disabled={item.quantity <= item.moq}
                  className="p-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  min={item.moq}
                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value, 10), item.moq)}
                  className="w-16 px-2 py-1.5 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.moq)}
                  className="p-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <Plus size={16} />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 rounded-full bg-red-100 text-red-700 hover:bg-red-200 ml-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700 py-2 border-b border-gray-200">
            <span>Total Items</span>
            <span>{getTotalItems()}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800 pt-4">
            <span>Subtotal</span>
            <span>₹{getTotalPrice().toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors" onClick={() => router.push('/checkout')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
