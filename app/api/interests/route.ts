import { NextResponse } from "next/server"
import { motivationsData, challengesData, formatPreference } from "@/lib/mock-data"

export async function GET() {
  return NextResponse.json({ motivationsData, challengesData, formatPreference })
}
