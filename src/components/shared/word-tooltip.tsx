
"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger, // Correctly import DialogTrigger
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { getWordDetails, type WordDetailsOutput } from "@/ai/flows/word-details-flow";
import { Loader2, AlertTriangle } from "lucide-react";

interface WordTooltipProps {
  germanWord: string;
  englishTranslation: string;
  children: React.ReactNode; // This will be the German word displayed inline
  className?: string;
}

export function WordTooltip({
  germanWord,
  englishTranslation,
  children,
  className,
}: WordTooltipProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoadingAiDetails, setIsLoadingAiDetails] = useState(false);
  const [aiDetails, setAiDetails] = useState<WordDetailsOutput | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isDialogOpen && !aiDetails && !isLoadingAiDetails && !aiError) {
      const fetchDetails = async () => {
        setIsLoadingAiDetails(true);
        setAiError(null); // Clear previous errors
        try {
          const details = await getWordDetails({ germanWord, englishTranslation });
          setAiDetails(details);
        } catch (error) {
          console.error("Error fetching AI word details:", error);
          setAiError(error instanceof Error ? error.message : "Failed to fetch details. Please try again.");
        } finally {
          setIsLoadingAiDetails(false);
        }
      };
      fetchDetails();
    }
  }, [isDialogOpen, germanWord, englishTranslation, aiDetails, isLoadingAiDetails, aiError]);

  // Reset AI details when dialog closes or word changes, so it refetches next time
  useEffect(() => {
    if (!isDialogOpen) {
      setAiDetails(null);
      setAiError(null);
      setIsLoadingAiDetails(false);
    }
  }, [isDialogOpen]);


  if (!isMounted) {
    // Render a non-interactive version or a placeholder until mounted
    return (
      <span
        className={cn(
          "text-primary decoration-dotted underline-offset-2",
          className
        )}
      >
        {children}
      </span>
    );
  }

  // When mounted, render the full interactive component
  return (
    <TooltipProvider delayDuration={100}>
      <Dialog onOpenChange={setIsDialogOpen} open={isDialogOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger // Use the imported DialogTrigger directly
              asChild={false} // Ensures DialogTrigger renders its own element (button by default)
              className={cn(
                "p-0 m-0 border-none bg-transparent outline-none focus:outline-none focus:ring-0",
                "text-left font-inherit align-baseline", // Ensure it behaves like text
                "cursor-pointer text-primary hover:underline decoration-dotted underline-offset-2",
                className
              )}
            >
              {children}
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <span>{englishTranslation}</span>
          </TooltipContent>
        </Tooltip>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline">{germanWord}</DialogTitle>
            <DialogDescription className="text-lg">
              {englishTranslation}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4 py-2 border-t max-h-[60vh] overflow-y-auto">
            {isLoadingAiDetails && (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-2 text-muted-foreground">Fetching details...</p>
              </div>
            )}
            {aiError && !isLoadingAiDetails && (
              <div className="flex flex-col items-center justify-center p-4 text-destructive">
                <AlertTriangle className="h-8 w-8 mb-2" />
                <p className="font-semibold">Oops! Could not load details.</p>
                <p className="text-sm text-center">{aiError}</p>
              </div>
            )}
            {aiDetails && !isLoadingAiDetails && !aiError && (
              <>
                <div>
                  <h4 className="font-semibold text-md mb-2 text-primary">Example Sentences:</h4>
                  {aiDetails.exampleSentences && aiDetails.exampleSentences.length > 0 ? (
                    <ul className="list-none pl-0 space-y-2">
                      {aiDetails.exampleSentences.map((ex, index) => (
                        <li key={`ex-${index}-${ex.german.substring(0,10)}`} className="text-sm p-2 bg-secondary/30 rounded-md">
                          <p className="font-medium text-foreground/90">{ex.german}</p>
                          <p className="text-muted-foreground italic">"{ex.english}"</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">No example sentences available.</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-md mb-2 text-primary">Alternate Translations:</h4>
                  {aiDetails.alternateTranslations && aiDetails.alternateTranslations.length > 0 ? (
                  <ul className="list-disc list-inside pl-4 space-y-1 text-sm text-muted-foreground">
                    {aiDetails.alternateTranslations.map((alt, index) => (
                      <li key={`alt-${index}-${alt.substring(0,10)}`}>{alt}</li>
                    ))}
                  </ul>
                  ) : (
                     <p className="text-sm text-muted-foreground italic">No common alternate translations.</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-md mb-2 text-primary">Grammatical Info:</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap p-2 bg-secondary/30 rounded-md">
                    {aiDetails.grammaticalInfo || "No grammatical information available."}
                  </p>
                </div>
              </>
            )}
             {/* Fallback content if AI fails or no details yet, and not loading */}
             {!aiDetails && !isLoadingAiDetails && !aiError && (
              <>
                <div>
                  <h4 className="font-semibold text-md mb-1">Example Sentences:</h4>
                  <p className="text-sm text-muted-foreground italic">(AI-powered examples coming soon!)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-md mb-1">Alternate Translations:</h4>
                  <p className="text-sm text-muted-foreground italic">(AI-powered alternatives coming soon!)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-md mb-1">Grammatical Info:</h4>
                  <p className="text-sm text-muted-foreground italic">(AI-powered grammar insights coming soon!)</p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
