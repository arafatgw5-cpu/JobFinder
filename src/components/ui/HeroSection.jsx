import React, { useState } from "react";

const Hero = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const trending = ["Product Designer", "UI Engineering", "DevOps Engineer"];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-[#050505] text-white overflow-hidden">

      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Bottom glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[#4328EB]/25 blur-[140px] rounded-[100%] pointer-events-none" />

      {/* ── Side glows ── */}
      <div className="absolute top-1/3 -left-40 w-[320px] h-[320px] bg-[#6B4BFF]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[320px] h-[320px] bg-[#4328EB]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">

        {/* ── Badge ── */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-10 shadow-inner">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7A00] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7A00]" />
          </span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <span className="text-[11px] font-semibold tracking-[0.18em] text-zinc-300 uppercase">
            50,000+ New Jobs This Month
          </span>
        </div>

        {/* ── Headline ── */}
        <h1
          className="text-5xl md:text-6xl lg:text-[68px] font-extrabold text-center leading-[1.08] tracking-tight mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span className="text-white">Find Your </span>
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #6B4BFF 50%, #4328EB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dream Job
          </span>
          <br />
          <span className="text-white">Today</span>
        </h1>

        {/* ── Sub ── */}
        <p className="text-zinc-400 text-center max-w-xl mb-14 text-base md:text-lg leading-relaxed font-light">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* ── Search Bar ── */}
        <div className="w-full max-w-[860px] relative">
          {/* glow behind card */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#6B4BFF]/40 via-transparent to-[#4328EB]/40 blur-sm pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-stretch w-full bg-[#0e0e10] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl">

            {/* Keyword */}
            <div className="flex-1 flex items-center px-5 gap-3 border-b md:border-b-0 md:border-r border-zinc-800/80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title, skill or company"
                className="bg-transparent border-none outline-none text-white w-full placeholder-zinc-600 text-[15px] py-4"
              />
            </div>

            {/* Location */}
            <div className="flex-1 flex items-center px-5 gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location or Remote"
                className="bg-transparent border-none outline-none text-white w-full placeholder-zinc-600 text-[15px] py-4"
              />
            </div>

            {/* Button */}
            <div className="p-2">
              <button className="flex items-center justify-center gap-2.5 bg-[#6B4BFF] hover:bg-[#5a3ce0] active:scale-[0.97] text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 w-full md:w-auto h-full shadow-lg shadow-[#6B4BFF]/30 whitespace-nowrap">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* ── Trending ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 flex-wrap justify-center">
          <span className="text-[13px] text-zinc-500 font-medium">Trending:</span>
          {trending.map((tag) => (
            <button
              key={tag}
              className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 text-[13px] hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#6B4BFF] opacity-80">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              {tag}
            </button>
          ))}
        </div>

        {/* ── Stats row ── */}
        <div className="flex items-center gap-8 mt-16 flex-wrap justify-center">
          {[
            { value: "2.4M+", label: "Active Candidates" },
            { value: "18K+", label: "Companies Hiring" },
            { value: "94%", label: "Placement Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white">{value}</span>
              <span className="text-[12px] text-zinc-500 tracking-wide">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;