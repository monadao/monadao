import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/dashboard/HeroSection';
import ChallengesSection from '@/components/dashboard/ChallengesSection';
import BuybackBurnSection from '@/components/dashboard/BuybackBurnSection';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ChallengesSection />
      <BuybackBurnSection />
    </Layout>
  );
}