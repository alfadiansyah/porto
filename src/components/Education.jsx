import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Highlighter } from "@/components/ui/highlighter";

export default function Education() {
  return (
    <section id="education" className="w-full bg-white dark:bg-[#0f1117] text-black dark:text-white pb-24 pt-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center">
          
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Education & Credentials 🎓
              </Highlighter>
            </h2>
          </div>

          <div className="relative flex max-w-3xl mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 shadow-sm">
            <Tree
              className="w-full bg-transparent overflow-hidden rounded-md text-left text-sm"
              initialExpandedItems={[
                "Education", 
                "UNPAD", 
                "Certifications", 
                "FCC", 
                "Xsis", 
                "Leadership", 
                "INSTA", 
                "MIPA"
              ]}
            >
              {/* 1. Formal Education */}
              <Folder element="🎓 Formal Education" value="Education">
                <Folder element="Universitas Padjadjaran (UNPAD)" value="UNPAD">
                  <File value="UNPAD-Degree">
                    <div className="py-1">
                      <span className="font-bold text-gray-900 dark:text-white">
                        Bachelor of Science in Computer Science (S1 Teknik Informatika / Ilmu Komputer)
                      </span>
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 ml-2 font-semibold">
                        (Aug 2017 – Aug 2023)
                      </span>
                    </div>
                  </File>
                  <File value="UNPAD-Focus">
                    <p className="text-xs text-gray-600 dark:text-gray-400 pl-1 pb-1">
                      • Coursework: Distributed Systems, Network Security, Software Engineering, Database Systems, Data Structures & Algorithms
                    </p>
                  </File>
                </Folder>
              </Folder>

              {/* 2. Verified Certifications */}
              <Folder element="📜 Verified Certifications & Bootcamps" value="Certifications">
                <Folder element="freeCodeCamp" value="FCC">
                  <File value="FCC-Backend">
                    <div className="py-1">
                      <span className="font-bold text-gray-900 dark:text-white">
                        Back End Development and APIs Certification
                      </span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 ml-2 font-semibold">
                        (Node.js, Express, MongoDB, RESTful APIs)
                      </span>
                    </div>
                  </File>
                </Folder>

                <Folder element="PT Xsis Mitra Utama" value="Xsis">
                  <File value="Xsis-Bootcamp">
                    <div className="py-1">
                      <span className="font-bold text-gray-900 dark:text-white">
                        Enterprise Software Engineering Bootcamp
                      </span>
                      <span className="text-xs font-mono text-purple-600 dark:text-purple-400 ml-2 font-semibold">
                        (.NET & Java — ASP.NET Core, C#, Java Spring Boot)
                      </span>
                    </div>
                  </File>
                </Folder>
              </Folder>

              {/* 3. Leadership & Organization */}
              <Folder element="🌟 Leadership & Organization" value="Leadership">
                <Folder element="INSTAGRAM (Informatics Sports Arts & Games UNPAD)" value="INSTA">
                  <File value="INSTA-Role">
                    <div className="py-1">
                      <span className="font-bold text-gray-900 dark:text-white">
                        Project Officer (Head of Event)
                      </span>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 ml-2 font-semibold">
                        (Jan 2019 – Apr 2019)
                      </span>
                    </div>
                  </File>
                  <File value="INSTA-Impact">
                    <p className="text-xs text-gray-600 dark:text-gray-400 pl-1 pb-1">
                      • Led executive committee of 30+ members organizing multi-branch faculty championship with 500+ participants
                    </p>
                  </File>
                </Folder>

                <Folder element="MIPA Awards UNPAD" value="MIPA">
                  <File value="MIPA-Role">
                    <div className="py-1">
                      <span className="font-bold text-gray-900 dark:text-white">
                        Vice Project Officer
                      </span>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 ml-2 font-semibold">
                        (Apr 2019 – Dec 2019)
                      </span>
                    </div>
                  </File>
                  <File value="MIPA-Impact">
                    <p className="text-xs text-gray-600 dark:text-gray-400 pl-1 pb-1">
                      • Co-managed event budgeting, talent acquisition, cross-departmental operations, and sponsor relations
                    </p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </div>

        </div>
      </div>
    </section>
  );
}
