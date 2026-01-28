"use client";
import { partnerList } from "@/data/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PartnerSection() {
  return (
    <section className="w-full bg-blue-100 py-30">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-3xl font-bold text-center">Our Partners</h2>
          <p>
            We are committed to excellence in health care, driven by a passion
            for cardiac care and innovation.
          </p>
        </div>
        <div className="flex gap-8 p-4 md:p-0 py-2">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            {partnerList &&
              partnerList.map((item, index) => (
                <SwiperSlide key={index} className="my-8">
                  <div className="flex flex-col items-center gap-4 shadow-lg rounded-lg p-4 bg-blue-50">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={600}
                      height={600}
                      loading="lazy"
                      className="w-4/5 aspect-square rounded-full mx-auto my-1 shadow-md"
                    />
                    <h3 className="text-center text-xl my-1 font-bold">
                      {item.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
