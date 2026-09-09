export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'enterprise' | 'banking' | 'erp' | 'fullstack';
  categoryLabel: string;
  organization: string;
  location: string;
  period: string;
  role: string;
  summary: string;
  metrics: string[];
  techStack: string[];
  architectureDetails: {
    systemOverview: string;
    keyFeatures: string[];
    securityOrPerformance: string;
    databaseAndStorage: string;
    testingAndStandards: string;
  };
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  subPlacements?: {
    title: string;
    bullets: string[];
    metrics?: string[];
  }[];
  bullets: string[];
  tags: string[];
}

export interface CompetencyGroup {
  category: string;
  description: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period?: string;
  skills: string[];
  description: string;
}

export interface FreelanceService {
  tier: number;
  id: string;
  name: string;
  tagline: string;
  priceIDR: string;
  priceUSD: string;
  periodIDR: string;
  periodUSD: string;
  deliveryTime: string;
  badge: string | null;
  features: string[];
  idealFor: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  participantsOrScope: string;
}

export const cvData = {
  header: {
    name: "Giovanni Alfadiansyah",
    title: "Software Engineer | Full Stack Developer | Technical Consultant",
    location: "Bogor, West Java, Indonesia",
    phone: "+62 813-9554-0904",
    email: "g.alfadiansyah@gmail.com",
    linkedin: "https://www.linkedin.com/in/giovanni-alfadiansyah/",
    linkedinDisplay: "linkedin.com/in/giovanni-alfadiansyah",
    github: "https://github.com/alfadiansyah",
    githubDisplay: "github.com/alfadiansyah",
    whatsapp: "https://wa.me/6281395540904",
    pdfUrl: "/cv/CV_Giovanni_Alfadiansyah.pdf",
    filename: "CV_Giovanni_Alfadiansyah.pdf"
  },

  summary: "High-performing Software Engineer & Technical Consultant with 3+ years of professional experience in enterprise backend architecture, full-stack systems, and cybersecurity-compliant applications. Currently engineering robust, secure microservices for Badan Siber dan Sandi Negara (BSSN) utilizing Java 21, Spring Boot, PostgreSQL, and SSO ConnectIDN (FAL2). Proven track record in modernizing legacy banking services to Java & Spring Boot for Bank Mega (CCBM Division), architecting enterprise Odoo ERP systems for Singapore Technologies (ST MES) with Python, and developing full-stack portals using C# (.NET), React.js, NestJS, and Docker.",

  competencies: [
    {
      category: "Programming Languages",
      description: "Core languages for enterprise backend, systems, and web architecture",
      items: ["Java (21/17)", "Python", "TypeScript", "JavaScript (ES6+)", "C# (.NET)", "PHP", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Backend Frameworks & Runtimes",
      description: "Scalable microservices, REST APIs, and enterprise server frameworks",
      items: ["Spring Boot 3/4", "Spring Security", "NestJS", "Node.js", "ASP.NET Core", "Laravel", "Express.js", "RESTful APIs"]
    },
    {
      category: "Security & Authentication",
      description: "Government and banking compliance authentication and crypto standards",
      items: ["SSO ConnectIDN (FAL2)", "JWS / JWE", "OAuth2 / OIDC", "TOTP MFA (RFC 6238)", "JWT (RTR)", "RFC 7807 Error Handling"]
    },
    {
      category: "Enterprise & ERP Systems",
      description: "Custom ERP, supply chain, and shop-floor manufacturing automation",
      items: ["Odoo ERP", "Custom Python Modules", "Odoo ORM", "XML Views", "Server Actions", "Manufacturing Execution (MES)"]
    },
    {
      category: "Databases & Storage",
      description: "Relational modeling, migration control, caching, and cloud storage",
      items: ["PostgreSQL", "Redis", "MySQL", "Microsoft SQL Server", "AWS S3", "Flyway Migrations", "Prisma", "TypeORM"]
    },
    {
      category: "DevOps, Cloud & Testing",
      description: "Containerization, automated testing, version control, and Linux sysadmin",
      items: ["Docker", "Git / GitHub", "Linux/VPS Administration", "Testcontainers", "JUnit 5", "Mockito", "Postman / Swagger", "CI/CD Pipelines", "Agile / Scrum"]
    }
  ] as CompetencyGroup[],

  projects: [
    {
      id: "bssn-lms",
      title: "Cybersecurity-Grade LMS & Evaluation Engine",
      subtitle: "Enterprise Java 21 Backend Microservices & ConnectIDN FAL2 SSO",
      category: "enterprise",
      categoryLabel: "Government & Security",
      organization: "Badan Siber dan Sandi Negara (BSSN)",
      location: "Jakarta, Indonesia",
      period: "Apr 2026 – Present",
      role: "Lead Software Engineer (Backend / Java)",
      summary: "Architected and delivered the secure backend microservices powering BSSN Learning Management System with strict national cybersecurity compliance standards.",
      metrics: ["Java 21 & Spring Boot 3", "SSO ConnectIDN FAL2", "38 Flyway Migrations", "24 JPA Entities", "5 Quiz Evaluation Types"],
      techStack: ["Java 21", "Spring Boot 3", "Spring Security", "PostgreSQL", "Flyway", "AWS S3", "Testcontainers", "JUnit 5", "Docker"],
      architectureDetails: {
        systemOverview: "Engineered high-security backend microservices for BSSN LMS managing user lifecycle, multi-tenant role hierarchies, course catalogs, interactive evaluation engines, and automated certification.",
        keyFeatures: [
          "SSO ConnectIDN FAL2 Integration with JWS signature verification and JWE encrypted token payloads",
          "TOTP Multi-Factor Authentication (RFC 6238) with emergency cryptographic backup codes and Refresh Token Rotation (RTR)",
          "Dynamic HTML/CSS Certificate Generation with public QR verification endpoint",
          "Real-time learning progress heartbeat tracking and automated quiz evaluation engine supporting 5 distinct question types"
        ],
        securityOrPerformance: "Strict RFC 7807 ProblemDetail error structure, path-traversal sanitization on AWS S3 media uploads, and zero-trust API contracts.",
        databaseAndStorage: "24 JPA Entities across 38 Flyway database migrations in PostgreSQL, paired with AWS S3 multi-format storage (PDF, MP4, Audio).",
        testingAndStandards: "Automated integration test suites powered by Testcontainers, JUnit 5, and Mockito; OpenAPI / Swagger documentation."
      }
    },
    {
      id: "bank-mega-ccbm",
      title: "Call Center Bank Mega (CCBM) Modernization",
      subtitle: "Legacy Core Migration to Java & High-Throughput REST APIs",
      category: "banking",
      categoryLabel: "Banking & Fintech",
      organization: "Bank Mega (Client Placement via PT Xsis Mitra Utama)",
      location: "Jakarta, Indonesia",
      period: "Oct 2023 – Apr 2025",
      role: "Backend Software Engineer",
      summary: "Spearheaded the 6-month core modernization from legacy PHP to Java & Spring Boot, followed by production maintenance and database performance tuning.",
      metrics: ["+30% Performance Boost", "6-Month Delivery Timeline", "High-Concurrency REST", "Zero Downtime"],
      techStack: ["Java 17/21", "Spring Boot", "Spring Security", "PostgreSQL", "Oracle SQL", "RESTful APIs", "Postman", "Swagger"],
      architectureDetails: {
        systemOverview: "Modernized the mission-critical Call Center Bank Mega (CCBM Division) backend, serving customer service agents handling high-frequency banking inquiries and sensitive customer data.",
        keyFeatures: [
          "Full migration of legacy PHP backend codebase to modular Java & Spring Boot microservices within 6 months",
          "Engineered high-concurrency RESTful endpoints for real-time customer account lookup and card transaction operations",
          "Resolved critical production incident tickets and eliminated bottlenecks in call-handling workflows",
          "Optimized heavy database queries and indexes, reducing latency across call center customer operations"
        ],
        securityOrPerformance: "Improved application response speed by up to 30% compared to legacy services while strictly complying with banking security guidelines.",
        databaseAndStorage: "Relational database tuning, connection pool optimization, and secure transaction query execution.",
        testingAndStandards: "Automated Postman collections, Swagger contracts, and regression testing during migration phases."
      }
    },
    {
      id: "st-mes-odoo",
      title: "Singapore Technologies MES & Enterprise Odoo ERP",
      subtitle: "Shop-Floor Manufacturing Automation & Real-Time Ledger",
      category: "erp",
      categoryLabel: "Manufacturing & ERP",
      organization: "PT. Wixander Beneficia Technology",
      location: "Jakarta, Indonesia",
      period: "Aug 2025 – Mar 2026",
      role: "Technical Business Analyst & Odoo ERP Consultant",
      summary: "Engineered customized Odoo ERP solutions and shop-floor automation for Singapore Technologies (ST MES) and Teck Leong Metals.",
      metrics: ["Digital Routing Workflows", "Barcode Scanning Integration", "Real-Time Inventory Ledger", "Linux VPS CI/CD"],
      techStack: ["Python", "Odoo ERP", "PostgreSQL", "XML Views", "Linux VPS", "Git / GitHub", "Docker"],
      architectureDetails: {
        systemOverview: "End-to-end technical implementation of Odoo ERP systems with customized Python modules for complex manufacturing execution (MES) and metal distribution enterprises.",
        keyFeatures: [
          "Architected custom Odoo Python modules, business logic, automated server actions, and customized XML views",
          "Integrated digital shop-floor routing workflows and real-time hardware barcode scanning for Singapore Technologies",
          "Built real-time automated inventory ledger tracking across Sales, Purchase, Inventory, POS, MRP, and Accounting",
          "Customized multi-currency and multi-warehouse operations with automated accounting journal entries"
        ],
        securityOrPerformance: "Optimized Odoo ORM query sets and PostgreSQL indexing for heavy manufacturing work orders.",
        databaseAndStorage: "PostgreSQL enterprise database with automated backup policies and database migration scripts.",
        testingAndStandards: "Supervised Git branch workflows, staging environment verification, and CI/CD deployment on Linux VPS."
      }
    },
    {
      id: "up-learning-centre",
      title: "Online Tutoring & Student Management Platform",
      subtitle: "Production NestJS Backend with Dynamic Scheduling Algorithms",
      category: "fullstack",
      categoryLabel: "EdTech & Web Platform",
      organization: "UP Learning Centre",
      location: "Indonesia",
      period: "Key Technical Project",
      role: "Lead Backend Architect",
      summary: "Designed and built an end-to-end tutoring management platform with multi-role access control and automated course scheduling engines.",
      metrics: ["NestJS Modular Architecture", "Automated Scheduling Engine", "3-Tier Role Hierarchy", "Docker Containerized"],
      techStack: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Postman", "JWT Auth"],
      architectureDetails: {
        systemOverview: "Production-ready backend API in NestJS providing student enrollment, teacher assignment, recurring class scheduling, and attendance tracking.",
        keyFeatures: [
          "Complex scheduling algorithms automating teacher allocation, recurring bookings, and dynamic batch grouping",
          "JWT-based Role-Based Access Control (RBAC) supporting Admin, Teacher, and Student roles",
          "Normalized relational schema in PostgreSQL with automated data seeding and migration scripts",
          "Automated endpoint regression validation with Postman test suites"
        ],
        securityOrPerformance: "Containerized microservice architecture using Docker for reproducible deployment.",
        databaseAndStorage: "PostgreSQL relational schemas with indexing strategies on scheduling tables.",
        testingAndStandards: "Comprehensive Postman test scripts, TypeScript strict type safety, and OpenAPI documentation."
      }
    },
    {
      id: "pharmacy-management",
      title: "Enterprise Pharmacy & E-Commerce System",
      subtitle: "Full-Stack C# ASP.NET Core & React Platform",
      category: "fullstack",
      categoryLabel: "HealthTech & E-Commerce",
      organization: "PT Xsis Mitra Utama",
      location: "Jakarta, Indonesia",
      period: "Internal Project",
      role: "Full Stack Software Engineer",
      summary: "Co-engineered an internal pharmacy management web platform automating prescription handling, drug cataloging, and stock reconciliation.",
      metrics: ["C# ASP.NET Core", "React.js Client", "Stock Reconciliation", "4-Developer Squad"],
      techStack: ["C#", "ASP.NET Core", "React.js", "SQL Server", "RESTful API", "Swagger", "Postman"],
      architectureDetails: {
        systemOverview: "Enterprise web platform streamlining pharmacy operational workflows, medical prescription intake, and e-commerce inventory sync.",
        keyFeatures: [
          "Automated prescription processing and real-time inventory stock reconciliation",
          "Scalable ASP.NET Core REST APIs connected to dynamic React.js frontend interfaces",
          "Enforced clean architecture separation between domain entities, business logic, and API controllers"
        ],
        securityOrPerformance: "Strict API input validation and transaction isolation levels for inventory mutations.",
        databaseAndStorage: "Normalized relational schemas with ACID guarantees for financial transactions.",
        testingAndStandards: "Unit testing coverage, peer code reviews, and Swagger OpenAPI contracts."
      }
    },
    {
      id: "diceritain-rebrand",
      title: "Diceritain Mental Health Counseling Platform",
      subtitle: "Frontend Overhaul, SSR & Core Web Vitals Optimization",
      category: "fullstack",
      categoryLabel: "Mental Health & Web",
      organization: "Diceritain",
      location: "West Java, Indonesia",
      period: "Oct 2022 – Dec 2022",
      role: "Software Engineer Intern (Frontend / Full Stack)",
      summary: "Spearheaded the complete frontend re-architecture using React.js and Next.js, dramatically boosting loading speed and SEO indexability.",
      metrics: ["+35% Page Load Speed", "SSR Metadata", "Core Web Vitals Pass", "Modern UI/UX"],
      techStack: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "SSR", "SEO"],
      architectureDetails: {
        systemOverview: "Complete modernization and rebranding of the Diceritain mental health counseling platform.",
        keyFeatures: [
          "Complete frontend overhaul with Next.js Server-Side Rendering (SSR)",
          "Enhanced Core Web Vitals and user engagement through optimized component rendering",
          "Dynamic SEO metadata generation improving organic user acquisition"
        ],
        securityOrPerformance: "35% faster initial page load speed and reduced bundle size.",
        databaseAndStorage: "RESTful client integration with backend services.",
        testingAndStandards: "Cross-browser testing and responsive mobile-first UI patterns."
      }
    },
    {
      id: "kapalasar-ecommerce",
      title: "Kapalasar E-Commerce Platform",
      subtitle: "Full-Stack Laravel & React Platform with Optimized MySQL",
      category: "fullstack",
      categoryLabel: "E-Commerce",
      organization: "PLABS.ID",
      location: "West Java, Indonesia",
      period: "Mar 2021 – Dec 2021",
      role: "Software Engineer Intern (Full Stack)",
      summary: "Architected and delivered an end-to-end e-commerce platform managing catalog management, cart logic, and transaction checkout.",
      metrics: ["Full E-Commerce Pipeline", "MySQL Schema Optimization", "Multi-tier Cart Engine"],
      techStack: ["Laravel (PHP)", "Node.js", "React.js", "MySQL", "RESTful APIs"],
      architectureDetails: {
        systemOverview: "End-to-end commerce system supporting product catalog hierarchies, dynamic cart management, and order checkout.",
        keyFeatures: [
          "Built modular Laravel API backend paired with React.js client interface",
          "Designed normalized relational schemas in MySQL, eliminating query execution bottlenecks",
          "Implemented transaction state machines for order processing"
        ],
        securityOrPerformance: "Query indexing and caching strategies for high responsiveness.",
        databaseAndStorage: "Normalized MySQL relational database.",
        testingAndStandards: "API endpoint verification with Postman."
      }
    },
    {
      id: "bem-fmipa-unpad",
      title: "Centralized Faculty Analytics & Monitoring Portal",
      subtitle: "Data Monitoring Dashboard for BEM KEMA FMIPA UNPAD",
      category: "fullstack",
      categoryLabel: "Academic & Analytics",
      organization: "Universitas Padjadjaran (UNPAD)",
      location: "West Java, Indonesia",
      period: "Organizational Technical Project",
      role: "Full Stack Developer",
      summary: "Designed and deployed a centralized data monitoring portal for faculty leadership and student representatives to automate performance reporting.",
      metrics: ["Automated Reporting", "Faculty-Wide Portal", "Interactive Analytics"],
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Chart.js"],
      architectureDetails: {
        systemOverview: "Integrated analytics portal consolidating student activities, department performance metrics, and automated report generation.",
        keyFeatures: [
          "Custom data visualization dashboards for faculty leaders and student organizations",
          "Automated monthly and annual organizational performance report generation"
        ],
        securityOrPerformance: "Role-based access control for student reps and faculty advisors.",
        databaseAndStorage: "MySQL database with relational audit logs.",
        testingAndStandards: "Verified through faculty-wide deployment."
      }
    }
  ] as ProjectCaseStudy[],

  experiences: [
    {
      id: "bssn",
      company: "Badan Siber dan Sandi Negara (BSSN)",
      role: "Software Engineer (Backend / Java)",
      period: "Apr 2026 – Present",
      location: "Jakarta, Indonesia",
      type: "Government & National Cybersecurity",
      summary: "Architecting cybersecurity-grade backend microservices for the BSSN Learning Management System using Java 21, Spring Boot, ConnectIDN SSO, and TOTP MFA.",
      bullets: [
        "Cybersecurity-Grade LMS Backend: Architect and develop high-security backend microservices for BSSN Learning Management System using Java 21 and Spring Boot, managing users, role hierarchies, dynamic course catalogs, and interactive evaluations.",
        "Advanced SSO & MFA Security: Implemented enterprise authentication featuring SSO ConnectIDN FAL2 (JWS signature verification & JWE payload decryption), TOTP Multi-Factor Authentication (RFC 6238) with emergency recovery codes, and Refresh Token Rotation (RTR).",
        "Database Architecture & Storage: Engineered 24 JPA entities across 38 Flyway database migrations in PostgreSQL, integrated AWS S3 for multi-format learning media (PDF, MP4, Audio) with path-traversal sanitization.",
        "Automated Certification & Analytics: Built dynamic HTML/CSS certificate generation with public QR Code verification, real-time learning progress heartbeat tracking, and an automated quiz evaluation engine supporting 5 question types.",
        "Testing & API Contracts: Established comprehensive integration test coverage using Testcontainers, JUnit 5, and Mockito, standardizing OpenAPI/Swagger documentation and RFC 7807 ProblemDetail error handling."
      ],
      tags: ["Java 21", "Spring Boot 3", "PostgreSQL", "SSO ConnectIDN FAL2", "TOTP MFA", "Flyway", "AWS S3", "Testcontainers"]
    },
    {
      id: "wixander",
      company: "PT. Wixander Beneficia Technology",
      role: "Technical Business Analyst & Odoo ERP Consultant",
      period: "Aug 2025 – Mar 2026",
      location: "Jakarta, Indonesia",
      type: "Enterprise ERP & Manufacturing",
      summary: "Led full-lifecycle technical implementations of Odoo ERP systems and manufacturing execution systems (ST MES) for enterprise clients.",
      bullets: [
        "Enterprise ERP & MES Implementations: Lead full-lifecycle technical implementations of Odoo ERP solutions, notably for Teck Leong Metals ERP and ST MES (Singapore Technologies - Manufacturing Execution System).",
        "Custom Backend Engineering: Architect and develop custom Odoo Python modules, custom business logic, automated server actions, and XML view customizations across Sales, Purchase, Inventory, POS, Manufacturing (MRP), and Accounting.",
        "Shop-Floor Automation (Singapore Technologies): Streamline manufacturing operations for Singapore Technologies by integrating digital routing workflows, automated barcode scanning, and real-time inventory ledger tracking.",
        "Deployment & Version Control: Supervise Git workflows, branch strategies, database migrations, and CI/CD deployments on Linux VPS staging and production environments."
      ],
      tags: ["Python", "Odoo ERP", "PostgreSQL", "Manufacturing (MES)", "Linux VPS", "Git CI/CD"]
    },
    {
      id: "xsis",
      company: "PT Xsis Mitra Utama",
      role: "Software Engineer (Backend & Full Stack)",
      period: "Oct 2023 – Apr 2025",
      location: "Jakarta, Indonesia",
      type: "IT Consulting & Banking Technology",
      summary: "Spearheaded legacy banking core modernization at Bank Mega (CCBM Division) and developed internal enterprise pharmacy management systems.",
      subPlacements: [
        {
          title: "Client Placement: Bank Mega — Call Center Bank Mega (CCBM Division) [Contract: 3 + 12 Months]",
          bullets: [
            "Legacy Code Revamp & Migration (6 Months): Spearheaded backend modernization of Call Center Bank Mega (CCBM) services, successfully migrating legacy PHP codebases to Java & Spring Boot within a 6-month delivery timeline.",
            "Production Maintenance & Operations (Post-Revamp): Maintained, monitored, and enhanced CCBM production systems following the revamp, resolving critical incident tickets, optimizing database queries, and improving application speed by up to 30% compared to previous legacy services.",
            "High-Performance RESTful APIs: Designed and implemented scalable RESTful endpoints for real-time customer data retrieval and banking operations, ensuring fast and reliable processing during peak call volumes."
          ],
          metrics: ["+30% Speed Optimization", "6-Month Delivery", "Zero-Downtime Migration"]
        },
        {
          title: "Internal Project: Pharmacy Management & E-Commerce System",
          bullets: [
            "Full-Stack C# (.NET) & React Development: Co-engineered an internal pharmacy web platform using C# (ASP.NET Core) and React.js within a 4-member squad, automating prescription processing, catalog management, and stock reconciliation.",
            "Code Quality & Standards: Enforced unit testing, conducted peer code reviews, and maintained comprehensive API contracts using Swagger and Postman."
          ],
          metrics: ["Automated Prescription Flow", "Swagger OpenAPI Contracts"]
        }
      ],
      bullets: [],
      tags: ["Java", "Spring Boot", "C# (.NET)", "React.js", "Banking Systems", "SQL Optimization", "Swagger"]
    },
    {
      id: "diceritain",
      company: "Diceritain",
      role: "Software Engineer Intern (Frontend / Full Stack)",
      period: "Oct 2022 – Dec 2022",
      location: "West Java, Indonesia",
      type: "Mental Health Tech Startup",
      summary: "Modernized mental health web platform frontend with React & Next.js SSR, achieving +35% load speed boost and higher Core Web Vitals.",
      bullets: [
        "Platform Rebranding & Modernization: Spearheaded the complete frontend overhaul and rebranding using React.js and Next.js, boosting overall page load speed by 35% and significantly enhancing Core Web Vitals.",
        "SEO & User Experience: Implemented Server-Side Rendering (SSR) and dynamic metadata generation, improving search engine indexing and organic user acquisition."
      ],
      tags: ["React.js", "Next.js", "Node.js", "SSR", "SEO Optimization"]
    },
    {
      id: "plabs",
      company: "PLABS.ID",
      role: "Software Engineer Intern (Full Stack)",
      period: "Mar 2021 – Dec 2021",
      location: "West Java, Indonesia",
      type: "Software House & Digital Agency",
      summary: "Engineered Kapalasar e-commerce system using Laravel and React, optimizing normalized MySQL database schemas.",
      bullets: [
        "E-Commerce Platform (Kapalasar): Architected and delivered an end-to-end e-commerce platform using Laravel (PHP), Node.js, and React.js, managing catalog management, cart logic, and transaction processing.",
        "Database Schema & Query Optimization: Designed normalized relational databases in MySQL, reducing query execution bottlenecks and improving system responsiveness."
      ],
      tags: ["Laravel", "PHP", "Node.js", "React.js", "MySQL"]
    }
  ] as WorkExperience[],

  education: [
    {
      institution: "Universitas Padjadjaran (UNPAD)",
      degree: "Bachelor of Science in Computer Science (S1 Teknik Informatika / Ilmu Komputer)",
      period: "Aug 2017 – Aug 2023",
      location: "West Java, Indonesia",
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
  ] as EducationItem[],

  certifications: [
    {
      title: "Back End Development and APIs Certification",
      issuer: "freeCodeCamp",
      period: "Verified Credential",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Microservices"],
      description: "Comprehensive hands-on certification covering backend API development, asynchronous programming, database modeling, and automated testing."
    },
    {
      title: "Enterprise Software Engineering Bootcamp (.NET & Java)",
      issuer: "PT Xsis Mitra Utama",
      period: "Intensive Corporate Training",
      skills: ["ASP.NET Core", "C#", "Java Spring Boot", "Microservices", "Design Patterns"],
      description: "Intensive corporate engineering program focused on enterprise architecture patterns, C# (.NET) systems, Java Spring Boot microservices, and database optimization."
    }
  ] as CertificationItem[],

  leadership: [
    {
      role: "Project Officer (Leader)",
      organization: "INSTAGRAM (Informatics Sports Arts & Games) — UNPAD",
      period: "Jan 2019 – Apr 2019",
      participantsOrScope: "30+ Committee Members | 500+ Participants",
      description: "Led and orchestrated an executive committee of 30+ members to organize a faculty-wide multi-branch championship (6 sports, 4 arts competitions, 4 esports tournaments) with 500+ participants."
    },
    {
      role: "Vice Project Officer",
      organization: "MIPA Awards — Universitas Padjadjaran",
      period: "Apr 2019 – Dec 2019",
      participantsOrScope: "FMIPA-Wide Annual Gala",
      description: "Co-managed event budgeting, talent acquisition, cross-departmental operations, and sponsor relations for the annual FMIPA UNPAD awards gala."
    }
  ] as LeadershipItem[],

  freelanceServices: [
    {
      tier: 1,
      id: "starter-landing",
      name: "Starter Landing Page & Compro",
      tagline: "High-converting, responsive company profile, portfolio, and marketing landing page.",
      priceIDR: "1.000.000",
      priceUSD: "100",
      periodIDR: "per project",
      periodUSD: "per project",
      deliveryTime: "3 – 5 Business Days",
      badge: null,
      features: [
        "Modern Responsive Layout (Mobile, Tablet, Desktop)",
        "Fast Performance & Core Web Vitals Optimization",
        "Direct WhatsApp & Email Contact Integration",
        "SEO Baseline & Social Media Meta Tags",
        "Free Deployment Setup (Vercel / Netlify / VPS)",
        "2x Iteration & Revision Cycles"
      ],
      idealFor: "SMBs, Personal Brands, Startup Launches & Company Profiles"
    },
    {
      tier: 2,
      id: "business-mvp",
      name: "Business Portal / Web App MVP",
      tagline: "Dynamic web application with database, authentication, and role-based admin portal.",
      priceIDR: "6.000.000",
      priceUSD: "500",
      periodIDR: "per project",
      periodUSD: "per project",
      deliveryTime: "1 – 2 Weeks",
      badge: null,
      features: [
        "Full Stack Development (React.js / Next.js + NestJS / Node.js / Laravel)",
        "Database Architecture (PostgreSQL / MySQL)",
        "User Authentication & Role-Based Access Control (RBAC)",
        "Interactive Admin Dashboard & Data Management (CRUD)",
        "RESTful API Integration & Form Validation",
        "Source Code Handover + Technical Documentation"
      ],
      idealFor: "SaaS MVPs, Internal Business Tools, Custom Catalogs & Multi-role Portals"
    },
    {
      tier: 3,
      id: "enterprise-erp",
      name: "Enterprise ERP & Odoo Customization",
      tagline: "Custom business logic, automated workflows, and ERP modules.",
      priceIDR: "10.000.000",
      priceUSD: "700",
      periodIDR: "per project",
      periodUSD: "per project",
      deliveryTime: "2 – 3 Weeks",
      badge: "Most Popular",
      features: [
        "Custom Odoo Python Modules (Sales, Purchase, Inventory, MRP, POS)",
        "Automated Server Actions & Business Process Optimization",
        "Manufacturing (MES) / Shop-floor Customization & Barcode Routing",
        "Complex XML Views & Dynamic Reporting (QWeb / PDF)",
        "Database Migration & Zero-Downtime Data Import",
        "Linux VPS Deployment & Post-Launch Support (14 Days)"
      ],
      idealFor: "Manufacturing Companies, Distributors, Supply Chain & Growing Enterprises"
    },
    {
      tier: 4,
      id: "backend-cybersecurity",
      name: "Backend & Cybersecurity Architecture",
      tagline: "High-security Java 21 / Spring Boot microservices with banking-grade compliance.",
      priceIDR: "15.000.000",
      priceUSD: "1,250",
      periodIDR: "per project",
      periodUSD: "per project",
      deliveryTime: "3 – 4 Weeks",
      badge: "Enterprise Grade",
      features: [
        "Java 21 + Spring Boot 3 Microservices Architecture",
        "Advanced Security: SSO ConnectIDN (FAL2) / OAuth2 / TOTP MFA (RFC 6238)",
        "PostgreSQL Cluster + Flyway Migration Management (30+ entities)",
        "AWS S3 Encrypted Storage & Path-traversal Sanitization",
        "High-Throughput Scalable REST APIs & ProblemDetail RFC 7807",
        "Automated Testing (JUnit 5, Testcontainers) & Swagger Contracts"
      ],
      idealFor: "FinTech Institutions, Enterprise LMS / Identity & High-Traffic APIs"
    },
    {
      tier: 5,
      id: "dedicated-engineer",
      name: "Dedicated Full Stack Engineer / Consultant",
      tagline: "Dedicated full stack engineer & technical consultant for your development squad.",
      priceIDR: "20.000.000",
      priceUSD: "1,500",
      periodIDR: "per month",
      periodUSD: "per month",
      deliveryTime: "160 Hours / Month (Dedicated)",
      badge: "Monthly Retainer",
      features: [
        "160 Dedicated Working Hours / Month (Full Stack Engineer & Tech Consultant)",
        "Agile / Scrum Sprint Participation & Daily Standups",
        "Multi-stack Mastery: Java Spring Boot, C# .NET, Python Odoo, React, NestJS",
        "System Architecture Design, Code Review, & Refactoring Legacy Monoliths",
        "CI/CD Pipeline Setup & DevOps Deployment (Docker / Linux VPS)",
        "Priority Direct Communication (WhatsApp / Slack / Google Meet)"
      ],
      idealFor: "High-Growth Startups, Software Houses & Enterprises Needing a Tech Lead"
    }
  ] as FreelanceService[]
};
