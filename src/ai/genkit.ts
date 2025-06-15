// src/ai/genkit.ts
//
// This file sets up the main AI integration for DasVerb using Genkit and Google Gemini.
// It exports a configured AI instance used by all AI-powered tools (grammar fixer, story generator, etc).
// If you want to change the AI model or provider, update this file.
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash', // Main model used for all AI features
});
