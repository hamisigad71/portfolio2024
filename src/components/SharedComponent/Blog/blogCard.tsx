import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

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
    <>
      <div className="group mb-0 relative">
        <div className="mb-8 overflow-hidden rounded-sm">
          <Link href={`/blog/#!`} aria-label="blog cover" className="block">
            <Image
              src={imageSrc}
              alt="imageeee"
              className="w-full transition group-hover:scale-125"
              width={408}
              height={272}
              style={{ width: "100%", height: "auto" }}
              quality={100}
            />
          </Link>
        </div>
        <div className="absolute top-0 bg-primary py-2 ml-4 mt-4 px-5 rounded-sm">
          <span className="text-white font-medium text-sm">Pricing</span>
        </div>
        <div>
          <h3>
            <Link
              href={`/blog/${slug}`}
              className="mb-4 inline-block font-semibold text-dark text-black hover:text-primary dark:text-white dark:hover:text-primary text-[22px] leading-tight"
            >
              {title}
            </Link>
          </h3>
          <span className="text-sm font-semibold leading-loose text-SereneGray">
            {format(new Date(date), "dd MMM yyyy")}
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
