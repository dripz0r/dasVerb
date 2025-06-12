import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="ml-4 md:ml-6 text-4xl font-bold font-headline transition-colors hover:text-primary/90 drop-shadow-lg rounded-xl px-4 py-1 flex items-center gap-2 hover:scale-105 hover:shadow-xl active:scale-100"
    >
      <span
        className="inline-block font-extrabold tracking-tight bg-gradient-to-br from-primary via-fuchsia-500 to-accent text-transparent bg-clip-text transition-all duration-500 hover:from-accent hover:to-primary hover:via-indigo-400 animate-gradient italic"
      >
        DasVerb
      </span>
    </Link>
  );
}
