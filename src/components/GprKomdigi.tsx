import { useEffect, useState } from 'react'
import { useLanguage } from '../lib/i18n'
import { InteractiveMap, RegionProperties } from './InteractiveMap'

interface GprArticle {
  title: string
  link: string
  date: string
}

interface DemographyData {
  name: string
  density: number
  densityUnit: string
  femalePercent: number
  malePercent: number
  productiveAge: number
  productiveLabel: string
}

interface DemographyJson {
  updatedYear: number
  overall: DemographyData
  districts: Record<string, DemographyData>
}

const defaultDemographyData: DemographyJson = {
  updatedYear: 2026,
  overall: {
    name: 'Kota Madiun',
    density: 7388,
    densityUnit: 'jiwa/km²',
    femalePercent: 50.9,
    malePercent: 49.1,
    productiveAge: 71.18,
    productiveLabel: 'Kategori tinggi',
  },
  districts: {
    taman: {
      name: 'Kecamatan Taman',
      density: 8200,
      densityUnit: 'jiwa/km²',
      femalePercent: 51.1,
      malePercent: 48.9,
      productiveAge: 71.5,
      productiveLabel: 'Kategori tinggi',
    },
    kartoharjo: {
      name: 'Kecamatan Kartoharjo',
      density: 7600,
      densityUnit: 'jiwa/km²',
      femalePercent: 50.6,
      malePercent: 49.4,
      productiveAge: 70.8,
      productiveLabel: 'Kategori tinggi',
    },
    manguharjo: {
      name: 'Kecamatan Manguharjo',
      density: 7100,
      densityUnit: 'jiwa/km²',
      femalePercent: 50.9,
      malePercent: 49.1,
      productiveAge: 71.0,
      productiveLabel: 'Kategori tinggi',
    },
  },
}

function getDistrictKey(region: RegionProperties | null) {
  if (!region?.kecamatan) return ''

  return region.kecamatan
    .replace('Kec.', '')
    .replace('Kecamatan', '')
    .trim()
    .toLowerCase()
}

