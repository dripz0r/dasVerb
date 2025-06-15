import React from "react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 text-gray-900 flex flex-col">
      <header className="p-6 border-b border-purple-200 bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-between">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-400 drop-shadow-sm">
          DasVerb Docs
        </span>
        <span className="text-xs text-purple-500 font-semibold tracking-widest uppercase">Learn. Build. Share.</span>
      </header>
      <main className="flex-1 p-8 max-w-3xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
} 