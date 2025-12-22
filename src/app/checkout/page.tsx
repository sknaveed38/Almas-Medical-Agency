"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { CreditCard, Truck, Package, DollarSign } from 'lucide-react';

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

  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (cartItems.length === 0) {
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

    if (paymentMethod === 'creditCard') {
      if (!paymentDetails.cardNumber) errors.cardNumber = 'Card Number is required';
      if (!paymentDetails.expiryDate) errors.expiryDate = 'Expiry Date is required';
      if (!paymentDetails.cvv) errors.cvv = 'CVV is required';
      if (!paymentDetails.cardHolderName) errors.cardHolderName = 'Card Holder Name is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Simulating order submission...');
    console.log('Cart Items:', cartItems);
    console.log('Shipping Details:', shippingDetails);
    console.log('Payment Method:', paymentMethod);
    if (paymentMethod === 'creditCard') {
      console.log('Payment Details (Mock):', paymentDetails);
    }

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems,
          shippingDetails,
          paymentMethod,
          paymentDetails: paymentMethod === 'creditCard' ? { ...paymentDetails, cardNumber: '**** **** **** ' + paymentDetails.cardNumber.slice(-4) } : null,
          totalPrice: getTotalPrice(),
        }),
      });

      if (response.ok) {
        clearCart();
        router.push('/dashboard/orders');
      } else {
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
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Truck className="mr-2" /> Shipping Details
          </h2>
          {/* Shipping fields... */}

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4 flex items-center">
            <CreditCard className="mr-2" /> Payment Method
          </h2>
          <div className="flex space-x-4">
            <label className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'creditCard' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}`}>
              <input type="radio" name="paymentMethod" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={() => setPaymentMethod('creditCard')} className="hidden" />
              <CreditCard className="mr-2" />
              <span>Credit Card</span>
            </label>
            <label className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'cod' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}`}>
              <input type="radio" name="paymentMethod" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="hidden" />
              <DollarSign className="mr-2" />
              <span>Cash on Delivery</span>
            </label>
          </div>

          {paymentMethod === 'creditCard' && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Credit Card Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Payment fields... */}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit sticky lg:top-24">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Package className="mr-2" /> Order Summary
          </h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm text-gray-700 py-1">
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
