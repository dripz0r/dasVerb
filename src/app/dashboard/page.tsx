import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Construction className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">Your Lernreise Awaits!</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg">
            The Dashboard is cooking! 🍳 Soon you'll see your progress, streaks, and personalized lessons here.
            For now, make sure you're logged in to access future features.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
