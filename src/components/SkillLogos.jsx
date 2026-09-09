import React from 'react';

import reactLogo from '../assets/logos/react.png';
import nextjsLogo from '../assets/logos/Next.png';
import javascriptLogo from '../assets/logos/JS.png';
import typescriptLogo from '../assets/logos/TS.png';
import nodeLogo from '../assets/logos/node.png';
import gitLogo from '../assets/logos/Git.png';
import phpLogo from '../assets/logos/php.png';
import mysqlLogo from '../assets/logos/MySQL.png';
import csslogo from '../assets/logos/css.png';
import htmllogo from '../assets/logos/html.png';
import mongologo from '../assets/logos/mongo.png';
import postgrelogo from '../assets/logos/postgreSQL.png';
import postmanlogo from '../assets/logos/postman.png';

// SVG Icons for Java, Spring Boot, Docker, and Odoo
const JavaIcon = () => (
  <div className="w-full h-full flex flex-col items-center justify-center font-mono font-bold text-xs bg-red-500/10 text-red-500 rounded-xl p-1 border border-red-500/30">
    <svg className="w-5 h-5 mb-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.85 16.82c0 .05-.01.11-.01.16 0 1.25 1.54 2.26 3.44 2.26 1.9 0 3.44-1.01 3.44-2.26 0-.05-.01-.11-.01-.16-1.04.53-2.22.84-3.43.84s-2.39-.31-3.43-.84zm9.32-6.57c-.17-.4-.36-.78-.56-1.14-.1-.18-.21-.36-.32-.53-.29-.44-.61-.83-.96-1.18-.35-.35-.74-.67-1.18-.96-.17-.11-.35-.22-.53-.32-.36-.2-.74-.39-1.14-.56-.47-.2-1-.36-1.48-.48-.52-.13-1.05-.2-1.58-.2s-1.06.07-1.58.2c-.48.12-1.01.28-1.48.48-.4.17-.78.36-1.14.56-.18.1-.36.21-.53.32-.44.29-.83.61-1.18.96-.35.35-.67.74-.96 1.18-.11.17-.22.35-.32.53-.2.36-.39.74-.56 1.14-.2.47-.36 1-.48 1.48-.13.52-.2 1.05-.2 1.58s.07 1.06.2 1.58c.12.48.28 1.01.48 1.48.17.4.36.78.56 1.14.1.18.21.36.32.53.29.44.61.83.96 1.18.35.35.74.67 1.18.96.17.11.35.22.53.32.36.2.74.39 1.14.56.47.2 1 .36 1.48.48.52.13 1.05.2 1.58.2s1.06-.07 1.58-.2c.48-.12 1.01-.28 1.48-.48.4-.17.78-.36 1.14-.56.18-.1.36-.21.53-.32.44-.29.83-.61 1.18-.96.35-.35.67-.74.96-1.18.11-.17.22-.35.32-.53.2-.36.39-.74.56-1.14.2-.47.36-1 .48-1.48.13-.52.2-1.05.2-1.58s-.07-1.06-.2-1.58c-.12-.48-.28-1.01-.48-1.48z"/>
    </svg>
    <span className="text-[10px] font-bold">Java 21</span>
  </div>
);

const SpringIcon = () => (
  <div className="w-full h-full flex flex-col items-center justify-center font-mono font-bold text-xs bg-emerald-500/10 text-emerald-500 rounded-xl p-1 border border-emerald-500/30">
    <svg className="w-5 h-5 mb-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.5 12c0 5.25-4.25 9.5-9.5 9.5S2.5 17.25 2.5 12 6.75 2.5 12 2.5 21.5 6.75 21.5 12zM12 4.5C7.86 4.5 4.5 7.86 4.5 12S7.86 19.5 12 19.5s7.5-3.36 7.5-7.5S16.14 4.5 12 4.5z"/>
    </svg>
    <span className="text-[10px] font-bold">Spring</span>
  </div>
);

const DockerIcon = () => (
  <div className="w-full h-full flex flex-col items-center justify-center font-mono font-bold text-xs bg-blue-500/10 text-blue-500 rounded-xl p-1 border border-blue-500/30">
    <svg className="w-5 h-5 mb-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.98 11.08h-2.18V8.9h2.18v2.18zm-2.82 0H8.98V8.9h2.18v2.18zm5.64 0h-2.18V8.9h2.18v2.18zm-8.46 0H6.16V8.9h2.18v2.18zm5.64-2.82h-2.18V6.08h2.18v2.18zm-2.82 0H8.98V6.08h2.18v2.18zm5.64 0h-2.18V6.08h2.18v2.18zM21.98 12c-.52 0-.96.22-1.28.56-.44-.26-1.12-.42-1.92-.42-.32 0-.62.03-.9.08-.28-.9-.98-1.56-1.84-1.78l-.34-.08-.18.3c-.56.9-.62 2.14-.16 3.12-.86.44-2.02.68-3.36.68H2.42c-.24 0-.42.18-.42.42 0 1.94.7 3.76 1.98 5.12 1.34 1.42 3.16 2.22 5.12 2.24h.38c4.44 0 8.24-2.74 9.68-6.9.72-.08 1.48-.38 2.06-.9.46-.4.76-.94.76-1.42 0-.56-.44-1.02-1-1.02z"/>
    </svg>
    <span className="text-[10px] font-bold">Docker</span>
  </div>
);

const OdooIcon = () => (
  <div className="w-full h-full flex flex-col items-center justify-center font-mono font-bold text-xs bg-purple-500/10 text-purple-500 rounded-xl p-1 border border-purple-500/30">
    <svg className="w-5 h-5 mb-0.5" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="9" />
    </svg>
    <span className="text-[10px] font-bold">Odoo ERP</span>
  </div>
);

const Logo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
);

export const ReactLogo = () => <Logo src={reactLogo} alt="React" />;
export const Nextjs = () => <Logo src={nextjsLogo} alt="Next.js" />;
export const Javascript = () => <Logo src={javascriptLogo} alt="JavaScript" />;
export const Typescript = () => <Logo src={typescriptLogo} alt="TypeScript" />;
export const Node = () => <Logo src={nodeLogo} alt="Node.js" />;
export const Git = () => <Logo src={gitLogo} alt="Git" />;
export const Php = () => <Logo src={phpLogo} alt="PHP" />;
export const Mysql = () => <Logo src={mysqlLogo} alt="MySQL" />;
export const Css = () => <Logo src={csslogo} alt="CSS" />;
export const Html = () => <Logo src={htmllogo} alt="HTML" />;
export const MongoDB = () => <Logo src={mongologo} alt="MongoDB" />;
export const PostgreSQL = () => <Logo src={postgrelogo} alt="PostgreSQL" />;
export const Postman = () => <Logo src={postmanlogo} alt="Postman" />;
export const Java = () => <JavaIcon />;
export const SpringBoot = () => <SpringIcon />;
export const Docker = () => <DockerIcon />;
export const Odoo = () => <OdooIcon />;