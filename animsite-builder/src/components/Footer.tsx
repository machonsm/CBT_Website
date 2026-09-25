import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { LogoMark } from './Shapes';

interface FooterProps {
  lang: Language;
  onLanguageToggle: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageToggle }) => {
  const t = translations[lang].footer;

  return (
    <footer className="bg-[#1b3644] text-white pt-16 pb-8 border-t border-white/10 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <LogoMark className="w-10 h-7" />
              <span className="font-bold text-lg">Terapia CBT Online</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed max-w-xs">
              {t.brandDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#FDBF2E]">{t.quickLinks}</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  O mnie / About
                </a>
              </li>
              <li>
                <a href="#therapy" className="hover:text-white transition-colors">
                  Terapia CBT
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Jak pracuję / Process
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#FDBF2E]">{t.contact}</h4>
            <div className="flex flex-col gap-2 text-xs text-white/80">
              <a
                href="mailto:sandramachon.cbt@gmail.com"
                className="hover:text-[#FF5938] transition-colors underline"
              >
                sandramachon.cbt@gmail.com
              </a>
              <p>{t.onlineNote}</p>
            </div>
          </div>

          {/* Language Switcher */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#FDBF2E]">{t.language}</h4>
            <button
              onClick={onLanguageToggle}
              className="px-4 py-2 rounded-full border border-white/30 hover:border-white text-xs font-bold text-white transition-all bg-white/10 hover:bg-white/20 cursor-pointer"
            >
              🌐 {lang === 'PL' ? 'Język: Polski (Switch to EN)' : 'Language: English (Zmień na PL)'}
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>{t.copyright}</div>
          <div>{t.legal}</div>
        </div>
      </div>
    </footer>
  );
};
