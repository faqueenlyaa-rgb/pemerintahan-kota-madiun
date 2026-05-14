import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export interface RegionProperties {
  id: string
  name: string
  type: 'wilayah' | 'kecamatan' | 'kota'
  kecamatan?: string
  googleMapsUrl?: string
}

interface InteractiveMapProps {
  onSelectRegion?: (region: RegionProperties) => void
}

const GEOJSON_URL = '/data/Kelurahan%20Madiun.geojson'
const MADIUN_CENTER: [number, number] = [-7.6310587, 111.5300159]

const districtByVillage: Record<string, string> = {
  Banjarejo: 'Taman',
  Demangan: 'Taman',
  Josenan: 'Taman',
  Kejuron: 'Taman',
  Kuncen: 'Taman',
  Manisrejo: 'Taman',
  Mojorejo: 'Taman',
  Pandean: 'Taman',
  Taman: 'Taman',

  Kanigoro: 'Kartoharjo',
  Kartoharjo: 'Kartoharjo',
  Kelun: 'Kartoharjo',
  Klegen: 'Kartoharjo',
  'Oro-Oro Ombo': 'Kartoharjo',
  Pilangbango: 'Kartoharjo',
  Rejomulyo: 'Kartoharjo',
  Sukosari: 'Kartoharjo',
  Tawangrejo: 'Kartoharjo',

  'Madiun Lor': 'Manguharjo',
  Manguharjo: 'Manguharjo',
  'Nambangan Kidul': 'Manguharjo',
  'Nambangan Lor': 'Manguharjo',
  Ngegong: 'Manguharjo',
  Pangongangan: 'Manguharjo',
  Patihan: 'Manguharjo',
  Sogaten: 'Manguharjo',
  Winongo: 'Manguharjo',
}

function getPropertyValue(properties: any, keys: string[]) {
  for (const key of keys) {
    if (properties?.[key] !== undefined && properties?.[key] !== null) {
      return properties[key]
    }
  }

  return ''
}

function createSlug(value: string) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

function normalizeProperties(properties: any): RegionProperties {
  const namaWilayah = getPropertyValue(properties, [
    'NAMOBJ',
    'WADMKD',
    'DESA',
    'KELURAHAN',
    'NAM_DESA',
    'NAMKEL',
    'nama_kel',
    'nama_kelurahan',
    'REMARK',
  ])

  const kecamatanFromGeojson = getPropertyValue(properties, [
    'WADMKC',
    'KECAMATAN',
    'NAM_KEC',
    'NAMKEC',
    'nama_kec',
    'nama_kecamatan',
  ])

  const rawName = String(namaWilayah || 'Wilayah').trim()
  const kecamatan = kecamatanFromGeojson || districtByVillage[rawName] || ''

  return {
    id: createSlug(`${rawName}-${kecamatan}`),
    name: rawName,
    type: 'wilayah',
    kecamatan: kecamatan ? `Kec. ${kecamatan}` : '',
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${rawName} ${kecamatan || ''} Kota Madiun`,
    )}`,
  }
}

function getRegionStyle(
  feature?: any,
  selectedId?: string | null,
): L.PathOptions {
  const region = normalizeProperties(feature?.properties || {})
  const isSelected = region.id === selectedId

  return {
    stroke: true,
    color: '#1F2937',
    weight: 1.15,
    fill: true,
    fillColor: isSelected ? '#F9A51A' : '#FFFFFF',
    fillOpacity: isSelected ? 0.92 : 1,
    opacity: 1,
  }
}

function fitMapToGeoJson(map: L.Map, layer: L.GeoJSON) {
  const bounds = layer.getBounds()

  if (!bounds.isValid()) return

  setTimeout(() => {
    map.invalidateSize()

    map.fitBounds(bounds, {
      paddingTopLeft: [14, 14],
      paddingBottomRight: [14, 14],
      animate: false,
    })

    const finalZoom = map.getZoom()

    map.setMaxBounds(bounds.pad(0.18))
    map.setMinZoom(finalZoom)
    map.setMaxZoom(finalZoom)
  }, 300)
}
  
