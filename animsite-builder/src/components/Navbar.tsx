import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

import { translations } from '../data/translations';
import { Language } from '../types';
import logoImg from '../assets/images/logo.png';

interface NavbarProps {
  lang: Language;
  onLanguageToggle: () => void;
  onOpenBooking: () => void;
}

const CrayonUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F2562C',
}) => (
  <svg
    viewBox="0 0 200 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute -bottom-1.5 left-0 w-full h-2.5 pointer-events-none select-none overflow-visible ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M 2,7 C 35,3 75,9 115,5 C 145,2 175,8 198,4 C 180,9 135,11 95,8 C 55,10 20,8 2,7 Z"
      fill={color}
      opacity="0.9"
    />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageToggle,
  onOpenBooking,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const t = translations[lang].nav;

  const navLinks = [
    { href: '#about', id: 'about', label: t.about },
    { href: '#therapy', id: 'therapy', label: t.therapy },
    { href: '#process', id: 'process', label: t.process },
    { href: '#blog', id: 'blog', label: t.blog },
    { href: '#contact', id: 'contact', label: t.contact },
  ];

  // DOM order of sections on page
  const sectionIdsInDomOrder = ['about', 'therapy', 'process', 'blog', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Clear selection near top of page (Hero)
      if (window.scrollY < 200) {
        setActiveSection(null);
        return;
      }

      // Check if scrolled to near bottom of page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // Find section currently in view near upper portion of viewport
      const viewportOffset = 220;
      let current: string | null = null;

      for (const id of sectionIdsInDomOrder) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportOffset && rect.bottom > 120) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#FCF5F0] transition-all duration-200">
      <div className="max-w-[92rem] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-22 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="Sandra Machoń - Terapia CBT Online"
        >
          <img
            src={logoImg}
            alt="Sandra Machoń Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-bold text-[#1b3644] text-lg sm:text-xl tracking-normal leading-none font-['Plus_Jakarta_Sans',sans-serif]">
              Terapia CBT Online
            </span>
            <span className="text-xs text-[#1b3644]/70 font-medium tracking-wide font-['Plus_Jakarta_Sans',sans-serif] mt-0.5">
              Sandra Machoń
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-11 text-sm font-semibold text-[#1b3644] tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(link.id);
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative py-2 group cursor-pointer transition-colors"
              >
                <span
                  className={
                    isActive
                      ? 'text-[#F2562C] font-bold transition-colors'
                      : 'text-[#1b3644] group-hover:text-[#F2562C] transition-colors'
                  }
                >
                  {link.label}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full transition-all duration-200 ${
                    isActive
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 group-hover:opacity-75 group-hover:scale-100'
                  }`}
                >
                  <CrayonUnderline />
                </span>
              </a>
            );
          })}
        </nav>

        {/* Actions (Language, Edit Mode, Booking) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={onLanguageToggle}
            className="px-3 py-1.5 rounded-full border border-[#1b3644]/30 hover:border-[#1b3644] text-xs font-bold text-[#1b3644] transition-all hover:bg-[#1b3644]/5 cursor-pointer"
            title="Switch Language / Zmień język"
          >
            <span className={lang === 'PL' ? 'text-[#FF5938]' : 'text-[#1b3644]/50'}>PL</span>
            <span className="mx-1 text-[#1b3644]/30">/</span>
            <span className={lang === 'EN' ? 'text-[#FF5938]' : 'text-[#1b3644]/50'}>EN</span>
          </button>

          {/* Book Button */}
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-full bg-[#F2562C] text-white text-xs sm:text-sm font-semibold hover:bg-[#F2562C]/90 transition-all hover:-translate-y-0.5 shadow-md shadow-[#F2562C]/20 cursor-pointer"
          >
            {t.bookButton}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={onLanguageToggle}
            className="px-3 py-1 rounded-full border border-[#1b3644]/30 hover:bg-[#1b3644]/5 text-xs font-bold text-[#1b3644] transition-colors"
          >
            {lang}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-[#1b3644] hover:bg-[#1b3644]/5 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full Page Mobile Blue Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#0885DE] text-white flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto"
          >
            {/* Full-Page Menu Header */}
            <div className="flex items-center justify-between w-full border-b border-white/20 pb-4">
              <a
                href="#top"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="bg-white/95 p-1.5 rounded-xl shadow-sm">
                  <img
                    src={logoImg}
                    alt="Sandra Machoń Logo"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-lg tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                    Terapia CBT Online
                  </span>
                  <span className="text-xs text-white/80 font-medium font-['Plus_Jakarta_Sans',sans-serif]">
                    Sandra Machoń
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={onLanguageToggle}
                  className="px-3 py-1.5 rounded-full border border-white/40 hover:bg-white/10 text-xs font-bold text-white transition-colors"
                >
                  {lang === 'PL' ? 'PL / EN' : 'EN / PL'}
                </button>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="my-auto py-8 flex flex-col items-center justify-center gap-6 text-center">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(link.id);
                      setMobileOpen(false);
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="relative text-2xl sm:text-3xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-white hover:text-white/80 transition-colors tracking-tight py-2 px-3 group"
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full transition-all duration-200 ${
                        isActive
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95 group-hover:opacity-80 group-hover:scale-100'
                      }`}
                    >
                      <CrayonUnderline color="#F2562C" />
                    </span>
                  </motion.a>
                );
              })}

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => {
                  onOpenBooking();
                  setMobileOpen(false);
                }}
                className="mt-6 px-8 py-4 rounded-full bg-[#F2562C] text-white font-bold text-base shadow-xl shadow-black/20 hover:bg-[#d9441c] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {t.bookButton}
              </motion.button>
            </nav>

            {/* Menu Footer */}
            <div className="text-center text-xs font-semibold text-white/75 border-t border-white/20 pt-4">
              Terapia CBT Online • Sandra Machoń
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

