"use client";

import React from 'react';
import { orders } from '@/data/orders';
import { ShoppingCart, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const OrderHistoryPage = () => {
  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleReorder = (orderId: string) => {
    alert(`Items from order #${orderId} have been added to your cart! (Simulated)`);
    // In a real application, this would dispatch an action to add items to the cart state/backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Order History</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have no past orders.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Order #{order.id}</h2>
                  <p className="text-sm text-gray-500">Placed on: {order.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClasses(order.status)}`}>
                    {order.status === 'Delivered' && <CheckCircle className="inline-block w-4 h-4 mr-1" />}
                    {order.status === 'Shipped' && <Truck className="inline-block w-4 h-4 mr-1" />}
                    {order.status === 'Processing' && <Clock className="inline-block w-4 h-4 mr-1" />}
                    {order.status}
                  </span>
                  <button
                    onClick={() => handleReorder(order.id)}
                    className="flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Reorder
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-medium">Total: ₹{order.totalAmount.toLocaleString('en-IN')}</p>
              </div>

              {/* Order Items (Optional - can be expanded) */}
              {/*
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Items:</p>
                <ul className="list-disc list-inside">
                  {order.items.map((item, index) => (
                    <li key={index}>{item.productId} x {item.quantity}</li>
                  ))}
                </ul>
              </div>
              */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
