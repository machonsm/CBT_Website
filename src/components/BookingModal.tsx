import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../data/translations';
import { BookingFormData, Language } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = translations[lang].bookingModal;

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    sessionType: 'consultation',
    preferredLanguage: lang,
    preferredDate: '',
    preferredTime: 'morning',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#FCF5F0] w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#1b3644]/10 relative my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-2xl text-[#1b3644]/60 hover:text-[#1b3644] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1b3644]/10 transition-colors"
          >
            ✕
          </button>

          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <h3 className="font-['Fraunces'] text-2xl sm:text-3xl font-normal text-[#1b3644] mb-1">
                  {t.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1b3644]/70 font-['Plus_Jakarta_Sans',sans-serif]">
                  {t.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm">
                {/* Name */}
                <div>
                  <label className="block font-bold text-[#1b3644] mb-1">{t.nameLabel} *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="np. Anna Kowalska"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1b3644]/20 text-[#1b3644] focus:outline-none focus:ring-2 focus:ring-[#1b3644]"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1b3644] mb-1">{t.emailLabel} *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anna@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1b3644]/20 text-[#1b3644] focus:outline-none focus:ring-2 focus:ring-[#1b3644]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1b3644] mb-1">{t.phoneLabel}</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+48 123 456 789"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1b3644]/20 text-[#1b3644] focus:outline-none focus:ring-2 focus:ring-[#1b3644]"
                    />
                  </div>
                </div>

                {/* Session Type */}
                <div>
                  <label className="block font-bold text-[#1b3644] mb-1">{t.typeLabel}</label>
                  <select
                    value={formData.sessionType}
                    onChange={(e) => setFormData({ ...formData, sessionType: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1b3644]/20 text-[#1b3644] focus:outline-none focus:ring-2 focus:ring-[#1b3644]"
                  >
                    <option value="consultation">{t.typeOptions.consultation}</option>
                    <option value="cbt_session">{t.typeOptions.cbt_session}</option>
                    <option value="expat_session">{t.typeOptions.expat_session}</option>
                  </select>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1b3644] mb-1">{t.dateLabel}</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1b3644]/20 text-[#1b3644] focus:outline-none focus:ring-2 focus:ring-[#1b3644]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1b3644] mb-1">{t.timeLabel}</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1b3644]/20 text-[#1b3644] focus:outline-none focus:ring-2 focus:ring-[#1b3644]"
                    >
                      <option value="morning">{t.timeOptions.morning}</option>
                      <option value="afternoon">{t.timeOptions.afternoon}</option>
                      <option value="evening">{t.timeOptions.evening}</option>
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block font-bold text-[#1b3644] mb-1">{t.messageLabel}</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'PL' ? 'Krótko opisz z czym przychodzisz...' : 'Briefly describe what you would like to work on...'}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1b3644]/20 text-[#1b3644] focus:outline-none focus:ring-2 focus:ring-[#1b3644]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 rounded-full bg-[#F2562C] hover:bg-[#F2562C]/90 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  {t.submitButton}
                </button>
              </form>
            </>
          ) : (
            <div className="py-8 text-center flex flex-col items-center gap-4 font-['Plus_Jakarta_Sans',sans-serif]">
              <div className="w-16 h-16 rounded-full bg-[#2FA875] text-white text-3xl flex items-center justify-center">
                ✓
              </div>
              <h3 className="font-['Fraunces'] text-2xl font-normal text-[#1b3644]">
                {t.successTitle}
              </h3>
              <p className="text-sm text-[#1b3644]/80 max-w-sm">
                {t.successText}
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#F2562C] hover:bg-[#F2562C]/90 text-white font-bold text-xs cursor-pointer"
              >
                {t.closeButton}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
