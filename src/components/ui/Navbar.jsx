"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  BriefcaseBusiness,
  Building2,
  BadgeDollarSign,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Theme state
  const { theme, setTheme } = useTheme();

  // Hydration error ফিক্স করার জন্য mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  const navLinks = [
    { name: "Browse Jobs", path: "/browse-jobs", icon: <BriefcaseBusiness size={18} /> },
    { name: "Company", path: "/company", icon: <Building2 size={18} /> },
    { name: "Pricing", path: "/pricing", icon: <BadgeDollarSign size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#050505]/90 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <polygon points="4,2 13,8 4,14" fill="white" />
            </svg>
          </div>
          <div className="leading-tight">
            <h1 className="text-base font-bold tracking-wide text-gray-900 dark:text-white">
              JobFinder
            </h1>
            <p className="text-sm font-semibold text-gray-500 dark:text-white/80">
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
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg"
                    : "text-gray-600 hover:text-black hover:bg-gray-100 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          <div className="w-px h-6 bg-black/10 dark:bg-white/15 mx-2" />

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-white/10 transition-colors mr-2"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Auth Section */}
          {isPending ? (
            <div className="w-8 h-8 rounded-full border-2 border-[#7C3AED] border-t-transparent animate-spin"></div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex flex-col text-right">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</span>
                <span className="text-xs text-gray-500 dark:text-white/50">{user?.email}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center text-white font-bold uppercase overflow-hidden shadow-md">
                {user?.image ? (
                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user?.name?.charAt(0) || "U"
                )}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 hover:text-white hover:bg-red-500 rounded-xl transition-all duration-300"
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
                    ? "bg-gray-100 text-black dark:bg-white/10 dark:text-white"
                    : "text-indigo-600 hover:bg-gray-50 dark:text-[#A5B4FC] dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="ml-1 px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-[#E5E7EB] rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-3 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-gray-700 dark:text-white"
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-2 bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                    : "text-gray-600 hover:text-black hover:bg-gray-100 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-2" />

          {user ? (
            <>
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-transparent">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center text-white font-bold uppercase overflow-hidden">
                  {user?.image ? (
                    <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user?.name?.charAt(0) || "U"
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{user?.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-white/50">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 hover:text-red-600 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white transition-all duration-300"
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
                className="px-4 py-3 rounded-xl text-sm font-medium text-center text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:text-[#A5B4FC] dark:bg-transparent dark:hover:bg-white/10 dark:hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-center text-white bg-gray-900 hover:bg-black dark:text-black dark:bg-white dark:hover:bg-[#E5E7EB] transition-colors shadow-md"
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