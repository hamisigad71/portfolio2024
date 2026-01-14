"use client";
import React, { useEffect, useState } from "react";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
}

const counterData: CounterItem[] = [
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 100, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Years of Experience", suffix: "+" },
  { value: 200, label: "Code Commits", suffix: "k+" },
];

const Counter = () => {
  const [counts, setCounts] = useState<number[]>(counterData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = counterData.map((item) => item.value / steps);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounts(
          counterData.map((item, index) =>
            Math.floor(increment[index] * currentStep)
          )
        );
      } else {
        setCounts(counterData.map((item) => item.value));
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-darkmode py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {counterData.map((item, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="1000"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-blue-400 mb-2">
                {counts[index]}
                {item.suffix}
              </h3>
              <p className="text-sm md:text-base text-grey dark:text-white/70 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
 