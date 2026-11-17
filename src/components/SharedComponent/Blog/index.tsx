import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "./blogCard";
import { getAllPosts } from "@/utils/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog: React.FC = () => {
  const posts = getAllPosts([
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
  ]).slice(0, 3);

  return (
    <section
      className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-200"
      id="blog"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
          <div data-aos="fade-right" data-aos-duration="600">
            <Badge variant="secondary" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
              Writing & Insights
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              Latest Articles & Insights
            </h2>
          </div>

          <div data-aos="fade-left" data-aos-duration="600">
            <Button
              variant="outline"
              asChild
              className="rounded-full px-5 border-slate-300 dark:border-slate-700"
            >
              <Link href="/blog" className="inline-flex items-center gap-2">
                <span>View all posts</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((blog, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={`${i * 150}`}
              data-aos-duration="600"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
