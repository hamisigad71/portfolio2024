"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo";
import { toast } from "sonner";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signin = ({ signInOpen }: { signInOpen?: any }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    setLoading(false);

    if (result?.status === 200) {
      toast.success("Welcome back!", {
        description: "You have signed in successfully.",
      });
      if (signInOpen) signInOpen(false);
      authDialog?.setIsSuccessDialogOpen(true);
      setTimeout(() => {
        authDialog?.setIsSuccessDialogOpen(false);
      }, 1200);
    } else {
      toast.error("Sign in failed", {
        description: "Invalid credentials. Please verify your details.",
      });
      authDialog?.setIsFailedDialogOpen(true);
      setTimeout(() => {
        authDialog?.setIsFailedDialogOpen(false);
      }, 1200);
    }
  };

  return (
    <div>
      <div className="mb-6 text-center mx-auto block max-w-[140px]">
        <Logo />
      </div>

      <SocialSignIn />

      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-slate-900 px-3 text-slate-500 font-medium">
            or continue with
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1.5">
            Username
          </label>
          <Input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1.5">
            Password
          </label>
          <Input
            type="password"
            required
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
        >
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <Link
          href="/"
          className="text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default Signin;
