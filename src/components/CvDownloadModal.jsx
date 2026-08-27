import React from 'react';
import { X, Download, FileText, FileType, Star, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CvDownloadModal({ isOpen, onClose, isDark }) {
  const { cvFiles } = portfolioData;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative w-full max-w-lg rounded-3xl border shadow-2xl z-10 p-6 sm:p-7 ${
        isDark ? 'bg-[#111827] border-[#222f46] text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">Download Giovanni's CV</h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 mt-0.5">
              Choose the format best suited for your hiring process (PDF / Word):
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CV Versions List */}
        <div className="space-y-3.5">
          {cvFiles.map((file, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                file.recommended
                  ? 'border-brand-500/50 bg-brand-500/10 ring-1 ring-brand-500/30'
                  : isDark ? 'border-[#222f46] bg-[#161f30]' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold">{file.title}</h4>
                  {file.recommended && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-600 text-white font-bold flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5 fill-white" /> Recommended
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 mt-1">{file.description}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <a
                  href={file.pdfUrl}
                  download
                  className="px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all"
                >
                  <Download className="w-3.5 h-3.5" /> PDF
                </a>
                <a
                  href={file.docxUrl}
                  download
                  className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
                    isDark ? 'border-dark-border text-slate-300 hover:bg-dark-hover' : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FileType className="w-3.5 h-3.5 text-brand-500" /> Word
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
