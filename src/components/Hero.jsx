import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, MessageSquare, Briefcase, ArrowUpRight } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

/**
 * 3D Spline Cinematic Hero Section
 * Fully engineered under gpt-taste & high-end-visual-design specifications:
 * - 2-Line Iron Rule on Heading with ultra-wide container
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

  // Secondary DOM / Shadow DOM cleanup for Spline badge
  useEffect(() => {
    const removeWatermark = () => {
      const watermarks = document.querySelectorAll(
        '#spline-watermark, #logo, a[href*="spline.design"], [data-spline-watermark], [class*="watermark"], [id*="watermark"]'
      );
      watermarks.forEach((el) => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
        try { el.remove(); } catch (e) {}
      });

      document.querySelectorAll('*').forEach((node) => {
        if (node.shadowRoot) {
          const badge = node.shadowRoot.querySelector('#logo, a[href*="spline.design"], #spline-watermark, [class*="watermark"], [id*="watermark"]');
          if (badge) {
            badge.style.display = 'none';
            badge.style.opacity = '0';
            try { badge.remove(); } catch (e) {}
          }
        }
      });
    };

    removeWatermark();
    const interval = setInterval(removeWatermark, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" ref={containerRef} className="relative w-full min-h-[100dvh] overflow-hidden bg-black flex items-center justify-center">
      
      {/* 1. Symmetrical 3D Spline Background Canvas */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden pointer-events-auto flex items-center justify-center">
        <div className="absolute -top-[120px] -bottom-[120px] -left-[320px] -right-[320px] w-[calc(100%+640px)] h-[calc(100%+240px)]">
          <Spline
            scene="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
            aria-label="Interactive 3D animation"
            onLoad={(splineApp) => {
              try {
                if (splineApp && splineApp._scene) {
                  splineApp._scene.traverse((obj) => {
                    if (obj.name && /watermark|logo|spline/i.test(obj.name)) {
                      obj.visible = false;
                    }
                  });
                }
              } catch (e) {}
            }}
          />
        </div>
      </div>

      {/* 2. Overlay Cinematic Content (Ultra-Wide Container, 2-Line Heading Rule) */}
      <div className="relative z-20 flex items-center justify-center w-full h-full px-4 sm:px-6 md:px-12 py-32 text-center bg-black/40 pointer-events-none">
        <div className="w-full max-w-5xl pointer-events-auto">
          
          {/* Eyebrow Status Pill (Double-Bezel) */}
          <div className="flex justify-center mb-6">
            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#161b26]/90 border border-white/10 text-slate-300 backdrop-blur-xl hover:border-blue-500 hover:text-white transition-all shadow-md active:scale-98"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="tracking-wide">Available for Freelance & Technical Consulting</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* 2-Line Max Editorial Typography */}
          <h1 className="font-pixel text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] [text-shadow:_0_4px_12px_rgb(0_0_0_/_60%)]">
            <span className="inline-flex items-center gap-x-2">
              <WordRotate words={greetings} />
              <span>, I&apos;m</span>
            </span>{" "}
            <span className="text-white block sm:inline">Giovanni Alfadiansyah</span>
          </h1>

          {/* Subheading Skills Ticker */}
          <div className="flex justify-center mt-5">
            <RotatingText
              texts={skills}
              mainClassName="text-base sm:text-xl md:text-2xl font-bold text-yellow-300 [text-shadow:_0_2px_6px_rgb(0_0_0_/_60%)] tracking-tight"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
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
