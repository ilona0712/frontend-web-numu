"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts"
import { TopBar } from "@/components/dashboard/top-bar"
import { motivationsData, challengesData, formatPreference } from "@/lib/mock-data"

const MOTIVATION_COLORS = ["#3ecf8e", "#38bdf8", "#facc15", "#f97316"]
const CHALLENGE_COLORS = ["#ef4444", "#f97316", "#facc15", "#38bdf8", "#a78bfa"]
const FORMAT_COLORS = {
  online_self_paced: "#3ecf8e",
  live_online: "#38bdf8",
  in_person: "#facc15",
  hybrid: "#a78bfa",
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload) return null
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
      <p className="mb-1 text-xs font-medium text-foreground">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-medium text-foreground">{p.value}%</span>
        </div>
      ))}
    </div>
  )
}

export default function InterestsPage() {
  return (
    <>
      <TopBar title="Interest & Strategy" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col gap-6">
          {/* Learning Motivations */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Learning Motivations</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={motivationsData} margin={{ left: 10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#232333" vertical={false} />
                <XAxis
                  dataKey="motivation"
                  tick={{ fill: "#e8e8ed", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#71717a", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(62,207,142,0.05)" }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {motivationsData.map((_, idx) => (
                    <Cell key={idx} fill={MOTIVATION_COLORS[idx]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Top Challenges */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Top Challenges Reported</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={challengesData} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#232333" horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fill: "#71717a", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <YAxis
                    type="category"
                    dataKey="challenge"
                    tick={{ fill: "#e8e8ed", fontSize: 11 }}
                    width={110}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(62,207,142,0.05)" }} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {challengesData.map((_, idx) => (
                      <Cell key={idx} fill={CHALLENGE_COLORS[idx]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Learning Format Preference */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Learning Format Preference</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={formatPreference} margin={{ left: 10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#232333" vertical={false} />
                  <XAxis
                    dataKey="format"
                    tick={{ fill: "#e8e8ed", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#71717a", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(62,207,142,0.05)" }} />
                  <Legend
                    wrapperStyle={{ fontSize: 11 }}
                    formatter={(value: string) => (
                      <span className="text-muted-foreground">{value.replace(/_/g, " ")}</span>
                    )}
                  />
                  <Bar dataKey="online_self_paced" name="Online Self-Paced" stackId="a" fill={FORMAT_COLORS.online_self_paced} />
                  <Bar dataKey="live_online" name="Live Online" stackId="a" fill={FORMAT_COLORS.live_online} />
                  <Bar dataKey="in_person" name="In Person" stackId="a" fill={FORMAT_COLORS.in_person} />
                  <Bar dataKey="hybrid" name="Hybrid" stackId="a" fill={FORMAT_COLORS.hybrid} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
