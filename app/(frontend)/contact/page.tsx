"use client";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="my-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="text-4xl font-bold text-center mb-2"
          >
            Contact
          </motion.h2>
          <hr />
        </motion.div>
        <div className="flex md:flex-row flex-col gap-24 p-4 md:p-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="flex flex-col w-full md:w-1/2 gap-4"
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="flex flex-col w-full md:w-1/2 gap-12"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Head Office</h3>
              <div className="text-base">
                <p>
                  Address: House- 10/81/3, Modern Road, Dogair Notun Para, Word-
                  66, South City Corporation, Demra, Dhaka-1361
                </p>
                <p>Phone: +8801819227038</p>
                <p>Email: rhythmmedicalint@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="text-lg font-semibold">Regional Office</h3>
              <div className="text-base">
                <p>
                  Address: Hill View Society R/A, House- 27, Road- 1, Word-15,
                  Panchlaish, Chattogram-4203
                </p>
                <p>Phone: +8801819227038</p>
                <p>Email: rhythmmedicalint@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
