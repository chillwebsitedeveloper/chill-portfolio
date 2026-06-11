"use client";

import { useState } from "react";

const types = ["MVP", "Landing Page", "Web Application", "Redesign", "Other"];

export default function StartProjectForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ type: "", name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!data.name || !data.email) { setStatus("error"); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, type: data.type }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") return (
    <div className="bg-white border border-[#E8E7E4] rounded-2xl p-8 shadow-[0_8px_30px_rgba(45,40,35,0.05)] text-center">
      <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4"><span className="text-emerald-600 text-lg">✓</span></div>
      <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-2">Got it.</h3>
      <p className="text-sm text-[#6B6B6B]">I&apos;ll review your project and reach out within 24 hours.</p>
    </div>
  );

  return (
    <div className="bg-white border border-[#E8E7E4] rounded-2xl p-8 shadow-[0_8px_30px_rgba(45,40,35,0.05)]">
      <div className="flex items-center gap-2 mb-8">{[1, 2, 3].map((s) => (<div key={s} className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${s <= step ? "bg-[#2D5BE3]" : "bg-[#E8E7E4]"}`} />))}</div>

      {step === 1 && (
        <div>
          <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-6">What do you need?</h3>
          <div className="space-y-2">{types.map((t) => (<button key={t} onClick={() => { setData({ ...data, type: t }); setStep(2); }} className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${data.type === t ? "border-[#2D5BE3] bg-[#2D5BE3]/5 text-[#1A1A1A]" : "border-[#E8E7E4] text-[#6B6B6B] hover:border-[#2D5BE3]/30 hover:text-[#1A1A1A]"}`}>{t}</button>))}</div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-6">Your name?</h3>
          <input type="text" placeholder="John Doe" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} onKeyDown={(e) => e.key === "Enter" && data.name && setStep(3)} className="w-full px-4 py-3 rounded-xl border border-[#E8E7E4] bg-[#F3F2EF] text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 outline-none focus:border-[#2D5BE3] focus:ring-1 focus:ring-[#2D5BE3]/20 mb-4" autoFocus />
          <div className="flex gap-2">
            <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-[#E8E7E4] text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">Back</button>
            <button onClick={() => data.name && setStep(3)} className="flex-1 py-3 rounded-xl bg-[#2D5BE3] hover:bg-[#2450C9] text-white text-sm font-medium transition-colors">Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-6">Where should I reach you?</h3>
          <input type="email" placeholder="john@company.com" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }); setStatus("idle"); }} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} className={`w-full px-4 py-3 rounded-xl border bg-[#F3F2EF] text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 outline-none focus:ring-1 mb-1 ${status === "error" && !data.email ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-[#E8E7E4] focus:border-[#2D5BE3] focus:ring-[#2D5BE3]/20"}`} autoFocus />
          {status === "error" && <p className="text-xs text-red-500 pl-1 mb-3">Please enter your email.</p>}
          <div className="flex gap-2 mt-4">
            <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-[#E8E7E4] text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">Back</button>
            <button onClick={handleSubmit} disabled={status === "loading"} className="flex-1 py-3 rounded-xl bg-[#2D5BE3] hover:bg-[#2450C9] disabled:opacity-50 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2">{status === "loading" ? <><span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : "Submit"}</button>
          </div>
        </div>
      )}
    </div>
  );
}