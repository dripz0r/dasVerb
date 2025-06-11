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
  story: z.string().describe('The generated story.'),
});
export type GenerateStoryOutput = z.infer<typeof GenerateStoryOutputSchema>;

export async function generateStory(input: GenerateStoryInput): Promise<GenerateStoryOutput> {
  return generateStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStoryPrompt',
  input: {schema: GenerateStoryInputSchema},
  output: {schema: GenerateStoryOutputSchema},
  prompt: `You are a creative story writer who specializes in writing stories in various styles.

You will be provided with a list of vocabulary words and a style.

Your task is to write a story that incorporates all the given vocabulary words in the specified style. The story should be engaging, entertaining, and appropriate for language learners. Occasionally inject ironic GenZ references to provide extra flair for students.

Vocabulary words: {{vocabulary}}
Style: {{style}}

Story:`,
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
