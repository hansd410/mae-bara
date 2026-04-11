/*
 * Handaro AI AX Standard — Japanese Home Page (/jp)
 * Same section order as Korean, with lang="jp" prop passed to all components
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
export default function HomeJp() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      <Navigation lang="jp" />
      <HeroSection lang="jp" />
      <NameOriginSection lang="jp" />
      <AboutSection lang="jp" />
      <ProductSection lang="jp" />
      <FounderSection lang="jp" />
      <PromiseSection lang="jp" />
      <EcosystemSection lang="jp" />
      <CertificationSection lang="jp" />
      <AssessmentSection lang="jp" />
      <ContactSection lang="jp" />
      <Footer lang="jp" />
    </div>
  );
}
