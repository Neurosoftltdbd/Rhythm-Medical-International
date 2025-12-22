"use client";
import { achivements } from "@/data/data";
import Lottie from "lottie-react";

export default function AchivementSection() {
  return (
    <div className="w-full bg-amber-50">
      <div className="w-full max-w-7xl mx-auto py-12 px-4 md:px-0">
        <div className=" my-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Our Achievements
          </h2>
          <p>
            We are dedicated to excellence and innovation in healthcare services
            and technology. Our team of professionals is committed to providing
            the highest quality care to our patients.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-16 pb-12">
          {achivements &&
            achivements.map((item, index) => (
              <div
                key={index}
                className="w-full bg-blue-50 shadow-lg rounded-lg p-4"
              >
                <div className="w-3/4 mx-auto flex items-center justify-center">
                  <Lottie animationData={item.animation} loop={true} />
                </div>
                <h3 className="px-4 text-3xl font-semibold text-center">
                  {item.title}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
