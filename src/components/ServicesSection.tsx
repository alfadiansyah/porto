import React, { useState } from 'react';
import { cvData, FreelanceService } from '../data/portfolioData';
import { 
  Rocket, 
  Stack, 
  Cpu, 
  ShieldCheck, 
  Lightning, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  CurrencyCircleDollar,
  WhatsappLogo,
  ChatCircleText
} from '@phosphor-icons/react';

export const ServicesSection: React.FC = () => {
  const [currency, setCurrency] = useState<'IDR' | 'USD'>('IDR');

  const getTierIcon = (tier: number) => {
    switch (tier) {
      case 1: return <Rocket size={18} />;
      case 2: return <Stack size={18} />;
      case 3: return <Cpu size={18} />;
      case 4: return <ShieldCheck size={18} />;
      case 5: return <Lightning size={18} />;
      default: return <Rocket size={18} />;
    }
  };

  const handleInquiry = (service: FreelanceService) => {
    const isUSD = currency === 'USD';
    const priceText = isUSD 
      ? `$${service.priceUSD} USD (${service.periodUSD})` 
      : `Rp ${service.priceIDR} (${service.periodIDR})`;

    const message = `Halo Giovanni!%0A%0ASaya tertarik untuk mendiskusikan jasa freelance / konsultasi teknis:%0A%0A*Paket:* Tier ${service.tier} - ${encodeURIComponent(service.name)}%0A*Estimasi Rate:* ${encodeURIComponent(priceText)}%0A*Estimasi Timeline:* ${encodeURIComponent(service.deliveryTime)}%0A%0ABolehkah kita jadwalkan diskusi singkat terkait kebutuhan project ini? Terima kasih!`;

    const waUrl = `https://wa.me/6281395540904?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-12 sm:py-16 border-b border-zinc-800 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1 rounded bg-zinc-800 text-zinc-300">
              <CurrencyCircleDollar size={16} weight="bold" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Freelance & Technical Consulting Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Engineering Packages & Rates
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Direct freelance contracts, enterprise ERP customizations, cybersecurity microservices, and dedicated monthly tech lead retainers.
          </p>
        </div>

        {/* Currency Switcher Toggle */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-zinc-950 border border-zinc-800 self-start md:self-auto">
          <button
            onClick={() => setCurrency('IDR')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
              currency === 'IDR'
                ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            IDR (Rp)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
              currency === 'USD'
                ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* 5-Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cvData.freelanceServices.map((service) => {
          const isFeatured = service.tier === 3 || service.tier === 5;
          const isSpanTwo = service.tier === 5;

          return (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-zinc-950 border transition-all text-left ${
                isFeatured 
                  ? 'border-zinc-600 bg-zinc-950/90 shadow-md shadow-black/40' 
                  : 'border-zinc-800/90 hover:border-zinc-700'
              } ${isSpanTwo ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Optional Top Badge */}
              {service.badge && (
                <div className="absolute -top-2.5 right-4 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-black font-mono text-[10px] font-bold shadow-sm">
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Tier & Name */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {getTierIcon(service.tier)}
                  </span>
                  <div>
                    <span className="text-[10.5px] font-mono text-zinc-500 uppercase font-semibold">
                      Tier {service.tier} Package
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-4 leading-relaxed min-h-[34px]">
                  {service.tagline}
                </p>

                {/* Price Display */}
                <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800/90 mb-4">
                  <div className="flex items-baseline justify-between gap-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-mono text-zinc-400">
                        {currency === 'IDR' ? 'Rp' : '$'}
                      </span>
                      <span className="text-2xl font-extrabold text-white tracking-tight font-sans">
                        {currency === 'IDR' ? service.priceIDR : service.priceUSD}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {currency === 'IDR' ? service.periodIDR : service.periodUSD}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
                    <Clock size={12} className="text-zinc-500" />
                    <span>Timeline: <strong className="text-zinc-200">{service.deliveryTime}</strong></span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[11px] font-mono font-bold uppercase text-zinc-400">
                    Deliverables & Scope:
                  </div>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle size={13} className="text-zinc-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Ideal For & Direct Action */}
              <div className="pt-3 border-t border-zinc-800/80 space-y-3">
                <div className="text-[11px] text-zinc-400 bg-zinc-900/40 p-2 rounded-lg border border-zinc-850">
                  <strong className="text-zinc-300">Ideal For:</strong> {service.idealFor}
                </div>

                <button
                  onClick={() => handleInquiry(service)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                    isFeatured
                      ? 'bg-white hover:bg-zinc-200 text-black shadow-sm'
                      : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <WhatsappLogo size={14} weight="fill" className={isFeatured ? 'text-black' : 'text-emerald-400'} />
                    <span>Inquire Tier {service.tier} on WhatsApp</span>
                  </span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Scope Consultation Box */}
      <div className="mt-8 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-white mb-1">
            Need a Custom Architecture Audit or Tailored Scope?
          </h4>
          <p className="text-xs text-zinc-400 max-w-xl leading-relaxed">
            Project deliverables, tech stack migrations (e.g. PHP to Java/Spring Boot), or custom ERP modules can be tailored according to your team's timeline.
          </p>
        </div>
        <a
          href="https://wa.me/6281395540904?text=Halo%20Giovanni,%20saya%20ingin%20diskusi%20kebutuhan%20custom%20software%20engineering%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
        >
          <ChatCircleText size={15} />
          <span>Discuss Custom Project</span>
        </a>
      </div>
    </section>
  );
};