export function InteractiveMap({ onSelectRegion }: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<L.Map | null>(null)
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null)
  const selectedIdRef = useRef<string | null>(null)

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<RegionProperties | null>(
    null,
  )
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState('')

  function handleSelectRegion(region: RegionProperties) {
    setSelectedId(region.id)
    selectedIdRef.current = region.id
    setSelectedRegion(region)
    onSelectRegion?.(region)
  }

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      touchZoom: false,
      zoomSnap: 0.1,
      zoomDelta: 0.25,
      maxBoundsViscosity: 1.0,
    }).setView(MADIUN_CENTER, 12)

    map.getContainer().style.background = 'transparent'
    mapRef.current = map

    fetch(GEOJSON_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `File GeoJSON tidak ditemukan: ${GEOJSON_URL} | status ${res.status}`,
          )
        }

        return res.json()
      })
      .then((geojson) => {
        const features = Array.isArray(geojson.features)
          ? geojson.features
          : []

        console.log('Jumlah fitur GeoJSON:', features.length)
        console.log('Contoh properties:', features[0]?.properties)

        if (features.length === 0) {
          throw new Error('GeoJSON terbaca, tapi features kosong.')
        }

        const geoJsonLayer = L.geoJSON(
          {
            ...geojson,
            features,
          },
          {
            style: (feature) => getRegionStyle(feature, selectedIdRef.current),

            onEachFeature: (feature, layer) => {
              const region = normalizeProperties(feature.properties || {})

              layer.on('mouseover', () => {
                const target = layer as L.Path

                target.setStyle({
                  stroke: true,
                  color: '#1F2937',
                  weight: 1.15,
                  fill: true,
                  fillColor: '#F9A51A',
                  fillOpacity: 0.88,
                  opacity: 1,
                })

                target.bindTooltip(
                  `
                    <div style="font-family: Inter, Arial, sans-serif;">
                      <strong style="color:#0D3D1C;font-size:12px;">
                        ${region.name}
                      </strong><br/>
                      <span style="font-size:11px;color:#6B7280;">
                        ${region.kecamatan || ''}
                      </span><br/>
                      <span style="font-size:10px;color:#6B7280;">
                        Klik untuk memilih wilayah
                      </span>
                    </div>
                  `,
                  {
                    sticky: true,
                    direction: 'top',
                  },
                )

                target.openTooltip()
              })

              layer.on('mouseout', () => {
                const target = layer as L.Path
                target.setStyle(getRegionStyle(feature, selectedIdRef.current))
              })

              layer.on('click', () => {
                handleSelectRegion(region)

                const element = (layer as L.Path).getElement() as
                  | (HTMLElement & { blur?: () => void })
                  | null

                element?.blur?.()
              })
            },
          },
        ).addTo(map)

        geoJsonLayerRef.current = geoJsonLayer
        fitMapToGeoJson(map, geoJsonLayer)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Gagal memuat GeoJSON Madiun:', error)
        setLoadError(error.message || 'Gagal memuat peta Kota Madiun')
        setIsLoading(false)
      })

    return () => {
      map.remove()
      mapRef.current = null
      geoJsonLayerRef.current = null
    }
  }, [])

  useEffect(() => {
    const layer = geoJsonLayerRef.current

    if (!layer) return

    layer.setStyle((feature) => getRegionStyle(feature, selectedId))
  }, [selectedId])

  return (
    <div className="flex flex-col h-full">
      <div
        className="relative rounded-3xl border-4 overflow-hidden flex-1"
        style={{
          background:
            'radial-gradient(circle at center, #2A7F78 0%, #0D3D1C 100%)',
          borderColor: '#F5D08A',
          minHeight: '450px',
          height: '100%',
        }}
      >
        <div
          ref={mapContainerRef}
          className="absolute inset-0 z-0"
          style={{
            width: '100%',
            height: '100%',
            background:
              'radial-gradient(circle at center, #2A7F78 0%, #0D3D1C 100%)',
          }}
        />

        {isLoading && (
          <div className="absolute inset-0 z-[600] flex items-center justify-center bg-[#0D3D1C]/80">
            <div className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#0D3D1C] shadow-lg">
              Memuat peta Kota Madiun...
            </div>
          </div>
        )}

        {loadError && (
          <div className="absolute inset-0 z-[600] flex items-center justify-center bg-[#0D3D1C]/80 p-5">
            <div className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-bold text-red-500 shadow-lg">
              {loadError}
            </div>
          </div>
        )}

        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 shadow-md border border-gray-100 z-[500]">
          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
            Keseluruhan Wilayah
          </p>

          <p className="text-xs font-bold text-gray-900">
            {selectedRegion?.name || 'Kota Madiun'}
          </p>

          <div className="flex gap-2 mt-1">
            <div>
              <p className="text-sm font-black text-primary leading-none">3</p>
              <p className="text-[8px] text-gray-500">Kecamatan</p>
            </div>

            <div>
              <p className="text-sm font-black text-primary leading-none">27</p>
              <p className="text-[8px] text-gray-500">Kelurahan</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 font-medium mt-2">
        Peta Interaktif Kota Madiun
      </p>
    </div>
  )
}