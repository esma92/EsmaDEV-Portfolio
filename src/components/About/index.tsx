import { useLanguage } from '../../contexts/LanguageContext';
import { SkillCard } from './SkillCard';
import { getSkillsets } from './skillsets';
import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();
  const skillsets = getSkillsets(t);

  return (
    <section id="about" className="relative min-h-[100vh] flex items-center py-20">      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <AnimatedSection type="spring" duration={1.2}>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 1, bounce: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {t('about.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              {t('about.description')}
            </motion.p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsets.map((skillset, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.15} 
              direction={index % 2 === 0 ? 'left' : 'right'}
              type="spring"
              duration={1}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <SkillCard key={index} {...skillset} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}