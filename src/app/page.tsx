import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { PreviewsSection } from '@/components/landing/previews-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PreviewsSection />
      <TestimonialsSection />
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Ready to Vibe with Deutsch?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join the DeutschTok community and start your epic language learning journey today. It's free, it's fun, and it's got that ✨ main character energy ✨.
          </p>
          <Button size="lg" variant="secondary" asChild className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/signup">Sign Up & Slay German</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
