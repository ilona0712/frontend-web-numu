import { NextResponse } from "next/server"
import { learnersData } from "@/lib/mock-data"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const learner = learnersData.find((l) => l.id === id)
  if (!learner) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json(learner)
}
