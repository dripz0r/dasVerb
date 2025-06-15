import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-4">
      <nav className="space-y-2">
        <Link href="/dashboard" className="block py-2">Dashboard</Link>
        <Link href="/lessons" className="block py-2">Lessons</Link>
        <Link href="/flashcards" className="block py-2">Flashcards</Link>
        <Link href="/ai-helper" className="block py-2">AI Helper</Link>
        <Link href="/docs" className="block py-2">Docs</Link>
        <Link href="/resources" className="block py-2">Resources</Link>
      </nav>
    </aside>
  );
} 