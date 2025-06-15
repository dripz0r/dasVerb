// RootLayout is the global layout for the entire Next.js app. It wraps all pages with a universal container, header, footer, and global Toaster for notifications.
// The main content is always centered and padded for consistent margins across all pages.
// This layout ensures visual consistency and global structure for the app.
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'DasVerb - German grammar, gone hard.',
  description: 'DasVerb: Where German grammar goes hard, but never try-hard. Slick, intelligent German learning with a witty AI tutor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased flex flex-col min-h-screen">
        {/* Global site header with navigation and branding */}
        <Header />
        <main className="flex-grow py-12">
          {/* Universal container for all main content, ensures consistent margins */}
          <div className="container mx-auto px-4 md:px-6">
            {children}
          </div>
        </main>
        {/* Global site footer */}
        <Footer />
        {/* Global notification system (toasts) */}
        <Toaster />
      </body>
    </html>
  );
}
