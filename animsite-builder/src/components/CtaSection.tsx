import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { CompositionCTA } from './Shapes';

interface CtaSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  const t = translations[lang].cta;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FCF5F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0885DE] text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border-2 border-white/20"
        >
          {/* Decorative background glow */}
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 bottom-10 w-60 h-60 bg-[#F2562C]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Title */}
            <div className="lg:col-span-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">
                {lang === 'PL' ? 'Pierwszy Krok' : 'First Step'}
              </span>
              <h2 className="font-['Fraunces'] text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
                {t.title}
              </h2>
            </div>

            {/* Subtitle & Action */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6">
              <p className="text-base sm:text-lg text-white/95 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
                {t.subtitle}
              </p>

              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-[#F2562C] hover:bg-[#d9441c] text-white font-bold text-sm sm:text-base transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl cursor-pointer active:scale-95"
              >
                {t.button}
              </button>
            </div>
          </div>

          {/* Background Graphic composition */}
          <div className="absolute right-0 bottom-0 w-80 h-full opacity-15 pointer-events-none hidden lg:block">
            <CompositionCTA className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
