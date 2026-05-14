import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Building2, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
interface OPD {
  id: number;
  name: string;
  address: string;
  contact: string;
  category: string;
}
const opdData: OPD[] = [{
  id: 1,
  name: 'Badan Kepegawaian dan Pengembangan Sumber Daya Manusia',
  address: 'Jl. Mastrip No. 25 Kota Madiun',
  contact: 'Telp. (0351) 462230, Fax. (0351) 496964',
  category: 'Badan'
}, {
  id: 2,
  name: 'Badan Kesatuan Bangsa dan Politik (Bakesbangpol)',
  address: 'Gedung Graha Krida Jl. DI Panjaitan No.17 Kota Madiun',
  contact: 'Telp. (0351) 462153',
  category: 'Badan'
}, {
  id: 3,
  name: 'Badan Keuangan dan Aset Daerah (BKAD)',
  address: 'Jl. Semangka No. 2 Kota Madiun',
  contact: 'Telp. (0351) 476531',
  category: 'Badan'
}, {
  id: 4,
  name: 'Badan Penanggulangan Bencana Daerah (BPBD)',
  address: 'Jl. Soekarno-Hatta No. 45 Kota Madiun',
  contact: 'Telp. (0351) 482255/491991',
  category: 'Badan'
}, {
  id: 5,
  name: 'Badan Pendapatan Daerah',
  address: 'Jl. Soekarno-Hatta No. 17 Kota Madiun',
  contact: 'Telp. (0351) 464085, Fax. (0351) 464253',
  category: 'Badan'
}, {
  id: 6,
  name: 'Badan Perencanaan, Penelitian dan Pengembangan Daerah (BAPPEDA)',
  address: 'Gedung Graha Krida Jl. DI Panjaitan No. 17 Kota Madiun',
  contact: 'Telp. (0351) 471535',
  category: 'Badan'
}, {
  id: 7,
  name: 'Dinas Kebudayaan, Pariwisata, Kepemudaan dan Olah Raga',
  address: 'Jl. Udowo No. 7 Kota Madiun',
  contact: 'Telp. (0351) 2812659',
  category: 'Dinas'
}, {
  id: 8,
  name: 'Dinas Kependudukan dan Pencatatan Sipil',
  address: 'Jl. Dr. Sutomo No. 83 Kota Madiun',
  contact: 'Telp. (0351) 454301, Fax. (0351) 462792',
  category: 'Dinas'
}, {
  id: 9,
  name: 'Dinas Kesehatan, Pengendalian Penduduk dan Keluarga Berencana',
  address: 'Jl. Trunojoyo No. 120 Kota Madiun',
  contact: 'Telp. (0351) 464242',
  category: 'Dinas'
}, {
  id: 10,
  name: 'Dinas Ketahanan Pangan dan Pertanian',
  address: 'Jl. Tirta Raya No. 15 Kota Madiun',
  contact: 'Telp. (0351) 455855',
  category: 'Dinas'
}, {
  id: 11,
  name: 'Dinas Komunikasi dan Informatika',
  address: 'Jl. Perintis Kemerdekaan No. 32 Kota Madiun',
  contact: 'Telp. (0351) 467327',
  category: 'Dinas'
}, {
  id: 12,
  name: 'Dinas Lingkungan Hidup',
  address: 'Jl. Salak III No. 7A Kota Madiun',
  contact: 'Telp. (0351) 468876',
  category: 'Dinas'
}, {
  id: 13,
  name: 'Dinas Pekerjaan Umum dan Penataan Ruang',
  address: 'Gedung Graha Krida Jl. DI Panjaitan No. 17 Kota Madiun',
  contact: 'Telp. (0351) 471151',
  category: 'Dinas'
}, {
  id: 14,
  name: 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu',
  address: 'Jl. Mayjend DI Panjaitan No. 9 Kota Madiun',
  contact: 'Telp. (0351) 462314, Fax. (0351) 463242',
  category: 'Dinas'
}, {
  id: 15,
  name: 'Dinas Pendidikan',
  address: 'Jl. Mastrip No. 21 Kota Madiun',
  contact: 'Telp. (0351) 462247, Fax. (0351) 494922',
  category: 'Dinas'
}, {
  id: 16,
  name: 'Dinas Perdagangan',
  address: 'Jl. Salak No. 67 Kota Madiun',
  contact: 'Telp. (0351) 473929, Fax. (0351) 485081',
  category: 'Dinas'
}, {
  id: 17,
  name: 'Dinas Perhubungan',
  address: 'Jl. Hayam Wuruk No. 62 Kota Madiun',
  contact: 'Telp. (0351) 4472235 / 4472377, Fax. 499041',
  category: 'Dinas'
}, {
  id: 18,
  name: 'Dinas Perpustakaan dan Kearsipan',
  address: 'Jl. HA. Salim No. 39 Kota Madiun',
  contact: 'Telp. (0351) 469020',
  category: 'Dinas'
}, {
  id: 19,
  name: 'Dinas Perumahan Rakyat dan Kawasan Permukiman',
  address: 'Gedung Graha Krida Jl. Letjen DI Panjaitan No. 17 Lt. 3 Kota Madiun',
  contact: 'Telp. (0351) 2812737',
  category: 'Dinas'
}, {
  id: 20,
  name: 'Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak',
  address: 'Jl. Salak No. 51 Kota Madiun',
  contact: 'Telp. (0351) 465611',
  category: 'Dinas'
}, {
  id: 21,
  name: 'Dinas Tenaga Kerja, Koperasi Usaha Kecil Dan Menengah',
  address: 'Jl. Bolodewo No. 8 Kota Madiun',
  contact: 'Telp. (0351) 454288',
  category: 'Dinas'
}, {
  id: 22,
  name: 'Inspektorat Kota Madiun',
  address: 'Jl. Dr. Sutomo No.82 Kota Madiun',
  contact: 'Telp. (0351) 458322, Fax. (0351) 458322',
  category: 'Lainnya'
}, {
  id: 23,
  name: 'Kecamatan Kartoharjo',
  address: 'Jl. Pelita Tama No. 54 Kota Madiun',
  contact: 'Telp. (0351) 455844',
  category: 'Kecamatan'
}, {
  id: 24,
  name: 'Kecamatan Manguharjo',
  address: 'Jl. Gajah Mada No. 22 Kota Madiun',
  contact: 'Telp. (0351) 463123',
  category: 'Kecamatan'
}, {
  id: 25,
  name: 'Kecamatan Taman',
  address: 'Jl. Taman Praja No. 99 Kota Madiun',
  contact: 'Telp. (0351) 463297',
  category: 'Kecamatan'
}, {
  id: 26,
  name: 'Kelurahan Banjarejo',
  address: 'Jl. Sekolahan No. 15 Kota Madiun',
  contact: 'Telp. (0351) 498520',
  category: 'Kelurahan'
}, {
  id: 27,
  name: 'Kelurahan Demangan',
  address: 'Jl. Jati Siwur No. 15 Kota Madiun',
  contact: 'Telp. (0351) 491820',
  category: 'Kelurahan'
}, {
  id: 28,
  name: 'Kelurahan Josenan',
  address: 'Jl. Cokrobasonto No. 44 Kota Madiun',
  contact: 'Telp. (0351) 468425',
  category: 'Kelurahan'
}, {
  id: 29,
  name: 'Kelurahan Kanigoro',
  address: 'Jl. Sri Widodo No. 1 Kota Madiun',
  contact: 'Telp. (0351) 465005',
  category: 'Kelurahan'
}, {
  id: 30,
  name: 'Kelurahan Kartoharjo',
  address: 'Jl. Sulawesi No.16 Kota Madiun',
  contact: 'Telp. (0351) 458909',
  category: 'Kelurahan'
}, {
  id: 31,
  name: 'Kelurahan Kejuron',
  address: 'Jl. Kapten Saputro No. 71 Kota Madiun',
  contact: 'Telp. (0351) 464544',
  category: 'Kelurahan'
}, {
  id: 32,
  name: 'Kelurahan Kelun',
  address: 'Jl. Jenggolo Puro No. 10 Kota Madiun',
  contact: 'Telp. (0351) 492829',
  category: 'Kelurahan'
}, {
  id: 33,
  name: 'Kelurahan Klegen',
  address: 'Jl. Thamrin No. 30 Kota Madiun',
  contact: 'Telp. (0351) 452345',
  category: 'Kelurahan'
}, {
  id: 34,
  name: 'Kelurahan Kuncen',
  address: 'Jl. Masjid Raya No. 16 Kota Madiun',
  contact: 'Telp. (0351) 469520',
  category: 'Kelurahan'
}, {
  id: 35,
  name: 'Kelurahan Madiun Lor',
  address: 'Jl. Candi Sewu No. 4 Kota Madiun',
  contact: 'Telp. (0351) 497046',
  category: 'Kelurahan'
}, {
  id: 36,
  name: 'Kelurahan Manguharjo',
  address: 'Jl. Hayam Wuruk No. 62 Kota Madiun',
  contact: 'Telp. (0351) 494343',
  category: 'Kelurahan'
}, {
  id: 37,
  name: 'Kelurahan Manisrejo',
  address: 'Jl. Tanjung Raya No. 44 Kota Madiun',
  contact: 'Telp. (0351) 468244',
  category: 'Kelurahan'
}, {
  id: 38,
  name: 'Kelurahan Mojorejo',
  address: 'Jl. Setia Budi No. 32 Kota Madiun',
  contact: 'Telp. (0351) 494188',
  category: 'Kelurahan'
}, {
  id: 39,
  name: 'Kelurahan Nambangan Kidul',
  address: 'Jl. Merak No. 4B Kota Madiun',
  contact: 'Telp. (0351) 467967',
  category: 'Kelurahan'
}, {
  id: 40,
  name: 'Kelurahan Nambangan Lor',
  address: 'Jl. Merpati No. 75 Kota Madiun',
  contact: 'Telp. (0351) 493137',
  category: 'Kelurahan'
}, {
  id: 41,
  name: 'Kelurahan Ngegong',
  address: 'Jl. Keningar No. 12 Kota Madiun',
  contact: 'Telp. (0351) 468770',
  category: 'Kelurahan'
}, {
  id: 42,
  name: 'Kelurahan Oro-Oro Ombo',
  address: 'Jl. Letjen S. Parman No. 22 Kota Madiun',
  contact: 'Telp. (0351) 467376',
  category: 'Kelurahan'
}, {
  id: 43,
  name: 'Kelurahan Pandean',
  address: 'Jl. Serayu Timur No. 5 Kota Madiun',
  contact: 'Telp. (0351) 497144',
  category: 'Kelurahan'
}, {
  id: 44,
  name: 'Kelurahan Pangongangan',
  address: 'Jl. Pandan No. 2 Kota Madiun',
  contact: 'Telp. (0351) 467527',
  category: 'Kelurahan'
}, {
  id: 45,
  name: 'Kelurahan Patihan',
  address: 'Jl. Mendut No. 55 Kota Madiun',
  contact: 'Telp. (0351) 469697',
  category: 'Kelurahan'
}, {
  id: 46,
  name: 'Kelurahan Pilangbango',
  address: 'Jl. Pilang Madya No. 2 Kota Madiun',
  contact: 'Telp. (0351) 494006',
  category: 'Kelurahan'
}, {
  id: 47,
  name: 'Kelurahan Rejomulyo',
  address: 'Jl. Manggala Mulya No. 3 Kota Madiun',
  contact: 'Telp. (0351) 467661',
  category: 'Kelurahan'
}, {
  id: 48,
  name: 'Kelurahan Sogaten',
  address: 'Jl. Puspowarno No.16 Kota Madiun',
  contact: 'Telp. (0351) 455700',
  category: 'Kelurahan'
}, {
  id: 49,
  name: 'Kelurahan Sukosari',
  address: 'Jl. Basuki Rahmad No. 2 Kota Madiun',
  contact: 'Telp. (0351) 467041',
  category: 'Kelurahan'
}, {
  id: 50,
  name: 'Kelurahan Taman',
  address: 'Jl. Salak No. 61 Kota Madiun',
  contact: 'Telp. (0351) 464645',
  category: 'Kelurahan'
}, {
  id: 51,
  name: 'Kelurahan Tawangrejo',
  address: 'Jl. Tawang Sakti No. 57 Kota Madiun',
  contact: 'Telp. (0351) 468922',
  category: 'Kelurahan'
}, {
  id: 52,
  name: 'Kelurahan Winongo',
  address: 'Jl. Gajah Mada Kota Madiun',
  contact: 'Telp. (0351) 492587',
  category: 'Kelurahan'
}, {
  id: 53,
  name: 'PDAM Kota Madiun',
  address: 'Jl. Sulawesi No. 18 Kota Madiun',
  contact: 'Telp. (0351) 464205',
  category: 'Lainnya'
}, {
  id: 54,
  name: 'PD. Aneka Usaha',
  address: 'Jl. A. Yani No. 11 Kota Madiun',
  contact: 'Telp. (0351) 454490',
  category: 'Lainnya'
}, {
  id: 55,
  name: 'PD. BPR Bank Daerah',
  address: 'Jl. Imam Bonjol No. 70 Kota Madiun',
  contact: 'Telp. (0351) 452589, Fax. (0351) 453296',
  category: 'Lainnya'
}, {
  id: 56,
  name: 'RSUD Sogaten Kota Madiun',
  address: 'Jl. Campursari No. 12B Kota Madiun',
  contact: 'Telp. (0351) 481314',
  category: 'Lainnya'
}, {
  id: 57,
  name: 'Satuan Polisi Pamong Praja dan Pemadam Kebakaran',
  address: 'Jl. Sombo No. 6 Kota Madiun',
  contact: 'Telp. (0351) 463258',
  category: 'Lainnya'
}, {
  id: 58,
  name: 'Sekretariat Daerah Kota Madiun',
  address: 'Jl. Pahlawan No. 37 Kota Madiun',
  contact: 'Telp. (0351) 462756, Fax. (0351) 457331',
  category: 'Sekretariat'
}, {
  id: 59,
  name: 'Sekretariat DPRD Kota Madiun',
  address: 'Jl. Perintis Kemerdekaan No. 32 Kota Madiun',
  contact: 'Telp. (0351) 454588',
  category: 'Sekretariat'
}];
export function PerangkatDaerahPage() {
  const {
    t
  } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const categories = [{
    id: 'Semua',
    label: t('profil.opd.filterAll')
  }, {
    id: 'Badan',
    label: t('profil.opd.filterBadan')
  }, {
    id: 'Dinas',
    label: t('profil.opd.filterDinas')
  }, {
    id: 'Kecamatan',
    label: t('profil.opd.filterKecamatan')
  }, {
    id: 'Kelurahan',
    label: t('profil.opd.filterKelurahan')
  }, {
    id: 'Sekretariat',
    label: t('profil.opd.filterSekretariat')
  }, {
    id: 'Lainnya',
    label: t('profil.opd.filterLainnya')
  }];
  const filteredData = useMemo(() => {
    return opdData.filter((opd) => {
      const matchesSearch = opd.name.toLowerCase().includes(searchQuery.toLowerCase()) || opd.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'Semua' || opd.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);
  return <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
    <SEO
      title="Perangkat Daerah Kota Madiun"
      description="Informasi daftar perangkat daerah, organisasi perangkat daerah, dan alamat OPD di lingkungan Pemerintah Kota Madiun."
      keywords="Perangkat Daerah Kota Madiun, OPD Kota Madiun, alamat OPD Madiun, Pemerintah Kota Madiun"
      url="https://domain-kamu.com/profil/perangkat-daerah"
      lang="id"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Perangkat Daerah Kota Madiun',
        description:
        'Daftar perangkat daerah dan organisasi perangkat daerah Pemerintah Kota Madiun.',
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
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shrink-0">
              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
                {t('profil.opd.title')}
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
        <div className="max-w-6xl mx-auto">
          {/* Toolbar */}
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder={t('profil.opd.searchPlaceholder')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
            </div>
            <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end">
              {categories.map((cat) => <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-primary text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>
                  {cat.label}
                </button>)}
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-4 px-6 font-bold text-gray-700 w-16 text-center">
                      {t('profil.opd.tableNo')}
                    </th>
                    <th className="py-4 px-6 font-bold text-gray-700">
                      {t('profil.opd.tableInstansi')}
                    </th>
                    <th className="py-4 px-6 font-bold text-gray-700">
                      {t('profil.opd.tableAlamat')}
                    </th>
                    <th className="py-4 px-6 font-bold text-gray-700">
                      {t('profil.opd.tableKontak')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? filteredData.map((opd, index) => <tr key={opd.id} className="border-b border-gray-50 hover:bg-green-50/50 transition-colors">
                        <td className="py-4 px-6 text-gray-500 text-center">
                          {index + 1}
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-800">
                          {opd.name}
                        </td>
                        <td className="py-4 px-6 text-gray-600 text-sm">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{opd.address}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600 text-sm">
                          <div className="flex items-start gap-2">
                            <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{opd.contact}</span>
                          </div>
                        </td>
                      </tr>) : <tr>
                      <td colSpan={4} className="py-12 text-center text-gray-500">
                        {t('page.noResults')}
                      </td>
                    </tr>}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">
              {filteredData.length > 0 ? filteredData.map((opd, index) => <div key={opd.id} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-gray-800 leading-tight">
                        {opd.name}
                      </h3>
                    </div>
                    <div className="space-y-2 pl-11">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{opd.address}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{opd.contact}</span>
                      </div>
                    </div>
                  </div>) : <div className="py-12 text-center text-gray-500">
                  {t('page.noResults')}
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
}