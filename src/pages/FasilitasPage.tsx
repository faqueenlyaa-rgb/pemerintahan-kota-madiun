import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Star,
  ExternalLink,
  Filter,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Bus,
  Church,
  Building,
  Landmark,
  ArrowLeft,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { createFAQSchema } from '../lib/seoSchemas';

interface FasilitasItem {
  id: string;
  nama: string;
  categoryKey: string;
  descKey: string;
  subCategoryKey?: string;
  mapsUrl: string;
  rating: number;
}

const fasilitasItems: FasilitasItem[] = [
  // PERBELANJAAN
  {
    id: 'suncity-mall',
    nama: 'Suncity Mall Madiun',
    categoryKey: 'fasilitas.cat.belanja',
    descKey: 'fasilitas.desc.suncity-mall',
    mapsUrl: 'https://www.google.com/maps?q=Suncity+Mall+Madiun',
    rating: 4.7,
  },
  {
    id: 'plaza-lawu',
    nama: 'Plaza Lawu',
    categoryKey: 'fasilitas.cat.belanja',
    descKey: 'fasilitas.desc.plaza-lawu',
    mapsUrl: 'https://www.google.com/maps?q=Plaza+Lawu+Madiun',
    rating: 4.4,
  },
  {
    id: 'plaza-madiun',
    nama: 'Plaza Madiun',
    categoryKey: 'fasilitas.cat.belanja',
    descKey: 'fasilitas.desc.plaza-madiun',
    mapsUrl: 'https://www.google.com/maps?q=Plaza+Madiun',
    rating: 4.3,
  },
  {
    id: 'pasar-besar',
    nama: 'Pasar Besar Madiun',
    categoryKey: 'fasilitas.cat.belanja',
    descKey: 'fasilitas.desc.pasar-besar',
    mapsUrl: 'https://www.google.com/maps?q=Pasar+Besar+Madiun',
    rating: 4.5,
  },
  {
    id: 'pasar-sleko',
    nama: 'Pasar Sleko',
    categoryKey: 'fasilitas.cat.belanja',
    descKey: 'fasilitas.desc.pasar-sleko',
    mapsUrl: 'https://www.google.com/maps?q=Pasar+Sleko+Madiun',
    rating: 4.4,
  },

  // KESEHATAN
  {
    id: 'rsud-madiun',
    nama: 'RSUD Kota Madiun',
    categoryKey: 'fasilitas.cat.kesehatan',
    descKey: 'fasilitas.desc.rsud-madiun',
    mapsUrl: 'https://www.google.com/maps?q=RSUD+Kota+Madiun',
    rating: 4.6,
  },
  {
    id: 'rs-paru',
    nama: 'RS Paru Manguharjo',
    categoryKey: 'fasilitas.cat.kesehatan',
    descKey: 'fasilitas.desc.rs-paru',
    mapsUrl: 'https://www.google.com/maps?q=RS+Paru+Manguharjo',
    rating: 4.5,
  },
  {
    id: 'rs-griya-husada',
    nama: 'RS Griya Husada',
    categoryKey: 'fasilitas.cat.kesehatan',
    descKey: 'fasilitas.desc.rs-griya-husada',
    mapsUrl: 'https://www.google.com/maps?q=RS+Griya+Husada+Madiun',
    rating: 4.7,
  },
  {
    id: 'rsi-aisyiyah',
    nama: 'RSI Aisyiyah',
    categoryKey: 'fasilitas.cat.kesehatan',
    descKey: 'fasilitas.desc.rsi-aisyiyah',
    mapsUrl: 'https://www.google.com/maps?q=RSI+Aisyiyah+Madiun',
    rating: 4.6,
  },
  {
    id: 'rs-santa-clara',
    nama: 'RS Santa Clara',
    categoryKey: 'fasilitas.cat.kesehatan',
    descKey: 'fasilitas.desc.rs-santa-clara',
    mapsUrl: 'https://www.google.com/maps?q=RS+Santa+Clara+Madiun',
    rating: 4.5,
  },
  {
    id: 'rs-merpati',
    nama: 'RS Merpati',
    categoryKey: 'fasilitas.cat.kesehatan',
    descKey: 'fasilitas.desc.rs-merpati',
    mapsUrl: 'https://www.google.com/maps?q=RS+Merpati+Madiun',
    rating: 4.4,
  },

  // PENDIDIKAN - SD
  {
    id: 'sdn-nambangan-lor-1',
    nama: 'SDN Nambangan Lor 1',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sd',
    descKey: 'fasilitas.desc.sdn-nambangan-lor-1',
    mapsUrl: 'https://www.google.com/maps?q=SDN+Nambangan+Lor+1+Madiun',
    rating: 4.5,
  },
  {
    id: 'sdn-mojorejo-1',
    nama: 'SDN Mojorejo 1',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sd',
    descKey: 'fasilitas.desc.sdn-mojorejo-1',
    mapsUrl: 'https://www.google.com/maps?q=SDN+Mojorejo+1+Madiun',
    rating: 4.5,
  },
  {
    id: 'sdn-kanigoro',
    nama: 'SDN Kanigoro',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sd',
    descKey: 'fasilitas.desc.sdn-kanigoro',
    mapsUrl: 'https://www.google.com/maps?q=SDN+Kanigoro+Madiun',
    rating: 4.4,
  },

  // PENDIDIKAN - MI/MIN
  {
    id: 'min-1',
    nama: 'MIN 1 Kota Madiun',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.mi',
    descKey: 'fasilitas.desc.min-1',
    mapsUrl: 'https://www.google.com/maps?q=MIN+1+Kota+Madiun',
    rating: 4.6,
  },
  {
    id: 'min-2',
    nama: 'MIN 2 Kota Madiun',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.mi',
    descKey: 'fasilitas.desc.min-2',
    mapsUrl: 'https://www.google.com/maps?q=MIN+2+Kota+Madiun',
    rating: 4.5,
  },
  {
    id: 'mi-al-hidayah',
    nama: 'MI Al-Hidayah',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.mi',
    descKey: 'fasilitas.desc.mi-al-hidayah',
    mapsUrl: 'https://www.google.com/maps?q=MI+Al+Hidayah+Madiun',
    rating: 4.4,
  },

  // PENDIDIKAN - SMPN
  {
    id: 'smpn-1',
    nama: 'SMPN 1',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-1',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+1+Madiun',
    rating: 4.8,
  },
  {
    id: 'smpn-2',
    nama: 'SMPN 2',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-2',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+2+Madiun',
    rating: 4.7,
  },
  {
    id: 'smpn-3',
    nama: 'SMPN 3',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-3',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+3+Madiun',
    rating: 4.7,
  },
  {
    id: 'smpn-4',
    nama: 'SMPN 4',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-4',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+4+Madiun',
    rating: 4.5,
  },
  {
    id: 'smpn-5',
    nama: 'SMPN 5',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-5',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+5+Madiun',
    rating: 4.5,
  },
  {
    id: 'smpn-6',
    nama: 'SMPN 6',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-6',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+6+Madiun',
    rating: 4.5,
  },
  {
    id: 'smpn-7',
    nama: 'SMPN 7',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-7',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+7+Madiun',
    rating: 4.4,
  },
  {
    id: 'smpn-8',
    nama: 'SMPN 8',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-8',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+8+Madiun',
    rating: 4.4,
  },
  {
    id: 'smpn-9',
    nama: 'SMPN 9',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-9',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+9+Madiun',
    rating: 4.4,
  },
  {
    id: 'smpn-10',
    nama: 'SMPN 10',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-10',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+10+Madiun',
    rating: 4.5,
  },
  {
    id: 'smpn-11',
    nama: 'SMPN 11',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-11',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+11+Madiun',
    rating: 4.4,
  },
  {
    id: 'smpn-12',
    nama: 'SMPN 12',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-12',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+12+Madiun',
    rating: 4.4,
  },
  {
    id: 'smpn-13',
    nama: 'SMPN 13',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-13',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+13+Madiun',
    rating: 4.6,
  },
  {
    id: 'smpn-14',
    nama: 'SMPN 14',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smpn',
    descKey: 'fasilitas.desc.smpn-14',
    mapsUrl: 'https://www.google.com/maps?q=SMPN+14+Madiun',
    rating: 4.5,
  },

  // PENDIDIKAN - SMP Swasta
  {
    id: 'smp-darul-madinah',
    nama: 'SMP Darul Madinah',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smps',
    descKey: 'fasilitas.desc.smp-darul-madinah',
    mapsUrl: 'https://www.google.com/maps?q=SMP+Darul+Madinah+Madiun',
    rating: 4.5,
  },
  {
    id: 'smp-mbs-hamka',
    nama: 'SMP MBS Prof Hamka',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smps',
    descKey: 'fasilitas.desc.smp-mbs-hamka',
    mapsUrl: 'https://www.google.com/maps?q=SMP+MBS+Hamka+Madiun',
    rating: 4.5,
  },
  {
    id: 'smp-mitra-harapan',
    nama: 'SMP Mitra Harapan',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smps',
    descKey: 'fasilitas.desc.smp-mitra-harapan',
    mapsUrl: 'https://www.google.com/maps?q=SMP+Mitra+Harapan+Madiun',
    rating: 4.4,
  },
  {
    id: 'smp-progresif',
    nama: 'SMP Progresif Al Mardliyah',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smps',
    descKey: 'fasilitas.desc.smp-progresif',
    mapsUrl: 'https://www.google.com/maps?q=SMP+Progresif+Al+Mardliyah+Madiun',
    rating: 4.5,
  },

  // PENDIDIKAN - MTs
  {
    id: 'mtsn-madiun',
    nama: 'MTsN Kota Madiun',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.mts',
    descKey: 'fasilitas.desc.mtsn-madiun',
    mapsUrl: 'https://www.google.com/maps?q=MTsN+Kota+Madiun',
    rating: 4.6,
  },
  {
    id: 'mts-mujaddadiyyah',
    nama: 'MTs Al-Mujaddadiyyah',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.mts',
    descKey: 'fasilitas.desc.mts-mujaddadiyyah',
    mapsUrl: 'https://www.google.com/maps?q=MTs+Al+Mujaddadiyyah+Madiun',
    rating: 4.4,
  },
  {
    id: 'mts-pertanian',
    nama: 'MTs Pertanian',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.mts',
    descKey: 'fasilitas.desc.mts-pertanian',
    mapsUrl: 'https://www.google.com/maps?q=MTs+Pertanian+Madiun',
    rating: 4.4,
  },
  {
    id: 'mts-siti-hajar',
    nama: 'MTs Siti Hajar',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.mts',
    descKey: 'fasilitas.desc.mts-siti-hajar',
    mapsUrl: 'https://www.google.com/maps?q=MTs+Siti+Hajar+Madiun',
    rating: 4.4,
  },

  // PENDIDIKAN - SMA
  {
    id: 'sman-1',
    nama: 'SMAN 1',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sma',
    descKey: 'fasilitas.desc.sman-1',
    mapsUrl: 'https://www.google.com/maps?q=SMAN+1+Madiun',
    rating: 4.8,
  },
  {
    id: 'sman-2',
    nama: 'SMAN 2',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sma',
    descKey: 'fasilitas.desc.sman-2',
    mapsUrl: 'https://www.google.com/maps?q=SMAN+2+Madiun',
    rating: 4.7,
  },
  {
    id: 'sman-3',
    nama: 'SMAN 3 (Taruna Angkasa)',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sma',
    descKey: 'fasilitas.desc.sman-3',
    mapsUrl: 'https://www.google.com/maps?q=SMAN+3+Taruna+Angkasa+Madiun',
    rating: 4.7,
  },
  {
    id: 'sman-4',
    nama: 'SMAN 4',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sma',
    descKey: 'fasilitas.desc.sman-4',
    mapsUrl: 'https://www.google.com/maps?q=SMAN+4+Madiun',
    rating: 4.5,
  },
  {
    id: 'sman-5',
    nama: 'SMAN 5',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sma',
    descKey: 'fasilitas.desc.sman-5',
    mapsUrl: 'https://www.google.com/maps?q=SMAN+5+Madiun',
    rating: 4.6,
  },
  {
    id: 'sman-6',
    nama: 'SMAN 6',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.sma',
    descKey: 'fasilitas.desc.sman-6',
    mapsUrl: 'https://www.google.com/maps?q=SMAN+6+Madiun',
    rating: 4.5,
  },

  // PENDIDIKAN - SMK
  {
    id: 'smkn-1',
    nama: 'SMKN 1',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smk',
    descKey: 'fasilitas.desc.smkn-1',
    mapsUrl: 'https://www.google.com/maps?q=SMKN+1+Madiun',
    rating: 4.7,
  },
  {
    id: 'smkn-2',
    nama: 'SMKN 2',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smk',
    descKey: 'fasilitas.desc.smkn-2',
    mapsUrl: 'https://www.google.com/maps?q=SMKN+2+Madiun',
    rating: 4.7,
  },
  {
    id: 'smkn-3',
    nama: 'SMKN 3',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.smk',
    descKey: 'fasilitas.desc.smkn-3',
    mapsUrl: 'https://www.google.com/maps?q=SMKN+3+Madiun',
    rating: 4.6,
  },

  // PENDIDIKAN - MA/MAN
  {
    id: 'man-1',
    nama: 'MAN 1',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.ma',
    descKey: 'fasilitas.desc.man-1',
    mapsUrl: 'https://www.google.com/maps?q=MAN+1+Madiun',
    rating: 4.6,
  },
  {
    id: 'man-2',
    nama: 'MAN 2',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.ma',
    descKey: 'fasilitas.desc.man-2',
    mapsUrl: 'https://www.google.com/maps?q=MAN+2+Madiun',
    rating: 4.6,
  },
  {
    id: 'ma-mujaddadiyyah',
    nama: 'MA Al-Mujaddadiyyah',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.ma',
    descKey: 'fasilitas.desc.ma-mujaddadiyyah',
    mapsUrl: 'https://www.google.com/maps?q=MA+Al+Mujaddadiyyah+Madiun',
    rating: 4.4,
  },
  {
    id: 'ma-darul-madinah',
    nama: 'MA Darul Madinah',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.ma',
    descKey: 'fasilitas.desc.ma-darul-madinah',
    mapsUrl: 'https://www.google.com/maps?q=MA+Darul+Madinah+Madiun',
    rating: 4.5,
  },

  // PENDIDIKAN - Perguruan Tinggi
  {
    id: 'univ-pgri',
    nama: 'Universitas PGRI',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.pt',
    descKey: 'fasilitas.desc.univ-pgri',
    mapsUrl: 'https://www.google.com/maps?q=Universitas+PGRI+Madiun',
    rating: 4.6,
  },
  {
    id: 'univ-muhammadiyah',
    nama: 'Universitas Muhammadiyah',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.pt',
    descKey: 'fasilitas.desc.univ-muhammadiyah',
    mapsUrl: 'https://www.google.com/maps?q=Universitas+Muhammadiyah+Madiun',
    rating: 4.5,
  },
  {
    id: 'politeknik-negeri',
    nama: 'Politeknik Negeri',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.pt',
    descKey: 'fasilitas.desc.politeknik-negeri',
    mapsUrl: 'https://www.google.com/maps?q=Politeknik+Negeri+Madiun',
    rating: 4.7,
  },
  {
    id: 'stikes-bhm',
    nama: 'STIKES BHM',
    categoryKey: 'fasilitas.cat.pendidikan',
    subCategoryKey: 'fasilitas.subcat.pt',
    descKey: 'fasilitas.desc.stikes-bhm',
    mapsUrl: 'https://www.google.com/maps?q=STIKES+Bhakti+Husada+Mulia+Madiun',
    rating: 4.5,
  },

  // TRANSPORTASI
  {
    id: 'stasiun-madiun',
    nama: 'Stasiun Madiun',
    categoryKey: 'fasilitas.cat.transportasi',
    descKey: 'fasilitas.desc.stasiun-madiun',
    mapsUrl: 'https://www.google.com/maps?q=Stasiun+Madiun',
    rating: 4.7,
  },
  {
    id: 'terminal-purboyo',
    nama: 'Terminal Purboyo',
    categoryKey: 'fasilitas.cat.transportasi',
    descKey: 'fasilitas.desc.terminal-purboyo',
    mapsUrl: 'https://www.google.com/maps?q=Terminal+Purboyo+Madiun',
    rating: 4.4,
  },
  {
    id: 'bus-sekolah',
    nama: 'Bus Sekolah',
    categoryKey: 'fasilitas.cat.transportasi',
    descKey: 'fasilitas.desc.bus-sekolah',
    mapsUrl: 'https://www.google.com/maps?q=Bus+Sekolah+Madiun',
    rating: 4.5,
  },

  // TEMPAT IBADAH
  {
    id: 'masjid-agung',
    nama: 'Masjid Agung Baitul Hakim',
    categoryKey: 'fasilitas.cat.ibadah',
    descKey: 'fasilitas.desc.masjid-agung',
    mapsUrl: 'https://www.google.com/maps?q=Masjid+Agung+Baitul+Hakim+Madiun',
    rating: 4.8,
  },
  {
    id: 'masjid-kuno',
    nama: 'Masjid Kuno Taman',
    categoryKey: 'fasilitas.cat.ibadah',
    descKey: 'fasilitas.desc.masjid-kuno',
    mapsUrl: 'https://www.google.com/maps?q=Masjid+Kuno+Taman+Madiun',
    rating: 4.7,
  },
  {
    id: 'gereja-cornelius',
    nama: 'Gereja Katolik Santo Cornelius',
    categoryKey: 'fasilitas.cat.ibadah',
    descKey: 'fasilitas.desc.gereja-cornelius',
    mapsUrl: 'https://www.google.com/maps?q=Gereja+Santo+Cornelius+Madiun',
    rating: 4.7,
  },

  // FASILITAS UMUM
  {
    id: 'alun-alun',
    nama: 'Alun-Alun Kota Madiun',
    categoryKey: 'fasilitas.cat.umum',
    descKey: 'fasilitas.desc.alun-alun',
    mapsUrl: 'https://www.google.com/maps?q=Alun-Alun+Madiun',
    rating: 4.6,
  },
  {
    id: 'psc',
    nama: 'Pahlawan Street Center (PSC)',
    categoryKey: 'fasilitas.cat.umum',
    descKey: 'fasilitas.desc.psc',
    mapsUrl: 'https://www.google.com/maps?q=PSC+Madiun',
    rating: 4.7,
  },
  {
    id: 'bantaran-kali',
    nama: 'Taman Bantaran Kali',
    categoryKey: 'fasilitas.cat.umum',
    descKey: 'fasilitas.desc.bantaran-kali',
    mapsUrl: 'https://www.google.com/maps?q=Bantaran+Kali+Madiun',
    rating: 4.5,
  },

  // LAYANAN PUBLIK
  {
    id: 'polres',
    nama: 'Polres Madiun Kota',
    categoryKey: 'fasilitas.cat.layanan',
    descKey: 'fasilitas.desc.polres',
    mapsUrl: 'https://www.google.com/maps?q=Polres+Madiun+Kota',
    rating: 4.5,
  },
  {
    id: 'pemkot',
    nama: 'Kantor Pemkot Madiun',
    categoryKey: 'fasilitas.cat.layanan',
    descKey: 'fasilitas.desc.pemkot',
    mapsUrl: 'https://www.google.com/maps?q=Pemkot+Madiun',
    rating: 4.6,
  },
  {
    id: 'disdukcapil',
    nama: 'Disdukcapil Madiun',
    categoryKey: 'fasilitas.cat.layanan',
    descKey: 'fasilitas.desc.disdukcapil',
    mapsUrl: 'https://www.google.com/maps?q=Disdukcapil+Madiun',
    rating: 4.5,
  },
];

