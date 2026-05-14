const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const FAQS = {
  'UmkmPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Apa isi halaman UMKM Kota Madiun?',
          answer:
            'Halaman UMKM Kota Madiun menampilkan data jumlah UMKM berdasarkan sektor atau lapangan usaha dari tahun 2017 sampai 2025 dalam bentuk dashboard, grafik, dan tabel.',
        },
        {
          question: 'Bagaimana cara melihat perkembangan UMKM dari tahun ke tahun?',
          answer:
            'Pengguna dapat melihat perkembangan UMKM melalui grafik tren dan tabel data tahunan. Data dapat difilter berdasarkan rentang tahun dan kategori sektor usaha.',
        },
        {
          question: 'Apa manfaat dashboard UMKM bagi masyarakat?',
          answer:
            'Dashboard UMKM membantu masyarakat melihat sektor usaha yang berkembang, jumlah UMKM per tahun, serta potensi ekonomi Kota Madiun secara lebih mudah dan visual.',
        },
        {
          question: 'Apakah data UMKM bisa dilihat berdasarkan kategori usaha?',
          answer:
            'Ya, pengguna dapat memilih kategori usaha tertentu untuk melihat data UMKM yang lebih spesifik sesuai sektor yang tersedia di dashboard.',
        },
        {
          question: 'Di mana saya bisa mengakses layanan pendukung UMKM?',
          answer:
            'Layanan pendukung UMKM dapat diakses melalui halaman Info Pasar atau layanan digital terkait seperti Marketplace, Pro UMKM, dan E-Sayur jika tersedia pada portal resmi.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What does the Madiun City MSME page contain?',
          answer:
            'The Madiun City MSME page displays MSME data by sector or business field from 2017 to 2025 through dashboards, charts, and tables.',
        },
        {
          question: 'How can users view MSME development from year to year?',
          answer:
            'Users can view MSME development through trend charts and annual data tables. The data can be filtered by year range and business sector category.',
        },
        {
          question: 'What is the benefit of the MSME dashboard for the public?',
          answer:
            'The MSME dashboard helps users understand growing business sectors, annual MSME numbers, and the economic potential of Madiun City in a more visual way.',
        },
        {
          question: 'Can MSME data be viewed by business category?',
          answer:
            'Yes, users can select a specific business category to view MSME data based on the available sectors in the dashboard.',
        },
        {
          question: 'Where can I access MSME support services?',
          answer:
            'MSME support services can be accessed through the Market Information page or related digital services such as Marketplace, Pro UMKM, and E-Sayur when available on official portals.',
        },
      ],
    },
  },

  'LayananInfoPasarPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Apa itu halaman Info Pasar Kota Madiun?',
          answer:
            'Halaman Info Pasar Kota Madiun menyediakan akses menuju layanan digital ekonomi masyarakat, seperti Marketplace, UMKM, dan E-Sayur.',
        },
        {
          question: 'Apa fungsi layanan Marketplace?',
          answer:
            'Layanan Marketplace digunakan untuk mengakses platform digital yang berkaitan dengan produk, pelaku usaha, dan kegiatan ekonomi masyarakat Kota Madiun.',
        },
        {
          question: 'Bagaimana cara mengakses layanan UMKM?',
          answer:
            'Pengguna dapat memilih kartu UMKM pada halaman Info Pasar, kemudian menekan tombol akses layanan untuk menuju portal resmi layanan UMKM yang tersedia.',
        },
        {
          question: 'Apa itu layanan E-Sayur?',
          answer:
            'E-Sayur adalah layanan digital yang berkaitan dengan kebutuhan bahan pangan atau sayuran secara online melalui portal resmi yang tersedia.',
        },
        {
          question: 'Apakah link layanan di halaman ini resmi?',
          answer:
            'Ya, setiap kartu layanan diarahkan ke website atau portal resmi yang sudah tersedia. Nama layanan dan URL tidak diterjemahkan agar link tetap valid.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is the Madiun City Market Information page?',
          answer:
            'The Madiun City Market Information page provides access to digital economic services such as Marketplace, MSME services, and E-Sayur.',
        },
        {
          question: 'What is the function of the Marketplace service?',
          answer:
            'The Marketplace service provides access to a digital platform related to products, business actors, and local economic activities in Madiun City.',
        },
        {
          question: 'How can users access MSME services?',
          answer:
            'Users can select the MSME card on the Market Information page and click the service access button to open the official MSME service portal.',
        },
        {
          question: 'What is E-Sayur?',
          answer:
            'E-Sayur is a digital service related to food or vegetable needs through the available official portal.',
        },
        {
          question: 'Are the service links on this page official?',
          answer:
            'Yes, each service card directs users to an available official website or portal. Service names and URLs are not translated to keep the links valid.',
        },
      ],
    },
  },

  'BeritaPemerintahanPage.tsx': {
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
  },

  'MadiunTerkiniPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Apa saja informasi yang tersedia di halaman Madiun Terkini?',
          answer:
            'Halaman Madiun Terkini menyediakan akses menuju informasi terbaru seperti agenda kota, berita pemerintahan, Madiun Today, Suara Madiun, rilis, pengumuman, dan lowongan.',
        },
        {
          question: 'Di mana saya bisa melihat agenda kegiatan Kota Madiun?',
          answer:
            'Agenda kegiatan Kota Madiun dapat diakses melalui kartu Agenda Kota pada halaman Madiun Terkini yang mengarah ke kanal agenda resmi.',
        },
        {
          question: 'Di mana saya bisa melihat pengumuman resmi pemerintah kota?',
          answer:
            'Pengumuman resmi dapat diakses melalui bagian Pengumuman pada halaman Madiun Terkini.',
        },
        {
          question: 'Bagaimana cara mengetahui rilis resmi Pemerintah Kota Madiun?',
          answer:
            'Rilis resmi dapat dilihat melalui bagian Rilis pada halaman Madiun Terkini.',
        },
        {
          question: 'Apakah halaman ini juga menghubungkan ke media resmi lain?',
          answer:
            'Ya, halaman ini juga menyediakan tautan ke kanal lain seperti Madiun Today dan Suara Madiun. Tautan eksternal tetap menggunakan URL asli agar dapat diakses dengan benar.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What information is available on the Madiun Terkini page?',
          answer:
            'The Madiun Terkini page provides access to the latest information such as city agenda, government news, Madiun Today, Suara Madiun, releases, announcements, and job information.',
        },
        {
          question: 'Where can I view Madiun City events agenda?',
          answer:
            'Madiun City events agenda can be accessed through the Agenda Kota card on the Madiun Terkini page.',
        },
        {
          question: 'Where can I find official city government announcements?',
          answer:
            'Official announcements can be accessed through the Announcement section on the Madiun Terkini page.',
        },
        {
          question: 'How can I find official releases from the Madiun City Government?',
          answer:
            'Official releases can be viewed through the Release section on the Madiun Terkini page.',
        },
        {
          question: 'Does this page also connect to other official media?',
          answer:
            'Yes, this page provides links to other channels such as Madiun Today and Suara Madiun. External links keep their original URLs.',
        },
      ],
    },
  },

  'LayananKependudukanPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Layanan kependudukan apa yang bisa diakses masyarakat?',
          answer:
            'Masyarakat dapat mengakses informasi layanan seperti KTP, Kartu Keluarga, akta, mutasi penduduk, dan pindah domisili melalui kanal resmi layanan kependudukan.',
        },
        {
          question: 'Bagaimana cara mengurus pindah domisili atau mutasi penduduk?',
          answer:
            'Informasi pindah domisili atau mutasi penduduk dapat dilihat melalui layanan kependudukan atau perangkat daerah terkait. Persyaratan biasanya menyesuaikan ketentuan administrasi kependudukan yang berlaku.',
        },
        {
          question: 'Apakah layanan kependudukan bisa diakses secara online?',
          answer:
            'Beberapa layanan dapat diarahkan ke portal atau aplikasi resmi yang tersedia. Jika layanan belum tersedia langsung di website ini, pengguna akan diarahkan ke kanal resmi terkait.',
        },
        {
          question: 'Apa yang perlu disiapkan sebelum mengurus dokumen kependudukan?',
          answer:
            'Masyarakat perlu menyiapkan identitas diri dan dokumen pendukung sesuai jenis layanan, seperti KTP, KK, surat pengantar, atau dokumen lain sesuai ketentuan.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What population services can citizens access?',
          answer:
            'Citizens can access information about services such as ID cards, family cards, certificates, population mutation, and domicile transfer through official population service channels.',
        },
        {
          question: 'How can residents process domicile transfer or population mutation?',
          answer:
            'Information about domicile transfer or population mutation can be viewed through population services or the related local office.',
        },
        {
          question: 'Can population services be accessed online?',
          answer:
            'Some services may be directed to available official portals or applications. If a service is not directly available on this website, users will be directed to the related official channel.',
        },
        {
          question: 'What should be prepared before processing population documents?',
          answer:
            'Residents need to prepare identity documents and supporting documents according to the type of service, such as ID card, family card, introduction letter, or other required documents.',
        },
      ],
    },
  },

  'LayananKesehatanPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Informasi kesehatan apa yang tersedia di halaman ini?',
          answer:
            'Halaman Layanan Kesehatan menyediakan informasi awal terkait layanan kesehatan, fasilitas kesehatan, dan akses layanan kesehatan untuk masyarakat Kota Madiun.',
        },
        {
          question: 'Bagaimana cara mencari fasilitas kesehatan di Kota Madiun?',
          answer:
            'Pengguna dapat melihat informasi fasilitas kesehatan pada halaman layanan atau melalui kanal resmi pemerintah dan instansi kesehatan terkait.',
        },
        {
          question: 'Apakah halaman ini menyediakan layanan darurat kesehatan?',
          answer:
            'Halaman ini berfungsi sebagai portal informasi. Untuk kondisi darurat, masyarakat tetap harus menghubungi layanan darurat atau fasilitas kesehatan terdekat.',
        },
        {
          question: 'Di mana saya bisa mendapatkan informasi program kesehatan masyarakat?',
          answer:
            'Informasi program kesehatan masyarakat dapat dilihat melalui kanal resmi pemerintah kota atau perangkat daerah yang menangani urusan kesehatan.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What health information is available on this page?',
          answer:
            'The Health Services page provides initial information about health services, health facilities, and public health access for Madiun City residents.',
        },
        {
          question: 'How can users find health facilities in Madiun City?',
          answer:
            'Users can view health facility information on the service page or through official government and health institution channels.',
        },
        {
          question: 'Does this page provide emergency health services?',
          answer:
            'This page functions as an information portal. For emergencies, citizens should contact emergency services or the nearest health facility.',
        },
        {
          question: 'Where can I find information about public health programs?',
          answer:
            'Information about public health programs can be found through official city government channels or the local office responsible for health affairs.',
        },
      ],
    },
  },

  'LayananPendidikanPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Informasi pendidikan apa yang tersedia di halaman ini?',
          answer:
            'Halaman Layanan Pendidikan menyediakan informasi awal terkait layanan pendidikan, sekolah, dan akses informasi pendidikan di Kota Madiun.',
        },
        {
          question: 'Bagaimana cara mencari informasi sekolah di Kota Madiun?',
          answer:
            'Informasi sekolah dapat diakses melalui kanal resmi pemerintah, perangkat daerah pendidikan, atau tautan layanan pendidikan yang tersedia.',
        },
        {
          question: 'Apakah halaman ini menyediakan informasi pendaftaran sekolah?',
          answer:
            'Halaman ini dapat digunakan sebagai penghubung informasi. Untuk ketentuan pendaftaran sekolah, pengguna perlu mengikuti informasi resmi dari instansi pendidikan terkait.',
        },
        {
          question: 'Di mana masyarakat bisa mendapatkan informasi kebijakan pendidikan?',
          answer:
            'Informasi kebijakan pendidikan dapat dilihat melalui kanal resmi pemerintah kota atau perangkat daerah yang menangani urusan pendidikan.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What education information is available on this page?',
          answer:
            'The Education Services page provides initial information about education services, schools, and access to education information in Madiun City.',
        },
        {
          question: 'How can users find school information in Madiun City?',
          answer:
            'School information can be accessed through official government channels, the education office, or available education service links.',
        },
        {
          question: 'Does this page provide school registration information?',
          answer:
            'This page can be used as an information connector. For school registration requirements, users should follow official information from the related education institution.',
        },
        {
          question: 'Where can citizens find education policy information?',
          answer:
            'Education policy information can be found through official city government channels or the local office responsible for education affairs.',
        },
      ],
    },
  },

  'WilayahGeografisPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Di mana letak Kota Madiun?',
          answer:
            'Kota Madiun terletak di bagian barat Provinsi Jawa Timur dan berada pada posisi strategis karena terhubung dengan jalur regional serta jalur kereta api lintas Pulau Jawa bagian selatan.',
        },
        {
          question: 'Apa saja batas wilayah Kota Madiun?',
          answer:
            'Secara administratif, Kota Madiun berbatasan dengan wilayah Kabupaten Madiun dan Magetan, termasuk Kecamatan Madiun, Wungu, Geger, dan Jiwan.',
        },
        {
          question: 'Mengapa letak Kota Madiun disebut strategis?',
          answer:
            'Letak Kota Madiun disebut strategis karena berada pada jalur penghubung antarwilayah besar seperti Surabaya, Yogyakarta, Jakarta, Surakarta, Ponorogo, dan daerah sekitarnya.',
        },
        {
          question: 'Apakah nama kecamatan dan kelurahan diterjemahkan ke Bahasa Inggris?',
          answer:
            'Tidak. Nama kecamatan, kelurahan, wilayah, dan instansi tetap menggunakan nama resmi aslinya agar tidak menimbulkan kesalahan data atau lokasi.',
        },
        {
          question: 'Apakah peta wilayah dapat digunakan untuk melihat informasi demografi?',
          answer:
            'Ya, jika peta dibuat interaktif, setiap wilayah dapat dihubungkan dengan data demografi seperti kepadatan penduduk, rasio gender, usia produktif, dan informasi wilayah lainnya.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Where is Madiun City located?',
          answer:
            'Madiun City is located in the western part of East Java Province and has a strategic position because it is connected to regional roads and the southern railway line across Java Island.',
        },
        {
          question: 'What are the administrative boundaries of Madiun City?',
          answer:
            'Administratively, Madiun City borders the areas of Madiun Regency and Magetan, including Kecamatan Madiun, Wungu, Geger, and Jiwan.',
        },
        {
          question: 'Why is the location of Madiun City considered strategic?',
          answer:
            'Madiun City is considered strategic because it is located on routes connecting major areas such as Surabaya, Yogyakarta, Jakarta, Surakarta, Ponorogo, and surrounding regions.',
        },
        {
          question: 'Are district and urban village names translated into English?',
          answer:
            'No. Names of districts, urban villages, regions, and institutions remain in their official original form to avoid data or location errors.',
        },
        {
          question: 'Can the regional map be used to view demographic information?',
          answer:
            'Yes, if the map is made interactive, each area can be connected to demographic data such as population density, gender ratio, productive age, and other regional information.',
        },
      ],
    },
  },

  'MaskotPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Apa saja maskot Kota Madiun?',
          answer:
            'Maskot Kota Madiun terdiri dari Madya, Rasa, dan Relo. Ketiganya merepresentasikan karakter Kota Madiun sebagai kota yang tangguh, ramah, berbudaya, maju, dan terhubung.',
        },
        {
          question: 'Apa makna Madya?',
          answer:
            'Madya merupakan Sang Pendekar yang melambangkan kekuatan, keseimbangan, keberanian, dan semangat Kota Madiun untuk maju tanpa melupakan akar budaya.',
        },
        {
          question: 'Apa makna Rasa?',
          answer:
            'Rasa merupakan Sang Pecel yang melambangkan keramahan, kehangatan, kebersamaan, dan kekuatan budaya kuliner Kota Madiun.',
        },
        {
          question: 'Apa makna Relo?',
          answer:
            'Relo merupakan Sang Kereta Api yang melambangkan kemajuan, konektivitas, dan semangat Kota Madiun untuk terus bergerak menuju masa depan.',
        },
        {
          question: 'Apa fungsi maskot bagi Kota Madiun?',
          answer:
            'Maskot berfungsi sebagai identitas visual yang memperkuat branding Kota Madiun, memperkenalkan karakter kota, serta membuat informasi kota lebih dekat dan mudah dikenali oleh masyarakat.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What are the mascots of Madiun City?',
          answer:
            'The mascots of Madiun City are Madya, Rasa, and Relo. They represent Madiun City as a resilient, friendly, cultural, progressive, and connected city.',
        },
        {
          question: 'What does Madya represent?',
          answer:
            'Madya is the Pendekar figure that symbolizes strength, balance, courage, and the spirit of Madiun City to move forward while preserving its cultural roots.',
        },
        {
          question: 'What does Rasa represent?',
          answer:
            'Rasa is the Pecel figure that symbolizes friendliness, warmth, togetherness, and the strength of Madiun City culinary culture.',
        },
        {
          question: 'What does Relo represent?',
          answer:
            'Relo is the Train figure that symbolizes progress, connectivity, and the spirit of Madiun City to keep moving toward the future.',
        },
        {
          question: 'What is the function of mascots for Madiun City?',
          answer:
            'The mascots function as visual identities that strengthen Madiun City branding, introduce the city character, and make city information more recognizable and closer to the public.',
        },
      ],
    },
  },

  'WisataPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Informasi wisata apa yang tersedia di halaman ini?',
          answer:
            'Halaman Wisata Kota Madiun menampilkan informasi destinasi, tempat kunjungan, dan daya tarik kota yang dapat dijelajahi oleh masyarakat maupun wisatawan.',
        },
        {
          question: 'Bagaimana cara melihat lokasi wisata?',
          answer:
            'Pengguna dapat membuka informasi lokasi atau tautan peta yang tersedia pada kartu wisata jika disediakan, sehingga lokasi tujuan lebih mudah ditemukan.',
        },
        {
          question: 'Apakah informasi wisata ini cocok untuk pengunjung dari luar kota?',
          answer:
            'Ya, informasi wisata disusun agar pengunjung dari dalam maupun luar Kota Madiun dapat mengenal destinasi dan daya tarik kota dengan lebih mudah.',
        },
        {
          question: 'Di mana saya bisa mencari fasilitas pendukung wisata?',
          answer:
            'Fasilitas pendukung seperti tempat umum, akses transportasi, kuliner, dan penginapan dapat dilihat melalui halaman terkait seperti Fasilitas, Kuliner, dan Penginapan.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What tourism information is available on this page?',
          answer:
            'The Madiun City Tourism page displays information about tourist destinations, places to visit, and city attractions that can be explored by residents and visitors.',
        },
        {
          question: 'How can users view tourist locations?',
          answer:
            'Users can open location information or map links available on tourism cards when provided, making destinations easier to find.',
        },
        {
          question: 'Is this tourism information suitable for visitors from outside the city?',
          answer:
            'Yes, the tourism information is prepared so visitors from inside and outside Madiun City can understand the destinations and attractions more easily.',
        },
        {
          question: 'Where can I find supporting facilities for tourism?',
          answer:
            'Supporting facilities such as public facilities, transportation access, culinary places, and lodging can be viewed through related pages such as Facilities, Culinary, and Lodging.',
        },
      ],
    },
  },

  'KulinerPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Informasi kuliner apa yang tersedia di halaman ini?',
          answer:
            'Halaman Kuliner Kota Madiun menampilkan informasi kuliner khas, rekomendasi makanan, dan daya tarik kuliner yang dapat dinikmati masyarakat maupun wisatawan.',
        },
        {
          question: 'Apa kuliner khas yang identik dengan Kota Madiun?',
          answer:
            'Salah satu kuliner yang identik dengan Kota Madiun adalah pecel. Informasi kuliner lain dapat ditambahkan sesuai data dan rekomendasi yang tersedia.',
        },
        {
          question: 'Bagaimana cara menemukan lokasi kuliner?',
          answer:
            'Pengguna dapat melihat informasi lokasi atau tautan peta pada kartu kuliner jika tersedia, sehingga tempat kuliner lebih mudah dikunjungi.',
        },
        {
          question: 'Apakah halaman ini juga mendukung promosi UMKM kuliner?',
          answer:
            'Ya, halaman kuliner dapat digunakan untuk memperkenalkan pelaku UMKM kuliner, produk lokal, dan makanan khas Kota Madiun.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What culinary information is available on this page?',
          answer:
            'The Madiun City Culinary page displays information about local dishes, food recommendations, and culinary attractions that can be enjoyed by residents and visitors.',
        },
        {
          question: 'What food is strongly associated with Madiun City?',
          answer:
            'One of the foods strongly associated with Madiun City is pecel. Other culinary information can be added based on available data and recommendations.',
        },
        {
          question: 'How can users find culinary locations?',
          answer:
            'Users can view location information or map links on culinary cards when available, making culinary places easier to visit.',
        },
        {
          question: 'Can this page support culinary MSME promotion?',
          answer:
            'Yes, the culinary page can be used to introduce culinary MSME actors, local products, and signature foods of Madiun City.',
        },
      ],
    },
  },

  'FasilitasPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Informasi fasilitas apa yang tersedia di halaman ini?',
          answer:
            'Halaman Fasilitas menampilkan informasi fasilitas publik dan sarana pendukung di Kota Madiun yang dapat membantu aktivitas masyarakat maupun pengunjung.',
        },
        {
          question: 'Bagaimana cara mengetahui lokasi fasilitas publik?',
          answer:
            'Pengguna dapat melihat informasi alamat atau tautan peta pada kartu fasilitas jika tersedia, sehingga lokasi fasilitas dapat ditemukan dengan lebih mudah.',
        },
        {
          question: 'Apa saja contoh fasilitas yang dapat ditampilkan?',
          answer:
            'Fasilitas yang dapat ditampilkan meliputi ruang publik, tempat olahraga, transportasi, pusat layanan, dan sarana umum lain yang mendukung kebutuhan masyarakat.',
        },
        {
          question: 'Bagaimana cara melaporkan fasilitas umum yang rusak atau bermasalah?',
          answer:
            'Laporan terkait fasilitas umum dapat disampaikan melalui kanal pengaduan resmi pemerintah kota atau perangkat daerah terkait agar dapat ditindaklanjuti sesuai prosedur.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What facility information is available on this page?',
          answer:
            'The Facilities page displays information about public facilities and supporting infrastructure in Madiun City that can help residents and visitors.',
        },
        {
          question: 'How can users find the location of public facilities?',
          answer:
            'Users can view address information or map links on facility cards when available, making facility locations easier to find.',
        },
        {
          question: 'What examples of facilities can be displayed?',
          answer:
            'Facilities may include public spaces, sports areas, transportation facilities, service centers, and other public infrastructure that supports community needs.',
        },
        {
          question: 'How can citizens report damaged or problematic public facilities?',
          answer:
            'Reports about public facilities can be submitted through official city complaint channels or related local offices so they can be followed up according to procedure.',
        },
      ],
    },
  },

  'PenginapanPage.tsx': {
    id: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Informasi penginapan apa yang tersedia di halaman ini?',
          answer:
            'Halaman Penginapan menampilkan informasi akomodasi atau tempat menginap yang dapat membantu wisatawan, tamu kota, dan masyarakat yang membutuhkan penginapan di Kota Madiun.',
        },
        {
          question: 'Bagaimana cara melihat lokasi penginapan?',
          answer:
            'Pengguna dapat melihat alamat atau tautan peta pada kartu penginapan jika tersedia, sehingga lokasi penginapan dapat dicari dengan lebih mudah.',
        },
        {
          question: 'Apakah halaman ini menyediakan informasi ketersediaan kamar?',
          answer:
            'Halaman ini berfungsi sebagai informasi awal. Ketersediaan kamar, harga, dan pemesanan biasanya perlu dikonfirmasi langsung melalui kontak atau platform resmi penginapan.',
        },
        {
          question: 'Apakah penginapan terhubung dengan informasi wisata dan kuliner?',
          answer:
            'Ya, informasi penginapan dapat mendukung halaman wisata dan kuliner agar pengunjung dapat merencanakan kunjungan di Kota Madiun dengan lebih mudah.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What lodging information is available on this page?',
          answer:
            'The Lodging page displays accommodation information that can help tourists, city guests, and residents who need a place to stay in Madiun City.',
        },
        {
          question: 'How can users view lodging locations?',
          answer:
            'Users can view addresses or map links on lodging cards when available, making accommodation locations easier to find.',
        },
        {
          question: 'Does this page provide room availability information?',
          answer:
            'This page functions as initial information. Room availability, prices, and bookings usually need to be confirmed directly through official contacts or lodging platforms.',
        },
        {
          question: 'Is lodging information connected to tourism and culinary information?',
          answer:
            'Yes, lodging information can support tourism and culinary pages so visitors can plan their visit to Madiun City more easily.',
        },
      ],
    },
  },
};

