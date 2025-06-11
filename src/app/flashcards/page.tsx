import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";

export default function FlashcardsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Layers className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">Flashcard Frenzy!</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg">
            Get ready for themed vocab decks with SRS, audio, and GIFs! 🎧 Our flashcards are currently in the meme lab. Stay tuned!
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
