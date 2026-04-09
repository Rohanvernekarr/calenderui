"use client";

import { Calendar } from "@/src/components/calendar";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-50">
      <Calendar 
        mode="range" 
        onSelect={(range) => {
          if (range.startDate && range.endDate) {
            console.log(`Selection: ${range.startDate.toDateString()} to ${range.endDate.toDateString()}`);
          }
        }} 
      />
    </main>
  );
}