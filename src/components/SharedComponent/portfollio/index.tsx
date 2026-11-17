"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  portfolioCategories,
  portfolioProjects,
  type PortfolioCategorySlug,
} from "@/data/portfolioProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategorySlug>("all");

  const filteredProjects = useMemo(() => {
    const matching =
      activeCategory === "all"
        ? portfolioProjects
        : portfolioProjects.filter(
            (project) => project.category === activeCategory,
          );
    return matching.slice(0, 6);
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors duration-200"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="600">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Featured Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            Explore My Projects Showcase
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A curated collection of web apps, high-performance dashboards, mobile experiences, and AI automations delivered for clients worldwide.
          </p>
        </header>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2" data-aos="fade-up" data-aos-duration="600">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory === category.slug;
            return (
              <Button
                key={category.slug}
                variant={isActive ? "default" : "secondary"}
                size="sm"
                className={`rounded-full px-5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group block"
            >
              <Card
                data-aos="fade-up"
                data-aos-delay={`${(idx % 3) * 100}`}
                data-aos-duration="600"
                className="card-hover-effect flex flex-col h-full overflow-hidden rounded-3xl border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-slate-800 dark:text-white shadow-sm transition-transform duration-200 group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex grow flex-col justify-between p-6 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-none"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="w-full flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                      <span>View Case Study</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
