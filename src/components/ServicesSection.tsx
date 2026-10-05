import React, { useState } from 'react';
import { Building2, Compass, Sparkles, Layers, Hammer, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../data/companyData.ts';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-[#c5a880]" />,
  Compass: <Compass className="w-5 h-5 text-[#c5a880]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#c5a880]" />,
  Layers: <Layers className="w-5 h-5 text-[#c5a880]" />,
  Hammer: <Hammer className="w-5 h-5 text-[#c5a880]" />
};

export const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-[#0b0d11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] mb-2">
            End-To-End Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Comprehensive Architectural & Engineering Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From bare soil to key handover, our integrated engineering team eliminates subcontractor friction 
            and delivers uncompromising quality on a guaranteed schedule.
          </p>
        </div>

        {/* Interactive Master-Detail Service Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#151924] border-[#c5a880]/50 shadow-lg shadow-[#c5a880]/5'
                      : 'bg-[#10131b] border-white/5 hover:border-white/15 hover:bg-[#131722]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#c5a880] font-bold">
                      {service.number}
                    </span>
                    <div>
                      <h3 className={`text-sm sm:text-base font-semibold tracking-wide transition-colors ${
                        isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                  <div className={`p-2 rounded-lg transition-transform ${isSelected ? 'scale-110 bg-[#c5a880]/10' : 'opacity-60'}`}>
                    {iconMap[service.icon]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Breakdown of Selected Service */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#131620] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <div className="text-xs font-mono font-bold text-[#c5a880] mb-1">
                    SERVICE {activeService.number} SPECIFICATION
                  </div>
                  <h3 className="text-2xl font-cinzel font-bold text-white">
                    {activeService.title}
                  </h3>
                </div>
                <div className="p-3 rounded-xl bg-[#1c2130] border border-white/10">
                  {iconMap[activeService.icon]}
                </div>
              </div>

              {/* Full Description */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                {activeService.fullDesc}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c5a880] mb-3">
                  Scope of Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material & Engineering Standards */}
              <div className="mb-8 pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c5a880] mb-3">
                  Certified Materials & Structural Compliance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.materials.map((mat, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#0e1118] border border-white/5 text-xs text-neutral-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href={getWhatsAppLink(`Hello Ananthapuri Constructions, I am inquiring specifically about: ${activeService.title}. Please provide more details and consultation availability.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#c5a880] hover:bg-[#d8bc94] rounded-lg transition-colors shadow-lg shadow-[#c5a880]/10"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Inquire about {activeService.title.split(' ')[0]} on WhatsApp</span>
                </a>

                <a
                  href="#estimator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-neutral-300 hover:text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span>Estimate Construction Cost</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
