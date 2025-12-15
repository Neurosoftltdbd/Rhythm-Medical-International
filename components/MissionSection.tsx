"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="bg-sky-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Mission */}
          <div className="w-full md:w-6/12">
            <div className="flex gap-4 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-emerald-50 text-emerald-600"
              >
                <Image
                  src="/mission.svg"
                  alt="Rhythm Medical International"
                  width={32}
                  height={32}
                />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="text-3xl font-extrabold text-gray-900 dark:text-white"
              >
                Our Mission
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Our mission is to harness our expertise and innovation to create
              any type of cardiac product and make it the market leader. We are
              committed to delivering high-quality, reliable, and advanced
              cardiac solutions that exceed customer expectations. By staying
              ahead of industry trends and constantly improving our offerings,
              we aim to provide unparalleled service and support to healthcare
              professionals and patients, ensuring that every product we offer
              is the number one choice in the market.
            </motion.p>
          </div>
          {/* Right: Vision */}
          <div className="w-full md:w-6/12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            >
              <Image
                src="/mission-image.jpg"
                alt="Rhythm Medical International"
                width={1200}
                height={1200}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
