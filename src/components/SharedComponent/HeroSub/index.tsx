import React, { FC } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { BreadcrumbLink } from "@/types/breadcrumb";

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <section className="text-center md:py-24 py-16 md:pt-44 pt-36 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-slate-900 dark:text-white md:text-5xl text-3xl font-bold tracking-tight leading-tight">
          {title}
        </h1>
        <p className="md:text-lg text-base text-slate-600 dark:text-slate-300 font-normal max-w-2xl mx-auto my-5 px-4 leading-relaxed">
          {description}
        </p>
        <Breadcrumb links={breadcrumbLinks} />
      </div>
    </section>
  );
};

export default HeroSub;
