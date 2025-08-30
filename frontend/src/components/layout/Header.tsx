'use client';

import { useState } from 'react';
import { Menu, X, Wallet, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-monad-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-gray-900">MonaDAO</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-monad-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Proposals
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Treasury
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Members
              </a>
              <div className="relative group">
                <button className="text-gray-500 hover:text-monad-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </nav>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <button className="bg-monad-600 hover:bg-monad-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors">
              <Wallet className="h-4 w-4" />
              <span>Connect Wallet</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 inline-flex items-center justify-center p-2 rounded-md"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a
                href="#"
                className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Proposals
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Treasury
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Members
              </a>
              <button className="w-full mt-4 bg-monad-600 hover:bg-monad-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2">
                <Wallet className="h-4 w-4" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}