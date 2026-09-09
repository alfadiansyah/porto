import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import { portfolioData } from '../data/portfolioData';
import { 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Layers, 
  ShieldCheck, 
  Rocket, 
  Building2, 
  Zap,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

/**
 * Freelance Services & 5-Tier Pricing Section
 * Engineered strictly under gpt-taste, high-end-visual-design, & minimalist-ui:
 * - Double-Bezel (Doppelrand) Nested Card Architecture
 * - Button-in-Button kinetic CTA buttons
 * - 60-30-10 Solid Color Distribution (0% Gradients)
 * - 0% Emojis, 100% Professional Typography
 */
export default function Services() {
  const { freelanceServices } = portfolioData;
  const [currency, setCurrency] = useState('IDR'); // 'IDR' or 'USD'

  const tierIcons = {
    1: Rocket,
    2: Layers,
    3: Building2,
    4: ShieldCheck,
    5: Zap
  };

  const getOuterShellStyle = (tier) => {
    if (tier === 3) {
      return 'border-2 border-blue-600 dark:border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 shadow-lg shadow-blue-500/5';
    }
    if (tier === 5) {
      return 'border-2 border-amber-600 dark:border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 shadow-lg shadow-amber-500/5 md:col-span-2 lg:col-span-2';
    }
    return 'border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] hover:border-slate-400 dark:hover:border-white/20';
  };

  const getBadgeStyle = (tier) => {
    if (tier === 3) {
      return 'bg-blue-600 text-white';
    }
    if (tier === 5) {
      return 'bg-amber-600 text-white';
    }
    if (tier === 4) {
      return 'bg-purple-600 text-white';
    }
    return 'bg-slate-800 text-white';
  };

  const handleOrder = (service) => {
    const isUSD = currency === 'USD';
    const priceText = isUSD 
      ? `$${service.priceUSD} USD (${service.periodUSD})` 
      : `Rp ${service.priceIDR} (${service.periodIDR})`;

    const message = `Hi Giovanni!%0A%0AI came across your portfolio and would like to inquire about the following service package:%0A%0A*Service:* Tier ${service.tier} - ${encodeURIComponent(service.name)}%0A*Estimated Rate:* ${encodeURIComponent(priceText)}%0A*Estimated Timeline:* ${encodeURIComponent(service.deliveryTime)}%0A%0ACould we schedule a quick discussion on the project requirements? Thank you!`;

    const waUrl = `https://wa.me/6281395540904?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="relative w-full py-28 md:py-36 bg-white dark:bg-[#0f1117] text-slate-900 dark:text-white transition-colors">
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Freelance Services & Tiers
              </Highlighter>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Engineering packages designed for modern web apps, enterprise ERP customizations, secure backend microservices, and dedicated monthly retainers.
          </p>

          {/* Currency Switcher Toggle (Double-Bezel Pill) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs sm:text-sm font-bold transition-colors ${currency === 'IDR' ? 'text-blue-600 dark:text-blue-400 font-extrabold' : 'text-slate-500 dark:text-slate-400'}`}>
              Indonesian Rupiah (IDR)
            </span>

            <button
              onClick={() => setCurrency(prev => prev === 'IDR' ? 'USD' : 'IDR')}
              aria-label="Switch Currency"
              className="relative w-16 h-8 p-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm transition-transform duration-200 ${
                  currency === 'USD' ? 'translate-x-8' : 'translate-x-0'
                }`}
              >
                {currency === 'USD' ? '$' : 'Rp'}
              </div>
            </button>

            <span className={`text-xs sm:text-sm font-bold transition-colors ${currency === 'USD' ? 'text-blue-600 dark:text-blue-400 font-extrabold' : 'text-slate-500 dark:text-slate-400'}`}>
              Global Currency (USD)
            </span>
          </div>

          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
            Transparent and flexible pricing tailored to your exact technical and business scope.
          </div>
        </div>

        {/* 5-Tier Cards Grid (Double-Bezel Nested Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {freelanceServices.map((service) => {
            const IconComponent = tierIcons[service.tier] || Rocket;
            const isFeatured = service.tier === 3 || service.tier === 5;

            return (
              <div
                key={service.id}
                className={`relative rounded-[2rem] p-1.5 transition-all duration-300 ${getOuterShellStyle(service.tier)}`}
              >
                {/* Outer Badge */}
                {service.badge && (
                  <div className="absolute -top-3 right-6 z-10">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-bold shadow-sm ${getBadgeStyle(service.tier)}`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Inner Core */}
                <div className="rounded-[calc(2rem-0.375rem)] p-6 sm:p-7 bg-white dark:bg-[#161b26] flex flex-col justify-between h-full border border-slate-100 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  
                  <div>
                    {/* Tier Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-[#0f1117] border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          Tier {service.tier}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed min-h-[36px]">
                      {service.tagline}
                    </p>

                    {/* Price Tag (Clean Inline Layout) */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0f1117] border border-slate-200/80 dark:border-white/10 mb-6">
                      <div className="flex items-baseline justify-between gap-2 flex-wrap">
                        <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                          <span className="text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400">
                            {currency === 'IDR' ? 'Rp' : '$'}
                          </span>
                          <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                            {currency === 'IDR' ? service.priceIDR : service.priceUSD}
                          </span>
                        </div>
                        
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                          {service.periodIDR === 'per month' || service.periodUSD === 'per month' ? '/ month' : '/ project'}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-200/60 dark:border-white/5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>Timeline: <strong className="text-slate-800 dark:text-slate-200">{service.deliveryTime}</strong></span>
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Deliverables & Scope:
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Ideal For & Button-in-Button CTA */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-2 space-y-3">
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-[#0f1117] px-3 py-2 rounded-xl border border-slate-200/60 dark:border-white/5">
                      <strong className="text-slate-800 dark:text-slate-200">Ideal For:</strong> {service.idealFor}
                    </div>

                    <button
                      onClick={() => handleOrder(service)}
                      className={`w-full py-2 pl-4 pr-1.5 rounded-full font-bold text-xs flex items-center justify-between group shadow-sm transition-all duration-200 active:scale-98 ${
                        isFeatured
                          ? 'bg-blue-600 hover:bg-blue-500 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950'
                      }`}
                    >
                      <span>Select Tier {service.tier} (Inquire Scope)</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 ${
                        isFeatured ? 'bg-white/20' : 'bg-white/10 dark:bg-slate-950/10'
                      }`}>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Project Note (Double-Bezel Panel) */}
        <div className="mt-16 rounded-[2rem] p-1.5 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] max-w-2xl mx-auto">
          <div className="rounded-[calc(2rem-0.375rem)] p-6 sm:p-8 bg-white dark:bg-[#161b26] text-center border border-slate-100 dark:border-white/5">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
              Need a Custom Project or Enterprise Architecture?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 max-w-lg mx-auto leading-relaxed">
              Project scope, SLAs, and architecture can be tailored to match your specific budget and technical requirements.
            </p>
            <a
              href="https://wa.me/6281395540904?text=Hi%20Giovanni,%20I%20have%20a%20custom%20engineering%20project%20and%20would%20like%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all duration-200 active:scale-98 shadow-sm group"
            >
              <span>Discuss Custom Project on WhatsApp</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
