import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  const t = translations[lang].process;

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#1b3644] text-white scroll-mt-20 relative overflow-hidden border-t border-b border-white/10">
      {/* Background glow effects */}
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#0885DE]/20 blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 rounded-full bg-[#F2562C]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm border border-white/20">
            {lang === 'PL' ? 'Etapy Terapii' : 'Therapy Stages'}
          </span>
          <h2 className="font-['Fraunces'] text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-3 leading-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg font-['Plus_Jakarta_Sans',sans-serif] text-white/85">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Steps Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col items-start gap-4 bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/15 hover:bg-white/15 transition-all shadow-lg group"
            >
              {/* Step Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#F2562C] text-white font-bold text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              <h3 className="font-['Fraunces'] text-xl font-normal text-white mt-1">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-white/85 font-['Plus_Jakarta_Sans',sans-serif]">
                {step.description}
              </p>

              {/* Arrow connector for large screens */}
              {idx < t.steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-12 text-2xl text-white/30 pointer-events-none font-bold">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
