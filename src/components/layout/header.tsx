import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/lessons', label: 'Lessons' },
  { href: '/flashcards', label: 'Flashcards' },
  { href: '/grammar-fixer', label: 'Grammar Fixer' },
  { href: '/story-generator', label: 'Story Generator' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                   <Button variant="ghost" asChild className="w-full justify-start">
                     <Link href="/login">Login</Link>
                   </Button>
                   <Button asChild className="w-full justify-start">
                     <Link href="/signup">Sign Up</Link>
                   </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
