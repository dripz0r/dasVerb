import { StoryGeneratorForm } from "@/components/story-generator-form";

export default function StoryGeneratorPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      <StoryGeneratorForm />
    </div>
  );
}
