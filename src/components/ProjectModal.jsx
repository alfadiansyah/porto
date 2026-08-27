import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  Building2, 
  UserCheck, 
  AlertCircle,
  TrendingUp,
  Cpu,
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, isDark }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto ${
        isDark ? 'bg-[#0d1527] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800/80 bg-slate-900/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.impactBadge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.period}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 max-h-[72vh] overflow-y-auto">
          
          {/* Client & Role Metadata Banner */}
          <div className={`p-4 rounded-2xl border grid grid-cols-1 sm:grid-cols-2 gap-4 ${
            isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400">Client / Institution</div>
                <div className="text-sm font-bold">{project.client}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400">Role & Scope</div>
                <div className="text-sm font-bold">{project.role}</div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          {project.metrics && (
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric, mIdx) => (
                <div 
                  key={mIdx}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border flex items-center gap-1.5 ${
                    isDark ? 'bg-slate-900 border-slate-800 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  }`}
                >
                  <Zap className="w-3 h-3 text-emerald-400" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          )}

          {/* Case Study 3-Pillar Breakdown (Challenge -> Solution -> Measurable Results) */}
          <div className="space-y-4">
            
            {/* The Challenge */}
            <div className={`p-4 rounded-2xl border ${
              isDark ? 'bg-red-950/20 border-red-500/20' : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-red-400 mb-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>The Technical Challenge</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.challenge || project.summary}
              </p>
            </div>

            {/* The Solution & Architecture */}
            <div className={`p-4 rounded-2xl border ${
              isDark ? 'bg-blue-950/20 border-blue-500/20' : 'bg-blue-50 border-blue-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-blue-400 mb-1.5">
                <Cpu className="w-4 h-4" />
                <span>Engineered Solution & Architecture</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.solution || project.summary}
              </p>
            </div>

            {/* Measurable Results & Impact */}
            <div className={`p-4 rounded-2xl border ${
              isDark ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-400 mb-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Measurable Results & Delivery Impact</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.results || project.summary}
              </p>
            </div>

          </div>

          {/* Key Deliverable Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase font-mono text-emerald-400 mb-3">
              Key Engineering Deliverables
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Applied Technologies */}
          <div>
            <h4 className="text-xs font-bold uppercase font-mono text-slate-400 mb-2.5">
              Production Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                    isDark 
                      ? 'bg-slate-900 border-slate-700 text-slate-200' 
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800/80 bg-slate-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-200 transition"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
