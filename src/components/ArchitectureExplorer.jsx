import React, { useState } from 'react';
import { Shield, Server, Cpu, CheckCircle2, ArrowRight, Layers, Lock, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ArchitectureExplorer({ isDark }) {
  const { architectures } = portfolioData;
  const [activeArchId, setActiveArchId] = useState(architectures[0].id);
  const [selectedNode, setSelectedNode] = useState(0);

  const activeArch = architectures.find(a => a.id === activeArchId) || architectures[0];

  const getIcon = (id) => {
    if (id === 'bssn-lms') return <Shield className="w-4 h-4 text-emerald-400" />;
    if (id === 'bank-mega-ccbm') return <Server className="w-4 h-4 text-brand-400" />;
    return <Cpu className="w-4 h-4 text-amber-400" />;
  };

  return (
    <section className={`pt-12 pb-14 border-t ${
      isDark ? 'border-[#222f46]' : 'border-slate-200'
    }`}>
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Technical Showcase</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            Enterprise System Architectures
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 mt-1">
            Click to inspect real-world production architectures, security workflows, and data pipelines engineered by Giovanni.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {architectures.map((arch) => (
            <button
              key={arch.id}
              onClick={() => {
                setActiveArchId(arch.id);
                setSelectedNode(0);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeArchId === arch.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : isDark 
                    ? 'bg-dark-card border border-dark-border text-slate-300 hover:text-white' 
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {getIcon(arch.id)}
              <span>{arch.badge}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Visualizer Box */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${
        isDark 
          ? 'bg-[#111827] border-[#222f46] shadow-xl' 
          : 'bg-white border-slate-200 shadow-md'
      }`}>
        
        {/* Title & Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-500 font-semibold mb-1">
              <span>{activeArch.client}</span>
              <span>•</span>
              <span>{activeArch.role}</span>
            </div>
            <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {activeArch.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 mt-1 max-w-2xl">
              {activeArch.summary}
            </p>
          </div>

          {/* Key Metrics Pills */}
          <div className="grid grid-cols-2 gap-2 shrink-0">
            {activeArch.metrics.map((m, idx) => (
              <div key={idx} className={`p-2.5 rounded-xl border text-xs ${
                isDark ? 'bg-[#161f30] border-[#222f46]' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                <div className="font-bold text-brand-500 dark:text-brand-400">{m.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Node Pipeline Flow */}
        <div className="py-6">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-2">
            <span>Pipeline & Topology: (Click a node to inspect)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {activeArch.nodes.map((node, nIdx) => (
              <button
                key={nIdx}
                onClick={() => setSelectedNode(nIdx)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  selectedNode === nIdx
                    ? 'border-brand-500 bg-brand-500/10 shadow-md ring-2 ring-brand-500/20'
                    : isDark ? 'border-[#222f46] bg-[#161f30] hover:border-slate-600' : 'border-slate-200 bg-slate-50 hover:border-slate-400'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 mb-1">
                  <span>Step 0{nIdx + 1}</span>
                  {selectedNode === nIdx && <span className="w-2 h-2 rounded-full bg-brand-500"></span>}
                </div>
                <div className={`text-xs font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {node.name}
                </div>
                <div className="text-[11px] font-mono text-brand-500 dark:text-brand-400 font-medium">
                  {node.type}
                </div>
              </button>
            ))}
          </div>

          {/* Active Node Detail Card */}
          <div className={`mt-4 p-4 rounded-2xl border flex items-start gap-3 ${
            isDark ? 'bg-[#0b0f19] border-[#222f46]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="w-8 h-8 rounded-xl bg-brand-600/20 text-brand-500 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {activeArch.nodes[selectedNode].name} — <span className="text-brand-500 font-mono text-[11px]">{activeArch.nodes[selectedNode].type}</span>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-300 mt-0.5">
                {activeArch.nodes[selectedNode].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Technical Decision Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
          <div className={`p-4 rounded-2xl border ${
            isDark ? 'bg-[#161f30] border-[#222f46]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="font-bold text-rose-500 mb-1">⚠️ Engineering Challenge:</div>
            <p className="text-slate-300 dark:text-slate-300 leading-relaxed">{activeArch.challenge}</p>
          </div>
          <div className={`p-4 rounded-2xl border ${
            isDark ? 'bg-[#161f30] border-[#222f46]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="font-bold text-emerald-500 mb-1">✅ Architectural Solution:</div>
            <p className="text-slate-300 dark:text-slate-300 leading-relaxed">{activeArch.solution}</p>
          </div>
        </div>

        {/* Tech Stack Footer Chips */}
        <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-slate-400 mr-2 uppercase font-semibold">Tech Stack:</span>
          {activeArch.techStack.map((tech, tIdx) => (
            <span
              key={tIdx}
              className={`text-xs font-mono px-2.5 py-0.5 rounded-lg border ${
                isDark ? 'bg-[#161f30] border-[#222f46] text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}
