"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolioProjects";
import { useParams } from "next/navigation";
import { usePageLoader } from "@/hooks/usePageLoader";
import { ArrowLeft, Home, Zap, Layers, Target, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  const { stopLoading } = usePageLoader();

  const project = portfolioProjects.find((p) => p.id === projectId);

  useEffect(() => {
    stopLoading();
  }, [projectId, stopLoading]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Project Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/#portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = portfolioProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-xs">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Button variant="ghost" size="sm" asChild className="gap-2 text-slate-700 dark:text-slate-200">
              <Link href="/#portfolio">
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Link>
            </Button>

            <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white text-center px-4 max-w-md truncate">
              {project.title}
            </h1>

            <Button variant="ghost" size="sm" asChild className="gap-2 text-slate-700 dark:text-slate-200">
              <Link href="/">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="h-16 sm:h-20" />

      {/* Hero Section */}
      <section className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px] overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover w-full h-full opacity-85"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="absolute inset-0 flex items-end justify-start p-6 sm:p-10 lg:p-16">
          <div className="max-w-3xl space-y-3">
            <Badge variant="glass" className="font-semibold text-xs py-1 px-3.5">
              {project.category.replace("-", " ").toUpperCase()}
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 line-clamp-2 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Category
              </h3>
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-white capitalize">
              {project.category.replace("-", " ")}
            </p>
          </Card>

          <Card className="p-6 bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Stack Core
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(project.technologies || project.tags).slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Impact
              </h3>
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-white">
              {project.results ? `${project.results.length} Validated Outcomes` : "Delivered to Production"}
            </p>
          </Card>
        </div>

        {/* Narrative & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8 space-y-12">
            {project.challenge && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    The Challenge
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    The Solution
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {project.fullDescription && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Technical Architecture
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            )}
          </div>

          {/* Right Column / Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-6 bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || project.tags).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs py-1 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {project.results && project.results.length > 0 && (
              <Card className="p-6 bg-blue-50/50 dark:bg-blue-950/20 border-blue-200/60 dark:border-blue-900/40">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Measurable Results
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-slate-200/80 dark:border-slate-800 pt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Explore More Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link key={related.id} href={`/portfolio/${related.id}`} className="group block">
                  <Card className="card-hover-effect overflow-hidden rounded-2xl bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col h-full">
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={related.image}
                        alt={related.alt}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                      />
                    </div>
                    <div className="p-5 space-y-2 grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                          {related.description}
                        </p>
                      </div>
                      <div className="pt-2 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 sm:p-14 text-center text-white shadow-xl shadow-blue-600/15">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Let's discuss how we can turn your requirements into high-performing, beautifully crafted software.
          </p>
          <Button
            size="lg"
            asChild
            className="rounded-xl bg-white text-blue-700 hover:bg-slate-100 shadow-md font-semibold px-8"
          >
            <Link href="/#contact" className="inline-flex items-center gap-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
