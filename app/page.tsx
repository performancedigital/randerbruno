import HeroSection from '@/components/sections/HeroSection';
import SocialProofBar from '@/components/sections/SocialProofBar';
import PainPointsSection from '@/components/sections/PainPointsSection';
import DiagnosticSection from '@/components/sections/DiagnosticSection';
import ResultsSection from '@/components/sections/ResultsSection';
import PromiseSection from '@/components/sections/PromiseSection';
import AuthoritySection from '@/components/sections/AuthoritySection';
import CaptureSection from '@/components/sections/CaptureSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <PainPointsSection />
      <DiagnosticSection />
      <ResultsSection />
      <PromiseSection />
      <AuthoritySection />
      <CaptureSection />
      <FinalCTASection />
      <FooterSection />
    </>
  );
}