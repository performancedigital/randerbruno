import HeroSection from '@/components/sections/HeroSection';
import SocialProofBar from '@/components/sections/SocialProofBar';
import PainPointsSection from '@/components/sections/PainPointsSection';
import VideoSection from '@/components/sections/VideoSection';
import PromiseSection from '@/components/sections/PromiseSection';
import AuthoritySection from '@/components/sections/AuthoritySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <PainPointsSection />
      <VideoSection />
      <PromiseSection />
      <AuthoritySection />
      <TestimonialsSection />
      <FinalCTASection />
      <FooterSection />
    </>
  );
}
