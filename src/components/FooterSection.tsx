import React, { useState, useEffect } from 'react';
import { cvData } from '../data/portfolioData';
import { 
  EnvelopeSimple, 
  FileText,
  WhatsappLogo,
  Clock,
  ArrowUp,
  Check
} from '@phosphor-icons/react';

export const FooterSection: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.header.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-12 sm:py-16 text-left border-t border-zinc-800/80 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left Column: Let's Connect */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
              Let's Connect & Build Together
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Interested in working together or discussing enterprise architecture?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
            Feel free to reach out directly for backend engineering roles, technical consulting, or enterprise system modernization.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <EnvelopeSimple size={15} />
              <span>{cvData.header.email}</span>
              {copiedEmail && <Check size={12} className="text-emerald-400" />}
            </button>

            <a
              href={cvData.header.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 hover:border-zinc-700 text-xs font-medium text-emerald-400 flex items-center gap-2 transition-colors"
            >
              <WhatsappLogo size={15} weight="fill" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Links & Resume */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Verified Résumé (PDF)
            </div>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Download the official standard PDF CV aligned with all enterprise project deliverables and qualifications.
            </p>
            <a
              href={cvData.header.pdfUrl}
              download={cvData.header.filename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-colors shadow-sm"
            >
              <FileText size={15} weight="bold" />
              <span>Download CV (Standard PDF)</span>
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-zinc-400" />
              <span>Jakarta (WIB):</span>
              <span className="text-zinc-300 font-semibold">{time || '16:53:00'}</span>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} {cvData.header.name}. Grounded in real production deliverables.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={cvData.header.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={cvData.header.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={`mailto:${cvData.header.email}`}
            className="hover:text-zinc-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
