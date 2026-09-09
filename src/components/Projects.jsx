import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Landmark, 
  Cpu, 
  GraduationCap, 
  Activity, 
  Sparkles, 
  X, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Featured Projects Section
 * 100% Taste-Skill Compliance:
 * - Doppelrand Double-Bezel Architecture
 * - Case Study Modal with Architectural Breakdown
 * - 0% Emojis, 100% Solid 60-30-10 Palette
 */
export default function Projects() {
  const { architectures } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const iconMap = {
    'bssn-lms': ShieldCheck,
    'bank-mega-ccbm': Landmark,
    'st-mes-odoo': Cpu
  };

  const projectList = [
    {
      id: "bssn-lms",
      title: 'National Cyber Security LMS & IAM',
      client: 'Badan Siber dan Sandi Negara (BSSN)',
      role: 'Lead Backend Engineer (Java)',
      period: 'Apr 2026 – Present',
      icon: ShieldCheck,
      accentStyle: 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      status: 'Government Standard',
      description: 'Government-grade cybersecurity learning portal and identity verification platform with SSO ConnectIDN (FAL2) and RFC 6238 TOTP MFA.',
      challenge: 'Enforce national cybersecurity protocols, multi-tenant agency access, zero-leak credential storage, and seamless SSO authentication.',
      solution: 'Engineered Java 21 Spring Boot 3 microservices with ConnectIDN FAL2, TOTP MFA, 38 Flyway database migrations on PostgreSQL, and AWS S3 encrypted asset storage.',
      tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'SSO ConnectIDN', 'RFC 6238 TOTP', 'AWS S3', 'Docker'],
    },
    {
      id: "bank-mega-ccbm",
      title: 'Bank Mega Call Center Modernization (CCBM)',
      client: 'PT Bank Mega, Tbk',
      role: 'Software Engineer (Backend & Full Stack)',
      period: 'Oct 2023 – Apr 2025',
      icon: Landmark,
      accentStyle: 'bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      status: '99.9% Uptime SLA',
      description: 'Modernization of legacy PHP monolith into high-availability Java Spring Boot microservices delivering 99.9% uptime SLA for nationwide banking agents.',
      challenge: 'Eliminate peak transaction latency spikes and ensure 99.9% SLA uptime without disrupting live customer support calls.',
      solution: 'Refactored customer profile lookups with connection pooling, Redis caching, structured logging, and automated failure recovery routines.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Microservices', 'REST APIs', 'Docker'],
    },
    {
      id: "st-odoo-mes",
      title: 'Singapore Technologies Odoo ERP MES',
      client: 'Singapore Technologies',
      role: 'Technical Business Analyst & Odoo ERP Consultant',
      period: 'Aug 2025 – Mar 2026',
      icon: Cpu,
      accentStyle: 'bg-purple-600/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
      status: '+40% Floor Efficiency',
      description: 'Customized Manufacturing Execution System (MES) for high-precision aerospace and electronics manufacturing operations.',
      challenge: 'Automate shop floor work orders, multi-level bills of materials (BOM), and barcode verification across manufacturing plants.',
      solution: 'Developed custom Python Odoo modules for automated dispatching, work center scheduling, and component traceability.',
      tags: ['Python', 'Odoo ERP', 'PostgreSQL', 'XML Views', 'Manufacturing MES', 'Supply Chain'],
    },
    {
      id: "up-learning-centre",
      title: 'UP Learning Centre LMS Platform',
      client: 'Universitas Padjadjaran (UNPAD)',
      role: 'Lead Backend Architect',
      period: '2023',
      icon: GraduationCap,
      accentStyle: 'bg-amber-600/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      status: 'Academic Portal',
      description: 'Digital learning portal built with NestJS, Next.js, and PostgreSQL for coursework delivery, quiz evaluation, and certification.',
      challenge: 'Handle high concurrent student exam traffic with instant automated grading and digital certificate generation.',
      solution: 'Built scalable NestJS microservices with TypeORM, Redis task queue for async PDF rendering, and responsive Next.js frontend.',
      tags: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Tailwind CSS'],
    },
    {
      id: "pharmacy-system",
      title: 'Pharmacy Information Management System',
      client: 'PT Xsis Mitra Utama Showcase',
      role: 'Full Stack Developer',
      period: '2023 – 2024',
      icon: Activity,
      accentStyle: 'bg-rose-600/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
      status: 'Enterprise System',
      description: 'Full-stack prescription and inventory management platform built with ASP.NET Core, C#, Entity Framework, React.js, and SQL Server.',
      challenge: 'Real-time drug inventory tracking, automated stock depletion alerts, and cashier billing.',
      solution: 'Architected REST APIs in ASP.NET Core with Entity Framework migrations and interactive React dashboard.',
      tags: ['ASP.NET Core', 'C#', 'React.js', 'SQL Server', 'Entity Framework', 'REST API'],
    },
    {
      id: "diceritain-counseling",
      title: 'Diceritain Mental Health Counseling',
      client: 'Diceritain EdTech',
      role: 'Software Engineer Intern (Frontend / Full Stack)',
      period: 'Oct 2022 – Dec 2022',
      icon: Sparkles,
      accentStyle: 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      status: '+35% SSR Speed',
      description: 'Web application for peer mental health counseling with 35% speed improvement through SSR optimization.',
      challenge: 'Slow initial page load times and complex appointment booking flow.',
      solution: 'Refactored frontend architecture with Next.js SSR, Tailwind CSS, and optimized bundle size.',
      tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'SSR'],
    },
  ];

  const displayedProjects = showAll ? projectList : projectList.slice(0, 3);

  return (
    <section id="projects" className="relative w-full py-28 md:py-36 bg-white dark:bg-[#0f1117] text-slate-900 dark:text-white transition-colors">
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 mb-3">
            <span>Architecture & Case Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Mission-critical production systems, government cybersecurity portals, and banking microservices.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {displayedProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] h-full flex flex-col transition-all duration-300 hover:border-slate-400 dark:hover:border-white/20"
              >
                <div className="rounded-[calc(2rem-0.375rem)] p-6 sm:p-7 bg-white dark:bg-[#161b26] flex flex-col justify-between h-full border border-slate-100 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  
                  <div>
                    {/* Card Top Banner */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-2.5 rounded-2xl border ${project.accentStyle}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-100 dark:bg-[#0f1117] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-xs">
                        {project.status}
                      </span>
                    </div>

                    {/* Client & Title */}
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 mb-1.5 uppercase tracking-wide">
                      {project.client}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-2.5 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-5 min-h-[36px]">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-50 dark:bg-[#0f1117] text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Period & Case Study Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5 mt-auto">
                    <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500">
                      {project.period}
                    </span>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold transition-all border border-blue-200 dark:border-blue-900/40 group active:scale-95"
                    >
                      <span>Case Study</span>
                      <div className="w-5 h-5 rounded-full bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowUpRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      </div>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-12">
          {!showAll && projectList.length > 3 && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xs transition-all active:scale-98"
            >
              <span>View More Projects ({projectList.length - 3} more)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider hover:bg-slate-300 dark:hover:bg-slate-700 transition-all active:scale-98"
            >
              <span>View Less</span>
            </button>
          )}
        </div>

      </div>

      {/* Case Study Modal (Double-Bezel Architecture) */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="fixed inset-0" onClick={() => setActiveModalProject(null)} />

          <div className="relative w-full max-w-2xl rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#161b26]/95 backdrop-blur-2xl shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            
            <div className="rounded-[calc(2rem-0.375rem)] p-6 sm:p-8 bg-white dark:bg-[#161b26]">
              
              <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-white/5 mb-5">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                    {activeModalProject.client}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {activeModalProject.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    {activeModalProject.role} • {activeModalProject.period}
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30">
                  <div className="font-bold text-rose-600 dark:text-rose-400 mb-1">The Engineering Challenge:</div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{activeModalProject.challenge}</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">Architectural Solution:</div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{activeModalProject.solution}</p>
                </div>

                <div className="pt-2">
                  <div className="font-bold text-slate-900 dark:text-white mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tags.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/30 font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs transition-all"
                >
                  Close Case Study
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
