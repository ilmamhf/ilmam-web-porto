import type { FC } from 'react';
import { skillCategories } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';
import { Code2, Server, Layout, Cloud } from 'lucide-react';

export const Skills: FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-neutral-600" />;
      case 1:
        return <Server className="w-4 h-4 text-neutral-600" />;
      case 2:
        return <Layout className="w-4 h-4 text-neutral-600" />;
      case 3:
        return <Cloud className="w-4 h-4 text-neutral-600" />;
      default:
        return <Code2 className="w-4 h-4 text-neutral-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          number="03"
          title="Technical Tooling & Foundations"
          subtitle="SKILLS"
          description="Languages, frameworks, database tools, and cross-division collaborative workflows I work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white border border-neutral-200/90 rounded-xs p-6 hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(index)}
                    <span className="font-mono text-xs text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>
                  {category.subtitle && (
                    <span className="font-mono text-xs text-neutral-400">
                      {category.subtitle}
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-neutral-900 text-base mb-4 tracking-tight">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between text-xs py-1"
                    >
                      <span className="font-medium text-neutral-700 font-mono">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-neutral-400 px-1.5 py-0.5 bg-neutral-100 rounded-xs">
                          {skill.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>{category.skills.length} TECHNOLOGIES</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
