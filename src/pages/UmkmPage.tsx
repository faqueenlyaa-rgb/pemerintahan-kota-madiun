import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Store,
  CalendarDays,
  BarChart3,
  Sparkles,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type UmkmData = {
  year: number;
  pertanian: number;
  pertambangan: number;
  industri: number;
  listrik: number;
  konstruksi: number;
  perdagangan: number;
  transportasi: number;
  keuangan: number;
  jasa: number;
  total: number;
};

type CategoryKey =
  | 'pertanian'
  | 'pertambangan'
  | 'industri'
  | 'listrik'
  | 'konstruksi'
  | 'perdagangan'
  | 'transportasi'
  | 'keuangan'
  | 'jasa';

type Category = {
  key: CategoryKey;
  labelKey: string;
  color: string;
  softColor: string;
};

const palette = {
  darkGreen: '#237227',
  lightGreen: '#519A66',
  yellow: '#FFAA00',
  cream: '#FFD786',
  softCream: '#FFF4DC',
  softGreen: '#E6F3E8',
  softYellow: '#FFF1CC',
  text: '#17391B',
};

const rawData: UmkmData[] = [
  {
    year: 2017,
    pertanian: 1554,
    pertambangan: 26,
    industri: 1041,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14601,
    transportasi: 2111,
    keuangan: 98,
    jasa: 3806,
    total: 23279,
  },
  {
    year: 2018,
    pertanian: 1554,
    pertambangan: 26,
    industri: 1119,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14604,
    transportasi: 2111,
    keuangan: 98,
    jasa: 3806,
    total: 23360,
  },
  {
    year: 2019,
    pertanian: 1554,
    pertambangan: 26,
    industri: 1170,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14634,
    transportasi: 2111,
    keuangan: 98,
    jasa: 3822,
    total: 23457,
  },
  {
    year: 2020,
    pertanian: 1554,
    pertambangan: 26,
    industri: 1238,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14654,
    transportasi: 2111,
    keuangan: 98,
    jasa: 3822,
    total: 23545,
  },
  {
    year: 2021,
    pertanian: 1554,
    pertambangan: 26,
    industri: 1288,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14677,
    transportasi: 2111,
    keuangan: 98,
    jasa: 3822,
    total: 23618,
  },
  {
    year: 2022,
    pertanian: 1554,
    pertambangan: 26,
    industri: 1342,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14677,
    transportasi: 2111,
    keuangan: 98,
    jasa: 3822,
    total: 23672,
  },
  {
    year: 2023,
    pertanian: 1555,
    pertambangan: 26,
    industri: 1367,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14738,
    transportasi: 2111,
    keuangan: 98,
    jasa: 3831,
    total: 23768,
  },
  {
    year: 2024,
    pertanian: 1555,
    pertambangan: 26,
    industri: 1425,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14738,
    transportasi: 2111,
    keuangan: 98,
    jasa: 4025,
    total: 24020,
  },
  {
    year: 2025,
    pertanian: 1555,
    pertambangan: 26,
    industri: 3824,
    listrik: 0,
    konstruksi: 42,
    perdagangan: 14738,
    transportasi: 2111,
    keuangan: 98,
    jasa: 6626,
    total: 29020,
  },
];

const categories: Category[] = [
  {
    key: 'pertanian',
    labelKey: 'umkm.cat.pertanian',
    color: '#237227',
    softColor: '#E6F3E8',
  },
  {
    key: 'pertambangan',
    labelKey: 'umkm.cat.pertambangan',
    color: '#519A66',
    softColor: '#EAF5ED',
  },
  {
    key: 'industri',
    labelKey: 'umkm.cat.industri',
    color: '#FFAA00',
    softColor: '#FFF1CC',
  },
  {
    key: 'listrik',
    labelKey: 'umkm.cat.listrik',
    color: '#FFD786',
    softColor: '#FFF6E6',
  },
  {
    key: 'konstruksi',
    labelKey: 'umkm.cat.konstruksi',
    color: '#237227',
    softColor: '#E6F3E8',
  },
  {
    key: 'perdagangan',
    labelKey: 'umkm.cat.perdagangan',
    color: '#519A66',
    softColor: '#EAF5ED',
  },
  {
    key: 'transportasi',
    labelKey: 'umkm.cat.transportasi',
    color: '#FFAA00',
    softColor: '#FFF1CC',
  },
  {
    key: 'keuangan',
    labelKey: 'umkm.cat.keuangan',
    color: '#FFD786',
    softColor: '#FFF6E6',
  },
  {
    key: 'jasa',
    labelKey: 'umkm.cat.jasa',
    color: '#237227',
    softColor: '#E6F3E8',
  },
];

