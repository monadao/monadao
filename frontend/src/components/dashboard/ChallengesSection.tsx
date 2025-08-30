'use client';

import { Clock, Users, CheckCircle, XCircle, ArrowRight, Target, DollarSign } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: 'Complete 30-Day Fitness Challenge',
    description:
      'Commit to 30 minutes of exercise daily for 30 days. Submit daily photos and workout logs for verification.',
    status: 'active',
    endDate: '2024-02-15',
    entryFee: 100, // USDT
    participants: 124,
    successRate: 68,
    totalPool: 12400,
    creator: '0x1234...5678',
    daoName: 'FitDAO',
    category: 'Health & Fitness',
  },
  {
    id: 2,
    title: 'Read 5 Books in January',
    description:
      'Read and provide detailed summaries of 5 books within the month. Books must be at least 200 pages each.',
    status: 'completed',
    endDate: '2024-01-31',
    entryFee: 50,
    participants: 89,
    successRate: 79,
    totalPool: 4450,
    winners: 70,
    failures: 19,
    creator: '0xabcd...efgh',
    daoName: 'BookLoversDAO',
    category: 'Education',
  },
  {
    id: 3,
    title: 'Build a DeFi Protocol in 2 Weeks',
    description:
      'Design and deploy a complete DeFi protocol with smart contracts, frontend, and documentation.',
    status: 'pending',
    endDate: '2024-02-10',
    entryFee: 500,
    participants: 0,
    successRate: 0,
    totalPool: 0,
    creator: '0x9876...5432',
    daoName: 'DevDAO',
    category: 'Technology',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'failed':
      return 'bg-red-100 text-red-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <Clock className="h-4 w-4" />;
    case 'completed':
      return <CheckCircle className="h-4 w-4" />;
    case 'failed':
      return <XCircle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Health & Fitness':
      return 'bg-green-100 text-green-700';
    case 'Education':
      return 'bg-blue-100 text-blue-700';
    case 'Technology':
      return 'bg-purple-100 text-purple-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default function ChallengesSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Active Challenges
            </h2>
            <p className="mt-2 text-gray-600">
              Join challenges, stake USDT, and earn rewards for completion
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
              <Target className="h-4 w-4" />
              <span>Create Challenge</span>
            </button>
            <button className="flex items-center space-x-2 bg-monad-600 hover:bg-monad-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-1">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {challenge.title}
                    </h3>
                    <span
                      className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        challenge.status
                      )}`}
                    >
                      {getStatusIcon(challenge.status)}
                      <span className="capitalize">{challenge.status}</span>
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                        challenge.category
                      )}`}
                    >
                      {challenge.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                    <span>By {challenge.daoName}</span>
                    <span>Creator: {challenge.creator}</span>
                    <span>Ends {challenge.endDate}</span>
                  </div>
                </div>
              </div>

              {/* Challenge Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Entry Fee</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">${challenge.entryFee}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Participants</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{challenge.participants}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <Target className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Success Rate</span>
                  </div>
                  <p className="text-xl font-bold text-green-600">{challenge.successRate}%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Total Pool</span>
                  </div>
                  <p className="text-xl font-bold text-monad-600">${challenge.totalPool.toLocaleString()}</p>
                </div>
              </div>

              {/* Progress for completed challenges */}
              {challenge.status === 'completed' && challenge.winners && challenge.failures && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>{challenge.winners} Completed</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-red-600">
                        <XCircle className="h-4 w-4" />
                        <span>{challenge.failures} Failed</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      ${(challenge.failures * challenge.entryFee).toLocaleString()} burned
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="flex h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-green-500"
                        style={{
                          width: `${(challenge.winners / challenge.participants) * 100}%`,
                        }}
                      ></div>
                      <div
                        className="bg-red-500"
                        style={{
                          width: `${(challenge.failures / challenge.participants) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center">
                <button className="text-monad-600 hover:text-monad-700 font-medium">
                  View Details
                </button>
                {challenge.status === 'active' && (
                  <button className="bg-monad-600 hover:bg-monad-700 text-white px-6 py-2 rounded-lg text-sm font-medium">
                    Join Challenge (${challenge.entryFee} USDT)
                  </button>
                )}
                {challenge.status === 'pending' && (
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium">
                    Starting Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}