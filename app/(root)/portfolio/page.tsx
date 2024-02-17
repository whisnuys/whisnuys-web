import PortfolioSection from "@/components/PortfolioSection";
import { portfolios } from "@/constant";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio - whisnuys",
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
          {/* <div className="w-16 h-16 rounded bg-teal flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
          </div> */}
          <h2 className="text-grey-700">My Portfolios</h2>
          <p className="text-grey-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fugit
            impedit sit, id itaque voluptates?
          </p>
        </div>
      </section>

      <PortfolioSection data={portfolios} title={"Projects Done"} />
    </>
  );
};

export default page;
