import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, ExternalLink, Filter, BedDouble, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
interface PenginapanItem {
  id: string;
  nama: string;
  descKey: string;
  mapsUrl: string;
  rating: number;
}
const penginapanItems: PenginapanItem[] = [{
  id: 'mercure',
  nama: 'Mercure Madiun',
  descKey: 'penginapan.desc.mercure',
  mapsUrl: 'https://www.google.com/maps?q=Mercure+Madiun',
  rating: 4.9
}, {
  id: 'aston',
  nama: 'Aston Madiun Hotel & Conference Center',
  descKey: 'penginapan.desc.aston',
  mapsUrl: 'https://www.google.com/maps?q=Aston+Madiun+Hotel',
  rating: 4.7
}, {
  id: 'favehotel',
  nama: 'favehotel Madiun',
  descKey: 'penginapan.desc.favehotel',
  mapsUrl: 'https://www.google.com/maps?q=favehotel+Madiun',
  rating: 4.8
}, {
  id: 'merdeka',
  nama: 'Hotel Merdeka Madiun',
  descKey: 'penginapan.desc.merdeka',
  mapsUrl: 'https://www.google.com/maps?q=Hotel+Merdeka+Madiun',
  rating: 4.1
}, {
  id: 'sun-hotel',
  nama: 'The Sun Hotel Madiun',
  descKey: 'penginapan.desc.sun-hotel',
  mapsUrl: 'https://www.google.com/maps?q=The+Sun+Hotel+Madiun',
  rating: 4.4
}, {
  id: 'amaris',
  nama: 'Amaris Hotel Madiun',
  descKey: 'penginapan.desc.amaris',
  mapsUrl: 'https://www.google.com/maps?q=Amaris+Hotel+Madiun',
  rating: 4.3
}];
export function PenginapanPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const filteredItems = penginapanItems.filter((item) => item.nama.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.nama.localeCompare(b.nama);
  });
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    return <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < fullStars ? 'fill-accent text-accent' : 'text-gray-300'}`} />)}
      </div>;
  };
  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Informasi penginapan apa yang tersedia di halaman ini?',
        answer: 'Halaman Penginapan menampilkan informasi akomodasi atau tempat menginap yang dapat membantu wisatawan, tamu kota, dan masyarakat yang membutuhkan penginapan di Kota Madiun.'
      },
      {
        question: 'Bagaimana cara melihat lokasi penginapan?',
        answer: 'Pengguna dapat melihat alamat atau tautan peta pada kartu penginapan jika tersedia, sehingga lokasi penginapan dapat dicari dengan lebih mudah.'
      },
      {
        question: 'Apakah halaman ini menyediakan informasi ketersediaan kamar?',
        answer: 'Halaman ini berfungsi sebagai informasi awal. Ketersediaan kamar, harga, dan pemesanan biasanya perlu dikonfirmasi langsung melalui kontak atau platform resmi penginapan.'
      },
      {
        question: 'Apakah penginapan terhubung dengan informasi wisata dan kuliner?',
        answer: 'Ya, informasi penginapan dapat mendukung halaman wisata dan kuliner agar pengunjung dapat merencanakan kunjungan di Kota Madiun dengan lebih mudah.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What lodging information is available on this page?',
        answer: 'The Lodging page displays accommodation information that can help tourists, city guests, and residents who need a place to stay in Madiun City.'
      },
      {
        question: 'How can users view lodging locations?',
        answer: 'Users can view addresses or map links on lodging cards when available, making accommodation locations easier to find.'
      },
      {
        question: 'Does this page provide room availability information?',
        answer: 'This page functions as initial information. Room availability, prices, and bookings usually need to be confirmed directly through official contacts or lodging platforms.'
      },
      {
        question: 'Is lodging information connected to tourism and culinary information?',
        answer: 'Yes, lodging information can support tourism and culinary pages so visitors can plan their visit to Madiun City more easily.'
      }
    ]
  }
};
  return <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-16 relative overflow-hidden">
    <SEO
      title={
        lang === 'en'
          ? 'Madiun City Accommodation'
          : 'Penginapan Kota Madiun'
      }
      description={
        lang === 'en'
          ? 'Accommodation recommendations in Madiun City, including hotels, guest houses, and places to stay near the city center.'
          : 'Rekomendasi penginapan di Kota Madiun, mulai dari hotel, guest house, hingga tempat menginap dekat pusat kota.'
      }
      keywords={
        lang === 'en'
          ? 'Madiun accommodation, hotels in Madiun, guest house in Madiun, places to stay in Madiun'
          : 'penginapan Kota Madiun, hotel di Madiun, guest house Madiun, penginapan dekat pusat kota Madiun'
      }
      url="https://domain-kamu.com/penginapan"
      lang={lang}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name:
            lang === 'en'
              ? 'Madiun City Accommodation'
              : 'Penginapan Kota Madiun',
          description:
            lang === 'en'
              ? 'A lodging information page containing accommodation recommendations, hotels, guest houses, and places to stay in Madiun City.'
              : 'Halaman informasi penginapan yang berisi rekomendasi akomodasi, hotel, guest house, dan tempat menginap di Kota Madiun.',
          inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
          url: 'https://domain-kamu.com/penginapan',
          publisher: {
            '@type': 'GovernmentOrganization',
            name: 'Pemerintah Kota Madiun',
          },
          about: {
            '@type': 'Place',
            name: 'Kota Madiun',
          },
        },
        createFAQSchema(faqText[lang].items, lang),
      ]}
    />
    
      <div className="container mx-auto px-4 md:px-8 mb-4 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-semibold shadow hover:bg-gray-100 transition">
          <ArrowLeft className="w-5 h-5" strokeWidth={3} />
        </Link>
      </div>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#1B7A3D 1px, transparent 1px), linear-gradient(90deg, #1B7A3D 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
        <motion.div animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-40 left-[10%] opacity-10 text-primary">
          <BedDouble size={64} />
        </motion.div>
        <motion.div animate={{
        y: [0, 30, 0],
        rotate: [0, -10, 0]
      }} transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1
      }} className="absolute top-80 right-[15%] opacity-10 text-accent">
          <BedDouble size={80} />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#166b30] py-12 mb-8 relative z-10 shadow-lg">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center">
            <h1 className="font-poppins text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              {t('penginapan.title')}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              {t('penginapan.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">
            {t('penginapan.breadcrumb.home')}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span>{t('penginapan.breadcrumb.jelajah')}</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-primary font-bold">
            {t('penginapan.breadcrumb.penginapan')}
          </span>
        </nav>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border-2 border-primary/10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder={t('penginapan.searchPlaceholder')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none font-medium" />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-[#166b30] transition-colors">
              <Filter className="w-5 h-5" />
              {t('page.filter')}
            </button>

            {/* Desktop Sort */}
            <div className="hidden lg:flex gap-4">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')} className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none font-medium bg-white cursor-pointer min-w-[200px]">
                <option value="rating">{t('page.sortRating')}</option>
                <option value="name">{t('page.sortName')}</option>
              </select>
            </div>
          </div>

          {/* Mobile Sort Dropdown */}
          {showFilters && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none font-medium bg-white">
                <option value="rating">{t('page.sortRating')}</option>
                <option value="name">{t('page.sortName')}</option>
              </select>
            </motion.div>}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 font-medium">
            {t('penginapan.showing')}{' '}
            <span className="text-primary font-bold">
              {filteredItems.length}
            </span>{' '}
            {t('penginapan.destinations')}
          </p>
        </div>

        {/* Penginapan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => <motion.div key={item.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: index * 0.08
        }} className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary overflow-hidden group">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-primary to-[#166b30] px-4 py-2 flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-white" />
                <p className="text-white text-xs font-bold uppercase tracking-wide">
                  {t('jelajah.penginapan')}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                {/* Hotel Name */}
                <a href={item.mapsUrl} target="_blank" rel="noopener noreferrer" className="block mb-3 group/link">
                  <h3 className="font-poppins text-xl font-bold text-dark group-hover/link:text-primary transition-colors flex items-start gap-2">
                    <BedDouble className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="flex-1">{item.nama}</span>
                  </h3>
                </a>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-1">
                  {renderStars(item.rating)}
                  <span className="font-bold text-dark">
                    {item.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-3 font-medium">
                  {t('penginapan.googleRating')}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {t(item.descKey)}
                </p>

                {/* Button */}
                <a href={item.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#166b30] text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 group-hover:scale-[1.02] mt-auto">
                  <ExternalLink className="w-4 h-4" />
                  {t('penginapan.openMaps')}
                </a>
              </div>
            </motion.div>)}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-poppins text-2xl font-bold text-gray-700 mb-2">
              {t('page.noResults')}
            </h3>
            <p className="text-gray-500">{t('page.noResultsHint')}</p>
          </div>}
          <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
      </div>
    </div>;
}