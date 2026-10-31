import { useState } from 'react';
import type { FC } from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';
import { GithubIcon } from './UI/Icons';

export const Projects: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Frontend & UI', 'Backend & APIs', 'Tools & Ops'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="01"
            title="Selected Works & Practical Builds"
            subtitle="PROJECTS"
            description="Hands-on web applications, developer utilities, and internal tools bridging frontend, backend, and operations."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-end pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3 py-1.5 rounded-xs transition-colors ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white border border-neutral-200/90 rounded-xs overflow-hidden flex flex-col justify-between hover:border-neutral-400 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            >
              <div>
                {/* Project Image Preview Frame */}
                {project.imageUrl && (
                  <div className="relative aspect-16/9 w-full bg-neutral-100 overflow-hidden border-b border-neutral-200/80">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Subtle gradient vignette at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category pill on top right */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 border border-neutral-200 rounded-xs text-[11px] font-mono text-neutral-700 shadow-xs">
                      {project.category}
                    </div>

                    {/* Live link quick indicator on hover */}
                    {project.liveUrl && (
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900 text-white px-2.5 py-1 text-xs font-mono rounded-xs flex items-center gap-1">
                        <span>Preview</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                )}

                {/* Card Content Area */}
                <div className="p-7 sm:p-8">
                  {/* Header of Card */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 pb-3 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-900 font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {project.subtitle && (
                        <span className="text-neutral-400 font-mono text-[11px]">
                          · {project.subtitle}
                        </span>
                      )}
                    </div>
                    {!project.imageUrl && (
                      <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-[11px] rounded-xs">
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-black tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  {project.architectureDetails && project.architectureDetails.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-neutral-100">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                        Key Highlights & Learnings
                      </span>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {project.architectureDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#C8321A] mt-0.5">―</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Performance / Metrics Badge */}
                  {project.metrics && (
                    <div className="mt-4 px-3 py-1.5 bg-neutral-50 border border-neutral-150 rounded-xs inline-flex items-center gap-2 text-xs font-mono text-neutral-700">
                      <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom footer: Tech Stack & Links */}
              <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-0 flex flex-col gap-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 bg-white border border-neutral-200 text-neutral-600 rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-1 text-xs font-medium">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-900 hover:text-[#C8321A] transition-colors"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
