"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolioProjects";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePageLoader } from "@/hooks/usePageLoader";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  const { stopLoading } = usePageLoader();
  
  const project = portfolioProjects.find((p) => p.id === projectId);

  // Stop loading when component mounts and data is loaded
  useEffect(() => {
    stopLoading();
  }, [projectId, stopLoading]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-darklight flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-midnight_text dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link href="/#portfolio" className="text-primary hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = portfolioProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white dark:bg-darklight">
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-darklight/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left - Back Button */}
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-midnight_text dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              <Icon icon="ph:arrow-left-bold" className="w-5 h-5" />
              <span className="hidden sm:inline">Back</span>
            </Link>

            {/* Center - Project Title */}
            <h1 className="text-lg lg:text-xl font-bold text-midnight_text dark:text-white text-center px-4 flex-1 truncate">
              {project.title}
            </h1>

            {/* Right - Home Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-midnight_text dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              <Icon icon="ph:house-bold" className="w-5 h-5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed nav */}
      <div className="h-16 lg:h-20" />
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover w-full h-full"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

        {/* Title overlay */}
        <div className="absolute inset-0 flex items-end justify-start p-6 lg:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 lg:px-12 py-16 lg:py-24">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="ph:lightning-bold" className="w-8 h-8 text-primary" />
              <h3 className="text-sm font-semibold text-midnight_text dark:text-white uppercase tracking-wide">
                Category
              </h3>
            </div>
            <p className="text-2xl font-bold text-midnight_text dark:text-white capitalize">
              {project.category.replace("-", " ")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="ph:gear-bold" className="w-8 h-8 text-success" />
              <h3 className="text-sm font-semibold text-midnight_text dark:text-white uppercase tracking-wide">
                Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {(project.technologies || project.tags).slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-success/20 text-success dark:text-green-300 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="ph:target-bold" className="w-8 h-8 text-purple-600" />
              <h3 className="text-sm font-semibold text-midnight_text dark:text-white uppercase tracking-wide">
                Impact
              </h3>
            </div>
            <p className="text-lg font-bold text-midnight_text dark:text-white">
              {project.results ? project.results.length + " Key Results" : "Delivered"}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge Section */}
            {project.challenge && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h2 className="text-3xl font-bold text-midnight_text dark:text-white">
                    The Challenge
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {/* Solution Section */}
            {project.solution && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-success rounded-full" />
                  <h2 className="text-3xl font-bold text-midnight_text dark:text-white">
                    The Solution
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Full Description */}
            {project.fullDescription && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-blue-500 rounded-full" />
                  <h2 className="text-3xl font-bold text-midnight_text dark:text-white">
                    About This Project
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* All Technologies */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || project.tags).map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics/Results */}
            {project.results && project.results.length > 0 && (
              <div className="bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-gray-900/50 rounded-2xl p-8 border border-primary/20 dark:border-primary/30">
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-6">
                  Key Results
                </h3>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon
                        icon="ph:check-circle-bold"
                        className="w-6 h-6 text-success flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-3xl font-bold text-midnight_text dark:text-white mb-10">
              More Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/portfolio/${related.id}`}
                >
                  <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.alt}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                      />
                    </div>
                    <div className="flex flex-col grow gap-3 p-6">
                      <h3 className="text-lg font-semibold text-midnight_text dark:text-white group-hover:text-primary transition">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {related.description}
                      </p>
                      <div className="flex gap-2 mt-auto flex-wrap">
                        {related.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-500/10 text-primary dark:text-blue-200 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-700 rounded-3xl p-12 text-center border border-primary/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in a similar project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with cutting-edge technology and creative solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition duration-300 shadow-lg"
          >
            Start Your Project
            <Icon icon="ph:arrow-right-bold" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
