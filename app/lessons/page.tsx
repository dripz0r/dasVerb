// app/lessons/page.tsx
//
// LessonsPage displays the main lesson library for DasVerb.
// Shows a grid of example lessons (with tags and descriptions) and a user progress chart.
// Uses LessonCard for each lesson and DashboardChart for progress visualization.
// This is the main entry point for /lessons.

"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { LessonCard } from "@/components/ui/LessonCard";
import DashboardChart from "@/components/DashboardChart";

// Example lessons to display in the lesson grid
const exampleLessons = [
  {
    title: "German Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself in German.",
    tag: "Beginner",
    href: "/lessons/greetings",
  },
  {
    title: "The Dative Case",
    description: "Master the dative case with clear examples and tips for usage.",
    tag: "Grammar",
  },
  {
    title: "Numbers 1-20",
    description: "Count from eins to zwanzig and use numbers in real-life situations.",
    tag: "Vocabulary",
  },
  {
    title: "Ordering Food",
    description: "Essential phrases and etiquette for eating out in Germany.",
    tag: "Culture",
  },
  {
    title: "Modal Verbs",
    description: "How to use können, müssen, and more to express ability and necessity.",
    tag: "Verbs",
  },
];

export default function LessonsPage() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-8rem)] mt-8">
      {/* Page header card */}
      <Card className="w-full max-w-md text-center shadow-xl mb-8">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">Lesson Library</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg">
            Explore bite-sized lessons on German grammar, vocab, and culture. More interactive content coming soon!
          </CardDescription>
        </CardContent>
      </Card>
      {/* Lesson grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {exampleLessons.map((lesson, i) => (
          <LessonCard key={i} {...lesson} />
        ))}
      </div>
      {/* Progress chart card */}
      <Card className="w-full max-w-md text-center shadow-xl mt-8">
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <DashboardChart />
        </CardContent>
      </Card>
    </div>
  );
}
