"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Product } from '@/components/ProductCard'; // Assuming Product interface is exportable
import { useRole } from '@/context/RoleContext';
import { UserRole } from '@/types/roles';

// Define the structure of a cart item
interface CartItem {
  product_id: string;
  name: string;
  brand: string;
  image: string;
  price: number; // Price at the time of adding to cart
  quantity: number;
  moq: number; // Minimum Order Quantity for this product
}

// Define the shape of the CartContext
interface CartContextType {
  cartItems: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Create the context with a default undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap the application
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { currentRole } = useRole();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addItem = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product_id === product.product_id);

      if (existingItem) {
        // Update quantity of existing item
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity < product.moq) {
          alert(`Quantity for ${product.name} must be at least ${product.moq} units.`);
          return prevItems;
        }
        return prevItems.map((item) =>
          item.product_id === product.product_id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        // Add new item
        if (quantity < product.moq) {
            alert(`Quantity for ${product.name} must be at least ${product.moq} units.`);
            return prevItems;
        }
        // Safely get price, default to 0 if undefined/null
        const itemPrice = product.pricing?.[currentRole] || product.pricing?.[UserRole.REGULAR] || product.price_mrp || 0;
        return [...prevItems, {
            product_id: product.product_id,
            name: product.name,
            brand: product.brand,
            image: product.image,
            price: itemPrice, // Use current role's price or MRP
            quantity,
            moq: product.moq,
        }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== productId));
  };

  const updateItemQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.product_id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0) // Remove if quantity becomes 0 or less
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateItemQuantity, clearCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
