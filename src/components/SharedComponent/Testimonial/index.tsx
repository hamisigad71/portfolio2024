import React from "react";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Daysman was a fantastic experience. His expertise and professionalism were evident from day one, delivering a high-quality product on time.",
      name: "Mary Okech",
      role: "Manager at Innovate Inc.",
      image:
        "https://i.pinimg.com/736x/ad/6b/b5/ad6bb58a9bf8a7384e52f5857e8d8eac.jpg",
    },
    {
      id: 2,
      quote:
        "An exceptional problem-solver who brought our vision to life. The attention to detail and commitment to the project's success were truly impressive.",
      name: "Mr Fred",
      role: "Project Manager at Sapio Homes",
      image:
        "https://i.pinimg.com/1200x/3a/66/0d/3a660d0d81d43cccc452c5a4bd913d80.jpg",
    },
    {
      id: 3,
      quote:
        "The communication was clear, the code was clean, and the final result exceeded our expectations. I would highly recommend them to anyone.",
      name: "Emily kiti",
      role: "Lead Designer at Creative Solutions",
      image:
        "https://i.pinimg.com/1200x/8c/aa/06/8caa06bd2ad653a781851d330de0fa22.jpg",
    },
  ];

  return (
    <section
      className="scroll-mt-24 bg-section dark:bg-darklight border-none"
      id="testimonials"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-[#1D2939] dark:text-gray-100 text-3xl md:text-4xl font-bold tracking-tight">
            What My Clients Say
          </h2>
          <p className="mt-4 text-[#667085] dark:text-gray-400 text-lg">
            Trusted by professionals from leading companies.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-6 rounded-xl bg-section dark:bg-darklight border border-gray-200 dark:border-gray-700 p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="material-symbols-outlined text-primary text-4xl">
                format_quote
              </span>
              <p className="text-[#1D2939] dark:text-gray-200 text-base font-normal leading-relaxed grow">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={`Professional headshot of ${testimonial.name}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#1D2939] dark:text-gray-100 text-base font-semibold leading-normal">
                    {testimonial.name}
                  </p>
                  <p className="text-[#667085] dark:text-gray-400 text-sm font-normal leading-normal">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex pt-16 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Work With Me</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
