import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { BlogPost, Language } from '../types';
import { BlogShape1, BlogShape2, BlogShape3 } from './Shapes';

interface BlogSectionProps {
  lang: Language;
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  lang,
  onSelectArticle,
}) => {
  const t = translations[lang].blog;

  const renderShape = (type: string) => {
    switch (type) {
      case 'therapy':
        return <BlogShape1 className="w-full h-full object-cover" />;
      case 'about':
        return <BlogShape2 className="w-full h-full object-cover" />;
      case 'cta':
      default:
        return <BlogShape3 className="w-full h-full object-cover" />;
    }
  };

  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#FCF5F0] border-t border-[#1b3644]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#0885DE]/10 text-[#0885DE] text-xs font-bold uppercase tracking-wider mb-2">
              {lang === 'PL' ? 'Wiedza & Artykuły' : 'Knowledge & Articles'}
            </span>
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b3644]">
              {t.title}
            </h2>
          </div>

          <a
            href="#blog"
            className="text-xs sm:text-sm font-bold text-[#F2562C] hover:text-[#0885DE] transition-colors"
          >
            {t.viewAll}
          </a>
        </div>

        {/* 3 Grid Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#1b3644]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="w-full h-48 relative overflow-hidden bg-[#0885DE]/10">
                {renderShape(post.shapeType)}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0885DE] shadow-sm">
                  {post.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <div className="text-xs text-[#1b3644]/60 font-medium mb-2 flex items-center gap-1">
                    <span>⏱</span> <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-['Fraunces'] text-xl font-normal text-[#1b3644] mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1b3644]/80 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif] line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => onSelectArticle(post)}
                  className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-[#F2562C] hover:text-[#0885DE] transition-colors group cursor-pointer pt-2"
                >
                  <span>{t.readMore}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
