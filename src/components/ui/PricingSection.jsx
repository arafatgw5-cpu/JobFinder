import React, { useState } from "react";

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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    highlighted: false,
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative w-full bg-[#050505] py-24 px-6 overflow-hidden font-sans">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#4328EB]/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-sm bg-[#6B4BFF]" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-400 uppercase">Pricing</span>
          <span className="w-2 h-2 rounded-sm bg-[#6B4BFF]" />
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-[52px] font-bold text-white leading-tight tracking-tight text-center max-w-[620px] mb-10"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Pay for the leverage,<br />not the listings
        </h2>

        {/* Toggle */}
        <div className="flex items-center bg-[#111113] border border-white/10 rounded-full p-1 mb-14">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              billing === "monthly"
                ? "bg-white text-black shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              billing === "yearly"
                ? "bg-white text-black shadow"
                : "text-zinc-400 hover:text-white"
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
                    ? "bg-[#1a1a1d] border border-white/20"
                    : "bg-[#0f0f11] border border-white/[0.07]"
                }`}
              >
                {/* Top row: icon + name + price */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1e1826] border border-white/[0.08] flex items-center justify-center">
                        {plan.icon}
                      </div>
                      <span className="text-[20px] font-bold text-white">{plan.name}</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-[38px] font-extrabold text-white leading-none">
                        ${price}
                      </span>
                      <span className="text-sm text-zinc-400 mb-1">/month</span>
                    </div>
                  </div>

                  {/* Features */}
                  <p className="text-[13px] font-semibold text-white mb-4">{plan.label}</p>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white/[0.06] border border-white/[0.08] shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </span>
                        <span className="text-[13px] text-zinc-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  className={`mt-10 w-full flex items-center justify-between px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-zinc-100"
                      : "bg-white/[0.06] border border-white/[0.08] text-white hover:bg-white/10"
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