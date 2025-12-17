"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserRole } from '@/types/roles';

// Extend RoleContextType to include token and potentially more user info
interface RoleContextType {
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  isLoggedIn: boolean;
  login: (email: string, role: UserRole, token: string) => void;
  logout: () => void;
  token: string | null;
  userEmail: string | null;
  loading: boolean; // Add loading state back
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>(UserRole.REGULAR);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Initialize loading to true

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      const storedRole = localStorage.getItem('currentRole') as UserRole;
      const storedEmail = localStorage.getItem('currentUserEmail');

      if (storedToken && storedEmail) {
        setToken(storedToken);
        setUserEmail(storedEmail);
        setIsLoggedIn(true);
        if (storedRole) {
          setCurrentRole(storedRole);
        } else {
          try {
            const response = await fetch('/api/auth/user', {
              headers: {
                'Authorization': `Bearer ${storedToken}`,
              },
            });
            if (response.ok) {
              const user = await response.json();
              setCurrentRole(user.role);
              localStorage.setItem('currentRole', user.role);
            } else {
              console.error('Failed to fetch user role, logging out.');
              logout();
            }
          } catch (error) {
            console.error('Error fetching user role:', error);
            logout();
          }
        }
      }
      setLoading(false); // Set loading to false after initialization
    };
    initializeAuth();
  }, [token]); // Re-run when token changes

  const login = (email: string, role: UserRole, authToken: string) => {
    setToken(authToken);
    setUserEmail(email);
    setCurrentRole(role);
    setIsLoggedIn(true);
    localStorage.setItem('token', authToken);
    localStorage.setItem('currentUserEmail', email);
    localStorage.setItem('currentRole', role);
  };

  const logout = () => {
    setToken(null);
    setUserEmail(null);
    setCurrentRole(UserRole.REGULAR);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('currentUserEmail');
    localStorage.removeItem('currentRole');
  };

  return (
    <RoleContext.Provider value={{ currentRole, setCurrentRole, isLoggedIn, login, logout, token, userEmail, loading }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};