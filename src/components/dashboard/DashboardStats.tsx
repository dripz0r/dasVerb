"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Flame, UserCheck, BookOpen } from "lucide-react";
import DashboardChart from "../DashboardChart";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-8">
      <Card className="text-center">
        <CardHeader>
          <Flame className="mx-auto h-8 w-8 text-orange-500" />
          <CardTitle className="text-2xl">7-day Streak</CardTitle>
          <CardDescription>Keep it up!</CardDescription>
        </CardHeader>
      </Card>
      <Card className="text-center">
        <CardHeader>
          <UserCheck className="mx-auto h-8 w-8 text-green-500" />
          <CardTitle className="text-2xl">12 Lessons Completed</CardTitle>
          <CardDescription>Great progress!</CardDescription>
        </CardHeader>
      </Card>
      <Card className="text-center">
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