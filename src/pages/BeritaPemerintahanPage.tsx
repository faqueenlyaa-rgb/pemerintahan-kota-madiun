import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';
import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  Clock,
  Newspaper,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const MASCOT_URL = '/maskote_pendekar.png';

const baseUrl = 'https://pemerintahan-kota-madiun.vercel.app';

const getAbsoluteUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `${baseUrl}${path}`;
};

const articles = [
  {
    slug: 'perkuat-ekonomi-daerah-ekosistem-halal',
    category: {
      id: 'Ekonomi Daerah',
      en: 'Regional Economy',
    },
    date: {
      id: 'Jumat, 8 Mei',
      en: 'Friday, May 8',
    },
    readTime: {
      id: '5 menit baca',
      en: '5 min read',
    },
    image1: '/images/news/halalnews.jpg',
    image2: '/images/news/halalnews-2.jpg',
    title: {
      id: 'Perkuat Ekonomi Daerah, Plt Wali Kota Kembangkan Ekosistem Halal',
      en: 'Strengthening the Regional Economy, Acting Mayor Develops Halal Ecosystem',
    },
    body: {
      id: [
        'MADIUN – Pemerintah Kota Madiun terus mendorong pengembangan ekosistem halal sebagai salah satu strategi memperkuat perekonomian daerah. Hal itu ditegaskan Plt Wali Kota Madiun F. Bagus Panuntun saat menghadiri kegiatan diseminasi Norma, Standar, Prosedur, dan Kriteria (NSPK) Jaminan Produk Halal di Resto Ayam Goreng Pemuda, Jumat (8/5).',
        'Dalam sambutannya, Plt wali kota menegaskan bahwa halal tidak sekadar berbicara soal sertifikasi, tetapi juga menyangkut kepercayaan masyarakat terhadap suatu produk sekaligus menjadi penggerak ekonomi daerah.',
        '“Halal bukan hanya masalah sertifikasi, tetapi bagaimana sertifikasi halal ini mampu mendorong roda ekonomi. Halal juga bukan hanya terkait keagamaan, tetapi menyangkut kepercayaan masyarakat terhadap produk kita,” ujarnya.',
        'Menurutnya, Kota Madiun harus mengoptimalkan potensi sumber daya manusia sebagai kekuatan utama penggerak ekonomi daerah. Karena itu, penguatan ekonomi perlu bertumpu pada SDM yang kreatif dan inovatif. Hal tersebut menjadi alasan Pemkot Madiun serius membangun ekosistem halal modern.',
        'Sebagai langkah konkret, Pemkot Madiun tengah menyiapkan kawasan ekosistem halal di PRC dan PSC yang akan menjadi pusat wisata religi sekaligus pengembangan UMKM halal. Pengembangannya dilakukan secara bertahap dengan pendampingan dari pemerintah provinsi dan BPJPH agar standar halal tetap terjaga.',
        'Dalam kesempatan itu, Plt wali kota juga mengajak seluruh pelaku UMKM untuk bersama-sama mendukung program halal modern di Kota Madiun. Saat ini, dari sekitar 30 ribu UMKM yang ada, sebanyak 10 ribu di antaranya telah memiliki sertifikat halal.',
        '“Kita harus bergerak bersama. Pemkot saja tidak bisa. Saya mohon dukungan pelaku UMKM agar Kota Madiun bisa menjadi kota dengan ekosistem halal modern,” tegasnya.',
        'Tak hanya itu, Pemkot Madiun juga menyiapkan berbagai fasilitas bagi UMKM binaan, mulai dari penyediaan lokasi pameran gratis hingga fasilitasi promosi produk di sejumlah event sepanjang tahun. Pemkot memastikan kawasan PSC dan PRC ke depan diprioritaskan untuk UMKM Kota Madiun.',
        'Pemkot Madiun berharap pengembangan ekosistem halal mampu meningkatkan daya saing UMKM lokal sekaligus memperkuat posisi Kota Madiun sebagai kota perdagangan dan jasa berbasis ekonomi kreatif dan wisata religi.',
        '(Rams/rat/diskominfo)',
      ],
      en: [
        'MADIUN – The Madiun City Government continues to encourage the development of a halal ecosystem as one of the strategies to strengthen the regional economy. This was emphasized by Acting Mayor of Madiun F. Bagus Panuntun while attending the dissemination of Norms, Standards, Procedures, and Criteria (NSPK) for Halal Product Assurance at Resto Ayam Goreng Pemuda, Friday (8/5).',
        'In his remarks, the acting mayor emphasized that halal is not only about certification, but also about public trust in a product and its role as a driver of the regional economy.',
        '“Halal is not only a matter of certification, but how halal certification can drive the economy. Halal is also not only related to religion, but concerns public trust in our products,” he said.',
        'According to him, Madiun City must optimize the potential of human resources as the main force driving the regional economy. Therefore, economic strengthening needs to rely on creative and innovative human resources. This is why the Madiun City Government is serious about building a modern halal ecosystem.',
        'As a concrete step, the Madiun City Government is preparing halal ecosystem areas at PRC and PSC, which will become centers for religious tourism as well as the development of halal MSMEs. The development will be carried out gradually with assistance from the provincial government and BPJPH to ensure halal standards are maintained.',
        'On that occasion, the acting mayor also invited all MSME actors to jointly support the modern halal program in Madiun City. Currently, out of around 30 thousand MSMEs, 10 thousand already have halal certificates.',
        '“We must move together. The city government cannot do it alone. I ask for the support of MSME actors so that Madiun City can become a city with a modern halal ecosystem,” he stressed.',
        'In addition, the Madiun City Government is also preparing various facilities for assisted MSMEs, ranging from free exhibition locations to product promotion facilitation at several events throughout the year. The city government ensures that the PSC and PRC areas will be prioritized for Madiun City MSMEs in the future.',
        'The Madiun City Government hopes that the development of the halal ecosystem can improve the competitiveness of local MSMEs while strengthening Madiun City’s position as a trade and service city based on creative economy and religious tourism.',
        '(Rams/rat/diskominfo)',
      ],
    },
  },
  {
    slug: 'gowes-bersama-ketua-dprd-cek-pelayanan-publik',
    category: {
      id: 'Pelayanan Publik',
      en: 'Public Service',
    },
    date: {
      id: 'Jumat, 8 Mei',
      en: 'Friday, May 8',
    },
    readTime: {
      id: '4 menit baca',
      en: '4 min read',
    },
    image1: '/images/news/gowes.jpg',
    image2: '/images/news/gowes-2.jpg',
    title: {
      id: 'Gowes Bersama Ketua DPRD, Plt Wali Kota Cek Pelayanan Publik',
      en: 'Cycling with DPRD Chairperson, Acting Mayor Checks Public Services',
    },
    body: {
      id: [
        'MADIUN – Plt Wali Kota Madiun F Bagus Panuntun kembali melaksanakan gowes, Jumat (8/5). Bedanya, gowes kali ini juga diikuti Ketua DPRD Kota Madiun Armaya. Gowes Jumat sehat ini juga meninjau sejumlah kantor pelayanan publik. Salah satunya, kantor Perusahaan Umum Daerah Air Minum (Perumdam) Tirta Taman Sari Kota Madiun di Jalan Sulawesi. Bersama Ketua DPRD, Plt wali kota memastikan pelayanan berjalan baik.',
        '‘’Ini tadi bersama pak ketua DPRD kita meninjau pelayanan di kantor PDAM Kota Madiun. Karena ini Jumat sebagian pegawai masih senam,’’ kata Plt wali kota.',
        'Plt wali kota dan rombongan pun berkeliling untuk mengecek ke seluruh ruangan. Bahkan, sampai di halaman belakang. Hal itu dilakukan juga untuk memastikan kebersihan kantor terjaga dengan baik. Kebersihan memang tengah menjadi perhatian tersendiri Plt wali kota. Apalagi untuk kantor yang berkaitan dengan pelayanan kepada masyarakat. Kantor PDAM tentunya kerap dikunjungi masyarakat untuk urusan pembayaran dan lain sebagainya.',
        '‘’Tentunya ada beberapa catatan-catatan untuk dibenahi. Kita pastikan pelayanan tetap berjalan baik,’’ ungkapnya.',
        'Setelah itu, Plt wali kota dan rombongan melanjutkan gowes hingga ke Jalan Basuki Rahmat. Di sana, rombongan meninjau kantor Radio Madya FM. Di sana juga tengah dibangun lapangan olahraga mini soccer dan padel. Ini tentu hal baru di Kota Madiun. Plt wali kota dan Ketua DPRD pun mencoba bermain padel. Plt wali kota berharap hadirnya fasilitas olahraga tersebut semakin menambah pilihan olahraga masyarakat Kota Madiun.',
        '‘’Tentunya saya ucapkan selamat kepada Madya FM yang berulang tahun ke 25 dan selamat juga untuk Pandawa Sosial Sport yang menyajikan fasilitas olahraga baru di Kota Madiun,’’ ujarnya. (ws hendro/agi/diskominfo)',
      ],
      en: [
        'MADIUN – Acting Mayor of Madiun F Bagus Panuntun carried out another cycling activity on Friday (8/5). This time, the ride was also joined by the Chairperson of the Madiun City DPRD, Armaya. The healthy Friday cycling activity also included visits to several public service offices. One of them was the office of the Regional Drinking Water Public Company (Perumdam) Tirta Taman Sari Kota Madiun on Jalan Sulawesi. Together with the DPRD Chairperson, the acting mayor ensured that public services were running well.',
        '“Earlier, together with the DPRD chairperson, we reviewed services at the PDAM Madiun City office. Since it is Friday, some employees were still doing morning exercise,” said the acting mayor.',
        'The acting mayor and entourage then walked around to check all rooms, including the back area. This was also done to ensure that office cleanliness was well maintained. Cleanliness has become a particular concern for the acting mayor, especially for offices related to public services. The PDAM office is frequently visited by residents for payment matters and other services.',
        '“Of course, there are several notes for improvement. We ensure that services continue to run well,” he said.',
        'After that, the acting mayor and entourage continued cycling to Jalan Basuki Rahmat. There, they visited the Madya FM radio office. A mini soccer and padel sports field is also being built there. This is certainly something new in Madiun City. The acting mayor and the DPRD chairperson also tried playing padel. The acting mayor hopes that the presence of these sports facilities will provide more sports options for the people of Madiun City.',
        '“I would like to congratulate Madya FM on its 25th anniversary and also congratulate Pandawa Sosial Sport for presenting new sports facilities in Madiun City,” he said. (ws hendro/agi/diskominfo)',
      ],
    },
  },
];

