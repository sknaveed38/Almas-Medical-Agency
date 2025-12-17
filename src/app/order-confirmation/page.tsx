"use client";

import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const OrderConfirmationPage = () => {
  // Optional: You could fetch order details here if an order ID was passed in the URL
  // For this mock implementation, we just display a generic success message.

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <CheckCircle size={64} className="mx-auto text-emerald-500" />
      <h1 className="text-3xl font-bold text-gray-800 mt-4">Order Placed Successfully!</h1>
      <p className="text-lg text-gray-600 mt-2">
        Thank you for your order. Your order has been received and will be processed shortly.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/products" className="bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors">
          Continue Shopping
        </Link>
        <Link href="/dashboard/orders" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
          View My Orders (Mock)
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
