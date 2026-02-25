"use client"

import { useFilters } from "@/lib/filter-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarDays, Filter, X } from "lucide-react"
import { channels, regions, tracks, statuses } from "@/lib/mock-data"

export function TopBar({ title }: { title: string }) {
  const { filters, updateFilter, clearFilters, activeFilterCount } = useFilters()

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-6">
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>

      <div className="flex items-center gap-3">
        {/* Active filter chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          {filters.channels.map((c) => (
            <Badge
              key={c}
              variant="secondary"
              className="gap-1 bg-primary/10 text-primary hover:bg-primary/20"
            >
              {c}
              <button
                onClick={() =>
                  updateFilter("channels", filters.channels.filter((x) => x !== c))
                }
                className="ml-0.5"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {c} filter</span>
              </button>
            </Badge>
          ))}
          {filters.regions.map((r) => (
            <Badge
              key={r}
              variant="secondary"
              className="gap-1 bg-chart-2/10 text-chart-2 hover:bg-chart-2/20"
            >
              {r}
              <button
                onClick={() =>
                  updateFilter("regions", filters.regions.filter((x) => x !== r))
                }
                className="ml-0.5"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {r} filter</span>
              </button>
            </Badge>
          ))}
          {filters.tracks.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className="gap-1 bg-chart-3/10 text-chart-3 hover:bg-chart-3/20"
            >
              {t}
              <button
                onClick={() =>
                  updateFilter("tracks", filters.tracks.filter((x) => x !== t))
                }
                className="ml-0.5"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {t} filter</span>
              </button>
            </Badge>
          ))}
          {filters.status.map((s) => (
            <Badge
              key={s}
              variant="secondary"
              className="gap-1 bg-chart-4/10 text-chart-4 hover:bg-chart-4/20"
            >
              {s}
              <button
                onClick={() =>
                  updateFilter("status", filters.status.filter((x) => x !== s))
                }
                className="ml-0.5"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {s} filter</span>
              </button>
            </Badge>
          ))}
          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-6 text-xs text-muted-foreground">
              Clear all
            </Button>
          )}
        </div>

        {/* Date range display */}
        <div className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          <span>Sep 2025 - Feb 2026</span>
        </div>

        {/* Filters popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 border-border bg-secondary text-foreground">
              <Filter className="h-3.5 w-3.5" />
              Filters
              {activeFilterCount > 0 && (
                <Badge className="ml-1 h-5 w-5 rounded-full bg-primary p-0 text-[10px] text-primary-foreground flex items-center justify-center">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 border-border bg-card p-4" align="end">
            <div className="flex flex-col gap-4">
              <FilterSection
                label="Channel"
                items={channels}
                selected={filters.channels}
                onChange={(v) => updateFilter("channels", v)}
              />
              <FilterSection
                label="Region"
                items={regions}
                selected={filters.regions}
                onChange={(v) => updateFilter("regions", v)}
              />
              <FilterSection
                label="Track"
                items={tracks}
                selected={filters.tracks}
                onChange={(v) => updateFilter("tracks", v)}
              />
              <FilterSection
                label="Status"
                items={statuses as unknown as string[]}
                selected={filters.status}
                onChange={(v) => updateFilter("status", v)}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

function FilterSection({
  label,
  items,
  selected,
  onChange,
}: {
  label: string
  items: string[]
  selected: string[]
  onChange: (v: string[]) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold text-foreground">{label}</span>
      <div className="flex flex-col gap-1.5">
        {items.map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Checkbox
              checked={selected.includes(item)}
              onCheckedChange={(checked) => {
                if (checked) onChange([...selected, item])
                else onChange(selected.filter((x) => x !== item))
              }}
              className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="capitalize">{item}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
