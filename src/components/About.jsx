import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white dark:bg-[#0f1117] text-black dark:text-white p-8 sm:p-16 md:p-24 flex items-center justify-center transition-colors">
      <div className="max-w-4xl text-center">
        
        <div className="mb-12 flex justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              About Me 😊
            </Highlighter>
          </h2>
        </div>  

        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="my-10"
          textClassName="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300"
        >
          High-performing Software Engineer & Technical Consultant with 3+ years of professional experience in enterprise backend architecture, full-stack systems, and cybersecurity-compliant applications. Currently engineering robust, secure microservices for Badan Siber dan Sandi Negara (BSSN) utilizing Java 21, Spring Boot, PostgreSQL, and SSO ConnectIDN (FAL2). Proven track record in modernizing legacy banking services to Java & Spring Boot for Bank Mega (CCBM Division), architecting enterprise Odoo ERP systems for Singapore Technologies (ST MES) with Python, and developing full-stack portals using C# (.NET), React.js, NestJS, and Docker.
        </ScrollReveal>

      </div>
    </section>
  );
}
