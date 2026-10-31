import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white border-t border-neutral-200/80 text-neutral-600 text-xs">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-mono font-bold text-neutral-900 tracking-wider">
            {personalInfo.name.toUpperCase()}
          </span>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <span>Software Engineer Portfolio</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-neutral-400 text-[11px]">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 border border-neutral-200 hover:border-neutral-400 rounded-xs text-neutral-700 transition-colors flex items-center gap-1.5 font-mono text-[11px]"
            aria-label="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
