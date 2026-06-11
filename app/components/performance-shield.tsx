export default function PerformanceShield() {
  return (
    <div className="flex items-center gap-2">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 1L2 5v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V5l-8-4z" fill="#2D5BE3" opacity="0.08" stroke="#2D5BE3" strokeWidth="1"/>
        <path d="M6 10l3 3 5-6" stroke="#2D5BE3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xs font-bold text-[#1A1A1A] tabular-nums">100</span>
      <span className="text-[10px] text-[#6B6B6B]">Perf</span>
    </div>
  );
}