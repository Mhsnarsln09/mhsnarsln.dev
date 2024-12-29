'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import { BsTranslate } from 'react-icons/bs';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TR, GB } from 'country-flag-icons/react/3x2';

export function ThemeAndLanguageButtons() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLanguageChange = (newLang: 'tr' | 'en') => {
    setLanguage(newLang);
    setIsOpen(false);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(tr|en)/, '');
    router.push(`/${newLang}${newPath}`);
  };

  return (
    <div className="fixed top-4 right-4 flex gap-4 z-50">
      <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
        {theme === 'light' ? <FaMoon className="text-2xl" /> : <FaSun className="text-2xl" />}
      </button>
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="btn btn-ghost btn-circle"
        >
          <BsTranslate className="text-2xl" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <button
                onClick={() => handleLanguageChange('tr')}
                className={`block w-full px-4 py-2 text-sm hover:bg-base-200 ${language === 'tr' ? 'bg-base-300' : ''} flex items-center gap-2`}
              >
                <TR className="w-5 h-5 rounded-sm" />
                Türkçe
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`block w-full px-4 py-2 text-sm hover:bg-base-200 ${language === 'en' ? 'bg-base-300' : ''} flex items-center gap-2`}
              >
                <GB className="w-5 h-5 rounded-sm" />
                English
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 