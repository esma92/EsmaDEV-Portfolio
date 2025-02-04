import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-200/50 dark:bg-gray-700/50">
      <div
        // className="h-full bg-gradient-to-r from-purple-600 to-red-600 shadow-lg shadow-blue-400/60 dark:from-purple-300 dark:to-red-300 dark:shadow-blue-400/60"
        className="h-full bg-gradient-to-r from-purple-600 to-red-600 shadow-lg shadow-blue-400/60 dark:from-purple-300 dark:to-red-300 dark:shadow-blue-400/60"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}