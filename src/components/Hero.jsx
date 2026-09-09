import React, { useRef } from 'react';
import { ArrowRight, Download, MessageSquare, Briefcase, ArrowUpRight, Terminal, Shield, Layers, Sparkles } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

/**
 * High-End Minimalist Editorial Hero Section
 * Fully engineered under gpt-taste, high-end-visual-design, & minimalist-ui:
 * - 0% 3D Distractions / No Robot
 * - 2-Line Max Iron Rule on Heading with ultra-wide container
 * - Double-Bezel nested Availability Pill
 * - Button-in-Button kinetic CTA architecture
 * - 0% Emojis, 100% Solid 60-30-10 palette
 */
export default function Hero() {
  const containerRef = useRef(null);

  const skills = [
    'Enterprise Software Engineer',
    'Java 21 & Spring Boot Microservices',
    'BSSN Cybersecurity IAM Systems',
    'Bank Mega Core Modernization',
    'Odoo ERP MES Technical Consultant',
    'Full Stack Web Architect'
  ];
  
  const greetings = ["Hello", "Halo", "Ciao", "Hola"];

  const scrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" ref={containerRef} className="relative w-full min-h-[92dvh] md:min-h-screen bg-[#0a0c10] text-white flex items-center justify-center overflow-hidden transition-colors">
      
      {/* 1. Subtle Precision Engineering Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* 2. Concentric Ambient Focal Lighting (Solid 60-30-10) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* 3. Hero Content Container (Ultra-Wide, Editorial Typography) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-12 py-32 md:py-40 text-center">
        <div className="w-full max-w-5xl">
          
          {/* Double-Bezel Availability Pill */}
          <div className="flex justify-center mb-8">
            <div className="rounded-full p-1 border border-white/10 bg-[#161b26]/80 backdrop-blur-xl shadow-lg">
              <a
                href="#services"
                onClick={scrollToServices}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#0f1117] text-slate-300 hover:text-white transition-all active:scale-98"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-wide">Available for Freelance & Technical Consulting</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 2-Line Max Editorial Typography */}
          <h1 className="font-pixel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.06]">
            <span className="inline-flex items-center gap-x-2">
              <WordRotate words={greetings} />
              <span>, I&apos;m</span>
            </span>{" "}
            <span className="text-white block sm:inline">Giovanni Alfadiansyah</span>
          </h1>

          {/* Subheading Skills Ticker */}
          <div className="flex justify-center mt-6">
            <RotatingText
              texts={skills}
              mainClassName="text-base sm:text-xl md:text-2xl font-bold text-yellow-300 tracking-tight"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
          </div>

          {/* Monospace Architecture Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#161b26] border border-white/10 text-slate-300">
              Java 21 Spring Boot
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#161b26] border border-white/10 text-slate-300">
              SSO ConnectIDN FAL2
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#161b26] border border-white/10 text-slate-300">
              Bank Mega CCBM 99.9% SLA
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#161b26] border border-white/10 text-slate-300">
              Odoo ERP MES
            </span>
          </div>
        
          {/* Kinetic Button-in-Button CTA Suite */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-10">
            
            {/* Primary Accent: Freelance Services (Button-in-Button) */}
            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-flex items-center gap-3 pl-5 pr-2 py-2 text-xs sm:text-sm font-bold text-white transition-all duration-200 bg-blue-600 hover:bg-blue-500 rounded-full shadow-md group active:scale-98"
            >
              <span>Freelance Services</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </div>
            </a>

            {/* Structural Secondary: View My Work */}
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-3 pl-5 pr-2 py-2 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-200 bg-white hover:bg-slate-100 rounded-full shadow-md group active:scale-98"
            >
              <span>View My Work</span>
              <div className="w-7 h-7 rounded-full bg-slate-950/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </div>
            </a>
            
            {/* Secondary Outline: Download CV */}
            <a
              href="./cv/CV_Giovanni_Alfadiansyah.pdf"
              download="CV_Giovanni_Alfadiansyah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 pl-5 pr-2 py-2 text-xs sm:text-sm font-bold text-slate-200 transition-all duration-200 bg-[#161b26]/90 border border-slate-700 hover:bg-slate-800 hover:text-white rounded-full shadow-md group active:scale-98"
            >
              <span>Download CV</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-200 group-hover:-translate-y-0.5">
                <Download className="w-3.5 h-3.5 text-white" />
              </div>
            </a>
            
            {/* Action Accent: WhatsApp */}
            <a
              href="https://wa.me/6281395540904?text=Hi%20Giovanni,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 pl-5 pr-2 py-2 text-xs sm:text-sm font-bold text-white transition-all duration-200 bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-md group active:scale-98"
            >
              <span>WhatsApp</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <MessageSquare className="w-3.5 h-3.5 text-white" />
              </div>
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}
