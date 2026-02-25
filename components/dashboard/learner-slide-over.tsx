"use client"

import useSWR from "swr"
import type { Learner } from "@/lib/mock-data"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Lock, CheckCircle2, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function LearnerSlideOver({
  learnerId,
  onClose,
}: {
  learnerId: string | null
  onClose: () => void
}) {
  const { data: learner } = useSWR<Learner>(
    learnerId ? `/api/learner/${learnerId}` : null,
    fetcher
  )

  return (
    <Sheet open={!!learnerId} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-[420px] overflow-y-auto border-border bg-card p-0 sm:max-w-[420px]">
        {learner ? (
          <div className="flex flex-col">
            {/* Header */}
            <SheetHeader className="border-b border-border p-6">
              <SheetTitle className="text-lg font-semibold text-foreground">
                Unified Learner Profile
              </SheetTitle>
              <div className="mt-2 flex flex-col gap-1">
                <span className="text-base font-medium text-foreground">{learner.name}</span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  <span>Admin PII Section</span>
                </div>
                <span className="text-xs text-muted-foreground">{learner.email}</span>
                <span className="text-xs text-muted-foreground">{learner.phone}</span>
              </div>
            </SheetHeader>

            {/* Demographics */}
            <Section title="Demographics">
              <Row label="Age Range" value={learner.ageRange} />
              <Row label="Employment" value={learner.employment} />
              <Row label="Job Level" value={learner.jobLevel} />
              <Row label="Industry" value={learner.industry} />
              <Row label="Experience" value={`${learner.yearsExperience} years`} />
            </Section>

            <Separator className="bg-border" />

            {/* Program */}
            <Section title="Program">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Track</span>
                <Badge className="bg-primary/15 text-primary">{learner.track}</Badge>
              </div>
              <Row label="Channel" value={learner.channel} />
              <Row label="Entity" value={learner.entity} />
              <Row label="Format" value={learner.learningFormat} />
              <Row label="Skill Level" value={learner.skillLevel} />
              <Row label="Motivation" value={learner.motivation} />
            </Section>

            <Separator className="bg-border" />

            {/* Provider */}
            <Section title="Provider">
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs",
                    learner.provider === "Microsoft"
                      ? "border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#38bdf8]"
                      : "border-[#ef4444]/30 bg-[#ef4444]/10 text-[#ef4444]"
                  )}
                >
                  {learner.provider}
                </Badge>
                {learner.certificateEarned && (
                  <div className="flex items-center gap-1 text-xs text-[#3ecf8e]">
                    <Award className="h-3.5 w-3.5" />
                    Certificate Earned
                  </div>
                )}
              </div>
              <div className="mt-2 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{learner.progress}%</span>
                </div>
                <Progress
                  value={learner.progress}
                  className="h-2 bg-secondary [&>div]:bg-primary"
                />
              </div>
              {learner.certificateEarned && (
                <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-[#3ecf8e]/10 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-[#3ecf8e]" />
                  <span className="text-xs font-medium text-[#3ecf8e]">
                    Certificate Verified
                  </span>
                </div>
              )}
            </Section>

            <Separator className="bg-border" />

            {/* Location */}
            <Section title="Location">
              <Row label="Region" value={learner.region} />
              <Row label="City" value={learner.city} />
              <Row label="IP Address" value={learner.ipAddress} />
            </Section>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-muted-foreground">Loading...</span>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 p-6">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>
      {children}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  )
}
