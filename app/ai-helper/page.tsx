// app/ai-helper/page.tsx
//
// AiHelperPage provides a UI for users to ask the AI Helper questions about German.
// Renders a card with the AiHelperForm, which connects to the AI backend for answers.
// This is the main entry point for /ai-helper.

import AiHelperForm from "@/components/ai-helper-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function AiHelperPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      {/* Main AI Helper card */}
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-headline">AI Helper</CardTitle>
          </div>
          <CardDescription className="text-md">
            Ask anything about German: translations, grammar, or language tips. The AI Helper is here for you!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AiHelperForm />
        </CardContent>
      </Card>
    </div>
  );
} 