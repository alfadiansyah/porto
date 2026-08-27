import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, MessageSquare } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

/**
 * 3D Spline Hero Section with 1-Click Direct CV Download.
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
        <div className="max-w-xl pointer-events-auto">
          
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
        
          {/* Call-to-action buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-black transition-all duration-300 bg-white rounded-xl shadow-lg pointer-events-auto hover:bg-gray-100 hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            
            {/* Direct 1-Click CV Download */}
            <a
              href="/cv/CV_Giovanni_Alfadiansyah.pdf"
              download="CV_Giovanni_Alfadiansyah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-white transition-all duration-300 bg-black/40 border border-white/80 backdrop-blur-sm rounded-xl shadow-lg pointer-events-auto hover:bg-white hover:text-black hover:scale-105"
            >
              <Download size={18} />
              Download CV
            </a>
            
            <a
              href="https://wa.me/6281395540904?text=Hi%20Giovanni,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-bold text-emerald-400 transition-all duration-300 bg-emerald-950/60 border border-emerald-500/50 backdrop-blur-sm rounded-xl shadow-lg pointer-events-auto hover:bg-emerald-500 hover:text-white hover:scale-105"
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
