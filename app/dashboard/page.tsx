"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DictionaryQuickView from "@/components/dashboard/DictionaryQuickView";
import GrammarQuickView from "@/components/dashboard/GrammarQuickView";

const TABS = ["Overview", "Dictionary", "Grammar Lessons"];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      {/* Section Header and Tabs */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-headline font-bold flex items-center gap-3 mb-2">
            <BookOpen className="h-10 w-10 text-primary" /> Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Welcome back! Track your progress, streaks, and stats as you master German with DasVerb.
          </p>
        </div>
        {/* Tab Bar */}
        <div className="flex gap-2 bg-muted rounded-lg p-1 shadow-inner">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === tab ? "bg-primary text-white shadow" : "text-primary hover:bg-primary/10"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      {activeTab === "Overview" && <DashboardStats />}
      {activeTab === "Dictionary" && <DictionaryQuickView />}
      {activeTab === "Grammar Lessons" && <GrammarQuickView />}
    </div>
  );
}
