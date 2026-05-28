"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  BriefcaseBusiness,
  Building2,
  BadgeDollarSign,
  LogOut,
} from "lucide-react";

// Better Auth ক্লায়েন্ট ইম্পোর্ট করুন
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // ১. সেশন থেকে ইউজারের ডেটা বের করে আনা
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user; // যদি লগইন থাকে, তবে এখানে ইউজারের তথ্য থাকবে

  // ২. লগআউট ফাংশন তৈরি করা
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login"); // লগআউট হওয়ার পর লগইন পেজে পাঠিয়ে দেবে
    router.refresh();
  };

  const navLinks = [
    {
      name: "Browse Jobs",
      path: "/browse-jobs",
      icon: <BriefcaseBusiness size={18} />,
    },
    {
      name: "Company",
      path: "/company",
      icon: <Building2 size={18} />,
    },
    {
      name: "Pricing",
      path: "/pricing",
      icon: <BadgeDollarSign size={18} />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/90 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <polygon points="4,2 13,8 4,14" fill="white" />
            </svg>
          </div>

          <div className="leading-tight">
            <h1 className="text-base font-bold tracking-wide text-white">
              JobFinder
            </h1>
            <p className="text-sm font-semibold text-white/80">
              Find Your Dream Job
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          <div className="w-px h-6 bg-white/15 mx-2" />

          {/* Auth Section */}
          {isPending ? (
            // লোডিং স্টেট (সেশন চেক করার সময় দেখাবে)
            <div className="w-8 h-8 rounded-full border-2 border-[#7C3AED] border-t-transparent animate-spin"></div>
          ) : user ? (
            <div className="flex items-center gap-3">
              {/* User Info */}
              <div className="hidden lg:flex flex-col text-right">
                <span className="text-sm font-medium text-white">
                  {user?.name}
                </span>
                <span className="text-xs text-white/50">
                  {user?.email}
                </span>
              </div>

              {/* Avatar (ইউজার ইমেজ থাকলে দেখাবে, নাহলে নামের প্রথম অক্ষর) */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center text-white font-bold uppercase overflow-hidden">
                {user?.image ? (
                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user?.name?.charAt(0) || "U"
                )}
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 hover:text-white hover:bg-red-500 rounded-xl transition-all duration-300"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  pathname === "/login"
                    ? "text-white bg-white/10"
                    : "text-[#A5B4FC] hover:text-white"
                }`}
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className="ml-1 px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-xl hover:bg-[#E5E7EB] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-2 bg-[#050505] border-t border-white/10">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          <div className="w-full h-px bg-white/10 my-2" />

          {user ? (
            <>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center text-white font-bold uppercase overflow-hidden">
                  {user?.image ? (
                    <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user?.name?.charAt(0) || "U"
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {user?.name}
                  </h3>
                  <p className="text-xs text-white/50">
                    {user?.email}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[#A5B4FC] hover:text-white"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-center text-black bg-white hover:bg-[#E5E7EB]"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}