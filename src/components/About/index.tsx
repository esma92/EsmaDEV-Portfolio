import { useLanguage } from '../../contexts/LanguageContext';
import { SkillCard } from './SkillCard';
import { getSkillsets } from './skillsets';

export default function About() {
  const { t } = useLanguage();
  const skillsets = getSkillsets(t);

  return (
    <section id="about" className="relative min-h-[100vh] flex items-center py-20">      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsets.map((skillset, index) => (
            <SkillCard key={index} {...skillset} />
          ))}
        </div>
      </div>
    </section>
  );
}