import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/constant";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About - whisnuys",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
        <div
          className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <Image
            src={"/images/hero.png"}
            fill
            alt="about-img"
            className="object-cover"
          />
        </div>
        <div className="tablet:w-1/2" data-aos="fade-left" data-aos-delay="100">
          <div className="space-y-3 max-tablet:text-center flex flex-col">
            <p className="px-4 py-2 bg-peach-400 text-grey-600 w-max rounded tablet:w-max max-tablet:mx-auto">
              🇮🇩 ID - Indonesia
            </p>
            <h1 className="text-grey-700">I&apos;m Whisnu Yudha Saputra</h1>
            <p className="text-grey-600 text-justify">
              {`Hi, I'm Whisnu, I'm a highly passionate individual with a strong
              affinity for both technology and marketing. Technology, with its
              constant evolution and innovation, has always fascinated me. As I
              delved deeper into the realm of technology. I became an avid
              learner, constantly exploring new advancements, programming
              languages, and emerging technologies. Simultaneously, I developed
              a keen interest in marketing. The ability to understand consumer
              behavior, analyze market trends, and effectively communicate with
              target audiences fascinated me. I recognized that technology and
              marketing go hand in hand in today's digital age. The convergence
              of the two has reshaped the way businesses operate and connect
              with their customers. Now, I have the tools to support me in
              building responsive web and cross-platform mobile apps. I will try
              my best to do the job efficiently and on time by producing clean
              code. It is essential for me to build long-term relationships with
              my clients.`}
            </p>
            <Link
              href={"/pdfs/whisnucv.pdf"}
              download={"whisnucv.pdf"}
              target="_blank"
              className="btn btn-primary tablet:w-max hover:bg-teal-600 transition-colors duration-200"
            >
              Download CV
            </Link>
          </div>
          <div className=" bg-peach-400 rounded-lg tablet:rounded-none tablet:bg-transparent tablet:border-t-2 tablet:border-b-2 tablet:border-teal w-full py-8 px-10 mt-14 tablet:mt-16 gap-12 flex flex-col tablet:flex-row">
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                3 <span className="text-teal">+</span>
              </h3>
              <p className="text-grey-600">Projects Completed</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                1 <span className="text-teal">+</span>
              </h3>
              <p className="text-grey-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section
        className="max-width section-padding"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <SectionHeading
          title="Timeline"
          subtitle="A Journey Through Professional Growth and Achievements"
        />
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-teal before:bg-opacity-30">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1 tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2 group-first:before:absolute group-first:before:w-1 group-first:before:h-20 group-first:before:bottom-full  group-last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full group-last:before:top-full ">
                <span
                  className="w-3 h-3 bg-teal rounded-full"
                  data-aos="fade-down"
                  data-aos-delay="100"
                ></span>
              </div>
              <div
                className="w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h6 className="text-grey-700">{item.title}</h6>
                  <p className="font-semibold text-teal">{item.duration}</p>
                </div>
                <div className="text-grey-600 ">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
