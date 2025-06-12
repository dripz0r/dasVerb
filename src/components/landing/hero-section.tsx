
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { WordTooltip } from '@/components/shared/word-tooltip';
import { ClientOnly } from '@/components/shared/client-only';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight">
            DasVerb. <span className="text-primary">German grammar, gone hard.</span>
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground">
            Stop snoozing through Deutsch class. Level up your language skills with DasVerb – where learning is effective, witty, and <WordTooltip germanWord="klug" englishTranslation="clever / smart">klug</WordTooltip>.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/signup">Start Your Quest</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-accent/50 transition-shadow">
              <Link href="/vibe-check">Take the Vibe Check</Link>
            </Button>
          </div>

          {/* Email Capture Form */}
          <div className="mt-10 pt-6 border-t border-border/30">
            <div className="text-md font-medium text-foreground mb-3 text-center md:text-left">
              🎁 Level up your Deutsch! Get your free learning guide:
            </div>
            <ClientOnly fallback={<div style={{ height: '76px' }} className="w-full opacity-0" aria-hidden="true" />}>
              <form className="flex flex-col sm:flex-row gap-3 items-center">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow text-base"
                  aria-label="Email for free guide"
                />
                <Button type="submit" variant="secondary" className="shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
                  Get Free Guide
                </Button>
              </form>
            </ClientOnly>
            <div className="text-xs text-muted-foreground mt-2 text-center md:text-left">
              We'll send awesome tips & resources. No spam, <WordTooltip germanWord="versprochen" englishTranslation="promised">versprochen</WordTooltip>!
            </div>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl mt-8 md:mt-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl font-bold mb-2">DasVerb</div>
            <div className="text-lg opacity-90">German Learning Made Easy</div>
          </div>
        </div>
      </div>
    </section>
  );
}
