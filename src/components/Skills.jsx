import React, { useState } from 'react';
import { VelocityText } from './ScrollVelocity';
import { 
  Java, 
  SpringBoot, 
  PostgreSQL, 
  Docker, 
  Odoo, 
  ReactLogo, 
  Nextjs, 
  Javascript, 
  Typescript, 
  Node, 
  Git, 
  Postman, 
  Mysql, 
  Html, 
  Css, 
  MongoDB, 
  Php 
} from './SkillLogos';
import { Highlighter } from "@/components/ui/highlighter";
import { portfolioData } from '../data/portfolioData';

const skillsRow1 = [
  <Java key="java" />,
  <SpringBoot key="spring" />,
  <PostgreSQL key="postgresql" />,
  <Docker key="docker" />,
  <Odoo key="odoo" />,
  <ReactLogo key="react" />,
  <Nextjs key="nextjs" />,
  <Javascript key="js" />,
];

const skillsRow2 = [
  <Typescript key="ts" />,
  <Node key="node" />,
  <Postman key="postman" />,
  <Git key="git" />,
  <Mysql key="mysql" />,
  <MongoDB key="mongodb" />,
  <Php key="php" />,
  <Html key="html" />,
];

export default function Skills() {
  const { skillsCategories } = portfolioData;
  const [selectedCat, setSelectedCat] = useState('all');

  const displayedCategories = selectedCat === 'all'
    ? skillsCategories
    : skillsCategories.filter(c => c.id === selectedCat);

  return (
    <section id="skills" className="w-full bg-white dark:bg-[#0f1117] text-black dark:text-white py-24 transition-colors">
      <div className="container mx-auto text-center px-4">
        
        {/* Title */}
        <div className="inline-block mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Tech Stack & Skills
            </Highlighter>
          </h2>
        </div>
      </div>

      {/* Infinite Velocity Logo Tickers */}
      <div className="relative max-w-screen-lg mx-auto flex flex-col gap-4 overflow-hidden mb-16">
        
        {/* Left Blur */}
        <div 
          className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0))',
            filter: 'blur(6px)'
          }}
        />
        {/* Right Blur */}
        <div 
          className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
          style={{
            background: 'linear-gradient(to left, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0))',
            filter: 'blur(6px)'
          }}
        />

        <VelocityText baseVelocity={-4} numCopies={4}>
          {skillsRow1.map((logo, index) => (
            <div key={index} className="w-20 h-20 mx-4 p-2 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center">
              {logo}
            </div>
          ))}
        </VelocityText>

        <VelocityText baseVelocity={4} numCopies={4}>
          {skillsRow2.map((logo, index) => (
            <div key={index} className="w-20 h-20 mx-4 p-2 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center">
              {logo}
            </div>
          ))}
        </VelocityText>

      </div>

      {/* Category Pills & Breakdown */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex justify-center gap-2 flex-wrap mb-8">
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCat === 'all'
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
            }`}
          >
            All Tools
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCat === cat.id
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <h3 className="text-base font-bold mb-3 flex items-center justify-between text-gray-900 dark:text-gray-100">
                <span>{cat.title}</span>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">{cat.skills.length} tools</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 text-xs font-mono flex items-center gap-1.5 shadow-sm"
                  >
                    <span className="font-bold">{s.name}</span>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">{s.years}</span>
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
