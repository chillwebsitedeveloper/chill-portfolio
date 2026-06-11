"use client";

import Image from "next/image";

interface Project {
  title: string;
  desc: string;
  result: string;
  stack: string[];
  architecture: string;
  image: string;
  url: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="bg-white border border-[#E8E7E4] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,40,35,0.05)]">
        <div className="relative h-48 overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
          <div className="absolute bottom-3 left-5 right-5">
            <h3 className="font-serif text-xl font-semibold text-[#1A1A1A]">{project.title}</h3>
          </div>
        </div>
        <div className="p-5 pt-1">
          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3">{project.desc}</p>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-1 rounded-full bg-[#2D5BE3]" />
            <span className="text-xs font-medium text-[#1A1A1A]">{project.result}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] text-[#1A1A1A] bg-[#F3F2EF] border border-[#E8E7E4] px-2 py-0.5 rounded">{tech}</span>
            ))}
          </div>
          <p className="text-[10px] text-[#6B6B6B] leading-relaxed">{project.architecture}</p>
        </div>
      </div>
    </a>
  );
}