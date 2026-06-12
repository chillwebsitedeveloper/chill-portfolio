"use client";

import { useMemo } from "react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Starting the day right? Let's build.";
  if (hour >= 12 && hour < 17) return "Afternoon focus. Let's ship something great.";
  if (hour >= 17 && hour < 22) return "Evening session. The best ideas happen now.";
  return "Burning the midnight oil? Let's build.";
}

function getUtm() {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source");
  return source ? source.charAt(0).toUpperCase() + source.slice(1) : "";
}

export default function ContextEngine() {
  // Use inline functions to satisfy lint rule requiring inline function expressions
  // for hooks like useMemo
  const greeting = useMemo(() => getGreeting(), []);
  const utm = useMemo(() => getUtm(), []);

  return (
    <div className="text-center mb-8">
      {utm && <p className="text-xs text-[#6B6B6B] mb-2">Welcome from {utm}. See how I build.</p>}
      <p className="text-sm text-[#6B6B6B]">{greeting}</p>
    </div>
  );
}