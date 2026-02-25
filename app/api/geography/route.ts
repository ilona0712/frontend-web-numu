import { NextResponse } from "next/server"
import { geographyData } from "@/lib/mock-data"

export async function GET() {
  return NextResponse.json(geographyData)
}
