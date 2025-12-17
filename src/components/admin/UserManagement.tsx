"use client";

import React, { useState, useEffect } from 'react';
import { useRole } from '@/context/RoleContext';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  role: UserRole;
  companyName?: string;
  gstin?: string;
}

const UserManagement = () => {
  const { token, currentRole } = useRole();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshUsers, setRefreshUsers] = useState(false); // To trigger refetch

  const fetchUsers = async () => {
    if (!token || currentRole !== UserRole.ADMIN) {
      setError('Unauthorized access');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'X-User-Role': currentRole,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token, currentRole, refreshUsers]); // Refetch when token, role, or refreshUsers changes

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    if (!token || currentRole !== UserRole.ADMIN) {
      alert('Unauthorized to change roles.');
      return;
    }
    if (!window.confirm(`Are you sure you want to change the role of ${userId} to ${newRole}?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-User-Role': currentRole,
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        alert(`User ${userId} role updated to ${newRole} successfully!`);
        setRefreshUsers(prev => !prev); // Trigger refetch
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update user role');
      }
    } catch (err: any) {
      alert(`Error updating role: ${err.message}`);
      console.error('Error updating user role:', err);
    }
  };

  if (loading) return <div className="text-center py-8">Loading users...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  if (!token || currentRole !== UserRole.ADMIN) return <div className="text-center py-8 text-red-600">Access Denied: Admin login required.</div>;


  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Company Name</th>
              <th className="py-2 px-4 border-b">Current Role</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.companyName || 'N/A'}</td>
                <td className="py-2 px-4 border-b">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value as UserRole)}
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {Object.values(UserRole).map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border-b">
                  {/* No other actions yet, role change is primary */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
