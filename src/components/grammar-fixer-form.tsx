
"use client";

import type { CorrectGrammarOutput } from "@/ai/flows/grammar-fixer";
import { correctGrammar } from "@/ai/flows/grammar-fixer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Wand2 } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  sentence: z.string().min(5, { message: "Sentence must be at least 5 characters long." }).max(500, { message: "Sentence must be at most 500 characters long." }),
});

type FormData = z.infer<typeof formSchema>;

export function GrammarFixerForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<CorrectGrammarOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sentence: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setResult(null);
    startTransition(async () => {
      try {
        const output = await correctGrammar({ sentence: data.sentence });
        setResult(output);
        toast({
          title: "Grammar Check Complete!",
          description: "Your sentence has been analyzed.",
        });
      } catch (error)
        console.error("Error correcting grammar:", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem processing your request. Please try again.",
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
            <Wand2 className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-headline">AI Grammar Guru</CardTitle>
        </div>
        <CardDescription className="text-md">
          Enter your German sentence below. Our AI will fix it and offer a (hopefully) insightful explanation.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="sentence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="sentence" className="text-lg font-semibold">Your German Sentence</FormLabel>
                  <FormControl>
                    <Textarea
                      id="sentence"
                      placeholder="z.B. Ich gut Deutsch lerne."
                      className="min-h-[100px] text-base resize-none"
                      {...field}
                      aria-describedby="sentence-error"
                    />
                  </FormControl>
                  <FormMessage id="sentence-error" />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isPending} size="lg" className="w-full">
              {isPending ? "Checking..." : "Fix My German!"}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {isPending && (
        <div className="p-6 text-center">
          <p className="text-muted-foreground animate-pulse">Hold tight, the AI is working its magic...</p>
        </div>
      )}
      {result && !isPending && (
        <CardContent className="mt-6 border-t pt-6">
          <h3 className="text-xl font-headline font-semibold mb-4">Guru's Verdict:</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary mb-1">Corrected Sentence:</h4>
              <p className="p-3 bg-primary/10 rounded-md text-lg">{result.correctedSentence}</p>
            </div>
            {result.translatedCorrectedSentence && (
               <div>
                <h4 className="font-semibold text-primary/80 mb-1">Translation:</h4>
                <p className="p-3 bg-primary/5 rounded-md text-md italic">{result.translatedCorrectedSentence}</p>
              </div>
            )}
            <div>
              <h4 className="font-semibold text-accent mb-1">Explanation:</h4>
              <p className="p-3 bg-accent/10 rounded-md whitespace-pre-wrap">{result.explanation}</p>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
