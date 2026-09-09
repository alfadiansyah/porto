import React from 'react';
import { GraduationCap, Award, Users, Calendar, CheckCircle2 } from 'lucide-react';

/**
 * Education & Credentials Section
 * 100% Taste-Skill Compliance:
 * - Doppelrand Double-Bezel Frame Architecture
 * - 0% Emojis, 100% Solid 60-30-10 Palette
 */
export default function Education() {
  const educationData = [
    {
      category: "Formal Education",
      icon: GraduationCap,
      accentStyle: "bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
      items: [
        {
          title: "Bachelor of Science in Computer Science (S1 Teknik Informatika)",
          institution: "Universitas Padjadjaran (UNPAD)",
          location: "West Java, Indonesia",
          period: "Aug 2017 – Aug 2023",
          status: "Graduated",
          description: "Comprehensive computer science curriculum focused on backend engineering, distributed systems, and security.",
          highlights: [
            "Relevant Coursework: Distributed Systems, Network Security, Software Engineering, Database Systems, Data Structures & Algorithms, Web Technologies.",
          ]
        }
      ]
    },
    {
      category: "Verified Certifications & Bootcamps",
      icon: Award,
      accentStyle: "bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      items: [
        {
          title: "Back End Development and APIs Certification",
          institution: "freeCodeCamp",
          location: "Online Verified",
          period: "Verified",
          status: "Credential",
          description: "Full certification covering Node.js, Express, MongoDB, Mongoose, RESTful API architecture, and microservices.",
          highlights: [
            "Skills: REST APIs, Express.js, MongoDB, Backend Security, Async Architecture."
          ]
        },
        {
          title: "Enterprise Software Engineering Bootcamp (.NET & Java)",
          institution: "PT Xsis Mitra Utama",
          location: "Jakarta, Indonesia",
          period: "Intensive Program",
          status: "Certified",
          description: "Rigorous enterprise engineering training covering ASP.NET Core, C#, Java Spring Boot, SQL Server, and microservices design.",
          highlights: [
            "Skills: Java Spring Boot, C# (.NET Core), PostgreSQL, SQL Server, Microservices."
          ]
        }
      ]
    },
    {
      category: "Leadership & Organization",
      icon: Users,
      accentStyle: "bg-purple-600/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
      items: [
        {
          title: "Project Officer (Head of Event — 500+ Participants)",
          institution: "INSTAGRAM (Informatics Sports Arts & Games UNPAD)",
          location: "UNPAD, Indonesia",
          period: "Jan 2019 – Apr 2019",
          status: "Lead",
          description: "Led and orchestrated an executive committee of 30+ members to organize a faculty-wide multi-branch championship.",
          highlights: [
            "Managed 6 sports tournaments, 4 arts competitions, and 4 esports championships with 500+ attendees."
          ]
        },
        {
          title: "Vice Project Officer",
          institution: "MIPA Awards UNPAD",
          location: "UNPAD, Indonesia",
          period: "Apr 2019 – Dec 2019",
          status: "Vice Lead",
          description: "Co-managed event budgeting, talent acquisition, cross-departmental operations, and sponsor relations for the annual FMIPA UNPAD gala.",
          highlights: [
            "Coordinated with student leaders and faculty leadership for awards ceremony execution."
          ]
        }
      ]
    }
  ];

  return (
    <section id="education" className="relative w-full py-28 md:py-36 bg-white dark:bg-[#0f1117] text-slate-900 dark:text-white transition-colors">
      
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40 mb-3">
            <span>Education & Credentials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel tracking-tight">
            Education & Credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Academic degree, verified technical certifications, and leadership milestones.
          </p>
        </div>

        {/* Categories (Double-Bezel Concentric Architecture) */}
        <div className="space-y-8">
          {educationData.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={catIdx}
                className="rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02]"
              >
                <div className="rounded-[calc(2rem-0.375rem)] p-6 sm:p-8 bg-white dark:bg-[#161b26] border border-slate-100 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-white/5 mb-6">
                    <div className={`p-2.5 rounded-2xl border ${cat.accentStyle}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Items in Category */}
                  <div className="space-y-5">
                    {cat.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0f1117] border border-slate-200/60 dark:border-white/5 hover:border-blue-500/40 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                              {item.title}
                            </h4>
                            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                              {item.institution}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-white dark:bg-[#161b26] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 shadow-xs">
                              <Calendar className="w-3 h-3 text-slate-400" />
                              {item.period}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2 mb-3">
                          {item.description}
                        </p>

                        {item.highlights && item.highlights.length > 0 && (
                          <div className="space-y-1.5 pt-3 border-t border-slate-200/60 dark:border-white/5">
                            {item.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