const uiText = {
  id: {
    pageTitle: 'Berita Pemerintahan',
    pageSubtitle:
      'Informasi terbaru seputar kegiatan, pelayanan, dan kebijakan Pemerintah Kota Madiun.',
    latestBadge: 'Berita Terbaru',
    readMore: 'Baca Selengkapnya',
    detailLabel: 'Detail Berita',
    otherNews: 'Berita Lainnya',
    source: 'Sumber: Diskominfo Kota Madiun',
    notFound: 'Berita tidak ditemukan.',
  },
  en: {
    pageTitle: 'Government News',
    pageSubtitle:
      'Latest information about activities, services, and policies of the Madiun City Government.',
    latestBadge: 'Latest News',
    readMore: 'Read More',
    detailLabel: 'News Detail',
    otherNews: 'Other News',
    source: 'Source: Diskominfo Madiun City',
    notFound: 'News not found.',
  },
};

export function BeritaPemerintahanPage() {
  const params = useParams();
  const languageContext = useLanguage() as any;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';

  const selectedArticle = articles.find(
    (article) => article.slug === params.slug
  );

  const text = uiText[lang];

  const faqText = {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Di mana saya bisa mendapatkan berita terbaru tentang Kota Madiun?',
          answer:
            'Berita terbaru tentang Kota Madiun dapat diakses melalui halaman Madiun Terkini, Berita Pemerintahan, Madiun Today, Suara Madiun, dan kanal informasi resmi Pemerintah Kota Madiun.',
        },
        {
          question: 'Di mana saya bisa melihat pengumuman atau rilis resmi pemerintah kota?',
          answer:
            'Pengumuman dan rilis resmi dapat dilihat melalui halaman Madiun Terkini pada bagian Pengumuman atau Rilis. Halaman tersebut disiapkan untuk menampilkan informasi resmi yang dibutuhkan masyarakat.',
        },
        {
          question: 'Bagaimana cara menyampaikan pengaduan atau aspirasi masyarakat?',
          answer:
            'Pengaduan atau aspirasi dapat disampaikan melalui kanal resmi pemerintah kota, seperti website resmi, media sosial pemerintah, atau layanan pengaduan yang tersedia untuk masalah pelayanan publik, lingkungan, fasilitas umum, dan infrastruktur.',
        },
        {
          question: 'Bagaimana cara mendapatkan informasi layanan kependudukan?',
          answer:
            'Informasi layanan kependudukan seperti KTP, Kartu Keluarga, pindah domisili, atau administrasi penduduk lainnya dapat diakses melalui menu Layanan Kependudukan atau kanal resmi perangkat daerah terkait.',
        },
        {
          question: 'Bagaimana cara mengajukan permohonan informasi publik?',
          answer:
            'Permohonan informasi publik dapat diajukan melalui layanan PPID atau kanal informasi publik resmi. Layanan ini digunakan masyarakat untuk memperoleh informasi sesuai prosedur keterbukaan informasi publik.',
        },
        {
          question: 'Apakah semua layanan tersedia langsung di website ini?',
          answer:
            'Website ini berfungsi sebagai portal informasi dan penghubung layanan. Beberapa informasi tersedia langsung di dalam website, sedangkan layanan tertentu diarahkan ke website atau aplikasi resmi instansi terkait.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Where can I find the latest news about Madiun City?',
          answer:
            'The latest news about Madiun City can be accessed through the Madiun Terkini page, Government News, Madiun Today, Suara Madiun, and official information channels of the Madiun City Government.',
        },
        {
          question: 'Where can I find official announcements or city government releases?',
          answer:
            'Official announcements and releases can be found on the Madiun Terkini page under the Announcement or Release sections.',
        },
        {
          question: 'How can citizens submit complaints or aspirations?',
          answer:
            'Complaints or aspirations can be submitted through official city government channels, such as the official website, government social media, or available public complaint services.',
        },
        {
          question: 'How can I get information about population administration services?',
          answer:
            'Information about ID cards, family cards, domicile transfer, or other population documents can be accessed through the Population Services menu or official channels of the related local office.',
        },
        {
          question: 'How can I request public information?',
          answer:
            'Public information requests can be submitted through PPID services or official public information channels.',
        },
        {
          question: 'Are all services available directly on this website?',
          answer:
            'This website functions as an information portal and service connector. Some information is available directly on the website, while certain services are directed to official websites or applications.',
        },
      ],
    },
  };

  if (params.slug && !selectedArticle) {
    return (
      <PageShell>
        <BackButton />

        <div className="mt-10 rounded-[2rem] border border-gray-100 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF8EE]">
            <Newspaper className="h-8 w-8 text-[#237227]" />
          </div>

          <h1 className="text-3xl font-black text-[#111827]">
            {text.notFound}
          </h1>
        </div>
      </PageShell>
    );
  }

  if (selectedArticle) {
    const otherArticles = articles.filter(
      (article) => article.slug !== selectedArticle.slug
    );

    return (
      <PageShell>
        <SEO
          title={selectedArticle.title[lang]}
          description={selectedArticle.body[lang][0]}
          keywords="Berita Pemerintahan Kota Madiun, Pemkot Madiun, Diskominfo Madiun, berita Madiun"
          image={getAbsoluteUrl(selectedArticle.image1)}
          url={`${baseUrl}/madiun-terkini/berita-pemerintahan/${selectedArticle.slug}`}
          type="article"
          lang={lang}
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: selectedArticle.title[lang],
            description: selectedArticle.body[lang][0],
            image: [
              getAbsoluteUrl(selectedArticle.image1),
              getAbsoluteUrl(selectedArticle.image2),
            ],
            articleBody: selectedArticle.body[lang].join(' '),
            inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
            author: {
              '@type': 'Organization',
              name: 'Diskominfo Kota Madiun',
            },
            publisher: {
              '@type': 'GovernmentOrganization',
              name: 'Pemerintah Kota Madiun',
              logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/Lambang_Kota_Madiun.png`,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${baseUrl}/madiun-terkini/berita-pemerintahan/${selectedArticle.slug}`,
            },
          }}
        />

        <BackButton />

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative mt-8 overflow-hidden rounded-[2.2rem] bg-[#06451F] p-7 shadow-xl md:p-12"
        >
          <HeroDecor />

          <div className="relative z-10 max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20">
              <Newspaper className="h-4 w-4" />
              {text.detailLabel}
            </div>

            <h1 className="font-poppins text-3xl font-black leading-tight text-white md:text-5xl">
              {selectedArticle.title[lang]}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <CalendarDays className="h-4 w-4" />
                {selectedArticle.date[lang]}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Clock className="h-4 w-4" />
                {selectedArticle.readTime[lang]}
              </span>

              <span className="rounded-full bg-[#FFAA00] px-4 py-2 font-black text-[#111827]">
                {selectedArticle.category[lang]}
              </span>
            </div>
          </div>

          <MascotWatermark />
        </motion.section>

        <article className="mt-8 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
          <div className="relative">
            <img
              src={selectedArticle.image1}
              alt={selectedArticle.title[lang]}
              className="h-[260px] w-full object-cover md:h-[460px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-8 rounded-2xl border border-[#519A66]/10 bg-[#EAF8EE] p-5 text-sm font-bold leading-relaxed text-[#237227]">
              {text.source}
            </div>

            <div className="space-y-5 text-base leading-8 text-[#374151] md:text-lg">
              {selectedArticle.body[lang].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <img
                src={selectedArticle.image1}
                alt={`${selectedArticle.title[lang]} 1`}
                className="h-64 w-full rounded-3xl object-cover shadow-sm"
              />

              <img
                src={selectedArticle.image2}
                alt={`${selectedArticle.title[lang]} 2`}
                className="h-64 w-full rounded-3xl object-cover shadow-sm"
              />
            </div>

            <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
          </div>
        </article>

        {otherArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-black text-[#111827]">
              <span className="h-7 w-2 rounded-full bg-[#FFAA00]" />
              {text.otherNews}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherArticles.map((article) => (
                <NewsCard
                  key={article.slug}
                  article={article}
                  lang={lang}
                  text={text}
                />
              ))}
            </div>
          </section>
        )}
      </PageShell>
    );
  }

  return (
    <PageShell>
      <SEO
        title={text.pageTitle}
        description={text.pageSubtitle}
        keywords="Berita Pemerintahan Kota Madiun, Pemkot Madiun, berita Madiun, pelayanan publik Madiun"
        url={`${baseUrl}/madiun-terkini/berita-pemerintahan`}
        lang={lang}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name:
              lang === 'en'
                ? 'Madiun City Government News'
                : 'Berita Pemerintahan Kota Madiun',
            description:
              lang === 'en'
                ? 'Official news about government activities, public services, policies, and programs of Madiun City Government.'
                : 'Informasi resmi seputar kegiatan, pelayanan publik, kebijakan, dan program Pemerintah Kota Madiun.',
            inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
            url: `${baseUrl}/madiun-terkini/berita-pemerintahan`,
            publisher: {
              '@type': 'GovernmentOrganization',
              name: 'Pemerintah Kota Madiun',
            },
          },
          createFAQSchema(faqText[lang].items, lang),
        ]}
      />

      <BackButton />

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mt-8 overflow-hidden rounded-[2.2rem] bg-[#06451F] p-7 text-center shadow-xl md:p-14"
      >
        <HeroDecor />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
            <Newspaper className="h-8 w-8 text-white" />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black text-white ring-1 ring-white/20">
            <Sparkles className="h-4 w-4 text-[#FFAA00]" />
            {text.latestBadge}
          </div>

          <h1 className="font-poppins text-4xl font-black tracking-tight text-white md:text-6xl">
            {text.pageTitle}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/85 md:text-lg">
            {text.pageSubtitle}
          </p>
        </div>

        <MascotWatermark />
      </motion.section>

      <section className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
        {articles.map((article, index) => (
          <NewsCard
            key={article.slug}
            article={article}
            lang={lang}
            text={text}
            index={index}
          />
        ))}
      </section>

      <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
    </PageShell>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20 pt-32">
      <div className="container mx-auto px-4 md:px-8">{children}</div>
    </div>
  );
}

