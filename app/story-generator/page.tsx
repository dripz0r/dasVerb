// app/story-generator/page.tsx
//
// StoryGeneratorPage provides a UI for users to generate AI-powered German stories.
// Renders the StoryGeneratorForm, which connects to the AI backend for story creation and vocab explanations.
// This is the main entry point for /story-generator.

import { StoryGeneratorForm } from "@/components/story-generator-form";

export default function StoryGeneratorPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      {/* Main Story Generator form */}
      <StoryGeneratorForm />
    </div>
  );
}
