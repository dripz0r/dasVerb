import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

interface LessonCardProps {
  title: string;
  description: string;
  tag?: string;
  href?: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({ title, description, tag, href }) => {
  const cardContent = (
    <Card className={`w-full max-w-sm shadow-md hover:shadow-xl transition-shadow duration-300 ${href ? 'cursor-pointer hover:ring-2 hover:ring-primary/60 focus-within:ring-2 focus-within:ring-primary/80' : ''}`} tabIndex={href ? 0 : -1}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-headline">{title}</CardTitle>
          {tag && <Badge variant="secondary" className="ml-2 text-xs px-2 py-1">{tag}</Badge>}
        </div>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
  return href ? (
    <Link href={href} tabIndex={0} className="outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded-lg">
      {cardContent}
    </Link>
  ) : cardContent;
}; 