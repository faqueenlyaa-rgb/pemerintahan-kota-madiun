import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';

export function NewsSection() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
  languageContext.lang ||
  languageContext.language ||
  localStorage.getItem('language') ||
  'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';

  const beritaPemerintahan = [
  {
    id: 1,
    slug: 'perkuat-ekonomi-daerah-ekosistem-halal',
    title: {
      id: 'Perkuat Ekonomi Daerah, Plt Wali Kota Kembangkan Ekosistem Halal',
      en: 'Strengthening the Regional Economy, Acting Mayor Develops Halal Ecosystem'
    },
    excerpt: {
      id: 'MADIUN – Pemerintah Kota Madiun terus mendorong pengembangan ekosistem halal sebagai salah satu strategi memperkuat perekonomian daerah.',
      en: 'MADIUN – The Madiun City Government continues to encourage the development of a halal ecosystem as a strategy to strengthen the regional economy.'
    },
    image:
    'https://www.madiunkota.go.id/menu/file/eyJpdiI6IjVJRFI3L0xsMVlMTG9wVG0xRHVyMFE9PSIsInZhbHVlIjoiU0p5Z04ycElwTDhabXF2V1J6eG41czE1RDFoRlRHemZxVlhnSFZiNGVOR29adzI0NWd5ZS9VZTd5andyQ3Y3SEJsaFNRZlc4a1dOeCtQcDlBK3ZqRWc9PSIsIm1hYyI6IjIzOTQ1ZTIyYzM5YjBmZjJjZDhjOTlmN2M4ZjM1NWI5NTgyNjlmN2M1ZTUzYTdlN2U5YmMyOWQ1ZDM2MDk0ZTAiLCJ0YWciOiIifQ=='
  },
  {
    id: 2,
    slug: 'gowes-bersama-ketua-dprd-cek-pelayanan-publik',
    title: {
      id: 'Gowes Bersama Ketua DPRD, Plt Wali Kota Cek Pelayanan Publik',
      en: 'Cycling with DPRD Chairperson, Acting Mayor Checks Public Services'
    },
    excerpt: {
      id: 'MADIUN – Plt Wali Kota Madiun F Bagus Panuntun kembali melaksanakan gowes bersama Ketua DPRD Kota Madiun Armaya untuk meninjau pelayanan publik.',
      en: 'MADIUN – Acting Mayor of Madiun F Bagus Panuntun cycled with the Chairperson of the Madiun City DPRD Armaya to review public services.'
    },
    image:
    'https://www.madiunkota.go.id/menu/file/eyJpdiI6ImFrSWQxcyszVVhTRWMzS1RWRjF4TFE9PSIsInZhbHVlIjoidERoKzl4b0pjM0ZNSUIzRXRTdUZJWWF4SEM0dUZNVU9VeHpIdHpMTFJDREgvSVlWM3VhdWd2dHJlYUt5ZkRGaEl6VzByajM2Tm1XLzYyeEc1QUNscUNObVVTZ1Z2b2Q2RFJYT25oTFlJVWtDaUdzUThMZUtncXVLOW9IOElrbnoiLCJtYWMiOiJhYjMxOThmOTg1YTIwNWJkNzU1NjEwM2ZiNjc4MjRmODIwYjUzN2E1NTYyNDE4MTI5YjQxMGRlZmU3M2VjNTYyIiwidGFnIjoiIn0='
  }];


  const madiunToday = [
  {
    id: 1,
    title: {
      id: 'MBG SDN Demangan 1 Positif Terkontaminasi Kuman, Hasil Uji Lab Dikirim ke BGN',
      en: 'MBG at SDN Demangan 1 Confirmed Contaminated, Lab Results Sent to BGN'
    },
    excerpt: {
      id: 'MADIUN – Dugaan keracunan makanan program Makan Bergizi Gratis di SDN 1 Demangan akhirnya terjawab.',
      en: 'MADIUN – The suspected food poisoning case from the Free Nutritious Meal program at SDN 1 Demangan has been clarified.'
    },
    image:
    'https://madiuntoday.id/menu/file/eyJpdiI6Ik1JOG1HVElZNGdCb3F1bXZvOGFPb0E9PSIsInZhbHVlIjoiWFNlanVJb0pDcUM3SHk3eTRsSXF6cEJkN1diZnU5U0ZzSW5UZEltaGM3dE0vblFOUHhWQWR4dzhidmpFL1MzWE94WEVUYml0SGRiVmJmY2E3dWNNeGJMQ0h0dE5TSGZ2SXhGREdTYmpqZmVaNDhJcUlVZ0ptTlQxdGdSY3dMSVUiLCJtYWMiOiI5MDg0OTE1OTNkMjM2ZDJhODQ5ZDAzZjQ1YTBlNmQ4YmU2MTIyZjk4OTczNDFlNDhiODU2OGNlNjAxMTVhYjY5IiwidGFnIjoiIn0=',
    href: 'https://madiuntoday.id/berita/2026/05/05/mbg-sdn-demangan-1-positif-terkontaminasi-kuman-hasil-uji-lab-dikirim-ke-bgn'
  },
  {
    id: 2,
    title: {
      id: 'Harga Kebutuhan Pokok di Kota Madiun Melandai, April Catat Deflasi 0,02 Persen',
      en: 'Basic Food Prices in Madiun City Ease, April Records 0.02 Percent Deflation'
    },
    excerpt: {
      id: 'MADIUN - Harga sejumlah kebutuhan pokok di Kota Madiun mulai menunjukkan penurunan setelah Lebaran.',
      en: 'MADIUN - Prices of several basic commodities in Madiun City began to decline after Eid.'
    },
    image:
    'https://madiuntoday.id/menu/file/eyJpdiI6IjRGNkc0Y3dYNXcwckkwU25XUzgwNHc9PSIsInZhbHVlIjoiZHEvSXRHNS9IUENMUVd5d3JGYkRTbFYvaGtFUk91M3BWN1o5bXRUOTIrWXp1aTltUlR5TkRnR3VLOW1WQ1RUNnpuaGVzWnN4TUI0dG5GYVNEN2RncGROcFBvelp0Z1MvTzRqY3crNjRvakpxYTgwVXhuV3ZicHdwaHBncVhFeGgiLCJtYWMiOiI2ZWM2Mzk1MDZmZDZjNzFhOWVjMGFkODI5ZDBlNjQxYzVhMWM4ZDNlOGFlMmE4YzM5NzllMmYxNGIyYWE1Y2Q1IiwidGFnIjoiIn0=',
    href: 'https://madiuntoday.id/berita/2026/05/05/harga-kebutuhan-pokok-di-kota-madiun-melandai-april-catat-deflasi-002-persen#main-slide'
  }];


  return (
    <section className="py-16 bg-[#e8f0e0] relative overflow-hidden">
      {/* Mascot RELO top right */}
      <div className="absolute top-0 right-0 w-48 md:w-64 opacity-20 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <img
          src="/maskot_KAI.png"
          alt=""
          className="w-full h-auto" />
        
      </div>

      {/* Mascot RASA bottom right */}
      <div className="absolute bottom-0 right-0 w-56 md:w-80 opacity-30 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <img
          src="/maskot_pecel.png"
          alt=""
          className="w-full h-auto" />
        
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="font-poppins text-5xl md:text-7xl font-black text-primary text-center mb-12 tracking-tight">
          {t('news.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Berita Pemerintahan */}
          <div>
            <div className="flex items-center justify-between mb-6 gap-4">
              <h3 className="font-poppins text-2xl md:text-3xl font-black text-primary flex items-center gap-2">
                {t('news.govNews')}
              </h3>

              <Link
                to="/madiun-terkini/berita-pemerintahan"
                className="hover:bg-[#06451F] text-white px-4 py-2 rounded-full font-bold text-xs transition-colors flex items-center gap-2 whitespace-nowrap bg-[#237227]">
                
                <Eye className="w-4 h-4" />
                {t('news.viewAll')}
              </Link>
            </div>

            <div className="space-y-6">
              {beritaPemerintahan.map((news, index) =>
              <motion.div
                key={news.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                
                  <Link
                  to={`/madiun-terkini/berita-pemerintahan/${news.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#237227] flex flex-col sm:flex-row group">
                  
                    <div className="w-full sm:w-40 h-40 sm:h-auto shrink-0 relative overflow-hidden">
                      <img
                      src={news.image}
                      alt={news.title[lang]}
                      className="w-full h-full object-cover absolute inset-0 transition duration-500 group-hover:scale-105" />
                    
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>

                    <div className="p-5 flex-1">
                      <h4 className="font-poppins text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-[#237227] transition-colors">
                        {news.title[lang]}
                      </h4>

                      <p className="text-sm text-gray-600 line-clamp-2">
                        {news.excerpt[lang]}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#237227]">
                        {lang === 'en' ? 'Read More' : 'Baca Selengkapnya'}
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column - Madiun Today */}
          <div>
            <div className="flex items-center justify-between mb-6 gap-4">
              <h3 className="font-poppins text-2xl md:text-3xl font-black text-primary flex items-center gap-2">
                {t('news.madiunToday')}
              </h3>

              <a
                href="https://madiuntoday.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#06451F] text-white px-4 py-2 rounded-full font-bold text-xs transition-colors flex items-center gap-2 whitespace-nowrap bg-[#237227]">
                
                <Eye className="w-4 h-4" />
                {t('news.viewAll')}
              </a>
            </div>

            <div className="space-y-6">
              {madiunToday.map((news, index) =>
              <motion.article
                key={news.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                
                  <a
                  href={news.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#237227] flex flex-col sm:flex-row group">
                  
                    <div className="w-full sm:w-40 h-40 sm:h-auto shrink-0 relative overflow-hidden">
                      <img
                      src={news.image}
                      alt={news.title[lang]}
                      className="w-full h-full object-cover absolute inset-0 transition duration-500 group-hover:scale-105" />
                    
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>

                    <div className="p-5 flex-1">
                      <h4 className="font-poppins text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-[#237227] transition-colors">
                        {news.title[lang]}
                      </h4>

                      <p className="text-sm text-gray-600 line-clamp-2">
                        {news.excerpt[lang]}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#237227]">
                        {lang === 'en' ? 'Open News' : 'Buka Berita'}
                        <span>→</span>
                      </span>
                    </div>
                  </a>
                </motion.article>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}