"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Flame, UserCheck, BookOpen } from "lucide-react";
import DashboardChart from "../DashboardChart";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 w-full mb-8">
      <Card className="text-center bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6">
        <CardHeader>
          <Flame className="mx-auto h-8 w-8 text-orange-500" />
          <CardTitle className="text-2xl">7-day Streak</CardTitle>
          <CardDescription>Keep it up!</CardDescription>
        </CardHeader>
      </Card>
      <Card className="text-center bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6">
        <CardHeader>
          <UserCheck className="mx-auto h-8 w-8 text-green-500" />
          <CardTitle className="text-2xl">12 Lessons Completed</CardTitle>
          <CardDescription>Great progress!</CardDescription>
        </CardHeader>
      </Card>
      <Card className="text-center bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6">
        <CardHeader>
          <BookOpen className="mx-auto h-8 w-8 text-blue-500" />
          <CardTitle className="text-2xl">Progress Chart</CardTitle>
          <CardDescription>See your weekly activity</CardDescription>
        </CardHeader>
        <CardContent>
          <DashboardChart />
        </CardContent>
      </Card>
    </div>
  );
} 