// app/docs/(docs)/layout.tsx
//
// This is the main layout for the documentation section of DasVerb.
// It provides a sidebar navigation, a styled header, and a card-like main content area for all docs pages.
// The sidebar links to all major docs sections, and the layout ensures consistent margins, dark mode support, and visual polish.
// Used by all pages under /docs.

import React from "react";
import Link from "next/link";

// Sidebar navigation items for docs
const docsNav = [
  { label: "Welcome", href: "/docs" },
  { label: "Getting Started", href: "/docs/getting-started" },
  { label: "Project Structure", href: "/docs/project-structure" },
  { label: "Features", href: "/docs/features" },
  { label: "Blueprint", href: "/docs/blueprint" },
  { label: "Changelog", href: "/docs/changelog" },
  { label: "Dev Notes", href: "/docs/dev-notes" },
  { label: "Using Docs", href: "/docs/using-docs" },
  { label: "Blog", href: "/docs/blog" },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background text-foreground dark:bg-zinc-900 dark:text-zinc-100">
      {/* Docs header with gradient branding */}
      <header className="p-6 border-b border-purple-200 bg-white/80 dark:bg-[#23244a]/90 backdrop-blur-md shadow-sm flex items-center justify-between">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-400 drop-shadow-sm">
          DasVerb Docs
        </span>
        <span className="text-xs text-purple-500 font-semibold tracking-widest uppercase">Learn. Build. Share.</span>
      </header>
      <div className="flex flex-1 w-full">
        {/* Sidebar navigation for docs sections */}
        <aside className="w-64 min-h-screen border-r bg-muted/50 dark:bg-[#18192b]/90 dark:border-[#23244a] p-6 ml-[-2rem]">
          <nav className="space-y-2">
            {docsNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        {/* Main docs content area, styled as a card for readability and polish */}
        <main className="flex-1 p-10 md:p-14 px-8 md:px-16 mt-8 ml-4 md:ml-8 mx-auto overflow-x-auto max-w-3xl bg-white/90 dark:bg-[#23244a]/90 dark:text-zinc-100 shadow-xl border border-zinc-200 dark:border-zinc-700 rounded-2xl container">
          <div className="prose prose-lg pt-12 pb-20 dark:prose-invert dark:text-zinc-200 dark:prose-headings:text-white dark:prose-headings:font-extrabold dark:prose-strong:text-white dark:prose-p:text-white dark:prose-li:text-white dark:prose-a:text-primary dark:prose-code:text-white dark:prose-blockquote:text-white">
            <div className="h-12" />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 