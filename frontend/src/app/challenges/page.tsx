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
  Calendar,
  Clock,
  DollarSign,
  Upload,
  CheckCircle,
  AlertCircle,
  Users,
} from 'lucide-react';

const myChallenges = [
  {
    id: 1,
    title: '30-Day Fitness Challenge',
    daoName: 'FitDAO',
    status: 'active',
    entryFee: 100,
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    daysLeft: 12,
    progress: 60,
    participants: 124,
    mySubmissions: 18,
    requiredSubmissions: 30,
  },
  {
    id: 2,
    title: 'Read 5 Books Challenge',
    daoName: 'BookLoversDAO',
    status: 'completed',
    entryFee: 50,
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    progress: 100,
    participants: 89,
    mySubmissions: 5,
    requiredSubmissions: 5,
    result: 'success',
    reward: 75, // 50 USDT + 25 USDT worth of tokens
  },
  {
    id: 3,
    title: 'Learn React in 2 Weeks',
    daoName: 'DevDAO',
    status: 'failed',
    entryFee: 200,
    startDate: '2024-01-10',
    endDate: '2024-01-24',
    progress: 45,
    participants: 67,
    mySubmissions: 3,
    requiredSubmissions: 7,
    result: 'failed',
  },
];

const availableChallenges = [
  {
    id: 4,
    title: 'Write Daily Journal for 21 Days',
    daoName: 'MindfulDAO',
    category: 'Personal Development',
    entryFee: 75,
    participants: 45,
    maxParticipants: 100,
    endDate: '2024-03-01',
    successRate: 82,
  },
  {
    id: 5,
    title: 'Build a Web3 App',
    daoName: 'BuilderDAO',
    category: 'Technology',
    entryFee: 300,
    participants: 23,
    maxParticipants: 50,
    endDate: '2024-02-28',
    successRate: 45,
  },
];

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = useState('active');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-500/10 text-blue-500';
      case 'completed':
        return 'bg-green-500/10 text-green-500';
      case 'failed':
        return 'bg-red-500/10 text-red-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getResultColor = (result: string) => {
    return result === 'success' ? 'text-green-500' : 'text-red-500';
  };

  const backgroundStyle = {};

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="mb-8 text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold">
              DAO Challenges
            </h1>
            <p className="text-muted-foreground text-lg">
              Track your challenge participation and progress
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-6 grid w-full grid-cols-2">
              <TabsTrigger value="active" className="py-3 text-lg">
                Active & Completed
              </TabsTrigger>
              <TabsTrigger value="available" className="py-3 text-lg">
                Available
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              {myChallenges.map(challenge => (
                <Card
                  key={challenge.id}
                  className="border-border bg-card/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">
                            {challenge.title}
                          </CardTitle>
                          <Badge className={getStatusColor(challenge.status)}>
                            {challenge.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          by {challenge.daoName}
                        </p>
                      </div>
                      {challenge.result && (
                        <div
                          className={`text-right ${getResultColor(challenge.result)}`}
                        >
                          <div className="flex items-center gap-1">
                            {challenge.result === 'success' ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <AlertCircle className="h-4 w-4" />
                            )}
                            <span className="font-medium capitalize">
                              {challenge.result}
                            </span>
                          </div>
                          {challenge.reward && (
                            <p className="mt-1 text-sm">
                              +${challenge.reward} earned
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>
                          {challenge.mySubmissions}/
                          {challenge.requiredSubmissions} submissions
                        </span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-xs">
                          Entry Fee
                        </p>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          <span className="text-sm font-medium">
                            ${challenge.entryFee}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-xs">
                          Participants
                        </p>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span className="text-sm font-medium">
                            {challenge.participants}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-xs">
                          Time Left
                        </p>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span className="text-sm font-medium">
                            {challenge.status === 'active'
                              ? `${challenge.daysLeft} days`
                              : 'Ended'}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-xs">
                          End Date
                        </p>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span className="text-sm font-medium">
                            {challenge.endDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    {challenge.status === 'active' && (
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Submit Progress
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="available" className="space-y-4">
              {availableChallenges.map(challenge => (
                <Card
                  key={challenge.id}
                  className="border-border bg-card/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">
                            {challenge.title}
                          </CardTitle>
                          <Badge variant="secondary">
                            {challenge.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          by {challenge.daoName}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          ${challenge.entryFee} USDT
                        </p>
                        <p className="text-muted-foreground text-xs">
                          Entry Fee
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-xs">
                          Participants
                        </p>
                        <span className="text-sm font-medium">
                          {challenge.participants}/{challenge.maxParticipants}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-xs">
                          Success Rate
                        </p>
                        <span className="text-sm font-medium text-green-500">
                          {challenge.successRate}%
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-xs">Ends</p>
                        <span className="text-sm font-medium">
                          {challenge.endDate}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-xs">
                          Spots Left
                        </p>
                        <span className="text-sm font-medium">
                          {challenge.maxParticipants - challenge.participants}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button>
                        Join Challenge (${challenge.entryFee} USDT)
                      </Button>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
