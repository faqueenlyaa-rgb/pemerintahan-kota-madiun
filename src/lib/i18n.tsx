import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
  memo } from
'react';
type Lang = 'id' | 'en';
interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}
const translations: Record<Lang, Record<string, string>> = {
  id: {
    // Navbar
    'nav.govTitle': 'PEMERINTAH KOTA MADIUN',
    'nav.province': 'PROVINSI JAWA TIMUR',
    'nav.home': 'Beranda',
    'nav.profile': 'Profil',
    'nav.services': 'Layanan',
    'nav.government': 'Pemerintahan',
    'nav.latestNews': 'Madiun Terkini',
    'nav.ppid': 'PPID',
    'nav.cityName': 'KOTA MADIUN',
    'nav.visiMisi': 'Visi Misi',
    'nav.sejarah': 'Sejarah',
    'nav.perangkatDaerah': 'Perangkat Daerah',
    'nav.wilayahGeografis': 'Wilayah Geografis',
    'nav.maskot': 'Maskot Kota Madiun',
    'nav.layananPublik': 'Layanan Publik',
    'nav.layananInternal': 'Layanan Internal',
    'nav.layananWA': 'Layanan WA (Awak Sigap)',
    'nav.mbangunSwarga': 'Mbangun Swarga',
    'nav.ppidKota': 'PPID Kota Madiun',
    'nav.perizinan': 'Perizinan dan Investasi',
    'nav.pelayananKelurahan': 'Pelayanan Kelurahan',
    'nav.kesehatan': 'Kesehatan',
    'nav.pelayananKependudukan': 'Pelayanan Kependudukan',
    'nav.ketenagakerjaan': 'Ketenagakerjaan',
    'nav.pendidikan': 'Pendidikan',
    'nav.infoPasar': 'Info Pasar',
    'nav.openData': 'Open Data',
    'nav.koviOtda': 'Kovi Otda',
    'nav.lpse': 'LPSE',
    'nav.sirup': 'SIRUP',
    'nav.laporSP4N': 'Lapor SP4N',
    'nav.spbe': 'SPBE',
    'nav.smartCity': 'Smart City',
    'nav.cctv': 'CCTV',
    'nav.jdih': 'JDIH',
    'nav.sirupa': 'SIRUPA',
    'nav.agendaKota': 'Agenda Kota',
    'nav.beritaPemerintahan': 'Berita Pemerintahan',
    'nav.madiunToday': 'Madiun Today',
    'nav.suaraMadiun': 'Suara Madiun',
    'nav.ruangSatu': 'Ruang Satu',
    'nav.rilis': 'Rilis',
    'nav.pengumuman': 'Pengumuman',
    'nav.lowongan': 'Lowongan',
    // Hero
    'hero.badge': 'PORTAL RESMI PEMERINTAH',
    'hero.subtitle':
    'Melayani dengan sepenuh hati untuk mewujudkan Kota Madiun yang Maju, Sejahtera, dan bermartabat.',
    'hero.searchPlaceholder': 'Apa yang ingin anda cari?',
    'hero.population': 'penduduk',
    'hero.kelurahan': 'Kelurahan',
    'hero.kecamatan': 'Kecamatan',
    'hero.slide1Title': 'Balai Kota Madiun',
    'hero.slide1Sub': 'Pusat Pemerintahan Kota Madiun',
    'hero.slide2Title': 'Stasiun Madiun',
    'hero.slide2Sub': 'Pintu Gerbang Kota Madiun',
    'hero.slide3Title': 'Taman Wisata Madiun',
    'hero.slide3Sub': 'Destinasi Wisata Keluarga',
    'hero.slide4Title': 'Alun-Alun Kota Madiun',
    'hero.slide4Sub': 'Jantung Kota Madiun',
    'hero.prevSlide': 'Slide sebelumnya',
    'hero.nextSlide': 'Slide berikutnya',
    // Quick Services
    'services.title': 'Layanan Cepat',
    'services.viewAll': 'Lihat Semua',
    'services.laporSPAN': 'Lapor SPAN',
    'services.awakSigap': 'Awak Sigap',
    'services.kesehatan': 'Kesehatan',
    'services.pendidikan': 'Pendidikan',
    'services.ketenagakerjaan': 'Ketenagakerjaan',
    'services.perizinan': 'Perizinan',
    'services.infoPasar': 'Info Pasar',
    // Jelajah
    'jelajah.title': 'JELAJAH KOTA MADIUN',
    'jelajah.aboutTitle': 'TENTANG MADIUN',
    'jelajah.aboutText':
    'Kota Madiun merupakan salah satu kota yang berada di Provinsi Jawa Timur, Indonesia. Kota ini menempati posisi sebagai kota terbesar keempat di Jawa Timur setelah Surabaya, Malang, dan Kediri. Secara geografis, Kota Madiun terletak sekitar 150 km di sebelah barat Surabaya, sekitar 90 km di sebelah timur Surakarta, serta kurang lebih 33 km di sebelah tenggara Ngawi.',
    'jelajah.visit': 'Kunjungi',
    'jelajah.prev': 'Sebelumnya',
    'jelajah.next': 'Berikutnya',
    'jelajah.wisata': 'Wisata',
    'jelajah.wisataDesc': 'Destinasi wisata menarik',
    'jelajah.kuliner': 'Kuliner',
    'jelajah.kulinerDesc': 'Cita rasa khas Madiun',
    'jelajah.fasilitas': 'Fasilitas',
    'jelajah.fasilitasDesc': 'Fasilitas umum kota',
    'jelajah.umkm': 'UMKM',
    'jelajah.umkmDesc': 'Produk lokal unggulan',
    'jelajah.penginapan': 'Penginapan',
    'jelajah.penginapanDesc': 'Hotel & penginapan nyaman',
    // GprKomdigi / Demographics
    'demo.title': 'Demografi Kec. Taman',
    'demo.density': 'Kepadatan Penduduk',
    'demo.densityUnit': 'Jiwa/km² (2024)',
    'demo.genderRatio': 'Rasio Gender',
    'demo.productiveAge': 'Usia Produktif',
    'demo.years': '15-64 Tahun',
    'demo.highCategory': 'Kategori Tinggi',
    'demo.article': 'Artikel',
    'demo.article1':
    'Perkuat Mitigasi Karhutla, Pemerintah Gelar Apel Siaga di Provinsi Riau',
    'demo.article2':
    'Dana Stimulan Perbaikan Rumah Pascabencana Sumatra Disalurkan',
    'demo.article3': 'Dukung Ketegasan Menpora Erick, Ketua Umum NOC Indonesia',
    // News
    'news.title': 'KABAR KOTA',
    'news.govNews': '✱ BERITA PEMERINTAHAN',
    'news.madiunToday': '✱ MADIUN TODAY',
    'news.viewAll': 'Lihat Semua',
    'news.gov1Title':
    'Wali Kota Madiun Pimpin Apel Gelar Pasukan Operasi Ketupat 2025',
    'news.gov1Excerpt':
    'Wali Kota Madiun memimpin apel gelar pasukan dalam rangka Operasi Ketupat 2025 untuk memastikan keamanan dan kelancaran arus mudik.',
    'news.gov2Title':
    'Pemkot Madiun Raih Penghargaan Kota Layak Anak Kategori Utama',
    'news.gov2Excerpt':
    'Pemerintah Kota Madiun kembali meraih penghargaan Kota Layak Anak kategori utama dari Kementerian PPPA.',
    'news.today1Title':
    'Festival Pecel Madiun 2025 Sukses Menarik Ribuan Pengunjung',
    'news.today1Excerpt':
    'Festival kuliner khas Kota Madiun ini berhasil menarik ribuan pengunjung dari berbagai daerah dan memperkenalkan pecel Madiun ke kancah nasional.',
    'news.today2Title':
    'Car Free Day Madiun Semakin Ramai dengan Atraksi Seni Budaya',
    'news.today2Excerpt':
    'Kegiatan Car Free Day di Jalan Pahlawan Kota Madiun semakin meriah dengan penampilan seni budaya dari berbagai komunitas.',
    // Interactive Map
    'map.clickDetail': 'Klik untuk lihat detail →',
    'map.overallArea': 'Keseluruhan Wilayah',
    'map.district': 'Kecamatan',
    'map.subDistrict': 'Kelurahan',
    'map.footer': 'Peta Interaktif Kota Madiun',
    'map.distPrefix': 'Kec.',
    // Floating Buttons
    'a11y.title': 'Menu Aksesibilitas',
    'a11y.highContrast': 'Kontras Tinggi',
    'a11y.highlightLinks': 'Sorot Tautan',
    'a11y.largeText': 'Teks Lebih Besar',
    'a11y.textSpacing': 'Spasi Teks',
    'a11y.pauseAnimations': 'Animasi Dijeda',
    'a11y.hideImages': 'Sembunyikan Gambar',
    'a11y.dyslexiaFriendly': 'Ramah Disleksia',
    'a11y.bigCursor': 'Kursor Besar',
    'a11y.tooltips': 'Keterangan Alat',
    'a11y.lineHeight': 'Tinggi Garis',
    'a11y.textAlign': 'Perataan Teks',
    'a11y.grayscale': 'Kejenuhan',
    'a11y.reset': 'Reset',
    'a11y.close': 'Tutup',
    'emergency.awakSigap': 'Awak Sigap',
    'emergency.damkar': 'Damkar 113',
    'emergency.polisi': 'Polisi 110',
    'emergency.ambulans': 'Ambulans 118',
    // Footer
    'footer.cityName': 'KOTA MADIUN',
    'footer.govName': 'Pemerintah Kota Madiun',
    'footer.motto': 'Kota Pendekar',
    'footer.description':
    'Melayani dengan sepenuh hati untuk mewujudkan Kota Madiun yang Maju, Sejahtera, dan bermartabat.',
    'footer.contactUs': 'HUBUNGI KAMI',
    'footer.emergency': 'Emergency',
    'footer.callCenter': 'Call Center',
    'footer.ambulance': 'Ambulans',
    'footer.police': 'Polisi',
    'footer.fireDept': 'Pemadam Kebakaran',
    'footer.copyright': 'Pemerintah Kota Madiun. Hak Cipta Dilindungi.',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Syarat & Ketentuan',
    // Shared UI Keys
    'page.filter': 'Filter',
    'page.sortRating': 'Rating Tertinggi',
    'page.sortName': 'Nama A-Z',
    'page.noResults': 'Tidak ada hasil ditemukan',
    'page.noResultsHint': 'Coba ubah kata kunci pencarian atau filter kategori',
    'page.allCategories': 'Semua Kategori',
    // Wisata Page
    'wisata.title': 'Daftar Wisata Kota Madiun',
    'wisata.subtitle':
    'Jelajahi ruang publik, ikon kota, wisata keluarga, dan wisata religi di Kota Madiun',
    'wisata.searchPlaceholder': 'Cari nama wisata...',
    'wisata.showing': 'Menampilkan',
    'wisata.destinations': 'destinasi wisata',
    'wisata.viewMaps': 'Lihat di Maps',
    // Profil - Visi Misi
    'profil.visiMisi.title': 'Visi Misi Kota Madiun',
    'profil.visiMisi.visiTitle': 'Visi',
    'profil.visiMisi.visiText':
    '“Terwujudnya Pemerintahan Maju Bersih Berwibawa, Bersama Masyarakat Membangun Kota Mendunia”',
    'profil.visiMisi.misiTitle': 'Misi',
    'profil.visiMisi.misi1':
    'Meningkatkan pengembangan sumber daya manusia yang berkualitas dan berdaya saing global.',
    'profil.visiMisi.misi2':
    'Meningkatkan kualitas hidup masyarakat melalui pembangunan ekonomi inklusif berbasis kewilayahan yang merata dan berkeadilan.',
    'profil.visiMisi.misi3':
    'Meningkatkan sarana dan prasarana yang berkualitas serta berwawasan lingkungan.',
    'profil.visiMisi.misi4':
    'Meningkatkan harmonisasi sosial dan trantibumlinmas.',
    'profil.visiMisi.misi5':
    'Meningkatkan keterbukaan informasi publik sebagai kontrol kinerja dan akuntabilitas pemerintahan.',
    'profil.visiMisi.misi6':
    'Meningkatkan tata kelola pemerintahan berbasis kelas dunia yang anti korupsi.',
    'profil.visiMisi.misi7':
    'Meningkatkan partisipasi masyarakat melalui inovasi dalam pembangunan berkelanjutan.',
    'profil.visiMisi.misi8':
    'Mewujudkan ketahanan sosial dan budaya yang berkualitas.',
    // Profil - Sejarah
    'profil.sejarah.title': 'Sejarah Kota Madiun',
    'profil.sejarah.p1':
    'Berdirinya Pemerintah Kota Madiun dapat dipelajari dari sisa peninggalan sejarah, baik berupa barang, adat istiadat maupun lembaga-lembaga. Di wilayah Kota Madiun terdapat 2 kelurahan yang dahulu kala pada masa Pemerintahan Kesultanan Mataram kedua kelurahan tersebut berstatus tanah pardikan yang bebas mengurus rumah tangganya sendiri, yaitu tanah pardikan Taman dan Kuncen.',
    'profil.sejarah.p2':
    'Jauh sebelumnya, pada masa akhir pemerintah Majapahit di wilayah Madiun selatan terdapat kerajaan / pemerintahan Gagelang yang didirikan oleh Adipati Gugur Putra Brawijaya terakhir.',
    'profil.sejarah.p3':
    'Selanjutnya dengan pertimbangan geografis dan ekonomis pusat pemerintahan bergeser ke utara di pinggir bengawan Madiun, yang dinamakan Kutho Miring di wilayah kelurahan Demangan sekarang dan kemudian pindah lagi ke komplek Rumah Dinas Bupati Madiun sekarang ini.',
    'profil.sejarah.p4':
    'Pada masa pemerintahan Kutho Miring tersebut, di wilayah kabupaten Sawo Ponorogo terdapat pemberontakan kepada kerajaan Mataram. Akhirnya Bupati Madiun yang merupakan Bupati Mancanegara timur dengan gelar Ronggo yang wilayah kerjanya juga meliputi daerah Sawo Ponorogo, diberi tugas untuk memadamkan pemberontakan tersebut.',
    'profil.sejarah.p5':
    'Pada masa kepemimpinan Ronggo ke II yang bergelar Ronggo Prawirodirdjo inilah, lahir pahlawan Nasional Putra Madiun yang bertugas sebagai Senopati Perang, Pangeran Diponegoro yang bernama Ali Basah Sentot Prawirodirdjo.',
    'profil.sejarah.p6':
    'Sebelum meletus perang Diponegoro, Madiun belum pernah dijamah oleh orang-orang Belanda atau Eropa lainnya. Dengan berakhirnya perang Diponegoro, Belanda menjadi tahu potensi daerah Madiun dan terhitung mulai tanggal 1 Januari 1832 Madiun secara resmi dikuasai oleh Pemerintahan Hindia Belanda dan dibentuklah suatu tatanan Pemerintahan yang berstatus Karesidenan dengan ibukota di Desa Kartoharjo yang berdekatan dengan istana Kabupaten Madiun di Desa Pangongangan.',
    'profil.sejarah.p7':
    'Sejak saat itu mulailah berdatangan bangsa Belanda dan Eropa lain yang berprofesi dalam bidang perkebunan dan perindustrian yang akhirnya muncul berbagai perkebunan teh di Jamus dan Dungus, kopi di Kandangan dan tembakau di Pilangkenceng dan lain-lain dan mereka bermukim di dalam kota disekitar Istana Residen Madiun.',
    'profil.sejarah.p8':
    'Semua warga Belanda dan Eropa yang bermukim di Kota Madiun, karena statusnya yang merasa superior berusaha untuk melaksanakan segregasi sosial. Berdasarkan perundang-undangan Inland-sche Gementee Ordonantie, oleh departemen Binnen-landsch, dibentuk Staads Gementee Madiun atau Kota Praja Madiun berdasarkan peraturan Pemerintahan Hindia Belanda pada tanggal 20 Juni 1918 dengan berdasarkan Staatsblaad tahun 1918 nomor 326.',
    'profil.sejarah.p9':
    'Pada awalnya Walikota atau Burger-meester dirangkap oleh Asisten Residen merangkap sebagai Voor Setter, yang pertama Ir. W.M. Ingenlijf yang selanjutnya diganti oleh De Maand hingga tahun 1927.',
    'profil.sejarah.walikotaTitle': 'Daftar Walikota Madiun',
    'profil.sejarah.lambangTitle': 'Arti Lambang Pemerintah Kota Madiun',
    'profil.sejarah.lambang.perisai':
    'Perisai sebagai dasar lambang, dasar warna hijau tua, bermakna sebagai penjagaan dan perlindungan, dalam arti luas ialah pembinaan, keselamatan dan kesejahteraan penduduk dan pemerintah.',
    'profil.sejarah.lambang.gunung':
    'Dua gunung dan sungai warna biru dan putih, langit cerah warna kuning serta tanah subur warna hijau muda, bermakna letak Kota Madiun di daerah yang subur, di antara Gunung Lawu dan Wilis dimana mengalir Bengawan Madiun.',
    'profil.sejarah.lambang.fondamen':
    'Fondamen terdiri atas 5 batu utama warna merah, bermakna dasar pemerintah daerah yang demokratis bersendi Pancasila.',
    'profil.sejarah.lambang.tugu':
    'Tugu warna putih, bermakna persatuan dan pengabdian yang dijiwai semangat proklamasi 17 Agustus 1945.',
    'profil.sejarah.lambang.keris':
    'Keris Pusaka Tundung Madiun warna hitam, bermakna kejayaan, kepribadian dan sebagai penolak bahaya.',
    'profil.sejarah.lambang.padi':
    'Padi dan kapas warna kuning emas, setangkai padi terdiri atas 17 butir, setangkai kapas terdiri dari 8 bunga dan sembilan daun bermakna kemakmuran dan kesejahteraan sesuai dengan cita-cita proklamasi 17 Agustus 1945.',
    'profil.sejarah.warnaTitle': 'Makna Warna',
    'profil.sejarah.warna.hijau':
    'Hijau tua dan hijau muda berarti kesuburan, kemakmuran, dan kesejahteraan.',
    'profil.sejarah.warna.kuning':
    'Kuning dan kuning emas berarti kebesaran dan kejayaan.',
    'profil.sejarah.warna.biru': 'Biru berarti ketentraman dan kesetiaan.',
    'profil.sejarah.warna.putih': 'Putih berarti kesucian.',
    'profil.sejarah.warna.merah': 'Merah berarti keberanian.',
    'profil.sejarah.warna.hitam': 'Hitam berarti keabadian.',
    'profil.sejarah.lambang.kesimpulan':
    'Arti keseluruhan lambang daerah Kota Madiun adalah pemerintah daerah yang demokratis dengan penuh kesetiaan, keberanian, dan kesucian sebagai pelindung rakyat, mengabdi dan berjuang atas dasar jiwa proklamasi 17 Agustus 1945 menuju terciptanya masyarakat yang adil makmur dan sejahtera berdasarkan Pancasila.',
    // Profil - Perangkat Daerah
    'profil.opd.title': 'Alamat OPD Kota Madiun',
    'profil.opd.searchPlaceholder': 'Cari instansi...',
    'profil.opd.filterAll': 'Semua',
    'profil.opd.filterBadan': 'Badan',
    'profil.opd.filterDinas': 'Dinas',
    'profil.opd.filterKecamatan': 'Kecamatan',
    'profil.opd.filterKelurahan': 'Kelurahan',
    'profil.opd.filterSekretariat': 'Sekretariat',
    'profil.opd.filterLainnya': 'Lainnya',
    'profil.opd.tableNo': 'No',
    'profil.opd.tableInstansi': 'Instansi',
    'profil.opd.tableAlamat': 'Alamat',
    'profil.opd.tableKontak': 'Kontak',
    // Profil - Wilayah Geografis
    'profil.geografis.title': 'Wilayah Geografis Kota Madiun',
    'profil.geografis.p1':
    'Kota Madiun bagian dari wilayah Provinsi Jawa Timur bagian barat, terletak di dataran rendah antara 7’–8’ Lintang Selatan atau sepanjang 7,5 km bentang arah ke selatan, antara 111’–112’ Bujur Timur atau sepanjang 6 km bentang arah barat timur.',
    'profil.geografis.p2':
    'Letak geografis Kota Madiun sangat strategis karena terletak pada simpul jaringan jalan regional yang menghubungkan daerah-daerah di Jawa Timur dengan daerah-daerah di Jawa Tengah dan khususnya menghubungkan Kota Madiun dengan kota-kota besar lainnya yaitu Yogyakarta, Jakarta lewat Ngawi, Tawangmangu / Surakarta lewat Magetan, Pacitan-Trenggalek lewat Ponorogo serta jalur Kereta Api Lintas Pulau Jawa Bagian Selatan yang menghubungkan Surabaya-Jakarta lewat Purwokerto dan Surabaya – Bandung.',
    'profil.geografis.batasTitle': 'Batas Wilayah',
    'profil.geografis.batasDesc':
    'Secara administrasi wilayah Kota Madiun berbatasan dengan wilayah Kabupaten Madiun dan Magetan dengan batas-batas sebagai berikut:',
    'profil.geografis.utara': 'Sebelah Utara',
    'profil.geografis.utaraVal': 'Kecamatan Madiun',
    'profil.geografis.timur': 'Sebelah Timur',
    'profil.geografis.timurVal': 'Kecamatan Wungu',
    'profil.geografis.selatan': 'Sebelah Selatan',
    'profil.geografis.selatanVal': 'Kecamatan Geger',
    'profil.geografis.barat': 'Sebelah Barat',
    'profil.geografis.baratVal': 'Kecamatan Jiwan',
    // Profil - Maskot
    'profil.maskot.title': 'Maskot Kota Madiun',
    'profil.maskot.madyaSub': 'SANG PENDEKAR',
    'profil.maskot.madyaDesc':
    'Lambang kekuatan dan keseimbangan. Terinspirasi dari jiwa pendekar Kota Madiun, Madya hadir sebagai sosok yang teguh menjaga harmoni. Ia melambangkan semangat Kota Madiun yang tangguh, bersatu, dan berani melangkah ke masa depan tanpa melupakan akar budaya.',
    'profil.maskot.rasaSub': 'SANG PECEL',
    'profil.maskot.rasaDesc':
    'Lambang keramahan dan kekuatan budaya. Rasa bukan sekedar cita rasa kuliner, tetapi juga kehangatan dan kebersamaan. Ia memiliki karakter masyarakat Kota Madiun yang ramah, terbuka, dan mampu menyatukan perbedaan menjadi harmoni. Seperti sepiring pecel yang kaya rasa namun tetap seimbang.',
    'profil.maskot.reloSub': 'SANG KERETA API',
    'profil.maskot.reloDesc':
    'Lambang kemajuan dan konektivitas. Nama Relo merupakan cerminan dari rasa sikap hati yang tulus. Hal ini merupakan cerminan semangat pantang berhenti, dan melambangkan Kota Madiun sebagai kota yang terus bergerak maju, menghubungkan masa lalu dengan masa depan melalui jalur kemajuan.',
    'wisata.cat.taman': 'Taman Kota & Ruang Publik',
    'wisata.cat.keluarga': 'Wisata Keluarga & Hiburan',
    'wisata.cat.sejarah': 'Wisata Sejarah & Ikon Kota',
    'wisata.cat.religi': 'Wisata Religi',
    'wisata.cat.kekinian': 'Spot Kekinian',
    'wisata.desc.alun-alun':
    'Pusat aktivitas masyarakat dengan taman yang asri dan fasilitas lengkap untuk keluarga',
    'wisata.desc.psc':
    'Ruang publik modern dengan berbagai spot foto menarik dan area kuliner',
    'wisata.desc.bantaran-kali':
    'Taman tepi sungai yang sejuk dengan jogging track dan area bermain anak',
    'wisata.desc.sumber-umis':
    'Taman dengan sumber air alami yang menyegarkan dan pemandangan hijau',
    'wisata.desc.sun-city-theme-park':
    'Taman hiburan dan waterpark terbesar di Madiun dengan berbagai wahana seru',
    'wisata.desc.suncity-mall':
    'Pusat perbelanjaan modern dengan berbagai tenant dan area hiburan keluarga',
    'wisata.desc.nusantara-edupark':
    'Taman edukasi dengan konsep pembelajaran sambil bermain untuk anak-anak',
    'wisata.desc.tugu-pendekar':
    'Ikon Kota Madiun yang menjadi simbol keberanian dan semangat pendekar',
    'wisata.desc.patung-pendekar':
    'Patung ikonik yang menggambarkan jiwa pendekar masyarakat Madiun',
    'wisata.desc.merlion':
    'Spot foto unik di area PSC yang menjadi landmark baru Kota Madiun',
    'wisata.desc.masjid-agung':
    'Masjid megah dengan arsitektur modern yang menjadi pusat kegiatan keagamaan',
    'wisata.desc.masjid-kuno-taman':
    'Masjid bersejarah dengan arsitektur klasik yang masih terjaga keasliannya',
    'wisata.desc.gereja-cornelius':
    'Gereja bersejarah dengan arsitektur klasik Eropa yang indah',
    'wisata.desc.psc-kekinian':
    'Destinasi favorit anak muda dengan berbagai spot foto instagramable',
    'wisata.desc.bantaran-kekinian':
    'Spot sunset dan foto kekinian di tepi sungai yang hits di kalangan milenial',
    'wisata.desc.tugu-kekinian':
    'Landmark ikonik yang wajib dikunjungi untuk foto dan check-in',
    'wisata.desc.suncity-kekinian':
    'Mall modern dengan berbagai spot foto aesthetic dan kafe instagramable',
    // UMKM Page
    'umkm.title': 'Data UMKM Kota Madiun',
    'umkm.subtitle': 'Statistik Jumlah UMKM Per Sektor / Lapangan Usaha',
    'umkm.totalLatest': 'Total UMKM',
    'umkm.latestYear': 'Tahun Terbaru',
    'umkm.biggestCategory': 'Kategori Terbesar',
    'umkm.growth': 'Pertumbuhan',
    'umkm.unit': 'unit usaha',
    'umkm.difference': 'selisih',
    'umkm.trendPerCategory': 'Tren per Kategori',
    'umkm.dataTable': 'Tabel Data UMKM',
    'umkm.filterYearRange': 'Rentang Tahun',
    'umkm.filterCategory': 'Kategori',
    'umkm.searchCategory': 'Cari kategori...',
    'umkm.resetFilter': 'Reset Filter',
    'umkm.cat.pertanian': 'Pertanian',
    'umkm.cat.pertambangan': 'Pertambangan dan Penggalian',
    'umkm.cat.industri': 'Industri Pengolahan',
    'umkm.cat.listrik': 'Listrik, Gas dan Air',
    'umkm.cat.konstruksi': 'Konstruksi',
    'umkm.cat.perdagangan': 'Perdagangan, Hotel dan Restoran',
    'umkm.cat.transportasi': 'Transportasi',
    'umkm.cat.keuangan': 'Keuangan',
    'umkm.cat.jasa': 'Jasa-Jasa',
    'umkm.cat.total': 'TOTAL',
    // Kuliner Page
    'kuliner.title': 'Kuliner Kota Madiun',
    'kuliner.subtitle':
    'Jelajahi makanan khas, tempat makan populer, kuliner malam, kafe, dan oleh-oleh favorit dari Kota Madiun',
    'kuliner.searchPlaceholder': 'Cari kuliner atau tempat...',
    'kuliner.showing': 'Menampilkan',
    'kuliner.destinations': 'destinasi kuliner',
    'kuliner.openMaps': 'Buka Maps',
    'kuliner.cat.khas': 'Makanan Khas',
    'kuliner.cat.populer': 'Tempat Makan Populer',
    'kuliner.cat.malam': 'Kuliner Malam & Street Food',
    'kuliner.cat.cafe': 'Kafe & Tempat Nongkrong',
    'kuliner.cat.oleh': 'Oleh-Oleh Khas Madiun',
    'kuliner.badge.ikon': 'Ikon Kuliner',
    'kuliner.badge.favorit': 'Favorit',
    'kuliner.badge.unggulan': 'Unggulan',
    'kuliner.desc.pecel-madiun':
    'Makanan legendaris khas Madiun berupa sayuran rebus dengan sambal kacang pedas.',
    'kuliner.desc.nasi-jotos':
    'Nasi dengan tempe gembus dan sambal khas, makanan tradisional Madiun.',
    'kuliner.desc.lontong-tahu-telur':
    'Lontong dengan tahu goreng dan telur, disajikan dengan saus kacang gurih.',
    'kuliner.desc.soto-madiun':
    'Soto ayam dengan kuah bening gurih khas Jawa Timur.',
    'kuliner.desc.rawon':
    'Sup daging dengan kuah hitam dari kluwek, kaya rempah khas Jawa Timur.',
    'kuliner.desc.warung-pecel-pojok':
    'Warung pecel legendaris di sudut kota yang selalu ramai pengunjung.',
    'kuliner.desc.pecel-99':
    'Pecel dengan porsi melimpah dan sambal kacang khas.',
    'kuliner.desc.pecel-yu-gembrot':
    'Pecel legendaris dengan resep sambal turun-temurun.',
    'kuliner.desc.soto-ayam-kondang':
    'Soto ayam kuah bening gurih yang terkenal sejak lama.',
    'kuliner.desc.depot-tjanang':
    'Depot makanan Chinese klasik dengan menu nasi goreng dan mie khas.',
    'kuliner.desc.pak-to':
    'Warung sederhana dengan masakan rumahan yang lezat.',
    'kuliner.desc.pak-poen':
    'Rumah makan legendaris dengan berbagai menu khas Jawa.',
    'kuliner.desc.sleko-food-court':
    'Pusat kuliner dengan berbagai pilihan makanan dalam satu tempat.',
    'kuliner.desc.accord':
    'Restoran keluarga dengan menu beragam dan suasana nyaman.',
    'kuliner.desc.ayam-goreng-pemuda': 'Ayam goreng renyah dengan bumbu khas.',
    'kuliner.desc.leko':
    'Tempat makan populer dengan menu variatif dan harga terjangkau.',
    'kuliner.desc.super-bakso':
    'Bakso jumbo dengan kuah daging yang gurih dan segar.',
    'kuliner.desc.mie-gacoan':
    'Mie pedas viral dengan berbagai level kepedasan.',
    'kuliner.desc.wizzmie':
    'Mie kekinian dengan topping melimpah dan harga terjangkau.',
    'kuliner.desc.ayam-bakar-bg':
    'Ayam bakar dengan bumbu yang meresap sempurna.',
    'kuliner.desc.lombok-ijo':
    'Restoran dengan sambal hijau khas yang pedas dan segar.',
    'kuliner.desc.nawasena': 'Restoran modern dengan menu fusion Nusantara.',
    'kuliner.desc.kemangi': 'Restoran dengan masakan Sunda dan Jawa autentik.',
    'kuliner.desc.srasadesa':
    'Restoran dengan konsep pedesaan dan menu tradisional.',
    'kuliner.desc.ss-spesial-sambal':
    'Tempat makan dengan berbagai pilihan sambal khas.',
    'kuliner.desc.psc-malam':
    'Kawasan kuliner malam dengan berbagai jajanan dan makanan jalanan.',
    'kuliner.desc.bantaran-kali-malam':
    'Area kuliner malam di tepi sungai dengan suasana santai.',
    'kuliner.desc.alun-alun-malam':
    'Pusat jajanan malam di sekitar alun-alun dengan berbagai pilihan street food.',
    'kuliner.desc.bento-kopi':
    'Kedai kopi nyaman dengan menu kopi spesial dan pastry.',
    'kuliner.desc.wow-cafe':
    'Kafe instagramable dengan interior unik dan menu kreatif.',
    'kuliner.desc.kopi-kenangan':
    'Jaringan kopi modern dengan minuman susu kekinian.',
    'kuliner.desc.kopi-kakak':
    'Kedai kopi lokal dengan suasana hangat dan harga terjangkau.',
    'kuliner.desc.freen-house':
    'Kafe dengan konsep rumahan, nyaman untuk bekerja dan bersantai.',
    'kuliner.desc.balen-coffee':
    'Kedai kopi minimalis dengan biji kopi pilihan.',
    'kuliner.desc.brewok-coffee':
    'Kedai kopi dengan karakter kuat dan manual brew khas.',
    'kuliner.desc.hakui-coffee':
    'Kafe modern dengan suasana tenang untuk bekerja.',
    'kuliner.desc.sthana-coffee':
    'Kafe estetik dengan interior industrial dan kopi berkualitas.',
    'kuliner.desc.lokatara-coffee':
    'Kedai kopi dengan konsep alam dan menu single origin.',
    'kuliner.desc.rest-coffee-eatery':
    'Kafe dan restoran dengan menu lengkap dari kopi hingga makanan berat.',
    'kuliner.desc.waroeng-latte':
    'Kedai kopi spesialis latte dan minuman susu kekinian.',
    'kuliner.desc.starbucks-cokroaminoto':
    'Kedai kopi internasional dengan suasana premium di pusat kota.',
    'kuliner.desc.esme-coffee': 'Kafe elegan dengan menu kopi dan non-kopi.',
    'kuliner.desc.tomoro-coffee':
    'Kedai kopi strategis di area stasiun untuk grab-and-go.',
    'kuliner.desc.gulali-cafe':
    'Kafe dengan konsep manis dan warna-warni, cocok untuk nongkrong.',
    'kuliner.desc.work-n-play-cafe':
    'Kafe coworking favorit dengan WiFi cepat dan suasana produktif.',
    'kuliner.desc.magia-coffee':
    'Kedai kopi dengan konsep unik dan penyajian kreatif.',
    'kuliner.desc.bluder-cokro':
    'Roti bluder khas Madiun yang lembut dan harum, cocok sebagai oleh-oleh.',
    'kuliner.desc.brem-mirasa':
    'Brem khas Madiun dengan rasa manis yang legendaris.',
    'kuliner.desc.madumongso':
    'Camilan tradisional dari ketan hitam dan gula jawa, manis dan legit.',
    'kuliner.desc.kerupuk-puli':
    'Kerupuk khas dari nasi dengan tekstur renyah.',
    // Fasilitas Page
    'fasilitas.title': 'Fasilitas Kota Madiun',
    'fasilitas.subtitle':
    'Temukan fasilitas umum, pendidikan, kesehatan, dan layanan publik di Kota Madiun',
    'fasilitas.searchPlaceholder': 'Cari fasilitas...',
    'fasilitas.showing': 'Menampilkan',
    'fasilitas.destinations': 'fasilitas',
    'fasilitas.openMaps': 'Buka Maps',
    'fasilitas.cat.belanja': 'Perbelanjaan',
    'fasilitas.cat.kesehatan': 'Kesehatan',
    'fasilitas.cat.pendidikan': 'Pendidikan',
    'fasilitas.cat.transportasi': 'Transportasi',
    'fasilitas.cat.ibadah': 'Tempat Ibadah',
    'fasilitas.cat.umum': 'Fasilitas Umum',
    'fasilitas.cat.layanan': 'Layanan Publik',
    'fasilitas.subcat.sd': 'Sekolah Dasar',
    'fasilitas.subcat.mi': 'Madrasah Ibtidaiyah',
    'fasilitas.subcat.smpn': 'SMP Negeri',
    'fasilitas.subcat.smps': 'SMP Swasta',
    'fasilitas.subcat.mts': 'Madrasah Tsanawiyah',
    'fasilitas.subcat.sma': 'SMA',
    'fasilitas.subcat.smk': 'SMK',
    'fasilitas.subcat.ma': 'Madrasah Aliyah',
    'fasilitas.subcat.pt': 'Perguruan Tinggi',
    'fasilitas.desc.suncity-mall':
    'Pusat perbelanjaan modern terbesar di Madiun dengan berbagai tenant dan hiburan keluarga.',
    'fasilitas.desc.plaza-lawu':
    'Pusat perbelanjaan di area strategis Madiun dengan berbagai toko dan pilihan kuliner.',
    'fasilitas.desc.plaza-madiun':
    'Pusat perbelanjaan dengan berbagai kebutuhan sehari-hari dan toko fashion.',
    'fasilitas.desc.pasar-besar':
    'Pasar tradisional terbesar di Madiun dengan beragam produk lokal dan kebutuhan sehari-hari.',
    'fasilitas.desc.pasar-sleko':
    'Pasar tradisional yang terkenal dengan kuliner khas dan jajanan Madiun.',
    'fasilitas.desc.rsud-madiun':
    'Rumah sakit umum daerah utama dengan layanan kesehatan komprehensif.',
    'fasilitas.desc.rs-paru':
    'Rumah sakit khusus paru dengan fasilitas perawatan pernapasan modern.',
    'fasilitas.desc.rs-griya-husada':
    'Rumah sakit swasta dengan layanan kesehatan berkualitas dan fasilitas modern.',
    'fasilitas.desc.rsi-aisyiyah':
    'Rumah sakit Islam dengan layanan kesehatan berbasis nilai-nilai Islam.',
    'fasilitas.desc.rs-santa-clara':
    'Rumah sakit Katolik dengan layanan kesehatan yang ramah dan profesional.',
    'fasilitas.desc.rs-merpati':
    'Rumah sakit dengan layanan kesehatan umum dan spesialis.',
    'fasilitas.desc.sdn-nambangan-lor-1':
    'Sekolah dasar negeri unggulan di kawasan Nambangan Lor.',
    'fasilitas.desc.sdn-mojorejo-1':
    'Sekolah dasar negeri dengan prestasi akademik dan non-akademik.',
    'fasilitas.desc.sdn-kanigoro':
    'Sekolah dasar negeri dengan lingkungan belajar yang kondusif.',
    'fasilitas.desc.min-1':
    'Madrasah ibtidaiyah negeri dengan kurikulum pendidikan Islam terpadu.',
    'fasilitas.desc.min-2':
    'Madrasah ibtidaiyah negeri dengan fasilitas pembelajaran modern.',
    'fasilitas.desc.mi-al-hidayah':
    'Madrasah ibtidaiyah swasta dengan pendidikan karakter Islami.',
    'fasilitas.desc.smpn-1':
    'SMP negeri unggulan dengan prestasi akademik dan ekstrakurikuler terbaik.',
    'fasilitas.desc.smpn-2':
    'SMP negeri unggulan dengan program pendidikan berkualitas tinggi.',
    'fasilitas.desc.smpn-3':
    'SMP negeri unggulan dengan fasilitas pembelajaran modern.',
    'fasilitas.desc.smpn-4':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-5':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-6':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-7':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-8':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-9':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-10':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-11':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-12':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-13':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-14':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smp-darul-madinah':
    'SMP Islam swasta dengan program pesantren dan tahfidz Al-Quran.',
    'fasilitas.desc.smp-mbs-hamka':
    'SMP boarding school modern dengan kurikulum terpadu.',
    'fasilitas.desc.smp-mitra-harapan':
    'SMP swasta dengan pendekatan pembelajaran inovatif.',
    'fasilitas.desc.smp-progresif':
    'SMP swasta progresif dengan kurikulum Islam modern.',
    'fasilitas.desc.mtsn-madiun':
    'Madrasah tsanawiyah negeri dengan prestasi akademik dan keagamaan.',
    'fasilitas.desc.mts-mujaddadiyyah':
    'Madrasah tsanawiyah dengan pendidikan Islam tradisional.',
    'fasilitas.desc.mts-pertanian':
    'Madrasah tsanawiyah dengan program pertanian dan lingkungan.',
    'fasilitas.desc.mts-siti-hajar':
    'Madrasah tsanawiyah swasta dengan lingkungan belajar Islami.',
    'fasilitas.desc.sman-1':
    'SMA negeri terbaik di Madiun dengan prestasi akademik tingkat nasional.',
    'fasilitas.desc.sman-2':
    'SMA negeri unggulan dengan program sains dan teknologi.',
    'fasilitas.desc.sman-3':
    'SMA negeri dengan program semi militer dan disiplin tinggi.',
    'fasilitas.desc.sman-4':
    'SMA negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.sman-5':
    'SMA negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.sman-6':
    'SMA negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smkn-1':
    'SMK negeri dengan program keahlian bisnis dan manajemen.',
    'fasilitas.desc.smkn-2':
    'SMK negeri dengan program keahlian teknik dan industri.',
    'fasilitas.desc.smkn-3':
    'SMK negeri dengan program keahlian pariwisata dan kuliner.',
    'fasilitas.desc.man-1':
    'Madrasah aliyah negeri dengan program keagamaan dan sains.',
    'fasilitas.desc.man-2': 'Madrasah aliyah negeri dengan kurikulum terpadu.',
    'fasilitas.desc.ma-mujaddadiyyah':
    'Madrasah aliyah swasta dengan pendidikan Islam tradisional.',
    'fasilitas.desc.ma-darul-madinah':
    'Madrasah aliyah dengan program pesantren.',
    'fasilitas.desc.univ-pgri':
    'Universitas swasta unggulan dengan program pendidikan dan keguruan.',
    'fasilitas.desc.univ-muhammadiyah':
    'Universitas Islam dengan berbagai program studi unggulan.',
    'fasilitas.desc.politeknik-negeri':
    'Politeknik negeri dengan program vokasi dan teknologi terapan.',
    'fasilitas.desc.stikes-bhm':
    'Sekolah tinggi ilmu kesehatan dengan program keperawatan dan kebidanan.',
    'fasilitas.desc.stasiun-madiun':
    'Stasiun kereta api utama Kota Madiun dengan layanan antarkota dan lokal.',
    'fasilitas.desc.terminal-purboyo':
    'Terminal bus utama dengan rute antarkota dan antarprovinsi.',
    'fasilitas.desc.bus-sekolah':
    'Layanan bus sekolah gratis untuk pelajar Kota Madiun.',
    'fasilitas.desc.masjid-agung':
    'Masjid agung yang menjadi pusat kegiatan keagamaan Islam di Madiun.',
    'fasilitas.desc.masjid-kuno':
    'Masjid bersejarah dengan arsitektur klasik yang masih terjaga keasliannya.',
    'fasilitas.desc.gereja-cornelius':
    'Gereja bersejarah dengan arsitektur klasik Eropa yang indah.',
    'fasilitas.desc.alun-alun':
    'Pusat aktivitas masyarakat dengan taman yang asri dan fasilitas lengkap.',
    'fasilitas.desc.psc':
    'Ruang publik modern dengan spot foto dan area kuliner.',
    'fasilitas.desc.bantaran-kali':
    'Taman tepi sungai yang sejuk dengan jogging track dan area bermain.',
    'fasilitas.desc.polres':
    'Kepolisian resort kota untuk keamanan dan ketertiban masyarakat.',
    'fasilitas.desc.pemkot':
    'Kantor pemerintah kota untuk layanan administrasi dan publik.',
    'fasilitas.desc.disdukcapil':
    'Dinas kependudukan dan catatan sipil untuk layanan dokumen kependudukan.',
    // Penginapan Page
    'penginapan.title': 'Penginapan Kota Madiun',
    'penginapan.subtitle':
    'Temukan hotel dan tempat menginap terbaik di Kota Madiun dengan fasilitas lengkap dan lokasi strategis.',
    'penginapan.searchPlaceholder': 'Cari penginapan...',
    'penginapan.showing': 'Menampilkan',
    'penginapan.destinations': 'penginapan',
    'penginapan.openMaps': 'Buka Maps',
    'penginapan.googleRating': 'Rating Google',
    'penginapan.breadcrumb.home': 'Beranda',
    'penginapan.breadcrumb.jelajah': 'Jelajah Kota',
    'penginapan.breadcrumb.penginapan': 'Penginapan',
    'penginapan.desc.mercure':
    'Hotel bintang 4 dengan fasilitas lengkap dan pelayanan premium di pusat kota.',
    'penginapan.desc.aston':
    'Hotel modern dengan fasilitas konferensi lengkap dan kolam renang.',
    'penginapan.desc.favehotel':
    'Hotel budget yang stylish dengan lokasi strategis dan nyaman.',
    'penginapan.desc.merdeka':
    'Hotel legendaris dengan arsitektur klasik dan suasana yang tenang.',
    'penginapan.desc.sun-hotel':
    'Hotel nyaman yang terintegrasi dengan pusat perbelanjaan Suncity Mall.',
    'penginapan.desc.amaris':
    'Pilihan tepat untuk smart traveler dengan fasilitas esensial yang berkualitas.',
    // Layanan Pages
    'layanan.access': 'Akses Layanan',
    'layanan.kesehatan.title': 'Layanan Kesehatan',
    'layanan.kesehatan.desc':
    'Akses berbagai layanan kesehatan masyarakat Kota Madiun dengan mudah dan cepat.',
    'layanan.kesehatan.antrian.title': 'Antrian Puskesmas',
    'layanan.kesehatan.antrian.desc':
    'Sistem antrian online terpadu untuk seluruh Puskesmas di Kota Madiun.',
    'layanan.kependudukan.title': 'Pelayanan Kependudukan',
    'layanan.kependudukan.desc':
    'Layanan administrasi kependudukan dan pencatatan sipil Kota Madiun secara online.',
    'layanan.kependudukan.ktp.title': 'Layanan KTP',
    'layanan.kependudukan.ktp.desc':
    'Layanan pengurusan Kartu Tanda Penduduk (KTP) elektronik.',
    'layanan.kependudukan.pindahKartoharjo.title': 'Pindah KK Kartoharjo',
    'layanan.kependudukan.pindahKartoharjo.desc':
    'Layanan pindah Kartu Keluarga khusus wilayah Kecamatan Kartoharjo.',
    'layanan.kependudukan.pindahManguharjo.title': 'Pindah KK Manguharjo',
    'layanan.kependudukan.pindahManguharjo.desc':
    'Layanan pindah Kartu Keluarga khusus wilayah Kecamatan Manguharjo.',
    'layanan.kependudukan.pindahTaman.title': 'Pindah KK Taman',
    'layanan.kependudukan.pindahTaman.desc':
    'Layanan pindah Kartu Keluarga khusus wilayah Kecamatan Taman.',
    'layanan.kependudukan.aktaMati.title': 'Layanan Akta Mati & KIA',
    'layanan.kependudukan.aktaMati.desc':
    'Pengurusan Akta Kematian dan Kartu Identitas Anak (KIA).',
    'layanan.kependudukan.aktaLahir.title': 'Layanan Akta Kelahiran',
    'layanan.kependudukan.aktaLahir.desc':
    'Pengurusan Akta Kelahiran terpadu (3 in 1).',
    'layanan.pendidikan.title': 'Layanan Pendidikan',
    'layanan.pendidikan.desc':
    'Akses informasi dan layanan pendidikan untuk warga Kota Madiun.',
    'layanan.pendidikan.besmart.title': 'Be Smart',
    'layanan.pendidikan.besmart.desc':
    'Program beasiswa mahasiswa Kota Madiun.',
    'layanan.pasar.title': 'Info Pasar',
    'layanan.pasar.desc':
    'Informasi harga pasar, UMKM, dan layanan perdagangan Kota Madiun.',
    'layanan.pasar.marketplace.title': 'Marketplace',
    'layanan.pasar.marketplace.desc':
    'Platform jual beli produk lokal Kota Madiun.',
    'layanan.pasar.umkm.title': 'UMKM',
    'layanan.pasar.umkm.desc':
    'Portal informasi dan pendaftaran UMKM Kota Madiun.',
    'layanan.pasar.esayur.title': 'E-Sayur',
    'layanan.pasar.esayur.desc':
    'Layanan belanja sayur dan kebutuhan pokok secara online.',
    // Info Pasar Page
    'infoPasar.title': 'Info Pasar',
    'infoPasar.subtitle':
    'Akses layanan digital pasar, UMKM, dan kebutuhan pangan Kota Madiun melalui portal resmi yang tersedia.',
    'infoPasar.marketplace.desc':
    'Portal marketplace resmi untuk mendukung pemasaran produk lokal dan layanan perdagangan Kota Madiun.',
    'infoPasar.umkm.desc':
    'Layanan digital untuk pelaku UMKM Kota Madiun dalam mendukung pengembangan usaha dan promosi produk.',
    'infoPasar.esayur.desc':
    'Layanan digital untuk akses kebutuhan sayur dan bahan pangan secara praktis.',
    'infoPasar.access': 'Akses Layanan',
    // Madiun Terkini
    'madiunTerkini.title': 'Madiun Terkini',
    'madiunTerkini.subtitle':
    'Akses informasi terbaru seputar agenda, berita, rilis, pengumuman, dan layanan informasi Kota Madiun.',
    'madiunTerkini.access': 'Akses',
    'madiunTerkini.comingSoon': 'Konten akan ditambahkan kemudian.',
    'madiunTerkini.agendaKota': 'Agenda Kota',
    'madiunTerkini.beritaPemerintahan': 'Berita Pemerintahan',
    'madiunTerkini.madiunToday': 'Madiun Today',
    'madiunTerkini.suaraMadiun': 'Suara Madiun',
    'madiunTerkini.ruangSatu': 'Ruang Satu',
    'madiunTerkini.rilis': 'Rilis',
    'madiunTerkini.pengumuman': 'Pengumuman',
    'madiunTerkini.lowongan': 'Lowongan'
  },
  en: {
    // Navbar
    'nav.govTitle': 'MADIUN CITY GOVERNMENT',
    'nav.province': 'EAST JAVA PROVINCE',
    'nav.home': 'Home',
    'nav.profile': 'Profile',
    'nav.services': 'Services',
    'nav.government': 'Government',
    'nav.latestNews': 'Latest News',
    'nav.ppid': 'PPID',
    'nav.cityName': 'MADIUN CITY',
    'nav.visiMisi': 'Vision & Mission',
    'nav.sejarah': 'History',
    'nav.perangkatDaerah': 'Regional Apparatus',
    'nav.wilayahGeografis': 'Geographic Area',
    'nav.maskot': 'Madiun City Mascot',
    'nav.layananPublik': 'Public Services',
    'nav.layananInternal': 'Internal Services',
    'nav.layananWA': 'WA Service (Emergency)',
    'nav.mbangunSwarga': 'Mbangun Swarga',
    'nav.ppidKota': 'PPID Madiun City',
    'nav.perizinan': 'Licensing & Investment',
    'nav.pelayananKelurahan': 'Sub-district Services',
    'nav.kesehatan': 'Health',
    'nav.pelayananKependudukan': 'Population Services',
    'nav.ketenagakerjaan': 'Employment',
    'nav.pendidikan': 'Education',
    'nav.infoPasar': 'Market Info',
    'nav.openData': 'Open Data',
    'nav.koviOtda': 'Kovi Otda',
    'nav.lpse': 'LPSE',
    'nav.sirup': 'SIRUP',
    'nav.laporSP4N': 'Report SP4N',
    'nav.spbe': 'SPBE',
    'nav.smartCity': 'Smart City',
    'nav.cctv': 'CCTV',
    'nav.jdih': 'JDIH',
    'nav.sirupa': 'SIRUPA',
    'nav.agendaKota': 'City Agenda',
    'nav.beritaPemerintahan': 'Government News',
    'nav.madiunToday': 'Madiun Today',
    'nav.suaraMadiun': 'Voice of Madiun',
    'nav.ruangSatu': 'Ruang Satu',
    'nav.rilis': 'Press Release',
    'nav.pengumuman': 'Announcements',
    'nav.lowongan': 'Job Vacancies',
    // Hero
    'hero.badge': 'OFFICIAL GOVERNMENT PORTAL',
    'hero.subtitle':
    'Serving wholeheartedly to realize a Madiun City that is Advanced, Prosperous, and Dignified.',
    'hero.searchPlaceholder': 'What are you looking for?',
    'hero.population': 'population',
    'hero.kelurahan': 'Sub-districts',
    'hero.kecamatan': 'Districts',
    'hero.slide1Title': 'Madiun City Hall',
    'hero.slide1Sub': 'Center of Madiun City Government',
    'hero.slide2Title': 'Madiun Station',
    'hero.slide2Sub': 'Gateway to Madiun City',
    'hero.slide3Title': 'Madiun Tourism Park',
    'hero.slide3Sub': 'Family Tourism Destination',
    'hero.slide4Title': 'Madiun City Square',
    'hero.slide4Sub': 'Heart of Madiun City',
    'hero.prevSlide': 'Previous slide',
    'hero.nextSlide': 'Next slide',
    // Quick Services
    'services.title': 'Quick Services',
    'services.viewAll': 'View All',
    'services.laporSPAN': 'Report SPAN',
    'services.awakSigap': 'Emergency Response',
    'services.kesehatan': 'Health',
    'services.pendidikan': 'Education',
    'services.ketenagakerjaan': 'Employment',
    'services.perizinan': 'Licensing',
    'services.infoPasar': 'Market Info',
    // Jelajah
    'jelajah.title': 'EXPLORE MADIUN CITY',
    'jelajah.aboutTitle': 'ABOUT MADIUN',
    'jelajah.aboutText':
    'Madiun City is one of the cities located in East Java Province, Indonesia. The city holds the position as the fourth largest city in East Java after Surabaya, Malang, and Kediri. Geographically, Madiun City is located approximately 150 km west of Surabaya, about 90 km east of Surakarta, and approximately 33 km southeast of Ngawi.',
    'jelajah.visit': 'Visit',
    'jelajah.prev': 'Previous',
    'jelajah.next': 'Next',
    'jelajah.wisata': 'Tourism',
    'jelajah.wisataDesc': 'Exciting tourist destinations',
    'jelajah.kuliner': 'Culinary',
    'jelajah.kulinerDesc': 'Authentic Madiun flavors',
    'jelajah.fasilitas': 'Facilities',
    'jelajah.fasilitasDesc': 'City public facilities',
    'jelajah.umkm': 'SMEs',
    'jelajah.umkmDesc': 'Local premium products',
    'jelajah.penginapan': 'Accommodation',
    'jelajah.penginapanDesc': 'Comfortable hotels & stays',
    // GprKomdigi / Demographics
    'demo.title': 'Taman District Demographics',
    'demo.density': 'Population Density',
    'demo.densityUnit': 'People/km² (2024)',
    'demo.genderRatio': 'Gender Ratio',
    'demo.productiveAge': 'Productive Age',
    'demo.years': '15-64 Years',
    'demo.highCategory': 'High Category',
    'demo.article': 'Article',
    'demo.article1':
    'Strengthening Forest Fire Mitigation, Government Holds Alert Rally in Riau Province',
    'demo.article2':
    'Stimulus Funds for Post-Disaster Housing Repairs in Sumatra Distributed',
    'demo.article3':
    "Supporting Minister Erick's Firmness, NOC Indonesia Chairman",
    // News
    'news.title': 'CITY NEWS',
    'news.govNews': '✱ GOVERNMENT NEWS',
    'news.madiunToday': '✱ MADIUN TODAY',
    'news.viewAll': 'View All',
    'news.gov1Title':
    'Mayor of Madiun Leads Troop Rally for Ketupat Operation 2025',
    'news.gov1Excerpt':
    'The Mayor of Madiun led a troop rally for Ketupat Operation 2025 to ensure security and smooth homecoming traffic.',
    'news.gov2Title':
    'Madiun City Government Wins Child-Friendly City Award in Main Category',
    'news.gov2Excerpt':
    'Madiun City Government once again received the Child-Friendly City award in the main category from the Ministry of PPPA.',
    'news.today1Title':
    'Madiun Pecel Festival 2025 Successfully Attracts Thousands of Visitors',
    'news.today1Excerpt':
    'This signature culinary festival of Madiun City successfully attracted thousands of visitors from various regions and introduced Madiun pecel nationally.',
    'news.today2Title':
    'Madiun Car Free Day Gets Livelier with Cultural Art Performances',
    'news.today2Excerpt':
    'Car Free Day activities on Jalan Pahlawan, Madiun City, are getting livelier with cultural art performances from various communities.',
    // Interactive Map
    'map.clickDetail': 'Click to view details →',
    'map.overallArea': 'Overall Area',
    'map.district': 'Districts',
    'map.subDistrict': 'Sub-districts',
    'map.footer': 'Interactive Map of Madiun City',
    'map.distPrefix': 'Dist.',
    // Floating Buttons
    'a11y.title': 'Accessibility Menu',
    'a11y.highContrast': 'High Contrast',
    'a11y.highlightLinks': 'Highlight Links',
    'a11y.largeText': 'Larger Text',
    'a11y.textSpacing': 'Text Spacing',
    'a11y.pauseAnimations': 'Pause Animations',
    'a11y.hideImages': 'Hide Images',
    'a11y.dyslexiaFriendly': 'Dyslexia Friendly',
    'a11y.bigCursor': 'Big Cursor',
    'a11y.tooltips': 'Tooltips',
    'a11y.lineHeight': 'Line Height',
    'a11y.textAlign': 'Text Alignment',
    'a11y.grayscale': 'Saturation',
    'a11y.reset': 'Reset',
    'a11y.close': 'Close',
    'emergency.awakSigap': 'Emergency Response',
    'emergency.damkar': 'Fire Dept 113',
    'emergency.polisi': 'Police 110',
    'emergency.ambulans': 'Ambulance 118',
    // Footer
    'footer.cityName': 'MADIUN CITY',
    'footer.govName': 'Madiun City Government',
    'footer.motto': 'City of Warriors',
    'footer.description':
    'Serving wholeheartedly to realize a Madiun City that is Advanced, Prosperous, and Dignified.',
    'footer.contactUs': 'CONTACT US',
    'footer.emergency': 'Emergency',
    'footer.callCenter': 'Call Center',
    'footer.ambulance': 'Ambulance',
    'footer.police': 'Police',
    'footer.fireDept': 'Fire Department',
    'footer.copyright': 'Madiun City Government. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    // Shared UI Keys
    'page.filter': 'Filter',
    'page.sortRating': 'Highest Rating',
    'page.sortName': 'Name A-Z',
    'page.noResults': 'No results found',
    'page.noResultsHint':
    'Try changing your search keywords or category filter',
    'page.allCategories': 'All Categories',
    // Wisata Page
    'wisata.title': 'Madiun City Tourism List',
    'wisata.subtitle':
    'Explore public spaces, city icons, family tourism, and religious tourism in Madiun City',
    'wisata.searchPlaceholder': 'Search tourist spots...',
    'wisata.showing': 'Showing',
    'wisata.destinations': 'destinations',
    'wisata.viewMaps': 'View on Maps',
    // Profil - Visi Misi
    'profil.visiMisi.title': 'Vision and Mission of Madiun City',
    'profil.visiMisi.visiTitle': 'Vision',
    'profil.visiMisi.visiText':
    '“Realizing an Advanced, Clean, and Authoritative Government, Together with the Community Building a World-Class City”',
    'profil.visiMisi.misiTitle': 'Mission',
    'profil.visiMisi.misi1':
    'Improving the development of quality and globally competitive human resources.',
    'profil.visiMisi.misi2':
    'Improving the quality of life of the community through inclusive regional-based economic development that is equitable and just.',
    'profil.visiMisi.misi3':
    'Improving quality and environmentally friendly facilities and infrastructure.',
    'profil.visiMisi.misi4':
    'Improving social harmony and public order and security.',
    'profil.visiMisi.misi5':
    'Improving public information disclosure as a control of government performance and accountability.',
    'profil.visiMisi.misi6':
    'Improving world-class governance that is anti-corruption.',
    'profil.visiMisi.misi7':
    'Increasing community participation through innovation in sustainable development.',
    'profil.visiMisi.misi8':
    'Realizing quality social and cultural resilience.',
    // Profil - Sejarah
    'profil.sejarah.title': 'History of Madiun City',
    'profil.sejarah.p1':
    'The establishment of the Madiun City Government can be studied from the remains of historical heritage, both in the form of goods, customs and institutions. In the Madiun City area there are 2 sub-districts which in the past during the Second Mataram Sultanate Government both sub-districts had the status of pardikan land which was free to manage its own household, namely the pardikan land of Taman and Kuncen.',
    'profil.sejarah.p2':
    'Long before, at the end of the Majapahit government in southern Madiun there was the Gagelang kingdom / government founded by Adipati Gugur, the last son of Brawijaya.',
    'profil.sejarah.p3':
    "Furthermore, with geographical and economic considerations, the center of government shifted north to the edge of the Madiun river, which was called Kutho Miring in the current Demangan sub-district area and then moved again to the current Madiun Regent's Official Residence complex.",
    'profil.sejarah.p4':
    'During the Kutho Miring government, in the Sawo Ponorogo district there was a rebellion against the Mataram kingdom. Finally the Regent of Madiun who was the Regent of East Mancanegara with the title Ronggo whose working area also included the Sawo Ponorogo area, was given the task of quelling the rebellion.',
    'profil.sejarah.p5':
    'During the leadership of Ronggo II with the title Ronggo Prawirodirdjo, a National hero, Son of Madiun, was born who served as War Commander, Prince Diponegoro named Ali Basah Sentot Prawirodirdjo.',
    'profil.sejarah.p6':
    'Before the Diponegoro war broke out, Madiun had never been touched by the Dutch or other Europeans. With the end of the Diponegoro war, the Dutch became aware of the potential of the Madiun area and starting January 1, 1832 Madiun was officially controlled by the Dutch East Indies Government and a Government system was formed with the status of a Residency with the capital in Kartoharjo Village which is close to the Madiun Regency palace in Pangongangan Village.',
    'profil.sejarah.p7':
    'Since then, the Dutch and other Europeans who work in the plantation and industrial sectors began to arrive, which eventually led to the emergence of various tea plantations in Jamus and Dungus, coffee in Kandangan and tobacco in Pilangkenceng and others and they settled in the city around the Madiun Resident Palace.',
    'profil.sejarah.p8':
    'All Dutch and European citizens who settled in Madiun City, because of their status of feeling superior, tried to implement social segregation. Based on the Inland-sche Gementee Ordonantie legislation, by the Binnen-landsch department, the Staads Gementee Madiun or Madiun Municipality was formed based on the Dutch East Indies Government regulation on June 20, 1918 based on Staatsblaad 1918 number 326.',
    'profil.sejarah.p9':
    'Initially the Mayor or Burger-meester was concurrently held by the Assistant Resident concurrently as Voor Setter, the first was Ir. W.M. Ingenlijf who was subsequently replaced by De Maand until 1927.',
    'profil.sejarah.walikotaTitle': 'List of Mayors of Madiun',
    'profil.sejarah.lambangTitle':
    'Meaning of the Madiun City Government Emblem',
    'profil.sejarah.lambang.perisai':
    'The shield as the base of the emblem, dark green base color, means guarding and protection, in a broad sense is the guidance, safety and welfare of the population and government.',
    'profil.sejarah.lambang.gunung':
    'Two mountains and rivers colored blue and white, bright yellow sky and light green fertile soil, meaning the location of Madiun City in a fertile area, between Mount Lawu and Wilis where the Madiun River flows.',
    'profil.sejarah.lambang.fondamen':
    'The foundation consists of 5 main red stones, meaning the basis of a democratic regional government based on Pancasila.',
    'profil.sejarah.lambang.tugu':
    'White monument, meaning unity and devotion inspired by the spirit of the August 17, 1945 proclamation.',
    'profil.sejarah.lambang.keris':
    'The black Tundung Madiun Heirloom Kris, means glory, personality and as a repellent of danger.',
    'profil.sejarah.lambang.padi':
    'Golden yellow rice and cotton, a stalk of rice consists of 17 grains, a stalk of cotton consists of 8 flowers and nine leaves meaning prosperity and welfare in accordance with the ideals of the August 17, 1945 proclamation.',
    'profil.sejarah.warnaTitle': 'Meaning of Colors',
    'profil.sejarah.warna.hijau':
    'Dark green and light green mean fertility, prosperity, and welfare.',
    'profil.sejarah.warna.kuning':
    'Yellow and golden yellow mean greatness and glory.',
    'profil.sejarah.warna.biru': 'Blue means peace and loyalty.',
    'profil.sejarah.warna.putih': 'White means purity.',
    'profil.sejarah.warna.merah': 'Red means courage.',
    'profil.sejarah.warna.hitam': 'Black means eternity.',
    'profil.sejarah.lambang.kesimpulan':
    'The overall meaning of the Madiun City regional emblem is a democratic regional government with full loyalty, courage, and purity as a protector of the people, serving and fighting based on the spirit of the August 17, 1945 proclamation towards the creation of a just, prosperous and prosperous society based on Pancasila.',
    // Profil - Perangkat Daerah
    'profil.opd.title': 'Madiun City OPD Addresses',
    'profil.opd.searchPlaceholder': 'Search institution...',
    'profil.opd.filterAll': 'All',
    'profil.opd.filterBadan': 'Agency',
    'profil.opd.filterDinas': 'Department',
    'profil.opd.filterKecamatan': 'District',
    'profil.opd.filterKelurahan': 'Sub-district',
    'profil.opd.filterSekretariat': 'Secretariat',
    'profil.opd.filterLainnya': 'Others',
    'profil.opd.tableNo': 'No',
    'profil.opd.tableInstansi': 'Institution',
    'profil.opd.tableAlamat': 'Address',
    'profil.opd.tableKontak': 'Contact',
    // Profil - Wilayah Geografis
    'profil.geografis.title': 'Geographical Area of Madiun City',
    'profil.geografis.p1':
    "Madiun City is part of the western part of East Java Province, located in the lowlands between 7'-8' South Latitude or along a 7.5 km stretch to the south, between 111'-112' East Longitude or along a 6 km stretch east-west.",
    'profil.geografis.p2':
    'The geographical location of Madiun City is very strategic because it is located at the node of the regional road network connecting areas in East Java with areas in Central Java and specifically connecting Madiun City with other major cities, namely Yogyakarta, Jakarta via Ngawi, Tawangmangu / Surakarta via Magetan, Pacitan-Trenggalek via Ponorogo and the Southern Route of the Java Island Railway connecting Surabaya-Jakarta via Purwokerto and Surabaya - Bandung.',
    'profil.geografis.batasTitle': 'Regional Boundaries',
    'profil.geografis.batasDesc':
    'Administratively, the Madiun City area borders the Madiun and Magetan Regency areas with the following boundaries:',
    'profil.geografis.utara': 'North Side',
    'profil.geografis.utaraVal': 'Madiun District',
    'profil.geografis.timur': 'East Side',
    'profil.geografis.timurVal': 'Wungu District',
    'profil.geografis.selatan': 'South Side',
    'profil.geografis.selatanVal': 'Geger District',
    'profil.geografis.barat': 'West Side',
    'profil.geografis.baratVal': 'Jiwan District',
    // Profil - Maskot
    'profil.maskot.title': 'Madiun City Mascot',
    'profil.maskot.madyaSub': 'THE WARRIOR',
    'profil.maskot.madyaDesc':
    'A symbol of strength and balance. Inspired by the warrior soul of Madiun City, Madya is present as a figure who firmly maintains harmony. He symbolizes the spirit of Madiun City which is tough, united, and brave to step into the future without forgetting its cultural roots.',
    'profil.maskot.rasaSub': 'THE PECEL',
    'profil.maskot.rasaDesc':
    'A symbol of friendliness and cultural strength. Rasa is not just a culinary taste, but also warmth and togetherness. She has the character of the people of Madiun City who are friendly, open, and able to unite differences into harmony. Like a plate of pecel that is rich in flavor but remains balanced.',
    'profil.maskot.reloSub': 'THE TRAIN',
    'profil.maskot.reloDesc':
    'A symbol of progress and connectivity. The name Relo is a reflection of a sincere attitude of heart. This is a reflection of the spirit of never stopping, and symbolizes Madiun City as a city that continues to move forward, connecting the past with the future through the path of progress.',
    'wisata.cat.taman': 'City Parks & Public Spaces',
    'wisata.cat.keluarga': 'Family & Entertainment',
    'wisata.cat.sejarah': 'History & City Icons',
    'wisata.cat.religi': 'Religious Tourism',
    'wisata.cat.kekinian': 'Trendy Spots',
    'wisata.desc.alun-alun':
    'Community activity center with lush gardens and complete family facilities',
    'wisata.desc.psc':
    'Modern public space with various photo spots and culinary area',
    'wisata.desc.bantaran-kali':
    'Cool riverside park with jogging track and children playground',
    'wisata.desc.sumber-umis':
    'Park with refreshing natural springs and green scenery',
    'wisata.desc.sun-city-theme-park':
    'The largest theme park and waterpark in Madiun with exciting rides',
    'wisata.desc.suncity-mall':
    'Modern shopping center with various tenants and family entertainment',
    'wisata.desc.nusantara-edupark':
    'Educational park with learning-through-play concept for children',
    'wisata.desc.tugu-pendekar':
    'Madiun City icon symbolizing bravery and warrior spirit',
    'wisata.desc.patung-pendekar':
    'Iconic statue depicting the warrior spirit of Madiun people',
    'wisata.desc.merlion':
    'Unique photo spot in PSC area, a new landmark of Madiun City',
    'wisata.desc.masjid-agung':
    'Grand mosque with modern architecture, center of religious activities',
    'wisata.desc.masjid-kuno-taman':
    'Historic mosque with well-preserved classical architecture',
    'wisata.desc.gereja-cornelius':
    'Historic church with beautiful European classical architecture',
    'wisata.desc.psc-kekinian':
    'Young people favorite with various instagramable photo spots',
    'wisata.desc.bantaran-kekinian':
    'Sunset and trendy photo spot by the river, popular among millennials',
    'wisata.desc.tugu-kekinian':
    'Iconic landmark must-visit for photos and check-ins',
    'wisata.desc.suncity-kekinian':
    'Modern mall with various aesthetic photo spots and instagramable cafes',
    // UMKM Page
    'umkm.title': 'Madiun City SMEs Data',
    'umkm.subtitle': 'Statistics of SMEs by Sector / Business Field',
    'umkm.totalLatest': 'Total SMEs',
    'umkm.latestYear': 'Latest Year',
    'umkm.biggestCategory': 'Largest Category',
    'umkm.growth': 'Growth',
    'umkm.unit': 'business units',
    'umkm.difference': 'difference',
    'umkm.trendPerCategory': 'Trend per Category',
    'umkm.dataTable': 'SMEs Data Table',
    'umkm.filterYearRange': 'Year Range',
    'umkm.filterCategory': 'Category',
    'umkm.searchCategory': 'Search category...',
    'umkm.resetFilter': 'Reset Filter',
    'umkm.cat.pertanian': 'Agriculture',
    'umkm.cat.pertambangan': 'Mining and Excavation',
    'umkm.cat.industri': 'Manufacturing Industry',
    'umkm.cat.listrik': 'Electricity, Gas and Water',
    'umkm.cat.konstruksi': 'Construction',
    'umkm.cat.perdagangan': 'Trade, Hotel and Restaurant',
    'umkm.cat.transportasi': 'Transportation',
    'umkm.cat.keuangan': 'Finance',
    'umkm.cat.jasa': 'Services',
    'umkm.cat.total': 'TOTAL',
    // Kuliner Page
    'kuliner.title': 'Madiun City Culinary',
    'kuliner.subtitle':
    'Explore signature dishes, popular restaurants, street food, cafes, and favorite souvenirs from Madiun City',
    'kuliner.searchPlaceholder': 'Search culinary or place...',
    'kuliner.showing': 'Showing',
    'kuliner.destinations': 'culinary destinations',
    'kuliner.openMaps': 'Open Maps',
    'kuliner.cat.khas': 'Signature Dishes',
    'kuliner.cat.populer': 'Popular Restaurants',
    'kuliner.cat.malam': 'Night Food & Street Food',
    'kuliner.cat.cafe': 'Cafes & Hangout Spots',
    'kuliner.cat.oleh': 'Madiun Souvenirs',
    'kuliner.badge.ikon': 'Culinary Icon',
    'kuliner.badge.favorit': 'Favorite',
    'kuliner.badge.unggulan': 'Featured',
    'kuliner.desc.pecel-madiun':
    'Legendary Madiun dish of boiled vegetables with spicy peanut sauce.',
    'kuliner.desc.nasi-jotos':
    'Rice with tempe gembus and signature sambal, a Madiun traditional dish.',
    'kuliner.desc.lontong-tahu-telur':
    'Rice cake with fried tofu and egg, served with savory peanut sauce.',
    'kuliner.desc.soto-madiun':
    'Clear chicken soup with savory broth and East Java spices.',
    'kuliner.desc.rawon':
    'Beef soup with black broth from kluwek, rich East Java spice flavors.',
    'kuliner.desc.warung-pecel-pojok':
    'Legendary pecel stall at the city corner, always packed with visitors.',
    'kuliner.desc.pecel-99':
    'Generous portions of pecel with signature peanut sauce.',
    'kuliner.desc.pecel-yu-gembrot':
    'Legendary pecel with generations-old peanut sauce recipe.',
    'kuliner.desc.soto-ayam-kondang':
    'Chicken soup with clear savory broth, famous for decades.',
    'kuliner.desc.depot-tjanang':
    'Classic Chinese food depot with signature fried rice and noodles.',
    'kuliner.desc.pak-to': 'Simple eatery with delicious home-style cooking.',
    'kuliner.desc.pak-poen':
    'Legendary restaurant with various traditional Javanese dishes.',
    'kuliner.desc.sleko-food-court':
    'Food court with diverse culinary options in one place.',
    'kuliner.desc.accord':
    'Family restaurant with varied menu and cozy atmosphere.',
    'kuliner.desc.ayam-goreng-pemuda':
    'Crispy fried chicken with signature spice blend.',
    'kuliner.desc.leko':
    'Popular eatery with varied menu and affordable prices.',
    'kuliner.desc.super-bakso':
    'Jumbo meatballs with rich and fresh beef broth.',
    'kuliner.desc.mie-gacoan': 'Viral spicy noodles with various spice levels.',
    'kuliner.desc.wizzmie':
    'Trendy noodles with generous toppings at friendly prices.',
    'kuliner.desc.ayam-bakar-bg':
    'Grilled chicken with special marinade perfectly absorbed.',
    'kuliner.desc.lombok-ijo':
    'Restaurant with signature green chili that is spicy and fresh.',
    'kuliner.desc.nawasena':
    'Modern restaurant with creative Nusantara fusion menu.',
    'kuliner.desc.kemangi':
    'Restaurant with authentic Sundanese and Javanese cuisine.',
    'kuliner.desc.srasadesa':
    'Restaurant with village concept and authentic traditional menu.',
    'kuliner.desc.ss-spesial-sambal':
    'Eatery with various signature sambals that are addictive.',
    'kuliner.desc.psc-malam':
    'Night street food area with various snacks and street cuisine.',
    'kuliner.desc.bantaran-kali-malam':
    'Night culinary area by the river with relaxed and romantic atmosphere.',
    'kuliner.desc.alun-alun-malam':
    'Night snack center around the square with various street food.',
    'kuliner.desc.bento-kopi':
    'Cozy coffee shop with specialty coffee and pastry menu.',
    'kuliner.desc.wow-cafe':
    'Instagramable cafe with unique interior and creative menu.',
    'kuliner.desc.kopi-kenangan':
    'Grab-and-go coffee chain with trendy milk coffee favorites.',
    'kuliner.desc.kopi-kakak':
    'Local coffee shop with homey atmosphere and affordable prices.',
    'kuliner.desc.freen-house':
    'Cafe with homey concept, comfortable for work and hangout.',
    'kuliner.desc.balen-coffee':
    'Minimalist coffee shop with selected beans from various regions.',
    'kuliner.desc.brewok-coffee':
    'Coffee shop with strong character and signature manual brew.',
    'kuliner.desc.hakui-coffee':
    'Modern coffee shop with calm atmosphere for working.',
    'kuliner.desc.sthana-coffee':
    'Aesthetic cafe with industrial interior and quality coffee.',
    'kuliner.desc.lokatara-coffee':
    'Coffee shop with nature concept and single origin coffee menu.',
    'kuliner.desc.rest-coffee-eatery':
    'Cafe and restaurant with complete menu from coffee to meals.',
    'kuliner.desc.waroeng-latte':
    'Coffee shop specializing in latte art and trendy milk drinks.',
    'kuliner.desc.starbucks-cokroaminoto':
    'International coffee chain with premium atmosphere in the city center.',
    'kuliner.desc.esme-coffee':
    'Elegant cafe with varied coffee and non-coffee menu.',
    'kuliner.desc.tomoro-coffee':
    'Strategic coffee shop at the station area for grab-and-go.',
    'kuliner.desc.gulali-cafe':
    'Sweet and colorful concept cafe, perfect for hangout.',
    'kuliner.desc.work-n-play-cafe':
    'Favorite coworking cafe with fast WiFi and productive atmosphere.',
    'kuliner.desc.magia-coffee':
    'Coffee shop with magical touch in specialty coffee presentation.',
    'kuliner.desc.bluder-cokro':
    'Legendary Madiun bluder bread, soft and fragrant, a must-buy souvenir.',
    'kuliner.desc.brem-mirasa':
    'Madiun signature brem with sweet taste, famous since long ago.',
    'kuliner.desc.madumongso':
    'Traditional snack from black sticky rice and palm sugar, sweet and rich.',
    'kuliner.desc.kerupuk-puli':
    'Signature crackers from sticky rice, crispy and perfect as meal companion.',
    // Fasilitas Page
    'fasilitas.title': 'Madiun City Facilities',
    'fasilitas.subtitle':
    'Find public facilities, education, healthcare, and public services in Madiun City',
    'fasilitas.searchPlaceholder': 'Search facilities...',
    'fasilitas.showing': 'Showing',
    'fasilitas.destinations': 'facilities',
    'fasilitas.openMaps': 'Open Maps',
    'fasilitas.cat.belanja': 'Shopping',
    'fasilitas.cat.kesehatan': 'Healthcare',
    'fasilitas.cat.pendidikan': 'Education',
    'fasilitas.cat.transportasi': 'Transportation',
    'fasilitas.cat.ibadah': 'Places of Worship',
    'fasilitas.cat.umum': 'Public Facilities',
    'fasilitas.cat.layanan': 'Public Services',
    'fasilitas.subcat.sd': 'Elementary School',
    'fasilitas.subcat.mi': 'Islamic Elementary',
    'fasilitas.subcat.smpn': 'Public Junior High',
    'fasilitas.subcat.smps': 'Private Junior High',
    'fasilitas.subcat.mts': 'Islamic Junior High',
    'fasilitas.subcat.sma': 'Senior High',
    'fasilitas.subcat.smk': 'Vocational High',
    'fasilitas.subcat.ma': 'Islamic Senior High',
    'fasilitas.subcat.pt': 'Higher Education',
    'fasilitas.desc.suncity-mall':
    'The largest modern shopping center in Madiun with various tenants and family entertainment.',
    'fasilitas.desc.plaza-lawu':
    'Shopping center in a strategic area of Madiun with various shops and culinary options.',
    'fasilitas.desc.plaza-madiun':
    'Shopping center with various daily needs and fashion stores.',
    'fasilitas.desc.pasar-besar':
    'The largest traditional market in Madiun with diverse local products and daily essentials.',
    'fasilitas.desc.pasar-sleko':
    'Traditional market famous for Madiun signature culinary and snacks.',
    'fasilitas.desc.rsud-madiun':
    'Main regional public hospital with comprehensive healthcare services.',
    'fasilitas.desc.rs-paru':
    'Specialized lung hospital with modern respiratory care facilities.',
    'fasilitas.desc.rs-griya-husada':
    'Private hospital with quality healthcare and modern facilities.',
    'fasilitas.desc.rsi-aisyiyah':
    'Islamic hospital with healthcare services based on Islamic values.',
    'fasilitas.desc.rs-santa-clara':
    'Catholic hospital with friendly and professional healthcare services.',
    'fasilitas.desc.rs-merpati':
    'Hospital with general and specialist healthcare services.',
    'fasilitas.desc.sdn-nambangan-lor-1':
    'Leading public elementary school in Nambangan Lor area.',
    'fasilitas.desc.sdn-mojorejo-1':
    'Public elementary school with academic and non-academic achievements.',
    'fasilitas.desc.sdn-kanigoro':
    'Public elementary school with a conducive learning environment.',
    'fasilitas.desc.min-1':
    'State Islamic elementary school with integrated Islamic education curriculum.',
    'fasilitas.desc.min-2':
    'State Islamic elementary school with modern learning facilities.',
    'fasilitas.desc.mi-al-hidayah':
    'Private Islamic elementary school with Islamic character education.',
    'fasilitas.desc.smpn-1':
    'Leading public junior high school with top academic and extracurricular achievements.',
    'fasilitas.desc.smpn-2':
    'Leading public junior high school with high quality education programs.',
    'fasilitas.desc.smpn-3':
    'Leading public junior high school with modern learning facilities.',
    'fasilitas.desc.smpn-4':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-5':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-6':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-7':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-8':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-9':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-10':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-11':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-12':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-13':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-14':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smp-darul-madinah':
    'Private Islamic junior high with boarding school and Quran memorization programs.',
    'fasilitas.desc.smp-mbs-hamka':
    'Modern boarding school junior high with integrated curriculum.',
    'fasilitas.desc.smp-mitra-harapan':
    'Private junior high with innovative learning approach.',
    'fasilitas.desc.smp-progresif':
    'Progressive private junior high with modern Islamic curriculum.',
    'fasilitas.desc.mtsn-madiun':
    'State Islamic junior high with academic and religious achievements.',
    'fasilitas.desc.mts-mujaddadiyyah':
    'Islamic junior high with traditional Islamic education.',
    'fasilitas.desc.mts-pertanian':
    'Islamic junior high with agriculture and environmental programs.',
    'fasilitas.desc.mts-siti-hajar':
    'Private Islamic junior high with Islamic learning environment.',
    'fasilitas.desc.sman-1':
    'The best public senior high in Madiun with national academic achievements.',
    'fasilitas.desc.sman-2':
    'Leading public senior high with science and technology programs.',
    'fasilitas.desc.sman-3':
    'Public senior high with semi-military program and high discipline.',
    'fasilitas.desc.sman-4':
    'Public senior high in Madiun City with quality education programs.',
    'fasilitas.desc.sman-5':
    'Public senior high in Madiun City with quality education programs.',
    'fasilitas.desc.sman-6':
    'Public senior high in Madiun City with quality education programs.',
    'fasilitas.desc.smkn-1':
    'State vocational school with business and management expertise programs.',
    'fasilitas.desc.smkn-2':
    'State vocational school with engineering and industrial expertise programs.',
    'fasilitas.desc.smkn-3':
    'State vocational school with tourism and culinary expertise programs.',
    'fasilitas.desc.man-1':
    'State Islamic senior high with religious and science programs.',
    'fasilitas.desc.man-2':
    'State Islamic senior high with integrated curriculum.',
    'fasilitas.desc.ma-mujaddadiyyah':
    'Private Islamic senior high with traditional Islamic education.',
    'fasilitas.desc.ma-darul-madinah':
    'Islamic senior high with boarding school program.',
    'fasilitas.desc.univ-pgri':
    'Leading private university with education and teaching programs.',
    'fasilitas.desc.univ-muhammadiyah':
    'Islamic university with various leading study programs.',
    'fasilitas.desc.politeknik-negeri':
    'State polytechnic with vocational and applied technology programs.',
    'fasilitas.desc.stikes-bhm':
    'Health science college with nursing and midwifery programs.',
    'fasilitas.desc.stasiun-madiun':
    'Main railway station of Madiun City with intercity and local services.',
    'fasilitas.desc.terminal-purboyo':
    'Main bus terminal with intercity and interprovincial routes.',
    'fasilitas.desc.bus-sekolah':
    'Free school bus service for Madiun City students.',
    'fasilitas.desc.masjid-agung':
    'Grand mosque serving as the center of Islamic religious activities in Madiun.',
    'fasilitas.desc.masjid-kuno':
    'Historic mosque with well-preserved classical architecture.',
    'fasilitas.desc.gereja-cornelius':
    'Historic church with beautiful European classical architecture.',
    'fasilitas.desc.alun-alun':
    'Community activity center with lush gardens and complete facilities.',
    'fasilitas.desc.psc':
    'Modern public space with photo spots and culinary area.',
    'fasilitas.desc.bantaran-kali':
    'Cool riverside park with jogging track and play area.',
    'fasilitas.desc.polres':
    'City police resort for public security and order.',
    'fasilitas.desc.pemkot':
    'City government office for administrative and public services.',
    'fasilitas.desc.disdukcapil':
    'Population and civil registration office for population document services.',
    // Penginapan Page
    'penginapan.title': 'Madiun City Accommodation',
    'penginapan.subtitle':
    'Find the best hotels and places to stay in Madiun City with complete facilities and strategic locations.',
    'penginapan.searchPlaceholder': 'Search accommodation...',
    'penginapan.showing': 'Showing',
    'penginapan.destinations': 'accommodations',
    'penginapan.openMaps': 'Open Maps',
    'penginapan.googleRating': 'Google Rating',
    'penginapan.breadcrumb.home': 'Home',
    'penginapan.breadcrumb.jelajah': 'Explore City',
    'penginapan.breadcrumb.penginapan': 'Accommodation',
    'penginapan.desc.mercure':
    '4-star hotel with complete facilities and premium service in the city center.',
    'penginapan.desc.aston':
    'Modern hotel with complete conference facilities and swimming pool.',
    'penginapan.desc.favehotel':
    'Stylish budget hotel with strategic location and comfort.',
    'penginapan.desc.merdeka':
    'Legendary hotel with classic architecture and peaceful atmosphere.',
    'penginapan.desc.sun-hotel':
    'Comfortable hotel integrated with Suncity Mall shopping center.',
    'penginapan.desc.amaris':
    'The right choice for smart travelers with quality essential facilities.',
    // Layanan Pages
    'layanan.access': 'Access Service',
    'layanan.kesehatan.title': 'Health Services',
    'layanan.kesehatan.desc':
    'Access various public health services in Madiun City easily and quickly.',
    'layanan.kesehatan.antrian.title': 'Puskesmas Queue',
    'layanan.kesehatan.antrian.desc':
    'Integrated online queue system for all Puskesmas in Madiun City.',
    'layanan.kependudukan.title': 'Population Services',
    'layanan.kependudukan.desc':
    'Online population administration and civil registration services for Madiun City.',
    'layanan.kependudukan.ktp.title': 'ID Card Service',
    'layanan.kependudukan.ktp.desc':
    'Electronic Identity Card (KTP) processing service.',
    'layanan.kependudukan.pindahKartoharjo.title':
    'Move Family Card Kartoharjo',
    'layanan.kependudukan.pindahKartoharjo.desc':
    'Family Card moving service specifically for Kartoharjo District.',
    'layanan.kependudukan.pindahManguharjo.title':
    'Move Family Card Manguharjo',
    'layanan.kependudukan.pindahManguharjo.desc':
    'Family Card moving service specifically for Manguharjo District.',
    'layanan.kependudukan.pindahTaman.title': 'Move Family Card Taman',
    'layanan.kependudukan.pindahTaman.desc':
    'Family Card moving service specifically for Taman District.',
    'layanan.kependudukan.aktaMati.title': 'Death Certificate & Child ID',
    'layanan.kependudukan.aktaMati.desc':
    'Processing of Death Certificates and Child Identity Cards (KIA).',
    'layanan.kependudukan.aktaLahir.title': 'Birth Certificate Service',
    'layanan.kependudukan.aktaLahir.desc':
    'Integrated Birth Certificate processing (3 in 1).',
    'layanan.pendidikan.title': 'Education Services',
    'layanan.pendidikan.desc':
    'Access education information and services for Madiun City residents.',
    'layanan.pendidikan.besmart.title': 'Be Smart',
    'layanan.pendidikan.besmart.desc':
    'Madiun City university student scholarship program.',
    'layanan.pasar.title': 'Market Information',
    'layanan.pasar.desc':
    'Market price information, SMEs, and trading services in Madiun City.',
    'layanan.pasar.marketplace.title': 'Marketplace',
    'layanan.pasar.marketplace.desc':
    'Buying and selling platform for local Madiun City products.',
    'layanan.pasar.umkm.title': 'SMEs',
    'layanan.pasar.umkm.desc':
    'Information portal and registration for Madiun City SMEs.',
    'layanan.pasar.esayur.title': 'E-Vegetables',
    'layanan.pasar.esayur.desc':
    'Online shopping service for vegetables and basic necessities.',
    // Info Pasar Page
    'infoPasar.title': 'Market Information',
    'infoPasar.subtitle':
    'Access digital market, MSME, and food supply services of Madiun City through official available portals.',
    'infoPasar.marketplace.desc':
    'An official marketplace portal to support local product marketing and trade services in Madiun City.',
    'infoPasar.umkm.desc':
    'A digital service for Madiun City MSME actors to support business development and product promotion.',
    'infoPasar.esayur.desc':
    'A digital service for practical access to vegetables and food supply needs.',
    'infoPasar.access': 'Access Service',
    // Madiun Terkini
    'madiunTerkini.title': 'Latest Madiun',
    'madiunTerkini.subtitle':
    'Access the latest information about agendas, news, releases, announcements, and information services of Madiun City.',
    'madiunTerkini.access': 'Access',
    'madiunTerkini.comingSoon': 'Content will be added soon.',
    'madiunTerkini.agendaKota': 'City Agenda',
    'madiunTerkini.beritaPemerintahan': 'Government News',
    'madiunTerkini.madiunToday': 'Madiun Today',
    'madiunTerkini.suaraMadiun': 'Suara Madiun',
    'madiunTerkini.ruangSatu': 'Ruang Satu',
    'madiunTerkini.rilis': 'Release',
    'madiunTerkini.pengumuman': 'Announcement',
    'madiunTerkini.lowongan': 'Job Vacancy'
  }
};
const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key: string) => key
});
export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'id') return saved;
    } catch {}
    return 'id';
  });
  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('language', newLang);
    } catch {}
  }, []);
  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] || translations['id'][key] || key;
    },
    [lang]
  );
  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t
      }}>
      
      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  return useContext(LanguageContext);
}