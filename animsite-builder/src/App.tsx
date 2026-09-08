import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TherapySection } from './components/TherapySection';
import { AboutSection } from './components/AboutSection';
import { HowICanHelpSection } from './components/HowICanHelpSection';
import { CbtAssessment } from './components/CbtAssessment';
import { ProcessSection } from './components/ProcessSection';
import { BlogSection } from './components/BlogSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BlogModal } from './components/BlogModal';
import { BlogPost, Language } from './types';
import sandraPortraitImg from './assets/images/sandra_portrait_1786380455079.jpg';

export default function App() {
  const [lang, setLang] = useState<Language>('PL');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BlogPost | null>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'PL' ? 'EN' : 'PL'));
  };

  return (
    <div className="min-h-screen bg-[#FCF5F0] text-[#1b3644] font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#FF5938] selection:text-white transition-all">
      <Navbar
        lang={lang}
        onLanguageToggle={toggleLanguage}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main id="top">
        {/* Landing Hero */}
        <HeroSection
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
          portraitPath={sandraPortraitImg}
        />

        {/* Section 1: O Mnie (COLORFUL: Vibrant #0885DE Blue) */}
        <AboutSection lang={lang} portraitPath={sandraPortraitImg} />

        {/* Section 2: Terapia CBT (LIGHT: Clean #FCF5F0 Cream) */}
        <TherapySection lang={lang} />
        <CbtAssessment
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 3: Jak pracuję (COLORFUL: Rich #1b3644 Navy) */}
        <ProcessSection lang={lang} />
        <HowICanHelpSection
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 4: Blog (LIGHT: Clean #FCF5F0 Cream) */}
        <BlogSection
          lang={lang}
          onSelectArticle={(article) => setSelectedBlogArticle(article)}
        />

        {/* Section 5: Kontakt (COLORFUL: Vibrant #F2562C Coral) */}
        <CtaSection
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      <Footer lang={lang} onLanguageToggle={toggleLanguage} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
      />

      <BlogModal
        post={selectedBlogArticle}
        onClose={() => setSelectedBlogArticle(null)}
        lang={lang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </div>
  );
}
