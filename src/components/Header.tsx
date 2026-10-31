import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF9]/90 backdrop-blur-md border-b border-neutral-200/80 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-xs bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider group-hover:bg-[#C8321A] transition-colors">
            IL
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-neutral-900 tracking-tight text-base leading-none">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-neutral-400 tracking-widest mt-1">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-normal text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & Status */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white/60 text-xs font-mono text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available</span>
          </div>

          <a
            href="#contact"
            className="text-xs font-medium px-4 py-2 bg-neutral-900 text-white rounded-xs hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-6 py-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-neutral-800 py-2 border-b border-neutral-100"
              >
                <span>{link.name}</span>
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Available for hire
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium px-4 py-2 bg-neutral-900 text-white rounded-xs"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
