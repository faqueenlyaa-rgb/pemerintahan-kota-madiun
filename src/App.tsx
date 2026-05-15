import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LanguageProvider } from './lib/i18n'

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { QuickServices } from './components/QuickServices'
import { JelajahSection } from './components/JelajahSection'
import { Footer } from './components/Footer'
import { FloatingButtons } from './components/FloatingButtons'
import { SEO } from './components/SEO'
import { ScrollToTop } from './components/ScrollToTop'

// Lazy Components
const GprKomdigi = lazy(() =>
  import('./components/GprKomdigi').then((module) => ({
    default: module.GprKomdigi,
  }))
)

const NewsSection = lazy(() =>
  import('./components/NewsSection').then((module) => ({
    default: module.NewsSection,
  }))
)

const InteractiveMap = lazy(() =>
  import('./components/InteractiveMap').then((module) => ({
    default: module.InteractiveMap,
  }))
)

// Lazy Pages
const WisataPage = lazy(() =>
  import('./pages/WisataPage').then((module) => ({
    default: module.WisataPage,
  }))
)

const KulinerPage = lazy(() =>
  import('./pages/KulinerPage').then((module) => ({
    default: module.KulinerPage,
  }))
)

const FasilitasPage = lazy(() =>
  import('./pages/FasilitasPage').then((module) => ({
    default: module.FasilitasPage,
  }))
)

const PenginapanPage = lazy(() =>
  import('./pages/PenginapanPage').then((module) => ({
    default: module.PenginapanPage,
  }))
)

const UmkmPage = lazy(() =>
  import('./pages/UmkmPage').then((module) => ({
    default: module.UmkmPage,
  }))
)

const VisiMisiPage = lazy(() =>
  import('./pages/VisiMisiPage').then((module) => ({
    default: module.VisiMisiPage,
  }))
)

const SejarahPage = lazy(() =>
  import('./pages/SejarahPage').then((module) => ({
    default: module.SejarahPage,
  }))
)

const PerangkatDaerahPage = lazy(() =>
  import('./pages/PerangkatDaerahPage').then((module) => ({
    default: module.PerangkatDaerahPage,
  }))
)

const WilayahGeografisPage = lazy(() =>
  import('./pages/WilayahGeografisPage').then((module) => ({
    default: module.WilayahGeografisPage,
  }))
)

const MaskotPage = lazy(() =>
  import('./pages/MaskotPage').then((module) => ({
    default: module.MaskotPage,
  }))
)

const LayananKesehatanPage = lazy(() =>
  import('./pages/LayananKesehatanPage').then((module) => ({
    default: module.LayananKesehatanPage,
  }))
)

const LayananKependudukanPage = lazy(() =>
  import('./pages/LayananKependudukanPage').then((module) => ({
    default: module.LayananKependudukanPage,
  }))
)

const LayananPendidikanPage = lazy(() =>
  import('./pages/LayananPendidikanPage').then((module) => ({
    default: module.LayananPendidikanPage,
  }))
)

const LayananInfoPasarPage = lazy(() =>
  import('./pages/LayananInfoPasarPage').then((module) => ({
    default: module.LayananInfoPasarPage,
  }))
)

const MadiunTerkiniPage = lazy(() =>
  import('./pages/MadiunTerkiniPage').then((module) => ({
    default: module.MadiunTerkiniPage,
  }))
)

const BeritaPemerintahanPage = lazy(() =>
  import('./pages/BeritaPemerintahanPage').then((module) => ({
    default: module.BeritaPemerintahanPage,
  }))
)

const RilisPage = lazy(() =>
  import('./pages/RilisPage').then((module) => ({
    default: module.RilisPage,
  }))
)

const PengumumanPage = lazy(() =>
  import('./pages/PengumumanPage').then((module) => ({
    default: module.PengumumanPage,
  }))
)

const LowonganPage = lazy(() =>
  import('./pages/LowonganPage').then((module) => ({
    default: module.LowonganPage,
  }))
)

