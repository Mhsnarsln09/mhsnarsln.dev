'use client';

import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Home() {
  const params = useParams()
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('greeting')} <span className="text-primary">Muhsin ARSLAN</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-8">
          {t('role')}
        </p>
        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/Mhsnarsln09"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/mhsnarsln"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
        <Link 
          href={`/${params.lang}/journey`}
          className="btn btn-primary px-8 py-3 flex items-center gap-2 hover:gap-4 transition-all duration-300 group"
        >
          {t('explore')} <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )
} 