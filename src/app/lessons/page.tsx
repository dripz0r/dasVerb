import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function LessonsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">Lessons Loading...</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg">
            Our interactive lessons are being crafted with extra Gen Z spice! 🌶️ Check back soon for dynamic content, quizzes, and grammar explained with emojis.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
