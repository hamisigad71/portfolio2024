"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { SuccessfullLogin } from "@/components/Auth/AuthDialog/SuccessfulLogin";
import { FailedLogin } from "@/components/Auth/AuthDialog/FailedLogin";
import { UserRegistered } from "@/components/Auth/AuthDialog/UserRegistered";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathUrl === "/";

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
      if (signInRef.current && !signInRef.current.contains(e.target as Node))
        setIsSignInOpen(false);
      if (signUpRef.current && !signUpRef.current.contains(e.target as Node))
        setIsSignUpOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarOpen]);

  useEffect(() => {
    document.body.style.overflow =
      isSignInOpen || isSignUpOpen || navbarOpen ? "hidden" : "";
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  const authDialog = useContext(AuthDialogContext);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[height,background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          sticky || !isHomePage
            ? "h-20 bg-white/85 dark:bg-slate-950/85 shadow-sm border-b border-slate-200/60 dark:border-slate-800/60"
            : "h-24 bg-white/40 dark:bg-slate-950/40 border-b border-transparent"
        } backdrop-blur-xl`}
      >
        <div className="container mx-auto px-5 lg:px-12 h-full flex flex-wrap items-center justify-between gap-y-2">
          {/* Logo */}
          <div className="shrink-0 min-w-[120px]">
            <Logo />
          </div>

          {/* Desktop Navigation – Centered */}
          <nav className="hidden lg:flex flex-1 justify-center min-w-0">
            <ul className="flex flex-wrap items-center gap-6 xl:gap-8">
              {headerData
                .filter((item) => item.label !== "Portfolio")
                .map((item, i) => (
                  <HeaderLink key={i} item={item} />
                ))}
            </ul>
          </nav>

          {/* Right Side: Theme Toggle + Menu (Mobile) + Auth (Desktop) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Theme Toggle – Always Visible with micro-interaction */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 text-amber-500 hidden dark:block transition-transform duration-200" />
              <Moon className="h-4 w-4 text-slate-700 block dark:hidden transition-transform duration-200" />
            </Button>

            {/* Desktop Auth Buttons using Shadcn Button */}
            <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSignInOpen(true)}
                className="rounded-full px-5 text-sm font-medium border-slate-300 dark:border-slate-700"
              >
                Sign In
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => setIsSignUpOpen(true)}
                className="rounded-full px-5 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setNavbarOpen(true)}
              className="lg:hidden rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-slate-800 dark:text-slate-200" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-200"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer with Emil Kowalski drawer curve */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-slate-950/95 shadow-2xl backdrop-blur-2xl transform transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] z-50 lg:hidden border-l border-slate-200/60 dark:border-slate-800/60 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-200/60 dark:border-slate-800/60">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setNavbarOpen(false)}
            className="rounded-full"
          >
            <X className="h-5 w-5 text-slate-600 dark:text-slate-300" />
          </Button>
        </div>

        <nav className="p-6 space-y-6">
          {headerData.map((item, i) => (
            <MobileHeaderLink
              key={i}
              item={item}
              onClick={() => setNavbarOpen(false)}
            />
          ))}

          <div className="pt-8 space-y-3 border-t border-slate-200/60 dark:border-slate-800/60">
            <Button
              variant="outline"
              className="w-full justify-center rounded-xl py-3 h-12"
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign In
            </Button>
            <Button
              variant="default"
              className="w-full justify-center rounded-xl py-3 h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign Up
            </Button>
          </div>
        </nav>
      </div>

      {/* Modals with Emil Kowalski origin and entry scaling (never scale(0)) */}
      {isSignInOpen && (
        <div
          ref={signInRef}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-200"
        >
          <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-5 right-5 rounded-full"
            >
              <X className="h-4 w-4 text-slate-500 hover:text-slate-900 dark:hover:text-white" />
            </Button>
            <Signin signInOpen={setIsSignInOpen} />
          </div>
        </div>
      )}

      {isSignUpOpen && (
        <div
          ref={signUpRef}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-200"
        >
          <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-5 right-5 rounded-full"
            >
              <X className="h-4 w-4 text-slate-500 hover:text-slate-900 dark:hover:text-white" />
            </Button>
            <SignUp signUpOpen={setIsSignUpOpen} />
          </div>
        </div>
      )}

      {/* Toasts */}
      {authDialog?.isSuccessDialogOpen && <SuccessfullLogin />}
      {authDialog?.isFailedDialogOpen && <FailedLogin />}
      {authDialog?.isUserRegistered && <UserRegistered />}
    </>
  );
};

export default Header;
