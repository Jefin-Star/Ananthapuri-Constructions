import React from 'react';
import { Shield, CheckCircle2, MessageSquare, Mail, Award, Ruler } from 'lucide-react';
import { COMPANY_DETAILS, CRAFTSMANSHIP_IMAGE, getWhatsAppLink } from '../data/companyData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0e1117] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] mb-2">
            The Ananthapuri Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white tracking-tight mb-6 [text-wrap:balance]">
            Engineering Mastery Born from the Heart of Trivandrum
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-editorial italic text-[1.2rem]">
            "A home is not merely an assemblage of cement and steel; it is a generational sanctuary built to brave centuries of monsoon rains and coastal tides without a single fissure."
          </p>
          <div className="mt-3 text-xs uppercase tracking-wider font-semibold text-[#c5a880]/90">
            — {COMPANY_DETAILS.founder}, Lead Structural Engineer & Founder
          </div>
        </div>

        {/* 2-Column Story & Craftsmanship Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-sm sm:text-base">
            <p>
              Founded with the vision to elevate construction benchmarks in Kerala, 
              <strong className="text-white font-medium"> {COMPANY_DETAILS.name} </strong>
              unites structural engineering rigor with high-concept architectural design. 
              Under the direct leadership of G. Sudheer, we have successfully handed over more than 
              140 landmark residential villas, high-end commercial spaces, and heritage restorations across 
              Thiruvananthapuram and South India.
            </p>

            <p>
              Unlike conventional builders who subcontract critical stages to third-party labor gangs, 
              we operate with an <span className="text-white font-medium">in-house engineering squad</span>, 
              dedicated site supervisors, and seasoned master carpenters trained in Nilambur teak joinery. 
              Every batch of concrete undergoes 7-day and 28-day compression cube tests, and all rebar schedules 
              are personally vetted to comply with IS 456:2000 and IS 1893 seismic parameters.
            </p>

            {/* Three Pillar Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#141822] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] mb-3">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Zero Compromise</h3>
                <p className="text-xs text-neutral-400">
                  Strictly Tata Tiscon 550D rebar & 53-grade cement. No adulterated mixes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141822] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] mb-3">
                  <Ruler className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Fixed BOQ Ethics</h3>
                <p className="text-xs text-neutral-400">
                  Transparent line-item bill of quantities. Zero arbitrary cost escalation mid-way.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141822] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] mb-3">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">WhatsApp Transparency</h3>
                <p className="text-xs text-neutral-400">
                  Direct WhatsApp access to G. Sudheer with regular photo & video site logs.
                </p>
              </div>
            </div>

            {/* Contact Bridge */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppLink('Hello G. Sudheer, I would like to schedule an engineering consultation with you.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#c5a880] hover:bg-[#d8bc94] rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Consult with G. Sudheer</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-[#151922] border border-white/10 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Craftsmanship Image with Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={CRAFTSMANSHIP_IMAGE}
                alt="High precision structural concrete and reinforcement work on an Ananthapuri Constructions site"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Overlaid Engineering Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b0d11]/85 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#c5a880]">
                    Field Quality Certification
                  </span>
                  <Award className="w-4 h-4 text-[#c5a880]" />
                </div>
                <div className="text-xs text-neutral-300">
                  Certified ultrasonic concrete testing, laser leveling, and 48-hour hydraulic ponding tests on every roof slab.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
