import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BlogCard } from './BlogCard';
import { getBlogPosts } from './blogPosts';
import { Code2, Sparkles, Zap } from 'lucide-react';
import type { BlogCategory } from '../../types';
import AnimatedSection from '../AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

export default function Blog() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');
  const blogPosts = getBlogPosts(t);

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const categories = [
    { id: 'development', icon: Code2, label: t('blog.categories.development') },
    { id: 'tips', icon: Sparkles, label: t('blog.categories.tips') },
    { id: 'performance', icon: Zap, label: t('blog.categories.performance') }
  ];

  const getCategoryButtonClass = (category: string) => {
    const baseClass = "flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200";
    const isActive = activeCategory === category;

    if (category === 'development') {
      return `${baseClass} ${isActive 
        ? 'bg-purple-600 text-white dark:bg-purple-500 dark:text-white' 
        : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50'}`;
    } else if (category === 'tips') {
      return `${baseClass} ${isActive 
        ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white' 
        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50'}`;
    } else {
      return `${baseClass} ${isActive 
        ? 'bg-pink-600 text-white dark:bg-pink-500 dark:text-white' 
        : 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-900/50'}`;
    }
  };

  return (
    <section id="blog" className="relative min-h-[100vh] flex items-center py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-20">
        {/* Header with animated gradient text */}
        <AnimatedSection>
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient dark:from-purple-400 dark:via-blue-400 dark:to-purple-400">
              {t('blog.title')}
            </h2> */}
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 scroll-mt-24">
              {t('blog.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('blog.description')}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === 'all'
                  ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-800'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </motion.button>
            {categories.map(({ id, icon: Icon, label }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(id as BlogCategory)}
                className={getCategoryButtonClass(id)}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Featured post - always show first post of filtered list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPosts.length > 0 && (
              <div className="mb-12">
                <BlogCard 
                  {...filteredPosts[0]}
                  featured={true}
                />
              </div>
            )}

            {/* Regular posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <AnimatedSection key={index} delay={index * 0.1}> {/** key={post.title} */}
                  <BlogCard {...post} />
                </AnimatedSection>
              ))}
            </div>

            {/* No results message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No posts found in this category.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}