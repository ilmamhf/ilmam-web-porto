import { useState } from 'react';
import type { FC } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeading } from './UI/SectionHeading';
import { GithubIcon, LinkedinIcon } from './UI/Icons';

export const Contact: FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-neutral-200/70 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          number="05"
          title="Initiate Contact & Collaboration"
          japaneseTitle="連絡・お問い合わせ"
          description="Interested in discussing a junior engineering role, open-source project, or engineering collaboration? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Card */}
          <div className="lg:col-span-8 bg-white border border-neutral-200/90 rounded-xs p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8321A] font-semibold block mb-3">
                DIRECT COMMUNICATION
              </span>

              <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight leading-snug">
                Let's build meaningful software and collaborate together.
              </h3>

              <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
                Currently open for junior/associate software engineering positions, cross-division teamwork, and web development opportunities.
              </p>

              {/* Email Copy Card */}
              <div className="mt-8 p-4 sm:p-5 bg-neutral-50 border border-neutral-200/80 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-white border border-neutral-200 flex items-center justify-center text-neutral-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                      Primary Email
                    </span>
                    <span className="text-sm sm:text-base font-mono font-medium text-neutral-900">
                      {personalInfo.contact.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-2 bg-white border border-neutral-200 text-xs font-mono text-neutral-700 hover:border-neutral-400 rounded-xs transition-colors flex items-center gap-1.5 shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="px-4 py-2 bg-neutral-900 text-white text-xs font-medium rounded-xs hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-10 pt-8 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-50/60 hover:bg-neutral-100/80 border border-neutral-200/60 rounded-xs flex items-center justify-between text-xs font-medium text-neutral-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-neutral-600" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-50/60 hover:bg-neutral-100/80 border border-neutral-200/60 rounded-xs flex items-center justify-between text-xs font-medium text-neutral-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-neutral-600" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </a>

              {personalInfo.contact.twitter && (
                <a
                  href={personalInfo.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-50/60 hover:bg-neutral-100/80 border border-neutral-200/60 rounded-xs flex items-center justify-between text-xs font-medium text-neutral-800 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm leading-none">𝕏</span>
                    <span>Twitter / X</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              )}
            </div>
          </div>

          {/* Side Japanese Hanko & Philosophy Card */}
          <div className="lg:col-span-4 bg-white border border-neutral-200/90 rounded-xs p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  PHILOSOPHY
                </span>
                <span className="font-serif text-xs text-neutral-400">
                  技術理念
                </span>
              </div>

              {/* Japanese Seal Stamp (Hanko) */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 border-2 border-[#C8321A] text-[#C8321A] rounded-xs flex items-center justify-center p-1 font-serif text-xs leading-tight text-center font-bold select-none">
                  初心<br />向上
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-neutral-900">
                    Beginner's Mind (Shoshin)
                  </h4>
                  <p className="text-xs text-neutral-500 font-serif">
                    初心 · 好奇心 · 継続的成長
                  </p>
                </div>
              </div>

              <blockquote className="text-xs text-neutral-600 leading-relaxed italic border-l-2 border-neutral-200 pl-3">
                "In the beginner's mind there are many possibilities. Stay humble, ask questions, and continuously refine the craft."
              </blockquote>

              <div className="mt-6 pt-6 border-t border-neutral-100 space-y-3 text-xs text-neutral-500 font-mono">
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-neutral-800">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>TIMEZONE:</span>
                  <span className="text-neutral-800">{personalInfo.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-emerald-700 font-medium">AVAILABLE</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 text-[11px] font-mono text-neutral-400 text-center">
              RESPONSIVE WITHIN 24 HOURS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
