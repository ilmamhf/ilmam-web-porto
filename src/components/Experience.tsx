import type { FC } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';

export const Experience: FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          number="02"
          title="Work History & Experience"
          japaneseTitle="職務経歴・実績"
          description="Track record of engineering roles, system migrations, and production reliability."
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white border border-neutral-200/90 rounded-xs p-7 sm:p-8 hover:border-neutral-300 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Meta / Company Column (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-100 pb-6 lg:pb-0 lg:pr-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C8321A] font-semibold mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-sm text-neutral-600 font-medium">
                      <span>{exp.company}</span>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-neutral-700 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-neutral-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        {exp.location}
                      </span>
                      <span>·</span>
                      <span className="px-2 py-0.5 bg-neutral-100 rounded-xs text-neutral-600">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="hidden lg:block mt-6">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      ROLE REF #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content / Highlights Column (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {/* Bullet Achievements */}
                    <div className="mt-5 space-y-2.5">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-neutral-400 mr-2">Core Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 bg-neutral-50 border border-neutral-200/80 text-neutral-700 rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
