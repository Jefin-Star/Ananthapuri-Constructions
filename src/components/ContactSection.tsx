import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppLink } from '../data/companyData.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Turnkey Luxury Villa',
    location: '',
    area: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct WhatsApp message and open it
    const msg = `Hello G. Sudheer, I would like to schedule a project consultation:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || 'Not provided'}
- Project Type: ${formData.projectType}
- Plot Location: ${formData.location || 'Trivandrum'}
- Approximate Area: ${formData.area || 'To be decided'}
- Message: ${formData.message || 'Please contact me regarding my plot requirements.'}`;
    
    const waUrl = getWhatsAppLink(msg);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#0e1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] mb-2">
            Start Your Architectural Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Connect Directly with {COMPANY_DETAILS.name}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Whether you have an architectural blueprint ready for quotation or an open plot awaiting vision, 
            our chief engineer G. Sudheer and technical associates are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Channels & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121c16] to-[#0e151b] border border-emerald-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Instant Response Line
                  </span>
                  <h3 className="text-lg font-bold text-white">WhatsApp Consultation Desk</h3>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect with G. Sudheer directly. Send architectural PDFs, site sketches, or plot Google Maps links for immediate technical appraisal.
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink('Hello G. Sudheer, I would like to initiate a consultation for a new construction project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#25D366] hover:bg-[#22bf5c] rounded-lg transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp ({COMPANY_DETAILS.phoneDisplay})</span>
                </a>
              </div>
            </div>

            {/* Contact Channels List */}
            <div className="p-6 rounded-2xl bg-[#12151f] border border-white/10 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c5a880]">
                Official Directory
              </h4>

              {/* Direct Call */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#181d2a] text-[#c5a880] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Direct Telephone</div>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="text-sm font-semibold text-white hover:text-[#c5a880] transition-colors"
                  >
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#181d2a] text-[#c5a880] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Official Correspondence</div>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-sm font-semibold text-white hover:text-[#c5a880] transition-colors"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Instagram Profile */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400 shrink-0 mt-0.5">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Instagram Visual Archive</div>
                  <a
                    href={COMPANY_DETAILS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1"
                  >
                    <span>{COMPANY_DETAILS.instagramHandle}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form with instant WhatsApp handoff */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#12151f] border border-white/10 shadow-2xl">
            <h3 className="text-xl font-cinzel font-bold text-white mb-2">
              Request Site Inspection or Detailed BOQ
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Complete the consultation form below to launch a pre-formatted WhatsApp chat directly with our engineering department.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Pillai"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#0e1118] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 94475 52979"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#0e1118] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#0e1118] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#0e1118] border border-white/10 text-white focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Turnkey Luxury Villa">Turnkey Luxury Villa</option>
                    <option value="Contemporary Modern Residence">Contemporary Modern Residence</option>
                    <option value="Architectural & Structural Engineering">Architectural & Structural Engineering</option>
                    <option value="High-End Interior Architecture">High-End Interior Architecture</option>
                    <option value="Commercial Complex Development">Commercial Complex Development</option>
                    <option value="Heritage Restoration & Retrofit">Heritage Restoration & Retrofit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Plot / Site Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Kowdiar, Kazhakkoottam, Sasthamangalam"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#0e1118] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Approximate Built-up Area
                  </label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    placeholder="e.g. 3,500 sq.ft"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#0e1118] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Project Brief or Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your architectural aspirations, preferred design language, or timeline..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#0e1118] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#c5a880] hover:bg-[#d8bc94] active:bg-[#b0936b] rounded-lg transition-colors shadow-lg shadow-[#c5a880]/15"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Inquiry & Open WhatsApp Consultation</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Consultation dispatch initiated! WhatsApp has been opened with your inquiry parameters.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
