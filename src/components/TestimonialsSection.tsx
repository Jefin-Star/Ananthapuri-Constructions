import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/companyData.ts';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0b0d11] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] mb-2">
            Client Voices & Evidence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Trusted by Homeowners & Developers Across South India
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From prominent medical practitioners to NRI entrepreneurs across the globe, 
            here is what clients say about our execution and direct communication.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#12151e] border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all shadow-xl"
            >
              <div>
                <Quote className="w-8 h-8 text-[#c5a880]/30 mb-4" />
                <p className="text-sm text-neutral-300 leading-relaxed font-editorial italic text-[1.1rem] mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-sm font-bold text-white font-cinzel">
                  {item.clientName}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural FAQ Grid */}
        <div className="pt-8">
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] mb-1">
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl font-cinzel font-bold text-white">
              Everything You Need to Know Before Starting
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#12151f] border border-white/5 space-y-2.5"
              >
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
