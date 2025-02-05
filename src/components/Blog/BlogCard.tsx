import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
}

export function BlogCard({ 
  title, 
  description, 
  date, 
  readTime, 
  imageUrl, 
  link,
  featured = false 
}: BlogCardProps) {
  return (
    <article 
      className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
        transition-all duration-300 hover:shadow-2xl
        ${featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''}`}
    >
      {/* Image container with overlay */}
      <div className={`relative overflow-hidden ${featured ? 'h-full min-h-[300px]' : 'h-48'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Category tag */}
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          Development
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readTime}
          </span>
        </div>

        {/* Title and description */}
        <h3 className={`font-bold text-gray-900 dark:text-white mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Read more link */}
        <a 
          href={link}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}