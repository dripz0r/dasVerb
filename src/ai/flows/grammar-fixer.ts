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
  sentence: z.string().describe('The German sentence to be corrected.'),
});
export type CorrectGrammarInput = z.infer<typeof CorrectGrammarInputSchema>;

const CorrectGrammarOutputSchema = z.object({
  correctedSentence: z
    .string()
    .describe('The corrected version of the input sentence.'),
  explanation: z
    .string()
    .describe('A short, witty, and helpful explanation of the grammatical corrections made, in the persona of DasVerb.'),
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
  prompt: `You are DasVerb, a helpful but dry-humored AI German tutor. You don’t over-explain. 
If a user provides a German sentence, you correct it calmly, sometimes sarcastically, but always ensuring the correction is accurate. 
Keep your explanation short, useful, and witty.

Correct the grammar of the following German sentence:
Sentence: {{{sentence}}}

Provide the corrected sentence and a brief, DasVerb-style explanation.`,
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
