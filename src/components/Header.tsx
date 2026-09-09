import React, { useState } from 'react';
import { cvData } from '../data/portfolioData';
import { 
  FileText, 
  GithubLogo, 
  LinkedinLogo, 
  List, 
  X
} from '@phosphor-icons/react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Projects", href: "#projects", count: cvData.projects.length },
    { label: "Architecture", href: "#architecture" },
    { label: "Services & Rates", href: "#services", count: cvData.freelanceServices.length },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a 
          href="#overview" 
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-zinc-500 transition-colors">
            GA
          </div>
          <div>
            <div className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-1.5">
              <span>{cvData.header.name}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 truncate max-w-[190px] sm:max-w-none">
              Software Engineer & Consultant
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-950/60 p-1 rounded-lg border border-zinc-800/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-md transition-colors flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              {link.count !== undefined && (
                <span className="text-[10px] font-mono px-1.5 py-0.2 bg-zinc-800 text-zinc-300 rounded">
                  {link.count}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={cvData.header.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <GithubLogo size={16} weight="bold" />
          </a>
          <a
            href={cvData.header.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <LinkedinLogo size={16} weight="bold" />
          </a>
          <a
            href={cvData.header.pdfUrl}
            download={cvData.header.filename}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <FileText size={14} weight="bold" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={18} /> : <List size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#09090b] px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 rounded-md border border-zinc-800 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.count !== undefined && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded">
                    {link.count}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-2">
            <a
              href={cvData.header.pdfUrl}
              download={cvData.header.filename}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-white text-black text-center text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <FileText size={14} weight="bold" />
              <span>Download CV (PDF)</span>
            </a>
            <div className="flex gap-2">
              <a
                href={cvData.header.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                <GithubLogo size={16} />
              </a>
              <a
                href={cvData.header.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                <LinkedinLogo size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
