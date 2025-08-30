'use client';

import { Flame, TrendingUp, DollarSign, Target, ArrowDown, Coins } from 'lucide-react';

const burnStats = [
  {
    period: 'This Week',
    usdtCollected: 12500,
    tokensBurned: 45000,
    burnRate: 2.85,
    failureRate: 23,
  },
  {
    period: 'This Month',
    usdtCollected: 48200,
    tokensBurned: 175000,
    burnRate: 2.75,
    failureRate: 28,
  },
  {
    period: 'All Time',
    usdtCollected: 285000,
    tokensBurned: 1250000,
    burnRate: 2.28,
    failureRate: 31,
  },
];

const recentBurns = [
  {
    id: 1,
    challenge: 'Complete 30-Day Fitness Challenge',
    participants: 124,
    failures: 38,
    usdtCollected: 3800,
    tokensBurned: 13680,
    burnRate: 3.6,
    date: '2024-01-14',
  },
  {
    id: 2,
    challenge: 'Read 5 Books in January',
    participants: 89,
    failures: 19,
    usdtCollected: 1900,
    tokensBurned: 5225,
    burnRate: 2.75,
    date: '2024-01-13',
  },
  {
    id: 3,
    challenge: 'Learn React in 2 Weeks',
    participants: 156,
    failures: 45,
    usdtCollected: 4500,
    tokensBurned: 10125,
    burnRate: 2.25,
    date: '2024-01-12',
  },
];

export default function BuybackBurnSection() {
  const totalSupplyReduction = 8.4; // percentage

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Buyback & Burn Analytics
          </h2>
          <p className="text-gray-600">
            Token deflationary mechanism powered by challenge failures
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Burn Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Total Impact Card */}
            <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Flame className="h-6 w-6" />
                    <p className="text-red-100">Total Supply Burned</p>
                  </div>
                  <p className="text-3xl font-bold">1,250,000 MDAO</p>
                  <p className="text-red-100 mt-2 flex items-center">
                    <ArrowDown className="h-4 w-4 mr-1" />
                    {totalSupplyReduction}% supply reduction
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-lg">
                  <Coins className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Burn Statistics */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Burn Statistics
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-sm font-medium text-gray-500">
                        Period
                      </th>
                      <th className="text-right py-3 text-sm font-medium text-gray-500">
                        USDT Collected
                      </th>
                      <th className="text-right py-3 text-sm font-medium text-gray-500">
                        Tokens Burned
                      </th>
                      <th className="text-right py-3 text-sm font-medium text-gray-500">
                        Burn Rate
                      </th>
                      <th className="text-right py-3 text-sm font-medium text-gray-500">
                        Failure Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {burnStats.map((stat, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 text-sm font-medium text-gray-900">
                          {stat.period}
                        </td>
                        <td className="py-4 text-sm text-gray-900 text-right">
                          ${stat.usdtCollected.toLocaleString()}
                        </td>
                        <td className="py-4 text-sm text-gray-900 text-right">
                          {stat.tokensBurned.toLocaleString()}
                        </td>
                        <td className="py-4 text-sm text-gray-900 text-right">
                          {stat.burnRate.toFixed(2)}x
                        </td>
                        <td className="py-4 text-sm text-red-600 text-right">
                          {stat.failureRate}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Burn Mechanics & Recent Activity */}
          <div className="space-y-6">
            {/* How It Works */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                How Burn Works
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-monad-100 rounded-full flex items-center justify-center">
                    <span className="text-monad-600 text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Participants pay entry fee in USDT
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-monad-100 rounded-full flex items-center justify-center">
                    <span className="text-monad-600 text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Challenge ends, failures identified
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-monad-100 rounded-full flex items-center justify-center">
                    <span className="text-monad-600 text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Failed participants' USDT used for buyback
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <Flame className="h-3 w-3 text-red-600" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Purchased tokens permanently burned
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Burns */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Recent Burns
              </h3>
              <div className="space-y-4">
                {recentBurns.map((burn) => (
                  <div
                    key={burn.id}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">
                          {burn.challenge}
                        </p>
                        <div className="mt-1 space-y-1">
                          <p className="text-xs text-gray-500">
                            {burn.failures}/{burn.participants} failed ({((burn.failures / burn.participants) * 100).toFixed(0)}%)
                          </p>
                          <p className="text-xs text-red-600">
                            🔥 {burn.tokensBurned.toLocaleString()} MDAO burned
                          </p>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">{burn.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          ${burn.usdtCollected.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">
                          {burn.burnRate}x rate
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