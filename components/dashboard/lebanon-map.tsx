"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, CircleMarker, Tooltip as MapTooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"

type GeoData = {
  region: string
  registrations: number
  topChannel: string
  gap: boolean
  lat: number
  lng: number
}

function getColor(registrations: number, gap: boolean) {
  if (gap) return "#ef4444"
  if (registrations > 1000) return "#3ecf8e"
  if (registrations > 500) return "#38bdf8"
  if (registrations > 200) return "#facc15"
  return "#f97316"
}

function getRadius(registrations: number) {
  if (registrations > 1000) return 24
  if (registrations > 500) return 18
  if (registrations > 200) return 14
  return 10
}

export default function LebanonMap({ data }: { data: GeoData[] }) {
  useEffect(() => {
    // Fix leaflet default icon issue
    const L = require("leaflet")
    delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "",
      iconUrl: "",
      shadowUrl: "",
    })
  }, [])

  return (
    <div className="overflow-hidden rounded-lg" style={{ height: 400 }}>
      <MapContainer
        center={[33.88, 35.75]}
        zoom={8}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", background: "#0a0a0f" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com">CARTO</a>'
        />
        {data.map((d) => (
          <CircleMarker
            key={d.region}
            center={[d.lat, d.lng]}
            radius={getRadius(d.registrations)}
            pathOptions={{
              fillColor: getColor(d.registrations, d.gap),
              fillOpacity: 0.7,
              color: getColor(d.registrations, d.gap),
              weight: 2,
              opacity: 0.9,
            }}
          >
            <MapTooltip direction="top" opacity={1}>
              <div className="flex flex-col gap-0.5 font-sans">
                <span className="text-xs font-semibold">{d.region}</span>
                <span className="text-[11px]">
                  {d.registrations.toLocaleString()} learners
                </span>
                <span className="text-[11px] text-gray-500">
                  Top: {d.topChannel}
                </span>
                {d.gap && (
                  <span className="text-[11px] font-semibold text-red-600">
                    Gap Region ({'<'} 50 learners)
                  </span>
                )}
              </div>
            </MapTooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  )
}
