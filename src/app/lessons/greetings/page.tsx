"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const greetings = [
  { german: "Hallo!", english: "Hello!" },
  { german: "Guten Morgen!", english: "Good morning!" },
  { german: "Guten Tag!", english: "Good day!" },
  { german: "Guten Abend!", english: "Good evening!" },
  { german: "Tschüss!", english: "Bye!" },
  { german: "Wie geht's?", english: "How are you?" },
  { german: "Ich heiße ...", english: "My name is ..." },
  { german: "Freut mich!", english: "Nice to meet you!" },
];

export default function GreetingsLessonPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-2xl text-center shadow-xl mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-headline mb-2">German Greetings 👋</CardTitle>
          <CardDescription className="text-lg">Start your German journey with the most common greetings and introductions.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Visual illustration */}
          <div className="flex justify-center my-6">
            <Image
              src="/lessons/greetings-visual.jpeg"
              alt="Two cartoon characters greeting each other"
              width={320}
              height={320}
              className="rounded-xl shadow-lg border border-primary/20 bg-background"
              priority
            />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Common Greetings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {greetings.map((g, i) => (
                <div key={i} className="bg-muted rounded-lg p-4 flex flex-col items-center">
                  <span className="text-lg font-semibold text-primary mb-1">{g.german}</span>
                  <span className="text-base text-muted-foreground">{g.english}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 