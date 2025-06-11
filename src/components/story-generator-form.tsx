"use client";

import type { GenerateStoryOutput } from "@/ai/flows/ai-story-generator";
import { generateStory } from "@/ai/flows/ai-story-generator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const storyStyles = [
  "Fairy Tale",
  "TikTok Drama",
  "Sarcastic Monologue",
  "Sci-Fi Adventure",
  "Mystery Short",
  "Gen Z Slang Overload",
];

const formSchema = z.object({
  vocabulary: z.string().min(3, { message: "Please enter at least one vocabulary word." }).max(200, {message: "Too many words! Keep it under 200 characters."}),
  style: z.string().min(1, { message: "Please select a story style." }),
});

type FormData = z.infer<typeof formSchema>;

export function StoryGeneratorForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<GenerateStoryOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vocabulary: "",
      style: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setResult(null);
    const vocabularyArray = data.vocabulary.split(',').map(word => word.trim()).filter(word => word.length > 0);
    if (vocabularyArray.length === 0) {
        form.setError("vocabulary", { type: "manual", message: "Please enter at least one valid vocabulary word." });
        return;
    }

    startTransition(async () => {
      try {
        const output = await generateStory({ vocabulary: vocabularyArray, style: data.style });
        setResult(output);
        toast({
          title: "Story Time!",
          description: "Your custom story has been generated.",
        });
      } catch (error) {
        console.error("Error generating story:", error);
         toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem generating your story. Please try again.",
          variant: "destructive",
        });
        setResult(null);
      }
    });
  };

  return (
    <Card className="w-full max-w-2xl shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-headline">AI Story Weaver</CardTitle>
        </div>
        <CardDescription className="text-md">
          Got some new German words? Drop 'em here (comma-separated), pick a vibe, and our AI storyteller will whip up a tale. Get ready for some... interesting... stories. 😉
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="vocabulary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="vocabulary" className="text-lg font-semibold">Your German Vocab (comma-separated)</FormLabel>
                  <FormControl>
                    <Input
                      id="vocabulary"
                      placeholder="z.B. Katze, Abenteuer, Käse"
                      className="text-base"
                      {...field}
                      aria-describedby="vocabulary-error"
                    />
                  </FormControl>
                  <FormMessage id="vocabulary-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="style"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="style" className="text-lg font-semibold">Story Vibe</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger id="style" aria-describedby="style-error">
                        <SelectValue placeholder="Select a story style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {storyStyles.map((style) => (
                        <SelectItem key={style} value={style}>
                          {style}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage id="style-error" />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isPending} size="lg" className="w-full">
              {isPending ? "Weaving Tale..." : "Generate Story!"}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {isPending && (
        <div className="p-6 text-center">
          <p className="text-muted-foreground animate-pulse">The AI muse is contemplating your words...</p>
        </div>
      )}
      {result && !isPending && (
        <CardContent className="mt-6 border-t pt-6">
          <h3 className="text-xl font-headline font-semibold mb-2">Your Epic Tale:</h3>
          <Textarea
            readOnly
            value={result.story}
            className="min-h-[200px] text-base bg-primary/5 resize-none"
            aria-label="Generated story"
          />
        </CardContent>
      )}
    </Card>
  );
}
