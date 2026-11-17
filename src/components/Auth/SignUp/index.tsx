"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useContext, useState } from "react";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = ({ signUpOpen }: { signUpOpen?: any }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Account created successfully!", {
          description: "Welcome aboard! You can now sign in.",
        });
        setLoading(false);
        if (signUpOpen) signUpOpen(false);
        authDialog?.setIsUserRegistered(true);
        setTimeout(() => {
          authDialog?.setIsUserRegistered(false);
        }, 1200);
      })
      .catch((err) => {
        toast.error("Registration failed", {
          description: err.message || "Please check your information.",
        });
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="mb-6 text-center mx-auto block max-w-[140px]">
        <Logo />
      </div>

      <SocialSignUp />

      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-slate-900 px-3 text-slate-500 font-medium">
            or continue with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1.5">
            Full Name
          </label>
          <Input
            type="text"
            placeholder="John Doe"
            name="name"
            required
          />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1.5">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="john@example.com"
            name="email"
            required
          />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1.5">
            Password
          </label>
          <Input
            type="password"
            placeholder="••••••••"
            name="password"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
