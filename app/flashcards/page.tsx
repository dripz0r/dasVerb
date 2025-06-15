import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";
import { Flashcard } from "@/components/ui/Flashcard";

const staticFlashcards = [
  { german: "Hund", english: "dog", example: "Der Hund schläft." },
  { german: "Katze", english: "cat", example: "Die Katze trinkt Milch." },
  { german: "Buch", english: "book", example: "Ich lese ein Buch." },
  { german: "Apfel", english: "apple", example: "Der Apfel ist rot." },
  { german: "Haus", english: "house", example: "Das Haus ist groß." },
];

export default function FlashcardsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md text-center shadow-xl mb-8">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Layers className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">Flashcard Frenzy!</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg">
            Get ready for themed vocab decks with SRS, audio, and GIFs! 🎧 Our flashcards are currently in the meme lab. Stay tuned!<br/>
            <span className="text-sm text-muted-foreground">(User-created cards coming soon!)</span>
          </CardDescription>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {staticFlashcards.map((card, i) => (
          <Flashcard key={i} {...card} />
        ))}
      </div>
    </div>
  );
}
