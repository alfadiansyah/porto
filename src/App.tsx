import { Header } from './components/Header';
import { HeroSummary } from './components/HeroSummary';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureSpotlightSection } from './components/ArchitectureSpotlightSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { EducationSection } from './components/EducationSection';
import { FooterSection } from './components/FooterSection';

export function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans antialiased">
      {/* Sticky Header with quick navigation and download */}
      <Header />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero & Professional Summary with Quick Focus Areas */}
        <HeroSummary />

        {/* Key Technical Projects & Real Case Studies with Live Filter & Architecture Modals */}
        <ProjectsSection />

        {/* Enterprise System Architecture Blueprints & Security Spotlight */}
        <ArchitectureSpotlightSection />

        {/* Freelance & Technical Consulting Services & 5-Tier Pricing */}
        <ServicesSection />

        {/* Professional Work Experience Timeline & Client Placements */}
        <ExperienceSection />

        {/* Technical Competencies & Toolchain Matrix with Live Search */}
        <CompetenciesSection />

        {/* Education, Certifications & Leadership */}
        <EducationSection />

        {/* Connected Footer with Direct Actions & Jakarta Time */}
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
