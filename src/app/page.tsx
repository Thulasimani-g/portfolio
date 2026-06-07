import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <FeaturedProjectsSection />
        <IntegrationsSection />
        <AchievementsSection />
        <WhyHireMeSection />
      </main>
      <Footer />
    </>
  );
}
