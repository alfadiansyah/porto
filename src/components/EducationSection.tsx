import React from 'react';
import { cvData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Certificate, 
  UsersThree
} from '@phosphor-icons/react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-12 sm:py-16 border-b border-zinc-800 text-left">
      {/* Education Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1 rounded bg-zinc-800 text-zinc-300">
            <GraduationCap size={16} weight="bold" />
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            Academic & Credentials
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Education, Certifications & Leadership
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Formal computer science education, intensive enterprise engineering bootcamps, and organizational leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formal Education (1 Column) */}
        <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                <GraduationCap size={16} />
              </span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Formal Education
              </h3>
            </div>

            {cvData.education.map((edu, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-base font-bold text-white">
                  {edu.institution}
                </div>
                <div className="text-xs font-semibold text-zinc-300">
                  {edu.degree}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1 pb-3 border-b border-zinc-800/80">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-mono font-bold text-zinc-400 mb-2">
                    Core Technical Coursework:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications (1 Column) */}
        <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                <Certificate size={16} />
              </span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {cvData.certifications.map((cert, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-1.5 py-0.2 rounded">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {cert.period}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white leading-snug">
                    {cert.title}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-1.5 py-0.2 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership & Organization (1 Column) */}
        <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                <UsersThree size={16} />
              </span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {cvData.leadership.map((lead, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white">
                      {lead.role}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {lead.period}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {lead.organization}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800/80">
                    Scope: {lead.participantsOrScope}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {lead.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
