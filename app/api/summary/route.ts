import { NextResponse } from "next/server"
import { summaryData } from "@/lib/mock-data"

export async function GET() {
  return NextResponse.json(summaryData)
}
