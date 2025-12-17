"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { adminSalesData } from '@/data/admin';
import { Upload, BarChart, Lock, PlusCircle } from 'lucide-react';
import { useRole } from '@/context/RoleContext';
import { UserRole } from '@/types/roles';
import ProductList from '@/components/admin/ProductList';
import ProductForm from '@/components/admin/ProductForm';
import { Product } from '@/components/ProductCard';
import UserManagement from '@/components/admin/UserManagement'; // Import UserManagement

const AdminDashboardPage = () => {
  const { currentRole, loading: roleLoading } = useRole(); // Get loading state from useRole
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [refreshProducts, setRefreshProducts] = useState(false);
  const router = useRouter();

  const handleOpenModal = (product: Product | null) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Simulating upload of ${selectedFile.name}. (Actual upload logic not implemented)`);
      setSelectedFile(null);
    } else {
      alert('Please select an Excel file to upload.');
    }
  };

  useEffect(() => {
    if (!roleLoading && currentRole !== UserRole.ADMIN) {
      router.push('/admin/login');
    }
  }, [currentRole, roleLoading, router]);

  if (roleLoading || currentRole !== UserRole.ADMIN) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-lg text-gray-600">Loading admin panel or redirecting...</p>
      </div>
    );
  }

  // ... (rest of the component)

  const handleSaveProduct = async (product: Product) => {
    try {
      let response;
      if (product.id) {
        // Update existing product
        response = await fetch(`/api/products/${product.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-User-Role': currentRole, // Send role for authorization
          },
          body: JSON.stringify(product),
        });
      } else {
        // Add new product
        response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-User-Role': currentRole, // Send role for authorization
          },
          body: JSON.stringify(product),
        });
      }

      if (response.ok) {
        console.log('Product saved successfully!');
        setRefreshProducts(prev => !prev); // Toggle state to trigger refresh
        handleCloseModal();
      } else {
        const errorData = await response.json();
        console.error('Failed to save product:', errorData.message || response.statusText);
        alert(`Failed to save product: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Error saving product:', error);
      alert('An error occurred while saving the product.');
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'X-User-Role': currentRole, // Send role for authorization
        },
      });

      if (response.ok) {
        console.log('Product deleted successfully!');
        setRefreshProducts(prev => !prev); // Trigger refresh
      } else {
        const errorData = await response.json();
        console.error('Failed to delete product:', errorData.message || response.statusText);
        alert(`Failed to delete product: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('An error occurred while deleting the product.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={() => handleOpenModal(null)}
          className="bg-emerald-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center"
        >
          <PlusCircle size={20} className="mr-2" />
          Add New Product
        </button>
      </div>

      {/* Product List */}
      <ProductList onEdit={(product) => handleOpenModal(product)} onDelete={handleDeleteProduct} refreshTrigger={refreshProducts} />

      {isModalOpen && (
        <ProductForm
          product={editingProduct}
          onSave={handleSaveProduct}
          onClose={handleCloseModal}
        />
      )}

      {/* User Management Section */}
      <UserManagement />

      {/* Bulk Excel Upload */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Upload className="w-6 h-6 text-blue-500 mr-2" /> Bulk Inventory Upload (Excel)
        </h2>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-emerald-50 file:text-emerald-700
              hover:file:bg-emerald-100"
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 disabled:bg-gray-400 transition-colors"
          >
            Upload
          </button>
        </div>
        {selectedFile && <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>}
      </div>

      {/* Sales Charts */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <BarChart className="w-6 h-6 text-purple-500 mr-2" /> Monthly Sales Overview
        </h2>
        <div className="h-64 w-full bg-gray-50 rounded-lg p-4 flex items-end justify-around">
          {adminSalesData.map((data) => (
            <div key={data.month} className="flex flex-col items-center h-full justify-end">
              <div
                className="bg-purple-400 rounded-t-md w-8 hover:bg-purple-600 transition-colors"
                style={{ height: `${(data.sales / Math.max(...adminSalesData.map(d => d.sales))) * 90}%` }}
                title={`Sales in ${data.month}: ₹${data.sales.toLocaleString()}`}
              ></div>
              <p className="text-xs text-gray-600 mt-1">{data.month}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          (This is a simplified chart. In a real application, a charting library would be used.)
        </p>
      </div>
    </div>
  );
};

export default AdminDashboardPage;