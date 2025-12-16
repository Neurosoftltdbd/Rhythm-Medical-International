"use client";
import { animationData } from "@/data/animationData";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
export default function HeroSection() {
  const stats = [
    { value: "50k+", label: "Happy Patients" },
    { value: "350+", label: "Specialist Doctors" },
    { value: "98%", label: "Success Rate" },
    { value: "15+", label: "Year's Experience" },
  ];

  return (
    <section className="w-full bg-green-50 py-10 md:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="w-full lg:w-7/12 relative p-4 md:p-0 flex flex-col items-start"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-green-700 leading-tight font-poppins">
              Rhythm Medical International
            </h2>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Leading the Future of Medical Technology and Healthcare Solutions
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded mt-8 cursor-pointer animate-bounce hover:animate-none "
              >
                Get Started
              </motion.button>
            </div>

            <div className="mt-10 flex gap-8 items-end">
              {stats.map((s) => (
                <div key={s.label} className="text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600">
                    {s.value}
                  </div>
                  <div className="text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
            <Lottie
              animationData={animationData}
              loop={true}
              autoPlay
              className="w-full h-full max-h-120 absolute mt-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
            />
          </motion.div>

          {/* Right: Card with doctor image and socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="w-full md:w-6/12 p-4 md:p-0 flex justify-center items-center"
          >
            <div className="relative">
              <div className="w-full max-w-150 max-h-130 bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/hero-image.png"
                  alt="doctor"
                  width={600}
                  height={600}
                  className="object-cover "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
