import { useState } from 'react';
import { Moon, Sun, Languages, Code, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const navItems = ['about', 'projects', 'blog', 'contact'];

  const resetAnimations = () => {
    document.body.style.display = 'none';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    document.body.offsetHeight; // Force reflow
    document.body.style.display = '';
  };

  const scrollToTop = () => {
    resetAnimations();
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      resetAnimations();      
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const getNavItemClasses = (item: string) => {
    return `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      activeSection === item
        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
    }`;
  };

  // const getNavLabel = (item: string) => {
  //   if (item === 'hero') return t('nav.home');
  //   return t(`nav.${item}`);
  // };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            onClick={scrollToTop}
            className="flex-shrink-0 flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Code className="h-6 w-6 text-gray-900 dark:text-white" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">EsmaDev</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={getNavItemClasses(item)}
                  // className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {/* {getNavLabel(item)} */}
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}
              className="p-2 rounded-lg"
            >
              {/* <Languages className="h-5 w-5 text-gray-700 dark:text-gray-300" /> */}
              {language === 'en' ? (
                <div className='flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'>
                  <Languages className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  EN 
                </div>
              ) : (
                <div className='flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'>
                  <Languages className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  ES
                </div>
              )}
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg"
            >
              {theme === 'dark' ? (
                <div className='flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'>
                  <Sun className="h-5 w-5 text-gray-300" />
                </div>
              ) : (
                <div className='flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'>
                  <Moon className="h-5 w-5 text-gray-700" />
                </div>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {isMenuOpen ? (
                <div className='flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'>
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
                
              ) : (
                <div className='flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'>
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-3 shadow-lg">
          <div className="px-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left ${getNavItemClasses(item)}`}
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}