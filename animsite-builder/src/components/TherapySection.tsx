import React, { useState } from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { CompositionTherapy } from './Shapes';

interface TherapySectionProps {
  lang: Language;
}

const sampleScenarios = {
  PL: [
    {
      label: 'Perfekcjonizm w pracy',
      thought: 'Jeśli popełnię choćby jeden błąd, wszyscy pomyślą, że jestem niekompetentny/a.',
      reframe: 'Błędy są naturalną częścią nauki. Daję z siebie wystarczająco dużo.',
      emotion: 'Lęk i napięcie (9/10)',
      reframeEmotion: 'Spokój i akceptacja (3/10)',
      behavior: 'Ciągłe sprawdzanie pliku, odkładanie wysłania do nocy.',
      reframeBehavior: 'Wysłanie raportu na czas i zrobienie przerwy na spacer.',
      body: 'Napięcie karku, szybkie bicie serca.',
      reframeBody: 'Rozluźnienie barków, wolniejszy oddech.',
    },
    {
      label: 'Lęk w sytuacjach społecznych',
      thought: 'Nikt w grupie mnie nie lubi, na pewno powiem coś głupiego.',
      reframe: 'Ludzie są skupieni głównie na sobie. Mogę po prostu być sobą.',
      emotion: 'Wstyd i niepokój (8/10)',
      reframeEmotion: 'Ciekawość i luz (3/10)',
      behavior: 'Ciche siedzenie w kącie, szybka ucieczka do domu.',
      reframeBehavior: 'Zadanie jednego pytania i zabranie głosu w dyskusji.',
      body: 'Płonięcie twarzy, ścisk w żołądku.',
      reframeBody: 'Ciepło i normalny rytm serca.',
    },
  ],
  EN: [
    {
      label: 'Workplace Perfectionism',
      thought: 'If I make even one mistake, everyone will think I am incompetent.',
      reframe: 'Mistakes are a normal part of growth. Doing my best is enough.',
      emotion: 'Anxiety and panic (9/10)',
      reframeEmotion: 'Calmness and acceptance (3/10)',
      behavior: 'Endless re-checking, delaying submission until late at night.',
      reframeBehavior: 'Submitting the report on time and taking a relaxing walk.',
      body: 'Muscle tightness, elevated heart rate.',
      reframeBody: 'Relaxed shoulders, steady breathing.',
    },
    {
      label: 'Social Situation Worry',
      thought: 'Nobody in the room likes me, I will definitely say something awkward.',
      reframe: 'Most people are focused on themselves. I can just be authentic.',
      emotion: 'Shame and nervousness (8/10)',
      reframeEmotion: 'Curiosity and ease (3/10)',
      behavior: 'Staying silent, leaving early.',
      reframeBehavior: 'Asking a question and engaging in conversation.',
      body: 'Flushed face, knot in stomach.',
      reframeBody: 'Normal heart rate and muscle relaxation.',
    },
  ],
};

export const TherapySection: React.FC<TherapySectionProps> = ({ lang }) => {
  const t = translations[lang].therapy;
  const scenarios = sampleScenarios[lang];
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [isReframed, setIsReframed] = useState(false);

  const scenario = scenarios[activeScenarioIdx];

  return (
    <section id="therapy" className="py-16 sm:py-24 bg-[#FCF5F0] border-t border-[#1b3644]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#1b3644]/10 text-[#1b3644] text-xs font-bold uppercase tracking-wider w-fit">
              {t.badge}
            </div>

            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b3644] leading-tight">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-[#1b3644]/85 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
              {t.paragraph1}
            </p>

            <p className="text-base sm:text-lg text-[#1b3644]/85 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
              {t.paragraph2}
            </p>

            <a
              href="#process"
              className="inline-flex items-center gap-2 font-bold text-[#FF5938] hover:text-[#1b3644] transition-colors text-base group mt-2"
            >
              <span>{t.learnMore}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          {/* Right Section Art & Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[6/5] rounded-3xl overflow-hidden shadow-xl border border-[#1b3644]/10"
          >
            <CompositionTherapy className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Interactive CBT Cognitive Triangle Demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#1b3644]/10 shadow-lg"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-['Fraunces'] text-2xl sm:text-3xl font-normal text-[#1b3644] mb-2">
              {t.interactiveSimTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#1b3644]/70">
              {t.interactiveSimSubtitle}
            </p>
          </div>

          {/* Scenario Selector & Toggle */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
            {scenarios.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveScenarioIdx(idx);
                  setIsReframed(false);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeScenarioIdx === idx
                    ? 'bg-[#F2562C] text-white shadow-md'
                    : 'bg-[#FCF5F0] text-[#1b3644] hover:bg-[#1b3644]/10'
                }`}
              >
                {sc.label}
              </button>
            ))}

            <button
              onClick={() => setIsReframed(!isReframed)}
              className={`ml-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer ${
                isReframed
                  ? 'bg-[#2FA875] text-white ring-2 ring-[#2FA875]'
                  : 'bg-[#F2562C] text-white hover:bg-[#F2562C]/90'
              }`}
            >
              {isReframed
                ? (lang === 'PL' ? '✓ Zastosowano perspektywę CBT' : '✓ Applied CBT Perspective')
                : (lang === 'PL' ? '⚡ Kliknij: Zmień perspektywę (CBT)' : '⚡ Click: Shift Perspective (CBT)')}
            </button>
          </div>

          {/* Connected Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Thought Card */}
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                isReframed
                  ? 'bg-[#2FA875]/10 border-[#2FA875]/40 text-[#1b3644]'
                  : 'bg-[#FF5938]/10 border-[#FF5938]/30 text-[#1b3644]'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-2 text-[#1b3644]/60">
                💭 {t.thoughtLabel.split('(')[0]}
              </div>
              <p className="font-semibold text-base sm:text-lg italic font-['Fraunces'] min-h-[60px]">
                "{isReframed ? scenario.reframe : scenario.thought}"
              </p>
            </div>

            {/* Emotion & Body Card */}
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                isReframed
                  ? 'bg-[#2FA875]/10 border-[#2FA875]/40 text-[#1b3644]'
                  : 'bg-[#F39AC5]/20 border-[#F39AC5]/40 text-[#1b3644]'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-2 text-[#1b3644]/60">
                ❤️ {t.emotionLabel.split('(')[0]}
              </div>
              <p className="font-semibold text-base sm:text-lg mb-2">
                {isReframed ? scenario.reframeEmotion : scenario.emotion}
              </p>
              <div className="text-xs text-[#1b3644]/70 pt-2 border-t border-[#1b3644]/10">
                <strong>Ciało:</strong> {isReframed ? scenario.reframeBody : scenario.body}
              </div>
            </div>

            {/* Behavior Card */}
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                isReframed
                  ? 'bg-[#2FA875]/10 border-[#2FA875]/40 text-[#1b3644]'
                  : 'bg-[#2D75C8]/10 border-[#2D75C8]/30 text-[#1b3644]'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-2 text-[#1b3644]/60">
                🎬 {t.behaviorLabel.split('(')[0]}
              </div>
              <p className="font-semibold text-base sm:text-lg min-h-[60px]">
                {isReframed ? scenario.reframeBehavior : scenario.behavior}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
