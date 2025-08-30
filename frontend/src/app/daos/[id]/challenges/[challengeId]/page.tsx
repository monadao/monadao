'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import {
  Users,
  Trophy,
  Target,
  Calendar,
  Clock,
  DollarSign,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  XCircle,
  FileText,
  Upload,
} from 'lucide-react';

export default function ChallengeDetailPage({
  params,
}: {
  params: { id: string; challengeId: string };
}) {
  const daoId = parseInt(params.id);
  const challengeId = parseInt(params.challengeId);
  const [activeTab, setActiveTab] = useState('overview');

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

  // Sample challenge data
  const challenge = {
    id: challengeId,
    title:
      challengeId === 1
        ? '30-Day Fitness Challenge'
        : challengeId === 2
          ? 'Weekly Workout Streak'
          : challengeId === 3
            ? 'Nutrition Tracking Challenge'
            : challengeId === 4
              ? 'Morning Yoga for 21 Days'
              : 'Run 100km in a Month',
    status: challengeId <= 3 ? 'active' : 'completed',
    description:
      'Complete daily fitness tasks for 30 days to earn rewards and improve your health. Track your progress, share your journey, and stay accountable with the community.',
    rules: [
      'Complete at least 30 minutes of exercise daily',
      'Log your activity in the app with photo proof',
      'Maintain a streak of at least 25 days out of 30',
      'Participate in at least 2 community challenges',
    ],
    rewards: [
      'Complete 25-29 days: 80% of your entry fee returned',
      'Complete all 30 days: 120% of your entry fee returned',
      'Top 10 performers: Additional bonus rewards',
    ],
    entryFee: 100,
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    daysLeft: 12,
    participants: 124,
    maxParticipants: 150,
    successRate: 68,
    createdBy: '0xAbC...123',
    submissions: [
      {
        id: 1,
        user: '0x123...456',
        username: 'fitness_enthusiast',
        title: 'Day 18 Workout',
        description: 'Completed a 5K run and 30 minutes of strength training.',
        date: '2024-02-02',
        status: 'approved',
      },
      {
        id: 2,
        user: '0x789...012',
        username: 'health_warrior',
        title: 'Day 18 Workout',
        description: 'HIIT workout and yoga session completed.',
        date: '2024-02-02',
        status: 'pending',
      },
      {
        id: 3,
        user: '0x345...678',
        username: 'active_life',
        title: 'Day 17 Workout',
        description: 'Swimming and meditation session.',
        date: '2024-02-01',
        status: 'rejected',
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-500/10 text-blue-500';
      case 'completed':
        return 'bg-green-500/10 text-green-500';
      case 'upcoming':
        return 'bg-yellow-500/10 text-yellow-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getSubmissionStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/10 text-green-500';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'rejected':
        return 'bg-red-500/10 text-red-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getSubmissionStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const backgroundStyle = {};

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Breadcrumb and Header */}
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
                <Link
                  href={`/daos/${daoId}/challenges`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Challenges
                </Link>
                <span className="text-muted-foreground">/</span>
                <h1 className="text-foreground text-2xl font-bold">
                  {challenge.title}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={getStatusColor(challenge.status)}>
                  {challenge.status === 'active' ? 'Active' : 'Completed'}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  {challenge.participants} participants
                </span>
              </div>
            </div>
            <Link href={`/daos/${daoId}/challenges`}>
              <Button variant="outline" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to Challenges
              </Button>
            </Link>
          </div>

          {/* Challenge Stats */}
          <div className="mb-8 grid grid-cols-4 gap-4">
            <Card className="bg-card/80 border-border backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-4">
                <DollarSign className="text-primary mb-2 h-6 w-6" />
                <span className="text-2xl font-bold">{challenge.entryFee}</span>
                <span className="text-muted-foreground text-sm">
                  USDT Entry Fee
                </span>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-4">
                <Users className="text-primary mb-2 h-6 w-6" />
                <span className="text-2xl font-bold">
                  {challenge.participants}/{challenge.maxParticipants}
                </span>
                <span className="text-muted-foreground text-sm">
                  Participants
                </span>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-4">
                <Calendar className="text-primary mb-2 h-6 w-6" />
                <span className="text-2xl font-bold">{challenge.daysLeft}</span>
                <span className="text-muted-foreground text-sm">Days Left</span>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-4">
                <Trophy className="text-primary mb-2 h-6 w-6" />
                <span className="text-2xl font-bold">
                  {challenge.successRate}%
                </span>
                <span className="text-muted-foreground text-sm">
                  Success Rate
                </span>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs
            defaultValue="overview"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
              <TabsTrigger value="participants">Participants</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Challenge Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">{challenge.description}</p>

                  <h3 className="mb-2 text-lg font-semibold">Rules</h3>
                  <ul className="mb-6 list-disc space-y-1 pl-5">
                    {challenge.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>

                  <h3 className="mb-2 text-lg font-semibold">Rewards</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {challenge.rewards.map((reward, index) => (
                      <li key={index}>{reward}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Challenge Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 flex justify-between">
                    <span>Start: {challenge.startDate}</span>
                    <span>End: {challenge.endDate}</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Progress: 18/30 days
                    </span>
                    <span className="text-sm font-medium">
                      {challenge.daysLeft} days left
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                {challenge.status === 'active' && (
                  <Button className="bg-green-500 text-white hover:bg-green-600">
                    <Upload className="mr-1 h-4 w-4" /> Submit Today&apos;s
                    Progress
                  </Button>
                )}
              </div>
            </TabsContent>

            {/* Submissions Tab */}
            <TabsContent value="submissions" className="space-y-6">
              <Card className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Recent Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {challenge.submissions.map(submission => (
                      <Card key={submission.id} className="border-border">
                        <CardContent className="p-4">
                          <div className="mb-2 flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold">
                                {submission.title}
                              </h3>
                              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                <span>{submission.username}</span>
                                <span>•</span>
                                <span>{submission.date}</span>
                              </div>
                            </div>
                            <Badge
                              className={getSubmissionStatusColor(
                                submission.status
                              )}
                            >
                              {getSubmissionStatusIcon(submission.status)}
                              <span className="ml-1">{submission.status}</span>
                            </Badge>
                          </div>
                          <p className="text-sm">{submission.description}</p>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="mr-1 h-4 w-4" /> View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Participants Tab */}
            <TabsContent value="participants" className="space-y-6">
              <Card className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Participants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {challenge.participants} participants out of{' '}
                      {challenge.maxParticipants} max
                    </span>
                    <Progress
                      value={
                        (challenge.participants / challenge.maxParticipants) *
                        100
                      }
                      className="h-2 w-1/3"
                    />
                  </div>

                  <div className="space-y-4">
                    {/* Sample participants - in a real app, this would be dynamically generated */}
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="border-border flex items-center justify-between rounded-md border p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                            <Users className="text-primary h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">User{index + 1}</div>
                            <div className="text-muted-foreground text-sm">
                              0x{Math.random().toString(16).substring(2, 10)}...
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-medium">
                              {Math.floor(Math.random() * 20) + 10}/30
                            </div>
                            <div className="text-muted-foreground text-sm">
                              Days Completed
                            </div>
                          </div>
                          <Progress
                            value={Math.floor(Math.random() * 60) + 30}
                            className="h-2 w-24"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
