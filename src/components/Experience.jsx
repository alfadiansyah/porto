import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Highlighter } from "@/components/ui/highlighter";
import { portfolioData } from '../data/portfolioData';

/**
 * Work Experience Timeline
 * Engineered strictly under gpt-taste, high-end-visual-design, & minimalist-ui:
 * - Double-Bezel (Doppelrand) Nested Card Architecture
 * - 0% Emojis, 100% Solid 60-30-10 Palette
 * - Editorial Hierarchy & Clean Spacing
 */
export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="relative w-full py-28 md:py-36 bg-white dark:bg-[#0f1117] text-slate-900 dark:text-white transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 mb-3">
            <span>[ 02 // CAREER TIMELINE ]</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel">
            <Highlighter action="underline" color="#FFD700">
              Work Experience
            </Highlighter>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            My professional career journey across government cybersecurity, enterprise banking, and consulting.
          </p>
        </div>

        {/* Timeline Cards (Double-Bezel Architecture) */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] transition-all duration-300 hover:border-slate-400 dark:hover:border-white/20"
            >
              <div className="rounded-[calc(2rem-0.375rem)] p-7 sm:p-9 bg-white dark:bg-[#161b26] border border-slate-100 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                
                {/* Header: Company, Badge, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>
                    {exp.badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-emerald-600 text-white shadow-xs">
                        {exp.badge}
                      </span>
                    )}
                    <span className="text-xs px-3 py-1 rounded-lg border font-mono font-semibold bg-slate-100 dark:bg-[#0f1117] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role & Location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold text-blue-600 dark:text-blue-400 mb-4">
                  <span className="text-base">{exp.role}</span>
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" /> {exp.location}
                  </span>
                </div>

                {/* Bullet Highlights */}
                {exp.highlights && (
                  <ul className="space-y-2.5 mb-5 text-xs sm:text-sm leading-relaxed">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subprojects (Bank Mega CCBM & Pharmacy) */}
                {exp.subProjects && (
                  <div className="space-y-3 mb-5">
                    {exp.subProjects.map((sub, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-4 sm:p-5 rounded-2xl border bg-slate-50 dark:bg-[#0f1117] border-slate-200/80 dark:border-white/5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-200/60 dark:border-white/5">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {sub.title}
                          </h4>
                          <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                            {sub.duration}
                          </span>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm">
                          {sub.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2 uppercase font-bold">Stack:</span>
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-lg border font-mono font-semibold bg-slate-50 dark:bg-[#0f1117] border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
