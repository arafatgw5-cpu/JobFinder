"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import {
  Card,
  Separator,
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setServerError("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });

      if (error) {
        setServerError(
          error.message || "Invalid email or password."
        );
        return;
      }

      if (data) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setServerError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      setGoogleLoading(true);
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      setServerError("Google sign in failed.");
      setGoogleLoading(false);
    }
  };

  return (
    // 'dark' ক্লাস অ্যাড করা হয়েছে যাতে HeroUI এর কম্পোনেন্টগুলো অটো ডার্ক মোডে থাকে
    <div className="dark min-h-screen flex items-center justify-center bg-[#050505] px-4 py-10 relative overflow-hidden font-sans">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4328EB]/15 blur-[150px] rounded-full pointer-events-none"></div>

      <Card className="w-full max-w-md p-8 rounded-3xl bg-[#0A0A0C] shadow-2xl border border-zinc-800/60 flex flex-col gap-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-black text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-zinc-400 mt-2 font-medium">
            Sign in to continue to Programming Hero
          </p>
        </div>

        {/* Error */}
        {serverError && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm text-center font-medium">
            {serverError}
          </div>
        )}

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <TextField isRequired name="email" type="email" className="w-full">
            <Label className="mb-2 text-sm font-semibold text-zinc-300">Email</Label>
            <Input 
              placeholder="john@example.com" 
              className="w-full" 
              classNames={{
                inputWrapper: "bg-[#121214] border-zinc-800 hover:border-zinc-700 data-[focus=true]:border-[#6B4BFF]",
                input: "text-white placeholder:text-zinc-600"
              }}
            />
            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password" type="password" className="w-full">
            <div className="flex justify-between items-center mb-2">
              <Label className="text-sm font-semibold text-zinc-300">Password</Label>
              <Link href="/forgot-password" className="text-xs text-[#6B4BFF] hover:text-[#8B3DFF] hover:underline transition-colors">
                Forgot password?
              </Link>
            </div>
            <Input 
              placeholder="••••••••" 
              className="w-full"
              classNames={{
                inputWrapper: "bg-[#121214] border-zinc-800 hover:border-zinc-700 data-[focus=true]:border-[#6B4BFF]",
                input: "text-white placeholder:text-zinc-600"
              }} 
            />
            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            isLoading={loading}
            isDisabled={googleLoading}
            className="w-full bg-[#6B4BFF] hover:bg-[#5a3ce0] text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-md mt-2"
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </Form>

        {/* Redirect */}
        <p className="text-center text-sm text-zinc-500 font-medium">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#6B4BFF] font-bold hover:text-[#8B3DFF] hover:underline transition-colors">
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <Separator className="flex-1 bg-zinc-800" />
          <span className="text-xs text-zinc-600 uppercase font-semibold">OR</span>
          <Separator className="flex-1 bg-zinc-800" />
        </div>

        {/* Google */}
        <Button
          onClick={handleGoogleSignin}
          isLoading={googleLoading}
          isDisabled={loading}
          className="w-full border border-zinc-800 hover:border-zinc-700 py-6 rounded-xl bg-[#121214] hover:bg-[#1A1A1E] text-white transition-all duration-300"
        >
          {!googleLoading && <FcGoogle size={22} />}
          <span className="font-medium text-[15px]">{googleLoading ? "Redirecting..." : "Continue with Google"}</span>
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;