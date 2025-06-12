"use client";

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Rocket, Github, Globe, MessageCircle, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/lessons', label: 'Lessons' },
  { href: '/flashcards', label: 'Flashcards' },
  { href: '/grammar-fixer', label: 'Grammar Fixer' },
  { href: '/story-generator', label: 'Story Generator' },
  { href: '/ai-helper', label: 'AI Helper' },
];

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  return (
    <button
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full p-2 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      onClick={() => setDark(d => !d)}
    >
      {dark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-primary" />}
    </button>
  );
}

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

        <div className="hidden md:flex items-center space-x-4">
          <DarkModeToggle />
          {/* Level Up Token */}
          <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full text-primary font-semibold text-sm shadow">
            <Rocket className="h-4 w-4 mr-1" />
            Level 3
          </div>
          {/* Social Icons */}
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors"><MessageCircle className="h-5 w-5" /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors"><Github className="h-5 w-5" /></a>
          <a href="#" className="hover:text-blue-500 transition-colors"><Globe className="h-5 w-5" /></a>
          {/* Login/Signup */}
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
                  {/* Level Up Token and Socials for mobile */}
                  <div className="flex items-center gap-2 mt-4">
                    <DarkModeToggle />
                    <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full text-primary font-semibold text-xs shadow">
                      <Rocket className="h-4 w-4 mr-1" />
                      Level 3
                    </div>
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors"><MessageCircle className="h-4 w-4" /></a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors"><Github className="h-4 w-4" /></a>
                    <a href="#" className="hover:text-blue-500 transition-colors"><Globe className="h-4 w-4" /></a>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
