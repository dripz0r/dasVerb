
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
    .describe('An array of vocabulary words to include in the story.'),
  style: z
    .string()
    .describe(
      'The style of the story to generate (e.g., fairy tale, TikTok drama, sarcastic).'
    ),
});
export type GenerateStoryInput = z.infer<typeof GenerateStoryInputSchema>;

const GenerateStoryOutputSchema = z.object({
  story: z.string().describe('The generated story, ideally under 100 words.'),
  vocabularyExplanation: z.string().describe('A brief explanation of how the provided vocabulary words were used in the story, suitable for language learners.'),
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
  prompt: `You are a creative story writer who specializes in writing stories in various styles, particularly for language learners.
You will be provided with a list of vocabulary words and a desired style for the story.

Your task is to:
1. Write a story that incorporates all the given vocabulary words in the specified style.
2. The story should be short and engaging, ideally under 100 words.
3. The story must be appropriate for language learners.
4. Occasionally inject ironic GenZ references to provide extra flair for students.
5. After the story, provide a brief explanation of how the provided vocabulary words were used in the story. This explanation should help a language learner understand their meaning and usage in context.

Vocabulary words: {{vocabulary}}
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
