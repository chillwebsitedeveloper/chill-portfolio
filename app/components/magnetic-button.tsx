"use client";

import { useRef } from "react";

export default function MagneticButton({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate3d(${x * 0.12}px, ${y * 0.12}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <a ref={ref} href={href} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`inline-block transition-transform duration-200 ease-out ${className}`}>
      {children}
    </a>
  );
}