import { useLanguage } from '../../contexts/LanguageContext';
import { ContactForm } from './ContactForm';

export default function Contact() {
	const { t } = useLanguage();

	return (
		<section id="contact" className="relative min-h-[100vh] flex items-center py-16">
		{/* Content */}
		<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
					{t('contact.title')}
				</h2>
				<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					{t('contact.description')}
				</p>
			</div>

			<div className="max-w-xl mx-auto">
				<ContactForm t={t} />
			</div>
		</div>
		</section>
	);
}