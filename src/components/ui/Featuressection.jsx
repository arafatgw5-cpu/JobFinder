"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const features = [
  {
    id: 1,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12l5 5L20 7" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const FeatureCard = ({ feature }) => (
  <div className="group flex items-start gap-5 p-3 rounded-2xl hover:bg-white dark:hover:bg-white/[0.03] transition-all duration-200 cursor-default hover:shadow-sm dark:hover:shadow-none">
    {/* Icon Box */}
    <div className="shrink-0 w-[72px] h-[72px] rounded-2xl bg-gray-50 dark:bg-[#111114] border border-gray-200 dark:border-white/[0.07] flex items-center justify-center text-[#6B4BFF] dark:text-[#a78bfa] group-hover:border-[#6B4BFF]/40 dark:group-hover:border-[#6B4BFF]/30 group-hover:bg-gray-100 dark:group-hover:bg-[#14141a] transition-all duration-200">
      {feature.icon}
    </div>
    {/* Text */}
    <div className="pt-1">
      <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-1.5 leading-snug">{feature.title}</h3>
      <p className="text-[13px] text-gray-600 dark:text-zinc-400 leading-relaxed max-w-[200px]">{feature.description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <section className="relative w-full bg-[#f8fafc] dark:bg-[#050505] py-24 px-6 overflow-hidden font-sans transition-colors duration-300">
      
      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)"
            : "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: isDark ? 0.025 : 0.04
        }}
      />

      {/* ── Top glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#4328EB]/10 dark:bg-[#4328EB]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-sm bg-[#6B4BFF]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-gray-500 dark:text-zinc-400 uppercase">Features Job</span>
            <span className="w-2 h-2 rounded-sm bg-[#6B4BFF]" />
          </div>

          <h2
            className="text-4xl md:text-[52px] font-bold text-gray-900 dark:text-white leading-tight tracking-tight max-w-[640px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Everything you need<br />to succeed
          </h2>
        </div>

        {/* ── Features Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;