function formatDate(value?: string) {
  if (!value) return ''

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return ''

  return date.toLocaleString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function GprKomdigi() {
  const { t } = useLanguage()

  const [articles, setArticles] = useState<GprArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedRegion, setSelectedRegion] =
    useState<RegionProperties | null>(null)

  const [demographyData, setDemographyData] =
    useState<DemographyJson>(defaultDemographyData)

  useEffect(() => {
    async function fetchDemography() {
      try {
        const response = await fetch('/data/demografi-kecamatan-madiun.json')

        if (!response.ok) {
          throw new Error('File demografi kecamatan tidak ditemukan')
        }

        const data = await response.json()
        setDemographyData(data)
      } catch (error) {
        console.warn(
          'Memakai data demografi default karena file JSON belum tersedia:',
          error,
        )
        setDemographyData(defaultDemographyData)
      }
    }

    fetchDemography()
  }, [])

  useEffect(() => {
    async function fetchGprKomdigi() {
      try {
        setLoading(true)

        const rssUrl = 'https://www.komdigi.go.id/content/rss/artikel_gpr'
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rssUrl,
        )}`

        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error('Gagal menghubungi RSS converter')
        }

        const result = await response.json()

        if (result.status !== 'ok' || !Array.isArray(result.items)) {
          throw new Error('Format RSS Komdigi tidak valid')
        }

        const data: GprArticle[] = result.items
          .slice(0, 3)
          .map((item: any) => ({
            title: item.title || 'Tanpa judul',
            link: item.link || 'https://www.komdigi.go.id/berita/artikel-gpr',
            date: formatDate(item.pubDate),
          }))

        setArticles(data)
      } catch (error) {
        console.error('Gagal mengambil berita GPR Komdigi:', error)
        setArticles([])
      } finally {
        setLoading(false)
      }
    }

    fetchGprKomdigi()
  }, [])

  const selectedDistrictKey = getDistrictKey(selectedRegion)

  const activeDemography =
    selectedDistrictKey && demographyData.districts[selectedDistrictKey]
      ? demographyData.districts[selectedDistrictKey]
      : demographyData.overall

  const densityValue = activeDemography.density
  const densityUnit = activeDemography.densityUnit || t('demo.densityUnit')
  const femalePercent = activeDemography.femalePercent
  const malePercent = activeDemography.malePercent
  const productiveAge = activeDemography.productiveAge
  const productiveLabel =
    activeDemography.productiveLabel || t('demo.highCategory')

  const densityBarWidth = Math.min((densityValue / 10000) * 100, 100)

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left - Interactive Polygon Map */}
          <div className="w-full lg:w-1/3 min-h-[450px]">
            <InteractiveMap onSelectRegion={setSelectedRegion} />
          </div>

          {/* Center - Demographics */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="border border-primary rounded-full py-2 px-6 text-center text-primary font-bold text-sm">
              Demografi {activeDemography.name}
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-gray-700">
                  {t('demo.density')}
                </span>
                <span className="text-primary">📊</span>
              </div>

              <div className="text-2xl font-black text-dark mb-1">
                {densityValue.toLocaleString('id-ID')}
              </div>

              <div className="text-xs text-gray-500 mb-2">{densityUnit}</div>

              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full"
                  style={{ width: `${densityBarWidth}%` }}
                />
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-700">
                  {t('demo.genderRatio')}
                </span>
                <span className="text-purple-500">👥</span>
              </div>

              <div className="flex h-6 rounded-md overflow-hidden text-xs font-bold text-white text-center leading-6">
                <div
                  className="bg-pink-500"
                  style={{ width: `${femalePercent}%` }}
                >
                  {femalePercent.toFixed(1)}% ♀
                </div>

                <div
                  className="bg-blue-500"
                  style={{ width: `${malePercent}%` }}
                >
                  {malePercent.toFixed(1)}% ♂
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-gray-700">
                  {t('demo.productiveAge')}
                </span>
                <span className="text-green-500">🎓</span>
              </div>

              <div className="text-2xl font-black text-dark mb-1">
                {productiveAge.toLocaleString('id-ID')}%
              </div>

              <div className="text-xs text-gray-500 mb-2">
                {t('demo.years')}
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-1">
                <div
                  className="bg-green-500 h-full"
                  style={{ width: `${productiveAge}%` }}
                />
              </div>

              <div className="text-[10px] text-green-600 font-bold">
                {productiveLabel}
              </div>
            </div>

            <div className="text-[10px] text-gray-400 text-center">
              Data tahun {demographyData.updatedYear}
              {selectedRegion?.name ? ` • wilayah dipilih: ${selectedRegion.name}` : ''}
            </div>
          </div>

          {/* Right - GPR Komdigi */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <a
              href="https://www.komdigi.go.id/berita/artikel-gpr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-green-800 text-accent font-poppins font-black text-2xl py-4 px-6 rounded-full text-center transition-colors shadow-md border-4 border-accent bg-[#0D3D1C]"
            >
              GPR KOMDIGI
            </a>

            <div className="border-4 border-accent rounded-2xl p-1 flex-1 overflow-hidden bg-white">
              <div className="h-full overflow-y-auto pr-2 space-y-4 p-3">
                {loading && (
                  <p className="text-sm text-gray-500 text-center py-6">
                    Memuat berita terbaru...
                  </p>
                )}

                {!loading && articles.length === 0 && (
                  <p className="text-sm text-red-500 text-center py-6">
                    Berita belum tersedia.
                  </p>
                )}

                {!loading &&
                  articles.map((article, idx) => (
                    <a
                      key={`${article.title}-${idx}`}
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-blue-800">
                          Artikel GPR
                        </span>

                        <span className="text-[10px] text-gray-500">
                          {article.date}
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-blue-900 rounded-lg shrink-0 flex items-center justify-center">
                          <div className="w-6 h-4 bg-white rounded-sm" />
                        </div>

                        <p className="text-sm font-medium text-gray-800 leading-snug">
                          {article.title}
                        </p>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}