import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
export function LowonganPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
      <SEO
        title="Lowongan Kota Madiun"
        description="Halaman lowongan Kota Madiun berisi informasi peluang kerja, rekrutmen, dan lowongan yang berkaitan dengan Kota Madiun."
        keywords="Lowongan Kota Madiun, lowongan kerja Madiun, rekrutmen Madiun, informasi kerja Madiun"
        url="https://domain-kamu.com/madiun-terkini/lowongan"
        lang="id"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Lowongan Kota Madiun',
          description:
          'Halaman informasi lowongan dan peluang kerja yang berkaitan dengan Kota Madiun.',
          publisher: {
            '@type': 'GovernmentOrganization',
            name: 'Pemerintah Kota Madiun'
          }
        }} />
      
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <Link
          to="/madiun-terkini"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-semibold shadow hover:bg-gray-100 transition">
          
          <ArrowLeft className="w-5 h-5" strokeWidth={3} />
        </Link>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-sm text-center max-w-3xl mx-auto border border-gray-100">
          
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-poppins text-3xl md:text-4xl font-black text-dark mb-4">
            {t('madiunTerkini.lowongan')}
          </h1>
          <p className="text-gray-500 text-lg">
            {t('madiunTerkini.comingSoon')}
          </p>
        </motion.div>
      </div>
    </div>);

}