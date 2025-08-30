'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';

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
                Challenges
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                My DAOs
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Create DAO
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
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      style: {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            className="bg-monad-600 hover:bg-monad-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            Connect Wallet
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <button
                            onClick={openChainModal}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            Wrong Network
                          </button>
                        );
                      }

                      return (
                        <div className="flex items-center space-x-3">
                          {chain.hasIcon && (
                            <button
                              onClick={openChainModal}
                              className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? 'Chain icon'}
                                  src={chain.iconUrl}
                                  className="w-4 h-4"
                                />
                              )}
                              <span className="text-gray-700">{chain.name}</span>
                            </button>
                          )}
                          <button
                            onClick={openAccountModal}
                            className="bg-monad-600 hover:bg-monad-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            {account.displayName}
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
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
                Challenges
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                My DAOs
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-monad-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Create DAO
              </a>
              <div className="mt-4">
                <ConnectButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}