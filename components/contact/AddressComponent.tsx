"use client";
import { containerVariants, itemVariants } from "@/utility/motionData";
import { motion } from "framer-motion";
export default function AddressComponent() {
  return (
    <motion.div initial="hidden" whileInView="visible">
      <motion.div variants={containerVariants} className="flex flex-col gap-8">
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Head Office</h3>
          <div className="text-base">
            <p>
              Address: House- 10/81/3, Modern Road, Dogair Notun Para, Word- 66,
              South City Corporation, Demra, Dhaka-1361
            </p>
            <p>Phone: +8801819227038</p>
            <p>Email: rhythmmedicalint@gmail.com</p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-2 ">
          <h3 className="text-lg font-semibold">Regional Office</h3>
          <div className="text-base">
            <p>
              Address: Hill View Society R/A, House- 27, Road- 1, Word-15,
              Panchlaish, Chattogram-4203
            </p>
            <p>Phone: +8801819227038</p>
            <p>Email: rhythmmedicalint@gmail.com</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
