"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { TopBar } from "@/components/dashboard/top-bar"
import {
  summaryData,
  channelBreakdown,
  trackDistribution,
  registrationGrowth,
} from "@/lib/mock-data"
import { Users, Radio, CheckCircle2, MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const CHANNEL_COLORS = ["#16835a", "#0c7eb5", "#c6940a", "#d45a07", "#7c5dc7"]
const LINE_COLORS = ["#16835a", "#0c7eb5", "#c6940a", "#d45a07", "#7c5dc7"]

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload) return null
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
      <p className="mb-1 text-xs font-medium text-foreground">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-medium text-foreground">{p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  )
}

export default function DisseminationPage() {
  const [drillDown, setDrillDown] = useState<string | null>(null)

  const drillDownData = drillDown
    ? channelBreakdown.find((c) => c.channel === drillDown)?.subEntities || []
    : []

  const barData = drillDown
    ? drillDownData
    : channelBreakdown.map((c) => ({ name: c.channel, count: c.count }))

  return (
    <>
      <TopBar title="Dissemination Performance" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col gap-6">
          {/* KPI Row */}
          <div className="grid grid-cols-4 gap-4">
            <KpiCard
              title="Total Registrations"
              value={summaryData.totalRegistrations.toLocaleString()}
              change={summaryData.registrationChange}
              icon={<Users className="h-4 w-4" />}
            />
            <KpiCard
              title="Active Channels"
              value={summaryData.activeChannels}
              icon={<Radio className="h-4 w-4" />}
            />
            <KpiCard
              title="Completion Rate"
              value={`${summaryData.completionRate}%`}
              icon={<CheckCircle2 className="h-4 w-4" />}
            />
            <KpiCard
              title="Regions Covered"
              value={`${summaryData.regionsCovered.covered}/${summaryData.regionsCovered.total}`}
              icon={<MapPin className="h-4 w-4" />}
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Horizontal Bar Chart */}
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {drillDown && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDrillDown(null)}
                      className="h-7 gap-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeft className="h-3 w-3" />
                      Back
                    </Button>
                  )}
                  <h3 className="text-sm font-semibold text-foreground">
                    {drillDown ? `${drillDown} - Sub-Entities` : "Registrations by Channel"}
                  </h3>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={barData}
                  layout="vertical"
                  margin={{ left: 10, right: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#d6d1c7" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "#6b6b6b", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fill: "#1a1a1a", fontSize: 11 }}
                    width={120}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(22,131,90,0.06)" }} />
                  <Bar
                    dataKey="count"
                    radius={[0, 6, 6, 0]}
                    cursor={drillDown ? "default" : "pointer"}
                    onClick={(data) => {
                      if (!drillDown && data?.name) {
                        setDrillDown(data.name)
                      }
                    }}
                  >
                    {barData.map((_, idx) => (
                      <Cell key={idx} fill={CHANNEL_COLORS[idx % CHANNEL_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              {!drillDown && (
                <p className="mt-2 text-center text-[10px] text-muted-foreground">
                  Click a bar to drill down into sub-entities
                </p>
              )}
            </div>

            {/* Donut Chart */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Track Interest Distribution</h3>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={trackDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={100}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                    >
                      {trackDistribution.map((entry, idx) => (
                        <Cell key={idx} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (!active || !payload?.[0]) return null
                        const d = payload[0].payload
                        return (
                          <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
                            <p className="text-xs font-medium text-foreground">{d.name}</p>
                            <p className="text-xs text-muted-foreground">{d.value}%</p>
                          </div>
                        )
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                {trackDistribution.map((t) => (
                  <div key={t.name} className="flex items-center gap-1.5 text-xs">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: t.color }} />
                    <span className="text-muted-foreground">{t.name}</span>
                    <span className="font-medium text-foreground">{t.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Line Chart Row */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Registration Growth Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={registrationGrowth} margin={{ left: 10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d6d1c7" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#6b6b6b", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis tick={{ fill: "#6b6b6b", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ fontSize: 11 }}
                  formatter={(value) => (
                    <span className="text-muted-foreground">{value}</span>
                  )}
                />
                {["Universities", "Public Sector", "Employers", "Syndicates", "NGOs"].map(
                  (key, idx) => (
                    <Line
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={LINE_COLORS[idx]}
                      strokeWidth={2}
                      dot={{ r: 3, fill: LINE_COLORS[idx] }}
                      activeDot={{ r: 5 }}
                    />
                  )
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  )
}
