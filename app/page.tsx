import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickStats } from "@/components/sections/QuickStats";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { PublicationsPreview } from "@/components/sections/PublicationsPreview";
import { CertificatesHighlight } from "@/components/sections/CertificatesHighlight";
import { Services } from "@/components/sections/Services";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickStats />
      <AboutPreview />
      <FeaturedProjects />
      <CaseStudyHighlight />
      <ExperienceTimeline />
      <SkillsMatrix />
      <PublicationsPreview />
      <CertificatesHighlight />
      <Services />
      <ContactCTA />
      <Footer />
    </>
  );
}
