import React, { useState } from 'react';
import { Maximize, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PROJECTS, getWhatsAppLink } from '../data/companyData.ts';
import { Project } from '../types.ts';
import { ProjectDetailModal } from './ProjectDetailModal.tsx';

type FilterCategory = 'all' | 'villas' | 'residences' | 'interiors' | 'commercial';

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#0e1117] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] mb-2">
              Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white tracking-tight [text-wrap:balance]">
              Built for Generations Across Kerala
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3">
              Explore our landmark luxury villas, contemporary multi-story residences, and high-performance commercial facilities.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#141822] rounded-xl border border-white/5 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#c5a880] text-slate-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('villas')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'villas'
                  ? 'bg-[#c5a880] text-slate-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Luxury Villas
            </button>
            <button
              onClick={() => setFilter('residences')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'residences'
                  ? 'bg-[#c5a880] text-slate-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Modern Residences
            </button>
            <button
              onClick={() => setFilter('interiors')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'interiors'
                  ? 'bg-[#c5a880] text-slate-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Interiors
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'commercial'
                  ? 'bg-[#c5a880] text-slate-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#12151e] border border-white/5 overflow-hidden hover:border-[#c5a880]/40 transition-all duration-300 flex flex-col shadow-xl"
            >
              {/* Project Image Frame */}
              <div 
                className="relative h-72 sm:h-80 w-full overflow-hidden cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.88] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-transparent to-transparent opacity-90" />

                {/* Top overlay indicator */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 group-hover:bg-[#c5a880] group-hover:text-slate-950 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Overlaid Bottom Title */}
                <div className="absolute bottom-4 left-5 right-5">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-[#c5a880] font-medium mb-1">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.area}</span>
                    <span aria-hidden="true">·</span>
                    <span>Delivered {project.completionYear}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white group-hover:text-[#f2e2cb] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3 text-xs">
                  <span className="flex items-center gap-2 text-neutral-400">
                    <span className="text-[#c5a880] font-medium">{project.categoryLabel}</span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span>{project.area}</span>
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-3 py-1.5 rounded-lg text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors font-medium"
                    >
                      View Specs
                    </button>

                    <a
                      href={getWhatsAppLink(`Hello G. Sudheer, I saw ${project.title} in your portfolio. Can you share estimated costs and feasibility for a similar build?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/30 transition-colors"
                      title="Inquire about this project on WhatsApp"
                      aria-label="Inquire about this project on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
