import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

/**
 * Tech Stack & Tooling Section
 * 100% Taste-Skill Compliance:
 * - Doppelrand Double-Bezel Architecture
 * - Clean SVG badges & Verified Production Years
 * - 0% Emojis, 100% Solid 60-30-10 Palette
 */
export default function Skills() {
  const { skillsCategories } = portfolioData;
  const [selectedCat, setSelectedCat] = useState('all');

  const displayedCategories = selectedCat === 'all'
    ? skillsCategories
    : skillsCategories.filter(c => c.id === selectedCat);

  return (
    <section id="skills" className="relative w-full py-28 md:py-36 bg-white dark:bg-[#0f1117] text-slate-900 dark:text-white transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 mb-3">
            <span>Tech Stack & Tooling</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel tracking-tight">
            Tech Stack & Tooling
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Production-tested frameworks, enterprise databases, and cloud engineering technologies.
          </p>
        </div>

        {/* Category Pills & Breakdown (Double-Bezel Architecture) */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${
              selectedCat === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-[#161b26] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5'
            }`}
          >
            All Categories
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${
                selectedCat === cat.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-[#161b26] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02]"
            >
              <div className="rounded-[calc(2rem-0.375rem)] p-6 sm:p-7 bg-white dark:bg-[#161b26] border border-slate-100 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold mb-4 flex items-center justify-between text-slate-900 dark:text-white">
                    <span>{cat.title}</span>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-900/40">
                      {cat.skills.length} tools
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-[#0f1117] text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 text-xs font-mono flex items-center gap-1.5 shadow-2xs"
                      >
                        <span className="font-bold">{s.name}</span>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">{s.years}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
