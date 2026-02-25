"use client"

import { useState, useCallback } from "react"
import useSWR from "swr"
import { TopBar } from "@/components/dashboard/top-bar"
import { LearnerSlideOver } from "@/components/dashboard/learner-slide-over"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import type { Learner } from "@/lib/mock-data"
import { useFilters } from "@/lib/filter-context"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function LearnersPage() {
  const { filters } = useFilters()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const limit = 10

  const buildUrl = useCallback(() => {
    const params = new URLSearchParams()
    params.set("page", String(page))
    params.set("limit", String(limit))
    if (search) params.set("search", search)
    if (filters.channels.length) params.set("channel", filters.channels.join(","))
    if (filters.regions.length) params.set("region", filters.regions.join(","))
    if (filters.tracks.length) params.set("track", filters.tracks.join(","))
    if (filters.status.length) params.set("status", filters.status.join(","))
    return `/api/learners?${params.toString()}`
  }, [page, search, filters])

  const { data, isLoading } = useSWR<{
    data: Learner[]
    total: number
    page: number
    totalPages: number
  }>(buildUrl(), fetcher)

  const statusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-[#16835a]/15 text-[#16835a] border-[#16835a]/30"
      case "draft":
        return "bg-[#c6940a]/15 text-[#c6940a] border-[#c6940a]/30"
      case "invalid":
        return "bg-[#dc2626]/15 text-[#dc2626] border-[#dc2626]/30"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <>
      <TopBar title="Learner Profiles" showFilters />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or entity..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setPage(1)
                }}
                className="border-border bg-secondary pl-10 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <span className="text-xs text-muted-foreground">
              {data?.total ?? 0} learners found
            </span>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    {[
                      "Name",
                      "Age Range",
                      "Employment",
                      "Channel",
                      "Entity",
                      "Track",
                      "Region",
                      "Provider",
                      "Status",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={9} className="px-4 py-12 text-center text-muted-foreground">
                        Loading...
                      </td>
                    </tr>
                  ) : !data?.data.length ? (
                    <tr>
                      <td colSpan={9} className="px-4 py-12 text-center text-muted-foreground">
                        No learners found
                      </td>
                    </tr>
                  ) : (
                    data.data.map((learner) => (
                      <tr
                        key={learner.id}
                        onClick={() => setSelectedId(learner.id)}
                        className="group cursor-pointer border-b border-border transition-colors hover:bg-accent/50"
                      >
                        <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                          <span className="group-hover:underline">{learner.name}</span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{learner.ageRange}</td>
                        <td className="px-4 py-3 text-muted-foreground">{learner.employment}</td>
                        <td className="px-4 py-3 text-muted-foreground">{learner.channel}</td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                          {learner.entity}
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant="outline"
                            className="border-border bg-accent/50 text-foreground"
                          >
                            {learner.track}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{learner.region}</td>
                        <td className="px-4 py-3">
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-xs",
                              learner.provider === "Microsoft"
                                ? "border-[#0c7eb5]/30 bg-[#0c7eb5]/10 text-[#0c7eb5]"
                                : "border-[#dc2626]/30 bg-[#dc2626]/10 text-[#dc2626]"
                            )}
                          >
                            {learner.provider}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant="outline"
                            className={cn("capitalize text-xs", statusColor(learner.status))}
                          >
                            {learner.status}
                          </Badge>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {data && data.totalPages > 1 && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Page {data.page} of {data.totalPages}
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="border-border bg-secondary text-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page >= data.totalPages}
                  className="border-border bg-secondary text-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slide-over */}
      <LearnerSlideOver
        learnerId={selectedId}
        onClose={() => setSelectedId(null)}
      />
    </>
  )
}
