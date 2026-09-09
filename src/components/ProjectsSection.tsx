import React, { useState, useMemo } from 'react';
import { cvData, ProjectCaseStudy } from '../data/portfolioData';
import { 
  Folder, 
  MagnifyingGlass, 
  X, 
  ShieldCheck, 
  Database, 
  CheckCircle, 
  ArrowUpRight,
  TreeStructure
} from '@phosphor-icons/react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: cvData.projects.length },
    { id: 'enterprise', label: 'Gov & Security', count: cvData.projects.filter(p => p.category === 'enterprise').length },
    { id: 'banking', label: 'Banking & Core', count: cvData.projects.filter(p => p.category === 'banking').length },
    { id: 'erp', label: 'ERP & Manufacturing', count: cvData.projects.filter(p => p.category === 'erp').length },
    { id: 'fullstack', label: 'Web & Full Stack', count: cvData.projects.filter(p => p.category === 'fullstack').length },
  ];

  const filteredProjects = useMemo(() => {
    return cvData.projects.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.organization.toLowerCase().includes(query) ||
        project.techStack.some(t => t.toLowerCase().includes(query)) ||
        project.metrics.some(m => m.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-12 sm:py-16 border-b border-zinc-800 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1 rounded bg-zinc-800 text-zinc-300">
              <Folder size={16} weight="bold" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Portfolio & Engineering Case Studies
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Key Technical Systems & Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Real enterprise microservices, banking modernizations, ERP shop-floor automation, and full-stack platforms engineered across government, banking, and commercial domains.
          </p>
        </div>

        {/* Live Search */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search tech, stack, or domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 font-mono"
          />
          <MagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 mb-8 p-1.5 rounded-xl bg-zinc-950 border border-zinc-800/80">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
              selectedCategory === cat.id ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-900/60 text-zinc-500'
            }`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all text-left overflow-hidden"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-medium text-zinc-300">
                  {project.categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  {project.period}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-zinc-100 transition-colors mb-1">
                {project.title}
              </h3>
              <div className="text-xs font-semibold text-zinc-400 mb-3 flex items-center gap-1.5">
                <span>{project.organization}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-500">{project.role}</span>
              </div>

              {/* Summary */}
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {project.summary}
              </p>

              {/* Real Metrics Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.metrics.map((metric, mIdx) => (
                  <span
                    key={mIdx}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-800 text-[10.5px] font-mono font-medium text-zinc-300"
                  >
                    <CheckCircle size={10} className="text-zinc-400" />
                    <span>{metric}</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/70 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800/80 text-[11px] font-mono text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Detail CTA Button */}
              <button
                onClick={() => setActiveModalProject(project)}
                className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View System Architecture & Specs</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-8 text-center rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-400">
          <p className="text-sm font-medium">No projects found matching "{searchQuery}"</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="mt-3 px-3 py-1.5 text-xs text-zinc-300 bg-zinc-900 rounded-lg hover:bg-zinc-800"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* In-Depth Architecture & Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 text-left shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                    {activeModalProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {activeModalProject.period}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {activeModalProject.organization} • {activeModalProject.role}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Metrics Highlight */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {activeModalProject.metrics.map((metric, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-left">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Metric {idx + 1}</div>
                  <div className="text-xs font-bold text-zinc-200 mt-0.5">{metric}</div>
                </div>
              ))}
            </div>

            {/* System Overview */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                <TreeStructure size={14} className="text-zinc-400" />
                <span>System Overview & Architecture</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800/80">
                {activeModalProject.architectureDetails.systemOverview}
              </p>
            </div>

            {/* Key Technical Deliverables */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                <CheckCircle size={14} className="text-zinc-400" />
                <span>Key Technical Features & Deliverables</span>
              </h4>
              <ul className="space-y-2 text-xs text-zinc-300">
                {activeModalProject.architectureDetails.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 bg-zinc-900/30 p-2.5 rounded-lg border border-zinc-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 flex-shrink-0"></span>
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security, Database & Testing Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-200 mb-1">
                  <ShieldCheck size={14} className="text-zinc-400" />
                  <span>Security & Performance</span>
                </div>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed font-mono">
                  {activeModalProject.architectureDetails.securityOrPerformance}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-200 mb-1">
                  <Database size={14} className="text-zinc-400" />
                  <span>Database & Storage</span>
                </div>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed font-mono">
                  {activeModalProject.architectureDetails.databaseAndStorage}
                </p>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700/80 text-xs font-mono text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
