import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Instagram, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink, BRAND_LOGO } from '../data/companyData.ts';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0d11]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0b0d11]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880] rounded"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[#c5a880]/40 flex items-center justify-center bg-[#151821] shadow-md shadow-[#c5a880]/15 group-hover:border-[#c5a880] group-hover:scale-105 transition-all duration-300 shrink-0">
              <img
                src={BRAND_LOGO}
                alt="Ananthapuri Constructions Official Logo"
                className="w-full h-full object-cover filter brightness-[1.05]"
              />
            </div>
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#c5a880] transition-colors">
              {COMPANY_DETAILS.name}
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a
              href="#about"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              Portfolio
            </a>
            <a
              href="#estimator"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              Cost Estimator
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-lg border border-white/10 bg-[#161922] text-neutral-300 hover:text-pink-400 hover:border-pink-500/30 transition-colors"
              title="Follow us on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink('Hello Ananthapuri Constructions, I would like to inquire about your turnkey construction services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#c5a880] hover:bg-[#d8bc94] active:bg-[#b0936b] rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-[#c5a880]/10"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#161922] border border-white/10 text-neutral-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#12141c] border border-white/10 rounded-xl space-y-3 shadow-2xl">
            <div className="flex flex-col space-y-2 text-sm font-medium text-neutral-300">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
              >
                Services Offered
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
              >
                Portfolio & Blueprints
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
              >
                Construction Cost Estimator
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
              >
                Contact & Consultations
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={getWhatsAppLink('Hello Ananthapuri Constructions, I want to discuss a new residential/commercial construction.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#c5a880] rounded-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp ({COMPANY_DETAILS.phoneDisplay})</span>
              </a>
              <div className="flex gap-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-neutral-300 bg-[#1a1e28] rounded-lg border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={COMPANY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-pink-400 bg-[#1a1e28] rounded-lg border border-white/10"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
