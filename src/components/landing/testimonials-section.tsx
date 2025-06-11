import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThumbsUp } from 'lucide-react';

const testimonials = [
  {
    name: "Chad Thundercock",
    avatarText: "CT",
    quote: "Bro, I said ‘Bratwurst’ right and now I’m fluent. This app is pure gains for your brain.",
    avatarImage: "https://placehold.co/100x100.png",
    dataAiHint: "man portrait"
  },
  {
    name: "Stacey McStudent",
    avatarText: "SM",
    quote: "This app is low-key goated for German. No cap. The memes make grammar make sense, fr.",
    avatarImage: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait"
  },
  {
    name: "Alex Nonbinary",
    avatarText: "AN",
    quote: "My German went from 😬 to ✨ real quick. Slay! The AI tutor is like, my new bestie.",
    avatarImage: "https://placehold.co/100x100.png",
    dataAiHint: "person smiling"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Don't Just Take Our Word For It</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Peep what our users are saying. They're literally obsessed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                  <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.avatarText}</AvatarFallback>
                </Avatar>
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <h4 className="font-semibold font-headline mr-2">{testimonial.name}</h4>
                  <ThumbsUp className="h-5 w-5 text-accent" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
