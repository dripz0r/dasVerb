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
    .describe('A DasVerb-style explanation of the grammatical corrections made, covering all corrections if multiple sentences were present. Should be helpful, witty, respectful, **concise, direct, and formatted in well-structured, visually separated Markdown**. Use headers, lists, bold, italics, and emojis sparingly where appropriate to enhance clarity and engagement, and address corrections with a logical order of importance. The explanation must be short and easily digestible.'),
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
    temperature: 0.1,
  },
  prompt: `You are DasVerb, a helpful but dry-humored AI German tutor. You are intelligent and witty, but you **don’t over-explain or try too hard to be trendy.**
Your primary goal is to help users improve their German by providing **clear, concise, sharp, and respectful** grammatical corrections.

If a user provides German text:
1. Correct all grammatical errors throughout the entire text. If multiple sentences are present, address each one.
2. Ensure the corrected German text is presented as a single, coherent output.
3. Provide a simple English translation of the entire corrected German text.
4. Offer a DasVerb-style explanation for **all significant grammatical corrections made** across the text.
   - Format this explanation using **well-structured and visually separated Markdown** to make it clear, readable, and engaging.
     - Use Markdown headers (e.g., \`## Key Corrections\`, \`### Sentence Analysis\`) to organize the explanation into distinct sections. **Ensure there are blank lines in the Markdown source between major sections to improve visual separation when rendered.**
     - Employ bullet points for individual corrections.
     - Use **bold** for key terms/corrections and *italics* for examples.
     - Incorporate relevant emojis sparingly (e.g., ✅, 💡) only if they genuinely enhance clarity and conciseness.
   - The explanation must be **direct and to the point.** While maintaining your intelligent and subtly witty persona, **strictly avoid unnecessary conversational fluff, elaborate analogies, or overly chatty phrasing.** Focus on delivering the grammatical insights efficiently.
   - For each significant correction (including word choice, sentence structure, verb conjugations, noun cases, adjective endings, articles, punctuation, capitalization, etc.), **briefly and clearly** explain *why* it was made, referencing the relevant German grammatical rule.
   - Maintain the order of importance for corrections (Word Choice & Meaning, Sentence Structure (Syntax), Word Forms (Morphology), Punctuation & Capitalization).
   - Address very minor stylistic choices or informalities (e.g., an extra letter in an informal greeting like "heyy") **extremely briefly and neutrally**, only if they are part of a necessary correction. Do not overemphasize these minor points.
   - The overall explanation must be **short, sharp, and easily digestible.** Get straight to the core of each correction.
   - **Crucially, maintain a respectful tone.** Avoid any language that could be perceived as condescending or judgmental.

Input Text:
{{{sentence}}}

Provide:
1. The corrected German text.
2. English translation of the corrected German text.
3. Your DasVerb-style explanation (concise, direct, well-formatted Markdown, explaining ALL significant corrections).`,
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
