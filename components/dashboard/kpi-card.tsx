import { cn } from "@/lib/utils"
import { ArrowUp, ArrowDown } from "lucide-react"
import type { ReactNode } from "react"

export function KpiCard({
  title,
  value,
  change,
  suffix,
  icon,
}: {
  title: string
  value: string | number
  change?: number
  suffix?: string
  icon?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </span>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold tracking-tight text-foreground">
          {value}
          {suffix && <span className="ml-0.5 text-sm font-normal text-muted-foreground">{suffix}</span>}
        </span>
        {change !== undefined && (
          <span
            className={cn(
              "flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium",
              change >= 0
                ? "bg-[#16835a]/10 text-[#16835a]"
                : "bg-[#dc2626]/10 text-[#dc2626]"
            )}
          >
            {change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            {Math.abs(change)}%
          </span>
        )}
      </div>
    </div>
  )
}
