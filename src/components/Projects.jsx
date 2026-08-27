import React, { useState } from 'react';
import GlareHover from './GlareHover';
import { Highlighter } from "@/components/ui/highlighter";
import { 
  ShieldCheck, 
  Landmark, 
  Cpu, 
  GraduationCap, 
  Activity, 
  Sparkles, 
  Eye, 
  X, 
  ArrowUpRight
} from 'lucide-react';

const projectData = [
  {
    id: "bssn-lms",
    title: 'National Cyber Security LMS & IAM',
    client: 'Badan Siber dan Sandi Negara (BSSN)',
    role: 'Software Engineer (Backend / Java)',
    period: 'Apr 2026 – Present',
    icon: ShieldCheck,
    accentColor: 'from-blue-500/20 to-cyan-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/30',
    status: 'Government Standard',
    description: 'Government-grade cybersecurity learning portal and identity verification platform with SSO ConnectIDN (FAL2) and RFC 6238 TOTP MFA.',
    challenge: 'Enforce national cybersecurity protocols, multi-tenant agency access, zero-leak credential storage, and seamless SSO authentication.',
    solution: 'Engineered Java 21 Spring Boot 3 microservices with ConnectIDN FAL2, TOTP MFA, 38 Flyway database migrations on PostgreSQL, and AWS S3 encrypted asset storage.',
    impact: 'National Gov Standard',
    tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'SSO ConnectIDN', 'RFC 6238 TOTP', 'AWS S3', 'Docker'],
  },
  {
    id: "bank-mega-ccbm",
    title: 'Bank Mega Call Center Modernization (CCBM)',
    client: 'PT Bank Mega, Tbk',
    role: 'Software Engineer (Backend & Full Stack)',
    period: 'Oct 2023 – Apr 2025',
    icon: Landmark,
    accentColor: 'from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    status: '99.9% Uptime SLA',
    description: 'Modernization of legacy PHP monolith into high-availability Java Spring Boot microservices delivering 99.9% uptime SLA for nationwide banking agents.',
    challenge: 'Eliminate peak transaction latency spikes and ensure 99.9% SLA uptime without disrupting live customer support calls.',
    solution: 'Refactored customer profile lookups with connection pooling, Redis caching, structured logging, and automated failure recovery.',
    impact: '99.9% Uptime SLA',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Microservices', 'REST APIs', 'Docker'],
  },
  {
    id: "st-odoo-mes",
    title: 'Singapore Technologies Odoo ERP MES',
    client: 'Singapore Technologies',
    role: 'Technical Business Analyst & Odoo ERP Consultant',
    period: 'Aug 2025 – Mar 2026',
    icon: Cpu,
    accentColor: 'from-purple-500/20 to-indigo-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
    status: '+40% Floor Efficiency',
    description: 'Customized Manufacturing Execution System (MES) for high-precision aerospace and electronics manufacturing operations.',
    challenge: 'Automate shop floor work orders, multi-level bills of materials (BOM), and barcode verification across manufacturing plants.',
    solution: 'Developed custom Python Odoo modules for automated dispatching, work center scheduling, and component traceability.',
    impact: '+40% Efficiency',
    tags: ['Python', 'Odoo ERP', 'PostgreSQL', 'XML Views', 'Manufacturing MES', 'Supply Chain'],
  },
  {
    id: "up-learning-centre",
    title: 'UP Learning Centre LMS Platform',
    client: 'Universitas Padjadjaran (UNPAD)',
    role: 'Lead Backend Architect',
    period: '2023',
    icon: GraduationCap,
    accentColor: 'from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    status: 'Academic Portal',
    description: 'Digital learning portal built with NestJS, Next.js, and PostgreSQL for coursework delivery, quiz evaluation, and certification.',
    challenge: 'Handle high concurrent student exam traffic with instant automated grading and digital certificate generation.',
    solution: 'Built scalable NestJS microservices with TypeORM, Redis task queue for async PDF rendering, and responsive Next.js frontend.',
    impact: 'Academic LMS',
    tags: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Tailwind CSS'],
  },
  {
    id: "pharmacy-system",
    title: 'Pharmacy Information Management System',
    client: 'PT Xsis Mitra Utama Showcase',
    role: 'Full Stack Developer',
    period: '2023 – 2024',
    icon: Activity,
    accentColor: 'from-rose-500/20 to-pink-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
    status: 'Enterprise System',
    description: 'Full-stack prescription and inventory management platform built with ASP.NET Core, C#, Entity Framework, React.js, and SQL Server.',
    challenge: 'Real-time drug inventory tracking, automated stock depletion alerts, and cashier billing.',
    solution: 'Architected REST APIs in ASP.NET Core with Entity Framework migrations and interactive React dashboard.',
    impact: 'Inventory & POS',
    tags: ['ASP.NET Core', 'C#', 'React.js', 'SQL Server', 'Entity Framework', 'REST API'],
  },
  {
    id: "diceritain-counseling",
    title: 'Diceritain Mental Health Counseling',
    client: 'Diceritain EdTech',
    role: 'Software Engineer Intern (Frontend / Full Stack)',
    period: 'Oct 2022 – Dec 2022',
    icon: Sparkles,
    accentColor: 'from-sky-500/20 to-blue-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30',
    status: '+35% SSR Speed',
    description: 'Web application for peer mental health counseling with 35% speed improvement through SSR optimization.',
    challenge: 'Slow initial page load times and complex appointment booking flow.',
    solution: 'Refactored frontend architecture with Next.js SSR, Tailwind CSS, and optimized bundle size.',
    impact: 'Peer Counseling',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'SSR'],
  },
];

