import React from 'react';
import { X, Maximize, Calendar, ShieldCheck, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Project } from '../types.ts';
import { getWhatsAppLink } from '../data/companyData.ts';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#12151e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-8 text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] mb-1">
              {project.categoryLabel} · {project.code}
            </div>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300 mt-2">
              <span className="flex items-center gap-1">
                <Maximize className="w-3.5 h-3.5 text-[#c5a880]" />
                {project.area}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                Completed {project.completionYear}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c5a880] mb-2">
              Architectural Overview
            </h4>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c5a880] mb-3">
              Engineering & Execution Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structural Specifications */}
          <div className="pt-4 border-t border-white/10">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c5a880] mb-3">
              Certified Materials & Specs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#171b26] border border-white/5">
                <span className="text-neutral-400 block mb-0.5">Structural Reinforcement</span>
                <span className="text-white font-medium">{project.specs.structure}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#171b26] border border-white/5">
                <span className="text-neutral-400 block mb-0.5">Flooring & Stone</span>
                <span className="text-white font-medium">{project.specs.flooring}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#171b26] border border-white/5">
                <span className="text-neutral-400 block mb-0.5">Joinery & Teak Millwork</span>
                <span className="text-white font-medium">{project.specs.woodwork}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#171b26] border border-white/5">
                <span className="text-neutral-400 block mb-0.5">Architectural Features</span>
                <span className="text-white font-medium">{project.specs.features}</span>
              </div>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400 text-center sm:text-left">
              Want a similar architectural blueprint customized for your plot?
            </div>
            <a
              href={getWhatsAppLink(`Hello G. Sudheer, I viewed "${project.title}" (${project.code}) in your portfolio and would like to consult on building a similar custom home.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-[#c5a880] hover:bg-[#d8bc94] rounded-lg transition-colors shadow-lg shadow-[#c5a880]/10"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Inquire on WhatsApp with Project Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
