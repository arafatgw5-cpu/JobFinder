import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 md:px-16 w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Left: Logo & Description */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B3DFF] to-[#D926FF] shadow-md">
                {/* Custom SVG approximating the logo */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4V20L20 12L7 4Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M7 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 8L17 12L10 16" fill="white" />
                </svg>
              </div>
              <div className="font-bold text-lg leading-tight tracking-wide">
                Programming<br />Hero
              </div>
            </Link>
            
            {/* Description */}
            <p className="text-[#888888] text-[15px] leading-relaxed max-w-[280px]">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Right: Links Columns */}
          <div className="w-full lg:w-2/3 flex flex-row flex-wrap sm:flex-nowrap justify-between gap-8 lg:gap-16 sm:pl-10">
            
            {/* Column 1: Product */}
            <div className="flex flex-col gap-5 min-w-[120px]">
              <h3 className="text-[#6B4BFF] font-medium text-[16px]">Product</h3>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Job discovery</Link>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Worker AI</Link>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Companies</Link>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Salary data</Link>
            </div>

            {/* Column 2: Navigations */}
            <div className="flex flex-col gap-5 min-w-[120px]">
              <h3 className="text-[#6B4BFF] font-medium text-[16px]">Navigations</h3>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Help center</Link>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Career library</Link>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Contact</Link>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-5 min-w-[120px]">
              <h3 className="text-[#6B4BFF] font-medium text-[16px]">Resources</h3>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Brand Guideline</Link>
              <Link href="#" className="text-[#888888] hover:text-white transition-colors text-[14px]">Newsroom</Link>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <Link href="#" className="flex items-center justify-center w-[36px] h-[36px] bg-[#111111] hover:bg-[#222] rounded-[8px] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"/></svg>
            </Link>
            
            {/* Pinterest (Active Purple) */}
            <Link href="#" className="flex items-center justify-center w-[36px] h-[36px] bg-[#6B4BFF] hover:bg-[#5a3ce0] rounded-[8px] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12C2 16.24 4.63 19.86 8.45 21.35C8.36 20.53 8.27 19.06 8.47 18.17C8.65 17.37 9.68 13 9.68 13C9.68 13 9.36 12.37 9.36 11.43C9.36 9.77 10.33 8.49 11.53 8.49C12.56 8.49 13.06 9.26 13.06 10.18C13.06 11.22 12.4 12.76 12.05 14.18C11.76 15.37 12.65 16.34 13.82 16.34C15.94 16.34 17.57 14.1 17.57 10.73C17.57 7.74 15.42 5.61 12.22 5.61C8.55 5.61 6.35 8.36 6.35 11.75C6.35 12.79 6.75 13.9 7.27 14.53C7.37 14.66 7.39 14.77 7.35 14.92C7.26 15.33 7.04 16.22 7 16.38C6.94 16.6 6.78 16.67 6.54 16.56C4.84 15.77 3.73 13.43 3.73 11.45C3.73 7.84 6.35 4.54 12.55 4.54C17.55 4.54 21.4 8.1 21.4 12.55C21.4 17.51 18.28 21.45 14.36 21.45C13.2 21.45 12.1 20.85 11.73 20.25C11.73 20.25 11.16 22.42 11 23.01C10.66 24.32 9.6 25.75 8.91 26.54C9.88 26.83 10.92 27 12 27C17.52 27 22 22.52 22 17C22 11.48 17.52 7 12 7Z" transform="translate(0, -2)"/></svg>
            </Link>
            
            {/* LinkedIn */}
            <Link href="#" className="flex items-center justify-center w-[36px] h-[36px] bg-[#111111] hover:bg-[#222] rounded-[8px] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5ZM5 8H0V24H5V8ZM13.886 8C11.416 8 10.22 9.358 9.53 10.353V8.225H4.664C4.73 9.61 4.664 24 4.664 24H9.53V15.074C9.53 14.595 9.564 14.116 9.706 13.774C10.095 12.818 10.985 11.826 12.443 11.826C14.373 11.826 15.143 13.295 15.143 15.48V24H20.01V14.8C20.01 9.878 17.387 8 13.886 8Z"/></svg>
            </Link>
          </div>

          {/* Copyright & Legal Texts */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-8 text-[13px] text-[#777777]">
            <p>Copyright 2024 — Programming Hero</p>
            <div className="hidden md:block w-[1px] h-3 bg-[#444]"></div>
            <p>Terms & Policy - Privacy Guideline</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;