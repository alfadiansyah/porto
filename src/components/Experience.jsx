import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ isDark }) {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className={`py-16 border-t ${
      isDark ? 'border-dark-border' : 'border-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Work <span className="wavy-blue">Experience</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            My professional career journey across government cybersecurity, enterprise banking, and consulting.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border transition-all hover:shadow-lg ${
                isDark 
                  ? 'bg-dark-surface border-dark-border text-white' 
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              
              {/* Header: Company, Badge, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100 dark:border-dark-border">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {exp.company}
                  </h3>
                  {exp.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-accent-emerald text-white">
                      {exp.badge}
                    </span>
                  )}
                  <span className={`text-xs px-2.5 py-0.5 rounded-lg border font-mono ${
                    isDark ? 'bg-dark-card border-dark-border text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/30 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role & Location */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold text-accent-blue dark:text-accent-cyan mb-4">
                <span>{exp.role}</span>
                <span className="text-xs font-normal text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent-coral" /> {exp.location}
                </span>
              </div>

              {/* Bullet Highlights */}
              {exp.highlights && (
                <ul className="space-y-2 mb-4 text-xs sm:text-sm leading-relaxed">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className={`flex items-start gap-2.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Subprojects (Bank Mega CCBM & Pharmacy) */}
              {exp.subProjects && (
                <div className="space-y-3 mb-4">
                  {exp.subProjects.map((sub, sIdx) => (
                    <div 
                      key={sIdx}
                      className={`p-4 rounded-2xl border ${
                        isDark ? 'bg-dark-card border-dark-border' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1 border-b border-slate-200 dark:border-dark-border">
                        <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {sub.title}
                        </h4>
                        <span className="text-xs font-mono font-bold text-accent-yellow">
                          {sub.duration}
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm">
                        {sub.details.map((detail, dIdx) => (
                          <li key={dIdx} className={`flex items-start gap-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="pt-3 border-t border-slate-100 dark:border-dark-border flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-400 mr-1 uppercase font-semibold">Stack:</span>
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-xs px-2.5 py-0.5 rounded-lg border font-mono ${
                      isDark ? 'bg-dark-card border-dark-border text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
