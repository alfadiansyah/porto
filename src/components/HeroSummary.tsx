import React, { useState } from 'react';
import { cvData } from '../data/portfolioData';
import { 
  EnvelopeSimple, 
  LinkedinLogo, 
  MapPin, 
  Phone, 
  FileText,
  WhatsappLogo,
  ArrowDown,
  Check,
  Copy,
  ShieldCheck,
  Bank,
  Cpu,
  Buildings
} from '@phosphor-icons/react';

export const HeroSummary: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const keyFocusAreas = [
    {
      icon: <ShieldCheck size={18} className="text-zinc-300" weight="bold" />,
      title: "Cybersecurity & Gov Microservices",
      desc: "Java 21, Spring Boot, ConnectIDN FAL2 SSO, TOTP MFA, BSSN LMS"
    },
    {
      icon: <Bank size={18} className="text-zinc-300" weight="bold" />,
      title: "Banking Modernization",
      desc: "Legacy PHP to Java & Spring Boot migration, +30% speedup, Bank Mega"
    },
    {
      icon: <Cpu size={18} className="text-zinc-300" weight="bold" />,
      title: "Enterprise Odoo ERP & MES",
      desc: "Python custom modules, barcode routing, Singapore Technologies MES"
    },
    {
      icon: <Buildings size={18} className="text-zinc-300" weight="bold" />,
      title: "Full-Stack System Architecture",
      desc: "NestJS, C# .NET, React.js, Next.js SSR, Docker, PostgreSQL"
    }
  ];

  return (
    <section id="overview" className="py-12 sm:py-16 border-b border-zinc-800 text-left">
      {/* Top Status & Name */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-[11px] font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Open for Senior / Enterprise Opportunities</span>
        </div>
        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
          <span>3+ Years Professional Experience</span>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 font-sans">
          {cvData.header.name}
        </h1>
        <p className="text-base sm:text-xl font-medium text-zinc-300 mb-6">
          {cvData.header.title}
        </p>

        {/* Contact Strip with Instant Copy */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/70 border border-zinc-800">
            <MapPin size={14} className="text-zinc-500" />
            <span>{cvData.header.location}</span>
          </div>

          <button
            onClick={() => handleCopy(cvData.header.email, 'email')}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all cursor-pointer"
            title="Click to copy email"
          >
            <EnvelopeSimple size={14} className="text-zinc-500 group-hover:text-zinc-300" />
            <span>{cvData.header.email}</span>
            {copiedEmail ? (
              <span className="flex items-center gap-0.5 text-[10px] text-emerald-400 font-bold ml-1">
                <Check size={12} weight="bold" /> Copied
              </span>
            ) : (
              <Copy size={12} className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            )}
          </button>

          <button
            onClick={() => handleCopy(cvData.header.phone, 'phone')}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all cursor-pointer"
            title="Click to copy phone"
          >
            <Phone size={14} className="text-zinc-500 group-hover:text-zinc-300" />
            <span>{cvData.header.phone}</span>
            {copiedPhone ? (
              <span className="flex items-center gap-0.5 text-[10px] text-emerald-400 font-bold ml-1">
                <Check size={12} weight="bold" /> Copied
              </span>
            ) : (
              <Copy size={12} className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            )}
          </button>

          <a 
            href={cvData.header.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
          >
            <LinkedinLogo size={14} className="text-zinc-500" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Professional Summary Box */}
      <div className="relative p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
            Professional Summary
          </h2>
        </div>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          {cvData.summary}
        </p>
      </div>

      {/* Key Focus & Engineering Domains Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {keyFocusAreas.map((area, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="p-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60">
                {area.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-sans">
                {area.title}
              </h3>
            </div>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed pl-8">
              {area.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-all flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <span>Explore Portfolio Projects ({cvData.projects.length})</span>
          <ArrowDown size={14} weight="bold" />
        </a>

        <a
          href="#services"
          className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-600 text-zinc-200 hover:text-white font-medium text-xs transition-colors flex items-center gap-2"
        >
          <span>Freelance & Rates ({cvData.freelanceServices.length} Tiers)</span>
        </a>

        <a
          href={cvData.header.pdfUrl}
          download={cvData.header.filename}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-xs transition-colors flex items-center gap-2"
        >
          <FileText size={15} weight="bold" />
          <span>Download CV (Standard PDF)</span>
        </a>

        <a
          href={cvData.header.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-xs transition-colors flex items-center gap-2"
        >
          <WhatsappLogo size={15} weight="fill" className="text-emerald-400" />
          <span>Direct WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
