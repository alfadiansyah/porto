import React, { useState } from 'react';
import { MessageSquare, Copy, Check, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Contact Section
 * 100% Taste-Skill Compliance:
 * - Doppelrand Double-Bezel Frame Architecture
 * - 0% Emojis, 100% Solid 60-30-10 Palette
 * - Button-in-Button kinetic submit CTA
 */
export default function Contact({ onShowToast }) {
  const { personalInfo } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct pre-filled WhatsApp message (0% emojis)
    const formattedText = `Hi Giovanni!%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A%0A*Message:*%0A${encodeURIComponent(form.message)}`;
    const waUrl = `https://wa.me/6281395540904?text=${formattedText}`;
    
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSent(true);
    if (onShowToast) onShowToast('Redirecting to WhatsApp chat...');
  };

  return (
    <section id="contact" className="relative w-full py-28 md:py-36 bg-white dark:bg-[#0f1117] text-slate-900 dark:text-white transition-colors">
      
      <div className="container px-4 sm:px-6 mx-auto max-w-3xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 mb-3">
            <span>[ 07 // GET IN TOUCH ]</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel">
            Start a Conversation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Have an enterprise project, software consulting inquiry, or engineering role? Connect directly via WhatsApp.
          </p>
        </div>

        {/* Doppelrand Double-Bezel Form Frame */}
        <div className="rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02]">
          <div className="rounded-[calc(2rem-0.375rem)] p-7 sm:p-10 bg-white dark:bg-[#161b26] border border-slate-100 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">

            {sent ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-emerald-900 dark:text-emerald-200">WhatsApp Chat Dispatched</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Your inquiry message has been formatted and transferred to WhatsApp.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', message: '' });
                  }}
                  className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-500"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0f1117] text-slate-900 dark:text-white rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="email">
                    Your Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0f1117] text-slate-900 dark:text-white rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter your corporate or personal email"
                    name="email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="message">
                    Project Scope or Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0f1117] text-slate-900 dark:text-white rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                    rows="4"
                    placeholder="Describe your architecture requirements, timeline, or engineering opportunity..."
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Button-in-Button Submit Button */}
                <button
                  className="w-full py-2.5 pl-5 pr-1.5 rounded-full font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-between shadow-xs transition-all duration-200 group active:scale-98"
                  type="submit"
                >
                  <span>Dispatch Message via WhatsApp</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </form>
            )}

            {/* Direct Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 rounded-full bg-slate-50 dark:bg-[#0f1117] hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 transition active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Quick WhatsApp Chat</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2.5 px-4 rounded-full bg-slate-50 dark:bg-[#0f1117] hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 transition active:scale-98"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Copy {personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* GitHub Monogram Badge */}
        <div className="flex justify-center mt-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-[#161b26] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all shadow-xs"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>github.com/alfadiansyah</span>
          </a>
        </div>

      </div>

    </section>
  );
}