function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-[#237227] shadow transition hover:bg-gray-100"
    >
      <ArrowLeft className="h-5 w-5" strokeWidth={3} />
    </Link>
  );
}

function HeroDecor() {
  return (
    <>
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_18%_25%,#ffffff_0,transparent_26%),radial-gradient(circle_at_82%_75%,#ffffff_0,transparent_28%)]" />
      <div className="absolute right-5 top-5 h-36 w-36 rounded-full bg-[#519A66]/25 blur-3xl" />
      <div className="absolute bottom-5 left-8 h-24 w-24 rounded-full bg-[#FFAA00]/20 blur-2xl" />
    </>
  );
}

function MascotWatermark() {
  return (
    <img
      src={MASCOT_URL}
      alt="Maskot Kota Madiun"
      className="pointer-events-none absolute bottom-[-80px] right-6 hidden w-60 opacity-10 md:block"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}

function NewsCard({
  article,
  lang,
  text,
  index = 0,
}: {
  article: (typeof articles)[number];
  lang: 'id' | 'en';
  text: (typeof uiText)['id'];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={article.image1}
          alt={article.title[lang]}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-[#FFAA00] px-4 py-2 text-xs font-black text-[#111827] shadow">
          {article.category[lang]}
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 text-xs font-semibold text-white">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 backdrop-blur">
            <CalendarDays className="h-3.5 w-3.5" />
            {article.date[lang]}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 backdrop-blur">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime[lang]}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="font-poppins text-2xl font-black leading-snug text-[#111827] transition group-hover:text-[#237227]">
          {article.title[lang]}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {article.body[lang][0]}
        </p>

        <Link
          to={`/madiun-terkini/berita-pemerintahan/${article.slug}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#237227] px-5 py-3 text-sm font-black text-white shadow transition hover:bg-[#06451F]"
        >
          {text.readMore}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}