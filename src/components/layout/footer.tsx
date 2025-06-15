import Link from 'next/link';
import { Github, Users, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-headline font-semibold text-primary mb-2">DasVerb</h3>
            <p className="text-sm text-muted-foreground">Where German grammar goes hard, but never try-hard.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 font-headline">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/docs" className="text-sm hover:text-primary transition-colors">Docs</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 font-headline">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </Link>
              <Link href="#" aria-label="Community" className="text-muted-foreground hover:text-primary transition-colors">
                <Users size={24} />
              </Link>
              <Link href="#" aria-label="Forum" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} DasVerb. All rights reserved. Made with ✨ by Firebase Studio.
        </div>
      </div>
    </footer>
  );
}
