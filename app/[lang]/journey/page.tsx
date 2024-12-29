'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { FaArrowLeft, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useParams } from 'next/navigation';

export default function Journey() {
  const params = useParams();
  const { t } = useLanguage();

  const education = [
    {
      school: t('education.masters.school'),
      department: t('education.masters.department'),
      degree: t('education.masters.degree'),
      period: t('education.masters.period')
    },
    {
      school: t('education.bachelors.school'),
      department: t('education.bachelors.department'),
      degree: t('education.bachelors.degree'),
      period: t('education.bachelors.period')
    }
  ];

  const experience = [
    {
      company: "Fair Teknoloji A.Ş.",
      position: "Frontend Developer",
      period: "Haziran 2024 - Present",
      description: t('journey.fair.description'),
      location: "Istanbul, Türkiye · Hybrid",
      projects: [
        {
          name: "Adilpazar",
          period: "Ekim 2024 - Present",
          tech: "Typescript, Nuxt 3, Pinia, Vuetify, Axios, Nuxt/sitemap, yarn",
          description: "Frontend developer olarak Adilpazar projesinde, Typescript ve Nuxt 3 kullanarak responsive web ve mobil ekranlar geliştirdim. Sorumluluklarım arasında Pinia, Vuetify, Axios, Nuxt/sitemap ve yarn gibi teknolojileri kullanmak yer almaktadır."
        },
        {
          name: "Aydınlı Group - Portal",
          period: "Mart 2023 - Aralık 2024",
          tech: "Typescript, Vue2, Vuex, Vuetify 2, Axios, npm",
          description: "Frontend developer olarak Aydınlı Group projesinde, Typescript ve Vue2 kullanarak responsive web ve mobil ekranlar geliştirdim. Sorumluluklarım arasında Vuex, Vuetify 2, Axios ve npm gibi teknolojileri kullanmak yer almaktadır."
        },
        {
          name: "Aydınlı Group - Digital HR",
          period: "Nisan 2024 - Aralık 2024",
          tech: "Typescript, Nuxt 3, Pinia, PrimeVue, Scss, npm",
          description: "Frontend developer olarak Aydınlı Group projesinde, Typescript ve Nuxt 3 kullanarak responsive web ve mobil ekranlar geliştirdim. Sorumluluklarım arasında Pinia, PrimeVue, Scss ve npm gibi teknolojileri kullanmak yer almaktadır."
        }
      ]
    },
    {
      company: "Intime Info Yazılım Çözümleri A.Ş.",
      position: "Frontend Developer",
      period: "Ekim 2022 - Mayıs 2024",
      description: t('journey.intime.description'),
      location: "Maltepe, Istanbul, Turkey · Hybrid",
      projects: [
        {
          name: "PMP - Process Management Platform",
          period: "Ekim 2022 - Ocak 2023",
          tech: "Typescript, Vue3, Pinia, Vuetify 3, Axios, i18n, yarn",
          description: "PMP projesinde frontend developer olarak, Typescript ve Vue3 kullanarak çeşitli modüller geliştirme fırsatı buldum. Bu teknolojiler, projenin gereksinimlerini karşılayan kullanıcı dostu ve verimli bir arayüz oluşturmamı sağladı."
        },
        {
          name: "Fresh World",
          period: "Ocak 2023 - Mart 2023",
          tech: "Typescript, Nuxt, Pinia, TailwindCss, i18n, yarn",
          description: "Fresh World'de frontend developer olarak, Typescript, Nuxt, Pinia, TailwindCss, i18n ve yarn gibi çeşitli teknolojileri kullanma fırsatı buldum. Sorumluluklarım web ve mobil responsive ekranlar geliştirmeyi içeriyordu."
        },
        {
          name: "Aydınlı Group - Portal",
          period: "Mart 2023 - Mayıs 2024",
          tech: "Typescript, Vue2, Vuex, Vuetify 2, Axios, npm",
          description: "Frontend developer olarak Aydınlı Group projesinde, Typescript ve Vue2 kullanarak responsive web ve mobil ekranlar geliştirdim. Sorumluluklarım arasında Vuex, Vuetify 2, Axios ve npm gibi teknolojileri kullanmak yer almaktadır."
        },
        {
          name: "Aydınlı Group - Digital HR",
          period: "Nisan 2024 - Mayıs 2024",
          tech: "Typescript, Nuxt 3, Pinia, PrimeVue, Scss, npm",
          description: "Frontend developer olarak Aydınlı Group projesinde, Typescript ve Nuxt 3 kullanarak responsive web ve mobil ekranlar geliştirdim. Sorumluluklarım arasında Pinia, PrimeVue, Scss ve npm gibi teknolojileri kullanmak yer almaktadır."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col min-h-[80vh] relative">
        <Link 
          href={`/${params.lang}`}
          className="flex items-center gap-2 text-primary hover:text-primary-focus transition-colors duration-200 mb-8"
        >
          <FaArrowLeft /> {t('back')}
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          {t('journey.title')}
        </h1>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaGraduationCap />
            {t('journey.education')}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-secondary">{edu.department} - {edu.degree}</p>
                <p className="text-sm text-secondary">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaBriefcase />
            {t('journey.experience')}
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-12">
              <div className="border-l-4 border-primary pl-4 py-2 mb-4">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-secondary">{exp.position}</p>
                <p className="text-sm text-secondary">{exp.period}</p>
                <p className="text-sm text-secondary">{exp.location}</p>
                {exp.description && (
                  <p className="text-sm text-secondary mt-2">{exp.description}</p>
                )}
              </div>
              <div className="ml-8 space-y-6">
                {exp.projects.map((project, pIndex) => (
                  <div key={pIndex} className="border-l-2 border-secondary pl-4 py-2">
                    <h4 className="font-semibold text-lg">{project.name}</h4>
                    <p className="text-sm text-secondary">{project.period}</p>
                    <p className="text-sm text-secondary mt-1">{project.tech}</p>
                    <p className="text-sm text-secondary mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
} 