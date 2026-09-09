import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import { portfolioData } from '../data/portfolioData';
import { 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Rocket, 
  Building2, 
  Zap 
} from 'lucide-react';

/**
 * Freelance Services & 5-Tier Pricing Section
 * Styled strictly under the 60-30-10 Color Rule (0% Gradients):
 * - 60% Dominant Base: Clean canvas background (White / #0f1117)
 * - 30% Secondary Structure: Solid panels, cards, and borders (#161b26 / Slate-50)
 * - 10% Intentional Accent: Solid Blue-600 (Primary Action), Emerald-600 (Success/WhatsApp), Amber-600 (Highlight)
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

  const getTierCardStyle = (tier) => {
    switch (tier) {
      case 3: // Most Popular
        return 'border-2 border-blue-600 dark:border-blue-500 shadow-md';
      case 5: // Retainer
        return 'border-2 border-amber-600 dark:border-amber-500 shadow-md';
      default:
        return 'border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700';
    }
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

    const message = `Hi Giovanni! 👋%0A%0AI came across your portfolio and would like to inquire about the following service package:%0A%0A*Service:* Tier ${service.tier} - ${encodeURIComponent(service.name)}%0A*Estimated Rate:* ${encodeURIComponent(priceText)}%0A*Estimated Timeline:* ${encodeURIComponent(service.deliveryTime)}%0A%0ACould we schedule a quick discussion on the project requirements? Thank you!`;

    const waUrl = `https://wa.me/6281395540904?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="relative w-full py-24 bg-white dark:bg-[#0f1117] text-slate-900 dark:text-white transition-colors">
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Freelance Services & Tiers 💼
              </Highlighter>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Engineering packages designed for modern web apps, enterprise ERP customizations, secure backend microservices, and dedicated monthly retainers.
          </p>

          {/* Currency Switcher Toggle (Solid 60-30-10 Colors) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs sm:text-sm font-bold transition-colors ${currency === 'IDR' ? 'text-blue-600 dark:text-blue-400 font-extrabold' : 'text-slate-500 dark:text-slate-400'}`}>
              🇮🇩 Indonesian Rupiah (IDR)
            </span>

            <button
              onClick={() => setCurrency(prev => prev === 'IDR' ? 'USD' : 'IDR')}
              aria-label="Switch Currency"
              className="relative w-16 h-8 p-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              🌎 Global Currency (USD)
            </span>
          </div>

          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
            Transparent and flexible pricing tailored to your exact technical and business scope.
          </div>
        </div>

        {/* 5-Tier Cards Grid (30% Secondary Panels with 10% Solid Accent Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {freelanceServices.map((service) => {
            const IconComponent = tierIcons[service.tier] || Sparkles;
            const isFeatured = service.tier === 3 || service.tier === 5;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-200 bg-slate-50 dark:bg-[#161b26] ${getTierCardStyle(
                  service.tier
                )} ${service.tier === 5 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Badge (Solid Color) */}
                {service.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-bold shadow-sm ${getBadgeStyle(service.tier)}`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#0f1117] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
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
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed min-h-[36px]">
                    {service.tagline}
                  </p>

                  {/* Price Tag (Clean Modern SaaS Layout, No Awkward Wrapping) */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0f1117] border border-slate-200 dark:border-slate-800 mb-6">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                        <span className="text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400">
                          {currency === 'IDR' ? 'Rp' : '$'}
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                          {currency === 'IDR' ? service.priceIDR : service.priceUSD}
                        </span>
                      </div>
                      
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {service.periodIDR === 'per month' || service.periodUSD === 'per month' ? '/ month' : '/ project'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-medium text-slate-500 dark:text-slate-400">
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

                {/* Card Footer: Ideal For & CTA */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-2 space-y-3">
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 bg-white dark:bg-[#0f1117] px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-800 dark:text-slate-200">Ideal For:</strong> {service.idealFor}
                  </div>

                  <button
                    onClick={() => handleOrder(service)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                      isFeatured
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>
                      Select Tier {service.tier} (Inquire Scope)
                    </span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Project Note (Solid Secondary Panel) */}
        <div className="mt-12 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#161b26] text-center max-w-2xl mx-auto">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
            Need a Custom Project or Enterprise Architecture? 💡
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
            Project scope and engineering resources can be tailored to match your specific budget, SLA, and technical requirements.
          </p>
          <a
            href="https://wa.me/6281395540904?text=Hi%20Giovanni,%20I%20have%20a%20custom%20engineering%20project%20and%20would%20like%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all duration-200 hover:scale-105 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Discuss Custom Project on WhatsApp
          </a>
        </div>

      </div>

    </section>
  );
}