const formatNumber = (value: number) => value.toLocaleString('id-ID');

export function UmkmPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';

  const [startYear, setStartYear] = useState(2017);
  const [endYear, setEndYear] = useState(2025);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | 'all'>(
    'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeYear, setActiveYear] = useState(2025);

  const years = rawData.map((item) => item.year);

  const filteredYearData = useMemo(() => {
    return rawData.filter(
      (item) => item.year >= startYear && item.year <= endYear
    );
  }, [startYear, endYear]);

  const selectedCategoryData = useMemo(() => {
    return categories.find((category) => category.key === selectedCategory) || null;
  }, [selectedCategory]);

  const activeData =
    rawData.find((item) => item.year === activeYear) ||
    rawData[rawData.length - 1];

  const firstData =
    rawData.find((item) => item.year === startYear) || rawData[0];

  const latestData =
    rawData.find((item) => item.year === endYear) ||
    rawData[rawData.length - 1];

  const chartData = useMemo(() => {
    return filteredYearData.map((item) => {
      const value =
        selectedCategoryData !== null ? item[selectedCategoryData.key] : item.total;

      return {
        ...item,
        displayValue: value,
      };
    });
  }, [filteredYearData, selectedCategoryData]);

  const mainValue =
    selectedCategoryData !== null
      ? activeData[selectedCategoryData.key]
      : activeData.total;

  const startValue =
    selectedCategoryData !== null
      ? firstData[selectedCategoryData.key]
      : firstData.total;

  const growth = mainValue - startValue;

  const growthPercent =
    startValue === 0 ? 0 : Number(((growth / startValue) * 100).toFixed(1));

  const trendLabel =
    growth > 0
      ? lang === 'en'
        ? 'Keeps increasing'
        : 'Terus meningkat'
      : growth < 0
        ? lang === 'en'
          ? 'Decreasing'
          : 'Menurun'
        : lang === 'en'
          ? 'Stable'
          : 'Stabil';

  const categoryCards = useMemo(() => {
    return categories
      .map((category) => {
        const active = activeData[category.key];
        const first = firstData[category.key];
        const diff = active - first;
        const percent =
          first === 0 ? 0 : Number(((diff / first) * 100).toFixed(1));

        const miniData = rawData.map((item) => ({
          year: item.year,
          value: item[category.key],
        }));

        return {
          ...category,
          active,
          first,
          diff,
          percent,
          miniData,
        };
      })
      .sort((a, b) => b.active - a.active);
  }, [activeData, firstData]);

  const searchedCategoryCards = useMemo(() => {
    return categoryCards.filter((category) =>
      t(category.labelKey).toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [categoryCards, searchQuery, t]);

  const biggestCategory = categoryCards[0];

  const topCategories = categoryCards.slice(0, 3);

  const handleReset = () => {
    setStartYear(2017);
    setEndYear(2025);
    setSelectedCategory('all');
    setSearchQuery('');
    setActiveYear(2025);
  };

  const handleChartClick = (payload: any) => {
    const year =
      payload?.activeLabel || payload?.activePayload?.[0]?.payload?.year;

    if (year) {
      setActiveYear(Number(year));
    }
  };

  const faqText = {
  id: {
    title: 'Pertanyaan Umum',
    items: [
      {
        question: 'Apa isi halaman UMKM Kota Madiun?',
        answer: 'Halaman UMKM Kota Madiun menampilkan data jumlah UMKM berdasarkan sektor atau lapangan usaha dari tahun 2017 sampai 2025 dalam bentuk dashboard, grafik, dan tabel.'
      },
      {
        question: 'Bagaimana cara melihat perkembangan UMKM dari tahun ke tahun?',
        answer: 'Pengguna dapat melihat perkembangan UMKM melalui grafik tren dan tabel data tahunan. Data dapat difilter berdasarkan rentang tahun dan kategori sektor usaha.'
      },
      {
        question: 'Apa manfaat dashboard UMKM bagi masyarakat?',
        answer: 'Dashboard UMKM membantu masyarakat melihat sektor usaha yang berkembang, jumlah UMKM per tahun, serta potensi ekonomi Kota Madiun secara lebih mudah dan visual.'
      },
      {
        question: 'Apakah data UMKM bisa dilihat berdasarkan kategori usaha?',
        answer: 'Ya, pengguna dapat memilih kategori usaha tertentu untuk melihat data UMKM yang lebih spesifik sesuai sektor yang tersedia di dashboard.'
      },
      {
        question: 'Di mana saya bisa mengakses layanan pendukung UMKM?',
        answer: 'Layanan pendukung UMKM dapat diakses melalui halaman Info Pasar atau layanan digital terkait seperti Marketplace, Pro UMKM, dan E-Sayur jika tersedia pada portal resmi.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What does the Madiun City MSME page contain?',
        answer: 'The Madiun City MSME page displays MSME data by sector or business field from 2017 to 2025 through dashboards, charts, and tables.'
      },
      {
        question: 'How can users view MSME development from year to year?',
        answer: 'Users can view MSME development through trend charts and annual data tables. The data can be filtered by year range and business sector category.'
      },
      {
        question: 'What is the benefit of the MSME dashboard for the public?',
        answer: 'The MSME dashboard helps users understand growing business sectors, annual MSME numbers, and the economic potential of Madiun City in a more visual way.'
      },
      {
        question: 'Can MSME data be viewed by business category?',
        answer: 'Yes, users can select a specific business category to view MSME data based on the available sectors in the dashboard.'
      },
      {
        question: 'Where can I access MSME support services?',
        answer: 'MSME support services can be accessed through the Market Information page or related digital services such as Marketplace, Pro UMKM, and E-Sayur when available on official portals.'
      }
    ]
  }
};

  const MainTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;

    return (
      <div className="rounded-2xl border border-[#FFD786]/80 bg-[#FFF4DC]/95 p-4 shadow-xl backdrop-blur-md">
        <p className="mb-2 font-poppins font-black text-[#17391B]">
          {label}
        </p>

        {payload.map((entry: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between gap-6 text-sm"
          >
            <span className="font-semibold text-[#237227]">
              {entry.name}
            </span>

            <span className="font-black text-[#17391B]">
              {formatNumber(Number(entry.value))}
            </span>
          </div>
        ))}

        <p className="mt-2 text-xs font-semibold text-[#519A66]">
          {lang === 'en'
            ? 'Click this point to highlight the year'
            : 'Klik titik ini untuk highlight tahun'}
        </p>
      </div>
    );
  };

  const MiniTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;

    return (
      <div className="rounded-xl border border-[#FFD786]/80 bg-[#FFF4DC] px-3 py-2 text-xs shadow-lg">
        <p className="font-bold text-[#17391B]">{label}</p>

        <p className="font-black text-[#237227]">
          {formatNumber(Number(payload[0].value))}
        </p>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#FFF4DC] pt-32 pb-16">
      <SEO
        title={
          lang === 'en'
            ? 'Madiun City MSME Data Dashboard'
            : 'Dashboard Data UMKM Kota Madiun'
        }
        description={
          lang === 'en'
            ? 'Interactive MSME data dashboard for Madiun City by business sector from 2017 to 2025.'
            : 'Dashboard interaktif data UMKM Kota Madiun berdasarkan sektor usaha dari tahun 2017 sampai 2025.'
        }
        keywords={
          lang === 'en'
            ? 'Madiun MSME data, Madiun business sector, MSME dashboard, Madiun economy'
            : 'UMKM Kota Madiun, data UMKM Madiun, dashboard UMKM, sektor usaha Madiun, ekonomi Madiun'
        }
        url="https://pemerintahan-kota-madiun.vercel.app/umkm"
        lang={lang}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name:
              lang === 'en'
                ? 'Madiun City MSME Data 2017-2025'
                : 'Data UMKM Kota Madiun 2017-2025',
            description:
              lang === 'en'
                ? 'Dataset of Madiun City MSMEs by sector or business field from 2017 to 2025.'
                : 'Dataset jumlah UMKM Kota Madiun berdasarkan sektor atau lapangan usaha dari tahun 2017 sampai 2025.',
            inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
            creator: {
              '@type': 'GovernmentOrganization',
              name: 'Pemerintah Kota Madiun',
            },
            spatialCoverage: {
              '@type': 'Place',
              name: 'Kota Madiun',
            },
            temporalCoverage: '2017/2025',
          },
          createFAQSchema(faqText[lang].items, lang),
        ]}
      />

      <div className="container mx-auto px-4 md:px-8 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#237227] font-semibold shadow hover:bg-[#FFD786]/30 transition"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={3} />
        </Link>
      </div>

      <section className="mx-4 mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#237227] via-[#519A66] to-[#FFAA00] py-14 shadow-xl md:mx-8">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD786]/20 ring-1 ring-white/30">
              <Store className="h-8 w-8 text-white" />
            </div>

            <h1 className="font-poppins text-3xl font-black tracking-tight text-white md:text-5xl">
              {t('umkm.title')}
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base font-medium text-white/90 md:text-lg">
              {t('umkm.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">
        <section className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-4">
          <motion.div
            whileHover={{ y: -4 }}
            className="lg:col-span-2 rounded-[2rem] border border-[#FFD786] bg-white p-7 shadow-sm"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor:
                      selectedCategoryData?.softColor || palette.softGreen,
                  }}
                >
                  <BarChart3
                    className="h-8 w-8"
                    style={{
                      color: selectedCategoryData?.color || palette.darkGreen,
                    }}
                  />
                </div>

                <h2 className="font-poppins text-2xl font-black text-[#17391B] md:text-3xl">
                  {selectedCategoryData
                    ? t(selectedCategoryData.labelKey)
                    : lang === 'en'
                      ? 'Total MSMEs'
                      : 'Total UMKM'}
                </h2>

                <p className="mt-1 text-[#519A66]">
                  {lang === 'en'
                    ? `MSME count in ${activeYear}`
                    : `Jumlah UMKM tahun ${activeYear}`}
                </p>

                <div className="mt-5 flex flex-wrap items-end gap-4">
                  <span
                    className="text-6xl font-black"
                    style={{
                      color: selectedCategoryData?.color || palette.darkGreen,
                    }}
                  >
                    {formatNumber(mainValue)}
                  </span>

                  <span className="mb-2 text-lg font-bold text-[#519A66]">
                    {t('umkm.unit')}
                  </span>
                </div>

                <div
                  className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black ${
                    growth >= 0
                      ? 'bg-[#E6F3E8] text-[#237227]'
                      : 'bg-red-50 text-red-600'
                  }`}
                >
                  {growth >= 0 ? (
                    <TrendingUp className="h-5 w-5" />
                  ) : (
                    <TrendingDown className="h-5 w-5" />
                  )}

                  {growth >= 0 ? '+' : ''}
                  {formatNumber(growth)} ({growthPercent}%)
                </div>

                <p className="mt-2 text-sm text-[#519A66]">
                  {lang === 'en'
                    ? `compared to ${startYear}`
                    : `dibanding ${startYear}`}
                </p>
              </div>

              <div className="rounded-2xl border border-[#FFD786] bg-[#FFF4DC] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F3E8]">
                    <TrendingUp className="h-6 w-6 text-[#237227]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#519A66]">
                      Tren {startYear}–{endYear}
                    </p>

                    <p className="font-poppins text-xl font-black text-[#237227]">
                      {trendLabel}
                    </p>

                    <p className="text-xs font-semibold text-[#519A66]">
                      {lang === 'en'
                        ? 'interactive insight'
                        : 'insight interaktif'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-[#FFD786] bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF1CC]">
              <CalendarDays className="h-6 w-6 text-[#FFAA00]" />
            </div>

            <p className="mb-2 text-sm font-bold text-[#519A66]">
              {lang === 'en' ? 'Active Year' : 'Tahun Aktif'}
            </p>

            <h3 className="text-4xl font-black text-[#FFAA00]">
              {activeYear}
            </h3>

            <p className="mt-2 text-xs text-[#519A66]">
              {lang === 'en'
                ? 'Click chart point to change'
                : 'Klik titik chart untuk mengubah'}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-[#FFD786] bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F3E8]">
              <Sparkles className="h-6 w-6 text-[#237227]" />
            </div>

            <p className="mb-2 text-sm font-bold text-[#519A66]">
              {lang === 'en' ? 'Largest Sector' : 'Sektor Terbesar'}
            </p>

            <h3 className="font-poppins text-xl font-black leading-tight text-[#17391B]">
              {t(biggestCategory.labelKey)}
            </h3>

            <p className="mt-2 text-sm font-black text-[#237227]">
              {formatNumber(biggestCategory.active)} {t('umkm.unit')}
            </p>
          </motion.div>
        </section>

        <section className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {topCategories.map((category, index) => (
            <motion.button
              type="button"
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              whileHover={{ y: -4 }}
              className={`text-left rounded-[1.75rem] p-5 shadow-sm transition ${
                selectedCategory === category.key
                  ? 'ring-4 ring-[#FFAA00]/35'
                  : ''
              } ${
                index === 0
                  ? 'bg-[#237227] text-white'
                  : 'border border-[#FFD786] bg-white text-[#17391B]'
              }`}
            >
              <p
                className={`text-xs font-black ${
                  index === 0 ? 'text-[#FFD786]' : 'text-[#519A66]'
                }`}
              >
                TOP 0{index + 1}
              </p>

              <h3 className="mt-1 font-poppins text-lg font-black">
                {t(category.labelKey)}
              </h3>

              <p
                className={`mt-3 text-3xl font-black ${
                  index === 0 ? 'text-white' : 'text-[#237227]'
                }`}
              >
                {formatNumber(category.active)}
              </p>

              <p
                className={`mt-1 text-xs font-semibold ${
                  index === 0 ? 'text-white/75' : 'text-[#519A66]'
                }`}
              >
                {lang === 'en'
                  ? `in ${activeYear}`
                  : `pada tahun ${activeYear}`}
              </p>
            </motion.button>
          ))}
        </section>

        <section className="mb-8 rounded-[1.75rem] border border-[#FFD786] bg-white p-6 shadow-sm">
          <div className="flex flex-col items-end gap-6 md:flex-row">
            <div className="w-full flex-1">
              <label className="mb-2 block text-sm font-black text-[#17391B]">
                {t('umkm.filterYearRange')}
              </label>

              <div className="flex items-center gap-2">
                <select
                  value={startYear}
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    setStartYear(value);
                    if (activeYear < value) setActiveYear(value);
                  }}
                  className="w-full rounded-xl border border-[#FFD786] bg-[#FFF4DC] px-4 py-3 outline-none focus:border-[#237227]"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <span className="font-black text-[#519A66]">-</span>

                <select
                  value={endYear}
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    setEndYear(value);
                    if (activeYear > value) setActiveYear(value);
                  }}
                  className="w-full rounded-xl border border-[#FFD786] bg-[#FFF4DC] px-4 py-3 outline-none focus:border-[#237227]"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full flex-1">
              <label className="mb-2 block text-sm font-black text-[#17391B]">
                {t('umkm.filterCategory')}
              </label>

              <select
                value={selectedCategory}
                onChange={(event) =>
                  setSelectedCategory(event.target.value as CategoryKey | 'all')
                }
                className="w-full rounded-xl border border-[#FFD786] bg-[#FFF4DC] px-4 py-3 outline-none focus:border-[#237227]"
              >
                <option value="all">{t('page.allCategories')}</option>

                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {t(category.labelKey)}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative w-full flex-1">
              <label className="mb-2 block text-sm font-black text-[#17391B]">
                {t('umkm.searchCategory')}
              </label>

              <Search className="absolute left-3 top-[43px] h-4 w-4 text-[#519A66]" />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={t('umkm.searchCategory')}
                className="w-full rounded-xl border border-[#FFD786] bg-[#FFF4DC] py-3 pl-10 pr-4 outline-none focus:border-[#237227]"
              />
            </div>

            <button
              onClick={handleReset}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#237227] px-6 py-3 font-black text-white transition hover:bg-[#1b5b1f] md:w-auto"
            >
              <RefreshCw className="h-4 w-4" />
              {t('umkm.resetFilter')}
            </button>
          </div>

          {(selectedCategory !== 'all' || activeYear !== 2025) && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {selectedCategory !== 'all' && selectedCategoryData && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#E6F3E8] px-4 py-2 text-sm font-black text-[#237227]"
                >
                  {t(selectedCategoryData.labelKey)}
                  <X className="h-4 w-4" />
                </button>
              )}

              {activeYear !== 2025 && (
                <button
                  onClick={() => setActiveYear(2025)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFF1CC] px-4 py-2 text-sm font-black text-[#9A6700]"
                >
                  {activeYear}
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </section>

        <section className="mb-12 rounded-[2rem] border border-[#FFD786] bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-black text-[#17391B]">
                <span
                  className="h-7 w-2 rounded-full"
                  style={{
                    backgroundColor: selectedCategoryData?.color || '#237227',
                  }}
                />

                {selectedCategoryData
                  ? t(selectedCategoryData.labelKey)
                  : lang === 'en'
                    ? 'Total MSME Trend'
                    : 'Tren Total UMKM'}
              </h2>

              <p className="mt-1 text-sm text-[#519A66]">
                {lang === 'en'
                  ? 'Click a point to highlight a year. Click a category card to filter the chart.'
                  : 'Klik titik untuk highlight tahun. Klik card kategori untuk memfilter chart.'}
              </p>
            </div>

            <div className="rounded-2xl border border-[#FFD786] bg-[#FFF4DC] px-4 py-3 text-sm font-black text-[#237227]">
              {selectedCategoryData
                ? t(selectedCategoryData.labelKey)
                : lang === 'en'
                  ? 'All sectors'
                  : 'Semua sektor'}
            </div>
          </div>

          <div className="h-[480px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  top: 30,
                  right: 35,
                  bottom: 35,
                  left: 10,
                }}
                onClick={handleChartClick}
              >
                <defs>
                  <linearGradient id="mainArea" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={selectedCategoryData?.color || '#237227'}
                      stopOpacity={0.34}
                    />

                    <stop offset="70%" stopColor="#FFD786" stopOpacity={0.2} />

                    <stop offset="100%" stopColor="#FFF4DC" stopOpacity={0.03} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="#FFD786"
                  strokeOpacity={0.65}
                />

                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#17391B',
                    fontWeight: 700,
                  }}
                  dy={12}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#519A66',
                    fontSize: 12,
                  }}
                  dx={-8}
                />

                <Tooltip
                  content={<MainTooltip />}
                  cursor={{
                    stroke: '#FFD786',
                    strokeDasharray: '4 4',
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="displayValue"
                  name={
                    selectedCategoryData
                      ? t(selectedCategoryData.labelKey)
                      : lang === 'en'
                        ? 'Total MSMEs'
                        : 'Total UMKM'
                  }
                  stroke={selectedCategoryData?.color || '#237227'}
                  strokeWidth={4}
                  fill="url(#mainArea)"
                  dot={(props: any) => {
                    const isActive = props.payload.year === activeYear;

                    return (
                      <circle
                        cx={props.cx}
                        cy={props.cy}
                        r={isActive ? 8 : 6}
                        fill={isActive ? '#FFAA00' : '#FFF4DC'}
                        stroke={selectedCategoryData?.color || '#237227'}
                        strokeWidth={isActive ? 4 : 3}
                        className="cursor-pointer"
                      />
                    );
                  }}
                  activeDot={{
                    r: 9,
                    fill: '#FFAA00',
                    stroke: '#FFF4DC',
                    strokeWidth: 3,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-black text-[#17391B]">
                <span className="h-7 w-2 rounded-full bg-[#FFAA00]" />
                {t('umkm.trendPerCategory')}
              </h2>

              <p className="mt-1 text-sm text-[#519A66]">
                {lang === 'en'
                  ? 'Click one card to focus the main chart.'
                  : 'Klik salah satu card untuk memfokuskan chart utama.'}
              </p>
            </div>

            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="rounded-full bg-white px-5 py-2 text-sm font-black text-[#237227] shadow-sm border border-[#FFD786] hover:bg-[#FFF4DC]"
              >
                {lang === 'en' ? 'Show all sectors' : 'Tampilkan semua sektor'}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {searchedCategoryCards.map((category) => {
              const isSelected =
                selectedCategory === 'all' || selectedCategory === category.key;

              return (
                <motion.button
                  type="button"
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  whileHover={{ y: -5 }}
                  className={`text-left rounded-[1.75rem] border bg-white p-6 shadow-sm transition-all hover:shadow-lg ${
                    selectedCategory === category.key
                      ? 'border-[#FFAA00] ring-4 ring-[#FFAA00]/20'
                      : 'border-[#FFD786]'
                  } ${isSelected ? 'opacity-100' : 'opacity-45'}`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: category.softColor,
                      }}
                    >
                      <BarChart3
                        className="h-7 w-7"
                        style={{
                          color: category.color,
                        }}
                      />
                    </div>

                    <div className="rounded-2xl border border-[#FFD786] bg-[#FFF4DC] px-3 py-2 text-right">
                      <p className="text-[11px] font-black text-[#519A66]">
                        {activeYear}
                      </p>

                      <p
                        className="text-sm font-black"
                        style={{
                          color: category.color,
                        }}
                      >
                        {formatNumber(category.active)}
                      </p>
                    </div>
                  </div>

                  <h3
                    className="line-clamp-1 font-poppins text-xl font-black text-[#17391B]"
                    title={t(category.labelKey)}
                  >
                    {t(category.labelKey)}
                  </h3>

                  <p className="mt-1 text-sm text-[#519A66]">
                    Jumlah UMKM dari tahun ke tahun ({startYear}–{endYear})
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p
                        className="text-4xl font-black"
                        style={{
                          color: category.color,
                        }}
                      >
                        {formatNumber(category.active)}
                      </p>

                      <p className="text-xs font-bold text-[#519A66]">
                        {t('umkm.unit')} ({activeYear})
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-1 rounded-xl px-3 py-1 text-sm font-black ${
                        category.diff > 0
                          ? 'bg-[#E6F3E8] text-[#237227]'
                          : category.diff < 0
                            ? 'bg-red-50 text-red-600'
                            : 'bg-[#FFF4DC] text-[#519A66]'
                      }`}
                    >
                      {category.diff > 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : category.diff < 0 ? (
                        <TrendingDown className="h-4 w-4" />
                      ) : null}

                      {category.diff > 0 ? '+' : ''}
                      {formatNumber(category.diff)}
                    </div>
                  </div>

                  <div className="mt-5 h-28 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={category.miniData}>
                        <Tooltip content={<MiniTooltip />} />

                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={category.color}
                          strokeWidth={3}
                          dot={(props: any) => {
                            const isActive = props.payload.year === activeYear;

                            return (
                              <circle
                                cx={props.cx}
                                cy={props.cy}
                                r={isActive ? 5 : 0}
                                fill="#FFF4DC"
                                stroke={category.color}
                                strokeWidth={3}
                              />
                            );
                          }}
                          activeDot={{
                            r: 6,
                            fill: category.color,
                            stroke: '#FFF4DC',
                            strokeWidth: 3,
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-4 rounded-2xl bg-[#FFF4DC] p-4">
                    <p className="text-sm font-black text-[#237227]">
                      {lang === 'en' ? 'Note:' : 'Keterangan:'}
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-[#519A66]">
                      {t(category.labelKey)}{' '}
                      {category.diff >= 0
                        ? lang === 'en'
                          ? 'increased'
                          : 'menunjukkan peningkatan'
                        : lang === 'en'
                          ? 'decreased'
                          : 'menunjukkan penurunan'}{' '}
                      {Math.abs(category.percent)}% selama periode {startYear}–
                      {activeYear}, dari {formatNumber(category.first)} menjadi{' '}
                      {formatNumber(category.active)} {t('umkm.unit')}.
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>

        <section className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-[#FFD786] bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-5 flex items-center gap-2 text-2xl font-black text-[#17391B]">
              <span className="h-7 w-2 rounded-full bg-[#237227]" />
              {lang === 'en' ? 'Sector Composition' : 'Komposisi Sektor'}{' '}
              {activeYear}
            </h2>

            <div className="h-[360px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryCards}
                  layout="vertical"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 20,
                    bottom: 10,
                  }}
                  onClick={(event: any) => {
                    const key = event?.activePayload?.[0]?.payload?.key;
                    if (key) setSelectedCategory(key);
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    horizontal={false}
                    stroke="#FFD786"
                    strokeOpacity={0.55}
                  />

                  <XAxis
                    type="number"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: '#519A66',
                      fontSize: 12,
                    }}
                  />

                  <YAxis
                    dataKey={(item) => t(item.labelKey)}
                    type="category"
                    width={130}
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: '#17391B',
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  />

                  <Tooltip content={<MiniTooltip />} />

                  <Bar
                    dataKey="active"
                    radius={[0, 12, 12, 0]}
                    className="cursor-pointer"
                  >
                    {categoryCards.map((entry) => (
                      <Cell
                        key={entry.key}
                        fill={entry.color}
                        fillOpacity={
                          selectedCategory === 'all' ||
                          selectedCategory === entry.key
                            ? 0.95
                            : 0.35
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#FFD786] bg-white p-6 shadow-sm">
            <h2 className="mb-5 flex items-center gap-2 text-2xl font-black text-[#17391B]">
              <span className="h-7 w-2 rounded-full bg-[#FFAA00]" />
              Insight
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#E6F3E8] p-4">
                <p className="text-sm font-black text-[#237227]">
                  {lang === 'en' ? 'Biggest sector' : 'Sektor terbesar'}
                </p>

                <p className="mt-1 font-poppins text-xl font-black text-[#17391B]">
                  {t(biggestCategory.labelKey)}
                </p>

                <p className="mt-1 text-sm text-[#519A66]">
                  {formatNumber(biggestCategory.active)} {t('umkm.unit')} pada{' '}
                  {activeYear}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FFF1CC] p-4">
                <p className="text-sm font-black text-[#9A6700]">
                  {lang === 'en' ? 'Selected focus' : 'Fokus pilihan'}
                </p>

                <p className="mt-1 font-poppins text-xl font-black text-[#17391B]">
                  {selectedCategoryData
                    ? t(selectedCategoryData.labelKey)
                    : lang === 'en'
                      ? 'All sectors'
                      : 'Semua sektor'}
                </p>

                <p className="mt-1 text-sm text-[#519A66]">
                  {formatNumber(mainValue)} {t('umkm.unit')}
                </p>
              </div>

              <div className="rounded-2xl bg-[#FFF4DC] p-4">
                <p className="text-sm font-black text-[#237227]">
                  {lang === 'en' ? 'How to use' : 'Cara pakai'}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-[#519A66]">
                  {lang === 'en'
                    ? 'Click a category card or a bar to filter the dashboard. Click a year point to highlight data from that year.'
                    : 'Klik card kategori atau bar untuk memfilter dashboard. Klik titik tahun untuk highlight data pada tahun tersebut.'}
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-[#FFD786] bg-white shadow-sm">
          <div className="border-b border-[#FFD786] p-6">
            <h2 className="flex items-center gap-2 text-2xl font-black text-[#17391B]">
              <span className="h-7 w-2 rounded-full bg-[#237227]" />
              {t('umkm.dataTable')}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#FFF4DC]">
                  <th className="min-w-[220px] border-b border-[#FFD786] p-4 font-black text-[#17391B]">
                    {t('umkm.filterCategory')}
                  </th>

                  {years.map((year) => (
                    <th
                      key={year}
                      className={`min-w-[100px] border-b border-[#FFD786] p-4 text-right font-black ${
                        year === activeYear
                          ? 'bg-[#FFF1CC] text-[#9A6700]'
                          : 'text-[#17391B]'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveYear(year)}
                        className="font-black"
                      >
                        {year}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {categories.map((category) => {
                  const isSelected =
                    selectedCategory === 'all' ||
                    selectedCategory === category.key;

                  return (
                    <tr
                      key={category.key}
                      className={`border-b border-[#FFD786]/50 transition hover:bg-[#FFF4DC] ${
                        isSelected ? 'opacity-100' : 'opacity-45'
                      }`}
                    >
                      <td className="p-4 font-bold text-[#17391B]">
                        <button
                          type="button"
                          onClick={() => setSelectedCategory(category.key)}
                          className="inline-flex items-center text-left"
                        >
                          <span
                            className="mr-2 inline-block h-3 w-3 rounded-full"
                            style={{
                              backgroundColor: category.color,
                            }}
                          />

                          {t(category.labelKey)}
                        </button>
                      </td>

                      {rawData.map((item) => (
                        <td
                          key={`${category.key}-${item.year}`}
                          className={`p-4 text-right ${
                            item.year === activeYear
                              ? 'bg-[#FFF1CC] font-black text-[#9A6700]'
                              : 'text-[#519A66]'
                          }`}
                        >
                          {formatNumber(item[category.key])}
                        </td>
                      ))}
                    </tr>
                  );
                })}

                <tr className="border-t-2 border-[#237227] bg-[#E6F3E8]">
                  <td className="p-4 font-black text-[#237227]">
                    {t('umkm.cat.total')}
                  </td>

                  {rawData.map((item) => (
                    <td
                      key={`total-${item.year}`}
                      className={`p-4 text-right font-black ${
                        item.year === activeYear
                          ? 'bg-[#FFF1CC] text-[#9A6700]'
                          : 'text-[#237227]'
                      }`}
                    >
                      {formatNumber(item.total)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
      </div>
    </main>
  );
}