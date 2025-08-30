'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
// Select 컴포넌트 대신 기본 HTML select 요소 사용
import { Navbar } from '@/components/layout/Navbar';
import {
  Users,
  Trophy,
  Target,
  Calendar,
  Clock,
  DollarSign,
  ArrowRight,
  Plus,
  Search,
  Filter,
} from 'lucide-react';

export default function DAOChallengesPage({
  params,
}: {
  params: { id: string };
}) {
  const daoId = parseInt(params.id);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Sample DAO data
  const dao = {
    id: daoId,
    name:
      daoId === 1
        ? 'FitDAO'
        : daoId === 2
          ? 'BookLoversDAO'
          : daoId === 3
            ? 'DevDAO'
            : daoId === 4
              ? 'MindfulDAO'
              : 'BuilderDAO',
    category: 'Health & Fitness',
  };

  // Sample challenges data
  const challenges = [
    {
      id: 1,
      title: '30-Day Fitness Challenge',
      status: 'active',
      entryFee: 100,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      daysLeft: 12,
      participants: 124,
      maxParticipants: 150,
      successRate: 68,
      description:
        'Complete daily fitness tasks for 30 days to earn rewards and improve your health.',
    },
    {
      id: 2,
      title: 'Weekly Workout Streak',
      status: 'active',
      entryFee: 50,
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      daysLeft: 18,
      participants: 87,
      maxParticipants: 100,
      successRate: 75,
      description:
        'Maintain a streak of at least 4 workouts per week for the entire month.',
    },
    {
      id: 3,
      title: 'Nutrition Tracking Challenge',
      status: 'active',
      entryFee: 75,
      startDate: '2024-02-10',
      endDate: '2024-03-10',
      daysLeft: 28,
      participants: 56,
      maxParticipants: 100,
      successRate: 82,
      description:
        'Track your daily nutrition and maintain a balanced diet for 30 days.',
    },
    {
      id: 4,
      title: 'Morning Yoga for 21 Days',
      status: 'completed',
      entryFee: 60,
      startDate: '2024-01-01',
      endDate: '2024-01-21',
      participants: 112,
      maxParticipants: 120,
      successRate: 79,
      description:
        'Practice morning yoga for 21 consecutive days to establish a healthy routine.',
    },
    {
      id: 5,
      title: 'Run 100km in a Month',
      status: 'completed',
      entryFee: 120,
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      participants: 95,
      maxParticipants: 100,
      successRate: 62,
      description:
        'Run a total of 100km within a month, track your progress with GPS.',
    },
    {
      id: 6,
      title: 'Meditation Marathon',
      status: 'upcoming',
      entryFee: 40,
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      daysToStart: 15,
      participants: 45,
      maxParticipants: 200,
      description: 'Meditate daily for at least 10 minutes throughout March.',
    },
    {
      id: 7,
      title: 'Hydration Habit Builder',
      status: 'upcoming',
      entryFee: 30,
      startDate: '2024-03-15',
      endDate: '2024-04-15',
      daysToStart: 29,
      participants: 23,
      maxParticipants: 150,
      description: 'Drink at least 2 liters of water daily for 30 days.',
    },
  ];

  const activeChallenges = challenges.filter(
    challenge => challenge.status === 'active'
  );
  const completedChallenges = challenges.filter(
    challenge => challenge.status === 'completed'
  );
  const upcomingChallenges = challenges.filter(
    challenge => challenge.status === 'upcoming'
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-500/10 text-blue-500';
      case 'completed':
        return 'bg-green-500/10 text-green-500';
      case 'upcoming':
        return 'bg-amber-500/10 text-amber-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'completed':
        return 'Completed';
      case 'upcoming':
        return 'Upcoming';
      default:
        return status;
    }
  };

  const backgroundStyle = {};

  // Filter challenges based on search query
  const filteredChallenges = challenges.filter(challenge => {
    if (activeTab === 'all') {
      return challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (activeTab === 'active') {
      return (
        challenge.status === 'active' &&
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeTab === 'completed') {
      return (
        challenge.status === 'completed' &&
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeTab === 'upcoming') {
      return (
        challenge.status === 'upcoming' &&
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return false;
  });

  // Sort challenges
  const sortedChallenges = [...filteredChallenges].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    } else if (sortBy === 'entryFeeHighToLow') {
      return b.entryFee - a.entryFee;
    } else if (sortBy === 'entryFeeLowToHigh') {
      return a.entryFee - b.entryFee;
    } else if (sortBy === 'participantsHighToLow') {
      return b.participants - a.participants;
    }
    return 0;
  });

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Header */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Link
                  href={`/daos/${daoId}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {dao.name}
                </Link>
                <span className="text-muted-foreground">/</span>
                <h1 className="text-foreground text-2xl font-bold">
                  Challenges
                </h1>
              </div>
              <p className="text-muted-foreground">
                Browse and join challenges in {dao.name}
              </p>
            </div>
            <Link href={`/daos/${daoId}/challenges/create`}>
              <Button className="bg-green-500 text-white hover:bg-green-600">
                <Plus className="mr-1 h-4 w-4" /> Create Challenge
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search challenges..."
                className="pl-8"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground h-4 w-4" />
              <span className="text-muted-foreground text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border-input bg-background ring-offset-background focus:ring-ring w-[180px] rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="entryFeeHighToLow">
                  Entry Fee (High to Low)
                </option>
                <option value="entryFeeLowToHigh">
                  Entry Fee (Low to High)
                </option>
                <option value="participantsHighToLow">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Tabs */}
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-6 grid w-full grid-cols-4">
              <TabsTrigger value="all">All ({challenges.length})</TabsTrigger>
              <TabsTrigger value="active">
                Active ({activeChallenges.length})
              </TabsTrigger>
              <TabsTrigger value="upcoming">
                Upcoming ({upcomingChallenges.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedChallenges.length})
              </TabsTrigger>
            </TabsList>

            {/* Challenge List */}
            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {sortedChallenges.map(challenge => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    daoId={daoId}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {sortedChallenges.map(challenge => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    daoId={daoId}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {sortedChallenges.map(challenge => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    daoId={daoId}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {sortedChallenges.map(challenge => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    daoId={daoId}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

interface ChallengeProps {
  challenge: any;
  daoId: number;
}

function ChallengeCard({ challenge, daoId }: ChallengeProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-500/10 text-blue-500';
      case 'completed':
        return 'bg-green-500/10 text-green-500';
      case 'upcoming':
        return 'bg-amber-500/10 text-amber-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <Card className="bg-card/80 border-border hover:border-primary backdrop-blur-sm transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold">{challenge.title}</CardTitle>
          <Badge className={getStatusColor(challenge.status)}>
            {challenge.status === 'active'
              ? 'Active'
              : challenge.status === 'completed'
                ? 'Completed'
                : 'Upcoming'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{challenge.description}</p>

        <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex flex-col">
            <span className="text-muted-foreground mb-1 flex items-center text-sm">
              <DollarSign className="mr-1 h-4 w-4" /> Entry Fee
            </span>
            <span className="font-medium">{challenge.entryFee} USDT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground mb-1 flex items-center text-sm">
              <Users className="mr-1 h-4 w-4" /> Participants
            </span>
            <span className="font-medium">
              {challenge.participants}/{challenge.maxParticipants}
            </span>
          </div>

          {challenge.status === 'active' && (
            <div className="flex flex-col">
              <span className="text-muted-foreground mb-1 flex items-center text-sm">
                <Clock className="mr-1 h-4 w-4" /> Time Left
              </span>
              <span className="font-medium">{challenge.daysLeft} days</span>
            </div>
          )}

          {challenge.status === 'upcoming' && (
            <div className="flex flex-col">
              <span className="text-muted-foreground mb-1 flex items-center text-sm">
                <Clock className="mr-1 h-4 w-4" /> Starts In
              </span>
              <span className="font-medium">{challenge.daysToStart} days</span>
            </div>
          )}

          <div className="flex flex-col">
            <span className="text-muted-foreground mb-1 flex items-center text-sm">
              <Calendar className="mr-1 h-4 w-4" />{' '}
              {challenge.status === 'completed' ? 'Ended' : 'Ends'}
            </span>
            <span className="font-medium">{challenge.endDate}</span>
          </div>
        </div>

        {challenge.status === 'active' && challenge.successRate && (
          <div className="mb-4 flex items-center">
            <Trophy className="text-muted-foreground mr-1 h-4 w-4" />
            <span className="text-muted-foreground mr-2 text-sm">
              {challenge.successRate}% Success Rate
            </span>
          </div>
        )}

        <div className="flex justify-end gap-2">
          <Link href={`/daos/${daoId}/challenges/${challenge.id}`}>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View Details
            </Button>
          </Link>

          {challenge.status === 'active' && (
            <Link href={`/daos/${daoId}/challenges/${challenge.id}/join`}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Join Challenge
              </Button>
            </Link>
          )}

          {challenge.status === 'upcoming' && (
            <Link href={`/daos/${daoId}/challenges/${challenge.id}/join`}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Pre-register
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
