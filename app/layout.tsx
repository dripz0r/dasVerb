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
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 md:px-6">
            {children}
          </div>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
