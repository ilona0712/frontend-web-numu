"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Filters = {
  channels: string[]
  regions: string[]
  tracks: string[]
  dateRange: { start: string; end: string }
  status: string[]
}

type FilterContextType = {
  filters: Filters
  setFilters: (filters: Filters) => void
  updateFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void
  clearFilters: () => void
  activeFilterCount: number
}

const defaultFilters: Filters = {
  channels: [],
  regions: [],
  tracks: [],
  dateRange: { start: "2025-09-01", end: "2026-02-28" },
  status: [],
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>(defaultFilters)

  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => setFilters(defaultFilters)

  const activeFilterCount =
    filters.channels.length +
    filters.regions.length +
    filters.tracks.length +
    filters.status.length

  return (
    <FilterContext.Provider value={{ filters, setFilters, updateFilter, clearFilters, activeFilterCount }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilters() {
  const ctx = useContext(FilterContext)
  if (!ctx) throw new Error("useFilters must be used within a FilterProvider")
  return ctx
}