export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <style>
          {`
            .leaflet-container .leaflet-interactive:focus,
            .leaflet-container .leaflet-interactive:focus-visible,
            .leaflet-container svg path:focus,
            .leaflet-container svg path:focus-visible,
            .leaflet-container svg path,
            .leaflet-container,
            .leaflet-container:focus {
              outline: none !important;
            }
          `}
        </style>

        <div className="min-h-screen bg-[#FAFAFA] font-sans text-dark selection:bg-primary selection:text-white transition-all duration-300">
          <Navbar />
          <ScrollToTop />

          <Suspense
            fallback={
              <div className="flex min-h-[40vh] items-center justify-center text-sm text-gray-500">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SEO
                      title="Portal Pemerintah Kota Madiun"
                      description="Portal informasi Pemerintah Kota Madiun berisi layanan publik, berita pemerintahan, profil kota, UMKM, info pasar, wisata, kuliner, fasilitas, dan informasi Madiun terkini."
                      keywords="Kota Madiun, Pemerintah Kota Madiun, layanan publik Madiun, berita Madiun, UMKM Madiun, info pasar Madiun, wisata Madiun"
                      url="https://pemerintahan-kota-madiun.vercel.app/"
                      lang="id"
                      structuredData={{
                        '@context': 'https://schema.org',
                        '@type': 'GovernmentOrganization',
                        name: 'Pemerintah Kota Madiun',
                        url: 'https://pemerintahan-kota-madiun.vercel.app/',
                        logo: 'https://www.madiunkota.go.id/image/Lambang_Kota_Madiun.png',
                        address: {
                          '@type': 'PostalAddress',
                          addressLocality: 'Kota Madiun',
                          addressRegion: 'Jawa Timur',
                          addressCountry: 'ID',
                        },
                        areaServed: {
                          '@type': 'AdministrativeArea',
                          name: 'Kota Madiun',
                        },
                      }}
                    />

                    <main>
                      <HeroSection />
                      <QuickServices />
                      <JelajahSection />
                      <GprKomdigi />
                      <NewsSection />
                    </main>
                  </>
                }
              />

              <Route
                path="/cek-map"
                element={
                  <main className="min-h-screen bg-white px-6 py-10 pt-32">
                    <div className="mx-auto h-[520px] max-w-[620px]">
                      <InteractiveMap />
                    </div>
                  </main>
                }
              />

              <Route path="/wisata" element={<WisataPage />} />
              <Route path="/kuliner" element={<KulinerPage />} />
              <Route path="/fasilitas" element={<FasilitasPage />} />
              <Route path="/penginapan" element={<PenginapanPage />} />
              <Route path="/umkm" element={<UmkmPage />} />

              <Route path="/profil/visi-misi" element={<VisiMisiPage />} />
              <Route path="/profil/sejarah" element={<SejarahPage />} />
              <Route
                path="/profil/perangkat-daerah"
                element={<PerangkatDaerahPage />}
              />
              <Route
                path="/profil/wilayah-geografis"
                element={<WilayahGeografisPage />}
              />
              <Route path="/profil/maskot" element={<MaskotPage />} />

              <Route
                path="/layanan/kesehatan"
                element={<LayananKesehatanPage />}
              />
              <Route
                path="/layanan/kependudukan"
                element={<LayananKependudukanPage />}
              />
              <Route
                path="/layanan/pendidikan"
                element={<LayananPendidikanPage />}
              />
              <Route
                path="/layanan/info-pasar"
                element={<LayananInfoPasarPage />}
              />

              <Route
                path="/madiun-terkini"
                element={<MadiunTerkiniPage />}
              />

              <Route
                path="/madiun-terkini/berita-pemerintahan"
                element={<BeritaPemerintahanPage />}
              />

              <Route
                path="/madiun-terkini/berita-pemerintahan/:slug"
                element={<BeritaPemerintahanPage />}
              />

              <Route
                path="/madiun-terkini/rilis"
                element={<RilisPage />}
              />

              <Route
                path="/madiun-terkini/pengumuman"
                element={<PengumumanPage />}
              />

              <Route
                path="/madiun-terkini/lowongan"
                element={<LowonganPage />}
              />
            </Routes>
          </Suspense>

          <Footer />
          <FloatingButtons />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}