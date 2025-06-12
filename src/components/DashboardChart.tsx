"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const progressData = [
  { name: "Mon", progress: 2 },
  { name: "Tue", progress: 3 },
  { name: "Wed", progress: 1 },
  { name: "Thu", progress: 4 },
  { name: "Fri", progress: 2 },
  { name: "Sat", progress: 5 },
  { name: "Sun", progress: 3 },
];

export default function DashboardChart() {
  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={progressData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="progress" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 