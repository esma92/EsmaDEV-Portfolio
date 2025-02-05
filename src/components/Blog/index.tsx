import { useLanguage } from '../../contexts/LanguageContext';
import { BlogCard } from './BlogCard';
import { getBlogPosts } from './blogPosts';
import { Code2, Sparkles, Zap } from 'lucide-react';

export default function Blog() {
  const { t } = useLanguage();
  const blogPosts = getBlogPosts(t);

  return (
    <section id="blog" className="relative min-h-[100vh] flex items-center py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        {/* Header with animated gradient text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('blog.title')}
          </h2>
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient dark:from-purple-400 dark:via-blue-400 dark:to-purple-400">
            {t('blog.title')}
          </h2> */}
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('blog.description')}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors">
            <Code2 className="h-4 w-4" />
            <span>Development</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
            <Sparkles className="h-4 w-4" />
            <span>Tips & Tricks</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors">
            <Zap className="h-4 w-4" />
            <span>Performance</span>
          </button>
        </div>
        
        {/* Featured post */}
        <div className="mb-12">
          <BlogCard 
            {...blogPosts[0]}
            featured={true}
          />
        </div>

        {/* Regular posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}