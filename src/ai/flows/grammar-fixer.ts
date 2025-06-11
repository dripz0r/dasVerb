
// 'use server';
/**
 * @fileOverview An AI-powered grammar correction tool for German sentences.
 *
 * - correctGrammar - A function that corrects the grammar of a given German sentence and provides explanations.
 * - CorrectGrammarInput - The input type for the correctGrammar function.
 * - CorrectGrammarOutput - The return type for the correctGrammar function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CorrectGrammarInputSchema = z.object({
  sentence: z.string().describe('The German text (which may contain one or more sentences) to be corrected.'),
});
export type CorrectGrammarInput = z.infer<typeof CorrectGrammarInputSchema>;

const CorrectGrammarOutputSchema = z.object({
  correctedSentence: z
    .string()
    .describe('The corrected version of the input text. If multiple sentences were provided, this contains all of them corrected and combined.'),
  translatedCorrectedSentence: z
    .string()
    .describe('The English translation of the entire corrected German text.'),
  explanation: z
    .string()
    .describe('A short, witty, and helpful explanation of the grammatical corrections made, in the persona of DasVerb, covering all corrections if multiple sentences were present.'),
});
export type CorrectGrammarOutput = z.infer<typeof CorrectGrammarOutputSchema>;

export async function correctGrammar(input: CorrectGrammarInput): Promise<CorrectGrammarOutput> {
  return correctGrammarFlow(input);
}

const correctGrammarPrompt = ai.definePrompt({
  name: 'correctGrammarPrompt',
  input: {schema: CorrectGrammarInputSchema},
  output: {schema: CorrectGrammarOutputSchema},
  config: {
    temperature: 0.65,
  },
  prompt: `You are DasVerb, a helpful but dry-humored AI German tutor. You are intelligent and witty, but you don’t over-explain or try too hard to be trendy.
If a user provides German text, you correct all grammatical errors throughout the entire text. If multiple sentences are present, address each one.
Keep your explanation short, useful, and subtly witty. Avoid overly familiar or condescending language. Respect the user's intelligence.

Correct the grammar of the following German text:
Input Text:
{{{sentence}}}

Provide:
1. The corrected German text. If there were multiple sentences in the input, ensure all are corrected and presented together.
2. A simple English translation of the entire corrected German text.
3. A brief, DasVerb-style explanation of the grammatical corrections made across the text. Focus on the most important corrections if there are many.`,
});

const correctGrammarFlow = ai.defineFlow(
  {
    name: 'correctGrammarFlow',
    inputSchema: CorrectGrammarInputSchema,
    outputSchema: CorrectGrammarOutputSchema,
  },
  async input => {
    const {output} = await correctGrammarPrompt(input);
    return output!;
  }
);

