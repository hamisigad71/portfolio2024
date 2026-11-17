import React from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fallbackImages = [
  "https://i.pinimg.com/736x/44/d8/cd/44d8cd46dcea12b6ae38e365c051e5d0.jpg",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
];

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug } = blog;

  const fallbackIndex = slug
    ? slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      fallbackImages.length
    : 0;

  const imageSrc = coverImage || fallbackImages[fallbackIndex];

  return (
    <Card className="card-hover-effect overflow-hidden rounded-3xl border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 shadow-sm flex flex-col h-full group">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Link href={`/blog/${slug}`} aria-label={title || "Blog post"} className="block w-full h-full">
          <Image
            src={imageSrc}
            alt={title || "Blog article cover image"}
            fill
            className="object-cover w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <Badge variant="glass" className="font-semibold text-xs py-1 px-3">
            Article
          </Badge>
        </div>
      </div>

      <div className="flex flex-col grow justify-between p-6 gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Calendar className="h-3.5 w-3.5" />
            <span>{format(new Date(date), "MMMM dd, yyyy")}</span>
          </div>

          <h3>
            <Link
              href={`/blog/${slug}`}
              className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug"
            >
              {title}
            </Link>
          </h3>

          {excerpt && (
            <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
              {excerpt}
            </p>
          )}
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400">
          <span>Read Full Article</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
