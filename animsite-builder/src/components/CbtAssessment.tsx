import React, { useState } from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface CbtAssessmentProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const CbtAssessment: React.FC<CbtAssessmentProps> = ({
  lang,
  onOpenBooking,
}) => {
  const t = translations[lang].assessment;
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#FCF5F0] border-t border-b border-[#1b3644]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#1b3644]/15 relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0885DE] bg-[#0885DE]/10 px-3.5 py-1.5 rounded-full inline-block mb-2">
              {t.title}
            </span>
            <h3 className="font-['Fraunces'] text-2xl sm:text-3xl font-normal text-[#1b3644]">
              {t.question}
            </h3>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {t.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOpt(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left text-xs sm:text-sm transition-all cursor-pointer border ${
                  selectedOpt === idx
                    ? 'bg-[#0885DE] text-white border-[#0885DE] shadow-md ring-2 ring-[#0885DE]/40'
                    : 'bg-[#FCF5F0]/60 text-[#1b3644] border-[#1b3644]/10 hover:bg-[#FCF5F0] hover:border-[#0885DE]/30'
                }`}
              >
                <div className="font-semibold flex items-center justify-between">
                  <span>{opt}</span>
                  {selectedOpt === idx && <span>✓</span>}
                </div>
              </button>
            ))}
          </div>

          {/* Result / Recommendation */}
          {selectedOpt !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-[#2FA875]/10 border border-[#2FA875]/30 text-[#1b3644] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
            >
              <div>
                <h4 className="font-bold text-sm sm:text-base mb-1 text-[#2FA875]">
                  {t.recommendationTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#1b3644]/85 leading-relaxed">
                  {t.recommendationText}
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#F2562C] hover:bg-[#d9441c] text-white text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95"
              >
                {t.actionButton}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
