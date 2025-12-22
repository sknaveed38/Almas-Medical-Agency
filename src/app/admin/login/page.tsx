"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useRole } from '@/context/RoleContext';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useRole();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user.email, data.role, data.token);
        router.push('/admin');
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (err: any) {
      setError('An unexpected error occurred during login. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(/login.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-md w-full space-y-8 p-10 bg-white bg-opacity-90 rounded-2xl shadow-2xl fade-in-up">
        <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4 flex justify-center space-x-2 flex-wrap">
          <Link href="/" className="font-medium text-emerald-600 hover:text-emerald-500">
            Go back to home
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/legal" className="font-medium text-gray-600 hover:text-emerald-500">
            Legal
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/privacy-policy" className="font-medium text-gray-600 hover:text-emerald-500">
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/terms-conditions" className="font-medium text-gray-600 hover:text-emerald-500">
            Terms & Conditions
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/return-policy" className="font-medium text-gray-600 hover:text-emerald-500">
            Return Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
