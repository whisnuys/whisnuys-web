import FaqsSection from "@/components/FaqsSection";
import { socialLinks } from "@/constant";
import { Metadata } from "next";
import React from "react";
import SendEmail from "@/components/SendEmail";

export const metadata: Metadata = {
  title: "Contact - whisnuys",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div
          className="box text-center flex flex-col gap-3"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 className="text-grey-700">Feel free to ask me anything.</h2>
          <p className="text-grey-600">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>
      </section>
      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div
          className="tablet:max-w-md w-full"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="space-y-4">
            <div className="box !p-6">
              <p className="text-grey-600">You can Email Me here</p>
              <h6 className="text-grey-700">whisnusaputra30@gmail.com</h6>
            </div>
            <div className="box !p-6">
              <p className="text-grey-600">You can message me on telegram</p>
              <h6 className="text-grey-700">@whisnuys</h6>
            </div>
            <div className="box !p-6">
              <p className="text-grey-600">Location</p>
              <h6 className="text-grey-700">
                Purwokerto, Central Java, Indonesia
              </h6>
            </div>
          </div>
          <h6 className="mt-10 mb-3 text-grey-700 max-tablet:text-center">
            My Social Profiles
          </h6>
          <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                target="_blank"
                className="w-10 h-10 bg-teal text-white flex items-center justify-center rounded hover:bg-teal-600 transition-colors duration-200"
              >
                <link.icon strokeWidth={0} fill="currentColor" />
              </a>
            ))}
          </div>
        </div>
        <div className="box w-full" data-aos="fade-left" data-aos-delay="200">
          <SendEmail />
        </div>
      </section>

      <FaqsSection />
    </>
  );
};

export default page;
