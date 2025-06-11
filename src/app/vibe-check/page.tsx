import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function VibeCheckPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-lg text-center shadow-xl">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <HelpCircle className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">Vibe Check Time!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Let's figure out your German level, witty style. This placement quiz is currently under construction. 🚧
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Our team of highly-skilled memeologists and linguists are crafting the perfect "Vibe Check" to place you in the right DasVerb level.
            Expect questions like: "What's the German equivalent of 'yeet'?" (Spoiler: there isn't one, but we'll try).
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
