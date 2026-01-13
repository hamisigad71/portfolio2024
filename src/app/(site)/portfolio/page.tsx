"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: string;
  img: string;
}

const PortfolioPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      title: "Aura Finance Dashboard",
      desc: "Real-time financial analytics platform",
      tags: ["React", "D3.js"],
      category: "dashboard",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmiqNRkzNxkFO0WjJJEadLZ9yCC3v6zejqskpwjvmxzt3bEgEvYHo6FSGq2tWgXh_MMA1YwwmwhqkJiaTnmK6zu6pFgTBPGOhTLpbpSAQy1BZeYpSyqbRR9sOeGuwch2yBnAHuCgz5_ndCBA0Ew85m0KmCN_v65kHAL-UedneqBIQvRTXeKYugZSzgP4PKXYWLO-kQlrhCWpytbN8eGsBfO8yJhXaCTPlqAiri-ISiWLWmPxZzW5YLZIPVre0Lu1RJ9-w43Kp4-AM",
    },
    {
      title: "Quantum Analytics",
      desc: "Scientific data visualization",
      tags: ["Vue.js", "WebGL"],
      category: "dashboard",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "SalesFlow Pro",
      desc: "Predictive CRM dashboard",
      tags: ["Next.js", "Chart.js"],
      category: "dashboard",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "ConnectSphere",
      desc: "Professional networking app",
      tags: ["SwiftUI", "Firebase"],
      category: "mobile",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn4N0wASVSreca7uVqmI9Z94GQfUcQzmdZ8LEmp5Vc_a7wE1jEiaq2p1WNFtokHU1ruI1dtnZ6BJ9_9rJzOUle8F7OknEVzBD2zEthGSuW1PoX_9D2Lqzvvf2Nl_Cnk0OUqBMIS5PhA2xBuKDx0gZagZ7VhWSeeIQTV-TmDmku_xr2K5MAUN5Y9zEUMyS3gIuvqXSvBvCvZnPb-1lX3ChGigv-w7RhZ3YuaAeaUDVzb9LykFecAE_nH-NAYnuO1WM6Ol45hdeDhn8",
    },
    {
      title: "HealthTrack Pro",
      desc: "AI health monitoring",
      tags: ["React Native"],
      category: "mobile",
      img: "https://i.pinimg.com/1200x/a3/5c/33/a35c33e8813ed8b6bfe1ec40e9d03ddf.jpg",
    },
    {
      title: "Law Firm website",
      desc: "Smart productivity app",
      tags: ["React"],
      category: "website",
      img: "https://i.pinimg.com/736x/38/ac/ab/38acab4c5d557f6e50d411e145bf1c05.jpg",
    },
    {
      title: "Restaurant Website",
      desc: "Enterprise site with 3D",
      tags: ["Next.js", "Framer"],
      category: "website",
      img: "https://i.pinimg.com/736x/cd/cf/49/cdcf49434c0156ce2666c0d21db48271.jpg",
    },
    {
      title: "Studio X",
      desc: "Creative agency portfolio",
      tags: ["Astro", "GSAP"],
      category: "website",
      img: "https://i.pinimg.com/736x/c2/06/0c/c2060c2609f6e33b5d839086434c771c.jpg",
    },
    {
      title: "EcomPulse",
      desc: "Blazing-fast e-commerce",
      tags: ["Shopify", "Vercel"],
      category: "website",
      img: "https://i.pinimg.com/736x/93/a3/fc/93a3fc5f4fe87125b6579784e9496c06.jpg",
    },
    {
      title: "LearnFlow",
      desc: "Interactive learning platform",
      tags: ["Remix", "Stripe"],
      category: "website",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
    {
      title: "IntelliAgent",
      desc: "Autonomous support agent",
      tags: ["N8N", "LangChain"],
      category: "ai",
      img: "https://i.pinimg.com/736x/55/3a/8c/553a8cf3426a3414dd4447bfcaf931cd.jpg",
    },
    {
      title: "ContentEngine",
      desc: "AI marketing content",
      tags: ["Llama 3", "FastAPI"],
      category: "ai",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    },
  ];

  const filters = [
    {
      label: "All Projects",
      value: "all",
      icon: "apps",
      count: projects.length,
    },
    {
      label: "Dashboards",
      value: "dashboard",
      icon: "dashboard",
      count: projects.filter((p) => p.category === "dashboard").length,
    },
    {
      label: "Mobile Apps",
      value: "mobile",
      icon: "phone_android",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      label: "Websites",
      value: "website",
      icon: "web",
      count: projects.filter((p) => p.category === "website").length,
    },
    {
      label: "AI Agents",
      value: "ai",
      icon: "psychology",
      count: projects.filter((p) => p.category === "ai").length,
    },
  ];

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const filtered =
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter);
    setFilteredProjects(filtered);
  }, [activeFilter]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      dashboard: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      mobile: "bg-green-500/10 text-green-600 dark:text-green-400",
      website: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      ai: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-600"
    );
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-500 font-body">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-2 h-2 bg-primary/20 rounded-full top-20 left-10 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-success/20 rounded-full top-40 right-20 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-secondary/30 rounded-full bottom-32 left-1/4 animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-primary/15 rounded-full top-1/2 right-1/3 animate-bounce"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Enhanced Header with Gradient */}
      <header className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90"></div>

        {/* Glass overlay */}
        <div className="relative backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/20 dark:border-gray-700/30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 dark:bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">
                    code
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-quicksand font-bold text-white">
                    Portfolio Showcase
                  </h1>
                  <p className="text-sm text-white/70">Creative Developer</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-4">
                {/* Home Button */}
                <Link
                  href="/"
                  className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <span className="material-symbols-outlined">home</span>
                  <span className="hidden sm:inline">Home</span>
                </Link>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
                  aria-label="Toggle theme"
                >
                  <span
                    className={`material-symbols-outlined text-white ${
                      isDark ? "block" : "hidden"
                    }`}
                  >
                    light_mode
                  </span>
                  <span
                    className={`material-symbols-outlined text-white ${
                      isDark ? "hidden" : "block"
                    }`}
                  >
                    dark_mode
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative px-6 py-16 text-center text-white">
          <div className="container mx-auto max-w-4xl">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-quicksand font-bold mb-6 leading-tight">
                My Creative
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 ml-4">
                  Portfolio
                </span>
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
                Explore my latest projects spanning AI development, modern web
                applications, and innovative digital solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">
                    {projects.length}+
                  </div>
                  <div className="text-sm text-white/70">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">4</div>
                  <div className="text-sm text-white/70">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">
                    {" "}
                    2025
                  </div>
                  <div className="text-sm text-white/70">Latest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <section className="px-6 py-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          {/* Last Updated */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 dark:bg-success/20 rounded-full">
              <span className="material-symbols-outlined text-success text-sm">
                schedule
              </span>
              <span className="text-sm font-medium text-success">
                Last updated: <strong>November 18, 2025 • 12:15 AM EAT</strong>
              </span>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.value
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-text-heading dark:text-white shadow-md border border-gray-200 dark:border-gray-700"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="material-symbols-outlined text-sm">
                    {filter.icon}
                  </span>
                  <span>{filter.label}</span>
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      activeFilter === filter.value
                        ? "bg-white/20"
                        : "bg-gray-100 dark:bg-gray-700"
                    }`}
                  >
                    {filter.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="flex-1 px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div
            className={`grid gap-8 auto-rows-fr ${
              filteredProjects.length <= 3
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col h-full bg-white dark:bg-card-dark rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-dark-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:scale-105 opacity-0 translate-y-10 animate-fade-in"
                style={{
                  animationDelay: `${index * 120}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-gray-800">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium ${getCategoryColor(
                      project.category
                    )} backdrop-blur-sm bg-white/80 dark:bg-gray-900/80`}
                  >
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </div>

                  {/* View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <span className="material-symbols-outlined text-white text-2xl">
                        visibility
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-quicksand font-bold text-text-heading dark:text-white line-clamp-2 leading-tight group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-body dark:text-gray-400 line-clamp-3 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
                        style={{ animationDelay: `${tagIndex * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-quicksand font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group/button">
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/button:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-text-heading dark:bg-background-dark border-t border-gray-200 dark:border-dark-border">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">
                code
              </span>
              <span className="text-xl font-quicksand font-bold text-white">
                Portfolio Showcase
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Crafted with passion and modern technology
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <span className="material-symbols-outlined text-white">
                  link
                </span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <span className="material-symbols-outlined text-white">
                  mail
                </span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <span className="material-symbols-outlined text-white">
                  share
                </span>
              </a>
            </div>

            <p className="text-sm text-gray-500">
              © 2025 All rights reserved • Made with Figtree & Quicksand fonts
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Quicksand:wght@300..700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap");

        .material-symbols-outlined {
          font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        }

        .font-quicksand {
          font-family: "Quicksand", "Figtree", -apple-system, sans-serif;
        }

        .font-body {
          font-family: "Figtree", -apple-system, sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .dark ::-webkit-scrollbar-track {
          background: #2a2a2a;
        }

        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }

        .dark ::-webkit-scrollbar-thumb {
          background: #555;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
