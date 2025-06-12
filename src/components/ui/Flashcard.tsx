"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

interface FlashcardProps {
  german: string;
  english: string;
  example?: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({ german, english, example }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Card
      className="w-72 h-44 cursor-pointer perspective border shadow-md transition-transform duration-300 hover:shadow-xl"
      tabIndex={0}
      onClick={() => setFlipped(f => !f)}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && setFlipped(f => !f)}
      aria-label={flipped ? `Show German for ${english}` : `Show English for ${german}`}
    >
      <div className={`relative w-full h-full transition-transform duration-500 ease-in-out ${flipped ? "rotate-y-180" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
          <span className="text-3xl font-bold text-primary font-headline mb-2">{german}</span>
          <CardDescription className="text-base">German</CardDescription>
        </CardContent>
        {/* Back */}
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center backface-hidden rotate-y-180">
          <span className="text-2xl font-semibold text-accent mb-2">{english}</span>
          <CardDescription className="text-base">English</CardDescription>
          {example && <span className="mt-2 text-sm italic text-muted-foreground">{example}</span>}
        </CardContent>
      </div>
    </Card>
  );
};

// Tailwind CSS for 3D flip
// .perspective { perspective: 1000px; }
// .backface-hidden { backface-visibility: hidden; }
// .rotate-y-180 { transform: rotateY(180deg); } 