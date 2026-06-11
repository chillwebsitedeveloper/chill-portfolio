"use client";

import { useEffect, useState } from "react";

export default function ContextEngine() {
  const [greeting, setGreeting] = useState("");
  const [utm, setUtm] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Starting the day right? Let's build.");
    else if (hour >= 12 && hour < 17) setGreeting("Afternoon focus. Let's ship something great.");
    else if (hour >= 17 && hour < 22) setGreeting("Evening session. The best ideas happen now.");
    else setGreeting("Burning the midnight oil? Let's build.");

    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");
    if (source) setUtm(source.charAt(0).toUpperCase() + source.slice(1));
  }, []);

  return (
    <div className="text-center mb-8">
      {utm && <p className="text-xs text-[#6B6B6B] mb-2">Welcome from {utm}. See how I build.</p>}
      <p className="text-sm text-[#6B6B6B]">{greeting}</p>
    </div>
  );
}