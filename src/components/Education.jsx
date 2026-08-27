import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import { GraduationCap, Award, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      category: "Formal Education",
      icon: GraduationCap,
      accentColor: "from-blue-500/20 to-cyan-500/10 text-blue-600 dark:text-cyan-400 border-blue-500/30",
      items: [
        {
          title: "Bachelor of Science in Computer Science (S1 Teknik Informatika)",
          institution: "Universitas Padjadjaran (UNPAD)",
          location: "West Java, Indonesia",
          period: "Aug 2017 – Aug 2023",
          status: "Graduated",
          description: "Comprehensive computer science curriculum focused on backend engineering and systems.",
          highlights: [
            "Relevant Coursework: Distributed Systems, Network Security, Software Engineering, Database Systems, Data Structures & Algorithms, Web Technologies.",
          ]
        }
      ]
    },
    {
      category: "Verified Certifications & Bootcamps",
      icon: Award,
      accentColor: "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
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
      accentColor: "from-purple-500/20 to-indigo-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
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
    <section id="education" className="relative w-full py-24 bg-white dark:bg-[#0f1117] text-gray-900 dark:text-white transition-colors">
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Education & Credentials 🎓
            </Highlighter>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
            Academic degree, verified technical certifications, and leadership milestones.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {educationData.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={catIdx}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-[#161922]/90 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-6 border-b border-gray-200/80 dark:border-gray-800 mb-6">
                  <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${cat.accentColor} border`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Items in Category */}
                <div className="space-y-6">
                  {cat.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="p-5 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 shadow-2xs hover:border-blue-500/40 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                            {item.title}
                          </h4>
                          <div className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                            {item.institution}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2 mb-3">
                        {item.description}
                      </p>

                      {item.highlights && item.highlights.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800/60">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
