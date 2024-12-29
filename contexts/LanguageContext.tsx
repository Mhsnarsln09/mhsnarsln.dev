'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/locales/translations';
import Cookies from 'js-cookie';

type Language = 'tr' | 'en';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  useEffect(() => {
    const savedLanguage = Cookies.get('NEXT_LOCALE') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLanguage);
    Cookies.set('NEXT_LOCALE', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    Cookies.set('NEXT_LOCALE', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 