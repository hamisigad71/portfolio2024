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
import { Icon } from "@iconify/react/dist/iconify.js";
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
    const handleScroll = () => setSticky(window.scrollY >= 100);
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          sticky || !isHomePage
            ? "h-20 bg-white dark:bg-gray-950 shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
            : "h-24 bg-transparent"
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
                .filter(item => item.label !== "Portfolio")
                .map((item, i) => (
                  <HeaderLink key={i} item={item} />
                ))}
            </ul>
          </nav>

          {/* Right Side: Theme Toggle + Menu (Mobile) + Auth (Desktop) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme Toggle – Always Visible */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle theme"
            >
              <Icon
                icon="ph:sun-bold"
                className="h-5 w-5 text-yellow-500 hidden dark:block"
              />
              <Icon
                icon="ph:moon-bold"
                className="h-5 w-5 text-gray-700 block dark:hidden"
              />
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setIsSignInOpen(true)}
                className="btn-text-secondary px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all whitespace-nowrap"
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="btn-text-primary px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-all whitespace-nowrap"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button – Always Visible on Mobile */}
            <button
              onClick={() => setNavbarOpen(true)}
              className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Open menu"
            >
              <Icon icon="ph:list-bold" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-400 z-50 lg:hidden ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-heading-3">Menu</h2>
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
          >
            <Icon icon="ph:x-bold" className="h-7 w-7" />
          </button>
        </div>

        <nav className="p-6 space-y-6">
          {headerData.map((item, i) => (
            <MobileHeaderLink
              key={i}
              item={item}
              onClick={() => setNavbarOpen(false)}
            />
          ))}

          <div className="pt-8 space-y-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
              className="nav-text-mobile w-full py-4 text-left hover:text-blue-600 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false);
              }}
              className="btn-text-primary w-full py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 shadow-lg transition-all"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>

      {/* Modals */}
      {isSignInOpen && (
        <div
          ref={signInRef}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <div className="relative bg-white dark:bg-gray-950 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-6 right-6 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <Icon icon="ph:x" className="h-6 w-6" />
            </button>
            <Signin signInOpen={setIsSignInOpen} />
          </div>
        </div>
      )}

      {isSignUpOpen && (
        <div
          ref={signUpRef}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <div className="relative bg-white dark:bg-gray-950 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-6 right-6 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <Icon icon="ph:x" className="h-6 w-6" />
            </button>
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
