import { NextRequest, NextResponse } from 'next/server';
import { generateStory } from '@/ai/flows/ai-story-generator';

export async function POST(req: NextRequest) {
  const { vocabulary, style } = await req.json();
  if (!vocabulary || !style) {
    return NextResponse.json({ error: 'Missing vocabulary or style' }, { status: 400 });
  }
  try {
    // Accept both comma-separated string and array for vocabulary
    const vocabArray = Array.isArray(vocabulary)
      ? vocabulary
      : vocabulary.split(',').map((v: string) => v.trim()).filter(Boolean);
    const result = await generateStory({ vocabulary: vocabArray, style });
    return NextResponse.json(result);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Story generator error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 