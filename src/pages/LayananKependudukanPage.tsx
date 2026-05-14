import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';
import { Users, FileText, MapPin, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
export function LayananKependudukanPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';
  const services = [{
    title: t('layanan.kependudukan.ktp.title'),
    desc: t('layanan.kependudukan.ktp.desc'),
    href: 'https://api.whatsapp.com/send/?phone=628113577800&text=KTP&type=phone_number&app_absent=0',
    icon: FileText
  }, {
    title: t('layanan.kependudukan.pindahKartoharjo.title'),
    desc: t('layanan.kependudukan.pindahKartoharjo.desc'),
    href: 'https://api.whatsapp.com/send/?phone=628113577800&text=KK+Pindah+Kartoharjo&type=phone_number&app_absent=0',
    icon: MapPin
  }, {
    title: t('layanan.kependudukan.pindahManguharjo.title'),
    desc: t('layanan.kependudukan.pindahManguharjo.desc'),
    href: 'https://api.whatsapp.com/send/?phone=628113577800&text=KK+Pindah+Manguharjo&type=phone_number&app_absent=0',
    icon: MapPin
  }, {
    title: t('layanan.kependudukan.pindahTaman.title'),
    desc: t('layanan.kependudukan.pindahTaman.desc'),
    href: 'https://api.whatsapp.com/send/?phone=628113577800&text=KK+Pindah+Taman&type=phone_number&app_absent=0',
    icon: MapPin
  }, {
    title: t('layanan.kependudukan.aktaMati.title'),
    desc: t('layanan.kependudukan.aktaMati.desc'),
    href: 'https://api.whatsapp.com/send/?phone=628113577800&text=Akta+Mati+dan+KIA&type=phone_number&app_absent=0',
    icon: FileText
  }, {
    title: t('layanan.kependudukan.aktaLahir.title'),
    desc: t('layanan.kependudukan.aktaLahir.desc'),
    href: 'https://api.whatsapp.com/send/?phone=628113577800&text=AKTA+Lahir+%283+in+1%29&type=phone_number&app_absent=0',
    icon: FileText
  }];
  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Layanan kependudukan apa yang bisa diakses masyarakat?',
        answer: 'Masyarakat dapat mengakses informasi layanan seperti KTP, Kartu Keluarga, akta, mutasi penduduk, dan pindah domisili melalui kanal resmi layanan kependudukan.'
      },
      {
        question: 'Bagaimana cara mengurus pindah domisili atau mutasi penduduk?',
        answer: 'Informasi pindah domisili atau mutasi penduduk dapat dilihat melalui layanan kependudukan atau perangkat daerah terkait. Persyaratan biasanya menyesuaikan ketentuan administrasi kependudukan yang berlaku.'
      },
      {
        question: 'Apakah layanan kependudukan bisa diakses secara online?',
        answer: 'Beberapa layanan dapat diarahkan ke portal atau aplikasi resmi yang tersedia. Jika layanan belum tersedia langsung di website ini, pengguna akan diarahkan ke kanal resmi terkait.'
      },
      {
        question: 'Apa yang perlu disiapkan sebelum mengurus dokumen kependudukan?',
        answer: 'Masyarakat perlu menyiapkan identitas diri dan dokumen pendukung sesuai jenis layanan, seperti KTP, KK, surat pengantar, atau dokumen lain sesuai ketentuan.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What population services can citizens access?',
        answer: 'Citizens can access information about services such as ID cards, family cards, certificates, population mutation, and domicile transfer through official population service channels.'
      },
      {
        question: 'How can residents process domicile transfer or population mutation?',
        answer: 'Information about domicile transfer or population mutation can be viewed through population services or the related local office.'
      },
      {
        question: 'Can population services be accessed online?',
        answer: 'Some services may be directed to available official portals or applications. If a service is not directly available on this website, users will be directed to the related official channel.'
      },
      {
        question: 'What should be prepared before processing population documents?',
        answer: 'Residents need to prepare identity documents and supporting documents according to the type of service, such as ID card, family card, introduction letter, or other required documents.'
      }
    ]
  }
};
  return <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
    <SEO
      title={
        lang === 'en'
          ? 'Madiun City Population Administration Services'
          : 'Layanan Kependudukan Kota Madiun'
      }
      description={
        lang === 'en'
          ? 'Population administration services in Madiun City, including ID cards, family cards, birth certificates, and other civil administration services.'
          : 'Layanan administrasi kependudukan Kota Madiun, termasuk KTP, Kartu Keluarga, akta kelahiran, dan layanan administrasi lainnya.'
      }
      keywords={
        lang === 'en'
          ? 'Madiun population services, Madiun ID card, Madiun family card, birth certificate Madiun, civil administration Madiun'
          : 'layanan kependudukan Kota Madiun, KTP Madiun, Kartu Keluarga Madiun, akta kelahiran Madiun, administrasi kependudukan Madiun'
      }
      url="https://domain-kamu.com/layanan/kependudukan"
      lang={lang}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentService',
          name:
            lang === 'en'
              ? 'Madiun City Population Administration Services'
              : 'Layanan Kependudukan Kota Madiun',
          description:
            lang === 'en'
              ? 'Population administration services for residents of Madiun City, including ID card, family card, birth certificate, death certificate, moving permit, and population data updates.'
              : 'Layanan administrasi kependudukan untuk masyarakat Kota Madiun, meliputi KTP, Kartu Keluarga, akta kelahiran, akta kematian, pindah datang, dan pembaruan data kependudukan.',
          inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
          provider: {
            '@type': 'GovernmentOrganization',
            name: 'Pemerintah Kota Madiun',
          },
          serviceType: 'Layanan Administrasi Kependudukan',
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
              {t('layanan.kependudukan.title')}
            </h1>
            <p className="text-white/80 text-lg">
              {t('layanan.kependudukan.desc')}
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