import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface BenefitsSectionProps {
  lang: Language;
}

const colorMap = [
  { bg: 'bg-[#0885DE]', accent: '#0885DE' },
  { bg: 'bg-[#F2562C]', accent: '#F2562C' },
  { bg: 'bg-[#2FA875]', accent: '#2FA875' },
  { bg: 'bg-[#1b3644]', accent: '#1b3644' },
];

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ lang }) => {
  const benefits = translations[lang].benefits;

  return (
    <section id="benefits" className="relative z-20 w-full scroll-mt-24 shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => {
          const colors = colorMap[index % colorMap.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${colors.bg} p-8 sm:p-10 lg:p-12 text-white text-center flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.01] hover:z-10 min-h-[250px] relative overflow-hidden group`}
            >
              {/* Decorative Subtle Background Circle */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              {/* White Circular Icon Badge */}
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md text-white border border-white/20 flex items-center justify-center text-3xl mb-5 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="font-['Fraunces'] text-xl sm:text-2xl font-normal mb-2.5 tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-white/90 font-['Plus_Jakarta_Sans',sans-serif] max-w-xs">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
