import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { CompositionAbout } from './Shapes';

interface AboutSectionProps {
  lang: Language;
  portraitPath: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, portraitPath }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="relative bg-[#0885DE] text-white py-16 sm:py-24 overflow-hidden scroll-mt-20">
      {/* Background shape artwork */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <CompositionAbout className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Sandra's Featured Portrait Picture */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Decorative background glow & accent ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F2562C] to-[#FDBF2E] rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
              
              {/* Main Portrait Frame */}
              <div className="relative bg-[#FCF5F0] rounded-3xl p-3 shadow-2xl border-2 border-white/80 overflow-hidden">
                <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-[#2FA875]/10">
                  <img
                    src={portraitPath}
                    alt="Sandra Machoń - Psychoterapeuta CBT"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1b3644]/80 via-[#1b3644]/30 to-transparent flex items-end p-4">
                    <div>
                      <p className="text-white font-bold text-lg font-['Plus_Jakarta_Sans',sans-serif]">
                        Sandra Machoń
                      </p>
                      <p className="text-white/80 text-xs font-medium">
                        Psychoterapeuta CBT / Psycholog
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 right-4 bg-white text-[#1b3644] px-4 py-2 rounded-2xl shadow-xl border border-[#0885DE]/20 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2FA875] animate-pulse" />
                <span className="text-xs font-bold font-['Plus_Jakarta_Sans',sans-serif]">
                  Praktyka Online PL / UK
                </span>
              </div>
            </div>

            {/* Academic Credentials Badges */}
            <div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                🎓 University of Roehampton
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                🧠 King's College London (MSc)
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F2562C] text-xs font-bold text-white shadow-md">
                🇵🇱 🇬🇧 PL / EN
              </span>
            </div>
          </motion.div>

          {/* Column 2: About Me Description & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">
                O Mnie & Podejście
              </span>
              <h2 className="font-['Fraunces'] text-3xl sm:text-5xl font-normal text-white leading-tight">
                {t.title}
              </h2>
              <p className="font-['Fraunces'] text-xl sm:text-2xl text-[#FDBF2E] italic mt-1">
                {t.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base leading-relaxed text-white/95 font-['Plus_Jakarta_Sans',sans-serif] bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-lg">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
              <p>{t.paragraph3}</p>
            </div>
          </motion.div>
        </div>

        {/* Core Values 3 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/20"
        >
          {t.values.map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all shadow-sm"
            >
              <span className="text-3xl text-[#FDBF2E] bg-white/10 p-2.5 rounded-xl">{val.symbol}</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 font-['Plus_Jakarta_Sans',sans-serif] text-white">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
                  {val.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
