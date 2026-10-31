import type { FC } from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  description
}) => {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-neutral-500 uppercase mb-2">
        <span className="text-[#C8321A] font-semibold">{number}</span>
        <span className="w-8 h-[1px] bg-neutral-300"></span>
        {subtitle && (
          <span className="tracking-widest text-neutral-400 font-mono text-[11px]">{subtitle}</span>
        )}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-neutral-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
