"use client"

import dynamic from "next/dynamic"
import { TopBar } from "@/components/dashboard/top-bar"
import { geographyData } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const LebanonMap = dynamic(() => import("@/components/dashboard/lebanon-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-xl border border-border bg-card">
      <span className="text-sm text-muted-foreground">Loading map...</span>
    </div>
  ),
})

export default function GeographyPage() {
  return (
    <>
      <TopBar title="Geographic Insights" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col gap-6">
          {/* Map */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Learner Density by Governorate
            </h3>
            <LebanonMap data={geographyData} />
          </div>

          {/* Region Breakdown Table */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Region Breakdown</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Region
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Registrations
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Top Channel
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Gap Region
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {geographyData.map((row) => (
                    <tr
                      key={row.region}
                      className={cn(
                        "border-b border-border transition-colors hover:bg-accent/50",
                        row.gap && "bg-destructive/5"
                      )}
                    >
                      <td className="px-4 py-3 font-medium text-foreground">{row.region}</td>
                      <td className="px-4 py-3 font-mono text-foreground">
                        {row.registrations.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{row.topChannel}</td>
                      <td className="px-4 py-3">
                        {row.gap ? (
                          <Badge variant="destructive" className="bg-destructive/20 text-destructive">
                            Gap
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
