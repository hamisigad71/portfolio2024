import { Metadata } from "next";
import Hero from "@/components/Home/Hero";

import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
import Portfolio from "@/components/SharedComponent/portfollio";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Blog from "@/components/SharedComponent/Blog";
import Contactform from "@/components/Home/Contact";
export const metadata: Metadata = {
  title: "Daysman Gad | Full-Stack Developer & AI Specialist",
  description:
    "Delivering clean code, sharp design, and real results. High-performance web apps, AI agents, and intuitive digital experiences.",
  openGraph: {
    title: "Daysman Gad | Full-Stack Developer & AI Specialist",
    description:
      "Delivering clean code, sharp design, and real results. High-performance web apps, AI agents, and intuitive digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 736,
        height: 620,
        type: "image/jpeg",
        alt: "Daysman Gad - Full-Stack Developer & AI Specialist",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />

      <Progresswork isColorMode={false} />
      <Services />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contactform />
    </main>
  );
}
