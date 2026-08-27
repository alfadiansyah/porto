export const portfolioData = {
  personalInfo: {
    name: "Giovanni Alfadiansyah",
    title: "Software Engineer | Full Stack Developer | Technical Consultant",
    subtitle: "Enterprise Backend Architecture • Java 21 & Spring Boot • Cybersecurity Systems • Odoo ERP",
    location: "Bogor, West Java, Indonesia | Jakarta, Indonesia",
    email: "g.alfadiansyah@gmail.com",
    phone: "+62 813-9554-0904",
    whatsapp: "https://wa.me/6281395540904?text=Hi%20Giovanni,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity.",
    linkedin: "https://www.linkedin.com/in/giovanni-alfadiansyah/",
    github: "https://github.com/alfadiansyah",
    status: {
      isAvailable: true,
      text: "Open to Full-time Opportunities & Strategic Consulting",
      currentRole: "Software Engineer (Java) @ Badan Siber dan Sandi Negara (BSSN)"
    },
    bio: "High-performing Software Engineer & Technical Consultant with 3+ years of enterprise experience in backend architecture, full-stack systems, and cybersecurity-compliant applications. Currently engineering robust, secure microservices for Badan Siber dan Sandi Negara (BSSN) utilizing Java 21, Spring Boot, PostgreSQL, and SSO ConnectIDN (FAL2). Proven track record in modernizing legacy banking services to Java & Spring Boot for Bank Mega (CCBM Division), architecting enterprise Odoo ERP systems for Singapore Technologies (ST MES) with Python, and developing full-stack portals using C# (.NET), React.js, NestJS, and Docker.",
    stats: [
      { label: "Years of Experience", value: "3+", description: "Enterprise backend & distributed systems" },
      { label: "SLA Reliability", value: "99.9%", description: "Bank Mega CCBM production uptime" },
      { label: "Database Migrations", value: "38+", description: "Zero-downtime Flyway & PostgreSQL" },
      { label: "Community Leadership", value: "500+", description: "Participants managed across tech summits" }
    ]
  },

  architectures: [
    {
      id: "bssn-lms",
      title: "BSSN Cybersecurity LMS & SSO ConnectIDN",
      role: "Lead Backend Engineer (Java)",
      client: "Badan Siber dan Sandi Negara (BSSN)",
      badge: "Cybersecurity & Identity",
      color: "emerald",
      summary: "Mission-critical Learning Management & Identity platform built under government-grade security standards with SSO ConnectIDN (FAL2 authentication) and RFC 6238 TOTP MFA.",
      challenge: "Required strict compliance with national cybersecurity protocols, multi-tenant state agency access, zero-leak credential storage, and seamless SSO integration with ConnectIDN.",
      solution: "Architected clean Java 21 Spring Boot microservices with RFC 6238 TOTP MFA, 38 Flyway migration scripts on PostgreSQL, AWS S3 encrypted asset storage, and Spring Security 6 RBAC.",
      metrics: [
        { label: "Auth Standard", val: "SSO ConnectIDN FAL2" },
        { label: "MFA Standard", val: "RFC 6238 TOTP" },
        { label: "DB Versioning", val: "38 Flyway Migrations" },
        { label: "Cloud Storage", val: "AWS S3 Encrypted" }
      ],
      nodes: [
        { name: "SSO ConnectIDN", type: "Identity Provider", desc: "FAL2 Security Level Token Validation" },
        { name: "Spring Boot 3 API", type: "Core Microservice", desc: "Java 21 Virtual Threads & RBAC Filter" },
        { name: "TOTP RFC 6238 Engine", type: "Security Engine", desc: "Time-based One-Time Password MFA" },
        { name: "PostgreSQL 16", type: "Database Cluster", desc: "38 Flyway Schema Migrations" },
        { name: "AWS S3 Storage", type: "Asset Store", desc: "AES-256 Encrypted Learning Documents" }
      ],
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Flyway", "AWS S3", "SSO ConnectIDN", "RFC 6238 MFA", "Docker", "RESTful API"]
    },
    {
      id: "bank-mega-ccbm",
      title: "Bank Mega Call Center Modernization (CCBM)",
      role: "Software Engineer",
      client: "PT Bank Mega, Tbk",
      badge: "FinTech & Banking",
      color: "indigo",
      summary: "Modernization of legacy PHP monolith into high-availability Java Spring Boot services delivering 99.9% uptime SLA for nationwide banking contact center operations.",
      challenge: "The legacy PHP monolith suffered from performance bottlenecks during peak transaction hours, high memory footprint, and tight coupling between call routing and customer data lookup.",
      solution: "Engineered microservices in Java Spring Boot with optimized connection pooling, Redis caching, structured logging, and automated failure recovery routines.",
      metrics: [
        { label: "Production SLA", val: "99.9% Uptime" },
        { label: "Transition Period", val: "6 Months Revamp" },
        { label: "Architecture", val: "PHP Monolith → Java Spring Boot" },
        { label: "System Tier", val: "Tier-1 Financial Call Center" }
      ],
      nodes: [
        { name: "CTI Telephony Gateway", type: "Call Ingestion", desc: "Avaya / Genesys Voice Signal Ingestion" },
        { name: "API Gateway (Spring Cloud)", type: "Gateway", desc: "Rate limiting, JWT Auth & Request Routing" },
        { name: "Customer 360 Core Service", type: "Java Microservice", desc: "Spring Boot 3 high-throughput profile matcher" },
        { name: "Transactional Database", type: "Enterprise DB", desc: "High-concurrency banking transaction store" }
      ],
      techStack: ["Java 17/21", "Spring Boot", "REST APIs", "Microservices", "PostgreSQL", "Redis", "Docker", "Linux Enterprise"]
    },
    {
      id: "st-mes-odoo",
      title: "Singapore Technologies Odoo ERP MES",
      role: "ERP & Technical Consultant",
      client: "Singapore Technologies (ST Aerospace / Electronics)",
      badge: "Manufacturing & ERP",
      color: "amber",
      summary: "Full lifecycle implementation and customization of Odoo ERP Manufacturing Execution System (MES) optimizing shop floor dispatching, inventory, and quality inspection.",
      challenge: "Complex aerospace & electronics manufacturing workflows required real-time work center tracking, multi-level BOMs (Bills of Materials), and seamless traceability.",
      solution: "Customized core Python Odoo modules, automated work order routing algorithms, implemented strict barcode verification, and streamlined inventory movement reconciliations.",
      metrics: [
        { label: "Domain", val: "Aerospace / Electronics MES" },
        { label: "Workflow Efficiency", val: "+40% Shop Floor Speed" },
        { label: "Core Tech", val: "Python 3 & Odoo 16+" },
        { label: "Data Integrity", val: "100% Component Traceability" }
      ],
      nodes: [
        { name: "Shop Floor Workstations", type: "Client Nodes", desc: "Barcode Scanners & Operator Terminals" },
        { name: "Custom Odoo MES Server", type: "Python App Server", desc: "Automated routing & work order engine" },
        { name: "MRP & Inventory Core", type: "ERP Core", desc: "Multi-level BOM & stock movement" },
        { name: "PostgreSQL Database", type: "Relational DB", desc: "Real-time production ledger & audit trails" }
      ],
      techStack: ["Python", "Odoo ERP", "PostgreSQL", "XML Views", "JavaScript", "MES Workflows", "Supply Chain", "BOM Management"]
    }
  ],

  experiences: [
    {
      company: "Badan Siber dan Sandi Negara (BSSN)",
      badge: "Current Role",
      type: "Government / Cybersecurity",
      role: "Software Engineer (Backend / Java)",
      period: "Apr 2026 – Present",
      location: "Jakarta, Indonesia",
      description: "Developing and maintaining critical enterprise web applications and cybersecurity microservices for the National Cyber Security LMS.",
      highlights: [
        "Architect and develop high-security backend microservices for BSSN Learning Management System using Java 21 and Spring Boot, managing users, role hierarchies, dynamic course catalogs, and interactive evaluations.",
        "Implemented enterprise authentication featuring SSO ConnectIDN FAL2 (JWS signature verification & JWE payload decryption), TOTP Multi-Factor Authentication (RFC 6238) with emergency recovery codes, and Refresh Token Rotation (RTR).",
        "Engineered 24 JPA entities across 38 Flyway database migrations in PostgreSQL, integrated AWS S3 for multi-format learning media (PDF, MP4, Audio) with path-traversal sanitization.",
        "Built dynamic HTML/CSS certificate generation with public QR Code verification, real-time learning progress heartbeat tracking, and automated quiz evaluation engine.",
        "Established comprehensive integration test coverage using Testcontainers, JUnit 5, and Mockito, standardizing OpenAPI/Swagger and RFC 7807 ProblemDetail error handling."
      ],
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Flyway", "AWS S3", "SSO ConnectIDN", "RFC 6238 TOTP", "Docker", "Git"]
    },
    {
      company: "PT. Wixander Beneficia Technology",
      type: "ERP Consultancy",
      role: "Technical Business Analyst & Odoo ERP Consultant",
      period: "Aug 2025 – Mar 2026",
      location: "Jakarta, Indonesia",
      description: "Led full-lifecycle technical implementations of Odoo ERP solutions, notably for Teck Leong Metals ERP and ST MES (Singapore Technologies - Manufacturing Execution System).",
      highlights: [
        "Architect and develop custom Odoo Python modules, custom business logic, automated server actions, and XML view customizations across Sales, Purchase, Inventory, POS, Manufacturing (MRP), and Accounting.",
        "Streamline manufacturing operations for Singapore Technologies by integrating digital routing workflows, automated barcode scanning, and real-time inventory ledger tracking.",
        "Supervise Git workflows, branch strategies, database migrations, and CI/CD deployments on Linux VPS staging and production environments.",
        "Trained enterprise client teams and delivered comprehensive technical and functional documentation."
      ],
      techStack: ["Python", "Odoo ERP", "PostgreSQL", "XML", "JavaScript", "Manufacturing MES", "Inventory Management"]
    },
    {
      company: "PT Xsis Mitra Utama",
      type: "IT Consulting & Services",
      role: "Software Engineer (Backend & Full Stack)",
      period: "Oct 2023 – Apr 2025",
      location: "Jakarta, Indonesia",
      description: "Delivered mission-critical enterprise banking software modernization and web applications for tier-1 institutions.",
      subProjects: [
        {
          title: "Bank Mega — Call Center Bank Mega (CCBM Division) [Contract: 3 + 12 Months]",
          duration: "Oct 2023 – Apr 2025",
          details: [
            "Legacy Code Revamp & Migration (6 Months): Spearheaded backend modernization of Call Center Bank Mega (CCBM) services, successfully migrating legacy PHP codebases to Java & Spring Boot within a 6-month delivery timeline.",
            "Production Maintenance & Operations (Post-Revamp): Maintained, monitored, and enhanced CCBM production systems following the revamp, resolving critical incident tickets, optimizing database queries, and improving application speed by up to 30%.",
            "High-Performance RESTful APIs: Designed and implemented scalable RESTful endpoints for real-time customer data retrieval and banking operations, ensuring fast and reliable processing during peak call volumes."
          ]
        },
        {
          title: "Internal Project: Pharmacy Management & E-Commerce System",
          duration: "Enterprise Showcase",
          details: [
            "Full-Stack C# (.NET) & React Development: Co-engineered an internal pharmacy web platform using C# (ASP.NET Core) and React.js within a 4-member squad, automating prescription processing, catalog management, and stock reconciliation.",
            "Code Quality & Standards: Enforced unit testing, conducted peer code reviews, and maintained comprehensive API contracts using Swagger and Postman."
          ]
        }
      ],
      techStack: ["Java", "Spring Boot", "ASP.NET Core", "C#", "React.js", "SQL Server", "PostgreSQL", "REST APIs"]
    },
    {
      company: "Diceritain",
      type: "Mental Health EdTech",
      role: "Software Engineer Intern (Frontend / Full Stack)",
      period: "Oct 2022 – Dec 2022",
      location: "West Java, Indonesia",
      description: "Engineered scalable web applications for peer mental health counseling platforms.",
      highlights: [
        "Platform Rebranding & Modernization: Spearheaded the complete frontend overhaul and rebranding using React.js and Next.js, boosting overall page load speed by 35% and significantly enhancing Core Web Vitals.",
        "SEO & User Experience: Implemented Server-Side Rendering (SSR) and dynamic metadata generation, improving search engine indexing and organic user acquisition."
      ],
      techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "SSR Optimization"]
    },
    {
      company: "PLABS.ID",
      type: "Software House",
      role: "Software Engineer Intern (Full Stack)",
      period: "Mar 2021 – Dec 2021",
      location: "West Java, Indonesia",
      description: "Developed modular e-commerce platforms and content management systems.",
      highlights: [
        "E-Commerce Platform (Kapalasar): Architected and delivered an end-to-end e-commerce platform using Laravel (PHP), Node.js, and React.js, managing catalog management, cart logic, and transaction processing.",
        "Database Schema & Query Optimization: Designed normalized relational databases in MySQL, reducing query execution bottlenecks and improving system responsiveness."
      ],
      techStack: ["Laravel (PHP)", "Node.js", "React.js", "MySQL", "JavaScript", "REST APIs"]
    }
  ],

  projects: [
    {
      id: "bssn-lms-platform",
      title: "National Cyber Security LMS & IAM",
      role: "Software Engineer (Backend / Java)",
      client: "Badan Siber dan Sandi Negara (BSSN)",
      period: "Apr 2026 – Present",
      category: "Enterprise / Cybersecurity",
      summary: "National cybersecurity learning portal and identity verification platform with Single Sign-On (ConnectIDN FAL2) and TOTP Multi-Factor Authentication.",
      challenge: "Enforcing government-grade cryptographic security, multi-tenant state agency isolation, and high-concurrency certificate generation.",
      solution: "Developed modular Java 21 Spring Boot 3 services with ConnectIDN SSO, RFC 6238 TOTP MFA, 38 Flyway database migrations, and AWS S3.",
      highlights: [
        "Integrated SSO ConnectIDN (FAL2 authentication) for government official identity verification.",
        "Implemented RFC 6238 TOTP MFA algorithms for all administrative actions.",
        "Managed 38 automated Flyway database schema migrations on PostgreSQL.",
        "Encrypted multi-tenant file ingestion pipeline backed by AWS S3."
      ],
      impactBadge: "National Gov Standard",
      techStack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Flyway", "AWS S3", "ConnectIDN SSO", "Docker"]
    },
    {
      id: "bank-mega-ccbm",
      title: "Bank Mega Call Center Modernization (CCBM)",
      role: "Software Engineer (Backend & Full Stack)",
      client: "PT Bank Mega, Tbk",
      period: "Oct 2023 – Apr 2025",
      category: "Banking / FinTech",
      summary: "Complete 6-month legacy code modernization migrating PHP monolith into high-availability Java Spring Boot microservices plus production operations.",
      challenge: "Eliminate peak call latency spikes and maintain 99.9% uptime SLA for hundreds of simultaneous banking agents.",
      solution: "Restructured customer 360 lookup queries, introduced connection pooling, and optimized Spring Boot endpoints.",
      highlights: [
        "Achieved 99.9% production SLA uptime across critical banking business hours.",
        "Successfully phased out legacy PHP code without interrupting live telephony systems.",
        "Optimized database connection pooling and query performance."
      ],
      impactBadge: "99.9% Uptime SLA",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Microservices", "REST APIs"]
    },
    {
      id: "st-odoo-mes",
      title: "Singapore Technologies MES ERP",
      role: "Technical Business Analyst & Odoo ERP Consultant",
      client: "Singapore Technologies",
      period: "Aug 2025 – Mar 2026",
      category: "Manufacturing / ERP",
      summary: "Customized Manufacturing Execution System (MES) for high-precision aerospace and electronics manufacturing.",
      challenge: "Automating shop floor work orders, multi-level bills of materials (BOM), and barcode verification across manufacturing plants.",
      solution: "Engineered Python Odoo modules for automated dispatching, work center scheduling, and stock movement auditing.",
      highlights: [
        "Delivered custom manufacturing workflow modules in Python Odoo.",
        "Implemented barcode-driven component tracking with 100% auditability.",
        "Authored functional and technical specifications for Singapore Technologies."
      ],
      impactBadge: "+40% Floor Efficiency",
      techStack: ["Python", "Odoo ERP", "PostgreSQL", "XML Views", "JavaScript", "Manufacturing Workflows"]
    },
    {
      id: "up-learning-centre",
      title: "UP Learning Centre LMS Platform",
      role: "Lead Backend Architect",
      client: "Universitas Padjadjaran (UNPAD)",
      period: "2023",
      category: "Full Stack / EdTech",
      summary: "Custom Learning Management System built with NestJS, Next.js, and PostgreSQL for academic coursework and digital certification.",
      challenge: "Supporting large concurrent student quiz sessions with automated grading and instant certificate generation.",
      solution: "Implemented scalable NestJS microservices, Redis queue for async PDF generation, and Next.js frontend with Tailwind CSS.",
      highlights: [
        "Engineered RESTful API in NestJS with TypeScript and TypeORM.",
        "Implemented secure JWT authentication and role-based permissions.",
        "Built responsive Next.js frontend with interactive student dashboard."
      ],
      impactBadge: "Academic Portal",
      techStack: ["NestJS", "TypeScript", "Next.js", "PostgreSQL", "TypeORM", "Tailwind CSS", "Docker"]
    }
  ],

  skillsCategories: [
    {
      id: "backend",
      title: "Backend & Architecture",
      skills: [
        { name: "Java (21/17)", level: "Advanced", years: "3+ yrs" },
        { name: "Spring Boot 3/4", level: "Advanced", years: "3+ yrs" },
        { name: "Spring Security", level: "Advanced", years: "3+ yrs" },
        { name: "Python", level: "Proficient", years: "2+ yrs" },
        { name: "NestJS / Node.js", level: "Proficient", years: "2+ yrs" },
        { name: "RESTful APIs", level: "Advanced", years: "3+ yrs" },
        { name: "C# / ASP.NET Core", level: "Intermediate", years: "1+ yr" }
      ]
    },
    {
      id: "security",
      title: "Security & IAM Protocols",
      skills: [
        { name: "SSO ConnectIDN (FAL2)", level: "Expert", years: "Production" },
        { name: "RFC 6238 TOTP MFA", level: "Expert", years: "Production" },
        { name: "OAuth2 / OIDC", level: "Advanced", years: "3+ yrs" },
        { name: "JWT (RTR)", level: "Advanced", years: "3+ yrs" },
        { name: "RFC 7807 Error Handling", level: "Advanced", years: "Production" },
        { name: "Secure Credential Storage", level: "Advanced", years: "Production" }
      ]
    },
    {
      id: "erp",
      title: "Enterprise ERP & Consulting",
      skills: [
        { name: "Odoo ERP (Custom Modules)", level: "Advanced", years: "2+ yrs" },
        { name: "Odoo MES Customization", level: "Advanced", years: "Production" },
        { name: "Shop Floor & BOM Workflows", level: "Advanced", years: "Production" },
        { name: "Business Process Discovery", level: "Advanced", years: "Client Facing" },
        { name: "Technical Specifications", level: "Advanced", years: "Client Facing" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: "Advanced", years: "3+ yrs" },
        { name: "Flyway Migrations", level: "Advanced", years: "38+ Migrations" },
        { name: "Redis Caching", level: "Intermediate", years: "2+ yrs" },
        { name: "MySQL / SQL Server", level: "Intermediate", years: "2+ yrs" },
        { name: "AWS S3 Cloud Storage", level: "Proficient", years: "Production" },
        { name: "TypeORM / JPA Hibernate", level: "Advanced", years: "3+ yrs" }
      ]
    },
    {
      id: "devops",
      title: "DevOps, Tools & Testing",
      skills: [
        { name: "Docker & Containers", level: "Proficient", years: "3+ yrs" },
        { name: "Testcontainers & JUnit 5", level: "Advanced", years: "Production" },
        { name: "Git & GitHub Actions", level: "Advanced", years: "3+ yrs" },
        { name: "Linux / VPS Admin", level: "Proficient", years: "3+ yrs" },
        { name: "React.js & Next.js", level: "Proficient", years: "2+ yrs" },
        { name: "TypeScript", level: "Proficient", years: "2+ yrs" }
      ]
    }
  ],

  education: [
    {
      institution: "Universitas Padjadjaran (UNPAD)",
      degree: "Bachelor of Science in Computer Science (S1 Teknik Informatika / Ilmu Komputer)",
      period: "Aug 2017 – Aug 2023",
      location: "West Java, Indonesia",
      description: "Graduated with honors in Computer Science. Focused on Distributed Systems, Software Engineering Methodologies, Network Security, and Database Architecture.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Distributed Systems",
        "Web Technologies"
      ]
    }
  ],

  certifications: [
    {
      title: "Back End Development and APIs Certification",
      issuer: "freeCodeCamp",
      date: "Verified",
      skills: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
    },
    {
      title: "Enterprise Software Engineering Bootcamp (.NET & Java)",
      issuer: "PT Xsis Mitra Utama",
      date: "Verified",
      skills: ["ASP.NET Core", "C#", "Java Spring Boot", "Microservices"]
    }
  ],

  leadership: [
    {
      role: "Project Officer",
      organization: "INSTAGRAM (Informatics Sports Arts & Games) — UNPAD",
      period: "Jan 2019 – Apr 2019",
      description: "Led and orchestrated an executive committee of 30+ members to organize a faculty-wide multi-branch championship (6 sports, 4 arts competitions, 4 esports tournaments) with 500+ participants."
    },
    {
      role: "Vice Project Officer",
      organization: "MIPA Awards — Universitas Padjadjaran",
      period: "Apr 2019 – Dec 2019",
      description: "Co-managed event budgeting, talent acquisition, cross-departmental operations, and sponsor relations for the annual FMIPA UNPAD awards gala."
    }
  ],

  cvFiles: [
    {
      id: "1-page",
      title: "1-Page Recruiter Resume",
      description: "Concise summary tailored for rapid recruiter screening & ATS review.",
      pdfUrl: "/cv/CV_Giovanni_Alfadiansyah_1Page.pdf",
      docxUrl: "/cv/CV_Giovanni_Alfadiansyah_1Page.docx",
      recommended: true
    },
    {
      id: "2-page",
      title: "2-Page Detailed CV",
      description: "Comprehensive breakdown of all enterprise projects, microservices, and technical stack.",
      pdfUrl: "/cv/CV_Giovanni_Alfadiansyah_2Page.pdf",
      docxUrl: "/cv/CV_Giovanni_Alfadiansyah_2Page.docx",
      recommended: false
    },
    {
      id: "master",
      title: "Complete Master CV",
      description: "Full career record including every subproject, leadership, and detailed deliverable.",
      pdfUrl: "/cv/CV_Giovanni_Alfadiansyah.pdf",
      docxUrl: "/cv/CV_Giovanni_Alfadiansyah.docx",
      recommended: false
    }
  ]
};
