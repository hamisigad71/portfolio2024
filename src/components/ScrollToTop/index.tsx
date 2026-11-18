"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in-0 zoom-in-95 duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
      <Button
        variant="default"
        size="icon"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="h-11 w-11 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white shadow-lg active:scale-95 transition-transform"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
