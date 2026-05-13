/*
 * Handaro AI — Home Page
 * Narrative: AI 에이전트 팩토리 (Light default + Dark toggle)
 * Section Order: Hero → NameOrigin → About(+3 competitive) → Product → Ecosystem(지휘 체계) → Founder(기술 증명) → Promise(3가지 약속) → Certification → Assessment → Contact
 */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NameOriginSection from "@/components/NameOriginSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import PromiseSection from "@/components/PromiseSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProductSection from "@/components/ProductSection";
import CertificationSection from "@/components/CertificationSection";
import AssessmentSection from "@/components/AssessmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      <Navigation lang="ko" />
      <HeroSection lang="ko" />
      <NameOriginSection lang="ko" />
      <AboutSection lang="ko" />
      <ProductSection lang="ko" />
      <EcosystemSection lang="ko" />
      <FounderSection lang="ko" />
      <PromiseSection lang="ko" />
      <CertificationSection lang="ko" />
      <AssessmentSection lang="ko" />
      <ContactSection lang="ko" />
      <Footer lang="ko" />
    </div>
  );
}
