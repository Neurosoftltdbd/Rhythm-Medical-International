"use client";
import { team } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurTeamSection() {
  return (
    <section className="w-full bg-sky-50">
      <div className="w-full max-w-7xl mx-auto items-center">
        <div className="py-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="text-center mb-4 "
          >
            Meet the dedicated professionals who make Rhythm Medical
            International a leader in healthcare innovation.
          </motion.p>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            {team.map((member) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                key={member.name}
                className="w-full md:w-1/4 p-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <Image
                    className="w-60 h-60 rounded-full mx-auto mb-4"
                    src={member.imageUrl}
                    alt={member.name}
                    width={200}
                    height={200}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                    <p className="text-gray-600">{member.phone}</p>
                    <p className="text-gray-600">{member.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
