import FaqsSection from "@/components/FaqsSection";
import PortfolioItem from "@/components/PortfolioItem";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSection from "@/components/TestimonialSection";
import { benefits, portfolios, skills } from "@/constant";
import { ArrowRight, Phone } from "lucide-react";
import {
  SiTailwindcss,
  SiDart,
  SiLaravel,
  SiPhp,
  SiWordpress,
  SiFlutter,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiMysql,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p
              className="px-4 py-2 bg-peach-400 text-grey-600 w-max rounded"
              data-aos="fade-down"
            >
              Hello There 👋
            </p>
            <h1
              className="text-grey text-5xl"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              I am Whisnu Yudha Saputra <br />
              <span className="text-teal text-4xl">
                Web & Mobile App Developer
              </span>
            </h1>
          </div>
          <div
            className="flex gap-5 mt-10 justify-center tablet:justify-start"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <Link href={"/portfolio"} className="btn btn-primary">
              View Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* skills */}
          <div
            className="bg-peach-400 w-full py-8 px-10 rounded-lg mt-16 flex-wrap gap-12 hidden tablet:flex"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div>
              <SiDart size={32} />
            </div>
            <div>
              <SiFlutter size={32} />
            </div>
            <div>
              <SiJavascript size={32} />
            </div>
            <div>
              <SiReact size={32} />
            </div>
            <div>
              <SiNextdotjs size={32} />
            </div>
            <div>
              <SiTailwindcss size={32} />
            </div>
            <div>
              <SiPhp size={32} />
            </div>
            <div>
              <SiLaravel size={32} />
            </div>
            <div>
              <SiWordpress size={32} />
            </div>
            <div>
              <SiFigma size={32} />
            </div>
          </div>
          {/* <div
            className=" mt-16 grid grid-cols-2 gap-3 tablet:hidden"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                55 <span className="text-teal">+</span>
              </h3>
              <p className="text-grey-600">Projects Completed</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                55 <span className="text-teal">+</span>
              </h3>
              <p className="text-grey-600">Happy Customers</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                2 <span className="text-teal">+</span>
              </h3>
              <p className="text-grey-600">Years of Experience</p>
            </div>
          </div> */}
          <div
            className=" mt-16 grid grid-cols-2 gap-3 tablet:hidden"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div className="py-8 px-10 gap-5 rounded-lg bg-peach-400 text-center col-span-2 flex flex-row justify-center items-center">
              <SiDart size={32} />
              <SiFlutter size={32} />
              <SiJavascript size={32} />
              <SiReact size={32} />
              <SiNextdotjs size={32} />
            </div>
            <div className="py-8 px-10 gap-5 rounded-lg bg-peach-400 text-center col-span-2 flex flex-row justify-center items-center">
              <SiTailwindcss size={32} />
              <SiPhp size={32} />
              <SiLaravel size={32} />
              <SiWordpress size={32} />
              <SiFigma size={32} />
            </div>
          </div>
        </div>
        <div
          className="relative hidden tablet:block tablet:w-1/3 h-[400px] tablet:h-[750px] rounded-b-2xl overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={"/images/s1.png"}
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        className="max-width section-padding"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <SectionHeading
          title="Services"
          subtitle="Crafting Solutions for Today's Challenges, Building Tomorrow's Future"
        />
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded bg-teal flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={35}
                  height={35}
                />
              </div>
              <div className="text-center">
                <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section
        className="max-width section-padding"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <SectionHeading
          title="Benefits"
          subtitle="lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {benefits.slice(2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Portfolio Section */}
      <section
        className="section-padding max-width"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <SectionHeading
          title={"Projects"}
          subtitle="A showcase of my latest project"
        />
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {portfolios.slice(0, 3).map((portfolio, index) => (
            <PortfolioItem key={index} portfolio={portfolio} />
          ))}
        </div>
        <Link
          href={"/portfolio"}
          className="btn btn-primary mt-10 mx-auto w-max"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          View All Projects
        </Link>
      </section>

      {/* Testimonial Section */}
      {/* <TestimonialSection /> */}

      {/* FAQs Section */}
      <FaqsSection />
    </>
  );
};
export default page;
