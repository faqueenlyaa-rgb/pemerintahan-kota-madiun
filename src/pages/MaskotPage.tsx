import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
export function MaskotPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';
  const maskots = [{
    id: 'madya',
    name: 'MADYA',
    subKey: 'profil.maskot.madyaSub',
    descKey: 'profil.maskot.madyaDesc',
    image: "/maskote_pendekar.png",
    color: 'from-green-500 to-emerald-700',
    bgLight: 'bg-green-50'
  }, {
    id: 'rasa',
    name: 'RASA',
    subKey: 'profil.maskot.rasaSub',
    descKey: 'profil.maskot.rasaDesc',
    image: "/maskot_pecel.png",
    color: 'from-orange-400 to-red-500',
    bgLight: 'bg-orange-50'
  }, {
    id: 'relo',
    name: 'RELO',
    subKey: 'profil.maskot.reloSub',
    descKey: 'profil.maskot.reloDesc',
    image: "/maskot_KAI.png",
    color: 'from-blue-400 to-indigo-600',
    bgLight: 'bg-blue-50'
  }];
  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Apa saja maskot Kota Madiun?',
        answer: 'Maskot Kota Madiun terdiri dari Madya, Rasa, dan Relo. Ketiganya merepresentasikan karakter Kota Madiun sebagai kota yang tangguh, ramah, berbudaya, maju, dan terhubung.'
      },
      {
        question: 'Apa makna Madya?',
        answer: 'Madya merupakan Sang Pendekar yang melambangkan kekuatan, keseimbangan, keberanian, dan semangat Kota Madiun untuk maju tanpa melupakan akar budaya.'
      },
      {
        question: 'Apa makna Rasa?',
        answer: 'Rasa merupakan Sang Pecel yang melambangkan keramahan, kehangatan, kebersamaan, dan kekuatan budaya kuliner Kota Madiun.'
      },
      {
        question: 'Apa makna Relo?',
        answer: 'Relo merupakan Sang Kereta Api yang melambangkan kemajuan, konektivitas, dan semangat Kota Madiun untuk terus bergerak menuju masa depan.'
      },
      {
        question: 'Apa fungsi maskot bagi Kota Madiun?',
        answer: 'Maskot berfungsi sebagai identitas visual yang memperkuat branding Kota Madiun, memperkenalkan karakter kota, serta membuat informasi kota lebih dekat dan mudah dikenali oleh masyarakat.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What are the mascots of Madiun City?',
        answer: 'The mascots of Madiun City are Madya, Rasa, and Relo. They represent Madiun City as a resilient, friendly, cultural, progressive, and connected city.'
      },
      {
        question: 'What does Madya represent?',
        answer: 'Madya is the Pendekar figure that symbolizes strength, balance, courage, and the spirit of Madiun City to move forward while preserving its cultural roots.'
      },
      {
        question: 'What does Rasa represent?',
        answer: 'Rasa is the Pecel figure that symbolizes friendliness, warmth, togetherness, and the strength of Madiun City culinary culture.'
      },
      {
        question: 'What does Relo represent?',
        answer: 'Relo is the Train figure that symbolizes progress, connectivity, and the spirit of Madiun City to keep moving toward the future.'
      },
      {
        question: 'What is the function of mascots for Madiun City?',
        answer: 'The mascots function as visual identities that strengthen Madiun City branding, introduce the city character, and make city information more recognizable and closer to the public.'
      }
    ]
  }
};
  return <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
    <SEO
      title="Maskot Kota Madiun"
      description="Informasi maskot Kota Madiun yaitu Madya, Rasa, dan Relo sebagai simbol kekuatan, keramahan, budaya, kemajuan, dan konektivitas Kota Madiun."
      keywords="Maskot Kota Madiun, Madya, Rasa, Relo, Kota Pendekar, maskot Madiun"
      url="https://pemerintahan-kota-madiun.vercel.app/profil/maskot"
      lang="id"
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: lang === 'en' ? 'Madiun City Mascots' : 'Maskot Kota Madiun',
          description:
            lang === 'en'
              ? 'Information about Madiun City mascots: Madya, Rasa, and Relo, representing strength, culture, friendliness, progress, and connectivity.'
              : 'Informasi maskot Kota Madiun yaitu Madya, Rasa, dan Relo yang merepresentasikan kekuatan, budaya, keramahan, kemajuan, dan konektivitas.',
          inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
          about: {
            '@type': 'Place',
            name: 'Kota Madiun',
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
        }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              {t('profil.maskot.title')}
            </h1>
            <p className="text-lg text-white/90">{t('nav.govTitle')}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {maskots.map((maskot, index) => <motion.div key={maskot.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className={`h-64 ${maskot.bgLight} relative flex items-center justify-center p-6 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${maskot.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <img src={maskot.image} alt={`Maskot ${maskot.name}`} className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-xl" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h2 className="text-3xl font-black text-gray-800 tracking-tight mb-1">
                    {maskot.name}
                  </h2>
                  <p className="text-sm font-bold text-primary tracking-widest uppercase">
                    {t(maskot.subKey)}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {t(maskot.descKey)}
                </p>
              </div>
            </motion.div>)}
            <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
        </div>
      </div>
    </div>;
}