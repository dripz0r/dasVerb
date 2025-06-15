import { NextRequest, NextResponse } from 'next/server';
import { correctGrammar } from '@/ai/flows/grammar-fixer';

export async function POST(req: NextRequest) {
  const { sentence } = await req.json();
  if (!sentence) {
    return NextResponse.json({ error: 'No sentence provided' }, { status: 400 });
  }
  try {
    const result = await correctGrammar({ sentence });
    return NextResponse.json(result);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Grammar fixer error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 