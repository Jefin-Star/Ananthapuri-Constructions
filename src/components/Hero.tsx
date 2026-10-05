import React from 'react';
import { MessageSquare, ArrowRight, Instagram, ShieldCheck, Award, Clock } from 'lucide-react';
import { COMPANY_DETAILS, HERO_IMAGE, getWhatsAppLink } from '../data/companyData.ts';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury architectural villa exterior designed and constructed by Ananthapuri Constructions"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.42] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradients to guarantee legibility and smooth section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11] via-[#0b0d11]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtle Trust Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#c5a880]">
              Kerala's Benchmark in Luxury Architecture
            </span>
          </div>

          {/* Primary Headline with text-wrap: balance */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            Timeless Architecture. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e7d3] to-[#c5a880]">
              Uncompromising
            </span>{' '}
            Structural Integrity.
          </h1>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl font-editorial italic text-[1.25rem]">
            From turnkey luxury villas to landmark commercial spaces, 
            <strong className="text-white font-medium not-italic"> {COMPANY_DETAILS.name} </strong>
            crafts architectural legacies with absolute engineering transparency and 
            <span className="text-[#c5a880] not-italic font-medium"> direct WhatsApp communication</span>.
          </p>

          {/* Call-to-Action Block */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={getWhatsAppLink('Hello G. Sudheer & Team, I am planning a new construction project and would like to discuss design, estimates, and site inspection.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-[#c5a880] hover:bg-[#d8bc94] active:bg-[#b0936b] rounded-lg transition-all duration-200 shadow-xl shadow-[#c5a880]/20 group"
            >
              <MessageSquare className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>Inquire Directly on WhatsApp</span>
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 rounded-lg transition-colors backdrop-blur-sm"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 text-[#c5a880]" />
            </a>

            <a
              href={COMPANY_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs font-medium text-pink-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors backdrop-blur-sm"
              title="Visit Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
              <span className="sm:hidden lg:inline">{COMPANY_DETAILS.instagramHandle}</span>
            </a>
          </div>

          {/* Social Proof & Trust Metrics */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-cinzel tracking-tight">
                {COMPANY_DETAILS.experienceYears}+
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Years Engineering Heritage</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-cinzel tracking-tight">
                {COMPANY_DETAILS.projectsCompleted}+
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Villas & Projects Delivered</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-cinzel tracking-tight">
                {COMPANY_DETAILS.sqftDelivered}
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Sq.Ft Premium Area Built</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#c5a880] font-cinzel tracking-tight flex items-center gap-1">
                <span>100%</span>
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Live WhatsApp Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
