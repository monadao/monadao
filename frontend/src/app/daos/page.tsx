'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowRight, Users, Trophy, Target } from 'lucide-react';

export default function DAOsPage() {
  // Sample data for DAOs
  const daos = [
    {
      id: 1,
      name: 'FitDAO',
      description:
        'Community focused on fitness challenges and healthy lifestyle',
      category: 'Health & Fitness',
      members: 1245,
      activeChallenges: 3,
      completedChallenges: 12,
      successRate: 78,
    },
    {
      id: 2,
      name: 'BookLoversDAO',
      description:
        'For book enthusiasts who want to read more and discuss literature',
      category: 'Education',
      members: 892,
      activeChallenges: 2,
      completedChallenges: 8,
      successRate: 85,
    },
    {
      id: 3,
      name: 'DevDAO',
      description: 'Developers community focused on learning new technologies',
      category: 'Technology',
      members: 1567,
      activeChallenges: 5,
      completedChallenges: 15,
      successRate: 62,
    },
    {
      id: 4,
      name: 'MindfulDAO',
      description:
        'Focused on mental health, meditation and mindfulness practices',
      category: 'Personal Development',
      members: 723,
      activeChallenges: 2,
      completedChallenges: 6,
      successRate: 91,
    },
    {
      id: 5,
      name: 'BuilderDAO',
      description: 'For Web3 builders creating decentralized applications',
      category: 'Technology',
      members: 456,
      activeChallenges: 1,
      completedChallenges: 3,
      successRate: 45,
    },
  ];

  const backgroundStyle = {};

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold">
              Explore DAOs
            </h1>
            <p className="text-muted-foreground text-lg">
              Join existing DAOs or create your own
            </p>
          </div>

          {/* Create DAO Button */}
          <div className="mb-8 flex justify-center">
            <Link href="/create">
              <Button
                className="border border-green-400 bg-green-500 px-6 py-2 text-lg text-white shadow-lg shadow-green-500/20 hover:bg-green-600"
                style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
              >
                Create New DAO
              </Button>
            </Link>
          </div>

          {/* DAO List */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {daos.map(dao => (
              <Card
                key={dao.id}
                className="bg-card/80 border-border hover:border-primary backdrop-blur-sm transition-colors"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold">
                      {dao.name}
                    </CardTitle>
                    <Badge className="bg-primary/20 text-primary border-primary/50 border">
                      {dao.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {dao.description}
                  </p>

                  <div className="mb-4 grid grid-cols-3 gap-2">
                    <div className="bg-background/50 flex flex-col items-center rounded-md p-2">
                      <Users className="text-muted-foreground mb-1 h-4 w-4" />
                      <span className="text-sm font-medium">{dao.members}</span>
                      <span className="text-muted-foreground text-xs">
                        Members
                      </span>
                    </div>
                    <div className="bg-background/50 flex flex-col items-center rounded-md p-2">
                      <Target className="text-muted-foreground mb-1 h-4 w-4" />
                      <span className="text-sm font-medium">
                        {dao.activeChallenges}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        Active
                      </span>
                    </div>
                    <div className="bg-background/50 flex flex-col items-center rounded-md p-2">
                      <Trophy className="text-muted-foreground mb-1 h-4 w-4" />
                      <span className="text-sm font-medium">
                        {dao.successRate}%
                      </span>
                      <span className="text-muted-foreground text-xs">
                        Success
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      {dao.completedChallenges} completed challenges
                    </span>
                    <Link href={`/daos/${dao.id}`}>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-primary/10 h-auto p-2"
                      >
                        View DAO <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
