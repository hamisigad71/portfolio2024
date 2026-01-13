"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  portfolioCategories,
  portfolioProjects,
  type PortfolioCategorySlug,
} from "@/data/portfolioProjects";

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
      className="bg-[#F8F9FA] dark:bg-[#101622] border-t border-b border-white/10 py-16 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 lg:px-8">
        <header className="flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary">
            <span className="h-3 w-3 rounded-full bg-success" />
            build everything
          </div>
          <h2 className="text-3xl font-bold text-[#212529] dark:text-white md:text-4xl">
            Explore My Projects Showcase
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#495057] dark:text-white/70">
            A curated look at dashboards, mobile experiences, websites, and AI
            automations I’ve delivered across industries.
          </p>
        </header>

        <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4">
          {portfolioCategories.map((category) => (
            <button
              key={category.slug}
              className={`h-9 shrink-0 rounded-full px-5 text-sm font-medium transition ${
                activeCategory === category.slug
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-[#495057] dark:bg-gray-700 dark:text-white/70"
              }`}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              aria-pressed={activeCategory === category.slug}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
            >
              <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg dark:border-gray-800/80 dark:bg-gray-900/60 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex grow flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#212529] dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#495057] dark:text-white/70">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary dark:bg-blue-500/10 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-primary text-base font-medium text-white shadow-md transition hover:bg-primary/90">
                    View Case Study
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
