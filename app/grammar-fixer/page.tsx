// app/grammar-fixer/page.tsx
//
// GrammarFixerPage provides a UI for users to submit German sentences for AI-powered grammar correction.
// Renders the GrammarFixerForm, which connects to the AI backend for analysis and feedback.
// This is the main entry point for /grammar-fixer.

import { GrammarFixerForm } from "@/components/grammar-fixer-form";

export default function GrammarFixerPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      {/* Main Grammar Fixer form */}
      <GrammarFixerForm />
    </div>
  );
}
