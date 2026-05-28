"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const plans = [
  {
    id: 1,
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    label: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    highlighted: false,
  },
  {
    id: 2,
    name: "Growth",
    monthlyPrice: 17,
    yearlyPrice: 13,
    label: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    highlighted: true,
  },
  {
    id: 3,
    name: "Premium",
    monthlyPrice: 99,
    yearlyPrice: 74,
    label: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    highlighted: false,
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <section className="relative w-full bg-[#f8fafc] dark:bg-[#050505] py-24 px-6 overflow-hidden font-sans transition-colors duration-300">
      
      {/* Grid texture */}
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

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#4328EB]/10 dark:bg-[#4328EB]/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-sm bg-[#6B4BFF]" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-gray-500 dark:text-zinc-400 uppercase">Pricing</span>
          <span className="w-2 h-2 rounded-sm bg-[#6B4BFF]" />
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-[52px] font-bold text-gray-900 dark:text-white leading-tight tracking-tight text-center max-w-[620px] mb-10"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Pay for the leverage,<br />not the listings
        </h2>

        {/* Toggle */}
        <div className="flex items-center bg-gray-200/50 dark:bg-[#111113] border border-gray-300 dark:border-white/10 rounded-full p-1 mb-14">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              billing === "monthly"
                ? "bg-white dark:bg-white text-gray-900 dark:text-black shadow"
                : "text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              billing === "yearly"
                ? "bg-white dark:bg-white text-gray-900 dark:text-black shadow"
                : "text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Yearly
            <span className="px-2 py-0.5 rounded-full bg-[#a855f7] text-white text-[11px] font-bold">25%</span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-white dark:bg-[#1a1a1d] border-2 border-[#6B4BFF]/20 dark:border-white/20 shadow-xl dark:shadow-none"
                    : "bg-white dark:bg-[#0f0f11] border border-gray-200 dark:border-white/[0.07] shadow-sm dark:shadow-none"
                }`}
              >
                {/* Top row: icon + name + price */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#1e1826] border border-gray-100 dark:border-white/[0.08] flex items-center justify-center text-[#6B4BFF] dark:text-[#a78bfa]">
                        {plan.icon}
                      </div>
                      <span className="text-[20px] font-bold text-gray-900 dark:text-white">{plan.name}</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-[38px] font-extrabold text-gray-900 dark:text-white leading-none">
                        ${price}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-zinc-400 mb-1">/month</span>
                    </div>
                  </div>

                  {/* Features */}
                  <p className="text-[13px] font-semibold text-gray-700 dark:text-white mb-4">{plan.label}</p>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-500 dark:text-[#71717a]" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </span>
                        <span className="text-[13px] text-gray-600 dark:text-zinc-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  className={`mt-10 w-full flex items-center justify-between px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-zinc-100 shadow-md dark:shadow-none"
                      : "bg-gray-50 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  Choose This Plan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;