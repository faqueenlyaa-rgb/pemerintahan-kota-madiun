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
        en: 'Strengthening the Regional Economy, Acting Mayor Develops Halal Ecosystem',
      },
      excerpt: {
        id: 'MADIUN – Pemerintah Kota Madiun terus mendorong pengembangan ekosistem halal sebagai salah satu strategi memperkuat perekonomian daerah.',
        en: 'MADIUN – The Madiun City Government continues to encourage the development of a halal ecosystem as a strategy to strengthen the regional economy.',
      },
      image: '/images/news/halalnews.jpg',
    },
    {
      id: 2,
      slug: 'gowes-bersama-ketua-dprd-cek-pelayanan-publik',
      title: {
        id: 'Gowes Bersama Ketua DPRD, Plt Wali Kota Cek Pelayanan Publik',
        en: 'Cycling with DPRD Chairperson, Acting Mayor Checks Public Services',
      },
      excerpt: {
        id: 'MADIUN – Plt Wali Kota Madiun F Bagus Panuntun kembali melaksanakan gowes bersama Ketua DPRD Kota Madiun Armaya untuk meninjau pelayanan publik.',
        en: 'MADIUN – Acting Mayor of Madiun F Bagus Panuntun cycled with the Chairperson of the Madiun City DPRD Armaya to review public services.',
      },
      image: '/images/news/gowes.jpg',
    },
  ];

  const madiunToday = [
    {
      id: 1,
      title: {
        id: 'MBG SDN Demangan 1 Positif Terkontaminasi Kuman, Hasil Uji Lab Dikirim ke BGN',
        en: 'MBG at SDN Demangan 1 Confirmed Contaminated, Lab Results Sent to BGN',
      },
      excerpt: {
        id: 'MADIUN – Dugaan keracunan makanan program Makan Bergizi Gratis di SDN 1 Demangan akhirnya terjawab.',
        en: 'MADIUN – The suspected food poisoning case from the Free Nutritious Meal program at SDN 1 Demangan has been clarified.',
      },
      image: '/images/news/madiun-today-1.jpg',
      href: 'https://madiuntoday.id/berita/2026/05/05/mbg-sdn-demangan-1-positif-terkontaminasi-kuman-hasil-uji-lab-dikirim-ke-bgn',
    },
    {
      id: 2,
      title: {
        id: 'Harga Kebutuhan Pokok di Kota Madiun Melandai, April Catat Deflasi 0,02 Persen',
        en: 'Basic Food Prices in Madiun City Ease, April Records 0.02 Percent Deflation',
      },
      excerpt: {
        id: 'MADIUN - Harga sejumlah kebutuhan pokok di Kota Madiun mulai menunjukkan penurunan setelah Lebaran.',
        en: 'MADIUN - Prices of several basic commodities in Madiun City began to decline after Eid.',
      },
      image: '/images/news/madiun-today-2.jpg',
      href: 'https://madiuntoday.id/berita/2026/05/05/harga-kebutuhan-pokok-di-kota-madiun-melandai-april-catat-deflasi-002-persen#main-slide',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#e8f0e0] py-16">
      {/* Mascot RELO top right */}
      <div className="pointer-events-none absolute right-0 top-0 w-48 -translate-y-1/4 translate-x-1/4 transform opacity-20 md:w-64">
        <img src="/maskot_KAI.png" alt="" className="h-auto w-full" />
      </div>

      {/* Mascot RASA bottom right */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-56 translate-x-1/4 translate-y-1/4 transform opacity-30 md:w-80">
        <img src="/maskot_pecel.png" alt="" className="h-auto w-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <h2 className="mb-12 text-center font-poppins text-5xl font-black tracking-tight text-primary md:text-7xl">
          {t('news.title')}
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Berita Pemerintahan */}
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="flex items-center gap-2 font-poppins text-2xl font-black text-primary md:text-3xl">
                {t('news.govNews')}
              </h3>

              <Link
                to="/madiun-terkini/berita-pemerintahan"
                className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#237227] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#06451F]"
              >
                <Eye className="h-4 w-4" />
                {t('news.viewAll')}
              </Link>
            </div>

            <div className="space-y-6">
              {beritaPemerintahan.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/madiun-terkini/berita-pemerintahan/${news.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border-2 border-transparent bg-white shadow-md transition-all duration-300 hover:border-[#237227] hover:shadow-xl sm:flex-row"
                  >
                    <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-40">
                      <img
                        src={news.image}
                        alt={news.title[lang]}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                    </div>

                    <div className="flex-1 p-5">
                      <h4 className="mb-2 line-clamp-2 font-poppins text-lg font-bold text-dark transition-colors group-hover:text-[#237227]">
                        {news.title[lang]}
                      </h4>

                      <p className="line-clamp-2 text-sm text-gray-600">
                        {news.excerpt[lang]}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#237227]">
                        {lang === 'en' ? 'Read More' : 'Baca Selengkapnya'}
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Madiun Today */}
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="flex items-center gap-2 font-poppins text-2xl font-black text-primary md:text-3xl">
                {t('news.madiunToday')}
              </h3>

              <a
                href="https://madiuntoday.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#237227] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#06451F]"
              >
                <Eye className="h-4 w-4" />
                {t('news.viewAll')}
              </a>
            </div>

            <div className="space-y-6">
              {madiunToday.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={news.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-2xl border-2 border-transparent bg-white shadow-md transition-all duration-300 hover:border-[#237227] hover:shadow-xl sm:flex-row"
                  >
                    <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-40">
                      <img
                        src={news.image}
                        alt={news.title[lang]}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                    </div>

                    <div className="flex-1 p-5">
                      <h4 className="mb-2 line-clamp-2 font-poppins text-lg font-bold text-dark transition-colors group-hover:text-[#237227]">
                        {news.title[lang]}
                      </h4>

                      <p className="line-clamp-2 text-sm text-gray-600">
                        {news.excerpt[lang]}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#237227]">
                        {lang === 'en' ? 'Open News' : 'Buka Berita'}
                        <span>→</span>
                      </span>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}