const categoryKeys = [
  {
    key: 'all',
    labelKey: 'page.allCategories',
  },
  {
    key: 'fasilitas.cat.belanja',
    labelKey: 'fasilitas.cat.belanja',
  },
  {
    key: 'fasilitas.cat.kesehatan',
    labelKey: 'fasilitas.cat.kesehatan',
  },
  {
    key: 'fasilitas.cat.pendidikan',
    labelKey: 'fasilitas.cat.pendidikan',
  },
  {
    key: 'fasilitas.cat.transportasi',
    labelKey: 'fasilitas.cat.transportasi',
  },
  {
    key: 'fasilitas.cat.ibadah',
    labelKey: 'fasilitas.cat.ibadah',
  },
  {
    key: 'fasilitas.cat.umum',
    labelKey: 'fasilitas.cat.umum',
  },
  {
    key: 'fasilitas.cat.layanan',
    labelKey: 'fasilitas.cat.layanan',
  },
];

export function FasilitasPage() {
  const languageContext = useLanguage() as any;
  const { t } = languageContext;

  const currentLang =
    languageContext.lang ||
    languageContext.language ||
    localStorage.getItem('language') ||
    'id';

  const lang: 'id' | 'en' = currentLang === 'en' ? 'en' : 'id';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !(prev[sectionKey] ?? true),
    }));
  };

  const isSectionOpen = (sectionKey: string) => {
    if (selectedCategory !== 'all' && selectedCategory === sectionKey) {
      return true;
    }

    return openSections[sectionKey] ?? false;
  };

  const filteredItems = fasilitasItems
    .filter((item) => {
      const matchesSearch = item.nama
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || item.categoryKey === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.nama.localeCompare(b.nama);
    });

  const sectionKeys = categoryKeys.filter((cat) => cat.key !== 'all');

  const sectionedItems = sectionKeys
    .map((section) => ({
      ...section,
      items: filteredItems.filter((item) => item.categoryKey === section.key),
    }))
    .filter((section) => section.items.length > 0);

  const getCategoryIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case 'fasilitas.cat.belanja':
        return <ShoppingBag className="mt-1 h-5 w-5 shrink-0 text-primary" />;
      case 'fasilitas.cat.kesehatan':
        return <HeartPulse className="mt-1 h-5 w-5 shrink-0 text-primary" />;
      case 'fasilitas.cat.pendidikan':
        return <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />;
      case 'fasilitas.cat.transportasi':
        return <Bus className="mt-1 h-5 w-5 shrink-0 text-primary" />;
      case 'fasilitas.cat.ibadah':
        return <Church className="mt-1 h-5 w-5 shrink-0 text-primary" />;
      case 'fasilitas.cat.umum':
        return <Building className="mt-1 h-5 w-5 shrink-0 text-primary" />;
      case 'fasilitas.cat.layanan':
        return <Landmark className="mt-1 h-5 w-5 shrink-0 text-primary" />;
      default:
        return <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />;
    }
  };

  const faqText = {
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
          question:
            'Bagaimana cara melaporkan fasilitas umum yang rusak atau bermasalah?',
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
          question:
            'How can citizens report damaged or problematic public facilities?',
          answer:
            'Reports about public facilities can be submitted through official city complaint channels or related local offices so they can be followed up according to procedure.',
        },
      ],
    },
  };

  const availableText = lang === 'en' ? 'facilities available' : 'fasilitas tersedia';

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-16 pt-32">
      <SEO
        title="Fasilitas Kota Madiun"
        description="Informasi fasilitas Kota Madiun yang mendukung aktivitas masyarakat, wisata, pelayanan publik, dan kebutuhan kota."
        keywords="Fasilitas Kota Madiun, fasilitas publik Madiun, sarana prasarana Madiun, Kota Madiun"
        url="https://pemerintahan-kota-madiun.vercel.app/fasilitas"
        lang="id"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name:
              lang === 'en'
                ? 'Madiun City Public Facilities'
                : 'Fasilitas Publik Kota Madiun',
            description:
              lang === 'en'
                ? 'A public facility information page containing facilities, public services, public spaces, and supporting infrastructure in Madiun City.'
                : 'Halaman informasi fasilitas publik yang berisi fasilitas, layanan umum, ruang publik, dan sarana pendukung di Kota Madiun.',
            inLanguage: lang === 'en' ? 'en-US' : 'id-ID',
            url: 'https://pemerintahan-kota-madiun.vercel.app/fasilitas',
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

      <div className="container mx-auto mb-4 px-4 md:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-primary shadow transition hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={3} />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="mb-12 bg-gradient-to-br from-primary to-[#166b30] py-12">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center"
          >
            <h1 className="mb-4 font-poppins text-4xl font-black tracking-tight text-white md:text-6xl">
              {t('fasilitas.title')}
            </h1>

            <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
              {t('fasilitas.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">
        {/* Search & Filter Bar */}
        <div className="mb-8 rounded-2xl border-2 border-primary/10 bg-white p-6 shadow-md">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder={t('fasilitas.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 py-3 pl-12 pr-4 font-medium focus:border-primary focus:outline-none"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-[#166b30] lg:hidden"
            >
              <Filter className="h-5 w-5" />
              {t('page.filter')}
            </button>

            {/* Desktop Filters */}
            <div className="hidden gap-4 lg:flex">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="cursor-pointer rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-medium focus:border-primary focus:outline-none"
              >
                {categoryKeys.map((cat) => (
                  <option key={cat.key} value={cat.key}>
                    {t(cat.labelKey)}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')}
                className="cursor-pointer rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-medium focus:border-primary focus:outline-none"
              >
                <option value="rating">{t('page.sortRating')}</option>
                <option value="name">{t('page.sortName')}</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="mt-4 space-y-3 border-t border-gray-200 pt-4 lg:hidden"
            >
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-medium focus:border-primary focus:outline-none"
              >
                {categoryKeys.map((cat) => (
                  <option key={cat.key} value={cat.key}>
                    {t(cat.labelKey)}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')}
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-medium focus:border-primary focus:outline-none"
              >
                <option value="rating">{t('page.sortRating')}</option>
                <option value="name">{t('page.sortName')}</option>
              </select>
            </motion.div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="font-medium text-gray-600">
            {t('fasilitas.showing')}{' '}
            <span className="font-bold text-primary">{filteredItems.length}</span>{' '}
            {t('fasilitas.destinations')}
          </p>
        </div>

        {/* Fasilitas Sections Accordion */}
        {sectionedItems.length > 0 && (
          <div className="space-y-6">
            {sectionedItems.map((section) => {
              const open = isSectionOpen(section.key);

              return (
                <section
                  key={section.key}
                  className="overflow-hidden rounded-[2rem] border-2 border-primary/10 bg-white shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(section.key)}
                    className="flex w-full items-center justify-between gap-4 bg-gradient-to-r from-primary to-[#166b30] px-5 py-5 text-left text-white transition hover:brightness-105 md:px-7"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                        <div className="text-white">
                          {getCategoryIcon(section.key)}
                        </div>
                      </div>

                      <div>
                        <h2 className="font-poppins text-2xl font-black md:text-3xl">
                          {t(section.labelKey)}
                        </h2>

                        <p className="mt-1 text-sm font-medium text-white/80">
                          {section.items.length} {availableText}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`h-7 w-7 shrink-0 transition-transform duration-300 ${
                        open ? 'rotate-180' : 'rotate-0'
                      }`}
                      strokeWidth={3}
                    />
                  </button>

                  {open && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="p-5 md:p-7"
                    >
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{
                              opacity: 0,
                              y: 18,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              delay: index * 0.03,
                            }}
                            className="group flex flex-col overflow-hidden rounded-2xl border-2 border-transparent bg-[#FAFAFA] shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-xl"
                          >
                            {/* Category Badge */}
                            <div className="bg-gradient-to-r from-primary to-[#166b30] px-4 py-2">
                              <p className="text-xs font-bold uppercase tracking-wide text-white">
                                {t(item.categoryKey)}
                              </p>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6">
                              {/* Name */}
                              <a
                                href={item.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link mb-2 block"
                              >
                                <h3 className="flex items-start gap-2 font-poppins text-xl font-bold text-dark transition-colors group-hover/link:text-primary">
                                  {getCategoryIcon(item.categoryKey)}
                                  <span className="flex-1">{item.nama}</span>
                                </h3>
                              </a>

                              {/* Subcategory Pill */}
                              {item.subCategoryKey && (
                                <div className="mb-3 pl-7">
                                  <span className="inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-primary">
                                    {t(item.subCategoryKey)}
                                  </span>
                                </div>
                              )}

                              {/* Rating */}
                              <div className="mb-3 flex items-center gap-2 pl-7">
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < Math.floor(item.rating)
                                          ? 'fill-accent text-accent'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>

                                <span className="font-bold text-dark">
                                  {item.rating.toFixed(1)}
                                </span>

                                <span className="text-sm text-gray-500">/ 5</span>
                              </div>

                              {/* Description */}
                              <p className="mb-4 flex-1 pl-7 text-sm leading-relaxed text-gray-600">
                                {t(item.descKey)}
                              </p>

                              {/* Button */}
                              <div className="mt-auto pt-2">
                                <a
                                  href={item.mapsUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-white transition-all duration-200 hover:bg-[#166b30] group-hover:scale-[1.02]"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  {t('fasilitas.openMaps')}
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </section>
              );
            })}
          </div>
        )}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <Search className="h-12 w-12 text-gray-400" />
            </div>

            <h3 className="mb-2 font-poppins text-2xl font-bold text-gray-700">
              {t('page.noResults')}
            </h3>

            <p className="text-gray-500">{t('page.noResultsHint')}</p>
          </div>
        )}

        <FAQSection title={faqText[lang].title} items={faqText[lang].items} />
      </div>
    </div>
  );
}