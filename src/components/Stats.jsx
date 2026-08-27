import React from 'react';
import { Clock, ShieldCheck, Database, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Stats({ isDark }) {
  const { personalInfo } = portfolioData;

  const icons = [
    <Clock className="w-5 h-5 text-[#f5d061]" />,
    <ShieldCheck className="w-5 h-5 text-[#5f7161] dark:text-[#a7beb0]" />,
    <Database className="w-5 h-5 text-[#f5d061]" />,
    <Users className="w-5 h-5 text-[#5f7161] dark:text-[#a7beb0]" />
  ];

  return (
    <section className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {personalInfo.stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border transition-transform hover:-translate-y-1 ${
              isDark 
                ? 'bg-[#1a211c] border-[#28332c] text-sand-100 shadow-md' 
                : 'bg-white border-[#d9cab3] text-[#212121] shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-[#5f7161] dark:text-[#f5d061]">
                {stat.value}
              </span>
              <div className={`p-2 rounded-xl border ${
                isDark ? 'bg-[#151a17] border-[#2f3d34]' : 'bg-[#f6f6f6] border-[#d9cab3]'
              }`}>
                {icons[idx]}
              </div>
            </div>
            <div className="text-sm font-bold tracking-tight">
              {stat.label}
            </div>
            <p className="text-xs text-sand-400 dark:text-sand-400 mt-1 leading-snug">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
