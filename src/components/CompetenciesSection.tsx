import React, { useState } from 'react';
import { cvData } from '../data/portfolioData';
import { 
  Code, 
  ShieldCheck, 
  Database, 
  CloudCheck, 
  Cpu, 
  Terminal,
  MagnifyingGlass
} from '@phosphor-icons/react';

export const CompetenciesSection: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('language')) return <Code size={16} />;
    if (cat.includes('backend')) return <Terminal size={16} />;
    if (cat.includes('security')) return <ShieldCheck size={16} />;
    if (cat.includes('erp') || cat.includes('enterprise')) return <Cpu size={16} />;
    if (cat.includes('database') || cat.includes('storage')) return <Database size={16} />;
    return <CloudCheck size={16} />;
  };

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-zinc-800 text-left">
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1 rounded bg-zinc-800 text-zinc-300">
              <Code size={16} weight="bold" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Technical Capabilities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technical Competencies & Toolchain
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Standardized competencies across enterprise backend, cybersecurity authentication, ERP systems, and cloud infrastructure.
          </p>
        </div>

        {/* Live Filter */}
        <div className="relative w-full sm:w-56">
          <input
            type="text"
            placeholder="Filter skills..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-700 font-mono"
          />
          <MagnifyingGlass size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      {/* Competencies Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cvData.competencies.map((comp, idx) => {
          const query = filterQuery.toLowerCase().trim();
          const filteredItems = comp.items.filter(item => 
            !query || item.toLowerCase().includes(query) || comp.category.toLowerCase().includes(query)
          );

          if (query && filteredItems.length === 0) return null;

          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {getCategoryIcon(comp.category)}
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    {comp.category}
                  </h3>
                </div>
                <p className="text-[11.5px] text-zinc-500 font-mono mb-4">
                  {comp.description}
                </p>

                {/* Items with flex wrap */}
                <div className="flex flex-wrap gap-1.5">
                  {filteredItems.map((item, iIdx) => {
                    const isHighlighted = query && item.toLowerCase().includes(query);
                    return (
                      <span
                        key={iIdx}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                          isHighlighted
                            ? 'bg-zinc-200 text-black font-semibold'
                            : 'bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
