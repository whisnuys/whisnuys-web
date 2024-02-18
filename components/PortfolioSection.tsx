"use client";
import { portfolios } from "@/constant";
import useWindowsSize from "@/hooks/useWindowsSize";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection = ({
  data,
  title,
}: {
  data: typeof portfolios;
  title: string;
}) => {
  const swiperRef = useRef<SwiperType>();
  const [slidesPerView, setSliderPerView] = useState(3);

  const { width } = useWindowsSize();

  useEffect(() => {
    if (width < 768) {
      setSliderPerView(1);
    } else if (width < 1268) {
      setSliderPerView(2);
    } else {
      setSliderPerView(3);
    }
  }, [width]);
  return (
    <section
      className="max-width section-padding"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="pb-3 border-b border-peach flex justify-between items-center ">
        <p>{title}</p>
        <div className="flex gap-2">
          <button
            className="bg-teal border border-teal p-1 rounded text-white hover:bg-teal-600 transition-colors duration-200"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft />
          </button>
          <button
            className="bg-teal border border-teal p-1 rounded text-white hover:bg-teal-600 transition-colors duration-200"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="pt-8" data-aos="fade-down" data-aos-delay="200">
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((portfolio, index) => (
            <SwiperSlide key={index}>
              <PortfolioItem portfolio={portfolio} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSection;
