import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ isDark }) {
  const { personalInfo } = portfolioData;

  return (
    <footer className={`py-8 border-t text-xs transition-colors ${
      isDark ? 'border-dark-border text-slate-400' : 'border-slate-200 text-slate-500'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center text-white font-mono font-bold text-[10px]">
            GA
          </div>
          <span>
            © 2026 <strong>Giovanni Alfadiansyah</strong>. Crafted with React, Vite & Tailwind CSS.
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px]">
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-blue transition"
          >
            WhatsApp
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-blue transition"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-blue transition"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-accent-blue transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
