import React from 'react';
import { cvData, WorkExperience } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  CalendarBlank,
  Tag
} from '@phosphor-icons/react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-zinc-800 text-left">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1 rounded bg-zinc-800 text-zinc-300">
            <Briefcase size={16} weight="bold" />
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            Career Timeline & Impact
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Professional Work Experience
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
          Track record in backend engineering, enterprise ERP consulting, legacy banking re-platforming, and full-stack software development.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {cvData.experiences.map((exp: WorkExperience, idx: number) => (
          <div
            key={exp.id || idx}
            className="p-5 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-colors text-left"
          >
            {/* Header / Role Info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {exp.company}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                    {exp.type}
                  </span>
                </div>
                <div className="text-xs font-semibold text-zinc-300">
                  {exp.role}
                </div>
              </div>

              <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1 font-semibold text-zinc-400">
                  <CalendarBlank size={13} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={13} />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Summary */}
            {exp.summary && (
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {exp.summary}
              </p>
            )}

            {/* Standard Bullets */}
            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, bIdx) => {
                  const colonIndex = bullet.indexOf(':');
                  const hasLabel = colonIndex !== -1 && colonIndex < 40;
                  const label = hasLabel ? bullet.substring(0, colonIndex) : null;
                  const text = hasLabel ? bullet.substring(colonIndex + 1) : bullet;

                  return (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 flex-shrink-0"></span>
                      <div>
                        {label ? (
                          <>
                            <strong className="text-white font-medium">{label}:</strong>
                            <span>{text}</span>
                          </>
                        ) : (
                          <span>{bullet}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Sub-Placements (e.g. Bank Mega & Internal Pharmacy for PT Xsis) */}
            {exp.subPlacements && exp.subPlacements.length > 0 && (
              <div className="space-y-4 mb-4 pt-2">
                {exp.subPlacements.map((sub, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-zinc-800">
                      <h4 className="text-xs sm:text-sm font-bold text-white font-sans">
                        {sub.title}
                      </h4>
                      {sub.metrics && (
                        <div className="flex gap-1.5">
                          {sub.metrics.map((m, mIdx) => (
                            <span key={mIdx} className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300">
                              {m}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ul className="space-y-1.5">
                      {sub.bullets.map((bullet, sbIdx) => {
                        const colonIndex = bullet.indexOf(':');
                        const hasLabel = colonIndex !== -1 && colonIndex < 45;
                        const label = hasLabel ? bullet.substring(0, colonIndex) : null;
                        const text = hasLabel ? bullet.substring(colonIndex + 1) : bullet;

                        return (
                          <li key={sbIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 flex-shrink-0"></span>
                            <div>
                              {label ? (
                                <>
                                  <strong className="text-white font-medium">{label}:</strong>
                                  <span>{text}</span>
                                </>
                              ) : (
                                <span>{bullet}</span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Tags */}
            {exp.tags && (
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-zinc-800/70">
                <span className="text-[11px] font-mono text-zinc-500 mr-1 flex items-center gap-1">
                  <Tag size={12} /> Tech:
                </span>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
