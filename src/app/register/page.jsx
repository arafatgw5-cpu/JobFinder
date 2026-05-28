"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useTheme } from "next-themes";

import {
  Card,
  Separator,
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [mounted, setMounted] = useState(false);

  // থিম ডিটেক্ট করার জন্য
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setServerError("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.image,
      });

      if (error) {
        setServerError(error.message || "Failed to create account.");
        return;
      }

      if (data) {
        await authClient.signOut();
        router.push("/login");
      }
    } catch (error) {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      setGoogleLoading(true);
      setServerError("");
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      setServerError("Google sign up failed.");
      setGoogleLoading(false);
    }
  };

  // Hydration এরর এড়াতে কম্পোনেন্ট মাউন্ট হওয়ার আগে রেন্ডার অফ রাখা হয়েছে
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    // মূল কন্টেইনারে ডাইনামিক লাইট ও ডার্ক মোড ক্লাস
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#030303] px-4 py-10 relative overflow-hidden font-sans transition-colors duration-300">
      
      {/* Ambient Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none transition-all duration-300"
        style={{
          backgroundColor: isDark ? "rgba(67, 40, 235, 0.15)" : "rgba(67, 40, 235, 0.08)"
        }}
      />

      <Card className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-[#0A0A0C] shadow-xl dark:shadow-2xl border border-gray-200 dark:border-white/5 flex flex-col gap-6 relative z-10 transition-colors duration-300">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-2 font-medium">
            Join Programming Hero to get started
          </p>
        </div>

        {/* Error */}
        {serverError && (
          <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-sm text-center font-medium">
            {serverError}
          </div>
        )}

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="mb-2 text-sm font-semibold text-gray-700 dark:text-zinc-300">Full Name</Label>
            <Input 
              placeholder="John Doe" 
              classNames={{ 
                inputWrapper: "bg-gray-50 dark:bg-[#121214] border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 data-[focus=true]:border-[#6B4BFF]", 
                input: "text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600" 
              }} 
            />
            <FieldError className="text-red-500 dark:text-red-400 text-xs mt-1" />
          </TextField>

          {/* Email */}
          <TextField isRequired name="email" type="email" className="w-full">
            <Label className="mb-2 text-sm font-semibold text-gray-700 dark:text-zinc-300">Email</Label>
            <Input 
              placeholder="john@example.com" 
              classNames={{ 
                inputWrapper: "bg-gray-50 dark:bg-[#121214] border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 data-[focus=true]:border-[#6B4BFF]", 
                input: "text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600" 
              }} 
            />
            <FieldError className="text-red-500 dark:text-red-400 text-xs mt-1" />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password" type="password" className="w-full">
            <Label className="mb-2 text-sm font-semibold text-gray-700 dark:text-zinc-300">Password</Label>
            <Input 
              placeholder="••••••••" 
              classNames={{ 
                inputWrapper: "bg-gray-50 dark:bg-[#121214] border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 data-[focus=true]:border-[#6B4BFF]", 
                input: "text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600" 
              }} 
            />
            <Description className="text-xs text-gray-500 dark:text-zinc-500 mt-1">Minimum 8 characters</Description>
            <FieldError className="text-red-500 dark:text-red-400 text-xs mt-1" />
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            isLoading={loading}
            isDisabled={googleLoading}
            className="w-full bg-[#6B4BFF] hover:bg-[#5a3ce0] text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-md mt-2"
          >
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </Form>

        {/* Redirect */}
        <p className="text-center text-sm text-gray-500 dark:text-zinc-500 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-[#6B4BFF] font-bold hover:text-[#8B3DFF] hover:underline transition-colors">
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <Separator className="flex-1 bg-gray-200 dark:bg-zinc-800" />
          <span className="text-xs text-gray-400 dark:text-zinc-600 uppercase font-semibold">OR</span>
          <Separator className="flex-1 bg-gray-200 dark:bg-zinc-800" />
        </div>

        {/* Google */}
        <Button
          onClick={handleGoogleSignin}
          isLoading={googleLoading}
          isDisabled={loading}
          className="w-full border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 py-6 rounded-xl bg-white hover:bg-gray-50 dark:bg-[#121214] dark:hover:bg-[#1A1A1E] text-gray-700 dark:text-white transition-all duration-300"
        >
          {!googleLoading && <FcGoogle size={22} />}
          <span className="font-medium text-[15px]">{googleLoading ? "Redirecting..." : "Continue with Google"}</span>
        </Button>
      </Card>
    </div>
  );
};

export default SignUpPage;