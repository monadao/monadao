'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';

export default function HomePage() {
  // Sample data for DAO ranking
  const daoRankings = [
    { rank: 1, name: 'Seoul', value: '450%', icon: '🌟' },
    { rank: 2, name: 'DAO', value: '200%', id: '75002', icon: '88' },
    { rank: 3, name: 'DAO Seul', value: '220%', id: '310001', icon: 'B' },
    { rank: 4, name: 'Seoul', value: '150%', id: '30001', icon: 'S' },
  ];

  // Background style
  const backgroundStyle = {};

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center space-y-16 p-6">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl space-y-12 text-center">
          <h1
            className="text-foreground text-6xl font-bold tracking-wider"
            style={{ fontFamily: 'monospace' }}
          >
            MonaDAO
          </h1>

          <div className="flex justify-center space-x-6">
            <Link href="/create">
              <Button
                className="border border-green-400 bg-green-500 px-8 py-6 text-lg text-white shadow-lg shadow-green-500/20 hover:bg-green-600"
                style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
              >
                Create DAO
              </Button>
            </Link>
            <Link href="/daos">
              <Button
                className="border border-purple-400 bg-purple-500 px-8 py-6 text-lg text-white shadow-lg shadow-purple-500/20 hover:bg-purple-600"
                style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}
              >
                Explore DAOs
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* DAO Ranking */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h2 className="text-foreground mb-6 text-2xl font-bold">
                DAO Ranking
              </h2>
              <div className="space-y-4">
                <div className="text-muted-foreground mb-2 grid grid-cols-4 text-sm">
                  <div>Rank</div>
                  <div>DAO</div>
                  <div className="text-right">ID</div>
                  <div className="text-right">Value</div>
                </div>

                {daoRankings.map((dao, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 items-center border-b border-gray-800 py-2 last:border-0"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-xs">
                        {dao.icon}
                      </div>
                      <span>{dao.rank}</span>
                    </div>
                    <div>{dao.name}</div>
                    <div className="text-right">{dao.id || ''}</div>
                    <div
                      className={`text-right font-medium ${dao.value.includes('4') ? 'text-green-500' : 'text-green-400'}`}
                    >
                      {dao.value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* About / Stats */}
          <Card className="bg-card border-border">
            <CardContent className="flex h-full flex-col items-center justify-center p-6">
              <h2 className="text-foreground mb-6 text-2xl font-bold">About</h2>

              <div className="text-center">
                <h3 className="text-muted-foreground mb-4 text-lg">
                  Total Burned Tokens
                </h3>
                <p
                  className="text-foreground text-5xl font-bold"
                  style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
                >
                  152,0000
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
