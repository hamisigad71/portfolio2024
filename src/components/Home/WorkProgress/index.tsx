"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// Local progress data
const ProgressData = [
  { title: "Full-stack development", Progress: 95 },
  { title: "AI agent development", Progress: 84 },
  { title: "UI & Visual Design", Progress: 90 },
];

// Define the interface for ProgressItem
interface ProgressItem {
  title: string;
  Progress: number;
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([]); // Initialize with ProgressItem[]
  useEffect(() => {
    // Fetch progress data or use static data (Progress array)
    setProgressValues(ProgressData);
  }, []);

  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? "dark:bg-darklight bg-section"
          : "dark:bg-darkmode bg-white"
      }`}
      id="about"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 items-center gap-7">
          <div className="md:col-span-6">
            <Image
              src="/images/work-progress/progress-work.png"
              alt="logo"
              width={375}
              height={0}
              quality={100}
              style={{ width: "100%", height: "auto" }}
              className="md:block hidden"
            />
          </div>
          <div
            className="md:col-span-6 text-left flex flex-col items-start"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex gap-2 justify-start">
              <span className="w-3 h-3 rounded-full bg-success"></span>
              <span className="font-medium text-midnight_text text-sm dark:text-white/50">
                build everything
              </span>
            </div>
            <h2 className="pt-9 pb-4 text-midnight_text font-bold dark:text-white items-center justify-center  text-3xl max-w-xl">
              Turning ideas into polished, high-performance digital products
            </h2>
            <p className="text-gray dark:text-white/70 text-base font-semibold max-w-2xl">
              I build fast, modern web experiences, create smart AI agents that
              automate business tasks, and design clean, user-friendly
              interfaces with strong visual appeal. My work combines technology
              and design to deliver simple, effective digital solutions.
            </p>

            <div className="block mx-auto pt-12 w-full">
              {progressValues.map((item, index) => (
                <div key={index} className="progress_bar_item mb-8 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-semibold text-midnight_text dark:text-white">
                      {item.title}
                    </span>
                    <span className="item_value text-base font-semibold text-primary">
                      {item.Progress}%
                    </span>
                  </div>
                  <div className="relative h-3 w-full bg-gray-200 dark:bg-darkmode rounded-full overflow-hidden">
                    <div
                      className="progress absolute left-0 top-0 h-full bg-linear-to-r from-primary to-blue-500 rounded-full shadow-md transition-all duration-700 ease-in-out"
                      style={{ width: `${item.Progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progresswork;
