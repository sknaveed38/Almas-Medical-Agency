"use client";

import React, { useState, useEffect } from 'react';
import { Product } from '@/components/ProductCard';
import { UserRole } from '@/types/roles';

interface ProductFormProps {
  product?: Product | null;
  onSave: (product: Product) => void;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onClose }) => {
  const [formData, setFormData] = useState<Partial<Product>>(product || {
    pricing: {
      [UserRole.REGULAR]: 0,
      [UserRole.WHOLESALER]: 0,
      [UserRole.DISTRIBUTOR]: 0,
      [UserRole.ADMIN]: 0,
    },
    moq: 1,
    stock_qty: 0,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData(product || {
      pricing: {
        [UserRole.REGULAR]: 0,
        [UserRole.WHOLESALER]: 0,
        [UserRole.DISTRIBUTOR]: 0,
        [UserRole.ADMIN]: 0,
      },
      moq: 1,
      stock_qty: 0,
    });
  }, [product]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Product name is required.';
    if (!formData.brand) newErrors.brand = 'Brand is required.';
    if (!formData.category) newErrors.category = 'Category is required.';
    if (formData.stock_qty === null || formData.stock_qty < 0) newErrors.stock_qty = 'Stock quantity must be a non-negative number.';
    if (formData.moq === null || formData.moq < 1) newErrors.moq = 'MOQ must be at least 1.';
    
    // Pricing validation
    if (!formData.pricing || formData.pricing[UserRole.REGULAR] <= 0) newErrors.regular_price = 'Regular price must be greater than 0.';
    if (!formData.pricing || formData.pricing[UserRole.WHOLESALER] <= 0) newErrors.wholesaler_price = 'Wholesaler price must be greater than 0.';
    if (!formData.pricing || formData.pricing[UserRole.DISTRIBUTOR] <= 0) newErrors.distributor_price = 'Distributor price must be greater than 0.';
    if (!formData.pricing || formData.pricing[UserRole.ADMIN] <= 0) newErrors.admin_price = 'Admin price must be greater than 0.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePricingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const defaultPricing: Record<UserRole, number> = {
        [UserRole.REGULAR]: 0,
        [UserRole.WHOLESALER]: 0,
        [UserRole.DISTRIBUTOR]: 0,
        [UserRole.ADMIN]: 0,
      };
      return {
        ...prev,
        pricing: {
          ...defaultPricing,
          ...prev.pricing,
          [name]: Number(value),
        },
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData as Product);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{product ? 'Edit Product' : 'Add New Product'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Brand</label>
              <input type="text" name="brand" value={formData.brand || ''} onChange={handleChange} className={`mt-1 block w-full border ${errors.brand ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
              {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pack Size</label>
            <input type="text" name="pack_size" value={formData.pack_size || ''} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input type="text" name="category" value={formData.category || ''} onChange={handleChange} className={`mt-1 block w-full border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input type="text" name="image" value={formData.image || ''} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
              <input type="number" name="stock_qty" value={formData.stock_qty || 0} onChange={handleChange} className={`mt-1 block w-full border ${errors.stock_qty ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
              {errors.stock_qty && <p className="text-red-500 text-xs mt-1">{errors.stock_qty}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Minimum Order Quantity (MOQ)</label>
              <input type="number" name="moq" value={formData.moq || 1} onChange={handleChange} className={`mt-1 block w-full border ${errors.moq ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
              {errors.moq && <p className="text-red-500 text-xs mt-1">{errors.moq}</p>}
            </div>
          </div>
          <fieldset className="border p-4 rounded-md">
            <legend className="text-sm font-medium text-gray-700 px-2">Pricing</legend>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Regular</label>
                <input type="number" name={UserRole.REGULAR} value={formData.pricing?.[UserRole.REGULAR] || 0} onChange={handlePricingChange} className={`mt-1 block w-full border ${errors.regular_price ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
                {errors.regular_price && <p className="text-red-500 text-xs mt-1">{errors.regular_price}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Wholesaler</label>
                <input type="number" name={UserRole.WHOLESALER} value={formData.pricing?.[UserRole.WHOLESALER] || 0} onChange={handlePricingChange} className={`mt-1 block w-full border ${errors.wholesaler_price ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
                {errors.wholesaler_price && <p className="text-red-500 text-xs mt-1">{errors.wholesaler_price}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Distributor</label>
                <input type="number" name={UserRole.DISTRIBUTOR} value={formData.pricing?.[UserRole.DISTRIBUTOR] || 0} onChange={handlePricingChange} className={`mt-1 block w-full border ${errors.distributor_price ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
                {errors.distributor_price && <p className="text-red-500 text-xs mt-1">{errors.distributor_price}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Admin</label>
                <input type="number" name={UserRole.ADMIN} value={formData.pricing?.[UserRole.ADMIN] || 0} onChange={handlePricingChange} className={`mt-1 block w-full border ${errors.admin_price ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`} />
                {errors.admin_price && <p className="text-red-500 text-xs mt-1">{errors.admin_price}</p>}
              </div>
            </div>
          </fieldset>
          <div className="flex justify-end space-x-4 mt-8">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">{product ? 'Update' : 'Save'} Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
