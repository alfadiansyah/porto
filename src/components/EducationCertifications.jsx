import React from 'react';
import { GraduationCap, Award, Users, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCertifications({ isDark }) {
  const { education, certifications, leadership } = portfolioData;

  return (
    <section id="education" className={`py-16 border-t ${
      isDark ? 'border-dark-border' : 'border-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education & <span className="wavy-purple">Credentials</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Academic degree, verified professional bootcamps, and executive event leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Education Card */}
          <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all hover:shadow-lg ${
            isDark ? 'bg-dark-surface border-dark-border text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-dark-border">
                <div className="flex items-center gap-2 text-accent-blue">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">Education</span>
                </div>
                <span className="text-xs font-mono text-accent-yellow font-bold">2017 – 2023</span>
              </div>

              <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Universitas Padjadjaran (UNPAD)
              </h3>
              <p className="text-xs font-semibold text-accent-blue dark:text-accent-cyan mb-3">
                S1 Teknik Informatika (Bachelor of Computer Science)
              </p>
              <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Rigorous study in Distributed Computing, Algorithms, Software Engineering, and Database Architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100 dark:border-dark-border">
              {education[0].coursework.slice(0, 4).map((c, i) => (
                <span key={i} className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                  isDark ? 'bg-dark-card border-dark-border text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all hover:shadow-lg ${
            isDark ? 'bg-dark-surface border-dark-border text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-dark-border">
                <div className="flex items-center gap-2 text-accent-emerald">
                  <Award className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">Certifications</span>
                </div>
                <span className="text-xs font-mono text-accent-emerald font-bold">Verified</span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[11px] font-mono text-accent-blue font-semibold">{cert.issuer}</span>
                    <h4 className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {cert.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-dark-border">
              <span className="text-[11px] font-mono text-slate-400">
                Enterprise Java, Microservices & APIs
              </span>
            </div>
          </div>

          {/* Leadership Card */}
          <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all hover:shadow-lg ${
            isDark ? 'bg-dark-surface border-dark-border text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-dark-border">
                <div className="flex items-center gap-2 text-accent-purple">
                  <Users className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">Leadership</span>
                </div>
                <span className="text-xs font-mono text-accent-yellow font-bold">500+ Org</span>
              </div>

              <div className="space-y-4">
                {leadership.map((lead, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono text-accent-blue font-bold">
                      <span>{lead.role}</span>
                      <span>{lead.period}</span>
                    </div>
                    <h4 className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                      {lead.organization}
                    </h4>
                    <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {lead.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-dark-border">
              <span className="text-[11px] font-mono text-slate-400">
                UNPAD Informatics Event Leadership
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
