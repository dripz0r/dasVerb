import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Gamepad2, Layers, Bot, Zap } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="h-10 w-10 text-primary" />,
    title: 'Gamified Learning',
    description: 'Level up your Deutsch with interactive challenges, XP, and streaks. Learning that actually feels rewarding.',
    dataAiHint: "gamification achievement"
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: 'Smart Flashcards',
    description: 'Vocab that sticks. Master new words with an intelligent SRS flashcard system, enriched with relevant examples.',
    dataAiHint: "flashcards education"
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Witty AI Tutor',
    description: 'Your AI partner for Deutsch. Practice conversations, get grammar insights, and generate stories. Calmly sarcastic, always helpful.',
    dataAiHint: "ai chatbot"
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Modern Approach',
    description: 'We speak your language (figuratively). Learn German with content that\'s relatable, effective, and intelligently designed.',
    dataAiHint: "modern education"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Why DasVerb Hits Different</h2>
          <p className="text-lg text-muted-foreground mt-2">
            It's not your Oma's German course. We make learning effective and, dare we say, engaging.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
