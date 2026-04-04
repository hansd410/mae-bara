/*
 * MaeBara AX Standard — Home Page
 * Design: Sovereign Command (Light default + Dark toggle)
 * Section Order: Hero → About → Product → Founder → Promise → Ecosystem → Certification → Assessment → Contact
 */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
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
      <AboutSection lang="ko" />
      <ProductSection lang="ko" />
      <FounderSection lang="ko" />
      <PromiseSection lang="ko" />
      <EcosystemSection lang="ko" />
      <CertificationSection lang="ko" />
      <AssessmentSection lang="ko" />
      <ContactSection lang="ko" />
      <Footer lang="ko" />
    </div>
  );
}
