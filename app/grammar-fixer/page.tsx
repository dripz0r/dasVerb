import { GrammarFixerForm } from "@/components/grammar-fixer-form";

export default function GrammarFixerPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      <GrammarFixerForm />
    </div>
  );
}