const ProjectCard = ({ project, onOpenModal }) => {
  const IconComponent = project.icon;

  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.12}
      glareAngle={-30}
      glareSize={250}
      transitionDuration={800}
      playOnce={true}
      width="100%"
      height="100%"
      background="transparent"
      borderRadius="24px"
      className="h-full"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="flex flex-col h-full bg-gray-50 dark:bg-[#161922] rounded-[24px] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md p-6 justify-between transition-colors">
        
        <div>
          {/* Card Top Banner: Icon & Impact Status */}
          <div className="flex items-center justify-between mb-5">
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.accentColor} border`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-xs">
              {project.status}
            </span>
          </div>

          {/* Client & Title */}
          <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 mb-1.5 uppercase tracking-wide">
            {project.client}
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mb-2.5 leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="bg-white dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Period & Case Study Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-gray-800/80 mt-auto">
          <span className="text-[11px] font-mono font-semibold text-gray-400 dark:text-gray-500">
            {project.period}
          </span>
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold transition-colors border border-blue-200 dark:border-blue-800/40"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </GlareHover>
  );
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section id="projects" className="relative w-full py-24 overflow-hidden bg-white dark:bg-[#0f1117] text-black dark:text-white transition-colors">
      
      {/* Lightweight CSS Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Featured Projects 🚀
            </Highlighter>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
            Mission-critical production systems, government cybersecurity portals, and banking microservices.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard project={project} onOpenModal={(p) => setActiveModalProject(p)} />
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-12">
          {!showAll && projectData.length > 3 && (
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              View More Projects ({projectData.length - 3} more)
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all"
            >
              View Less
            </button>
          )}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="fixed inset-0" onClick={() => setActiveModalProject(null)} />

          <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#161922] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 shadow-2xl z-10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                  {activeModalProject.client}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mt-0.5">
                  {activeModalProject.title}
                </h3>
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-0.5">
                  {activeModalProject.role} • {activeModalProject.period}
                </div>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-black dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30">
                <div className="font-bold text-red-600 dark:text-red-400 mb-1">⚠️ The Engineering Challenge:</div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{activeModalProject.challenge}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">✅ Architectural Solution:</div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{activeModalProject.solution}</p>
              </div>

              <div className="pt-2">
                <div className="font-bold text-gray-900 dark:text-white mb-2">Technologies Used:</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/30 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
