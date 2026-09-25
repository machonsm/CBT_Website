import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../data/translations';
import { Language } from '../types';
import pic1Img from '../assets/images/pic1.png';

interface HowICanHelpProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const HowICanHelpSection: React.FC<HowICanHelpProps> = ({
  lang,
  onOpenBooking,
}) => {
  const t = translations[lang].help;
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>('anxiety');

  const selectedTopic = t.topics.find((tp) => tp.id === selectedTopicId);

  return (
    <section id="help" className="py-16 sm:py-24 bg-[#FCF5F0] border-t border-[#1b3644]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-3"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#0885DE]/10 text-[#0885DE] text-xs font-bold uppercase tracking-wider w-fit">
              {lang === 'PL' ? 'Obszary Wsparcia' : 'Areas of Support'}
            </span>
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b3644]">
              {t.title}
            </h2>
            <p className="text-base sm:text-lg text-[#1b3644]/80 font-['Plus_Jakarta_Sans',sans-serif]">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Featured Visual Illustration Card with pic1.png */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-sm rounded-3xl overflow-hidden bg-gradient-to-br from-[#0885DE]/10 via-[#F2562C]/10 to-[#2FA875]/10 p-4 border border-[#1b3644]/15 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-white/60 flex items-center justify-center p-2">
                <img
                  src={pic1Img}
                  alt="Therapy & CBT Mental Wellness Illustration"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-[#1b3644]/80 tracking-wide font-['Plus_Jakarta_Sans',sans-serif]">
                  {lang === 'PL' ? '✨ Indywidualna Ścieżka Terapii' : '✨ Personalized Therapy Path'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Topics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {t.topics.map((item) => {
            const isSelected = item.id === selectedTopicId;
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTopicId(item.id)}
                className={`p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0885DE] text-white border-[#0885DE] shadow-xl ring-2 ring-[#0885DE]/50'
                    : 'bg-white text-[#1b3644] border-[#1b3644]/10 hover:bg-white hover:border-[#0885DE]/40 shadow-sm'
                }`}
              >
                <span className="text-2xl sm:text-3xl mb-2">{item.icon}</span>
                <span className="font-bold text-xs sm:text-sm font-['Plus_Jakarta_Sans',sans-serif]">
                  {item.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded Focus Detail Box */}
        <AnimatePresence mode="wait">
          {selectedTopic && (
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-8 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#1b3644]/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl p-2 rounded-2xl bg-[#0885DE]/10">{selectedTopic.icon}</span>
                  <div>
                    <h3 className="font-['Fraunces'] text-2xl font-normal text-[#1b3644]">
                      {selectedTopic.title}
                    </h3>
                    <p className="text-xs text-[#0885DE] font-semibold">
                      {lang === 'PL' ? 'Obszar Praktyki CBT' : 'CBT Practice Focus'}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#1b3644]/80 my-3 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
                  {selectedTopic.description}
                </p>

                <div className="p-3.5 rounded-xl bg-[#2FA875]/10 text-[#1b3644] text-xs sm:text-sm border border-[#2FA875]/25">
                  <strong className="text-[#2FA875]">
                    {lang === 'PL' ? 'Podejście CBT:' : 'CBT Approach:'}
                  </strong>{' '}
                  {selectedTopic.cbtApproach}
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-[#F2562C] hover:bg-[#d9441c] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95"
              >
                {lang === 'PL' ? 'Umów konsultację' : 'Book Consultation'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
