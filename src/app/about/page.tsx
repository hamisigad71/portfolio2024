"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, GraduationCap, Briefcase, Code, ArrowRight, ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  return (
    <section className="bg-slate-50/70 dark:bg-slate-950 min-h-screen py-20 lg:py-28 transition-colors duration-200">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Profile Card */}
        <Card className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-blue-600/20 shadow-xl shrink-0">
            <Image
              src="https://i.pinimg.com/736x/2b/4c/4b/2b4c4bf919253ca7b74f2b649df09d4a.jpg"
              alt="Daysman Gad portrait"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            <Badge variant="secondary" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Senior Full-Stack & AI Engineer
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Daysman Gad
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Specializing in resilient web applications, custom AI agent architectures, and polished interactive frontends. I blend systems engineering with deep design sensitivity to deliver software that feels natural and fast.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <Button size="sm" asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                <a href="mailto:hamisigad77@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="rounded-full">
                <a href="https://github.com/hamisimwinyi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Icon icon="mdi:github" className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="rounded-full">
                <a href="https://www.linkedin.com/in/hamisimwinyi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Icon icon="mdi:linkedin" className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 rounded-3xl bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Education & Credentials
              </h2>
            </div>
            <ul className="space-y-3 pt-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">BSc. Computer Science</p>
                <p className="text-xs text-slate-500">University of Nairobi (2018 - 2022)</p>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">AWS Cloud Practitioner Certified</p>
                <p className="text-xs text-slate-500">Cloud Architecture, Security & IAM</p>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Full Stack Engineering Intensive</p>
                <p className="text-xs text-slate-500">React, Node.js, and Modern TypeScript Systems</p>
              </li>
            </ul>
          </Card>

          <Card className="p-8 rounded-3xl bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Work Experience
              </h2>
            </div>
            <ul className="space-y-3 pt-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Software Engineer • Safaricom PLC</p>
                <p className="text-xs text-slate-500">2023 - Present • Cloud pipelines & distributed services</p>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Full Stack Developer • Moringa School</p>
                <p className="text-xs text-slate-500">2022 - 2023 • Modern JavaScript and backend curriculum</p>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">AI Automation Specialist • Independent</p>
                <p className="text-xs text-slate-500">2021 - Present • Autonomous agent workflows & LLM integration</p>
              </li>
            </ul>
          </Card>
        </div>

        {/* Technical Skills */}
        <Card className="p-8 rounded-3xl bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Skills & Core Technologies
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              "React 19",
              "Next.js 15",
              "TypeScript",
              "Tailwind CSS v4",
              "Shadcn UI",
              "Node.js",
              "Python",
              "FastAPI",
              "PostgreSQL",
              "Docker",
              "AWS",
              "LangChain",
              "Motion",
              "Sonner",
              "REST & GraphQL",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-1.5 text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center pt-6">
          <Button size="lg" asChild className="rounded-xl px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            <Link href="/about-company" className="inline-flex items-center gap-2">
              <span>Learn About the Company</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
