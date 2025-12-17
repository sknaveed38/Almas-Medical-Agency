"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CreditCard, Truck, Package } from 'lucide-react';

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (cartItems.length === 0) {
      // If cart is empty, redirect to cart page
      router.push('/cart');
    }
  }, [cartItems, router]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!shippingDetails.fullName) errors.fullName = 'Full Name is required';
    if (!shippingDetails.address) errors.address = 'Address is required';
    if (!shippingDetails.city) errors.city = 'City is required';
    if (!shippingDetails.postalCode) errors.postalCode = 'Postal Code is required';
    if (!shippingDetails.country) errors.country = 'Country is required';
    if (!shippingDetails.phone) errors.phone = 'Phone number is required';

    // Basic payment validation for mock data
    if (!paymentDetails.cardNumber) errors.cardNumber = 'Card Number is required';
    if (!paymentDetails.expiryDate) errors.expiryDate = 'Expiry Date is required';
    if (!paymentDetails.cvv) errors.cvv = 'CVV is required';
    if (!paymentDetails.cardHolderName) errors.cardHolderName = 'Card Holder Name is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate API call to backend for order processing
    // In a real application, this would send data to a secure backend endpoint
    console.log('Simulating order submission...');
    console.log('Cart Items:', cartItems);
    console.log('Shipping Details:', shippingDetails);
    console.log('Payment Details (Mock):', paymentDetails);

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems,
          shippingDetails,
          paymentDetails: { ...paymentDetails, cardNumber: '**** **** **** ' + paymentDetails.cardNumber.slice(-4) }, // Mask card number
          totalPrice: getTotalPrice(),
        }),
      });

      if (response.ok) {
        // Simulate success
        clearCart(); // Clear cart after successful order
        router.push('/dashboard/orders');
      } else {
        // Simulate failure
        alert('Order placement failed. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing your order.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Details */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Truck className="mr-2" /> Shipping Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={shippingDetails.fullName}
                onChange={(e) => setShippingDetails({ ...shippingDetails, fullName: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.fullName && <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={shippingDetails.address}
                onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={shippingDetails.city}
                onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="postalCode" className="text-sm font-medium text-gray-700 mb-1">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={(e) => setShippingDetails({ ...shippingDetails, postalCode: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.postalCode && <p className="text-red-500 text-xs mt-1">{formErrors.postalCode}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="country" className="text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={shippingDetails.country}
                onChange={(e) => setShippingDetails({ ...shippingDetails, country: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.country && <p className="text-red-500 text-xs mt-1">{formErrors.country}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={shippingDetails.phone}
                onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4 flex items-center">
            <CreditCard className="mr-2" /> Mock Payment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="cardNumber" className="text-sm font-medium text-gray-700 mb-1">Card Number (Mock)</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.cardNumber && <p className="text-red-500 text-xs mt-1">{formErrors.cardNumber}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="expiryDate" className="text-sm font-medium text-gray-700 mb-1">Expiry Date (MM/YY)</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.expiryDate && <p className="text-red-500 text-xs mt-1">{formErrors.expiryDate}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="cvv" className="text-sm font-medium text-gray-700 mb-1">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.cvv && <p className="text-red-500 text-xs mt-1">{formErrors.cvv}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="cardHolderName" className="text-sm font-medium text-gray-700 mb-1">Card Holder Name</label>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                value={paymentDetails.cardHolderName}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardHolderName: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {formErrors.cardHolderName && <p className="text-red-500 text-xs mt-1">{formErrors.cardHolderName}</p>}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit sticky lg:top-24">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Package className="mr-2" /> Order Summary
          </h2>
          {cartItems.map((item) => (
            <div key={item.product_id} className="flex justify-between text-sm text-gray-700 py-1">
              <span>{item.name} ({item.quantity}x)</span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>₹{getTotalPrice().toFixed(2)}</span>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
