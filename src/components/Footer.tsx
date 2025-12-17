"use client"; // This component now uses client-side hooks

import React from 'react';
import Link from 'next/link'; // Import Link for internal navigation
import { useRole } from '@/context/RoleContext'; // Import useRole
import { UserRole } from '@/types/roles'; // Import UserRole

const Footer = () => {
  const { currentRole } = useRole(); // Get current role from context

  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-emerald-400">Almas Medical & Surgical Agency</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Trusted Pharma Distributor — Wholesale Medicine Supply for Pharmacies & Clinics.
            </p>
            <div className="mt-4 text-xs text-gray-500">
                <p>Drug License: 12/AB/3456</p>
                <p>GSTIN: 22ABCDE1234F1Z5</p>
                <p>ISO 9001 Certified</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-200">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/delivery" className="text-gray-400 hover:text-white">Delivery & Logistics</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* B2B Portal */}
          <div>
            <h4 className="font-semibold text-gray-200">B2B Portal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/login" className="text-gray-400 hover:text-white">Client Login</Link></li>
              <li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
              <li><Link href="/dashboard/orders" className="text-gray-400 hover:text-white">My Orders</Link></li>
              <li><Link href="/dashboard/credit" className="text-gray-400 hover:text-white">Credit Ledger</Link></li>
              <li><Link href="/dashboard/invoices" className="text-gray-400 hover:text-white">Invoices</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-200">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white">Return Policy</Link></li>
              <li><Link href="/admin/login" className="text-gray-400 hover:text-white">Admin login</Link></li>
              {currentRole === UserRole.ADMIN && ( // Conditionally render Admin Panel link
                <li><Link href="/admin" className="text-gray-400 hover:text-white">Admin Panel</Link></li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Almas Medical & Surgical Agency. All Rights Reserved.</p>
          <p className="mt-1">Designed for B2B wholesale distribution.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;