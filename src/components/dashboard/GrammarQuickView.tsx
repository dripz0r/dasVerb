import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const topics = [
  { title: "The Dative Case", desc: "Learn when and how to use the dative case in German sentences." },
  { title: "Modal Verbs", desc: "Master verbs like können, müssen, and dürfen for expressing ability and necessity." },
  { title: "German Word Order", desc: "Understand the rules for sentence structure and verb placement." },
  { title: "Separable Prefix Verbs", desc: "See how prefixes change the meaning and placement of verbs." },
  { title: "Noun Genders", desc: "Tips for remembering der, die, das and using them correctly." },
];

export default function GrammarQuickView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
      {topics.map((topic, i) => (
        <Card key={i} className="text-center">
          <CardHeader>
            <CardTitle className="text-xl font-headline">{topic.title}</CardTitle>
            <CardDescription className="text-base mt-2">{topic.desc}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
} 