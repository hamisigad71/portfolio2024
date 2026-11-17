"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const ProgressData = [
  { title: "Full-Stack Web Engineering", Progress: 95 },
  { title: "AI Agents & Automation", Progress: 88 },
  { title: "Design Systems & UI Craft", Progress: 92 },
];

interface ProgressItem {
  title: string;
  Progress: number;
}

const Progresswork = ({ isColorMode }: { isColorMode: boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([]);

  useEffect(() => {
    setProgressValues(ProgressData);
  }, []);

  return (
    <section
      className={`py-20 lg:py-28 scroll-mt-24 transition-colors duration-200 ${
        isColorMode
          ? "bg-slate-50 dark:bg-slate-900/60"
          : "bg-white dark:bg-slate-950"
      }`}
      id="about"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 items-center gap-10 lg:gap-16">
          <div className="md:col-span-6 flex justify-center">
            <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-slate-200/50 to-slate-100/30 dark:from-slate-800/50 dark:to-slate-900/30 border border-slate-200/60 dark:border-slate-800/60 shadow-xl">
              <Image
                src="/images/work-progress/progress-work.png"
                alt="Work and progress illustration"
                width={520}
                height={400}
                quality={95}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>

          <div
            className="md:col-span-6 text-left flex flex-col items-start"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <Badge variant="secondary" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
              Core Capabilities
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
              Turning ideas into polished, high-performance digital products
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              I build fast, modern web experiences, create smart AI agents that automate business tasks, and design clean, user-friendly interfaces with rigorous visual craft. Every component is tuned for performance, accessibility, and delight.
            </p>

            <div className="space-y-6 w-full">
              {progressValues.map((item, index) => (
                <div key={index} className="w-full space-y-2">
                  <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
                    <span className="text-slate-800 dark:text-slate-200">
                      {item.title}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      {item.Progress}%
                    </span>
                  </div>
                  <div className="relative h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200/60 dark:border-slate-700/60">
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                      style={{ width: `${item.Progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progresswork;
