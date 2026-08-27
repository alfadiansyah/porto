import React, { useState } from 'react';
import { Download, Moon, Sun, Send, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ isDark, toggleTheme, onOpenCvModal, scrollToSection, activeSection }) {
  const { personalInfo } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 border-b backdrop-blur-xl ${
      isDark 
        ? 'bg-[#0f1117]/85 border-[#2a3042] text-slate-100' 
        : 'bg-white/85 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('about')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-blue via-indigo-500 to-accent-purple flex items-center justify-center text-white font-mono font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            GA
          </div>
          <div className="text-left">
            <div className="font-extrabold text-sm sm:text-base tracking-tight leading-tight group-hover:text-accent-blue transition-colors">
              Giovanni Alfadiansyah
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Software Engineer
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`transition-colors ${
                activeSection === link.id
                  ? 'text-accent-blue dark:text-accent-cyan font-bold'
                  : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Controls */}
        <div className="flex items-center gap-2.5">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-xl border transition-colors ${
              isDark 
                ? 'bg-dark-card border-dark-border text-accent-yellow hover:bg-dark-border' 
                : 'bg-slate-100 border-slate-200 text-accent-blue hover:bg-slate-200'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* WhatsApp Direct Chat */}
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl border border-accent-emerald/40 bg-accent-emerald/10 text-accent-emerald hover:bg-accent-emerald hover:text-white transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Download CV CTA */}
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border ${
              isDark ? 'border-dark-border text-slate-300' : 'border-slate-200 text-slate-700'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 py-4 space-y-2 ${
          isDark ? 'bg-dark-surface border-dark-border' : 'bg-slate-50 border-slate-200'
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-xl text-sm font-semibold ${
                activeSection === link.id
                  ? 'bg-accent-blue/15 text-accent-blue font-bold'
                  : isDark ? 'text-slate-300 hover:bg-dark-card' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCvModal();
            }}
            className="w-full mt-2 py-2.5 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> Download CV (PDF / Word)
          </button>
        </div>
      )}
    </header>
  );
}
