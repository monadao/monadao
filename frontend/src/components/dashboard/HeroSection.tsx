'use client';

import { Users, DollarSign, FileText, TrendingUp } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Active Challenges',
    value: '23',
    change: '+5',
    changeType: 'positive',
    icon: FileText,
  },
  {
    id: 2,
    name: 'Total Participants',
    value: '1,247',
    change: '+12%',
    changeType: 'positive',
    icon: Users,
  },
  {
    id: 3,
    name: 'USDT Pool',
    value: '$48.2K',
    change: '+18.5%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    id: 4,
    name: 'Tokens Burned',
    value: '1.25M',
    change: '+2.8%',
    changeType: 'positive',
    icon: TrendingUp,
  },
];

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-monad-500 to-monad-700 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            MonaDAO
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Challenge yourself, earn rewards, and help build a deflationary
            ecosystem. Complete tasks, stake USDT, and watch failed participants'
            fees burn tokens forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-monad-600 hover:bg-monad-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Join Challenge
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
              Create DAO
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-monad-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-monad-600" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      {stat.change !== '0' && (
                        <div
                          className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.changeType === 'positive'
                              ? 'text-green-600'
                              : stat.changeType === 'negative'
                              ? 'text-red-600'
                              : 'text-gray-500'
                          }`}
                        >
                          {stat.change}
                        </div>
                      )}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}