import React from 'react';
import { Instagram, MessageSquare, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink, BRAND_LOGO } from '../data/companyData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090d] border-t border-white/5 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#c5a880]/40 flex items-center justify-center bg-[#151821] shadow-sm shrink-0">
                <img
                  src={BRAND_LOGO}
                  alt="Ananthapuri Constructions Official Logo"
                  className="w-full h-full object-cover filter brightness-[1.05]"
                />
              </div>
              <span className="font-cinzel text-lg font-bold tracking-wider text-white">
                {COMPANY_DETAILS.name}
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Premier turnkey luxury builders & structural engineering consultants in Thiruvananthapuram, Kerala. 
              Pioneering transparency with dedicated real-time WhatsApp site logs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-lg bg-[#141824] hover:bg-pink-900/30 text-neutral-300 hover:text-pink-400 border border-white/5 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-lg bg-[#141824] hover:bg-emerald-900/30 text-neutral-300 hover:text-emerald-400 border border-white/5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-[#141824] hover:bg-[#c5a880]/20 text-neutral-300 hover:text-[#c5a880] border border-white/5 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Our Heritage</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services Offered</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Featured Portfolio</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">Cost & Material Estimator</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Site Consultations</a>
              </li>
            </ul>
          </div>

          {/* Core Services Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li>Turnkey Luxury Villas</li>
              <li>Architectural & Structural Design</li>
              <li>Nilambur Teak Interior Architecture</li>
              <li>Commercial Real Estate</li>
              <li>Seismic Retrofit & Restoration</li>
              <li>NRI Remote Build Management</li>
            </ul>
          </div>

          {/* Contact Direct Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Get In Touch
            </h4>
            <div className="space-y-2 text-neutral-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Founded & Led by G. Sudheer.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-neutral-400">Structural Quality Code</a>
            <span>·</span>
            <a href={getWhatsAppLink('Hello Ananthapuri Constructions, I would like to inquire about turnkey construction.')} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
              WhatsApp Consultation
            </a>
            <span>·</span>
            <a href={COMPANY_DETAILS.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
