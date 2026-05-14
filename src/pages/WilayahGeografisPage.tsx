import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
export function WilayahGeografisPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';
  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Di mana letak Kota Madiun?',
        answer: 'Kota Madiun terletak di bagian barat Provinsi Jawa Timur dan berada pada posisi strategis karena terhubung dengan jalur regional serta jalur kereta api lintas Pulau Jawa bagian selatan.'
      },
      {
        question: 'Apa saja batas wilayah Kota Madiun?',
        answer: 'Secara administratif, Kota Madiun berbatasan dengan wilayah Kabupaten Madiun dan Magetan, termasuk Kecamatan Madiun, Wungu, Geger, dan Jiwan.'
      },
      {
        question: 'Mengapa letak Kota Madiun disebut strategis?',
        answer: 'Letak Kota Madiun disebut strategis karena berada pada jalur penghubung antarwilayah besar seperti Surabaya, Yogyakarta, Jakarta, Surakarta, Ponorogo, dan daerah sekitarnya.'
      },
      {
        question: 'Apakah nama kecamatan dan kelurahan diterjemahkan ke Bahasa Inggris?',
        answer: 'Tidak. Nama kecamatan, kelurahan, wilayah, dan instansi tetap menggunakan nama resmi aslinya agar tidak menimbulkan kesalahan data atau lokasi.'
      },
      {
        question: 'Apakah peta wilayah dapat digunakan untuk melihat informasi demografi?',
        answer: 'Ya, jika peta dibuat interaktif, setiap wilayah dapat dihubungkan dengan data demografi seperti kepadatan penduduk, rasio gender, usia produktif, dan informasi wilayah lainnya.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Where is Madiun City located?',
        answer: 'Madiun City is located in the western part of East Java Province and has a strategic position because it is connected to regional roads and the southern railway line across Java Island.'
      },
      {
        question: 'What are the administrative boundaries of Madiun City?',
        answer: 'Administratively, Madiun City borders the areas of Madiun Regency and Magetan, including Kecamatan Madiun, Wungu, Geger, and Jiwan.'
      },
      {
        question: 'Why is the location of Madiun City considered strategic?',
        answer: 'Madiun City is considered strategic because it is located on routes connecting major areas such as Surabaya, Yogyakarta, Jakarta, Surakarta, Ponorogo, and surrounding regions.'
      },
      {
        question: 'Are district and urban village names translated into English?',
        answer: 'No. Names of districts, urban villages, regions, and institutions remain in their official original form to avoid data or location errors.'
      },
      {
        question: 'Can the regional map be used to view demographic information?',
        answer: 'Yes, if the map is made interactive, each area can be connected to demographic data such as population density, gender ratio, productive age, and other regional information.'
      }
    ]
  }
};
  return <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
    <SEO
      title="Wilayah Geografis Kota Madiun"
      description="Informasi letak geografis Kota Madiun, posisi strategis, jalur transportasi, serta batas wilayah administrasi Kota Madiun."
      keywords="Wilayah Geografis Kota Madiun, letak Kota Madiun, batas wilayah Kota Madiun, geografis Madiun"
      url="https://domain-kamu.com/profil/wilayah-geografis"
      lang="id"
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'Place',
          name: 'Kota Madiun',
          description:
            lang === 'en'
              ? 'Geographical information about Madiun City, including its location, strategic position, and administrative area.'
              : 'Informasi geografis Kota Madiun, meliputi letak wilayah, posisi strategis, dan wilayah administrasi.',
          inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -7.6298,
            longitude: 111.5239,
          },
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Provinsi Jawa Timur',
          },
          publisher: {
            '@type': 'GovernmentOrganization',
            name: 'Pemerintah Kota Madiun',
          },
        },
        createFAQSchema(faqText[lang].items, lang),
      ]} />
    
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-[#166b30] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-semibold shadow hover:bg-gray-100 transition">
              <ArrowLeft className="w-5 h-5" strokeWidth={3} />
            </Link>
          </div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex flex-col md:flex-row items-center gap-8">
            <img src="/Lambang_Kota_Madiun.png" alt="Lambang Kota Madiun" className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
                {t('profil.geografis.title')}
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                {t('nav.govTitle')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Info Geografis */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-poppins">
                Letak Geografis
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="leading-relaxed">{t('profil.geografis.p1')}</p>
              <p className="leading-relaxed">{t('profil.geografis.p2')}</p>
            </div>
          </motion.div>

          {/* Batas Wilayah */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-primary mb-4 font-poppins">
                {t('profil.geografis.batasTitle')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('profil.geografis.batasDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Center Compass Icon for Desktop */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg items-center justify-center z-10 border-4 border-gray-50">
                <Compass className="w-8 h-8 text-primary" />
              </div>

              {[{
              key: 'utara',
              icon: 'N',
              color: 'bg-blue-50 text-blue-600 border-blue-100'
            }, {
              key: 'timur',
              icon: 'E',
              color: 'bg-green-50 text-green-600 border-green-100'
            }, {
              key: 'selatan',
              icon: 'S',
              color: 'bg-orange-50 text-orange-600 border-orange-100'
            }, {
              key: 'barat',
              icon: 'W',
              color: 'bg-purple-50 text-purple-600 border-purple-100'
            }].map((item) => <div key={item.key} className={`rounded-2xl p-6 border ${item.color} flex items-center gap-4 hover:shadow-md transition-shadow`}>
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium opacity-80 mb-1">
                      {t(`profil.geografis.${item.key}`)}
                    </p>
                    <p className="text-lg font-bold">
                      {t(`profil.geografis.${item.key}Val`)}
                    </p>
                  </div>
                </div>)}
                <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
}