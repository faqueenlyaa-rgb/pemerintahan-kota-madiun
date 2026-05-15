import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Search, Mic, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { useNavigate } from 'react-router-dom';

const Counter = ({
  end,
  duration = 2,
  suffix = '',
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

        setCount(end * easeOut);

        if (progress < duration * 1000) {
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  const formattedCount = Number.isInteger(end)
    ? Math.floor(count).toString()
    : count.toFixed(2).replace('.', ',');

  return (
    <span ref={ref}>
      {formattedCount}
      {suffix}
    </span>
  );
};

const heroSlides = [
  {
    src: '/balai_kota_madiun.jpg',
    titleKey: 'hero.slide1Title',
    subtitleKey: 'hero.slide1Sub',
  },
  {
    src: '/stasiun.jpg',
    titleKey: 'hero.slide2Title',
    subtitleKey: 'hero.slide2Sub',
  },
  {
    src: '/unnamed.jpg',
    titleKey: 'hero.slide3Title',
    subtitleKey: 'hero.slide3Sub',
  },
  {
    src: '/unnamed_(1).jpg',
    titleKey: 'hero.slide4Title',
    subtitleKey: 'hero.slide4Sub',
  },
];

export function HeroSection() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const currentLang = lang || 'id';

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setSlideDirection(1);
    setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideDirection(-1);
    setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const searchRoutes = [
    {
      path: '/',
      keywords: ['home', 'beranda', 'utama', 'madiun', 'kota madiun', 'pendekar'],
    },
    {
      path: '/kuliner',
      keywords: [
        'kuliner',
        'culinary',
        'food',
        'makanan',
        'bluder cokro',
        'kerupuk puli',
        'bluder',
        'pecel',
        'restoran',
        'rawon',
        'restaurant',
      ],
    },
    {
      path: '/wisata',
      keywords: ['wisata', 'tourism', 'tour', 'travel', 'destinasi', 'destination'],
    },
    {
      path: '/fasilitas',
      keywords: [
        'fasilitas',
        'facility',
        'facilities',
        'rumah sakit',
        'hospital',
        'sekolah',
        'school',
        'transportasi',
        'ibadah',
      ],
    },
    {
      path: '/penginapan',
      keywords: ['penginapan', 'hotel', 'stay', 'accommodation', 'akomodasi'],
    },
    {
      path: '/umkm',
      keywords: ['umkm', 'msme', 'msmes', 'usaha', 'business', 'data umkm', 'grafik umkm'],
    },
    {
      path: '/layanan/info-pasar',
      keywords: ['info pasar', 'market information', 'market', 'pasar', 'marketplace', 'e-sayur', 'esayur'],
    },
    {
      path: '/profil/visi-misi',
      keywords: ['profil', 'visi', 'misi', 'visi misi', 'vision', 'mission'],
    },
    {
      path: '/profil/sejarah',
      keywords: ['sejarah', 'history', 'berdiri', 'pemerintah kota madiun', 'lambang'],
    },
    {
      path: '/profil/perangkat-daerah',
      keywords: [
        'perangkat daerah',
        'opd',
        'dinas',
        'badan',
        'kecamatan',
        'kelurahan',
        'alamat opd',
        'government office',
      ],
    },
    {
      path: '/profil/wilayah-geografis',
      keywords: ['wilayah geografis', 'geografi', 'geographic', 'geographical area', 'batas wilayah'],
    },
    {
      path: '/profil/maskot',
      keywords: ['maskot', 'mascot', 'madya', 'rasa', 'relo', 'pendekar', 'pecel', 'kereta api'],
    },
    {
      path: '/madiun-terkini',
      keywords: [
        'madiun terkini',
        'latest madiun',
        'berita',
        'news',
        'agenda kota',
        'city agenda',
        'madiun today',
        'suara madiun',
        'ruang satu',
        'rilis',
        'release',
        'pengumuman',
        'announcement',
        'lowongan',
        'job vacancy',
      ],
    },
    {
      path: '/madiun-terkini/berita-pemerintahan',
      keywords: ['berita pemerintahan', 'government news'],
    },
    {
      path: '/madiun-terkini/rilis',
      keywords: ['rilis', 'release'],
    },
    {
      path: '/madiun-terkini/pengumuman',
      keywords: ['pengumuman', 'announcement'],
    },
    {
      path: '/madiun-terkini/lowongan',
      keywords: ['lowongan', 'job vacancy', 'jobs'],
    },
    {
      path: '/pemerintahan',
      keywords: ['pemerintahan', 'government', 'walikota', 'wakil walikota', 'sekda', 'struktur pemerintahan'],
    },
    {
      path: '/ppid',
      keywords: ['ppid', 'informasi publik', 'public information', 'keterbukaan informasi'],
    },
    {
      path: '/layanan/kesehatan',
      keywords: ['layanan kesehatan', 'kesehatan', 'health', 'puskesmas', 'antrian puskesmas'],
    },
    {
      path: '/layanan/kependudukan',
      keywords: ['kependudukan', 'ktp', 'kk', 'akta kelahiran', 'akta mati', 'kia', 'dukcapil'],
    },
    {
      path: '/layanan/pendidikan',
      keywords: ['pendidikan', 'education', 'be smart', 'beasiswa', 'sekolah'],
    },
  ];

  const handleSearch = (value = searchQuery) => {
    const query = value.trim().toLowerCase();

    if (!query) return;

    const result = searchRoutes.find((route) =>
      route.keywords.some((keyword) => query.includes(keyword))
    );

    if (result) {
      navigate(result.path);
    } else {
      alert(
        currentLang === 'en'
          ? 'Sorry, no search results found.'
          : 'Maaf, hasil pencarian tidak ditemukan.'
      );
    }
  };

  const handleMicClick = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        currentLang === 'en'
          ? 'Your browser does not support voice search.'
          : 'Browser Anda belum mendukung pencarian suara.'
      );

      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = currentLang === 'en' ? 'en-US' : 'id-ID';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      handleSearch(transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);

      alert(
        currentLang === 'en'
          ? 'Voice search failed. Please try again.'
          : 'Pencarian suara gagal. Silakan coba lagi.'
      );
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-pattern pb-24 pt-32 md:pb-32 md:pt-40">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Watermark Mascot */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] -translate-x-1/4 translate-y-1/4 transform opacity-10">
        <img src="/maskote_pendekar.png" alt="" className="h-auto w-full grayscale" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex w-full flex-col items-start lg:w-1/2"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-dark shadow-sm md:text-sm">
              <span className="h-2 w-2 rounded-full bg-dark" /> {t('hero.badge')}
            </div>

            <h1 className="mb-6 font-poppins text-5xl font-black leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              <span className="block text-white drop-shadow-md">Madiun</span>
              <span className="block text-accent drop-shadow-md">Kota</span>
              <span className="block text-accent drop-shadow-md">Pendekar</span>
            </h1>

            <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
              {t('hero.subtitle')}
            </p>

            {/* Search Bar */}
            <div className="relative mb-12 w-full max-w-lg">
              <div className="relative flex min-h-[64px] w-full items-center overflow-hidden rounded-full border-2 border-white/80 bg-accent shadow-xl md:min-h-[72px]">
                <button
                  type="button"
                  onClick={() => handleSearch()}
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-dark transition hover:bg-white/20 md:left-4 md:h-12 md:w-12"
                  aria-label={currentLang === 'en' ? 'Search' : 'Cari'}
                >
                  <Search className="h-6 w-6 md:h-7 md:w-7" />
                </button>

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={
                    currentLang === 'en'
                      ? 'What are you looking for?'
                      : 'Apa yang ingin anda cari?'
                  }
                  className="h-full w-full border-none bg-transparent py-4 pl-16 pr-16 text-[15px] font-bold text-dark outline-none placeholder:text-black sm:text-base md:pl-20 md:pr-20 md:text-lg"
                />

                <button
                  type="button"
                  onClick={handleMicClick}
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-dark transition hover:bg-white/20 hover:scale-105 md:right-4 md:h-12 md:w-12"
                  aria-label={
                    currentLang === 'en'
                      ? 'Use voice search'
                      : 'Gunakan pencarian suara'
                  }
                >
                  <Mic
                    className={`h-6 w-6 md:h-7 md:w-7 ${
                      isListening ? 'animate-pulse text-red-500' : ''
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid w-full max-w-lg grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="font-poppins text-3xl font-black text-accent drop-shadow-sm md:text-4xl">
                  <Counter end={201} suffix="rb+" />
                </span>

                <span className="text-sm font-medium text-white">
                  {t('hero.population')}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-poppins text-3xl font-black text-accent drop-shadow-sm md:text-4xl">
                  <Counter end={27} />
                </span>

                <span className="text-sm font-medium text-white">
                  {t('hero.kelurahan')}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-poppins text-3xl font-black text-accent drop-shadow-sm md:text-4xl">
                  <Counter end={3} />
                </span>

                <span className="text-sm font-medium text-white">
                  {t('hero.kecamatan')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Photo & Mascots */}
          <div className="relative mt-10 flex w-full flex-col items-center lg:mt-0 lg:w-1/2 lg:items-end">
            {/* Photo Carousel */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="relative aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-[40px] border-4 border-white/10 shadow-2xl"
            >
              <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                <motion.img
                  key={slideIndex}
                  src={heroSlides[slideIndex].src}
                  alt={t(heroSlides[slideIndex].titleKey)}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    },
                    opacity: {
                      duration: 0.3,
                    },
                    scale: {
                      duration: 0.4,
                    },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Arrow Buttons */}
              <button
                onClick={prevSlide}
                className="group absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-all duration-200 hover:bg-white/40"
                aria-label={t('hero.prevSlide')}
              >
                <ChevronLeftIcon className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
              </button>

              <button
                onClick={nextSlide}
                className="group absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-all duration-200 hover:bg-white/40"
                aria-label={t('hero.nextSlide')}
              >
                <ChevronRightIcon className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
              </button>

              {/* Bottom Info + Dots */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideIndex}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <h3 className="font-poppins text-xl font-bold text-white drop-shadow-lg md:text-2xl">
                      {t(heroSlides[slideIndex].titleKey)}
                    </h3>

                    <p className="text-sm text-white/90 drop-shadow-md">
                      {t(heroSlides[slideIndex].subtitleKey)}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Dot Indicators */}
                <div className="pointer-events-auto mt-3 flex gap-2">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSlideDirection(i > slideIndex ? 1 : -1);
                        setSlideIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === slideIndex
                          ? 'w-8 bg-accent'
                          : 'w-3 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mascots Row */}
            <div className="relative z-20 mt-[-60px] flex h-48 w-full justify-center gap-4 pr-4 md:gap-8 md:pr-12 lg:justify-end">
              {/* Decorative Shape Behind Mascots */}
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center lg:justify-end lg:pr-16">
                <svg
                  viewBox="0 0 500 400"
                  className="h-auto w-[120%] max-w-[700px] opacity-80 md:w-[110%]"
                  fill="none"
                >
                  <path
                    d="M250,20 C350,10 450,60 470,150 C490,240 440,330 350,370 C260,410 150,390 80,320 C10,250 -10,160 40,90 C90,20 150,30 250,20 Z"
                    fill="url(#blobGradient)"
                  />

                  <path
                    d="M260,50 C340,40 420,85 435,160 C450,235 410,310 335,345 C260,380 165,365 105,305 C45,245 30,170 70,110 C110,50 180,60 260,50 Z"
                    fill="url(#blobInner)"
                    opacity="0.5"
                  />

                  <ellipse
                    cx="250"
                    cy="200"
                    rx="180"
                    ry="160"
                    stroke="#F5A623"
                    strokeWidth="2"
                    opacity="0.3"
                    fill="none"
                  />

                  <ellipse
                    cx="250"
                    cy="200"
                    rx="210"
                    ry="185"
                    stroke="#F5A623"
                    strokeWidth="1"
                    opacity="0.15"
                    fill="none"
                    strokeDasharray="8 6"
                  />

                  <circle cx="80" cy="100" r="8" fill="#F5A623" opacity="0.25" />
                  <circle cx="420" cy="280" r="12" fill="#F5A623" opacity="0.2" />
                  <circle cx="400" cy="80" r="6" fill="#FFFFFF" opacity="0.3" />
                  <circle cx="100" cy="320" r="10" fill="#FFFFFF" opacity="0.2" />

                  <defs>
                    <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F5A623" stopOpacity="0.25" />
                      <stop offset="60%" stopColor="#1B7A3D" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#1B7A3D" stopOpacity="0.05" />
                    </radialGradient>

                    <radialGradient id="blobInner" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#F5A623" stopOpacity="0.05" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* RELO */}
              <motion.div
                style={{
                  x: mousePosition.x * -0.8,
                  y: mousePosition.y * -0.8,
                }}
                className="relative top-10 z-10 w-32 md:w-48"
              >
                <motion.img
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: 'easeInOut',
                  }}
                  src="/maskot_KAI.png"
                  alt="Maskot Relo"
                  className="h-auto w-full pb-[108px] pt-[108px] drop-shadow-2xl"
                />
              </motion.div>

              {/* MADYA */}
              <motion.div
                style={{
                  x: mousePosition.x * -1.2,
                  y: mousePosition.y * -1.2,
                }}
                className="relative -top-10 z-10 w-40 md:w-56"
              >
                <motion.img
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  src="/maskote_pendekar.png"
                  alt="Maskot Madya"
                  className="h-auto w-full pb-[100px] pt-[100px] drop-shadow-2xl"
                />
              </motion.div>

              {/* RASA */}
              <motion.div
                style={{
                  x: mousePosition.x * -1,
                  y: mousePosition.y * -1,
                }}
                className="relative top-4 z-10 w-32 md:w-48"
              >
                <motion.img
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  src="/maskot_pecel.png"
                  alt="Maskot Rasa"
                  className="h-auto w-full pb-[112px] pt-[112px] drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve separator to match mockup */}
      <div className="absolute bottom-0 left-0 right-0 z-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[100px] w-full md:h-[180px]"
        >
          <path
            d="M0,120 C300,120 400,0 1200,80 L1200,120 L0,120 Z"
            fill="#F5D08A"
            opacity="0.3"
          />

          <path
            d="M0,120 C400,100 600,20 1200,100 L1200,120 L0,120 Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>
    </section>
  );
}