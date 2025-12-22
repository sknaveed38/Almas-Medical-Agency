"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { adminSalesData } from '@/data/admin';
import { Upload, BarChart, PlusCircle } from 'lucide-react';
import { useRole } from '@/context/RoleContext';
import { UserRole } from '@/types/roles';
import ProductList from '@/components/admin/ProductList';
import ProductForm from '@/components/admin/ProductForm';
import { Product } from '@/components/ProductCard';
import UserManagement from '@/components/admin/UserManagement';
import ConfirmationModal from '@/components/common/ConfirmationModal';
import toast from 'react-hot-toast';

const AdminDashboardPage = () => {
  const { currentRole, loading: roleLoading } = useRole();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [refreshProducts, setRefreshProducts] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
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
      toast.success(`Simulating upload of ${selectedFile.name}.`);
      setSelectedFile(null);
    } else {
      toast.error('Please select an Excel file to upload.');
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

  const handleSaveProduct = async (product: Product) => {
    try {
      let response;
      if (product.id) {
        response = await fetch(`/api/products/${product.product_id_str}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-User-Role': currentRole,
          },
          body: JSON.stringify(product),
        });
      } else {
        response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-User-Role': currentRole,
          },
          body: JSON.stringify(product),
        });
      }

      if (response.ok) {
        toast.success('Product saved successfully!');
        setRefreshProducts(prev => !prev);
        handleCloseModal();
      } else {
        const errorData = await response.json();
        toast.error(`Failed to save product: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      toast.error('An error occurred while saving the product.');
    }
  };

  const handleDeleteConfirmation = (productId: string) => {
    setProductToDelete(productId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteProduct = async () => {
    if (!productToDelete) return;

    try {
      const response = await fetch(`/api/products/${productToDelete}`, {
        method: 'DELETE',
        headers: {
          'X-User-Role': currentRole,
        },
      });

      if (response.ok) {
        toast.success('Product deleted successfully!');
        setRefreshProducts(prev => !prev);
      } else {
        const errorData = await response.json();
        toast.error(`Failed to delete product: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      toast.error('An error occurred while deleting the product.');
    } finally {
      setIsDeleteModalOpen(false);
      setProductToDelete(null);
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

      <ProductList onEdit={(product) => handleOpenModal(product)} onDelete={handleDeleteConfirmation} refreshTrigger={refreshProducts} />

      {isModalOpen && (
        <ProductForm
          product={editingProduct}
          onSave={handleSaveProduct}
          onClose={handleCloseModal}
        />
      )}

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteProduct}
        title="Confirm Deletion"
        message="Are you sure you want to delete this product? This action cannot be undone."
      />

      <UserManagement />

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