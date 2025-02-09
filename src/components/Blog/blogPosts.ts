import { BlogPost } from '../../types';

export const getBlogPosts = (t: (key: string) => string): BlogPost[] => [
  {
    title: t('blog.posts.first.title'),
    description: t('blog.posts.first.description'),
    date: t('blog.posts.first.date'),
    readTime: t('blog.posts.first.readTime'),
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    link: '/blog/web-development-best-practices',
    category: 'development'
  },
  {
    title: t('blog.posts.second.title'),
    description: t('blog.posts.second.description'),
    date: t('blog.posts.second.date'),
    readTime: t('blog.posts.second.readTime'),
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    link: '/blog/modern-javascript-features',
    category: 'tips'
  },
  {
    title: t('blog.posts.third.title'),
    description: t('blog.posts.third.description'),
    date: t('blog.posts.third.date'),
    readTime: t('blog.posts.third.readTime'),
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    link: '/blog/react-performance-tips',
    category: 'performance'
  }
];