import { Metadata } from "next";
import Hero from "@/components/Home/Hero";

import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
import Portfolio from "@/components/SharedComponent/portfollio";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Blog from "@/components/SharedComponent/Blog";
import Contactform from "@/components/Home/Contact";
export const metadata: Metadata = {
  title: "Venus",
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
