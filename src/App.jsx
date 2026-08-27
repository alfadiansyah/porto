import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import SocialMagnet from './components/SocialMagnet';
import CvDownloadModal from './components/CvDownloadModal';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('gio-portfolio-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('gio-portfolio-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('gio-portfolio-theme', 'light');
      }
      return next;
    });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll spy
  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen font-sans ${
      isDark ? 'bg-[#0f1117] text-white' : 'bg-white text-black'
    }`}>
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs shadow-2xl animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-1 opacity-80 hover:opacity-100">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Header */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Single Page Content */}
      <main>
        
        {/* 1. Spline 3D Hero Section */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* 2. About Me with ScrollReveal & Highlighter */}
        <About />

        {/* 3. Tech Stack with Infinite Velocity Ticker */}
        <Skills />

        {/* 4. Qualifications with Interactive File Tree */}
        <Education />

        {/* 5. Work Experience Timeline */}
        <Experience
          isDark={isDark}
        />

        {/* 6. Featured Projects with GlareHover & InteractiveGridPattern */}
        <Projects />

        {/* 7. Contact Form with GridPattern */}
        <ContactForm
          onShowToast={showToast}
        />

        {/* 8. Floating Bottom Social Dock */}
        <SocialMagnet />

      </main>

      {/* CV Download Hub Modal */}
      <CvDownloadModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        isDark={isDark}
      />

    </div>
  );
}
