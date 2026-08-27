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

// SVG Icon for Java & Spring Boot
const JavaIcon = () => (
  <div className="w-full h-full flex flex-col items-center justify-center font-mono font-bold text-xs bg-red-500/10 text-red-500 rounded-xl p-1 border border-red-500/30">
    <span className="text-xl">☕</span>
    <span className="text-[10px]">Java 21</span>
  </div>
);

const SpringIcon = () => (
  <div className="w-full h-full flex flex-col items-center justify-center font-mono font-bold text-xs bg-emerald-500/10 text-emerald-500 rounded-xl p-1 border border-emerald-500/30">
    <span className="text-xl">🍃</span>
    <span className="text-[10px]">Spring Boot</span>
  </div>
);

const DockerIcon = () => (
  <div className="w-full h-full flex flex-col items-center justify-center font-mono font-bold text-xs bg-blue-500/10 text-blue-500 rounded-xl p-1 border border-blue-500/30">
    <span className="text-xl">🐳</span>
    <span className="text-[10px]">Docker</span>
  </div>
);

const OdooIcon = () => (
  <div className="w-full h-full flex flex-col items-center justify-center font-mono font-bold text-xs bg-purple-500/10 text-purple-500 rounded-xl p-1 border border-purple-500/30">
    <span className="text-xl">🟣</span>
    <span className="text-[10px]">Odoo ERP</span>
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