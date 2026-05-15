import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './lib/i18n'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { QuickServices } from './components/QuickServices'
import { JelajahSection } from './components/JelajahSection'
import { GprKomdigi } from './components/GprKomdigi'
import { NewsSection } from './components/NewsSection'
import { Footer } from './components/Footer'
import { FloatingButtons } from './components/FloatingButtons'
import { InteractiveMap } from './components/InteractiveMap'
import { SEO } from './components/SEO'
import { ScrollToTop } from './components/ScrollToTop';
import { WisataPage } from './pages/WisataPage'
import { KulinerPage } from './pages/KulinerPage'
import { FasilitasPage } from './pages/FasilitasPage'
import { LayananKesehatanPage } from './pages/LayananKesehatanPage'
import { LayananKependudukanPage } from './pages/LayananKependudukanPage'
import { LayananPendidikanPage } from './pages/LayananPendidikanPage'
import { LayananInfoPasarPage } from './pages/LayananInfoPasarPage'
import { PenginapanPage } from './pages/PenginapanPage'
import { VisiMisiPage } from './pages/VisiMisiPage'
import { SejarahPage } from './pages/SejarahPage'
import { PerangkatDaerahPage } from './pages/PerangkatDaerahPage'
import { WilayahGeografisPage } from './pages/WilayahGeografisPage'
import { MaskotPage } from './pages/MaskotPage'
import { UmkmPage } from './pages/UmkmPage'
import { MadiunTerkiniPage } from './pages/MadiunTerkiniPage'
import { BeritaPemerintahanPage } from './pages/BeritaPemerintahanPage'
import { RilisPage } from './pages/RilisPage'
import { PengumumanPage } from './pages/PengumumanPage'
import { LowonganPage } from './pages/LowonganPage'

export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <style>
          {`
            .leaflet-container .leaflet-interactive:focus {
              outline: none !important;
            }

            .leaflet-container .leaflet-interactive:focus-visible {
              outline: none !important;
            }

            .leaflet-container svg path:focus {
              outline: none !important;
            }

            .leaflet-container svg path:focus-visible {
              outline: none !important;
            }

            .leaflet-container svg path {
              outline: none !important;
            }

            .leaflet-container {
              outline: none !important;
            }

            .leaflet-container:focus {
              outline: none !important;
            }
          `}
        </style>

        <div className="min-h-screen bg-[#FAFAFA] font-sans text-dark selection:bg-primary selection:text-white transition-all duration-300">
          <Navbar />
          <ScrollToTop />

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
            
            <Route
              path="/cek-map"
              element={
                <main className="min-h-screen bg-white px-6 py-10">
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

            <Route path="/madiun-terkini" element={<MadiunTerkiniPage />} />
            <Route
              path="/madiun-terkini/berita-pemerintahan"
              element={<BeritaPemerintahanPage />}
            />
            <Route
              path="/madiun-terkini/berita-pemerintahan/:slug"
              element={<BeritaPemerintahanPage />}
            />
            <Route path="/madiun-terkini/rilis" element={<RilisPage />} />
            <Route
              path="/madiun-terkini/pengumuman"
              element={<PengumumanPage />}
            />
            <Route path="/madiun-terkini/lowongan" element={<LowonganPage />} />
          </Routes>

          <Footer />
          <FloatingButtons />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}