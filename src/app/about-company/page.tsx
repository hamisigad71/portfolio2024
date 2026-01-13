import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Progresswork from "@/components/Home/WorkProgress";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Company | Venus",
};

const AboutCompanyPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Me" },
    { href: "/about-company", text: "Company" },
  ];

  return (
    <>
      <HeroSub
        title="About Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Progresswork isColorMode={true} />
      
      {/* Back Button */}
      <section className="py-8 bg-section dark:bg-darklight">
        <div className="container mx-auto px-4 flex justify-center">
          <Link 
            href="/about" 
            className="btn-text-primary px-8 py-3 lg:py-4 lg:px-10 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Back to Profile
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutCompanyPage;
