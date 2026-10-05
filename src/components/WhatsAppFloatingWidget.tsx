import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink } from '../data/companyData.ts';

export const WhatsAppFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const quickPrompts = [
    { label: 'Villa Cost Estimate', msg: 'Hello G. Sudheer, I would like to get a preliminary cost estimate for building a luxury villa.' },
    { label: 'Track Project Progress', msg: 'Hello Ananthapuri Constructions, I want to check the latest live milestone update for my site.' },
    { label: 'Schedule Site Visit', msg: 'Hello G. Sudheer, I have a plot in Trivandrum and would like to arrange a site feasibility visit.' },
    { label: 'NRI Turnkey Package', msg: 'Hello, I am an NRI looking for turnkey residential construction with regular WhatsApp video logs.' }
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || userMsg || 'Hello Ananthapuri Constructions, I would like to connect on WhatsApp.';
    window.open(getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Expanded Quick Action Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#12151e] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#17241c] to-[#12161f] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#12151e]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Ananthapuri Engineering</h4>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span>G. Sudheer & Desk Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#0d0f16]">
            <div className="p-3 rounded-xl bg-[#151924] border border-white/5 text-xs text-neutral-300 leading-relaxed">
              Welcome to <strong>Ananthapuri Constructions</strong>. Connect directly on WhatsApp for architectural sketches, instant quotes, or live site tracking.
            </div>

            {/* Quick Prompt Chips */}
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mb-2">
                Quick Inquiries:
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {quickPrompts.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q.msg)}
                    className="p-2 text-left text-[11px] rounded-lg bg-[#151822] hover:bg-[#1c2230] text-neutral-300 hover:text-white border border-white/5 transition-colors line-clamp-1"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-xs rounded-lg bg-[#141822] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#25D366]"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold transition-colors"
                aria-label="Send via WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[10px] text-neutral-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#c5a880]" />
              <span>Official WhatsApp: {COMPANY_DETAILS.phoneDisplay}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp conversation"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-semibold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs tracking-wider uppercase font-bold sm:inline hidden">
          WhatsApp Desk
        </span>
      </button>
    </div>
  );
};
