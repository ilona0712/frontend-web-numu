import { type NextRequest, NextResponse } from "next/server"
import { learnersData } from "@/lib/mock-data"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "10")
  const channel = searchParams.get("channel")
  const region = searchParams.get("region")
  const track = searchParams.get("track")
  const status = searchParams.get("status")
  const search = searchParams.get("search")

  let filtered = [...learnersData]

  if (channel) {
    const channels = channel.split(",")
    filtered = filtered.filter((l) => channels.includes(l.channel))
  }
  if (region) {
    const regions = region.split(",")
    filtered = filtered.filter((l) => regions.includes(l.region))
  }
  if (track) {
    const tracks = track.split(",")
    filtered = filtered.filter((l) => tracks.includes(l.track))
  }
  if (status) {
    const statuses = status.split(",")
    filtered = filtered.filter((l) => statuses.includes(l.status))
  }
  if (search) {
    const s = search.toLowerCase()
    filtered = filtered.filter(
      (l) =>
        l.name.toLowerCase().includes(s) ||
        l.email.toLowerCase().includes(s) ||
        l.entity.toLowerCase().includes(s)
    )
  }

  const total = filtered.length
  const start = (page - 1) * limit
  const paged = filtered.slice(start, start + limit)

  return NextResponse.json({
    data: paged,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  })
}
