
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
  }, []); // Empty dependency array ensures this runs once on mount

  if (!isMounted) {
    // Render a non-interactive version or a placeholder until mounted
    // This helps avoid hydration mismatches with complex client-side components
    // We apply similar base styling to avoid layout shifts.
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
            <DialogTrigger asChild>
              <span
                className={cn(
                  "cursor-pointer text-primary hover:underline decoration-dotted underline-offset-2",
                  className
                )}
              >
                {children}
              </span>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>{englishTranslation}</p>
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
