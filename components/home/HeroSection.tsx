"use client";
import { animationData } from "@/data/animation/animationData";
import { heroWave } from "@/data/animation/heroWave";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const stats = [
    { value: "48k+", label: "Happy Patients" },
    { value: "290+", label: "Specialist Doctors" },
    { value: "97.3%", label: "Success Rate" },
    { value: "15+", label: "Year's Experience" },
  ];

  return (
    <section className="w-full bg-blue-50 dark:bg-gray-900 dark:text-white">
      <div className="w-full max-w-7xl mx-auto py-10 md:py-20 z-10">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="w-full lg:w-1/2 p-4 md:p-0 flex flex-col items-start"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight font-serif italic font-playfair">
              Rhythm Medical International
            </h2>

            <p className="mt-4 text-lg text-slate-600 font-merriweather italic">
              Leading the Future of Medical Technology and Healthcare Solutions.
              We are committed to providing compassionate care and innovative
              solutions to meet the evolving needs of our clients.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded mt-4 cursor-pointer animate-bounce hover:animate-none "
              >
                <Link href="/contact">Contact Us</Link>
              </motion.button>
            </div>

            <div className="mt-10 flex gap-8 items-end">
              {stats.map((s) => (
                <div key={s.label} className="text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-red-600">
                    {s.value}
                  </div>
                  <div className="text-sm text-blue-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Card with doctor image and socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="w-full md:w-1/2 p-4 md:p-0 flex justify-center items-center"
          >
            <div className="w-full max-w-400 max-h-150 bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/hero-image.png"
                alt="doctor"
                width={1200}
                height={1200}
                className="object-cover z-10"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Lottie
        animationData={heroWave}
        className="w-full h-auto absolute top-0 left-0 z-0 opacity-50 pointer-events-none"
      />
      <Lottie
        animationData={animationData}
        loop
        className="w-full h-full max-h-100 py-4 absolute left-0 md:-left-96 bottom-5 opacity-20 pointer-events-none"
      />
    </section>
  );
}
