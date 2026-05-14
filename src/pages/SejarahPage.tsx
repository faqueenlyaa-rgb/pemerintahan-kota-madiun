import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
export function SejarahPage() {
  const {
    t
  } = useLanguage();
  const walikotaList = ['K.A. Schotman', 'Boerstra', 'Van Dijk', 'Ali Sastro Amidjojo', 'Mr. R.M. Soebroto', 'R. Soesanto Tirtoprodjo', 'Soedibjo', 'R. Poerbo Sisworo', 'Soepardi', 'Mochammad', 'M. Soediono', 'Singgih', 'Moetoro', 'Moestadjab', 'Roeslan Wongsokoesoemo', 'Soepardi', 'Soemadi', 'Soebagjo', 'Walikota R. Roekito, BA', 'Imam Soenardji', 'Achmad Dawaki, BA', 'Marsoedi', 'Masdra M. Jasin', 'Bambang Pamoedjo', 'H. Achmad Ali', 'Koko Raya, S.H, M.Hum', 'H. Bambang Irianto, SH, MM', 'Dr. Drs. H. Maidi, S.H, M.M, M.Pd', 'Dr. Drs. H. Maidi, S.H, M.M, M.Pd dan F. Bagus Panuntun'];
  return <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
    <SEO
      title="Sejarah Kota Madiun"
      description="Informasi sejarah berdirinya Pemerintah Kota Madiun, perkembangan pemerintahan, daftar wali kota, serta makna lambang Pemerintah Kota Madiun."
      keywords="Sejarah Kota Madiun, sejarah Pemerintah Kota Madiun, lambang Kota Madiun, profil Madiun"
      url="https://domain-kamu.com/profil/sejarah"
      lang="id"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Sejarah Kota Madiun',
        description:
        'Informasi sejarah Kota Madiun, perkembangan pemerintahan, dan makna lambang daerah.',
        about: {
          '@type': 'Place',
          name: 'Kota Madiun'
        },
        publisher: {
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
                {t('profil.sejarah.title')}
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
          {/* Artikel Sejarah */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>{t('profil.sejarah.p1')}</p>
              <p>{t('profil.sejarah.p2')}</p>
              <p>{t('profil.sejarah.p3')}</p>
              <p>{t('profil.sejarah.p4')}</p>
              <p>{t('profil.sejarah.p5')}</p>
              <p>{t('profil.sejarah.p6')}</p>
              <p>{t('profil.sejarah.p7')}</p>
              <p>{t('profil.sejarah.p8')}</p>
              <p>{t('profil.sejarah.p9')}</p>
            </div>
          </motion.div>

          {/* Daftar Walikota */}
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
              {t('profil.sejarah.walikotaTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {walikotaList.map((nama, index) => <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{nama}</span>
                </div>)}
            </div>
          </motion.div>

          {/* Arti Lambang */}
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
              {t('profil.sejarah.lambangTitle')}
            </h2>
            <div className="grid gap-6">
              {[{
              key: 'perisai',
              title: 'Perisai'
            }, {
              key: 'gunung',
              title: 'Gunung & Sungai'
            }, {
              key: 'fondamen',
              title: 'Fondamen'
            }, {
              key: 'tugu',
              title: 'Tugu'
            }, {
              key: 'keris',
              title: 'Keris Pusaka'
            }, {
              key: 'padi',
              title: 'Padi & Kapas'
            }].map((item) => <div key={item.key} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`profil.sejarah.lambang.${item.key}`)}
                  </p>
                </div>)}
            </div>

            <h3 className="text-2xl font-bold text-primary mt-12 mb-6 font-poppins text-center">
              {t('profil.sejarah.warnaTitle')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[{
              key: 'hijau',
              color: 'bg-green-600'
            }, {
              key: 'kuning',
              color: 'bg-yellow-400'
            }, {
              key: 'biru',
              color: 'bg-blue-500'
            }, {
              key: 'putih',
              color: 'bg-white border border-gray-200'
            }, {
              key: 'merah',
              color: 'bg-red-500'
            }, {
              key: 'hitam',
              color: 'bg-black'
            }].map((item) => <div key={item.key} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className={`w-6 h-6 rounded-full shadow-sm shrink-0 ${item.color}`}></div>
                  <p className="text-gray-700 text-sm">
                    {t(`profil.sejarah.warna.${item.key}`)}
                  </p>
                </div>)}
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-accent">
              <p className="text-gray-800 font-medium italic leading-relaxed">
                {t('profil.sejarah.lambang.kesimpulan')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
}