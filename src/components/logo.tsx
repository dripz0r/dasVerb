import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="ml-2 text-3xl font-bold font-headline text-primary transition-colors hover:text-primary/90 drop-shadow-sm md:text-4xl"
    >
      DasVerb
    </Link>
  );
}
