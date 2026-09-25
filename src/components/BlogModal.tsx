import React from 'react';
import { motion } from 'motion/react';
import { BlogPost, Language } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  lang: Language;
  onOpenBooking: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  lang,
  onOpenBooking,
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FCF5F0] w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#1b3644]/10 relative my-8 max-h-[85vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-[#1b3644]/60 hover:text-[#1b3644] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1b3644]/10 transition-colors"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#FF5938] uppercase tracking-wider mb-2">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="font-['Fraunces'] text-2xl sm:text-3xl font-normal text-[#1b3644] mb-6 leading-tight">
          {post.title}
        </h2>

        {/* Content Paragraphs */}
        <div className="flex flex-col gap-4 text-sm sm:text-base text-[#1b3644]/90 font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed mb-8">
          {post.fullContent.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="p-5 rounded-2xl bg-[#2FA875]/15 border border-[#2FA875]/30 mb-8">
          <h4 className="font-bold text-sm text-[#1b3644] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
            💡 {lang === 'PL' ? 'Kluczowe wnioski CBT:' : 'Key CBT Takeaways:'}
          </h4>
          <ul className="list-disc list-inside text-xs sm:text-sm text-[#1b3644]/90 flex flex-col gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1b3644]/10">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F2562C] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#F2562C]/90 transition-all cursor-pointer"
          >
            {lang === 'PL' ? 'Umów konsultację na ten temat' : 'Book Consultation on This Topic'}
          </button>

          <button
            onClick={onClose}
            className="text-xs font-bold text-[#1b3644]/60 hover:text-[#1b3644]"
          >
            {lang === 'PL' ? 'Zamknij artykuł' : 'Close Article'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
