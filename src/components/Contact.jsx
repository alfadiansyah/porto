import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Copy, Check, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ isDark, onShowToast }) {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    if (onShowToast) onShowToast('Thank you! Message transmitted successfully.');
  };

  return (
    <section id="contact" className={`py-16 border-t ${
      isDark ? 'border-dark-border' : 'border-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Contact Banner */}
        <div className={`p-8 sm:p-12 rounded-3xl border text-center relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-b from-dark-surface to-dark-bg border-dark-border shadow-2xl' 
            : 'bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-xl'
        }`}>
          
          <div className="max-w-2xl mx-auto space-y-4">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Full-time Roles & Strategic Consulting</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Let’s Build Something <span className="wavy-yellow">Awesome</span>.
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Whether you need high-performance Java microservices, government-grade cybersecurity IAM, or enterprise ERP architecture, feel free to reach out directly.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              
              {/* WhatsApp Direct */}
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-emerald hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Copy Email CTA */}
              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 ${
                  isDark 
                    ? 'border-dark-border bg-dark-card text-white hover:border-accent-blue' 
                    : 'border-slate-200 bg-white text-slate-900 hover:border-accent-blue shadow-sm'
                }`}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4 text-accent-blue" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>

              {/* Direct Email Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-3.5 rounded-xl border transition-all hover:scale-105 ${
                  isDark ? 'bg-dark-card border-dark-border text-accent-blue' : 'bg-white border-slate-200 text-accent-blue shadow-sm'
                }`}
                title="Open Mail Client"
              >
                <Mail className="w-4 h-4" />
              </a>

            </div>

            {/* Social Profiles */}
            <div className="flex items-center justify-center gap-5 pt-4 text-xs font-mono">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-blue font-bold transition flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn ↗
              </a>
              <span className="text-slate-400">•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-blue font-bold transition flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" /> GitHub ↗
              </a>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">Bogor, West Java, ID</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
