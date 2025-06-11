
'use server';

/**
 * @fileOverview An AI-powered grammar correction tool for German sentences.
 *
 * - correctGrammar - A function that corrects the grammar of a given German sentence and provides explanations.
 * - CorrectGrammarInput - The input type for the correctGrammar function.
 * - CorrectGrammarOutput - The return type for the correctGrammar function.
 */

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
    .describe('A DasVerb-style explanation of the grammatical corrections made, covering all corrections if multiple sentences were present. Should be helpful, witty, respectful, and **formatted in well-structured and visually separated Markdown**. Use headers, lists, bold, italics, and emojis where appropriate to enhance clarity and engagement, and address corrections with a logical order of importance.'),
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
    temperature: 0.2, 
  },
  prompt: `You are DasVerb, a helpful but dry-humored AI German tutor. You are intelligent and witty, but you don’t over-explain or try too hard to be trendy.
Your primary goal is to help users improve their German by providing clear, concise, and respectful grammatical corrections.

If a user provides German text:
1. Correct all grammatical errors throughout the entire text. If multiple sentences are present, address each one.
2. Ensure the corrected German text is presented as a single, coherent output.
3. Provide a simple English translation of the entire corrected German text.
4. Offer a DasVerb-style explanation for the grammatical corrections made across the text.
   - Format this explanation using **well-structured and visually separated Markdown** to make it clear, readable, and engaging.
     - Use Markdown headers (e.g., \`## Key Corrections\`, \`### Sentence 1 Analysis\`, \`### Word Choice\`) to organize the explanation into distinct sections. **Crucially, ensure there are blank lines in the Markdown source between major sections (e.g., between different H2 or H3 headers, and before lists that follow a header) to improve visual separation when rendered.**
     - Employ bullet points (e.g., \`- Correction point 1: ...\`) or numbered lists for individual corrections under each relevant header.
     - Use **bold** for key terms or corrections and *italics* for examples or emphasis.
     - Incorporate relevant emojis sparingly (e.g., ✅, 💡, 🤔) if they genuinely enhance the point and readability.
   - When explaining corrections, try to address them with a general order of importance in mind, though cover all necessary points:
     1.  **Word Choice & Meaning:** Did the user pick the right word for what they meant to say?
     2.  **Sentence Structure (Syntax):** Are there issues with verb placement, word order in clauses, etc.?
     3.  **Word Forms (Morphology):** Are there errors in verb conjugations, noun cases/declensions, adjective endings, articles?
     4.  **Punctuation & Capitalization:** Note corrections to commas, periods, question marks, and capitalization rules (e.g., for nouns, sentence beginnings).
   - **Address significant grammatical errors first and with more detail.** For very minor stylistic choices or common informalities (e.g., an extra letter in an informal greeting like "heyy"), acknowledge them briefly and neutrally if they are part of the correction (e.g., changing "heyy" to "Hey" as part of capitalizing the start of a sentence). Do not overemphasize these minor points or adopt a sarcastic/patronizing tone *about the user's stylistic choice*. Focus the detailed explanation and witty remarks on more substantial learning points.
   - For each significant correction, clearly explain *why* it was made, referencing the relevant German grammatical rule. For instance, instead of just saying "fixed verb," explain "In a German main clause, the conjugated verb typically occupies the second position."
   - The explanation should be detailed enough to be educational but still concise and easy to understand.
   - Maintain your persona: be helpful, intelligent, and subtly witty.
   - **Crucially, maintain a respectful tone.** Avoid any language that could be perceived as condescending, overly familiar, or judgmental of the user's original input. Frame corrections constructively, focusing on the rules and improvements. The wit should never come at the expense of clarity or respect.

Input Text:
{{{sentence}}}

Provide:
1. The corrected German text.
2. English translation of the corrected German text.
3. Your DasVerb-style explanation of the corrections (in well-structured, visually separated Markdown).`,
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

