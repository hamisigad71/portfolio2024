"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Bot, Database } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Servicebox = [
  {
    icon: Code2,
    img: "/images/services/ux-design-product_1.svg",
    title: "Full-Stack Development",
    description:
      "Robust, scalable web applications using Next.js, React, Node.js, and TypeScript. Delivering end-to-end performance with fluid UI and reliable server architectures.",
    highlight: "React • Next.js • TypeScript",
  },
  {
    icon: Bot,
    img: "/images/services/perfomance-optimization.svg",
    title: "AI Agents & Automation",
    description:
      "Intelligent workflows, custom LLM tool integrations, and background automations that streamline complex business processes and elevate user experience.",
    highlight: "Agents • Automation • APIs",
  },
  {
    icon: Database,
    img: "/images/services/ux-design-product_2.svg",
    title: "API & Architecture Design",
    description:
      "Resilient REST & GraphQL APIs, secure database schemas, and cloud deployment pipelines ensuring optimal response times and data integrity.",
    highlight: "PostgreSQL • Prisma • Cloud",
  },
];

const Services = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 relative overflow-hidden" id="services">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="600">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
            Services & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            Services specifically designed to scale your vision
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            From architecture to pixel-perfect micro-interactions, I build modern web software designed for speed and longevity.
          </p>
        </div>

        {/* Services Cards Grid with Shadcn Card */}
        <div className="grid md:grid-cols-3 gap-8">
          {Servicebox.map((item, index) => {
            const IconComp = item.icon;
            return (
              <Card
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
                data-aos-duration="600"
                className="card-hover-effect flex flex-col justify-between p-8 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm rounded-3xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shadow-xs">
                    <IconComp className="h-7 w-7" />
                  </div>

                  <Badge variant="outline" className="mb-3 text-[11px] font-medium border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                    {item.highlight}
                  </Badge>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="p-0 h-auto font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group"
                  >
                    <a href="#contact" className="inline-flex items-center gap-1.5">
                      Discuss this service
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
