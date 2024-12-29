'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Journey() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          {t('journey.title')}
        </h1>
        <div className="max-w-3xl">
          <p className="text-xl text-secondary mb-6">
            {t('journey.description')}
          </p>
        </div>
      </div>
    </div>
  );
} 