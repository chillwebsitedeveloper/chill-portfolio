"use client";

import FadeIn from "./components/fade-in";
import CommandMenu from "./components/command-menu";
import MagneticButton from "./components/magnetic-button";
import ContextEngine from "./components/context-engine";
import ProjectCard from "./components/project-card";
import StartProjectForm from "./components/start-project-form";
import PerformanceShield from "./components/performance-shield";
import Navbar from "./components/navbar";

const projects = [
  {
    title: "Restaurant Platform",
    desc: "Full dining experience — menu browsing, table reservations, and location discovery.",
    result: "3x increase in online reservations",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    architecture: "SSG with ISR for sub-1s load times across all pages",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format&fit=crop",
    url: "https://chill-restaurant-nine.vercel.app",
  },
  {
    title: "SaaS Landing Page",
    desc: "49-feature product page with 3D tilt cards, confetti, command palette, and interactive demos.",
    result: "40% improvement in scroll depth engagement",
    stack: ["Next.js", "Framer Motion", "TypeScript"],
    architecture: "Client-rendered with lazy-loaded heavy components",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
    url: "https://flowboard-six-beta.vercel.app",
  },
  {
    title: "Real Estate Platform",
    desc: "Property listings with multi-image galleries, neighborhood guides, and lead capture.",
    result: "2x lead generation vs. previous solution",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    architecture: "Image-optimized with responsive srcsets and lazy loading",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop",
    url: "https://chill-realestate.vercel.app",
  },
  {
    title: "Construction Lead Engine",
    desc: "ROI calculator, before/after slider, multi-step form, and filterable project gallery.",
    result: "60% form completion rate on multi-step funnel",
    stack: ["Next.js", "Framer Motion", "TypeScript"],
    architecture: "Lead-engineered with progressive disclosure and zero CLS",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop",
    url: "https://chill-construction.vercel.app",
  },
];

const techStack = {
  "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "Infrastructure": ["Vercel", "GitHub Actions", "Cloudflare"],
  "Principles": ["Performance-First", "Accessible", "SEO-Optimized"],
};

const impactMetrics = [
  { value: "100%", label: "Custom Architecture" },
  { value: "3", label: "MVPs Launched" },
  { value: "< 1s", label: "Avg Load Time" },
  { value: "0", label: "Compromises" },
];

const standards = [
  { title: "Performance-First", desc: "Every millisecond counts. Optimized for Core Web Vitals, sub-second loads, and zero layout shifts." },
  { title: "Zero Technical Debt", desc: "Clean architecture, strict TypeScript, modular components. Code that scales without refactoring." },
  { title: "Scalable Systems", desc: "Built to handle growth. From 10 users to 100,000 — the foundation holds." },
];

const processSteps = [
  { num: "01", title: "Audit", desc: "Analyze requirements, evaluate tech stack, establish performance baselines." },
  { num: "02", title: "Architect", desc: "Design system architecture, component tree, data flow, and deployment strategy." },
  { num: "03", title: "Execute", desc: "Build, optimize, deploy, monitor. Iterate until targets are exceeded." },
];

