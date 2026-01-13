"use client";

import React from "react";
import { useLoading } from "@/app/context/LoadingContext";

const PreLoader = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center backdrop-blur-md bg-white/20 dark:bg-black/20 transition-all duration-500 ease-out ${
        isLoading ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Glass Card Container */}
      <div className="relative rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-2xl px-8 py-10 transform transition-all duration-300">
        <div className="text-center">
          {/* Professional Spinner */}
          <div className="relative mx-auto mb-5 h-[60px] w-[60px]">
            <div className="absolute inset-0 rounded-full border-4 border-[#0D47A1]/10 dark:border-[#0D47A1]/20"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#0D47A1] border-r-[#4285F4] dark:border-t-[#0D47A1] dark:border-r-[#4285F4]"></div>
          </div>

          {/* Loading Text with Animated Dots */}
          <div className="flex items-center justify-center gap-1 text-base font-semibold text-[#0D47A1] dark:text-[#4285F4]">
            <span>Loading</span>
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#4285F4] dark:bg-[#4285F4] [animation-delay:-0.32s]"></span>
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#4285F4] dark:bg-[#4285F4] [animation-delay:-0.16s]"></span>
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#4285F4] dark:bg-[#4285F4]"></span>
            </div>
          </div>

          {/* Optional loading message */}
          <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 opacity-70">
            Please wait while we prepare your content
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
