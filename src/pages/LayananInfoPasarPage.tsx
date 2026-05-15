import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
import {
  Store,
  ShoppingCart,
  Leaf,
  ExternalLink,
  ArrowLeft } from
'lucide-react';
import { Link } from 'react-router-dom';
export function LayananInfoPasarPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';
  const services = [
  {
    title: 'Marketplace',
    desc: t('infoPasar.marketplace.desc'),
    href: 'https://marketplace.madiunkota.go.id/',
    icon: ShoppingCart
  },
  {
    title: 'UMKM',
    desc: t('infoPasar.umkm.desc'),
    href: 'https://proumkm.madiunkota.go.id/login',
    icon: Store
  },
  {
    title: 'E-Sayur',
    desc: t('infoPasar.esayur.desc'),
    href: 'https://esayur.madiunkota.go.id/',
    icon: Leaf
  }];

  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Apa itu halaman Info Pasar Kota Madiun?',
        answer: 'Halaman Info Pasar Kota Madiun menyediakan akses menuju layanan digital ekonomi masyarakat, seperti Marketplace, UMKM, dan E-Sayur.'
      },
      {
        question: 'Apa fungsi layanan Marketplace?',
        answer: 'Layanan Marketplace digunakan untuk mengakses platform digital yang berkaitan dengan produk, pelaku usaha, dan kegiatan ekonomi masyarakat Kota Madiun.'
      },
      {
        question: 'Bagaimana cara mengakses layanan UMKM?',
        answer: 'Pengguna dapat memilih kartu UMKM pada halaman Info Pasar, kemudian menekan tombol akses layanan untuk menuju portal resmi layanan UMKM yang tersedia.'
      },
      {
        question: 'Apa itu layanan E-Sayur?',
        answer: 'E-Sayur adalah layanan digital yang berkaitan dengan kebutuhan bahan pangan atau sayuran secara online melalui portal resmi yang tersedia.'
      },
      {
        question: 'Apakah link layanan di halaman ini resmi?',
        answer: 'Ya, setiap kartu layanan diarahkan ke website atau portal resmi yang sudah tersedia. Nama layanan dan URL tidak diterjemahkan agar link tetap valid.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What is the Madiun City Market Information page?',
        answer: 'The Madiun City Market Information page provides access to digital economic services such as Marketplace, MSME services, and E-Sayur.'
      },
      {
        question: 'What is the function of the Marketplace service?',
        answer: 'The Marketplace service provides access to a digital platform related to products, business actors, and local economic activities in Madiun City.'
      },
      {
        question: 'How can users access MSME services?',
        answer: 'Users can select the MSME card on the Market Information page and click the service access button to open the official MSME service portal.'
      },
      {
        question: 'What is E-Sayur?',
        answer: 'E-Sayur is a digital service related to food or vegetable needs through the available official portal.'
      },
      {
        question: 'Are the service links on this page official?',
        answer: 'Yes, each service card directs users to an available official website or portal. Service names and URLs are not translated to keep the links valid.'
      }
    ]
  }
};
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
      <SEO
        title="Info Pasar Kota Madiun"
        description="Halaman Info Pasar Kota Madiun menyediakan akses ke layanan Marketplace, UMKM, dan E-Sayur melalui portal resmi yang tersedia."
        keywords="Info Pasar Madiun, Marketplace Madiun, UMKM Madiun, E-Sayur Madiun, layanan pasar Kota Madiun"
        url="https://pemerintahan-kota-madiun.vercel.app/layanan/info-pasar"
        lang="id"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: lang === 'en' ? 'Madiun City Market Information' : 'Info Pasar Kota Madiun',
            description:
              lang === 'en'
                ? 'Access digital market services, MSMEs, Marketplace, and E-Sayur through official Madiun City portals.'
                : 'Akses layanan digital pasar, UMKM, Marketplace, dan E-Sayur melalui portal resmi Kota Madiun.',
            inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Marketplace',
                url: 'https://marketplace.madiunkota.go.id/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'UMKM',
                url: 'https://proumkm.madiunkota.go.id/login',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'E-Sayur',
                url: 'https://esayur.madiunkota.go.id/',
              },
            ],
          },
          createFAQSchema(faqText[lang].items, lang),
        ]} 
      />
      
      <div className="container mx-auto px-4 md:px-8 mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-semibold shadow hover:bg-gray-100 transition">
          
          <ArrowLeft className="w-5 h-5" strokeWidth={3} />
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="bg-[#0D3D1C] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <img
              src="/maskote_pendekar.png"
              alt=""
              className="w-full h-auto grayscale" />
            
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              {t('nav.layananPublik')}
            </div>
            <h1 className="font-poppins text-4xl md:text-5xl font-black mb-4">
              {t('infoPasar.title')}
            </h1>
            <p className="text-white/80 text-lg">{t('infoPasar.subtitle')}</p>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={index}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -6
                }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary group flex flex-col h-full">
                
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-poppins text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-1">{service.desc}</p>
                <div className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#166b30] text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 group-hover:scale-[1.02] mt-auto">
                  <ExternalLink className="w-4 h-4" />
                  {t('infoPasar.access')}
                </div>
              </motion.a>);

          })}
          <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
        </div>
      </div>
    </div>);

}