export default function Home() {
  const openCommand = () => { const e = new KeyboardEvent("keydown", { key: "k", metaKey: true }); document.dispatchEvent(e); };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] overflow-x-hidden">
      <div className="noise-overlay" />
      <CommandMenu />
      <Navbar onCommand={openCommand} />

      {/* HERO */}
      <section className="hero-glow min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn delay={0.1}><ContextEngine /></FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-[#1A1A1A]">
              I engineer high-performance web systems that scale.
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="text-base md:text-lg text-[#6B6B6B] mb-10 max-w-md mx-auto leading-relaxed">
              Helping startups &amp; agencies ship faster with custom-built, performance-obsessed web applications.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticButton href="#contact" className="bg-[#2D5BE3] hover:bg-[#2450C9] text-white px-8 py-3.5 rounded-lg font-medium transition-colors w-full sm:w-auto text-center">Start a Project</MagneticButton>
              <MagneticButton href="#projects" className="bg-white border border-[#E8E7E4] hover:border-[#6B6B6B] text-[#1A1A1A] px-8 py-3.5 rounded-lg font-medium transition-colors w-full sm:w-auto text-center">View Work</MagneticButton>
            </div>
          </FadeIn>
          <FadeIn delay={0.65}>
            <div className="flex items-center justify-center gap-6 mt-16 flex-wrap">
              {impactMetrics.map((m, i) => (
                <div key={m.label} className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-[#1A1A1A] tabular-nums">{m.value}</p>
                    <p className="text-[10px] text-[#6B6B6B] mt-0.5 uppercase tracking-wider">{m.label}</p>
                  </div>
                  {i < impactMetrics.length - 1 && <div className="w-px h-8 bg-[#E8E7E4]" />}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-[#2D5BE3] font-medium mb-3">Work</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-4">Selected Projects</h2>
              <p className="text-[#6B6B6B] max-w-md mx-auto">Each built from scratch. No templates. Measurable results.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={0.05 * i}><ProjectCard project={project} /></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 border-t border-[#E8E7E4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-[#2D5BE3] font-medium mb-3">Process</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-4">How I Build</h2>
              <p className="text-[#6B6B6B] max-w-md mx-auto">A systematic approach. No guesswork.</p>
            </div>
          </FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={0.05 * i} className="flex-1">
                <div className="text-center px-4">
                  <p className="text-xs font-mono text-[#2D5BE3] mb-3">{step.num}</p>
                  <h3 className="font-serif text-base font-semibold text-[#1A1A1A] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && <div className="hidden md:block w-full h-px bg-[#E8E7E4] mt-6" />}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="py-16 px-6 border-t border-[#E8E7E4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <span className="text-xs text-[#6B6B6B] uppercase tracking-widest font-mono w-28 flex-shrink-0 pt-1">{category}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="text-xs text-[#1A1A1A] bg-[#F3F2EF] border border-[#E8E7E4] px-2.5 py-1 rounded hover:border-[#2D5BE3]/30 transition-colors cursor-default">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PHILOSOPHY — Warm Linen */}
      <section id="about" className="py-24 px-6 bg-[#F3F2EF] border-t border-[#E8E7E4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-[#2D5BE3] font-medium mb-3">Philosophy</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-4">Engineering Standards</h2>
              <p className="text-[#6B6B6B] max-w-md mx-auto">Every project adheres to these principles. No exceptions.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {standards.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="border-t border-[#E8E7E4] pt-6">
                  <h3 className="font-serif text-base font-semibold text-[#1A1A1A] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="bg-white border border-[#E8E7E4] rounded-2xl p-6 shadow-[0_8px_30px_rgba(45,40,35,0.04)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#6B6B6B] uppercase tracking-widest font-mono">Commit Activity</span>
                <span className="text-[10px] text-[#6B6B6B] font-mono">Last 30 days</span>
              </div>
              <div className="flex items-end gap-[3px] h-10">
                {[3,5,4,7,6,8,7,9,8,10,9,11,10,12,8,9,7,10,11,9,12,10,11,13,12,14,13,15,14,15].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-[#2D5BE3] opacity-20 hover:opacity-40 transition-opacity" style={{ height: `${(h / 15) * 100}%` }} />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[9px] text-[#6B6B6B] font-mono">30d ago</span>
                <span className="text-[9px] text-[#6B6B6B] font-mono">Today</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-[#E8E7E4]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-[#2D5BE3] font-medium mb-3">Contact</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-4">Start a Project</h2>
              <p className="text-[#6B6B6B] max-w-md mx-auto">Tell me what you need. I&apos;ll reach out within 24 hours.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-md mx-auto"><StartProjectForm /></div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E8E7E4] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="text-sm text-[#6B6B6B]">© 2025 chill<span className="text-[#2D5BE3]">.</span>dev</p>
            <PerformanceShield />
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/chillwebsitedeveloper" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">GitHub</a>
            <a href="mailto:contact.chillweb@gmail.com" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">Email</a>
            <button onClick={openCommand} className="text-[10px] text-[#6B6B6B] bg-[#F3F2EF] border border-[#E8E7E4] px-2 py-0.5 rounded hover:border-[#6B6B6B] transition-colors">⌘K</button>
          </div>
        </div>
      </footer>
    </main>
  );
}