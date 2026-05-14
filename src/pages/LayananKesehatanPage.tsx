import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';
import { HeartPulse, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
export function LayananKesehatanPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';
  const services = [{
    title: t('layanan.kesehatan.antrian.title'),
    desc: t('layanan.kesehatan.antrian.desc'),
    href: 'https://dinkes.madiunkota.go.id/web/',
    icon: HeartPulse
  }];
  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Informasi kesehatan apa yang tersedia di halaman ini?',
        answer: 'Halaman Layanan Kesehatan menyediakan informasi awal terkait layanan kesehatan, fasilitas kesehatan, dan akses layanan kesehatan untuk masyarakat Kota Madiun.'
      },
      {
        question: 'Bagaimana cara mencari fasilitas kesehatan di Kota Madiun?',
        answer: 'Pengguna dapat melihat informasi fasilitas kesehatan pada halaman layanan atau melalui kanal resmi pemerintah dan instansi kesehatan terkait.'
      },
      {
        question: 'Apakah halaman ini menyediakan layanan darurat kesehatan?',
        answer: 'Halaman ini berfungsi sebagai portal informasi. Untuk kondisi darurat, masyarakat tetap harus menghubungi layanan darurat atau fasilitas kesehatan terdekat.'
      },
      {
        question: 'Di mana saya bisa mendapatkan informasi program kesehatan masyarakat?',
        answer: 'Informasi program kesehatan masyarakat dapat dilihat melalui kanal resmi pemerintah kota atau perangkat daerah yang menangani urusan kesehatan.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What health information is available on this page?',
        answer: 'The Health Services page provides initial information about health services, health facilities, and public health access for Madiun City residents.'
      },
      {
        question: 'How can users find health facilities in Madiun City?',
        answer: 'Users can view health facility information on the service page or through official government and health institution channels.'
      },
      {
        question: 'Does this page provide emergency health services?',
        answer: 'This page functions as an information portal. For emergencies, citizens should contact emergency services or the nearest health facility.'
      },
      {
        question: 'Where can I find information about public health programs?',
        answer: 'Information about public health programs can be found through official city government channels or the local office responsible for health affairs.'
      }
    ]
  }
};
  return <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
    <SEO
      title={
        lang === 'en'
          ? 'Madiun City Health Services'
          : 'Layanan Kesehatan Kota Madiun'
      }
      description={
        lang === 'en'
          ? 'Health service information in Madiun City, including public health centers, hospitals, clinics, and community health services.'
          : 'Informasi layanan kesehatan Kota Madiun, meliputi puskesmas, rumah sakit, klinik, dan layanan kesehatan masyarakat.'
      }
      keywords={
        lang === 'en'
          ? 'Madiun health services, public health center Madiun, hospital Madiun, clinic Madiun, public health Madiun'
          : 'layanan kesehatan Kota Madiun, puskesmas Madiun, rumah sakit Madiun, klinik Madiun, kesehatan masyarakat Madiun'
      }
      url="https://domain-kamu.com/layanan/kesehatan"
      lang={lang}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentService',
          name:
            lang === 'en'
              ? 'Madiun City Health Services'
              : 'Layanan Kesehatan Kota Madiun',
          description:
            lang === 'en'
              ? 'Health services for Madiun City residents, including public health centers, hospitals, clinics, health checks, and community health programs.'
              : 'Layanan kesehatan untuk masyarakat Kota Madiun, meliputi puskesmas, rumah sakit, klinik, pemeriksaan kesehatan, dan program kesehatan masyarakat.',
          inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
          provider: {
            '@type': 'GovernmentOrganization',
            name: 'Pemerintah Kota Madiun',
          },
          serviceType: 'Layanan Kesehatan',
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
              {t('layanan.kesehatan.title')}
            </h1>
            <p className="text-white/80 text-lg">
              {t('layanan.kesehatan.desc')}
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