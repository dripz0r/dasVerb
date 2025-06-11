
'use server';
/**
 * @fileOverview An AI flow to provide detailed information about a German word.
 *
 * - getWordDetails - Fetches example sentences, alternate translations, and grammatical info.
 * - WordDetailsInput - Input type for getWordDetails.
 * - WordDetailsOutput - Output type for getWordDetails.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WordDetailsInputSchema = z.object({
  germanWord: z.string().describe('The German word to get details for.'),
  englishTranslation: z.string().describe('The primary English translation of the German word.'),
});
export type WordDetailsInput = z.infer<typeof WordDetailsInputSchema>;

const ExampleSentenceSchema = z.object({
  german: z.string().describe('An example sentence in German using the word.'),
  english: z.string().describe('The English translation of the German example sentence.'),
});

const WordDetailsOutputSchema = z.object({
  exampleSentences: z
    .array(ExampleSentenceSchema)
    .describe('Up to two clear example sentences showcasing the word in common contexts. Include both German and English.'),
  alternateTranslations: z
    .array(z.string())
    .describe('A few common alternate English translations or nuances for the word. Keep these brief.'),
  grammaticalInfo: z
    .string()
    .describe(
      'Concise grammatical information. For nouns: gender (der/die/das), plural form, and genitive singular if common. For verbs: if regular/irregular, and a key principal part (e.g., past participle). For adjectives: basic declension pattern or common forms. Keep it brief and learner-friendly.'
    ),
});
export type WordDetailsOutput = z.infer<typeof WordDetailsOutputSchema>;

export async function getWordDetails(input: WordDetailsInput): Promise<WordDetailsOutput> {
  return wordDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'wordDetailsPrompt',
  input: {schema: WordDetailsInputSchema},
  output: {schema: WordDetailsOutputSchema},
  config: {
    temperature: 0.3,
  },
  prompt: `You are DasVerb, a helpful and witty AI German tutor.
A user has clicked on the German word "{{germanWord}}", which is commonly translated as "{{englishTranslation}}".

Provide the following details for "{{germanWord}}":

1.  **Example Sentences**: Generate 1-2 clear and common example sentences in German using the word "{{germanWord}}". For each German sentence, also provide its English translation.
2.  **Alternate Translations**: List 2-3 common alternate English translations or nuances for "{{germanWord}}", if applicable. If there are no common distinct alternatives, you can state that "{{englishTranslation}}" is the primary meaning.
3.  **Grammatical Info**: Provide concise grammatical information for "{{germanWord}}".
    *   If it's a Noun: State its gender (der, die, or das), its plural form, and its genitive singular form if commonly used (e.g., "des Buches").
    *   If it's a Verb: Indicate if it's regular or irregular. Provide its past participle. If it's a separable verb, mention that.
    *   If it's an Adjective: Briefly mention how it's typically declined or if it has common irregular forms.
    *   If it's another word type (preposition, conjunction, etc.): Provide a brief note on its usage or function.
    Keep this information very brief and targeted for a language learner.

Ensure your output is structured according to the requested format.
The user is learning German, so prioritize common usage and clear explanations.
`,
});

const wordDetailsFlow = ai.defineFlow(
  {
    name: 'wordDetailsFlow',
    inputSchema: WordDetailsInputSchema,
    outputSchema: WordDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to get word details from AI.');
    }
    return output;
  }
);
