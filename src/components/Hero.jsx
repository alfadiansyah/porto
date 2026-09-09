import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, MessageSquare, Briefcase, Sparkles } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

/**
 * 3D Spline Hero Section with 1-Click Direct CV Download & Freelance Services CTA.
 */
export default function Hero() {
  const containerRef = useRef(null);

  const skills = [
    'Software Engineer',
    'Java 21 & Spring Boot',
    'BSSN Cybersecurity IAM',
    'Bank Mega Modernization',
    'Odoo ERP MES Consultant',
    'Full Stack Developer'
  ];
  
  const greetings = ["Hello", "Halo", "Ciao", "Hola", "مرحبا"];

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
    <section id="hero" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* 1. Symmetrical 3D Spline Background (Centered with off-screen watermark clipping) */}
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

      {/* 2. Overlay Content */}
      <div className="relative z-20 flex items-center justify-center w-full h-full p-8 text-center bg-black/35 pointer-events-none sm:p-16 md:p-24">
        <div className="max-w-2xl pointer-events-auto">
          
          {/* Availability & Freelance Badge */}
          <div className="flex justify-center mb-4">
            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#161b26]/90 border border-blue-500/50 text-blue-400 backdrop-blur-md hover:bg-blue-600 hover:text-white transition-all shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Freelance & Retainer</span>
              <Sparkles size={13} className="text-yellow-400" />
            </a>
          </div>

          <h1 className="font-pixel flex items-center justify-center gap-x-2 text-4xl font-extrabold text-white sm:text-6xl md:text-7xl [text-shadow:_0_3px_6px_rgb(0_0_0_/_50%)]">
            <WordRotate words={greetings} />
            {", I'm"}
          </h1>
          
          <div className="mt-1 text-3xl sm:text-5xl font-black text-white [text-shadow:_0_3px_6px_rgb(0_0_0_/_50%)]">
            Giovanni Alfadiansyah
          </div>

          {/* Rotating Text for Skills */}
          <div className="flex justify-center mt-4">
            <RotatingText
              texts={skills}
              mainClassName="text-base sm:text-xl md:text-2xl font-bold text-yellow-300 [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
          </div>
        
          {/* Call-to-action buttons (60-30-10 solid colors, no gradients) */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            
            {/* 10% Primary Accent: Freelance Services */}
            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md pointer-events-auto hover:scale-105 active:scale-95"
            >
              <Briefcase size={18} />
              Freelance Services
            </a>

            {/* 30% Structural Secondary: View My Work */}
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-bold text-slate-900 transition-all duration-200 bg-white rounded-xl shadow-md pointer-events-auto hover:bg-slate-100 hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            
            {/* 30% Secondary Outline: Download CV */}
            <a
              href="./cv/CV_Giovanni_Alfadiansyah.pdf"
              download="CV_Giovanni_Alfadiansyah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-bold text-slate-200 transition-all duration-200 bg-[#161b26]/90 border border-slate-600 rounded-xl shadow-md pointer-events-auto hover:bg-slate-700 hover:text-white hover:scale-105"
            >
              <Download size={18} />
              Download CV
            </a>
            
            {/* Action Accent: WhatsApp */}
            <a
              href="https://wa.me/6281395540904?text=Hi%20Giovanni,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md pointer-events-auto hover:scale-105"
            >
              <MessageSquare size={18} />
              WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
