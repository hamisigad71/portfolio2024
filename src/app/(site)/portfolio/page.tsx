"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, LayoutDashboard, Smartphone, Globe, Bot } from "lucide-react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  category: "dashboard" | "mobile" | "website" | "ai";
  img: string;
}

const projects: Project[] = [
  {
    id: "aura-finance",
    title: "Aura Finance Dashboard",
    desc: "Real-time financial analytics platform with high-frequency chart rendering and responsive metrics.",
    tags: ["React", "TypeScript", "D3.js"],
    category: "dashboard",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmiqNRkzNxkFO0WjJJEadLZ9yCC3v6zejqskpwjvmxzt3bEgEvYHo6FSGq2tWgXh_MMA1YwwmwhqkJiaTnmK6zu6pFgTBPGOhTLpbpSAQy1BZeYpSyqbRR9sOeGuwch2yBnAHuCgz5_ndCBA0Ew85m0KmCN_v65kHAL-UedneqBIQvRTXeKYugZSzgP4PKXYWLO-kQlrhCWpytbN8eGsBfO8yJhXaCTPlqAiri-ISiWLWmPxZzW5YLZIPVre0Lu1RJ9-w43Kp4-AM",
  },
  {
    id: "quantum-analytics",
    title: "Quantum Analytics",
    desc: "Scientific telemetry and data visualization platform tailored for laboratory data pipelines.",
    tags: ["Next.js", "WebGL", "Tailwind"],
    category: "dashboard",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "salesflow-pro",
    title: "SalesFlow Pro",
    desc: "Predictive enterprise CRM dashboard helping revenue teams forecast pipeline accurately.",
    tags: ["Next.js", "PostgreSQL", "Recharts"],
    category: "dashboard",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "connectsphere",
    title: "ConnectSphere",
    desc: "Cross-platform professional networking application with real-time messaging and events.",
    tags: ["React Native", "Firebase", "WebSockets"],
    category: "mobile",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn4N0wASVSreca7uVqmI9Z94GQfUcQzmdZ8LEmp5Vc_a7wE1jEiaq2p1WNFtokHU1ruI1dtnZ6BJ9_9rJzOUle8F7OknEVzBD2zEthGSuW1PoX_9D2Lqzvvf2Nl_Cnk0OUqBMIS5PhA2xBuKDx0gZagZ7VhWSeeIQTV-TmDmku_xr2K5MAUN5Y9zEUMyS3gIuvqXSvBvCvZnPb-1lX3ChGigv-w7RhZ3YuaAeaUDVzb9LykFecAE_nH-NAYnuO1WM6Ol45hdeDhn8",
  },
  {
    id: "healthtrack-pro",
    title: "HealthTrack Pro",
    desc: "Personalized health tracking and proactive biometric monitoring app for iOS and Android.",
    tags: ["React Native", "HealthKit", "Node.js"],
    category: "mobile",
    img: "https://i.pinimg.com/1200x/a3/5c/33/a35c33e8813ed8b6bfe1ec40e9d03ddf.jpg",
  },
  {
    id: "law-firm-site",
    title: "Apex Law Partners",
    desc: "High-trust corporate legal advisory website featuring case evaluation workflows.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "website",
    img: "https://i.pinimg.com/736x/38/ac/ab/38acab4c5d557f6e50d411e145bf1c05.jpg",
  },
  {
    id: "studio-x",
    title: "Studio X Creative",
    desc: "Award-winning portfolio and brand experience with smooth WebGL transitions.",
    tags: ["Next.js", "GSAP", "Three.js"],
    category: "website",
    img: "https://i.pinimg.com/736x/c2/06/0c/c2060c2609f6e33b5d839086434c771c.jpg",
  },
  {
    id: "ecompulse",
    title: "EcomPulse Flagship",
    desc: "High-conversion headless storefront built for sub-second load times and global scale.",
    tags: ["Shopify", "Next.js", "Stripe"],
    category: "website",
    img: "https://i.pinimg.com/736x/93/a3/fc/93a3fc5f4fe87125b6579784e9496c06.jpg",
  },
  {
    id: "intelliagent",
    title: "IntelliAgent Workflow",
    desc: "Autonomous customer support agent equipped with knowledge base retrieval and multi-step tool execution.",
    tags: ["LangChain", "FastAPI", "OpenAI"],
    category: "ai",
    img: "https://i.pinimg.com/736x/55/3a/8c/553a8cf3426a3414dd4447bfcaf931cd.jpg",
  },
  {
    id: "contentengine",
    title: "ContentEngine AI",
    desc: "Automated multi-channel copywriting, brand tone matching, and scheduled publication.",
    tags: ["Python", "FastAPI", "Llama 3"],
    category: "ai",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
];

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Dashboards", value: "dashboard" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Websites", value: "website" },
  { label: "AI Agents", value: "ai" },
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-200">
      <HeroSub
        title="Portfolio Showcase"
        description="A curated look into production applications, design systems, and intelligent workflows built with craft."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <Button
                  key={filter.value}
                  variant={isActive ? "default" : "secondary"}
                  size="sm"
                  className={`rounded-full px-5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                  <span className={`ml-2 text-xs opacity-70`}>
                    (
                    {filter.value === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === filter.value).length}
                    )
                  </span>
                </Button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Card
                key={project.id}
                className="card-hover-effect flex flex-col justify-between overflow-hidden rounded-3xl border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 shadow-sm group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="glass" className="capitalize text-xs font-semibold px-3 py-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
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
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400">
                    <span>Explore Overview</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
