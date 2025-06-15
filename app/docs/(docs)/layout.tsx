import React from "react";
import Link from "next/link";

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 text-gray-900 dark:bg-gradient-to-br dark:from-[#18192a] dark:via-[#1a1b2e] dark:to-[#23244a] dark:text-gray-100 flex flex-col">
      <header className="p-6 border-b border-purple-200 bg-white/80 dark:bg-[#23244a]/80 backdrop-blur-md shadow-sm flex items-center justify-between">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-400 drop-shadow-sm">
          DasVerb Docs
        </span>
        <span className="text-xs text-purple-500 font-semibold tracking-widest uppercase">Learn. Build. Share.</span>
      </header>
      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r border-purple-100 bg-white/60 dark:bg-[#18192a]/80 dark:border-[#23244a] backdrop-blur-md p-6">
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
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full prose prose-zinc dark:prose-invert prose-headings:font-headline prose-headings:font-bold prose-a:text-primary prose-a:underline-offset-2 prose-a:font-medium prose-blockquote:border-l-primary/40 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:p-2 prose-blockquote:font-medium prose-blockquote:text-primary/80 prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-muted prose-pre:rounded-lg prose-pre:p-4 prose-pre:text-xs prose-pre:overflow-x-auto bg-white/90 dark:bg-[#23244a]/90 rounded-xl shadow-lg">
          {children}
        </main>
      </div>
    </div>
  );
} 