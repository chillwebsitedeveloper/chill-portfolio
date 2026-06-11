"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { label: "Projects", shortcut: "P", action: function() { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); } },
  { label: "Process", shortcut: "R", action: function() { document.getElementById("process")?.scrollIntoView({ behavior: "smooth" }); } },
  { label: "About", shortcut: "A", action: function() { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); } },
  { label: "Start a Project", shortcut: "S", action: function() { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); } },
  { label: "GitHub", shortcut: "G", action: function() { window.open("https://github.com/chillwebsitedeveloper", "_blank"); } },
  { label: "Email", shortcut: "E", action: function() { window.open("mailto:contact.chillweb@gmail.com", "_blank"); } },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    var handler = function(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(function(prev) { return !prev; }); setSearch(""); }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return function() { document.removeEventListener("keydown", handler); };
  }, []);

  var filtered = commands.filter(function(c) { return c.label.toLowerCase().includes(search.toLowerCase()); });

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm" onClick={function() { setOpen(false); }}>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -10 }} transition={{ duration: 0.15 }} className="bg-[#111111] border border-[#1A1A1A] rounded-xl w-full max-w-md shadow-2xl overflow-hidden" onClick={function(e) { e.stopPropagation(); }}>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1A1A1A]">
              <span className="text-[#737373] text-sm">⌘</span>
              <input type="text" placeholder="Type a command..." value={search} onChange={function(e) { setSearch(e.target.value); }} className="flex-1 bg-transparent text-sm text-[#E5E5E5] placeholder:text-[#737373] outline-none" autoFocus />
              <span className="text-[10px] text-[#737373] bg-[#1A1A1A] px-1.5 py-0.5 rounded">ESC</span>
            </div>
            <div className="py-2 max-h-64 overflow-y-auto">
              {filtered.map(function(cmd) { return (<button key={cmd.label} onClick={function() { cmd.action(); setOpen(false); }} className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-[#1A1A1A] transition-colors"><span className="text-sm text-[#E5E5E5]">{cmd.label}</span><span className="text-[10px] text-[#737373] bg-[#1A1A1A] px-1.5 py-0.5 rounded font-mono">{cmd.shortcut}</span></button>); })}
              {filtered.length === 0 && <p className="text-sm text-[#737373] px-4 py-2">No results</p>}
            </div>
            <div className="px-4 py-2 border-t border-[#1A1A1A] flex items-center gap-3 text-[10px] text-[#737373]"><span>↑↓ Navigate</span><span>↵ Select</span><span>⌘K Toggle</span></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}