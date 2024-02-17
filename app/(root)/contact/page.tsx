import FaqsSection from "@/components/FaqsSection";
import { socialLinks } from "@/constant";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact - whisnuys",
};

const page = () => {
  return (
    <>
      <section
        className="max-width section-padding"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="box text-center flex flex-col gap-3">
          <h2 className="text-grey-700">Feel free to ask me anything.</h2>
          <p className="text-grey-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fugit
            impedit sit, id itaque voluptates?
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
              <p className="text-grey-600">Give Me a Call on Telegram</p>
              <h6 className="text-grey-700">@whisnuys</h6>
            </div>
            <div className="box !p-6">
              <p className="text-grey-600">Location</p>
              <h6 className="text-grey-700">
                Purwokerto, Jawa Tengah, Indonesia
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
                className="w-10 h-10 bg-teal text-white flex items-center justify-center rounded"
              >
                <link.icon strokeWidth={0} fill="currentColor" />
              </a>
            ))}
          </div>
        </div>
        <div className="box w-full" data-aos="fade-left" data-aos-delay="200">
          <form action="" className="space-y-5">
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea
              placeholder="Message"
              className="min-h-[200px]"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </section>

      <FaqsSection />
    </>
  );
};

export default page;
