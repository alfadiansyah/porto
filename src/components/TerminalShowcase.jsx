import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal as TerminalIcon, 
  Code2, 
  Copy, 
  Check, 
  Sparkles, 
  Play, 
  RefreshCw, 
  Layers, 
  FileCode2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalShowcase({ isDark, onOpenCvModal, onScrollToSection }) {
  const { codeSnippets, personalInfo } = portfolioData;
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'code'
  const [activeCodeLang, setActiveCodeLang] = useState('java'); // 'java' | 'python' | 'typescript'
  const [copied, setCopied] = useState(false);

  // Terminal state
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Giovanni Enterprise Terminal v3.4.0 (Java 21 / Spring / Odoo / Linux)' },
    { type: 'system', text: 'Type "help" or click quick commands below to explore profile telemetry.' },
    { type: 'prompt', cmd: 'whoami', text: `Giovanni Alfadiansyah — ${personalInfo.shortBio}` }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeLang].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let responseText = '';

    switch (cleanCmd) {
      case 'help':
        responseText = `Available Commands:\n  whoami      : View professional profile summary\n  skills      : List core technical competencies\n  experience  : Career timeline & enterprise placements\n  projects    : Featured enterprise applications\n  download-cv : Open CV download center\n  contact     : Display email, phone & direct WhatsApp\n  clear       : Clear terminal history`;
        break;
      case 'whoami':
        responseText = `Giovanni Alfadiansyah\nRole: Software Engineer (Backend / Java) @ BSSN\nLocation: ${personalInfo.location}\nFocus: Enterprise Microservices, SSO FAL2, High-Volume Modernization & ERP MES.`;
        break;
      case 'skills':
        responseText = `[Backend]     Java 21/17 (Spring Boot 3/4), NestJS, ASP.NET Core, Python (Odoo), PHP\n[Security]    SSO ConnectIDN FAL2, JWS/JWE, TOTP MFA, JWT RTR, RFC 7807\n[Database]    PostgreSQL (Flyway 38+ Migrations), Redis, MySQL, AWS S3\n[DevOps]      Docker, Testcontainers, JUnit 5, Mockito, Linux VPS, Git CI/CD`;
        break;
      case 'experience':
        responseText = `1. Badan Siber dan Sandi Negara (BSSN) | Backend Software Engineer (Apr 2026 - Present)\n2. PT Wixander Beneficia | Odoo ERP Consultant & Tech BA (Aug 2025 - Mar 2026)\n3. PT Xsis Mitra Utama (Bank Mega CCBM & Pharmacy) | Software Engineer (Oct 2023 - Apr 2025)\n4. Diceritain | Frontend & Full Stack Intern (Oct 2022 - Dec 2022)\n5. PLABS.ID | Full Stack Intern (Mar 2021 - Dec 2021)`;
        break;
      case 'projects':
        responseText = `• BSSN LMS Microservices (Java 21, Spring Boot, ConnectIDN FAL2)\n• Call Center Bank Mega (CCBM) Modernization (PHP -> Java Spring Boot)\n• Singapore Technologies MES & Teck Leong Metals (Odoo Python MRP)\n• UP Learning Centre (NestJS, PostgreSQL, Docker, RBAC Scheduling)`;
        break;
      case 'contact':
        responseText = `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nWhatsApp: ${personalInfo.whatsapp}\nLinkedIn: ${personalInfo.linkedin}`;
        break;
      case 'download-cv':
        onOpenCvModal();
        responseText = 'Opening CV Download Center modal...';
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        responseText = `Command not recognized: "${cmdStr}". Type "help" for a list of available commands.`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'prompt', cmd: cmdStr, text: responseText }
    ]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      executeCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Interactive Sandbox</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Terminal & Code Inspector
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-slate-900/60 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-semibold transition-all ${
                activeTab === 'terminal'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TerminalIcon className="w-4 h-4" />
              <span>CLI Terminal</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-semibold transition-all ${
                activeTab === 'code'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Production Code</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CLI TERMINAL */}
        {activeTab === 'terminal' && (
          <div className={`rounded-2xl border shadow-2xl overflow-hidden font-mono ${
            isDark ? 'bg-[#0a0f1d] border-slate-800' : 'bg-slate-950 border-slate-800 text-slate-100'
          }`}>
            
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-xs text-slate-400 font-mono ml-2">gio@bssn-workstation:~$</span>
              </div>
              <button
                onClick={() => setHistory([])}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 transition"
                title="Clear Terminal"
              >
                <RefreshCw className="w-3 h-3" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto space-y-3 text-xs sm:text-sm">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.type === 'system' && (
                    <div className="text-slate-400 font-mono italic">
                      # {item.text}
                    </div>
                  )}
                  {item.type === 'prompt' && (
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <span>gio@bssn-workstation:~$</span>
                        <span className="text-slate-100 font-bold">{item.cmd}</span>
                      </div>
                      <div className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-slate-800 mt-1">
                        {item.text}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Command Pills */}
            <div className="px-4 py-2.5 bg-slate-900/50 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-slate-500 uppercase font-mono">Quick Run:</span>
              {['whoami', 'skills', 'experience', 'projects', 'contact', 'download-cv', 'help'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-2.5 py-1 rounded bg-slate-800/70 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/40 border border-slate-700/50 text-[11px] text-slate-300 transition font-mono"
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Input Line */}
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2 px-4 py-3 bg-slate-900/90 border-t border-slate-800">
              <span className="text-emerald-400 font-mono font-bold">gio@bssn-workstation:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command here (e.g. skills, experience, contact)..."
                className="flex-1 bg-transparent text-slate-100 text-xs sm:text-sm font-mono focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-mono font-bold rounded hover:bg-emerald-400 transition"
              >
                Send
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: PRODUCTION CODE INSPECTOR */}
        {activeTab === 'code' && (
          <div className={`rounded-2xl border shadow-2xl overflow-hidden font-mono ${
            isDark ? 'bg-[#0a0f1d] border-slate-800' : 'bg-slate-950 border-slate-800 text-slate-100'
          }`}>
            
            {/* Code Language Switcher Bar */}
            <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveCodeLang('java')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                    activeCodeLang === 'java'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ☕ Java 21 (BSSN Spring Security FAL2)
                </button>
                <button
                  onClick={() => setActiveCodeLang('python')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                    activeCodeLang === 'python'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  🐍 Python (Odoo ERP MES Server Action)
                </button>
                <button
                  onClick={() => setActiveCodeLang('typescript')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                    activeCodeLang === 'typescript'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  🔷 TypeScript (NestJS RBAC Guard)
                </button>
              </div>

              {/* Copy Code Button */}
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Code Content Container */}
            <div className="p-4 sm:p-6 overflow-x-auto max-h-[500px] overflow-y-auto">
              <div className="text-xs text-slate-500 font-mono mb-2 flex items-center gap-2">
                <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{codeSnippets[activeCodeLang].title}</span>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
                <code>{codeSnippets[activeCodeLang].code}</code>
              </pre>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
