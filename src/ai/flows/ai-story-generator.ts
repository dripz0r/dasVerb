
'use server';

/**
 * @fileOverview A story generation AI agent that uses learned vocabulary.
 *
 * - generateStory - A function that generates stories in different styles using learned vocabulary.
 * - GenerateStoryInput - The input type for the generateStory function.
 * - GenerateStoryOutput - The return type for the generateStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStoryInputSchema = z.object({
  vocabulary: z
    .array(z.string())
    .describe('An array of German vocabulary words to include in the story.'),
  style: z
    .string()
    .describe(
      'The style of the story to generate (e.g., fairy tale, TikTok drama, sarcastic).'
    ),
});
export type GenerateStoryInput = z.infer<typeof GenerateStoryInputSchema>;

const GenerateStoryOutputSchema = z.object({
  story: z.string().describe('The generated German story, ideally under 100 words. User-provided vocabulary words should be used naturally without any special formatting like asterisks or quotes.'),
  vocabularyExplanation: z.string().describe('Brief English translations or explanations for a few notable German words/phrases found in the story (excluding the user-provided input vocabulary). This helps learners understand the complete story. For example, if the story contains "Der Himmel ist blau", and "Himmel" was not in the input vocab, the explanation might include "Himmel: sky".'),
});
export type GenerateStoryOutput = z.infer<typeof GenerateStoryOutputSchema>;

export async function generateStory(input: GenerateStoryInput): Promise<GenerateStoryOutput> {
  return generateStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStoryPrompt',
  input: {schema: GenerateStoryInputSchema},
  output: {schema: GenerateStoryOutputSchema},
  config: {
    temperature: 0.6,
  },
  prompt: `You are DasVerb, a helpful but dry-humored AI German tutor with a knack for storytelling. You don’t over-explain.
You will be provided with a list of German vocabulary words and a desired style for the story.

Your task is to:
1. Write a short, engaging **German** story that incorporates all the given German vocabulary words in the specified style.
2. IMPORTANT: Do NOT use asterisks, bolding, quotation marks, or any other special formatting for the vocabulary words from the '{{vocabulary}}' list within the story. Integrate them naturally.
3. The story should be short and engaging, ideally under 100 words.
4. The story must be appropriate for language learners.
5. Occasionally inject ironic GenZ references or witty observations to provide extra flair, fitting the DasVerb persona.
6. After the story, identify a few other notable German words or short phrases from the generated story (these should **not** be from the '{{vocabulary}}' list you were given). Provide simple English translations or very brief explanations for these *other* words/phrases to help a language learner understand the full story. Focus on words that a beginner or intermediate learner might find new or tricky. Do not explain the input '{{vocabulary}}' words themselves in this section.

Vocabulary words to include: {{vocabulary}}
Style: {{style}}`,
});

const generateStoryFlow = ai.defineFlow(
  {
    name: 'generateStoryFlow',
    inputSchema: GenerateStoryInputSchema,
    outputSchema: GenerateStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
