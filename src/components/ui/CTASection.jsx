"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

const CTASection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <section className="relative w-full bg-slate-50 dark:bg-black overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center justify-center font-sans transition-colors duration-300">
      
      {/* --- Background Effects (Glowing Dome & Grid) --- */}
      <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
        {/* Circular dome shape that creates the curve at the top */}
        <div
          className="relative mt-[-20%] md:mt-[-10%] w-[150%] md:w-[120%] max-w-[1400px] aspect-square rounded-full border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300"
          style={{
            background: isDark
              ? 'radial-gradient(circle at 50% 15%, rgba(67, 56, 202, 0.4) 0%, rgba(17, 24, 39, 0.8) 40%, rgba(0, 0, 0, 1) 70%)'
              : 'radial-gradient(circle at 50% 15%, rgba(67, 56, 202, 0.12) 0%, rgba(241, 245, 249, 0.8) 40%, rgba(248, 250, 252, 1) 70%)',
          }}
        >
          {/* Wireframe Grid using CSS Background Patterns and 3D Transforms */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: isDark
                ? `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`
                : `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              transform: 'perspective(800px) rotateX(65deg) scale(2.5)',
              transformOrigin: 'top center',
              opacity: isDark ? 0.15 : 0.05,
            }}
          />
        </div>
      </div>

      {/* --- Foreground Content --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto mt-10 md:mt-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white mb-5 leading-tight">
          Your next role is <br className="hidden sm:block" />
          already looking for you
        </h2>
        
        <p className="text-slate-600 dark:text-[#a1a1aa] text-sm md:text-base mb-8 max-w-2xl mx-auto">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white dark:text-black bg-slate-900 dark:bg-white rounded-lg hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-sm">
            Create a free account
          </button>
          
          <button className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-slate-900 dark:text-white bg-white dark:bg-[#0a0a0b] border border-gray-200 dark:border-gray-700/80 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 shadow-sm dark:shadow-none">
            View pricing
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default CTASection;