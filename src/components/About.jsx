import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Landmark, 
  Cpu, 
  ArrowRight, 
  Download, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

/**
 * About Section - High-End Bento Grid Architecture
 * 100% Taste-Skill Compliance:
 * - Doppelrand Double-Bezel Frame (Concentric Hardware Cards)
 * - 0% Emojis, 100% Solid 60-30-10 Palette
 * - Clear Editorial Layout & Production Metric Matrix
 */
export default function About() {
  const { personalInfo } = portfolioData;

  const keyPillars = [
    {
      title: "Government Cybersecurity & IAM",
      org: "Badan Siber dan Sandi Negara (BSSN)",
      icon: ShieldCheck,
      desc: "Engineered Java 21 Spring Boot microservices compliant with national security standards, SSO ConnectIDN (FAL2), and RFC 6238 TOTP MFA.",
      tech: "Java 21 • Spring Boot • PostgreSQL • Flyway • AWS S3"
    },
    {
      title: "FinTech & Banking Modernization",
      org: "PT Bank Mega, Tbk (CCBM Division)",
      icon: Landmark,
      desc: "Modernized legacy PHP services into high-availability Java Spring Boot microservices delivering 99.9% uptime SLA for nationwide banking agents.",
      tech: "Java • Spring Boot • Redis • PostgreSQL • REST APIs"
    },
    {
      title: "Enterprise ERP & MES Manufacturing",
      org: "Singapore Technologies (ST MES)",
      icon: Cpu,
      desc: "Architected customized Python Odoo ERP modules for aerospace and precision manufacturing floor dispatching, MRP, and inventory traceability.",
      tech: "Python • Odoo ERP • PostgreSQL • XML Views • Supply Chain"
    }
  ];

  return (
    <section id="about" className="relative w-full py-28 md:py-36 bg-white dark:bg-[#0f1117] text-slate-900 dark:text-white transition-colors">
      
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 mb-3">
            <span>Executive Profile</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel tracking-tight">
            About Giovanni
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Enterprise backend software engineer, full-stack developer, and technical consultant specializing in mission-critical architecture.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Bio Card (Span 2 cols on desktop) */}
          <div className="lg:col-span-2 rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02]">
            <div className="rounded-[calc(2rem-0.375rem)] p-7 sm:p-9 bg-white dark:bg-[#161b26] h-full flex flex-col justify-between border border-slate-100 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Executive Engineering Profile</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug mb-4">
                  Building Scalable, Secure & Resilient Digital Infrastructure
                </h3>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  High-performing Software Engineer & Technical Consultant with 3+ years of professional enterprise experience. Proven track record in architecting high-throughput microservices for government cybersecurity, modernizing tier-1 banking systems to 99.9% uptime SLAs, and customizing enterprise ERP solutions for aerospace manufacturing.
                </p>

                {/* 3 Core Experience Highlights */}
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                  {keyPillars.map((pillar, idx) => {
                    const IconComp = pillar.icon;
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0f1117] border border-slate-200/60 dark:border-white/5">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-7 h-7 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white">
                              {pillar.title}
                            </div>
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                              {pillar.org}
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2 pl-9">
                          {pillar.desc}
                        </p>
                        <div className="text-[10px] font-mono font-semibold text-blue-600 dark:text-blue-400 pl-9">
                          {pillar.tech}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Bio Card Footer Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs transition-all group"
                >
                  <span>Explore Case Studies</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                <a
                  href="./cv/CV_Giovanni_Alfadiansyah.pdf"
                  download="CV_Giovanni_Alfadiansyah.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs border border-slate-300 dark:border-slate-700 shadow-xs transition-all group"
                >
                  <span>Download Master CV</span>
                  <div className="w-6 h-6 rounded-full bg-slate-900/10 dark:bg-white/10 flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
                    <Download className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Key Metrics & Technical Summary */}
          <div className="space-y-6">
            
            {/* Stats Grid Card (Double-Bezel) */}
            <div className="rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02]">
              <div className="rounded-[calc(2rem-0.375rem)] p-6 bg-white dark:bg-[#161b26] border border-slate-100 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5 pb-3 border-b border-slate-100 dark:border-white/5">
                  Key Production Metrics
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {personalInfo.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0f1117] border border-slate-200/60 dark:border-white/5">
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        {st.value}
                      </div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">
                        {st.label}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                        {st.description}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Quick Consultation Callout (Double-Bezel) */}
            <div className="rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02]">
              <div className="rounded-[calc(2rem-0.375rem)] p-6 bg-white dark:bg-[#161b26] border border-slate-100 dark:border-white/5">
                
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Status: Available for Hire</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Need Strategic Engineering?
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Available for full-time engineering roles, technical architecture consulting, and custom freelance deliverables.
                </p>

                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 pl-4 pr-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-between shadow-xs transition-all group active:scale-98"
                >
                  <span>Connect on WhatsApp</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-105">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
