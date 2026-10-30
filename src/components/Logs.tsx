import type { FC } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { logPosts } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';

export const Logs: FC = () => {
  return (
    <section id="logs" className="py-20 md:py-28 border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          number="04"
          title="Engineering Logs & Thoughts"
          japaneseTitle="技術記録・論考"
          description="Documenting real-world architectural tradeoffs, database tuning experiments, and engineering principles."
        />

        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80 bg-white">
          {logPosts.map((post) => (
            <article
              key={post.id}
              className="group p-6 sm:p-8 hover:bg-neutral-50/70 transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-6"
            >
              <div className="md:w-1/4 shrink-0 flex flex-col sm:flex-row md:flex-col gap-1 sm:gap-4 md:gap-1 text-xs font-mono text-neutral-400">
                <span className="text-neutral-800 font-medium">{post.date}</span>
                <span className="flex items-center gap-1 text-neutral-500">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <div className="md:w-3/4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 group-hover:text-black tracking-tight flex items-center justify-between gap-4">
                    <span>{post.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C8321A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
