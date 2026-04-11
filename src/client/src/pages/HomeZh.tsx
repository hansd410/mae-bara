/*
 * Handaro AI AX Standard — Chinese Home Page (/zh)
 * Same section order as Korean, with lang="zh" prop passed to all components
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

export default function HomeZh() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      <Navigation lang="zh" />
      <HeroSection lang="zh" />
      <NameOriginSection lang="zh" />
      <AboutSection lang="zh" />
      <ProductSection lang="zh" />
      <FounderSection lang="zh" />
      <PromiseSection lang="zh" />
      <EcosystemSection lang="zh" />
      <CertificationSection lang="zh" />
      <AssessmentSection lang="zh" />
      <ContactSection lang="zh" />
      <Footer lang="zh" />
    </div>
  );
}
