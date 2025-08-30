'use client';

import { Clock, Users, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const proposals = [
  {
    id: 1,
    title: 'Increase Treasury Allocation for DeFi Protocols',
    description:
      'Proposal to allocate 15% of treasury funds to high-yield DeFi protocols to maximize returns for DAO members.',
    status: 'active',
    endDate: '2024-01-15',
    votesFor: 1247,
    votesAgainst: 342,
    totalVotes: 1589,
    quorum: 85,
    proposer: '0x1234...5678',
  },
  {
    id: 2,
    title: 'Launch MonaDAO NFT Collection',
    description:
      'Create and launch an exclusive NFT collection for DAO members with utility benefits and governance perks.',
    status: 'succeeded',
    endDate: '2024-01-10',
    votesFor: 2156,
    votesAgainst: 445,
    totalVotes: 2601,
    quorum: 95,
    proposer: '0xabcd...efgh',
  },
  {
    id: 3,
    title: 'Partnership with Monad Ecosystem Projects',
    description:
      'Establish strategic partnerships with key projects in the Monad ecosystem to enhance collaboration.',
    status: 'pending',
    endDate: '2024-01-20',
    votesFor: 0,
    votesAgainst: 0,
    totalVotes: 0,
    quorum: 0,
    proposer: '0x9876...5432',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-blue-100 text-blue-800';
    case 'succeeded':
      return 'bg-green-100 text-green-800';
    case 'defeated':
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
    case 'succeeded':
      return <CheckCircle className="h-4 w-4" />;
    case 'defeated':
      return <XCircle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

export default function ProposalsSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Recent Proposals
            </h2>
            <p className="mt-2 text-gray-600">
              View and participate in DAO governance decisions
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-monad-600 hover:bg-monad-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            <span>View All</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-1">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {proposal.title}
                    </h3>
                    <span
                      className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        proposal.status
                      )}`}
                    >
                      {getStatusIcon(proposal.status)}
                      <span className="capitalize">{proposal.status}</span>
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{proposal.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>By {proposal.proposer}</span>
                    <span>Ends {proposal.endDate}</span>
                  </div>
                </div>
              </div>

              {proposal.status !== 'pending' && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>{proposal.votesFor.toLocaleString()} For</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-red-600">
                        <XCircle className="h-4 w-4" />
                        <span>{proposal.votesAgainst.toLocaleString()} Against</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {proposal.quorum}% Quorum
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="flex h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-green-500"
                        style={{
                          width: `${
                            (proposal.votesFor / proposal.totalVotes) * 100
                          }%`,
                        }}
                      ></div>
                      <div
                        className="bg-red-500"
                        style={{
                          width: `${
                            (proposal.votesAgainst / proposal.totalVotes) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between items-center">
                <button className="text-monad-600 hover:text-monad-700 font-medium">
                  View Details
                </button>
                {proposal.status === 'active' && (
                  <div className="flex space-x-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Vote For
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Vote Against
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}