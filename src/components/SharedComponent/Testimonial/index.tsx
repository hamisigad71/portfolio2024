"use client";
import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Daysman was a fantastic experience. His technical depth and design sense were evident from day one, delivering a high-quality product right on schedule.",
    name: "Mary Okech",
    role: "Manager at Innovate Inc.",
    image:
      "https://i.pinimg.com/736x/ad/6b/b5/ad6bb58a9bf8a7384e52f5857e8d8eac.jpg",
  },
  {
    id: 2,
    quote:
      "An exceptional engineer who brought our vision to life. The attention to micro-interactions, responsive polish, and system performance was truly world-class.",
    name: "Mr Fred",
    role: "Project Lead at Sapio Homes",
    image:
      "https://i.pinimg.com/1200x/3a/66/0d/3a660d0d81d43cccc452c5a4bd913d80.jpg",
  },
  {
    id: 3,
    quote:
      "Clear communication, ultra-clean code, and rapid delivery. The subtle animations and fluid layout exceeded our expectations. Highly recommended!",
    name: "Emily Kiti",
    role: "Lead Designer at Creative Solutions",
    image:
      "https://i.pinimg.com/1200x/8c/aa/06/8caa06bd2ad653a781851d330de0fa22.jpg",
  },
];

const Testimonial = () => {
  return (
    <section
      className="py-20 lg:py-28 scroll-mt-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors duration-200"
      id="testimonials"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="600">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            Trusted by founders, teams & product leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Real feedback from partners who relied on my design engineering and full-stack execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={`${idx * 150}`}
              data-aos-duration="600"
              className="card-hover-effect flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800/80 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 shadow-xs">
                  <Image
                    src={testimonial.image}
                    alt={`Photo of ${testimonial.name}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex pt-14 justify-center" data-aos="fade-up" data-aos-duration="600">
          <Button
            size="lg"
            asChild
            className="rounded-xl px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
          >
            <a href="#contact">Start a Project With Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
