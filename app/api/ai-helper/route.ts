import { NextRequest, NextResponse } from "next/server";
import { aiHelperFlow } from "@/ai/flows/ai-helper-flow";

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  if (!question) {
    return NextResponse.json({ error: "No question provided" }, { status: 400 });
  }
  try {
    const { answer } = await aiHelperFlow({ question });
    return NextResponse.json({ answer });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "AI Helper error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 