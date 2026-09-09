import React, { useState } from 'react';
import { Download, Moon, Sun, Send, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Floating Island Pill Navigation Bar
 * 100% Taste-Skill Compliance:
 * - Doppelrand Double-Bezel Glass Floating Island
 * - Button-in-Button CV Download CTA
 * - 0% Emojis & Clean Editorial Monogram
 */
export default function Navbar({ isDark, toggleTheme, scrollToSection, activeSection }) {
  const { personalInfo } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300">
      
      {/* Outer Shell (Double-Bezel Floating Island) */}
      <div className="rounded-full p-1 border border-slate-200/80 dark:border-white/10 bg-white/85 dark:bg-[#0f1117]/85 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
        
        <div className="flex items-center justify-between px-3 sm:px-4 py-1.5">
          
          {/* Brand Monogram */}
          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-mono font-black text-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              GA
            </div>
            <div className="text-left hidden sm:block">
              <div className="font-extrabold text-xs tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Giovanni Alfadiansyah
              </div>
            </div>
          </button>

          {/* Center Navigation Links (Pill Staggered) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-[#161b26]/70 p-1 rounded-full border border-slate-200/50 dark:border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-[#0f1117] text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* WhatsApp Link */}
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
            >
              <Send className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>

            {/* Button-in-Button CV Download CTA */}
            <a
              href="./cv/CV_Giovanni_Alfadiansyah.pdf"
              download="CV_Giovanni_Alfadiansyah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 text-xs font-bold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-all duration-200 group active:scale-95"
            >
              <span>CV</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <Download className="w-3 h-3 text-white" />
              </div>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-3xl border-t border-slate-100 dark:border-white/5 space-y-1 bg-white/95 dark:bg-[#161b26]/95 backdrop-blur-3xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  activeSection === link.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

      </div>

    </header>
  );
}
