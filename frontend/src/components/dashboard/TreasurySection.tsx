'use client';

import { PieChart, TrendingUp, Coins, ExternalLink } from 'lucide-react';

const treasuryAssets = [
  {
    name: 'MON',
    symbol: 'MON',
    balance: '1,250,000',
    value: '$1,875,000',
    percentage: 78.1,
    change: '+5.2%',
    color: 'bg-monad-500',
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    balance: '425,000',
    value: '$425,000',
    percentage: 17.7,
    change: '+0.1%',
    color: 'bg-blue-500',
  },
  {
    name: 'WETH',
    symbol: 'WETH',
    balance: '45.5',
    value: '$102,375',
    percentage: 4.2,
    change: '+2.8%',
    color: 'bg-gray-600',
  },
];

const recentTransactions = [
  {
    id: 1,
    type: 'Proposal Execution',
    amount: '50,000 USDC',
    description: 'Treasury allocation for DeFi protocols',
    timestamp: '2 hours ago',
    txHash: '0xabc123...',
  },
  {
    id: 2,
    type: 'Token Swap',
    amount: '10,000 MON',
    description: 'Swapped MON to USDC for diversification',
    timestamp: '1 day ago',
    txHash: '0xdef456...',
  },
  {
    id: 3,
    type: 'Staking Rewards',
    amount: '2,500 MON',
    description: 'Staking rewards from validator node',
    timestamp: '3 days ago',
    txHash: '0xghi789...',
  },
];

export default function TreasurySection() {
  const totalValue = treasuryAssets.reduce(
    (sum, asset) => sum + parseFloat(asset.value.replace(/[$,]/g, '')),
    0
  );

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Treasury Overview
          </h2>
          <p className="text-gray-600">
            Track and manage DAO treasury assets and transactions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Treasury Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Total Value Card */}
            <div className="bg-gradient-to-br from-monad-500 to-monad-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-monad-100 mb-2">Total Treasury Value</p>
                  <p className="text-3xl font-bold">
                    ${totalValue.toLocaleString()}
                  </p>
                  <p className="text-monad-100 mt-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-lg">
                  <Coins className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Asset Breakdown */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Asset Breakdown
              </h3>
              <div className="space-y-4">
                {treasuryAssets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-4 h-4 rounded-full ${asset.color}`}
                      ></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {asset.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {asset.balance} {asset.symbol}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{asset.value}</p>
                      <p className="text-sm text-green-600">{asset.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Asset Allocation Chart */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Asset Allocation
              </h3>
              <div className="space-y-4">
                {treasuryAssets.map((asset, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{asset.symbol}</span>
                      <span className="font-medium">{asset.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${asset.color}`}
                        style={{ width: `${asset.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">
                          {tx.type}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                          {tx.description}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-gray-500">
                            {tx.timestamp}
                          </span>
                          <button className="text-xs text-monad-600 hover:text-monad-700 flex items-center">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {tx.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}