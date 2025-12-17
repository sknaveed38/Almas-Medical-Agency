"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Phone, ShoppingCart, User, Search, Menu, X, ChevronDown, LogIn, LogOut, UserCircle } from 'lucide-react';
import { useRole } from '@/context/RoleContext';
import { UserRole, roles } from '@/types/roles';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

// Simplified product type for search
interface ProductSearchResult {
  product_id: string;
  name: string;
  brand: string;
  salt: string;
  image: string;
}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
  const [allProducts, setAllProducts] = useState<ProductSearchResult[]>([]);
  const [results, setResults] = useState<Record<string, ProductSearchResult[]>>({});
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { currentRole, setCurrentRole, isLoggedIn, logout } = useRole(); // Removed setIsLoggedIn
  const router = useRouter(); // Initialize useRouter

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setAllProducts(data);
    };

    fetchProducts();
  }, []);

  // Debounce effect for search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);


  // Effect for performing the search with the debounced query
  useEffect(() => {
    if (debouncedQuery.trim().length > 1) {
      const lowerCaseQuery = debouncedQuery.toLowerCase();
      const filteredProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerCaseQuery) ||
          product.brand.toLowerCase().includes(lowerCaseQuery) ||
          product.salt.toLowerCase().includes(lowerCaseQuery)
      );

      // Group results by salt
      const groupedResults = filteredProducts.reduce((acc, product) => {
        const key = product.salt;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(product);
        return acc;
      }, {} as Record<string, ProductSearchResult[]>);

      setResults(groupedResults);
      setIsResultsVisible(true);
    } else {
      setResults({});
      setIsResultsVisible(false);
    }
  }, [debouncedQuery, allProducts]);

  // Handle clicks outside of the search component to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsResultsVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login'); // Redirect to login page after logout
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar for contact info and Role Switcher */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-200">
          <div className="text-sm text-gray-600">
            <span>Drug License: 12/AB/3456</span>
            <span className="mx-2">|</span>
            <span>GSTIN: 22ABCDE1234F1Z5</span>
          </div>
          <div className="flex items-center space-x-4">

            {/* Login/Logout Toggle */}
            {isLoggedIn ? (
                <button
                    onClick={handleLogout}
                    className="flex items-center text-sm font-semibold px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200"
                >
                    <LogOut size={14} className="mr-1" />
                    Logout
                </button>
            ) : (
                <Link
                    href="/login"
                    className="flex items-center text-sm font-semibold px-3 py-1 rounded-md bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                >
                    <LogIn size={14} className="mr-1" />
                    Login
                </Link>
            )}
            <a href="tel:+917569724609" className="flex items-center text-sm text-gray-600 hover:text-emerald-600">
              <Phone size={14} className="mr-1" />
              Call Us
            </a>
            <a href="https://wa.me/917569724609" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-green-600 hover:text-green-700">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-4 h-4 mr-1.5"/>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center pt-4 pb-6 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-emerald-700">
              Almas<span className="font-light">Medical & Surgical Agency</span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center px-3" ref={searchRef}>
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search by brand, salt, or company..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsResultsVisible(true)}
              />
              <div className="absolute right-0 top-0 h-full flex items-center">
                {searchQuery ? (
                  <button onClick={() => setSearchQuery('')} className="p-2 h-full text-gray-500 hover:text-gray-800">
                    <X size={20} />
                  </button>
                ) : (
                  <button className="p-2 h-full text-gray-500">
                    <Search size={20} />
                  </button>
                )}
              </div>

              {/* Autocomplete Results */}
              {isResultsVisible && Object.keys(results).length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  {Object.entries(results).map(([salt, productsInGroup]) => (
                    <div key={salt} className="p-2">
                      <p className="px-3 py-1 text-sm font-semibold text-gray-500">{salt}</p>
                      <ul>
                        {productsInGroup.map((product) => (
                          <li key={product.product_id}>
                            <Link href={`/product/${product.product_id}`} className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors">
                              <span className="text-gray-400 mr-3">├</span>
                              <img src={product.image} alt={product.name} className="w-10 h-10 object-contain mr-3 bg-gray-100 rounded"/>
                              <div>
                                <p className="font-semibold text-gray-800">{product.name}</p>
                                <p className="text-xs text-gray-500">by {product.brand}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
               {isResultsVisible && Object.keys(results).length === 0 && debouncedQuery.length > 1 && (
                 <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                    <p className="text-center text-gray-500">No products found for "{debouncedQuery}"</p>
                 </div>
               )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {isLoggedIn ? (
              <Link href="/dashboard/profile" className="flex items-center text-gray-700 hover:text-emerald-600">
                <UserCircle size={20} className="mr-1" />
                My Profile
              </Link>
            ) : (
              <Link href="/login" className="flex items-center text-gray-700 hover:text-emerald-600">
                <User size={20} className="mr-1" />
                Login / Signup
              </Link>
            )}
            <Link href="/cart" className="relative flex items-center text-gray-700 hover:text-emerald-600">
              <ShoppingCart size={20} className="mr-1" />
              Bulk Cart
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2.5 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden bg-white shadow-lg py-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
            {/* Mobile Search Bar */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by brand, salt,company..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsResultsVisible(true)}
              />
              <div className="absolute right-0 top-0 h-full flex items-center">
                {searchQuery ? (
                  <button onClick={() => setSearchQuery('')} className="p-2 h-full text-gray-500 hover:text-gray-800">
                    <X size={20} />
                  </button>
                ) : (
                  <button className="p-2 h-full text-gray-500">
                    <Search size={20} />
                  </button>
                )}
              </div>

              {/* Autocomplete Results for Mobile */}
              {isResultsVisible && Object.keys(results).length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {Object.entries(results).map(([salt, productsInGroup]) => (
                    <div key={salt} className="p-2">
                      <p className="px-3 py-1 text-sm font-semibold text-gray-500">{salt}</p>
                      <ul>
                        {productsInGroup.map((product) => (
                          <li key={product.product_id}>
                            <Link href={`/product/${product.product_id}`} className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors" onClick={toggleMobileMenu}>
                              <span className="text-gray-400 mr-3">├</span>
                              <img src={product.image} alt={product.name} className="w-10 h-10 object-contain mr-3 bg-gray-100 rounded"/>
                              <div>
                                <p className="font-semibold text-gray-800">{product.name}</p>
                                <p className="text-xs text-gray-500">by {product.brand}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
               {isResultsVisible && Object.keys(results).length === 0 && debouncedQuery.length > 1 && (
                 <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                    <p className="text-center text-gray-500">No products found for "{debouncedQuery}"</p>
                 </div>
               )}
            </div>

            {isLoggedIn ? (
              <>
                <Link href="/dashboard/profile" className="flex items-center text-gray-700 hover:text-emerald-600" onClick={toggleMobileMenu}>
                  <UserCircle size={20} className="mr-2" />
                  My Profile
                </Link>
                <button
                    onClick={() => {
                        handleLogout();
                        toggleMobileMenu();
                    }}
                    className="flex items-center text-gray-700 hover:text-emerald-600 w-full text-left"
                >
                    <LogOut size={20} className="mr-2" />
                    Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="flex items-center text-gray-700 hover:text-emerald-600" onClick={toggleMobileMenu}>
                <LogIn size={20} className="mr-2" />
                Login / Signup
              </Link>
            )}
            <Link href="/cart" className="relative flex items-center text-gray-700 hover:text-emerald-600" onClick={toggleMobileMenu}>
              <ShoppingCart size={20} className="mr-2" />
              Bulk Cart
              <span className="absolute -top-1 -right-4 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
            <a href="tel:+917569724609" className="flex items-center text-gray-700 hover:text-emerald-600 p-1.5 rounded-md bg-gray-100 hover:bg-gray-200" onClick={toggleMobileMenu}>
              <Phone size={20} className="mr-2" />
              Call Us
            </a>
            <a href="https://wa.me/917569724609" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-700 p-1.5 rounded-md bg-green-50 hover:bg-green-100" onClick={toggleMobileMenu}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2"/>
              WhatsApp
            </a>
          </div>
        </div>
    </header>
  );
};

export default Header;