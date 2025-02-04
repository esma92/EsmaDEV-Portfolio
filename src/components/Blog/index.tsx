import { useLanguage } from '../../contexts/LanguageContext';
import { BlogCard } from './BlogCard';
import { getBlogPosts } from './blogPosts';

export default function Blog() {
  const { t } = useLanguage();
  const blogPosts = getBlogPosts(t);

  return (
    <section id="blog" className="relative min-h-[100vh] flex items-center py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('blog.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}