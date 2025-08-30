import { Sidebar } from '@/components/layout/Sidebar';
import { NewHeader } from '@/components/layout/NewHeader';
import { ChallengeOnboarding } from '@/components/dashboard/ChallengeOnboarding';
import { ChallengesList } from '@/components/dashboard/ChallengesList';

export default function HomePage() {
  return (
    <div className="bg-background flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <NewHeader />
        <main className="flex-1 space-y-6 p-6">
          <ChallengeOnboarding />
          <ChallengesList />
        </main>
      </div>
    </div>
  );
}
