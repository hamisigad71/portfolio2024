"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="bg-section dark:bg-darklight min-h-screen py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex-shrink-0">
  <Image
    src="https://i.pinimg.com/736x/2b/4c/4b/2b4c4bf919253ca7b74f2b649df09d4a.jpg"
    alt="Professional Avatar"
    width={160}
    height={160}
    priority
    className="
      rounded-full
      border-[3px] border-primary/80
      shadow-xl
      object-cover
      bg-gray-100
    "
  />
</div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-2">
               Daysman Gad
            </h1>
            <h2 className="text-xl font-semibold text-primary mb-2">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="text-base text-gray-700 dark:text-white/70 max-w-xl">
              Passionate about building scalable web applications and intelligent automation solutions. I combine strong engineering skills with a creative mindset to deliver impactful digital products for businesses and users.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-darkmode rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Education</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-white/70">
              <li>BSc. Computer Science, University of Nairobi (2018-2022)</li>
              <li>Certified AWS Cloud Practitioner</li>
              <li>React & Node.js Bootcamp, freeCodeCamp</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-darkmode rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Work Experience</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-white/70">
              <li>Software Engineer, Safaricom PLC (2023-Present)</li>
              <li>Full Stack Developer, Moringa School (2022-2023)</li>
              <li>Freelance AI Agent Developer (2021-Present)</li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-white dark:bg-darkmode rounded-lg shadow-md p-6 mb-12">
          <h3 className="text-lg font-bold text-primary mb-2">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">React</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">Node.js</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">TypeScript</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">Python</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">Next.js</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">AWS</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">MongoDB</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">LangChain</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">Docker</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">Framer Motion</span>
          </div>
        </div>

        <div className="w-full bg-white dark:bg-darkmode rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-primary mb-2">About Me</h3>
          <p className="text-base text-gray-700 dark:text-white/70 mb-4">
            I thrive in collaborative environments and enjoy solving complex problems with code. My journey in tech started with curiosity and has grown into a career focused on building products that make a difference. I am always eager to learn new technologies and contribute to innovative teams.
          </p>
          <p className="text-base text-gray-700 dark:text-white/70 mb-4">
            Outside of work, I love mentoring junior developers, participating in hackathons, and exploring the latest trends in AI and cloud computing. I believe in continuous growth and strive to deliver excellence in every project I take on.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="mailto:hamisi.mwinyi@email.com" className="text-primary underline">Email Me</a>
            <a href="https://www.linkedin.com/in/hamisimwinyi" target="_blank" rel="noopener" className="text-primary underline">LinkedIn</a>
            <a href="https://github.com/hamisimwinyi" target="_blank" rel="noopener" className="text-primary underline">GitHub</a>
          </div>
        </div>

        {/* View More Button */}
        <div className="w-full mt-12 flex justify-center">
          <Link 
            href="/about-company" 
            className="btn-text-primary px-8 py-3 lg:py-4 lg:px-10 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
