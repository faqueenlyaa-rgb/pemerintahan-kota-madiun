import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
export function VisiMisiPage() {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
    <SEO
      title="Visi dan Misi Kota Madiun"
      description="Informasi visi dan misi Pemerintah Kota Madiun dalam mewujudkan pemerintahan maju, bersih, berwibawa, serta membangun Kota Madiun yang mendunia bersama masyarakat."
      keywords="Visi Misi Kota Madiun, Pemerintah Kota Madiun, profil Kota Madiun, Kota Pendekar"
      url="https://pemerintahan-kota-madiun.vercel.app/profil/visi-misi"
      lang="id"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Visi dan Misi Kota Madiun',
        description:
        'Informasi visi dan misi Pemerintah Kota Madiun dalam membangun Kota Madiun.',
        about: {
          '@type': 'GovernmentOrganization',
          name: 'Pemerintah Kota Madiun'
        }
      }} />
    
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
                {t('profil.visiMisi.title')}
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
          {/* Visi */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
            <h2 className="text-3xl font-bold text-primary mb-6 font-poppins">
              {t('profil.visiMisi.visiTitle')}
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed">
              {t('profil.visiMisi.visiText')}
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-primary mb-8 font-poppins text-center">
              {t('profil.visiMisi.misiTitle')}
            </h2>
            <div className="grid gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => <div key={num} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {num}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1 text-lg">
                    {t(`profil.visiMisi.misi${num}`)}
                  </p>
                </div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
}