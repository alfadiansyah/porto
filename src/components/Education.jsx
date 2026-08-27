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
                Qualifications & Credentials
              </Highlighter>
            </h2>
          </div>

          <div className="relative flex max-w-2xl mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-6 sm:p-8 shadow-md">
            <Tree
              className="w-full bg-transparent overflow-hidden rounded-md text-left text-sm"
              initialExpandedItems={["Education", "UNPAD", "Certifications", "FCC", "Xsis", "Leadership"]}
            >
              <Folder element="🎓 Formal Education" value="Education">
                <Folder element="Universitas Padjadjaran (UNPAD)" value="UNPAD">
                  <File value="UNPAD-Degree">
                    <p className="font-bold text-gray-900 dark:text-white">
                      Bachelor of Science in Computer Science (S1 Teknik Informatika / Ilmu Komputer) (Aug 2017 – Aug 2023)
                    </p>
                  </File>
                  <File value="UNPAD-Focus">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Focus: Distributed Systems, Network Security, Software Engineering, Database Systems, Data Structures & Algorithms
                    </p>
                  </File>
                </Folder>
              </Folder>

              <Folder element="📜 Verified Certifications" value="Certifications">
                <Folder element="freeCodeCamp" value="FCC">
                  <File value="FCC-Backend">
                    <p className="font-bold text-gray-900 dark:text-white">
                      Back End Development and APIs Certification (Node.js, Express, MongoDB, RESTful APIs)
                    </p>
                  </File>
                </Folder>
                <Folder element="PT Xsis Mitra Utama" value="Xsis">
                  <File value="Xsis-Bootcamp">
                    <p className="font-bold text-gray-900 dark:text-white">
                      Enterprise Software Engineering Bootcamp (.NET & Java - ASP.NET Core, C#, Java Spring Boot)
                    </p>
                  </File>
                </Folder>
              </Folder>

              <Folder element="🌟 Leadership & Organization" value="Leadership">
                <Folder element="INSTAGRAM (Informatics Sports Arts & Games UNPAD)" value="INSTA">
                  <File value="INSTA-PO">
                    <p className="font-bold text-gray-900 dark:text-white">
                      Project Officer (Jan 2019 – Apr 2019 — Head of Event, 500+ Participants)
                    </p>
                  </File>
                </Folder>
                <Folder element="MIPA Awards UNPAD" value="MIPA">
                  <File value="MIPA-Vice">
                    <p className="font-bold text-gray-900 dark:text-white">
                      Vice Project Officer (Apr 2019 – Dec 2019)
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
