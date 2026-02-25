"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Compass, Globe2, Users } from "lucide-react"

const navItems = [
  { label: "Dissemination", href: "/dashboard", icon: BarChart3 },
  { label: "Interests", href: "/dashboard/interests", icon: Compass },
  { label: "Geography", href: "/dashboard/geography", icon: Globe2 },
  { label: "Learners", href: "/dashboard/learners", icon: Users },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex w-[220px] shrink-0 flex-col border-r border-border bg-sidebar">
      <div className="flex h-16 items-center gap-2 border-b border-border px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-primary-foreground">N</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-sidebar-foreground">
            NUMU
          </span>
          <span className="text-[10px] leading-none text-muted-foreground">Analytics</span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        <span className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Navigation
        </span>
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-accent flex items-center justify-center">
            <span className="text-[10px] font-medium text-accent-foreground">MA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-sidebar-foreground">MITAI Admin</span>
            <span className="text-[10px] text-muted-foreground">Ministry</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
