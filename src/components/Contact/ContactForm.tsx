import { Send } from 'lucide-react';
import { useContactForm } from './useContactForm';
import { FormField } from './FormField';

export const ContactForm = ({ t }: { t: (key: string) => string }) => {
  const { formData, handleChange, handleSubmit, status } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        type="text"
        id="name"
        name="name"
        label={t('contact.name')}
        value={formData.name}
        onChange={handleChange}
        disabled={status === 'sending'}
      />
      <FormField
        type="email"
        id="email"
        name="email"
        label={t('contact.email')}
        value={formData.email}
        onChange={handleChange}
        disabled={status === 'sending'}
      />
      <FormField
        type="textarea"
        id="message"
        name="message"
        label={t('contact.message')}
        value={formData.message}
        onChange={handleChange}
        disabled={status === 'sending'}
      />
      
      {status === 'success' && (
        <div className="p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-lg">
          {t('contact.success')}
        </div>
      )}
      
      {status === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 rounded-lg">
          {t('contact.error')}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full btn btn-primary flex items-center justify-center space-x-2 disabled:opacity-50"
      >
        <span>{status === 'sending' ? t('contact.sending') : t('contact.send')}</span>
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
};