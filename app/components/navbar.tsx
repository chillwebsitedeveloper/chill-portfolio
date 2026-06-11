"use client";

import { useEffect, useState } from "react";

const sections = ["projects", "process", "about", "contact"];

export default function Navbar({ onCommand }: { onCommand: () => void }) {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" });
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/80 backdrop-blur-xl border-b border-[#E8E7E4]">
        <div className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
          <a href="#" className="text-lg font-bold tracking-tight text-[#1A1A1A]">chill<span className="text-[#2D5BE3]">.</span>dev</a>
          <div className="flex items-center gap-5">
            {["projects", "process", "about"].map((id) => (
              <a key={id} href={`#${id}`} className={`text-sm transition-colors hidden sm:block ${active === id ? "text-[#1A1A1A] font-medium" : "text-[#6B6B6B] hover:text-[#1A1A1A]"}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
            ))}
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-[#6B6B6B] font-medium bg-[#F3F2EF] border border-[#E8E7E4] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
              Q3 Available
            </div>
            <button onClick={onCommand} className="text-[10px] text-[#6B6B6B] bg-[#F3F2EF] border border-[#E8E7E4] px-2 py-0.5 rounded hidden sm:block hover:border-[#6B6B6B] transition-colors">⌘K</button>
            <a href="#contact" className="text-sm bg-[#2D5BE3] hover:bg-[#2450C9] text-white px-5 py-2 rounded-lg font-medium transition-colors hidden sm:block">Start a Project</a>
            <button onClick={() => setMenuOpen(true)} className="sm:hidden text-[#6B6B6B] text-xl">☰</button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[80] bg-[#FAFAF8] flex flex-col items-center justify-center gap-8">
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-xl text-[#6B6B6B]">✕</button>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-xl font-serif font-semibold text-[#1A1A1A]">Projects</a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="text-xl font-serif font-semibold text-[#1A1A1A]">Process</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-xl font-serif font-semibold text-[#1A1A1A]">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-xl font-serif font-semibold text-[#1A1A1A]">Start a Project</a>
          <a href="https://github.com/chillwebsitedeveloper" target="_blank" rel="noopener noreferrer" className="text-lg text-[#6B6B6B]">GitHub</a>
        </div>
      )}
    </>
  );
}