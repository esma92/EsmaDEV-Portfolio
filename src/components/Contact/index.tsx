import { useLanguage } from '../../contexts/LanguageContext';
import { ContactForm } from './ContactForm';
import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

export default function Contact() {
	const { t } = useLanguage();

	const formAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3
      }
    }
  };

	return (
		<section id="contact" className="relative min-h-[100vh] flex items-center py-16">
		{/* Content */}
		<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<AnimatedSection type="spring" duration={1.2}>
				<motion.div 
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ type: "spring", duration: 1, bounce: 0.3 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						{t('contact.title')}
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						{t('contact.description')}
					</p>
				</motion.div>
			</AnimatedSection>

			<motion.div 
				className="max-w-xl mx-auto"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={formAnimation}
			>
				<motion.div
					whileHover={{ scale: 1.02 }}
					transition={{ type: "spring", stiffness: 300 }}
        >
					<ContactForm t={t} />
				</motion.div>
			</motion.div>
		</div>
		</section>
	);
}