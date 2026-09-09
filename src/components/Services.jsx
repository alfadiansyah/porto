import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import { portfolioData } from '../data/portfolioData';
import { 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Clock, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Rocket, 
  Building2, 
  Zap 
} from 'lucide-react';

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

  const getTierGradient = (tier) => {
    switch (tier) {
      case 1:
        return 'from-blue-500/10 to-indigo-500/5 hover:border-blue-500/50';
      case 2:
        return 'from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/50';
      case 3:
        return 'from-emerald-500/15 to-teal-500/10 border-emerald-500/60 shadow-lg shadow-emerald-500/10';
      case 4:
        return 'from-purple-500/10 to-pink-500/5 hover:border-purple-500/50';
      case 5:
        return 'from-amber-500/15 to-orange-500/10 border-amber-500/60 shadow-lg shadow-amber-500/10';
      default:
        return 'from-gray-500/10 to-gray-500/5 hover:border-gray-500/50';
    }
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
    <section id="services" className="relative w-full py-24 bg-white dark:bg-[#0f1117] text-gray-900 dark:text-white transition-colors overflow-hidden">
      
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Freelance Services & Tiers 💼
              </Highlighter>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
            Engineering packages designed for modern web apps, enterprise ERP customizations, secure backend microservices, and dedicated monthly retainers.
          </p>

          {/* Currency Switcher Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs sm:text-sm font-bold transition-colors ${currency === 'IDR' ? 'text-blue-600 dark:text-cyan-400 font-extrabold' : 'text-gray-500 dark:text-gray-400'}`}>
              🇮🇩 Indonesian Rupiah (IDR)
            </span>

            <button
              onClick={() => setCurrency(prev => prev === 'IDR' ? 'USD' : 'IDR')}
              aria-label="Switch Currency"
              className="relative w-16 h-8 p-1 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md transition-transform duration-300 ${
                  currency === 'USD' ? 'translate-x-8' : 'translate-x-0'
                }`}
              >
                {currency === 'USD' ? '$' : 'Rp'}
              </div>
            </button>

            <span className={`text-xs sm:text-sm font-bold transition-colors ${currency === 'USD' ? 'text-blue-600 dark:text-cyan-400 font-extrabold' : 'text-gray-500 dark:text-gray-400'}`}>
              🌎 Global Currency (USD)
            </span>
          </div>

          <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-2">
            Transparent and flexible pricing tailored to your exact technical and business scope.
          </div>
        </div>

        {/* 5-Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {freelanceServices.map((service) => {
            const IconComponent = tierIcons[service.tier] || Sparkles;
            const isFeatured = service.tier === 3 || service.tier === 5;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-md border ${
                  isFeatured 
                    ? 'border-2 ring-1 ring-blue-500/20 dark:ring-blue-400/20' 
                    : 'border-gray-200 dark:border-gray-800/80 hover:shadow-xl'
                } bg-gradient-to-b ${getTierGradient(service.tier)} bg-gray-50/80 dark:bg-[#161922]/90 ${
                  service.tier === 5 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Badge (if any) */}
                {service.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md border border-white/20">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-600 dark:text-cyan-400 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                          Tier {service.tier}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-5 leading-relaxed min-h-[36px]">
                    {service.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="p-4 rounded-2xl bg-white/90 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-white font-mono">
                        {currency === 'IDR' ? `Rp ${service.priceIDR}` : `$${service.priceUSD}`}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                        / {currency === 'IDR' ? service.periodIDR : service.periodUSD}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-gray-100 dark:border-gray-800 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 shrink-0" />
                      <span>Estimated Timeline: <strong className="text-gray-800 dark:text-gray-200">{service.deliveryTime}</strong></span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Deliverables & Scope:
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Ideal For & CTA */}
                <div className="pt-4 border-t border-gray-200/80 dark:border-gray-800/80 mt-2 space-y-3">
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-gray-800/50 px-3 py-2 rounded-xl border border-gray-200/60 dark:border-gray-700/50">
                    <strong className="text-gray-700 dark:text-gray-300">Ideal For:</strong> {service.idealFor}
                  </div>

                  <button
                    onClick={() => handleOrder(service)}
                    className={`w-full py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                      isFeatured
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black'
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

        {/* Custom Project Note */}
        <div className="mt-12 p-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-[#161922]/60 text-center max-w-2xl mx-auto backdrop-blur-sm">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
            Need a Custom Project or Enterprise Architecture? 💡
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Project scope and engineering resources can be tailored to match your specific budget, SLA, and technical requirements.
          </p>
          <a
            href="https://wa.me/6281395540904?text=Hi%20Giovanni,%20I%20have%20a%20custom%20engineering%20project%20and%20would%20like%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-transform hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Discuss Custom Project on WhatsApp
          </a>
        </div>

      </div>

    </section>
  );
}
