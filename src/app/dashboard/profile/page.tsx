"use client";

import React from 'react';
import { mockUserProfile } from '@/data/userProfile';
import { useRole } from '@/context/RoleContext';
import { UserRole } from '@/types/roles';
import { User, Mail, Building, Phone, MapPin, Edit, Lock } from 'lucide-react';
import Link from 'next/link';

const UserProfilePage = () => {
  const { isLoggedIn, currentRole } = useRole();

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Lock className="w-24 h-24 text-red-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Access Denied</h1>
        <p className="text-lg text-gray-600">Please <Link href="/login" className="text-emerald-600 hover:underline">login</Link> to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <button className="flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors">
            <Edit className="w-5 h-5 mr-2" />
            Edit Profile
          </button>
        </div>

        <div className="space-y-6">
          {/* Personal Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
              <User className="w-5 h-5 mr-2 text-emerald-600" /> Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-medium">Full Name:</p>
                <p>{mockUserProfile.name}</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p>{mockUserProfile.email}</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p>{mockUserProfile.phone}</p>
              </div>
              <div>
                <p className="font-medium">Role:</p>
                <p>{currentRole}</p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
              <Building className="w-5 h-5 mr-2 text-emerald-600" /> Company Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-medium">Company Name:</p>
                <p>{mockUserProfile.companyName}</p>
              </div>
              <div>
                <p className="font-medium">GSTIN:</p>
                <p>{mockUserProfile.gstin}</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-emerald-600" /> Address
            </h2>
            <div className="text-gray-700">
              <p>{mockUserProfile.address.street}</p>
              <p>{mockUserProfile.address.city}, {mockUserProfile.address.state} - {mockUserProfile.address.zip}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