function toTs(value, indent = 0) {
  const sp = ' '.repeat(indent);

  if (typeof value === 'string') {
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  }

  if (Array.isArray(value)) {
    return `[\n${value.map((item) => `${sp}  ${toTs(item, indent + 2)}`).join(',\n')}\n${sp}]`;
  }

  if (value && typeof value === 'object') {
    return `{\n${Object.entries(value)
      .map(([key, val]) => `${sp}  ${key}: ${toTs(val, indent + 2)}`)
      .join(',\n')}\n${sp}}`;
  }

  return String(value);
}

function findFaqBlock(text) {
  const match = text.match(/const\s+faqText\s*=\s*\{/);
  if (!match || match.index === undefined) return null;

  const start = match.index;
  let i = start + match[0].length - 1;
  let depth = 0;
  let quote = null;
  let escape = false;

  for (; i < text.length; i++) {
    const ch = text[i];

    if (quote) {
      if (escape) {
        escape = false;
      } else if (ch === '\\') {
        escape = true;
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }

    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) {
        let end = i + 1;
        while (/\s/.test(text[end] || '')) end++;
        if (text[end] === ';') end++;
        return [start, end];
      }
    }
  }

  return null;
}

let updated = 0;
let skipped = [];

for (const [fileName, faq] of Object.entries(FAQS)) {
  const filePath = path.join(pagesDir, fileName);

  if (!fs.existsSync(filePath)) {
    skipped.push(`${fileName} tidak ditemukan`);
    continue;
  }

  const oldText = fs.readFileSync(filePath, 'utf8');
  const block = findFaqBlock(oldText);

  if (!block) {
    skipped.push(`${fileName} tidak punya const faqText`);
    continue;
  }

  const newFaq = `const faqText = ${toTs(faq)};`;
  const newText = oldText.slice(0, block[0]) + newFaq + oldText.slice(block[1]);

  fs.writeFileSync(filePath, newText, 'utf8');
  updated++;
  console.log(`OK updated: ${fileName}`);
}

console.log(`\nSelesai. Updated: ${updated}`);
if (skipped.length) {
  console.log('Skipped:');
  skipped.forEach((item) => console.log(`- ${item}`));
}