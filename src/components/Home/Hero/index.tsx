"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-36 xl:pt-44 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950">
      {/* Subtle Apple-style background blur glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content (7 cols) */}
          <div
            className="lg:col-span-7 space-y-6 lg:space-y-8 flex flex-col items-start justify-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {/* Status Badge */}
            <div className="pt-4">
              <Badge
                variant="glass"
                className="px-3.5 py-1.5 rounded-full gap-2 border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-medium shadow-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for New Projects • 2024
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-slate-900 font-bold dark:text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              Delivering <span className="text-blue-600 dark:text-blue-500">Clean Code</span>, Sharp Design, Real Results.
            </h1>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
              I'm Daysman Gad, a full-stack engineer and design enthusiast who blends modern frameworks, fluid motion, and digital strategy to build software people love using.
            </p>

            {/* CTAs using Shadcn Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                asChild
                className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 group"
              >
                <a href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Social Proof / Avatars */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full sm:w-auto">
              <div className="flex items-center -space-x-2.5">
                <Image
                  src="https://i.pinimg.com/736x/a1/3f/e5/a13fe593cd044397afc8ce5d47598333.jpg"
                  alt="Client avatar"
                  width={44}
                  height={44}
                  quality={90}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-xs"
                />
                <Image
                  src="/images/hero/hero-profile-3.jpg"
                  alt="Client avatar"
                  width={44}
                  height={44}
                  quality={90}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-xs"
                />
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold shadow-xs">
                  50+
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  Trusted by ambitious founders & agencies
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Over 50+ successful web apps delivered
                </p>
              </div>
            </div>
          </div>

          {/* Right Image with Apple Glass card badge (5 cols) */}
          <div
            className="lg:col-span-5 relative flex justify-center"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-transparent dark:from-blue-500/20 shadow-2xl">
                <div className="overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-[4/3] sm:aspect-[4/3]">
                  <Image
                    src="https://i.pinimg.com/736x/5d/19/fa/5d19fa202c73792fc36d12df1aa5ab1a.jpg"
                    alt="Daysman Gad workspace"
                    width={700}
                    height={525}
                    quality={95}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Glass Stats Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">99.8%</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Satisfaction & Quality Score
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
