import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';
import type { Language, Translations } from '../types';

interface LanguageContextType {
  language: Language;
  t: <T = string>(key: string) => T;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = <T = string>(key: string): T => {
    const keys = key.split('.');
    let value: unknown = translations[language] as unknown as Translations;
    
    for (const k of keys) {
      value = (value as Record<string, unknown>)[k];
    }
    
    return (value ?? key) as T;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}