"use client";
import { testimonials } from "@/data/data";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-gray-100 py-30">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Hear from hospitals and healthcare professionals who trust our
            products and services.
          </p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={32}
          className="py-8"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
        >
          {testimonials.map((t) => (
            <SwiperSlide
              key={t.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full"
            >
              <blockquote className="text-gray-800 mb-4 flex-1">
                <p className="text-sm md:text-base">“{t.message}”</p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  {t.imageUrl ? (
                    // use next/image for optimization when images exist in /public
                    <Image
                      src={t.imageUrl}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-gray-600">
                      {t.name
                        .split(" ")
                        .map((s) => s[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                  <div className="mt-1 flex items-center text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating
                            ? "fill-current"
                            : "stroke-current text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.897 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
