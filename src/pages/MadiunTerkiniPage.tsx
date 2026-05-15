import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';
import { ArrowLeft, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';

type ServiceItem = {
  title: string;
  href: string;
  icon: string;
  isExternal: boolean;
  bg?: string;
};

export function MadiunTerkiniPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';

  const services: ServiceItem[] = [
    {
      title: t('madiunTerkini.agendaKota'),
      href: 'https://www.madiunkota.go.id/agenda_kota',
      icon: '/Lambang_Kota_Madiun.png',
      isExternal: true,
    },
    {
      title: t('madiunTerkini.beritaPemerintahan'),
      href: '/madiun-terkini/berita-pemerintahan',
      icon: '/Lambang_Kota_Madiun.png',
      isExternal: false,
    },
    {
      title: t('madiunTerkini.madiunToday'),
      href: 'https://madiuntoday.id/',
      icon: '/images/news/madiuntoday.png',
      isExternal: true,
    },
    {
      title: t('madiunTerkini.suaraMadiun'),
      href: 'https://93fm.madiunkota.go.id/',
      icon: '/images/news/suaramadiun.png',
      bg: 'bg-primary',
      isExternal: true,
    },
    {
      title: t('madiunTerkini.ruangSatu'),
      href: 'https://ruangsatu.id/',
      icon: '/images/news/ruangsatu.png',
      isExternal: true,
    },
    {
      title: t('madiunTerkini.rilis'),
      href: '/madiun-terkini/rilis',
      icon: '/Lambang_Kota_Madiun.png',
      isExternal: false,
    },
    {
      title: t('madiunTerkini.pengumuman'),
      href: '/madiun-terkini/pengumuman',
      icon: '/Lambang_Kota_Madiun.png',
      isExternal: false,
    },
    {
      title: t('madiunTerkini.lowongan'),
      href: '/madiun-terkini/lowongan',
      icon: '/Lambang_Kota_Madiun.png',
      isExternal: false,
    },
  ];

  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Apa saja informasi yang tersedia di halaman Madiun Terkini?',
        answer: 'Halaman Madiun Terkini menyediakan akses menuju informasi terbaru seperti agenda kota, berita pemerintahan, Madiun Today, Suara Madiun, rilis, pengumuman, dan lowongan.'
      },
      {
        question: 'Di mana saya bisa melihat agenda kegiatan Kota Madiun?',
        answer: 'Agenda kegiatan Kota Madiun dapat diakses melalui kartu Agenda Kota pada halaman Madiun Terkini yang mengarah ke kanal agenda resmi.'
      },
      {
        question: 'Di mana saya bisa melihat pengumuman resmi pemerintah kota?',
        answer: 'Pengumuman resmi dapat diakses melalui bagian Pengumuman pada halaman Madiun Terkini.'
      },
      {
        question: 'Bagaimana cara mengetahui rilis resmi Pemerintah Kota Madiun?',
        answer: 'Rilis resmi dapat dilihat melalui bagian Rilis pada halaman Madiun Terkini.'
      },
      {
        question: 'Apakah halaman ini juga menghubungkan ke media resmi lain?',
        answer: 'Ya, halaman ini juga menyediakan tautan ke kanal lain seperti Madiun Today dan Suara Madiun. Tautan eksternal tetap menggunakan URL asli agar dapat diakses dengan benar.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What information is available on the Madiun Terkini page?',
        answer: 'The Madiun Terkini page provides access to the latest information such as city agenda, government news, Madiun Today, Suara Madiun, releases, announcements, and job information.'
      },
      {
        question: 'Where can I view Madiun City events agenda?',
        answer: 'Madiun City events agenda can be accessed through the Agenda Kota card on the Madiun Terkini page.'
      },
      {
        question: 'Where can I find official city government announcements?',
        answer: 'Official announcements can be accessed through the Announcement section on the Madiun Terkini page.'
      },
      {
        question: 'How can I find official releases from the Madiun City Government?',
        answer: 'Official releases can be viewed through the Release section on the Madiun Terkini page.'
      },
      {
        question: 'Does this page also connect to other official media?',
        answer: 'Yes, this page provides links to other channels such as Madiun Today and Suara Madiun. External links keep their original URLs.'
      }
    ]
  }
};

  const seoText = {
    id: {
      title: 'Madiun Terkini',
      description:
        'Halaman Madiun Terkini berisi akses menuju agenda kota, berita pemerintahan, Madiun Today, Suara Madiun, Ruang Satu, rilis, pengumuman, dan lowongan.',
      keywords:
        'Madiun Terkini, berita Madiun, agenda Kota Madiun, Suara Madiun, Ruang Satu, pengumuman Madiun, lowongan Madiun',
    },
    en: {
      title: 'Madiun Latest Information',
      description:
        'Madiun Latest Information provides access to city agendas, government news, Madiun Today, Suara Madiun, Ruang Satu, releases, announcements, and job vacancies.',
      keywords:
        'Madiun latest information, Madiun news, Madiun city agenda, Suara Madiun, Ruang Satu, Madiun announcements, Madiun job vacancies',
    },
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
      <SEO
        title={seoText[lang].title}
        description={seoText[lang].description}
        keywords={seoText[lang].keywords}
        url="https://pemerintahan-kota-madiun.vercel.app/madiun-terkini"
        lang={lang}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: seoText[lang].title,
            description:
              lang === 'en'
                ? 'A collection page for the latest Madiun City information, including agendas, government news, media links, releases, announcements, and job vacancies.'
                : 'Halaman kumpulan informasi terbaru Kota Madiun, termasuk agenda, berita pemerintahan, tautan media, rilis, pengumuman, dan lowongan.',
            inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
            url: 'https://pemerintahan-kota-madiun.vercel.app/madiun-terkini',
            publisher: {
              '@type': 'GovernmentOrganization',
              name: 'Pemerintah Kota Madiun',
            },
            hasPart: [
              {
                '@type': 'WebPage',
                name: 'Agenda Kota',
                url: 'https://www.madiunkota.go.id/agenda_kota',
              },
              {
                '@type': 'WebPage',
                name: 'Berita Pemerintahan',
                url: 'https://pemerintahan-kota-madiun.vercel.app/madiun-terkini/berita-pemerintahan',
              },
              {
                '@type': 'WebPage',
                name: 'Madiun Today',
                url: 'https://madiuntoday.id/',
              },
              {
                '@type': 'WebPage',
                name: 'Suara Madiun',
                url: 'https://93fm.madiunkota.go.id/',
              },
              {
                '@type': 'WebPage',
                name: 'Ruang Satu',
                url: 'https://ruangsatu.id/',
              },
            ],
          },
          createFAQSchema(faqText[lang].items, lang),
        ]}
      />

      <div className="container mx-auto px-4 md:px-8 mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-semibold shadow hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={3} />
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="bg-[#0D3D1C] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <img
              src="/maskote_pendekar.png"
              alt=""
              className="w-full h-auto grayscale"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              {t('nav.latestNews')}
            </div>

            <h1 className="font-poppins text-4xl md:text-5xl font-black mb-4">
              {t('madiunTerkini.title')}
            </h1>

            <p className="text-white/80 text-lg">
              {t('madiunTerkini.subtitle')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const CardContent = () => (
              <>
                <div
                  className={`w-16 h-16 ${
                    service.bg || 'bg-green-50'
                  } rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <h2 className="font-poppins text-xl font-bold text-dark mb-6 group-hover:text-primary transition-colors flex-1">
                  {service.title}
                </h2>

                <div className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#166b30] text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 group-hover:scale-[1.02] mt-auto">
                  {service.isExternal ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  {t('madiunTerkini.access')}
                </div>
              </>
            );

            const cardClasses =
              'bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary group flex flex-col h-full';

            if (service.isExternal) {
              return (
                <motion.a
                  key={index}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={cardClasses}
                >
                  <CardContent />
                </motion.a>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className="h-full"
              >
                <Link to={service.href} className={cardClasses}>
                  <CardContent />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
      </div>
    </div>
  );
}