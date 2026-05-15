import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';
import { GraduationCap, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
export function LayananPendidikanPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';
  const services = [{
    title: t('layanan.pendidikan.besmart.title'),
    desc: t('layanan.pendidikan.besmart.desc'),
    href: 'https://beasiswa.madiunkota.go.id/',
    icon: GraduationCap
  }];
  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Informasi pendidikan apa yang tersedia di halaman ini?',
        answer: 'Halaman Layanan Pendidikan menyediakan informasi awal terkait layanan pendidikan, sekolah, dan akses informasi pendidikan di Kota Madiun.'
      },
      {
        question: 'Bagaimana cara mencari informasi sekolah di Kota Madiun?',
        answer: 'Informasi sekolah dapat diakses melalui kanal resmi pemerintah, perangkat daerah pendidikan, atau tautan layanan pendidikan yang tersedia.'
      },
      {
        question: 'Apakah halaman ini menyediakan informasi pendaftaran sekolah?',
        answer: 'Halaman ini dapat digunakan sebagai penghubung informasi. Untuk ketentuan pendaftaran sekolah, pengguna perlu mengikuti informasi resmi dari instansi pendidikan terkait.'
      },
      {
        question: 'Di mana masyarakat bisa mendapatkan informasi kebijakan pendidikan?',
        answer: 'Informasi kebijakan pendidikan dapat dilihat melalui kanal resmi pemerintah kota atau perangkat daerah yang menangani urusan pendidikan.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What education information is available on this page?',
        answer: 'The Education Services page provides initial information about education services, schools, and access to education information in Madiun City.'
      },
      {
        question: 'How can users find school information in Madiun City?',
        answer: 'School information can be accessed through official government channels, the education office, or available education service links.'
      },
      {
        question: 'Does this page provide school registration information?',
        answer: 'This page can be used as an information connector. For school registration requirements, users should follow official information from the related education institution.'
      },
      {
        question: 'Where can citizens find education policy information?',
        answer: 'Education policy information can be found through official city government channels or the local office responsible for education affairs.'
      }
    ]
  }
};
  return <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
    <SEO
      title={
        lang === 'en'
          ? 'Madiun City Education Services'
          : 'Layanan Pendidikan Kota Madiun'
      }
      description={
        lang === 'en'
          ? 'Education service information in Madiun City, including school information, student services, PPDB, and education-related public services.'
          : 'Informasi layanan pendidikan Kota Madiun, meliputi informasi sekolah, layanan siswa, PPDB, dan layanan publik bidang pendidikan.'
      }
      keywords={
        lang === 'en'
          ? 'Madiun education services, schools in Madiun, PPDB Madiun, student services Madiun, education information Madiun'
          : 'layanan pendidikan Kota Madiun, sekolah di Madiun, PPDB Madiun, layanan siswa Madiun, informasi pendidikan Madiun'
      }
      url="https://pemerintahan-kota-madiun.vercel.app/layanan/pendidikan"
      lang={lang}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentService',
          name:
            lang === 'en'
              ? 'Madiun City Education Services'
              : 'Layanan Pendidikan Kota Madiun',
          description:
            lang === 'en'
              ? 'Education services for Madiun City residents, including school information, student services, PPDB information, and education-related public services.'
              : 'Layanan pendidikan untuk masyarakat Kota Madiun, meliputi informasi sekolah, layanan siswa, informasi PPDB, dan layanan publik bidang pendidikan.',
          inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
          provider: {
            '@type': 'GovernmentOrganization',
            name: 'Pemerintah Kota Madiun',
          },
          serviceType: 'Layanan Pendidikan',
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Kota Madiun',
          },
        },
        createFAQSchema(faqText[lang].items, lang),
      ]}
    />
    
      <div className="container mx-auto px-4 md:px-8 mb-4">
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-semibold shadow hover:bg-gray-100 transition">
          <ArrowLeft className="w-5 h-5" strokeWidth={3} />
        </Link>
      </div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-[#0D3D1C] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <img src="/maskote_pendekar.png" alt="" className="w-full h-auto grayscale" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              {t('nav.layananPublik')}
            </div>
            <h1 className="font-poppins text-4xl md:text-5xl font-black mb-4">
              {t('layanan.pendidikan.title')}
            </h1>
            <p className="text-white/80 text-lg">
              {t('layanan.pendidikan.desc')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <motion.a key={index} href={service.href} target="_blank" rel="noopener noreferrer" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary group flex flex-col h-full">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-poppins text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-1">{service.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm mt-auto">
                  {t('layanan.access')} <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>;
        })}
        <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
        </div>
      </div>
    </div>;
}