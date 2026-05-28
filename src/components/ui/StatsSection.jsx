import React from "react";

const stats = [
  {
    id: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    value: "50K+",
    label: "Active Jobs",
    accent: "#6B4BFF",
    glow: "rgba(107,75,255,0.18)",
  },
  {
    id: 2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        <path d="M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" />
      </svg>
    ),
    value: "12K+",
    label: "Companies",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    id: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "2M+",
    label: "Job Seekers",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
  },
  {
    id: 4,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    value: "97%",
    label: "Satisfaction Rate",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.15)",
  },
];

const StatsSection = () => {
  return (
    <section className="relative w-full bg-[#030303] flex flex-col items-center justify-center py-28 px-6 overflow-hidden font-sans">

      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Stars ── */}
      {[
        { top: "8%",  left: "18%",  size: 1.5, op: 0.6 },
        { top: "14%", right: "22%", size: 1,   op: 0.8 },
        { top: "35%", left: "8%",   size: 2,   op: 0.35 },
        { top: "22%", right: "9%",  size: 1,   op: 0.5 },
        { top: "55%", left: "32%",  size: 1,   op: 0.4 },
        { top: "70%", right: "15%", size: 1.5, op: 0.3 },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            opacity: s.op,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* ── Deep purple glow ── */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[480px] bg-[#4328EB]/30 blur-[160px] rounded-full pointer-events-none" />

      {/* ── CSS Globe ── */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 w-[150vw] md:w-[1100px] h-[150vw] md:h-[1100px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #181828 0%, #030303 70%)",
          borderTop: "1px solid rgba(107,75,255,0.3)",
          boxShadow: "0 0 100px rgba(67,40,235,0.15) inset, 0 -40px 80px rgba(67,40,235,0.08)",
        }}
      />

      {/* ── Foreground ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Label pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B4BFF]" />
          <span className="text-[11px] font-semibold tracking-[0.18em] text-zinc-400 uppercase">By The Numbers</span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-[46px] text-center leading-tight md:leading-[1.15] max-w-[740px] mb-5 font-bold tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span className="text-zinc-400 font-normal">Assisting over </span>
          <span className="text-white">15,000 job seekers</span>
          <br className="hidden md:block" />
          <span className="text-zinc-400 font-normal"> find their dream positions.</span>
        </h2>

        <p className="text-zinc-500 text-sm md:text-base text-center max-w-md mb-16 leading-relaxed">
          Real numbers. Real outcomes. Join a community of professionals who landed their next big role through HireLoop.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl p-7 flex flex-col justify-between h-[210px] transition-all duration-300 cursor-default overflow-hidden"
              style={{
                background: "#0a0a0c",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = `1px solid ${item.accent}55`;
                e.currentTarget.style.boxShadow = `0 0 32px ${item.glow}, 0 2px 20px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${item.glow} 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300"
                style={{
                  background: `${item.accent}18`,
                  color: item.accent,
                  border: `1px solid ${item.accent}30`,
                }}
              >
                {item.icon}
              </div>

              {/* Value + Label */}
              <div>
                <div className="flex items-end gap-1 mb-1.5">
                  <h3
                    className="text-[46px] font-extrabold leading-none text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.value}
                  </h3>
                </div>
                <p className="text-[13px] text-zinc-500 font-medium tracking-wide uppercase">
                  {item.label}
                </p>

                {/* Bottom accent bar */}
                <div
                  className="mt-4 h-[2px] w-8 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-14 transition-all duration-300"
                  style={{ background: item.accent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;