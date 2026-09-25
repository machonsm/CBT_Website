import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { Language } from '../types';
import blueShapeHero from './blue-shape-hero.png';
import heartArrowImg from '../assets/images/heart-arrow.png';

interface HeroSectionProps {
  lang: Language;
  onOpenBooking: () => void;
  portraitPath?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenBooking,
  portraitPath,
}) => {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-5.5rem)] flex flex-col justify-between pt-6 pb-12 sm:pt-10 sm:pb-16 px-6 sm:px-12 lg:px-20 overflow-x-clip bg-[#FCF5F0]">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-[#FDBF2E]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#2D75C8]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column: Headline, Text & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10 space-y-6 sm:space-y-8">

          {/* Headline */}
          <h1 className="w-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0885DE] -tracking-[0.02em] leading-[1.15] select-none text-[clamp(2.4rem,4.8vw,4.4rem)] text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.line1} {t.line2} {t.line3} {t.line4}{' '}
              <span className="relative inline-block">
                <span className="relative z-10">{t.line5}</span>
                <svg
                  viewBox="0 0 320 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-[#F2562C] pointer-events-none select-none overflow-visible"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 3,10 C 60,4 140,13 220,7 C 270,3 300,9 317,6 C 285,13 210,15 140,11 C 80,14 30,12 3,10 Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </span>
            </motion.div>
          </h1>

          {/* Subtext and Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl flex flex-col items-start gap-6"
          >
            <p className="text-sm sm:text-base text-black font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed font-normal text-left tracking-normal">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F2562C] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#F2562C]/20 hover:bg-[#F2562C]/90 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#F2562C]/30 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>{t.cta}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href="#therapy"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('therapy')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/90 border border-[#0885DE]/20 text-[#1b3644] font-semibold text-sm sm:text-base hover:bg-white hover:border-[#0885DE] transition-all text-center cursor-pointer shadow-sm"
              >
                {lang === 'PL' ? 'Poznaj metodę CBT' : 'Learn About CBT'}
              </a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#benefits"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { delay: 0.4, duration: 0.6 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="pt-2 cursor-pointer select-none group inline-block"
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#0885DE] hover:text-[#066bb3] transition-colors tracking-wide"
            >
              <img
                src={heartArrowImg}
                alt="Heart"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform group-hover:scale-110"
              />
              <span className="uppercase text-xs sm:text-sm tracking-widest font-bold">
                {t.scroll}
              </span>
            </motion.div>
          </motion.a>
        </div>

        {/* Right Column: Graphic Artwork Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 flex items-end justify-center lg:justify-end w-full relative z-10 mt-6 lg:mt-0"
        >
          <motion.img
            src={blueShapeHero}
            alt="Psychotherapy CBT Graphic Design"
            animate={{ y: [-6, 6, -6] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: 'easeInOut',
            }}
            className="w-full max-w-md sm:max-w-xl lg:max-w-2xl h-auto object-contain drop-shadow-xl pointer-events-none select-none scale-[1.4] sm:scale-110 lg:scale-115 transform-gpu -mb-16 sm:-mb-16 lg:mb-0 my-6 sm:my-0 origin-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};
