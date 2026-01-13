"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-32 xl:pt-40 2xl:pt-48 pb-16 lg:pb-20 xl:pb-24 2xl:pb-32 bg-white dark:bg-darklight">
      <div className="container mx-auto max-w-7xl xl:max-w-6xl 2xl:max-w-7xl px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Content */}
          <div
            className="space-y-6 lg:space-y-8 xl:space-y-10 flex flex-col items-start justify-center"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex gap-2 items-center pt-10">
              <span className="w-3 h-3 rounded-full bg-success"></span>
              <span className="text-overline text-midnight_text dark:text-white/60">
                Online 24/7
              </span>
            </div>

            <h1 className="text-midnight_text font-bold dark:text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl lg:leading-tight xl:leading-tight 2xl:leading-tight tracking-tight">
              Delivering Clean Code, Sharp Design, Real Results
            </h1>

            <p className="text-body-large text-grey dark:text-white/75 max-w-lg lg:max-w-md xl:max-w-xl">
              I'm Daysman Gad, a developer who blends AI, code, and digital
              strategy to create smart, scalable solutions for business.
            </p>

            <div className="w-full flex justify-end lg:justify-start">
              <a
                href="#learn-more"
                className="btn-text-primary py-3 px-8 lg:py-4 lg:px-10 xl:py-4 xl:px-12 2xl:py-5 2xl:px-14 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </a>
            </div>

            <div className="flex items-center gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 pt-4 lg:pt-6 xl:pt-8 2xl:pt-10">
              <div className="flex items-center">
                <Image
                  src="https://i.pinimg.com/736x/a1/3f/e5/a13fe593cd044397afc8ce5d47598333.jpg"
                  alt="hero-image"
                  width={40}
                  height={40}
                  quality={100}
                  className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full border-2 border-white"
                />
                <Image
                  src="/images/hero/hero-profile-3.jpg"
                  alt="hero-image"
                  width={40}
                  height={40}
                  quality={100}
                  className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full border-2 border-white -ml-3 lg:-ml-4 xl:-ml-5 2xl:-ml-6"
                />
              </div>
              <div>
                <p className="text-body text-grey dark:text-white/75 max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg">
                  Need help?{" "}
                  <Link href="#" className="link-primary">
                    Contact my team
                  </Link>{" "}
                  Tell us about your project
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:right-0 before:top-0 before:h-24 lg:before:h-32 xl:before:h-40 2xl:before:h-48 before:w-52 lg:before:w-64 xl:before:w-80 2xl:before:w-96 before:-z-10 before:translate-x-1/4 before:-translate-y-1/2 lg:before:block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat after:left-0 after:bottom-0 after:h-24 lg:after:h-32 xl:after:h-40 2xl:after:h-48 after:w-24 lg:after:w-32 xl:after:w-40 2xl:after:w-48 after:-z-10 after:-translate-x-1/4 after:translate-y-1/4 lg:after:block after:hidden">
              <Image
                src="https://i.pinimg.com/736x/5d/19/fa/5d19fa202c73792fc36d12df1aa5ab1a.jpg"
                alt="hero-image"
                width={600}
                height={450}
                quality={100}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
