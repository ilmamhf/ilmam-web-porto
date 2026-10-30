import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { ArrowDown, Mail, MapPin, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './UI/Icons';

export const Hero: FC = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Jakarta',
        }) + ' WIB'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 border-b border-neutral-200/70 overflow-hidden">
      {/* Subtle Japanese grid background */}
      <div className="absolute inset-0 japanese-grid opacity-50 pointer-events-none" />

      {/* Decorative vertical Japanese label */}
      <div className="hidden xl:block absolute right-8 top-36 select-none pointer-events-none text-neutral-300/60 font-serif text-sm tracking-widest [writing-mode:vertical-rl]">
        確実な設計 · 静かな洗練 · ソフトウェア開発
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Top Eyebrow / Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200/90 rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8321A]"></span>
            <span className="text-neutral-800 font-medium">{personalInfo.role.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>{personalInfo.location}</span>
          </div>
          {timeString && (
            <div className="flex items-center gap-1.5 text-neutral-500">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{timeString}</span>
            </div>
          )}
        </div>

        {/* Hero Main Grid: Text on Left, Profile Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.12]">
                Engineering resilient systems, clean architectures, and disciplined digital craft.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </p>
            </div>

            {/* Action CTAs & Social Links */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-xs hover:bg-neutral-800 transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-4 h-4 text-neutral-300" />
              </a>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-xs hover:border-neutral-400 hover:text-neutral-950 transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-xs hover:border-neutral-400 hover:text-neutral-950 transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="px-5 py-3 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-xs hover:border-neutral-400 hover:text-neutral-950 transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Card (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-full bg-white border border-neutral-200/90 rounded-xs p-3 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-neutral-300 transition-colors">
              {/* Photo Frame Container */}
              <div className="relative aspect-4/5 w-full bg-neutral-100 overflow-hidden rounded-xs border border-neutral-200/60">
                {personalInfo.avatarUrl ? (
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 ease-out scale-[1.02] hover:scale-100"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 font-mono text-xs">
                    <span>[ NO IMAGE ]</span>
                  </div>
                )}

                {/* Hanko stamp watermark on bottom right */}
                <div className="absolute bottom-3 right-3 select-none pointer-events-none bg-white/90 backdrop-blur-xs px-2 py-1 border border-neutral-200 rounded-xs flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8321A]"></span>
                  <span className="font-serif text-[11px] text-neutral-700 tracking-wider">
                    {personalInfo.kanjiName || "技術者"}
                  </span>
                </div>
              </div>

              {/* Caption Under Photo */}
              <div className="mt-3 pt-2.5 px-1 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-800">{personalInfo.name}</span>
                  <span className="text-[10px] text-neutral-400">LEAD ENGINEER</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Engineering Metrics / Stats Row */}
        {personalInfo.stats && (
          <div className="mt-16 pt-10 border-t border-neutral-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-neutral-700 mt-1">
                  {stat.label}
                </span>
                {stat.sublabel && (
                  <span className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {stat.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
