'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiHelperInputSchema = z.object({
  question: z.string().describe("The user's question about German language, translation, or grammar."),
});
export type AiHelperInput = z.infer<typeof AiHelperInputSchema>;

const AiHelperOutputSchema = z.object({
  answer: z.string().describe("The AI's helpful, DasVerb-style answer."),
});
export type AiHelperOutput = z.infer<typeof AiHelperOutputSchema>;

const aiHelperPrompt = ai.definePrompt({
  name: 'aiHelperPrompt',
  input: { schema: AiHelperInputSchema },
  output: { schema: AiHelperOutputSchema },
  config: {
    temperature: 0.4,
  },
  prompt: `You are DasVerb's AI Helper, a friendly, witty, and clear assistant for German learners. Answer the following question in a helpful, concise, and engaging way. If the user asks for a translation, provide it. If they ask for an explanation, give a simple, clear answer. Always keep a positive, encouraging tone.\n\nQuestion: {{question}}`,
});

const aiHelperFlow = ai.defineFlow(
  {
    name: 'aiHelperFlow',
    inputSchema: AiHelperInputSchema,
    outputSchema: AiHelperOutputSchema,
  },
  async input => {
    const { output } = await aiHelperPrompt(input);
    return output!;
  }
);

export { aiHelperFlow };
export default aiHelperFlow; 