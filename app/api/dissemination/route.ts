import { NextResponse } from "next/server"
import { channelBreakdown, trackDistribution, registrationGrowth } from "@/lib/mock-data"

export async function GET() {
  return NextResponse.json({ channelBreakdown, trackDistribution, registrationGrowth })
}
