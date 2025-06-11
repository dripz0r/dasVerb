import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Gamepad2, Layers, Bot, Zap } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="h-10 w-10 text-primary" />,
    title: 'Gamified Learning',
    description: 'Level up your Deutsch with interactive challenges, XP, and streaks. Who said learning can\'t be a W?',
    dataAiHint: "gamification achievement"
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: 'Meme-ified Flashcards',
    description: 'Vocab so lit, it actually sticks. Master new words with SRS flashcards featuring relevant memes and GIFs.',
    dataAiHint: "flashcards education"
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Smart AI Tutor',
    description: 'Your AI bestie for Deutsch dilemmas. Practice convos, get grammar fixes, and generate stories. It\'s like ChatGPT, but for German.',
    dataAiHint: "ai chatbot"
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Gen Z Flavor',
    description: 'We speak your language (literally). Learn German with content that\'s actually relatable and funny. Iykyk.',
    dataAiHint: "youth culture"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Why DeutschTok Slaps</h2>
          <p className="text-lg text-muted-foreground mt-2">
            It's not your Oma's German course. We make learning effective and, dare we say, enjoyable.
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
