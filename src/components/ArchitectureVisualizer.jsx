import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Database, 
  KeyRound, 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Sparkles,
  Server,
  Zap,
  Lock,
  Workflow
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ArchitectureVisualizer({ isDark }) {
  const { architectures } = portfolioData;
  const [selectedArchId, setSelectedArchId] = useState(architectures[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeArch = architectures.find((a) => a.id === selectedArchId) || architectures[0];

  const handleSelectArch = (id) => {
    setSelectedArchId(id);
    setActiveStepIndex(0);
  };

  return (
    <section id="architecture" className="py-20 relative border-t border-slate-800/40">
      
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Interactive System Architectures</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Enterprise System Blueprints
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Explore the real-world architectural design, cryptographic zero-trust flows, and high-throughput pipelines engineered in production for government and enterprise institutions.
          </p>
        </div>

        {/* Architecture Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {architectures.map((arch) => {
            const isSelected = arch.id === selectedArchId;
            return (
              <button
                key={arch.id}
                onClick={() => handleSelectArch(arch.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border-emerald-500/60 text-emerald-400 shadow-md shadow-emerald-500/10 scale-105'
                    : isDark 
                      ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {arch.id === 'bssn-lms' && <Lock className="w-4 h-4 text-emerald-400" />}
                {arch.id === 'bank-mega-ccbm' && <Server className="w-4 h-4 text-blue-400" />}
                {arch.id === 'odoo-st-mes' && <Cpu className="w-4 h-4 text-purple-400" />}
                <span>{arch.name.split(' ')[0]} {arch.name.split(' ')[1]}</span>
                <span className="hidden sm:inline-block text-xs font-normal opacity-70">
                  ({arch.badge.split('/')[0]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Architecture Workspace */}
        <div className={`rounded-2xl border p-6 sm:p-8 transition-all ${
          isDark 
            ? 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-slate-800 shadow-2xl shadow-black/40' 
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          
          {/* Header of Active Architecture */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/60 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {activeArch.badge}
                </span>
                <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {activeArch.name}
                </h3>
              </div>
              <p className={`text-sm font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {activeArch.subtitle}
              </p>
            </div>

            {/* Quick Metrics Tags */}
            <div className="flex flex-wrap gap-2">
              {activeArch.metrics.map((metric, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono border ${
                    isDark ? 'bg-slate-800/80 border-slate-700/60 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-4xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {activeArch.description}
          </p>

          {/* Interactive Steps Pipeline Visualizer */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              <span>Execution Pipeline (Click step to inspect)</span>
              <span>Step {activeStepIndex + 1} of {activeArch.steps.length}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {activeArch.steps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isCompleted = idx < activeStepIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`relative p-4 rounded-xl border text-left transition-all ${
                      isActive
                        ? 'bg-gradient-to-b from-emerald-500/20 to-slate-900 border-emerald-500 text-white shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/20'
                        : isCompleted
                          ? isDark 
                            ? 'bg-slate-900/40 border-slate-700/60 text-slate-300 hover:border-emerald-500/40' 
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                          : isDark
                            ? 'bg-slate-950/60 border-slate-800/60 text-slate-500 hover:text-slate-300'
                            : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                        isActive 
                          ? 'bg-emerald-500 text-slate-950' 
                          : isCompleted 
                            ? 'bg-emerald-500/20 text-emerald-400' 
                            : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/40">
                        {step.tag}
                      </span>
                    </div>
                    <div className="text-xs font-bold leading-snug line-clamp-2">
                      {step.title.split('. ')[1] || step.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Inspector Box for Active Step */}
          <div className={`p-5 rounded-xl border transition-all ${
            isDark ? 'bg-slate-950/80 border-emerald-500/30' : 'bg-emerald-50/50 border-emerald-200'
          }`}>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {activeArch.steps[activeStepIndex].title}
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {activeArch.steps[activeStepIndex].tag}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {activeArch.steps[activeStepIndex].detail}
                </p>
              </div>

              {/* Step Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition"
                >
                  Prev
                </button>
                <button
                  disabled={activeStepIndex === activeArch.steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(activeArch.steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
