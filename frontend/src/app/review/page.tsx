'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { NewHeader } from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Users,
  DollarSign,
  Calendar,
  MessageSquare,
} from 'lucide-react';

const pendingReviews = [
  {
    id: 1,
    challengeTitle: '30-Day Fitness Challenge',
    daoName: 'FitDAO',
    participant: '0x1234...5678',
    submissionDate: '2024-02-14',
    submissionType: 'Final Report',
    description:
      'Completed all 30 days of exercise. Attached photos and workout logs as proof.',
    evidenceCount: 45,
    currentVotes: {
      approve: 12,
      reject: 3,
      total: 15,
    },
    minVotes: 20,
    deadline: '2024-02-16',
    entryFee: 100,
    hasVoted: false,
  },
  {
    id: 2,
    challengeTitle: 'Read 5 Books Challenge',
    daoName: 'BookLoversDAO',
    participant: '0xabcd...efgh',
    submissionDate: '2024-01-30',
    submissionType: 'Book Summaries',
    description:
      'Completed reading 5 books with detailed summaries and key takeaways for each.',
    evidenceCount: 5,
    currentVotes: {
      approve: 18,
      reject: 2,
      total: 20,
    },
    minVotes: 20,
    deadline: '2024-02-02',
    entryFee: 50,
    hasVoted: true,
    myVote: 'approve',
  },
];

const completedReviews = [
  {
    id: 3,
    challengeTitle: 'Learn Python in 1 Week',
    participant: '0x9876...5432',
    result: 'approved',
    finalVotes: {
      approve: 25,
      reject: 5,
      total: 30,
    },
    entryFee: 150,
    completedDate: '2024-01-25',
  },
];

export default function ReviewPage() {
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const handleVote = (submissionId: number, vote: 'approve' | 'reject') => {
    console.log(`Voting ${vote} for submission ${submissionId}`);
    // TODO: Implement voting logic
  };

  return (
    <div className="bg-background flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <NewHeader />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <div>
              <h1 className="text-foreground text-2xl font-bold">
                Review & Vote
              </h1>
              <p className="text-muted-foreground">
                Review challenge submissions and vote on participant success
              </p>
            </div>

            {/* Pending Reviews */}
            <div className="space-y-4">
              <h2 className="text-foreground text-lg font-medium">
                PENDING REVIEWS
              </h2>

              {pendingReviews.map(review => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">
                            {review.challengeTitle}
                          </CardTitle>
                          <Badge variant="secondary">
                            {review.submissionType}
                          </Badge>
                        </div>
                        <div className="text-muted-foreground flex items-center gap-4 text-sm">
                          <span>by {review.daoName}</span>
                          <span>•</span>
                          <span>Participant: {review.participant}</span>
                          <span>•</span>
                          <span>Submitted: {review.submissionDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          ${review.entryFee} USDT
                        </p>
                        <p className="text-muted-foreground text-xs">
                          at stake
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-foreground text-sm">
                      {review.description}
                    </p>

                    {/* Voting Status */}
                    <div className="bg-muted space-y-3 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Voting Progress
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {review.currentVotes.total}/{review.minVotes} votes
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Approve</span>
                          </div>
                          <span className="font-medium">
                            {review.currentVotes.approve}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            <span>Reject</span>
                          </div>
                          <span className="font-medium">
                            {review.currentVotes.reject}
                          </span>
                        </div>
                      </div>

                      <div className="text-muted-foreground flex items-center gap-2 text-xs">
                        <Clock className="h-3 w-3" />
                        <span>Deadline: {review.deadline}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View Evidence ({review.evidenceCount})
                      </Button>

                      {!review.hasVoted ? (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                            onClick={() => handleVote(review.id, 'reject')}
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleVote(review.id, 'approve')}
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                        </div>
                      ) : (
                        <Badge
                          className={
                            review.myVote === 'approve'
                              ? 'bg-green-500/10 text-green-500'
                              : 'bg-red-500/10 text-red-500'
                          }
                        >
                          You voted: {review.myVote}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Completed Reviews */}
            <div className="space-y-4">
              <h2 className="text-foreground text-lg font-medium">
                RECENT DECISIONS
              </h2>

              {completedReviews.map(review => (
                <Card key={review.id} className="opacity-75">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">
                          {review.challengeTitle}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Participant: {review.participant}
                        </p>
                      </div>
                      <div className="space-y-1 text-right">
                        <Badge
                          className={
                            review.result === 'approved'
                              ? 'bg-green-500/10 text-green-500'
                              : 'bg-red-500/10 text-red-500'
                          }
                        >
                          {review.result}
                        </Badge>
                        <p className="text-muted-foreground text-xs">
                          {review.finalVotes.approve}-{review.finalVotes.reject}{' '}
                          votes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty state */}
            {pendingReviews.length === 0 && (
              <div className="text-muted-foreground flex items-center justify-center gap-2 py-8">
                <div className="border-muted-foreground flex h-4 w-4 items-center justify-center rounded-full border">
                  <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                </div>
                <span>No submissions to review.</span>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
