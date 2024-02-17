import React from "react";
import SectionHeading from "./SectionHeading";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { faqs } from "@/constant";
import Accordion from "./Accordion";
import { SiLivechat } from "@icons-pack/react-simple-icons";

const FaqsSection = () => {
  return (
    <section
      className="max-width section-padding overflow-hidden"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <SectionHeading
        title="Frequently Asked Question"
        subtitle="Get answers to commonly asked questions about my services"
      />
      <div className="flex flex-col tablet:flex-row gap-5 items-start">
        <div className="box" data-aos="fade-right" data-aos-delay="200">
          <Accordion data={faqs} />
        </div>
        <div className="box flex flex-col gap-5 tablet:max-w-md">
          <div className="w-16 h-16 rounded bg-teal text-peach-100 flex items-center justify-center flex-shrink-0 mb-2">
            <SiLivechat size={35} />
          </div>
          <div>
            <h5 className="text-grey-700 mb-2">Still have any questions?</h5>
            <p className="text-grey-600 mb-5">
              Don&apos;t hesitate to get in touch with me for any queries,
              collaborations, or opportunities. I&apos;m always open to
              connecting and discussing how we can work together to achieve our
              goals.
            </p>
            <div data-aos="fade-left" data-aos-delay="200">
              <Link href={"/contact"} className="btn btn-primary w-max">
                Contact Me <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
