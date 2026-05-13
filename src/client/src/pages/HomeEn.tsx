/*
 * Handaro AI AX Standard — English Home Page (/en)
 * Same section order as Korean, with lang="en" prop passed to all components
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

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      <Navigation lang="en" />
      <HeroSection lang="en" />
      <NameOriginSection lang="en" />
      <AboutSection lang="en" />
      <ProductSection lang="en" />
      <EcosystemSection lang="en" />
      <FounderSection lang="en" />
      <PromiseSection lang="en" />
      <CertificationSection lang="en" />
      <AssessmentSection lang="en" />
      <ContactSection lang="en" />
      <Footer lang="en" />
    </div>
  );
}
