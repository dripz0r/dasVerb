
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger
              className={cn(
                "p-0 m-0 border-none bg-transparent outline-none focus:outline-none focus:ring-0", // Reset button appearance
                "text-left font-inherit align-baseline", // Inherit text properties
                "cursor-pointer text-primary hover:underline decoration-dotted underline-offset-2", // Original span styles
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
          <div className="mt-4 space-y-3 py-2 border-t">
            <div>
              <h4 className="font-semibold text-md mb-1">Example Sentences:</h4>
              <ul className="list-disc list-inside pl-2 space-y-1 text-sm text-muted-foreground">
                <li>(e.g., "Das ist ein Beispiel für '{germanWord}'.")</li>
                <li>(More examples coming soon!)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-md mb-1">Alternate Translations:</h4>
              <p className="text-sm text-muted-foreground">
                (Other meanings or nuances will be shown here.)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-md mb-1">Grammatical Info:</h4>
              <p className="text-sm text-muted-foreground">
                (e.g., Gender, plural, verb conjugations - coming soon!)
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
