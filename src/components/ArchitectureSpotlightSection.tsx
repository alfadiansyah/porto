import React, { useState } from 'react';
import { 
  TreeStructure, 
  ShieldCheck, 
  Bank, 
  Cpu, 
  CheckCircle
} from '@phosphor-icons/react';

export const ArchitectureSpotlightSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bssn' | 'bankmega' | 'stmes'>('bssn');

  const blueprints = {
    bssn: {
      title: "BSSN Cybersecurity-Grade LMS Architecture",
      subtitle: "Java 21, Spring Boot 3, ConnectIDN FAL2 & TOTP Multi-Factor Authentication",
      organization: "Badan Siber dan Sandi Negara (BSSN)",
      flowSteps: [
        {
          step: "01. Authentication",
          title: "SSO ConnectIDN (Level FAL2)",
          detail: "JWS digital signature validation & JWE payload decryption conforming to national cybersecurity protocols."
        },
        {
          step: "02. Multi-Factor Auth",
          title: "TOTP MFA (RFC 6238)",
          detail: "Time-based OTP generation with hashed emergency recovery codes and Refresh Token Rotation (RTR)."
        },
        {
          step: "03. Core Backend",
          title: "Java 21 Microservices",
          detail: "Dynamic course lifecycle, role hierarchies, dynamic quiz evaluation (5 question types), and QR certificate generator."
        },
        {
          step: "04. Persistence & Cloud",
          title: "PostgreSQL & AWS S3",
          detail: "24 JPA Entities, 38 Flyway migrations, path-traversal sanitized S3 media storage, tested with Testcontainers."
        }
      ],
      highlights: [
        "RFC 7807 ProblemDetail standardized API errors",
        "Dynamic HTML/CSS Certificate generator with public cryptographic QR code verification",
        "Zero-trust API boundaries with Testcontainers and JUnit 5 automated regression test suites"
      ]
    },
    bankmega: {
      title: "Call Center Bank Mega (CCBM) Modernization",
      subtitle: "6-Month Legacy PHP to Java & Spring Boot Migration Architecture",
      organization: "Bank Mega (CCBM Division)",
      flowSteps: [
        {
          step: "01. Legacy Monolith",
          title: "Legacy PHP Codebase",
          detail: "High-volume call center system facing performance bottlenecks and maintenance complexity."
        },
        {
          step: "02. Core Re-Platforming",
          title: "Java & Spring Boot Migration",
          detail: "Full rewrite to modular Spring Boot backend delivered within strict 6-month timeline."
        },
        {
          step: "03. Data Optimization",
          title: "SQL & Query Tuning",
          detail: "Optimized connection pooling, indexes, and customer account lookup queries."
        },
        {
          step: "04. Production Impact",
          title: "+30% Response Speed",
          detail: "Reduced latency across peak call volumes with zero-downtime transition."
        }
      ],
      highlights: [
        "High-performance RESTful APIs designed for real-time customer data retrieval during live calls",
        "Proactive incident ticket mitigation and production system stability",
        "Enforced OpenAPI / Swagger contracts and Postman collection regression suites"
      ]
    },
    stmes: {
      title: "Singapore Technologies MES & Odoo ERP",
      subtitle: "Shop-Floor Manufacturing Automation & Real-Time Ledger",
      organization: "Singapore Technologies (ST MES) & Teck Leong Metals",
      flowSteps: [
        {
          step: "01. Shop Floor Input",
          title: "Barcode Hardware Scan",
          detail: "Direct physical barcode scanning integration for work order routing and station check-in."
        },
        {
          step: "02. Business Logic",
          title: "Custom Odoo Python Modules",
          detail: "Automated server actions and customized XML views for Sales, MRP, POS, and Accounting."
        },
        {
          step: "03. Real-Time Sync",
          title: "Inventory Ledger Sync",
          detail: "Immediate stock ledger mutations with audit log consistency across multi-warehouse setups."
        },
        {
          step: "04. Infrastructure",
          title: "Linux VPS & CI/CD",
          detail: "Automated Git branch strategy and staging/production deployments on Linux VPS."
        }
      ],
      highlights: [
        "Digital routing workflows replacing legacy paper-based manufacturing processes",
        "Optimized Odoo ORM query sets and PostgreSQL indexing for heavy MRP batches",
        "Full lifecycle technical consultation from requirements to shop-floor rollout"
      ]
    }
  };

  const current = blueprints[activeTab];

  return (
    <section id="architecture" className="py-12 sm:py-16 border-b border-zinc-800 text-left">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="p-1 rounded bg-zinc-800 text-zinc-300">
          <TreeStructure size={16} weight="bold" />
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
          Enterprise Systems Architecture
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Architecture Blueprints & System Flows
      </h2>
      <p className="text-xs sm:text-sm text-zinc-400 mb-6 max-w-2xl">
        Deep technical inspection into the real backend pipelines, security implementations, and modernization strategies Giovanni engineered.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTab('bssn')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === 'bssn'
              ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
              : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          <ShieldCheck size={16} />
          <span>BSSN Cybersecurity LMS (Java 21)</span>
        </button>

        <button
          onClick={() => setActiveTab('bankmega')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === 'bankmega'
              ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
              : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          <Bank size={16} />
          <span>Bank Mega Modernization (+30% Speed)</span>
        </button>

        <button
          onClick={() => setActiveTab('stmes')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === 'stmes'
              ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
              : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          <Cpu size={16} />
          <span>Singapore Tech Odoo MES</span>
        </button>
      </div>

      {/* Blueprint Card */}
      <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
        <div>
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
            {current.organization}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {current.title}
          </h3>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">
            {current.subtitle}
          </p>
        </div>

        {/* 4-Step Interactive Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {current.flowSteps.map((step, sIdx) => (
            <div 
              key={sIdx}
              className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/90 relative group hover:border-zinc-700 transition-colors"
            >
              <div className="text-[10px] font-mono font-bold text-zinc-500 mb-1">
                {step.step}
              </div>
              <div className="text-xs font-bold text-white mb-1.5 flex items-center gap-1">
                <span>{step.title}</span>
              </div>
              <p className="text-[11.5px] text-zinc-400 font-mono leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Key Engineering Highlights */}
        <div className="pt-2 border-t border-zinc-800/80">
          <div className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2">
            Key Architecture Takeaways
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {current.highlights.map((hl, hIdx) => (
              <div key={hIdx} className="flex items-start gap-2 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <CheckCircle size={14} className="text-zinc-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-zinc-300 leading-snug">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
